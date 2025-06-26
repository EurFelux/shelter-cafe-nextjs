import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { twMerge } from "tailwind-merge";

const spinnerVariants = cva(
  "animate-spin rounded-full border-solid border-current border-r-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4 border-2",
        md: "h-6 w-6 border-3",
        lg: "h-8 w-8 border-4",
      },
      color: {
        primary: "text-blue-500",
        secondary: "text-gray-500",
        success: "text-green-500",
        danger: "text-red-500",
      },
    },
    defaultVariants: {
      size: "md",
      color: "primary",
    },
  }
);

type SpinnerVariants = VariantProps<typeof spinnerVariants>;

interface LoadingSpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    Omit<SpinnerVariants, "color"> {
  label?: string;
  labelPosition?: "left" | "right" | "top" | "bottom";
  color?: SpinnerVariants["color"]; // 单独定义 color 属性
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size,
  color,
  className,
  label,
  labelPosition = "right",
  ...props
}) => {
  const spinnerClasses = twMerge(spinnerVariants({ size, color }), className);

  const getLabelPositionClasses = () => {
    switch (labelPosition) {
      case "left":
        return "flex-row-reverse";
      case "top":
        return "flex-col-reverse";
      case "bottom":
        return "flex-col";
      default:
        return "flex-row";
    }
  };

  if (label) {
    return (
      <div
        className={`flex items-center justify-center gap-2 ${getLabelPositionClasses()}`}
        {...props}
      >
        <div className={spinnerClasses} />
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {label}
        </span>
      </div>
    );
  }

  return <div className={spinnerClasses} {...props} />;
};
