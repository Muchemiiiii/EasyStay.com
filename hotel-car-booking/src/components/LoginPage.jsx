import React, { useReducer } from "react";
import { useState } from "react";

const LoginPage = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const data = { username, password };

  console.log("data to send", data);

//   const handleLogin = async () => {
//    const response = await fetch("https://eastay.com/api/login", {
//      method: "POST",
//      body: JSON.stringify({data})
//    });

  const handleUserName = (event) => {
    console.log("value", event.target.value);
    setUserName(event.target.value);
  }

  const handlePassword = (event) => {
    console.log("password",event.target.value);
    setPassword(event.target.value);
  }

  console.log("username", username);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded"
              value={username}
              onChange={handleUserName}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={handlePassword}
            />
          </div>
          <div className="text-right mb-4">
            <a href="/forgot-password" className="text-blue-500 text-sm">
              Forgot Password?
            </a>
          </div>
          <button
            type="button"

            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <div className="my-4 text-center text-gray-500">
          <p className="text-sm text-gray-700">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
