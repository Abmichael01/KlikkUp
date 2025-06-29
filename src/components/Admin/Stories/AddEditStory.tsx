import type React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useAddStory, useUpdateStory } from "@/api/mutations";
import LoadingAnimation from "@/components/LoadingAnimation";
import { BookOpen, Gift, Timer } from "lucide-react";
import type { Story } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { useDialog } from "@/hooks/useDialog";
import { useEffect, useState } from "react";
import ImagePicker from "../ImagePicker";
import { toast } from "sonner";
import errorMessage from "@/api/errorMessage";

const formSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Title cannot be less than 5 chars" })
    .max(225, { message: "Title cannot exceed 225 chars" }),
  body: z.string().min(20, {
    message: "Body is required and must be at least 20 characters",
  }),
  reward: z.coerce.number().min(1, "Reward cannot be lesser than 1"),
  estimated_time: z.coerce.number().min(1, "Reward cannot be lesser than 1"),
  banner: z.string().optional(),
});

interface AddEditStoryProps {
  data?: Story;
  update?: boolean;
}

const AddEditStory: React.FC<AddEditStoryProps> = ({ data, update }) => {
  const [imgUrl, setImgUrl] = useState<string>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: update ? data?.title : "",
      body: update ? data?.body : "",
      reward: update ? data?.reward : 500,
      estimated_time: update ? data?.estimated_time : 1,
      banner: imgUrl,
    },
  });
  const { isDirty } = form.formState;
  const { mutate: addStory, isPending: adding } = useAddStory();
  const { mutate: updateStory, isPending: updating } = useUpdateStory();
  const queryClient = useQueryClient();
  const { setOpen: setUpdateDialog } = useDialog("updateStory");
  const { setOpen: setAddDialog } = useDialog("addStory");

  const [body, setBody] = useState(form.getValues("body") || "");

  console.log(data)
  useEffect(() => {
    if (imgUrl !== form.getValues("banner")) {
      form.setValue("banner", imgUrl || "", { shouldDirty: true });
    }
  }, [imgUrl, form]);

  useEffect(() => {
    setImgUrl(data?.banner);
  }, [setImgUrl, data]);

  type FormField = {
    name: "title" | "reward" | "body" | "estimated_time";
    placeholder: string;
    type: string;
    icon: React.ReactNode;
  };

  const formFields: FormField[] = [
    {
      name: "title",
      type: "text",
      placeholder: "Title",
      icon: <BookOpen />,
    },
    {
      name: "body",
      type: "text",
      placeholder: "Write the story here",
      icon: <BookOpen />,
    },
    {
      name: "reward",
      type: "number",
      placeholder: "Reward e.g 500",
      icon: <Gift />,
    },
    {
      name: "estimated_time",
      type: "text",
      placeholder: "Estimated Time",
      icon: <Timer />,
    },
  ];

  function onSubmit(values: Story) {
    
    const mutate = data ? updateStory : addStory;
    const payload = {
      ...values,
      id: data?.id,
      banner: imgUrl && imgUrl.trim() !== "" ? imgUrl : undefined,
    };
    mutate(
      payload,
      {
        onSuccess: () => {
          toast.success(`Story ${data ? "updated" : "created"} successfully`);
          queryClient.invalidateQueries({ queryKey: ["stories"] });
          if (data) {
            setUpdateDialog(false);
          } else {
            setAddDialog(false);
          }
        },
        onError: (error: Error) => {
          toast.error(errorMessage(error));
        },
      }
    );
  }

  return (
    <div className="max-h-[70vh] overflow-y-auto p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <ImagePicker
            imgUrl={imgUrl}
            setImgUrl={setImgUrl}
            title="Upload Banner"
          />
          {formFields.map((formField, index) =>
            formField.name !== "body" ? (
              <FormField
                key={index}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="bg-white px-4 rounded-lg flex items-center gap-2 border">
                        <div className="text-primary [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-sm">
                          {formField.icon}
                        </div>
                        <input
                          placeholder={formField.placeholder}
                          type={formField.type}
                          {...field}
                          className="w-full border-0 py-3 bg-transparent outline-none text-foreground/80"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : formField.name === "body" ? (
              <FormItem key={index}>
                <FormControl>
                  <div className="editor-wrapper">
                    <ReactQuill
                      theme="snow"
                      value={body}
                      onChange={(value) => {
                        setBody(value);
                        form.setValue("body", value, { shouldValidate: true });
                      }}
                      placeholder="Write your story here..."
                      modules={{
                        toolbar: [
                          [{ header: [1, 2, 3, 4, 5, 6, false] }],
                          ["bold", "italic", "underline", "strike"],
                          [{ list: "ordered" }, { list: "bullet" }],
                          ["link", "image"],
                        ],
                      }}
                      className="flex flex-col h-full"
                    />
                  </div>
                </FormControl>
                <FormMessage>{form.formState.errors.body?.message}</FormMessage>
              </FormItem>
            ) : (
              ""
            )
          )}
          <Button type="submit" disabled={adding || updating || !isDirty}>
            {adding || updating ? (
              <LoadingAnimation size="small" />
            ) : data ? (
              "Update Story"
            ) : (
              "Add Story"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEditStory;
