import { Link, useNavigate } from "react-router-dom";
import IMG from "/assets/image/logo-primary.svg";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { login } from "../../app/features/auth/authSlice";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(schema),
    });

    const onSubmit = (data) => {
      dispatch(login(data))

    };

    const { isAuth } = useSelector((state) => state.auth);
    useEffect(() => {
      if(isAuth) navigate('/admin')
    }, [isAuth])
    



  return (
    <>
      <div className="flex flex-col w-full ">
        <div className="flex justify-center items-center min-h-[100vh]">
          <div className="py-12 w-full max-xl:py-0 flex-[0_0_auto] lg:w-1/2  md:w-2/3 2xl:w-1/3  ">
            <div className="card  shadow-2xl ">
              <div className="p-8 flex-[0_0_auto]">
                <div className="mb-5">
                  <Link to={"/admin"}>
                    {" "}
                    <img src={IMG} alt="5" className="mb-2" />
                  </Link>
                  <p className="mb-8">Please enter your user information.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4 flex flex-col">
                    <label className="mb-2 text-[#212b36] " htmlFor="username">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      name="email"
                      placeholder="Enter address here"
                      type="email"
                      id="username"
                      className="w-full px-4 py-2 font-[.9375rem] font-normal leading-6 text-[#637381] bg-[#fff] border border-[#c4cdd5] rounded-md   "
                    />
                    {errors.email && (
                      <span className=" text-red-600">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label className="mb-2 text-[#212b36] " htmlFor="password">
                      Password
                    </label>
                    <input
                      name="password"
                      {...register("password")}
                      placeholder="****************"
                      type="password"
                      id="password"
                      className="w-full px-4 py-2 font-[.9375rem] font-normal leading-6 text-[#637381] bg-[#fff] border border-[#c4cdd5] rounded-md   "
                    ></input>
                  </div>

                  <div>
                    <div className="p-2 grid">
                      <button
                        type="submit"
                        className="inline-block py-2 px-4 font-medium text-center text-[#fff] border border-[#624bff] bg-[#624bff] rounded-md"
                      >
                        Sign In
                      </button>
                    </div>
                    <div className=" flex justify-between mt-5">
                      <div className="text-[#624bff] mb-2 md:mb-0">
                        <Link to={"/register"}>Create An Account</Link>
                      </div>
                      <div>
                        <Link to={"/forgot-password"}>
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
