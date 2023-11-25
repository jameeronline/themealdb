export default function Newsletter() {
  return (
    <section className="py-8">
      <div className=" bg-gray-800 text-white flex flex-col items-center text-center sm:py-12 sm:px-6 md:py-18">
        <h2 className="text-3xl font-semibold text-heading md:text-4xl">
          Newsletter
        </h2>

        <p className="mt-4 text-lg font-medium">
          Just sign up and start creating in seconds.
        </p>

        <form className="mt-8 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
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
              placeholder="Email"
              className="block w-full rounded border border-primary-600 bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm md:w-64"
            />
          </div>
          <button
            type="submit"
            className="inline-flex cursor-pointer items-center justify-center rounded border-0 border-primary-500 bg-primary-500 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
          >
            Join
          </button>
        </form>
      </div>
    </section>
  );
}
