import { Fragment } from "react";
import PropTypes from "prop-types";

export default function Instructions({ instructions }) {
  return (
    <>
      {instructions != null && (
        <>
          <h4 className="text-lg font-bold mb-6">Instuctions:</h4>
          <ol className="list-decimal space-y-4 list-inside">
            {instructions.split("\r\n").map((item, index) => (
              <Fragment key={index}>
                {item.length > 6 && (
                  <li>
                    <p>{item}</p>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </>
      )}
    </>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.string.isRequired,
};
