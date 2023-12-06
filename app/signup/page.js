import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-8 shadow-md rounded-md w-full sm:w-96 bg-primary bg-opacity-5">
        <h2 className="text-3xl font-semibold mb-4 text-slate-200">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium mx-2 my-2"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium mx-2 my-2"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium mx-2 my-2"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mx-2 my-2"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <button className="btn">Sign Up</button>
          </div>
          <div className="flex mb-4 justify-end">
            <p className="mr-2">Already have an account?</p>
            <Link
              href={"/login"}
              className="text-blue-600 visited:text-purple-600"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
