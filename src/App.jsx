import "./App.css";
import { registerUser } from "./services/registerUser";
import { useForm } from "react-hook-form";

export function App() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors , isDirty , isValid},
  } = useForm({ mode: "onChange" })
  const onSubmit = (data) => {
    registerUser(data);
    console.log("errors", errors)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Email
            <input
              type="email"
              placeholder="Email"
              {...register("email",
                {

                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                    message: "email is invalid"
                  },
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
            />
          </label>
          {errors.email?.message && (
            <span className="error" role="alert">
              {errors.email.message}
            </span>
          )}

        </div>
        <div>
          <label>
            Name
            <input type="text" placeholder="Name"
              {...register("name",
                {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
            />
          </label>
          {errors.name?.message && (
            <span className="error" role="alert">
              {errors.name.message}
            </span>
          )}
        </div>
        <div>
          <label>
            Age
            <input type="number" placeholder="Age"
              {...register("age",
                {
                  required: {
                    value: true,
                    message: "age is required",
                  },
                  min: {
                    value: 18,
                    message: "you must be above 18 to register",
                  },
                })}
            />
          </label>
          {errors.age?.message && (
            <span className="error" role="alert">
              {errors.age.message}
            </span>
          )}
        </div>
        <div>
          <label>
            Password
            <input type="password" placeholder="Password"
              {...register("password",
                {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 5,
                    message: "password is too short",
                  },
                })}
            />
          </label>
          {errors.password?.message && (
            <span className="error" role="alert">
              {errors.password.message}
            </span>
          )}
        </div>
        <div>
          <label>
            Password check
            <input type="password" placeholder="Password check"
              {...register("passwordCheck",
                {
                  
                  validate: {
                    matchpassword: x => getValues("password") == x || "passwords do not match"
                  },
                  
                })}
            />
          </label>
          {errors.passwordCheck?.message && (
            <span className="error" role="alert">
              {errors.passwordCheck.message}
            </span>
          )}
        </div>
        <div>
          <label>
            <input type="checkbox" 
              {...register("terms",
              {
                
                validate: {
                  termsAcceptance: x => getValues("terms") == true || "please read and accept the terms and conditions"
                },
                
              })}
            />
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
          </label>
          {errors.terms?.message && (
            <span className="error" role="alert">
              {errors.terms.message}
            </span>
          )}
        </div>

        <button disabled = {!isDirty || !isValid}>Sign up</button>
      </form>
    </div>
  );
}
