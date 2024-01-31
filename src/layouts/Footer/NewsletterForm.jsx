import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import InlineSpinner from "src/components/common/InlineSpinner";
import SimpleModal from "src/components/SimpleModal";

//help functions
import { validateEmail } from "src/utils/helperFunc";

//Lables
import { FOOTER_LBL } from "src/labels";

export default function NewsletterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const emailRef = useRef(null);

  const LABELS = FOOTER_LBL.NEWSLETTER;

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

  return (
    <form onSubmit={handleNewsLetter} className="md:max-w-md" noValidate>
      {success && (
        <SimpleModal
          show={success}
          message="Thanks for your support to subscribe."
          handleModalClose={handleModalClose}
        />
      )}
      <p className="mb-8">{LABELS.DESC}</p>
      <div className="flex flex-col md:flex-row gap-1 mb-2">
        <label className="sr-only" htmlFor="newsletter-email">
          {LABELS.INPUT_LBL}
        </label>
        <input
          autoComplete="off"
          type="email"
          ref={emailRef}
          id="newsletter-email"
          placeholder={LABELS.INPUT_PLACEHOLDER}
          className="block w-full rounded bg-muted-1 px-4 py-3 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
        />

        <button
          type="submit"
          className="inline-flex gap-4 cursor-pointer items-center justify-center rounded border-0 border-secondary-500 bg-secondary-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
        >
          {loading && <InlineSpinner />}
          {LABELS.BTN_LBL}
        </button>
      </div>
      {error && (
        <div className="w-full py-2 text-sm text-pink-500 mb-2" role="alert">
          <p>{LABELS.VALIDATE_MSG}</p>
        </div>
      )}
      <p className="text-sm text-slate-500 hidden">{LABELS.TERMS}</p>
    </form>
  );
}
