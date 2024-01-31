import { Fragment } from "react";
import PropTypes from "prop-types";

export default function Instructions({ instructions }) {
  return (
    <>
      {instructions != null && (
        <>
          <h4 className="text-3xl font-display font-bold mb-8">Instuctions</h4>
          <ol className="space-y-8 list-inside list-none">
            {instructions.split("\r\n").map((item, index) => (
              <Fragment key={index}>
                {item.length > 6 && (
                  <li className="flex gap-4">
                    <span className="shrink-0 inline-flex w-8 h-8 bg-primary-500 text-white rounded-full items-center justify-center">
                      {index + 1}
                    </span>
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
