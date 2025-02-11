import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";
import Button from "../components/Button";
import postSignUp from "../api/post-signup";
import postLogin from "../api/post-login";
function SignupPage() {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [signUpForm, setSignUpForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function validateForm() {
    let errors = {};

    if (!/^[a-zA-Z]{2,}$/.test(signUpForm.firstName)) {
      errors.firstName =
        "First name must be at least 2 letters long and contain only letters.";
    }

    if (!/^[a-zA-Z]{2,}$/.test(signUpForm.lastName)) {
      errors.lastName =
        "Last name must be at least 2 letters long and contain only letters.";
    }

    if (!/^[a-zA-Z]{2,}$/.test(signUpForm.username)) {
      errors.username =
        "Username must be at least 2 letters long and contain only letters.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(signUpForm.email)) {
      errors.email = "Please enter a valid email address.";
    }

    setErrorMsg(errors);
    return Object.keys(errors).length === 0;
  }
  async function onSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;
    setErrorMsg({});

    try {
      setIsLoading(true);

      const response = await postSignUp(
        signUpForm.username,
        signUpForm.password,
        signUpForm.email,
        signUpForm.firstName,
        signUpForm.lastName
      );
      console.log("Sign up successful:", response);

      const login = await postLogin(signUpForm.username, signUpForm.password);
      window.localStorage.setItem("token", login.token);
      setAuth({ token: login.token });

      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error.message);
      setErrorMsg({ general: error.message });
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorMsg((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-customWhite">
      <div className="bg-white shadow-md rounded-lg p-8 sm:w-[40%]">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 justify-center mx-auto"
        >
          <label className="input input-bordered flex items-center gap-2 bg-white">
            First Name
            <input
              type="text"
              className="grow"
              name="firstName"
              id="firstName"
              value={signUpForm.firstName}
              onChange={handleChange}
              required
            />
          </label>
          {errorMsg.firstName && (
            <p className="text-red-500 text-sm">{errorMsg.firstName}</p>
          )}

          <label className="input input-bordered flex items-center gap-2  bg-white">
            Last Name
            <input
              type="text"
              className="grow"
              name="lastName"
              id="lastName"
              value={signUpForm.lastName}
              onChange={handleChange}
              required
            />
          </label>

          {errorMsg.firstName && (
            <p className="text-red-500 text-sm">{errorMsg.lastName}</p>
          )}
          <label className="input input-bordered flex items-center gap-2  bg-white">
            Email
            <input
              type="email"
              className="grow w-full"
              name="email"
              id="email"
              value={signUpForm.email}
              onChange={handleChange}
              required
            />
          </label>
          {errorMsg.firstName && (
            <p className="text-red-500 text-sm">{errorMsg.email}</p>
          )}
          <label className="input input-bordered flex items-center gap-2  bg-white">
            Username
            <input
              type="text"
              className="grow w-full"
              name="username"
              id="username"
              value={signUpForm.username}
              onChange={handleChange}
              required
            />
          </label>

          {errorMsg.firstName && (
            <p className="text-red-500 text-sm">{errorMsg.username}</p>
          )}
          <label className="input input-bordered flex items-center gap-2  bg-white">
            Password
            <input
              type="password"
              className="grow w-full"
              name="password"
              id="password"
              value={signUpForm.password}
              onChange={handleChange}
              required
            />
          </label>
          <Button
            className="mx-auto mt-2 bg-black px-8 text-base min-w-[140px] text-center rounded-full text-white hover:opacity-90 transition-all h-10"
            children={isLoading ? "Loading..." : "Sign up"}
          ></Button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
