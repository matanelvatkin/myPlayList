import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();
  return (
    <div>
      <header className="header_home_page">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
          alt="logo"
        />
        <ul>
          <li>
            <input
              className="input_header"
              type="button"
              onClick={() => navigate("../login")}
              value="login"
            />
          </li>
          <li>
            <input
              className="input_header"
              type="button"
              onClick={() => navigate("../signup")}
              value="signup"
            />
          </li>
        </ul>
      </header>
      <div className="logIn">
        <form onSubmit={handleSubmit(onSubmit)}>
          user name:{" "}
          <input
            type="text"
            placeholder="user name"
            {...register("user_name", { required: "user name required" })}
          />
          <br />
          {errors.fName && <p>{errors.user_name.message}</p>}
          first name:{" "}
          <input
            type="text"
            placeholder="first name"
            {...register("fName", { required: "first name required" })}
          />
          <br />
          {errors.fName && <p>{errors.fName.message}</p>}
          last name:{" "}
          <input
            type="text"
            placeholder="last name"
            {...register("lName", { required: "last name required" })}
          />
          <br />
          {errors.lName && <p>{errors.lName.message}</p>}
          email:{" "}
          <input
            type="text"
            placeholder="samthing@samthing.samthing"
            {...register("email", {
              required: "email required",
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
                message: "email not correct",
              },
            })}
          />
          <br />
          {errors.email && <p>{errors.email.message}</p>}
          password:{" "}
          <input
            type="password"
            placeholder="Password"
            autoComplete="password"
            {...register("password", {
              required: "password required",
              minLength: {
                value: 8,
                message: "password length must be more then 8 charceter",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$/%^&*])(?=.{8,})/,
                message:
                  "length: 8+ , one cappitol letter ,one small letter, one number,one spacel letter",
              },
            })}
          />
          <br />
          {errors.password && <p>{errors.password.message}</p>}
          <input className="inputSubmit" type="submit" value="signup" />
        </form>
      </div>
    </div>
  );
}
