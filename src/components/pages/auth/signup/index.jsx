export default function SingUp() {
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="mx-auto h-9 text-heading">
          <svg
            viewBox="0 0 233 38"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full"
          >
            <path
              d="M0 37.9999H31.062L45.526 25.2937H14.7011L0 37.9999Z"
              fillOpacity="0.5"
            />
            <path
              d="M45.5264 25.2938H14.4644L0.000392914 12.7063H30.8253L45.5264 25.2938Z"
              fillOpacity="0.8"
            />
            <path d="M0 12.7064H31.062L45.526 0.000110626H14.7011L0 12.7064Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.151 10.4691L157.176 10.5121L162.137 7.64336V31.0121H157.151V10.4691ZM200.848 10.2374L205.834 7.35432V19.8407H206.103L211.861 13.0066H217.584L210.913 20.8019L217.923 31.0121H212.083L207.18 23.756L205.834 25.2916V31.0121H200.848V10.2374ZM73.8279 13.9092H68.9711C68.7838 12.0219 67.2975 10.92 64.8749 10.92C62.3938 10.92 61.0245 12.0571 61.0245 13.6044C60.9894 15.3276 62.7332 16.1013 64.8164 16.5819L66.9698 17.0977C71.1362 18.0355 74.1439 20.1572 74.1556 24.1545C74.1439 28.5504 70.7032 31.352 64.8515 31.352C59.035 31.352 55.325 28.6676 55.1963 23.4746H60.1C60.2638 25.8777 62.1598 27.0968 64.793 27.0968C67.3677 27.0968 69.0296 25.9011 69.0413 24.1428C69.0296 22.5251 67.5784 21.7749 64.9685 21.1419L62.3587 20.4854C58.3094 19.5125 55.8166 17.4845 55.8283 13.9444C55.8049 9.58365 59.6552 6.67651 64.91 6.67651C70.2467 6.67651 73.7577 9.63054 73.8279 13.9092ZM86.6316 28.5152C85.7539 30.1915 84.0335 31.352 81.3768 31.352C77.9478 31.352 75.4081 29.5468 75.4081 25.9832C75.4081 21.9624 78.6032 20.7668 82.161 20.4385C85.2857 20.1338 86.5146 19.9814 86.5146 18.8208V18.7505C86.5146 17.2735 85.5432 16.4178 83.8462 16.4178C82.0556 16.4178 80.9906 17.2969 80.6512 18.4926L76.0401 18.1175C76.7306 14.8353 79.5628 12.7721 83.8696 12.7721C87.8722 12.7721 91.5002 14.5774 91.5002 18.8677V31.0121H86.7721V28.5152H86.6316ZM80.1714 25.8191C80.1714 27.1906 81.2715 27.9057 82.8046 27.9057C84.9932 27.9057 86.5497 26.4638 86.5497 24.5765V22.6658C85.9528 23.0643 84.1739 23.3222 83.0855 23.4746C81.33 23.7208 80.1714 24.4124 80.1714 25.8191ZM98.8464 31.352C101.503 31.352 103.223 30.1915 104.101 28.5152H104.242V31.0121H108.97V18.8677C108.97 14.5774 105.342 12.7721 101.339 12.7721C97.0323 12.7721 94.2001 14.8353 93.5097 18.1175L98.1207 18.4926C98.4601 17.2969 99.5251 16.4178 101.316 16.4178C103.013 16.4178 103.984 17.2735 103.984 18.7505V18.8208C103.984 19.9814 102.755 20.1338 99.6305 20.4385C96.0727 20.7668 92.8777 21.9624 92.8777 25.9832C92.8777 29.5468 95.4173 31.352 98.8464 31.352ZM100.274 27.9057C98.741 27.9057 97.6409 27.1906 97.6409 25.8191C97.6409 24.4124 98.7995 23.7208 100.555 23.4746C101.643 23.3222 103.422 23.0643 104.019 22.6658V24.5765C104.019 26.4638 102.463 27.9057 100.274 27.9057ZM129.143 13.9092H124.286C124.099 12.0219 122.612 10.92 120.19 10.92C117.709 10.92 116.339 12.0571 116.339 13.6044C116.304 15.3276 118.048 16.1013 120.131 16.5819L122.285 17.0977C126.451 18.0355 129.459 20.1572 129.47 24.1545C129.459 28.5504 126.018 31.352 120.166 31.352C114.35 31.352 110.64 28.6676 110.511 23.4746H115.415C115.579 25.8777 117.474 27.0968 120.108 27.0968C122.682 27.0968 124.344 25.9011 124.356 24.1428C124.344 22.5251 122.893 21.7749 120.283 21.1419L117.673 20.4854C113.624 19.5125 111.131 17.4845 111.143 13.9444C111.12 9.58365 114.97 6.67651 120.225 6.67651C125.561 6.67651 129.072 9.63054 129.143 13.9092ZM137.211 31.0121H147.451C152.835 31.0121 155.702 28.1987 155.702 24.3772C155.702 20.8254 153.163 18.6802 150.436 18.5512V18.3168C152.928 17.7541 154.766 15.984 154.766 13.159C154.766 9.56021 152.098 7.00474 146.808 7.00474H137.211V31.0121ZM142.278 26.8624V20.4854H146.527C148.961 20.4854 150.471 21.8921 150.471 23.8732C150.471 25.6784 149.242 26.8624 146.41 26.8624H142.278ZM142.278 17.0508V11.1076H146.129C148.376 11.1076 149.652 12.2681 149.652 14.003C149.652 15.902 148.107 17.0508 146.035 17.0508H142.278ZM172.391 31.3637C177.844 31.3637 181.238 27.6243 181.238 22.0797C181.238 16.4998 177.844 12.7721 172.391 12.7721C166.937 12.7721 163.543 16.4998 163.543 22.0797C163.543 27.6243 166.937 31.3637 172.391 31.3637ZM172.414 27.4954C169.898 27.4954 168.611 25.1861 168.611 22.0445C168.611 18.9029 169.898 16.5819 172.414 16.5819C174.884 16.5819 176.171 18.9029 176.171 22.0445C176.171 25.1861 174.884 27.4954 172.414 27.4954ZM199.411 24.4124C199.177 28.5504 196.169 31.3637 191.383 31.3637C185.847 31.3637 182.535 27.554 182.535 22.0797C182.535 16.5584 185.905 12.7721 191.359 12.7721C196.052 12.7721 199.2 15.5034 199.411 19.6649H194.706C194.437 17.8713 193.267 16.6639 191.441 16.6639C189.124 16.6639 187.602 18.6098 187.602 22.0093C187.602 25.4557 189.112 27.4133 191.441 27.4133C193.15 27.4133 194.414 26.3349 194.706 24.4124H199.411ZM224.936 12.7721C229.477 12.7721 232.145 14.8235 232.59 18.141L228.026 18.4223C227.78 17.2618 226.75 16.3123 225.018 16.3123C223.473 16.3123 222.256 17.0156 222.268 18.0941C222.256 18.9615 222.876 19.5359 224.55 19.8993L227.803 20.5558C231.291 21.2708 232.988 22.8299 233 25.4322C232.988 28.9841 229.652 31.3637 224.994 31.3637C220.231 31.3637 217.305 29.242 216.837 25.7956L221.741 25.5377C222.045 27.003 223.227 27.765 225.006 27.765C226.75 27.765 227.909 27.003 227.932 25.9363C227.909 25.0337 227.195 24.4593 225.626 24.1428L222.513 23.5215C219.002 22.8182 217.305 21.0715 217.317 18.3754C217.305 14.9056 220.337 12.7721 224.936 12.7721Z"
            />
          </svg>
        </div>

        <p className="mt-6 text-center text-sm text-text">
          No account?{" "}
          <a
            href="#"
            className="font-semibold text-primary hover:text-primary-accent"
          >
            Sign up
          </a>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 sm:px-10">
          <form className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-heading"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-heading"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="mt-2 block w-full rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 font-semibold text-heading placeholder:text-text/50 focus:border-primary focus:outline-none focus:ring-0 sm:text-sm"
              />
            </div>

            <div className="flex justify-end">
              <a
                href="#"
                className="text-sm font-semibold text-primary hover:text-primary-accent"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-primary-accent hover:bg-primary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-primary disabled:hover:bg-primary disabled:hover:text-white dark:focus:ring-white/80"
            >
              Login
            </button>
          </form>

          <hr className="my-8 border-hr" />

          <div className="flex flex-col space-y-4">
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-secondary bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:border-secondary-accent hover:bg-secondary-accent focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:border-secondary disabled:hover:bg-secondary disabled:hover:text-white dark:focus:ring-white/80"
            >
              Login with SSO
            </button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border-2 border-muted-3 bg-transparent px-4 py-2.5 text-sm font-semibold  text-text shadow-sm hover:text-heading focus:text-heading focus:outline-none focus:ring-2 focus:ring-orange-400/80 focus:ring-offset-0 disabled:opacity-30 disabled:hover:text-text dark:focus:ring-white/80"
            >
              <svg viewBox="0 0 48 48" className="mr-2 h-5 w-5">
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
