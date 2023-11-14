export default function Alert() {
  return (
    <>
      <div
        className="flex w-full items-center gap-4 rounded border border-pink-100 bg-pink-50 px-4 py-3 text-sm text-pink-500"
        role="alert"
      >
        {/*  <!-- Text --> */}
        <p className="flex-1">
          Danger! There is no meals available at the moment with search key
        </p>
      </div>
    </>
  );
}
