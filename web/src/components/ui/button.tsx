import {
  ButtonHTMLAttributes,
  cloneElement,
  forwardRef,
  isValidElement,
  type ReactElement,
} from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  asChild?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus:ring-blue-500",
  ghost:
    "border-neutral-200 bg-white text-neutral-800 shadow-sm hover:bg-neutral-100 focus:ring-neutral-300",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", asChild, children, ...props },
  ref
) {
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      ...props,
      className: clsx(baseClasses, variantClasses[variant], className, children.props.className),
    });
  }

  return (
    <button
      ref={ref}
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
});

export { Button };
