import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function LoginPage() {
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function onSubmit(e) {
    e.preventDefault();
    // send form data to signup API
    console.log("Submitted Data:", signUpForm);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-customWhite">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 justify-center w-[30%] mx-auto"
      >
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="email"
            className="grow w-full"
            name="email"
            id="email"
            value={signUpForm.email}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 ">
          Password
          <input
            type="password"
            className="grow w-full"
            name="password"
            id="password"
            value={signUpForm.password}
            onChange={handleChange}
          />
        </label>
        <Link
          to="/signup"
          className="mb-3 text-center font-openSans hover:text-accent1"
        >
          Are you new to Prism?{" "}
        </Link>
        <Button className="mx-auto mt-2" name="Login"></Button>
      </form>
    </div>
  );
}

export default LoginPage;
