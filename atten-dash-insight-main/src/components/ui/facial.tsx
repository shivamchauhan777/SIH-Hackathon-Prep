import React from "react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";

const FacialAttendanceToaster = (props) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="facial-attendance-toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.facial-attendance-toaster]:bg-background group-[.facial-attendance-toaster]:text-foreground group-[.facial-attendance-toaster]:border-border group-[.facial-attendance-toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { FacialAttendanceToaster, toast };