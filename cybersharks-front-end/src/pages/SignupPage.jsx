import { useState } from "react";
import Button from "../components/Button";

function SignupPage() {
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
      <p className="font-cormorant text-customBlack text-[3rem] text-center w-[80%]">
        Intro:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
        ducimus, impedit officia commodi quis neque sunt et doloribus
        consequatur? Itaque vitae iste,
      </p>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 justify-center w-[70%] mx-auto"
      >
        <label className="input input-bordered flex items-center gap-2">
          First Name
          <input
            type="text"
            className="grow"
            name="firstName"
            id="firstName"
            value={signUpForm.firstName}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Last Name
          <input
            type="text"
            className="grow"
            name="lastName"
            id="lastName"
            value={signUpForm.lastName}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            type="email"
            className="grow"
            name="email"
            id="email"
            value={signUpForm.email}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Password
          <input
            type="password"
            className="grow"
            name="password"
            id="password"
            value={signUpForm.password}
            onChange={handleChange}
          />
        </label>
        <Button className="mx-auto mt-2" name="Sign up"></Button>
      </form>
    </div>
  );
}

export default SignupPage;
