import React, { useState } from "react";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { Link } from "react-router";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container flex flex-col justify-center items-center h-[90vh]">
      <div className="bg-neutral-800 text-center p-10 rounded-md shadow-2xl">
        <h1 className="text-4xl pb-3 font-semibold">Login</h1>
        <form action="" className="w-80" onSubmit={handleSubmit}>
          <TextInput label="Email (or) Phone" onChange={setEmail} />
          <TextInput label="password" onChange={setPassword} />
          <Button label="Login" />
        </form>
        <div className="flex flex-col justify-between text-neutral-400 ">
          <a href="" className="hover:text-neutral-300">
            Forget password?
          </a>
          <Link to={"/signup"} className="hover:text-neutral-300">
            Sign up?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
