import { twMerge } from "tailwind-merge";

export default function Container({ children, className, ...props }) {
  return (
    <div className={twMerge(`xl:container mx-auto px-4`, className)} {...props}>
      {children}
    </div>
  );
}
