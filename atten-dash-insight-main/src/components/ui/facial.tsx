import React from "react";
import { Toaster as Sonner, toast } from "sonner";

// Remove next-themes; use a prop or default theme
const FacialAttendanceToaster = (props) => {
  // Default theme to system, or get from props
  const theme = props.theme || "system";

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