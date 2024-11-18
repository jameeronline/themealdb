import PropTypes from "prop-types";
import { cn } from "src/utils/helperFunctions";

export default function Container({ children, className, ...props }) {
  return (
    <div className={cn("xl:container mx-auto px-4", className)} {...props}>
      {children}
    </div>
  );
}

// Container.propTypes = {
//   children: PropTypes.node.isRequired,
//   className: PropTypes.string,
// };

// Container.defaultProps = {
//   className: "",
// };
