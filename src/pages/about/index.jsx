import { useForm, Controller } from "react-hook-form";
import { Container } from "src/components/shared";

export default function About() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "jamal@elm.sa",
      password: "a1307141",
      gender: "female",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <section className="about-page">
        <Container>
          <h1>About{import.meta.env.VITE_VERCEL_GIT_PROVIDER}</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="block w-80 rounded border bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "please enter valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="block w-80 rounded border bg-muted-1 px-4 py-4 font-semibold text-heading placeholder:text-text/50 focus:border-primary sm:text-sm"
                {...register("password", {
                  required: "email is required",
                  minLength: {
                    value: 8,
                    message: "password should be minimum of 8 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
            </div>
            <div className="form-contro">
              <label>
                <input
                  type="radio"
                  value="male"
                  {...register("gender", { required: "gender is manatory" })}
                />{" "}
                <span>Male</span>
              </label>
              <label>
                <input type="radio" value="female" {...register("gender")} />{" "}
                <span>Female</span>
              </label>
            </div>
            <div className="form-control">
              <label></label>
              <button type="submit">Login</button>
            </div>
          </form>
        </Container>
      </section>
    </>
  );
}
