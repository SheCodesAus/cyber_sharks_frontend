import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
// api
import postLogin from "../api/post-login";

function LoginPage() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  // sending credentials to api
  async function onSubmit(e) {
    e.preventDefault();

    if (credentials.username && credentials.password) {
      try {
        const response = await postLogin(
          credentials.username,
          credentials.password
        );
        console.log("Login successful:", response);
      } catch (error) {
        console.error("Login failed:", error.message);
        setErrorMsg(error.message);
      }
    } else {
      setErrorMsg("Both username and password are required");
    }
  }

  console.log(credentials);
  console.log(errorMsg);

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col h-screen items-center justify-center bg-customWhite">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 justify-center mx-auto"
      >
        <label className="input input-bordered flex items-center gap-2">
          Username
          <input
            type="text"
            className="grow w-full"
            name="username"
            id="sername"
            value={credentials.email}
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
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        {errorMsg && (
          <p className="text-red-500 text-base text-center">{errorMsg}</p>
        )}
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
