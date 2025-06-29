import { Link } from "react-router";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Email:", phone);
    console.log("Password:", password);
    console.log("Password:", rePassword);
  };
  return (
    <div className="login-container flex flex-col justify-center items-center h-[90vh]">
      <div className="bg-neutral-800 text-center p-10 rounded-md shadow-2xl">
        <h1 className="text-4xl pb-3 font-semibold">Signup</h1>
        <form action="" className="w-80" onSubmit={handleSubmit}>
          <TextInput label="Email" onChange={setEmail} />
          <TextInput label="Phone" onChange={setPhone} />
          <TextInput label="password" onChange={setPassword} />
          <TextInput label="Re-password" onChange={setRePassword} />
          <Button label="Login" />
        </form>
        <div className="flex flex-col justify-between text-neutral-400 ">
          <Link to={"/login"} className="hover:text-neutral-300">
            i already have account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
