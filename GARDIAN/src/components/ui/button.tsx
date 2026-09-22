import { cloneElement, isValidElement, type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  size?: "default" | "lg";
  variant?: "default" | "outline";
  children: ReactNode;
};

export function Button({ asChild, size = "default", variant = "default", className = "", children, ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-4 font-semibold transition-colors ${size === "lg" ? "h-12" : "h-10"} ${variant === "outline" ? "border border-input bg-transparent" : "bg-primary text-primary-foreground"} ${className}`;
  if (asChild && isValidElement<{ className?: string }>(children)) {
    return cloneElement(children, { className: `${classes} ${children.props.className ?? ""}` });
  }
  return <button className={classes} {...props}>{children}</button>;
}