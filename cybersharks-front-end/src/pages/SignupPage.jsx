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
  async function onSubmit(e) {
    e.preventDefault();

    // Check for empty fields
    const { firstName, lastName, email, username, password } = signUpForm;
    if (!firstName || !lastName || !email || !username || !password) {
      setErrorMsg("All fields are required. Please fill in every field.");
      return;
    }

    // Clear error message before submitting
    setErrorMsg("");

    try {
      setIsLoading(true);

      // Call the signup API
      const response = await postSignUp(
        username,
        password,
        email,
        firstName,
        lastName
      );
      console.log("Sign up successful:", response);

      // Automatically log in the user after signup
      const login = await postLogin(username, password);
      window.localStorage.setItem("token", login.token);
      setAuth({ token: login.token });
      navigate("/");
      // Redirect to the homepage or search page?
      navigate("/");
    } catch (error) {
      console.error("Signup failed:", error.message);
      setErrorMsg(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSignUpForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  console.log(errorMsg);

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-customWhite">
      <div className="bg-white shadow-md rounded-lg p-8 sm:w-[40%]">
        <p className="font-cormorant text-customBlack text-[1.5rem] text-center  h-auto">
          Intro:Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
          ducimus, impedit officia commodi quis neque sunt et doloribus
        </p>
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
          <p className="text-center">{errorMsg}</p>
          <Button
            className="mx-auto mt-2"
            name={isLoading ? "Loading..." : "Sign up"}
          ></Button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
