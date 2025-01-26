import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
// api
import postLogin from "../api/post-login";
import { useAuth } from "../hooks/use-auth";
import Search from '../components/Search';

function LoginPage() {
  const navigate = useNavigate();
  // states
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { auth, setAuth } = useAuth();
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
        window.localStorage.setItem("token", response.token);
        setAuth({
          token: response.token,
        });
        navigate("/");
        console.log("Login successful:", response);
      } catch (error) {
        console.error("Login failed:", error.message);
        setErrorMsg(error.message);
      }
    } else {
      setErrorMsg("Both username and password are required");
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
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
            Username
            <input
              type="text"
              className="grow w-full"
              name="username"
              id="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2  bg-white">
            Password
            <input
              data-theme="mytheme"
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
      {/* Search bar added below for demo purposes */}
      <div className="mt-8 w-full">
        <Search />
      </div>
    </div>
  );
}

export default LoginPage;