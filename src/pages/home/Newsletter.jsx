import { useState, useRef } from "react";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
  };

  return (
    <section className="py-8">
      <div className=" bg-orange-100 flex flex-col items-center text-center sm:py-12 sm:px-6 md:py-18">
        <h2 className="text-3xl font-semibold text-heading md:text-4xl">
          Newsletter
        </h2>

        <p className="mt-4 text-lg font-medium">
          Just sign up and start creating in seconds.
        </p>

        <form
          className="mt-8 flex justify-center w-full flex-col gap-2 sm:w-auto sm:flex-row"
          onSubmit={handleSubmit}
        >
          <div>
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
          </div>
          <div>
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
          </div>
          <button
            type="submit"
            className="inline-flex cursor-pointer items-center justify-center rounded border-0 border-primary-500 bg-primary-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Join & Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
