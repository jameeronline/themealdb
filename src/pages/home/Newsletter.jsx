import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import InlineSpinner from "src/components/common/InlineSpinner";
import SimpleModal from "src/components/SimpleModal";

//help functions
import { validateEmail } from "src/utils/helperFunc";

import { Link } from "react-router-dom";
import { Container } from "src/components/shared";

export default function Newsletter() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const emailRef = useRef(null);

  useEffect(() => emailjs.init(`${import.meta.env.VITE_VERCEL_EMAIL_JS}`), []);

  const handleNewsLetter = async (e) => {
    e.preventDefault();

    if (!validateEmail(emailRef.current.value)) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    const serviceId = "contact_email_react";
    const templateId = "newsletter";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        reply_to: emailRef.current.value,
      });
      setSuccess((preVal) => !preVal);

      //reset the entry
      emailRef.current.value = "";
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleModalClose = () => {
    setSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value);
  };

  return (
    <Container className="my-10">
      <section className="py-16">
        <div className=" bg-secondary-100 text-slate-900 rounded-2xl flex flex-col items-center text-center sm:py-12 sm:px-6 md:py-18">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-semibold mb-10 md:text-7xl">
              Deliciousness <br />
              to your inbox
            </h2>

            <p className="mt-4 text-xl font-normal text-slate-500">
              Enjoy weekly hand picked recipes and recommendations
            </p>
          </div>

          <form
            className="mt-8 flex justify-center w-full flex-col gap-2 sm:w-auto"
            onSubmit={handleNewsLetter}
            noValidate
          >
            {success && (
              <SimpleModal
                show={success}
                message="Thanks for your support to subscribe."
                handleModalClose={handleModalClose}
              />
            )}
            {/* <div>
              <label
                htmlFor="name"
                className="sr-only block font-semibold text-heading"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                ref={nameRef}
                required
                placeholder="Ex: John Deo"
                className="block w-80 rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
              />
            </div> */}
            <div className="flex bg-white rounded overflow-hidden mb-4">
              <label
                htmlFor="email"
                className="sr-only block font-semibold text-heading"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                ref={emailRef}
                required
                placeholder="Ex: example@example.com"
                className="block w-80 rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
              />
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center border-0 border-secondary-500 bg-secondary-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-secondary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
              >
                {loading && <InlineSpinner className="stroke-secondary-200" />}
                Join & Subscribe
              </button>
            </div>
            <span className="text-xs text-slate-500">
              By joining our newsletter you agree to our{" "}
              <Link
                to="/terms"
                className=" underline decoration-secondary-400 hover: text-secondary-700"
              >
                Terms and Conditions
              </Link>
            </span>
          </form>
        </div>
      </section>
    </Container>
  );
}
