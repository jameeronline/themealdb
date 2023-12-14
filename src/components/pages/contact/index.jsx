import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const emailRef = useRef(); //{{reply_to}}
  const nameRef = useRef(); //{{from_name}}
  const contactRef = useRef(); // {{contact_number}}
  const messageRef = useRef(); //{{message}}
  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init(`${import.meta.env.VITE_VERCEL_EMAIL_JS}`), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "contact_email_react";
    const templateId = "contact_form";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        from_name: nameRef.current.value,
        reply_to: emailRef.current.value,
        contact_number: contactRef.current.value,
        message: messageRef.current.value,
      });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <form className="for" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block font-semibold text-heading">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            ref={nameRef}
            required
            placeholder="Ex: John Deo"
            className="block w-80 rounded border bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block font-semibold text-heading">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            ref={emailRef}
            required
            placeholder="Ex: example@example.com"
            className="block w-80  border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="contact" className="block font-semibold text-heading">
            Contact Number
          </label>
          <input
            id="contact"
            name="contact"
            type="contact"
            ref={contactRef}
            required
            placeholder="Ex: 0544725017"
            className="block w-80  border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
          />
        </div>
        <div className="mt-4">
          <label htmlFor="message" className="block font-semibold text-heading">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            type="message"
            ref={messageRef}
            required
            placeholder="Enter your comments"
            className="block w-80  border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
          ></textarea>
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="6LfoZB4pAAAAAE6ECPMZVMPlppPKl0eTjzm3GFin"
        ></div>
        <div className="mt-4">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
          >
            <span>Send Email</span>
          </button>
        </div>
      </form>
    </section>
  );
}
