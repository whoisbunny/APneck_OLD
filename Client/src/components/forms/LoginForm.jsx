import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="mb-4">Enter Your Email address</label>
        <input
          {...register("email")}
          className="form-control "
          placeholder="enter email here ..."
        />
        {errors.email && (
          <span className=" text-red-600">{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <label className="mb-4">Password</label>
        <input
          type="password"
          {...register("password")}
          className="form-control"
          placeholder="enter password here..."
        />
        {errors.password && (
          <span className=" text-red-600">{errors.password.message}</span>
        )}
      </div>
      <div className="mb-4">
        <Link to="/forgotpasword" className="text-sm hover:text-search">
          Forgot password?
        </Link>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="m-0">Dont have an account?</p>
        <Link to="/signup" className="text-sm hover:text-search">
          Sign up
        </Link>
      </div>
      <div className="grid gap-2">
        <button
          type="submit"
          className="p-[12px] text-lg text-white bg-primary1 rounded-xl"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
