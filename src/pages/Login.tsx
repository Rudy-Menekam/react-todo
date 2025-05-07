import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("email");
  const userPassword = localStorage.getItem("password");

  const onSubmit = () => {
    if (email === userEmail && password == userPassword) {
      localStorage.setItem("signUp", email);
      alert("You Are Successfully Logged In");
      // window.location.reload()
      navigate("/home");
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div>
      <h1 className="mb-12"> Todo App</h1>
      <div className="w-full max-w-lg ">
      <p className="title">Login to add your todo</p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault(); // prevent page reload
          onSubmit();
        }}
        className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 h-84"
      >
        <input
          type="email"
          id="email"
          placeholder="Enter Your Email"
          className=" mb-6 appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="pass"
          name="password"
          value={password}
          placeholder="Enter Your Password"
          className=" mb-6 appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Login
        </button>
        Don't yet have an account? <Link to="/signup">Signup</Link>
      </form>
    </div>
    </div>
  );
}
