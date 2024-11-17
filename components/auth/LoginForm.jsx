"use client";
import { login } from "@/app/actions";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
const LoginForm = () => {
  const [error, setError] = useState();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      const response = await login(formData);

      if (!!response.error) {
        setError(response.error.message);
      } else {
        router.push("/bookings");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <div className="text-xl text-red-500 text-center">{error}</div>}
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button type="submit" className="btn-primary w-full mt-4">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
