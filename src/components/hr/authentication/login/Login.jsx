/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { IoMdContact, IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../../../State/Auth/Action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    navigate("/");
    dispatch(login(userData));
  };

  return (
    <div className="bg-[#0098F1] w-screen h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
      <div
        className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-[300px] sm:h-[350px] md:h-[250px] lg:h-[300px] xl:h-[350px] rounded-[20px] md:rounded-[25px] flex flex-col items-center justify-center shadow-xl p-6 md:p-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0, 88, 139, 0.2) 19.36%, rgba(0, 88, 139, 0.2) 19.36%)",
        }}
      >
        <h2 className="text-lg font-medium text-white text-center">
          Login to your account
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full space-y-4"
        >
          <div className="relative">
            <IoMdContact className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#00588B]" />
            <input
              id="email"
              label="Email"
              name="email"
              type="email"
              placeholder="email"
              required
              className="w-full h-[50px] px-12 py-2 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
            />
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              {showPassword ? (
                <IoMdEyeOff
                  className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <IoMdEye
                  className="w-6 h-6 mb-4 text-[#00588B] cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              label="Password"
              placeholder="password"
              required
              className="w-full h-[50px] pl-12 pr-4 border bg-[#FFFFFF] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00588B]"
            />
            <div className="text-sm text-white mt-2 text-right">
              <Link className="hover:underline cursor-pointer">
                Forgot Password?
              </Link>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-[#FFFFFF] text-[#0098F1] transition duration-300 hover:bg-[#e0f7ff] focus:outline-none"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#e0f7ff] hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;