import { useState } from "react";
import Button from "../components/Button";
import postSignUp from "../api/post-signup";

function SignupPage() {
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  async function onSubmit(e) {
    e.preventDefault();
    // send form data to signup API
    try {
      const response = await postSignUp(
        signUpForm.username,
        signUpForm.password,
        signUpForm.email,
        signUpForm.firstName,
        signUpForm.lastName
      );
      console.log("Sign up successful:", response);
    } catch (error) {
      console.error("Signup failed:", error.message);
      setErrorMsg(error.message);
    }
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
      <div className="bg-white shadow-md rounded-lg p-8 w-[40%]">
        <p className="font-cormorant text-customBlack text-[1.5rem] text-center  h-auto">
          Intro:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          ducimus, impedit officia commodi quis neque sunt et doloribus
        </p>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 justify-center mx-auto"
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
              className="grow w-full"
              name="email"
              id="email"
              value={signUpForm.email}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Username
            <input
              type="text"
              className="grow w-full"
              name="username"
              id="username"
              value={signUpForm.username}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
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
          <Button className="mx-auto mt-2" name="Sign up"></Button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
