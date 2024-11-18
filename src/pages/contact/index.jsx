import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { Container } from "src/components/shared";
import { Input } from "src/components/Input";

import { useForm, Controller } from "react-hook-form";

export default function Contact() {
  // const emailRef = useRef(); //{{reply_to}}
  // const nameRef = useRef(); //{{from_name}}
  // const contactRef = useRef(); // {{contact_number}}
  // const messageRef = useRef(); //{{message}}
  const [loading, setLoading] = useState(false);

  const googleCaptchaKey = `${import.meta.env.VITE_VERCEL_API_URL}`;
  console.log(googleCaptchaKey);

  //rhf
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  useEffect(() => emailjs.init(`${import.meta.env.VITE_VERCEL_EMAIL_JS}`), []);

  const onSubmit = async (data) => {
    console.log(data);
    const serviceId = "contact_email_react";
    const templateId = "contact_form";
    try {
      setLoading(true);
      // await emailjs.send(serviceId, templateId, {
      //   from_name: data.name,
      //   reply_to: data.email,
      //   contact_number: data.mobile,
      //   message: data.message,
      // });
      alert("email successfully sent check inbox");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const serviceId = "contact_email_react";
  //   const templateId = "contact_form";
  //   try {
  //     setLoading(true);
  //     await emailjs.send(serviceId, templateId, {
  //       from_name: nameRef.current.value,
  //       reply_to: emailRef.current.value,
  //       contact_number: contactRef.current.value,
  //       message: messageRef.current.value,
  //     });
  //     alert("email successfully sent check inbox");
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <section className="contact-page">
      <select name="" id="" className="form-select">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
        <option value="6">Option 6</option>
        <option value="7">Option 7</option>
        <option value="8">Option 8</option>
        <option value="9">Option 9</option>
        <option value="10">Option 10</option>
      </select>
      <input
        type="email"
        className="px-4 py-3 rounded placeholder:text-gray-300 focus:ring-primary-400 focus:border-primary-400"
        placeholder="Enter your name"
      />

      <Container>
        <form
          className="form max-w-lg"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div>
            <label htmlFor="name" className="block font-semibold text-heading">
              Name
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input placeholder="Ex: John Deo" {...field} />
              )}
            />

            {/* <label htmlFor="name" className="block font-semibold text-heading">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Ex: John Deo"
              className="block w-full rounded border bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
            /> */}
            {errors.name && (
              <span className="text-sm inline-flex px-2 py-1 text-error-500 mt-0.5">
                This field is required.
              </span>
            )}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block font-semibold text-heading">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              required
              placeholder="Ex: example@example.com"
              className="block w-full border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
            />
            {errors.email && (
              <span className="text-sm inline-flex px-2 py-1 text-error-500 mt-0.5">
                This field is required.
              </span>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="contact"
              className="block font-semibold text-heading"
            >
              Contact Number
            </label>
            <input
              type="tel"
              {...register("mobile", { required: true })}
              required
              placeholder="Ex: 0544725017"
              className="block w-full border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
            />
            {errors.mobile && (
              <span className="text-sm inline-flex px-2 py-1 text-error-500 mt-0.5">
                This field is required.
              </span>
            )}
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="block font-semibold text-heading"
            >
              Message
            </label>
            <textarea
              {...register("message", { required: true })}
              required
              placeholder="Enter your comments"
              className="block w-full border rounded bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
            ></textarea>
            {errors.message && (
              <span className="text-sm inline-flex px-2 py-1 text-error-500 mt-0.5">
                This field is required.
              </span>
            )}
          </div>
          {/* <div
            className="g-recaptcha"
            data-sitekey={`${googleCaptchaKey}`}
          ></div> */}
          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center w-full h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-emerald-500 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
            >
              <span>Send Email</span>
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
