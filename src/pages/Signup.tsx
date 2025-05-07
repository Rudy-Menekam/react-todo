import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    localStorage.setItem("signup", JSON.stringify(credentials));
  }, [credentials]);

  const handleSubmit = () => {
    if (credentials.name && credentials.email && credentials.password) {
      localStorage.setItem("name", credentials.name);
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("password", credentials.password);
      localStorage.setItem("signUp", credentials.email);
      alert("Account created successfully!!");
      navigate("/");
      console.log("Form submitted:", credentials);
      window.location.reload();
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div>
      <div className="w-full max-w-lg">
        <h2>Registration Form</h2>
        <form
          action=""
          className="bg-white shadow-md rounded px-8 pt-12 pb-8 mb-4 h-105"
          onSubmit={(e) => {
            e.preventDefault(); // prevent page reload
            handleSubmit();
          }}
        >
          <input
            type="text"
            name="name"
            value={credentials.name}
            placeholder="Enter Your Name"
            onChange={onChange}
            className=" mb-6 appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={credentials.email}
            onChange={onChange}
            className="mb-6 appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            placeholder="Enter Your Password"
            onChange={onChange}
            className="mb-6 appearance-none border rounded w-full py-5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="submit"
            className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SignUp
          </button>
          Already have an account? <Link to="/login">Login</Link>
        </form>
      </div>
    </div>
  );
}
