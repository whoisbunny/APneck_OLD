import { Link } from "react-router-dom";
import IMG from "/assets/image/logo-primary.svg";
const Register = () => {
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
                <form>
                  <div className="mb-4 flex flex-col">
                    <label className="mb-2 text-[#212b36] " htmlFor="username">
                      Username or email
                    </label>
                    <input
                      name="username"
                      placeholder="Enter address here"
                      type="email"
                      id="username"
                      className="w-full px-4 py-2 font-[.9375rem] font-normal leading-6 text-[#637381] bg-[#fff] border border-[#c4cdd5] rounded-md   "
                    ></input>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label className="mb-2 text-[#212b36] " htmlFor="password">
                      Password
                    </label>
                    <input
                      name="password"
                      placeholder="****************"
                      type="password"
                      id="password"
                      className="w-full px-4 py-2 font-[.9375rem] font-normal leading-6 text-[#637381] bg-[#fff] border border-[#c4cdd5] rounded-md   "
                    ></input>
                  </div>
                  <div className="mb-4 flex flex-col">
                    <label className="mb-2 text-[#212b36] " htmlFor="cpassword">
                      Confirm Password
                    </label>
                    <input
                      name="cpassword"
                      placeholder="****************"
                      type="password"
                      id="cpassword"
                      className="w-full px-4 py-2 font-[.9375rem] font-normal leading-6 text-[#637381] bg-[#fff] border border-[#c4cdd5] rounded-md   "
                    ></input>
                  </div>

                  <div>
                    <div className="p-2 grid">
                      <button
                        type="submit"
                        className="inline-block py-2 px-4 font-medium text-center text-[#fff] border border-[#624bff] bg-[#624bff] rounded-md"
                      >
                        Create Account
                      </button>
                    </div>
                    <div className=" flex justify-between mt-5">
                      <div className=" mb-2 md:mb-0 ">
                        Already Have Account ?
                        <Link to={"/"} className="text-[#624bff]">
                          {" "}
                          Ligin
                        </Link>
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

export default Register;
