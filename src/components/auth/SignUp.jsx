import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12">
      <div className="w-full max-w-md bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-semibold text-center text-pink-600 mb-8">
          Sign Up
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
              NAME
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              EMAIL
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@email.com"
              className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              id="password"
              type="password"
              placeholder="******"
              className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="confirmPassword"
            >
              CONFIRM PASSWORD
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="******"
              className="w-full px-4 py-2 border border-gray-200 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded transition mb-4"
          >
            SIGN UP
          </button>
        </form>
        <div className="text-center text-gray-500 mb-4">Or Sign up with</div>
        <button className="w-full flex items-center justify-center border border-gray-200 rounded py-2 mb-4 bg-white hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span className="text-gray-700 font-medium">Sign up with Google</span>
        </button>
        <div className="text-center text-sm text-gray-600">
          ALREADY HAVE AN ACCOUNT?{" "}
          <Link
            href="/login"
            className="text-pink-600 font-semibold hover:underline"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
