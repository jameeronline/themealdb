import PropTypes from "prop-types";
import { cn } from "src/utils/helperFunctions";

export function Input({ type = "text", ...props }) {
  return (
    <input
      type={type}
      className={cn(
        "block w-full border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
      )}
      {...props}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
};
