import React, { useRef } from 'react';
import { Upload, X } from 'lucide-react';

interface ImageUploaderProps {
  imgUrl: string | undefined;
  setImgUrl: (url: string | undefined) => void;
  title: string;
}

const ImagePicker: React.FC<ImageUploaderProps> = ({ imgUrl, setImgUrl: setImageUrl, title }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check if file is an image
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageUrl(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file');
      }
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImageUrl(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-sm font-medium text-gray-900 mb-3">{title}</h3>
      
      <div className="relative">
        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />

        {/* Upload area */}
        <div
          onClick={handleClick}
          className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 cursor-pointer transition-colors bg-gray-50 hover:bg-gray-100"
        >
          {imgUrl ? (
            // Image preview
            <div className="relative">
              <img
                src={imgUrl}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg object-cover"
              />
              
              {/* Remove button */}
              <button
                onClick={handleRemove}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                title="Remove image"
              >
                <X size={16} />
              </button>
              
              {/* Change image overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">Change Image</span>
              </div>
            </div>
          ) : (
            // Upload placeholder
            <div className="space-y-4">
              <div className="flex justify-center">
                <Upload className="h-12 w-12 text-gray-400" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-700">Select Image</p>
                <p className="text-sm text-gray-500 mt-1">
                  Click to browse or drag and drop
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG, JPEG up to 10MB
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;