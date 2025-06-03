import ChangeEmailForm from "@/components/Dashboard/Settings/ChangeEmailForm";
import PasswordChangeForm from "@/components/Dashboard/Settings/PasswordChangeForm";

import React from "react";

const Settings: React.FC = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-xl font-semibold">Account Settings</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <ChangeEmailForm />
        <PasswordChangeForm />
      </div>
    </div>
  );
};

export default Settings;
