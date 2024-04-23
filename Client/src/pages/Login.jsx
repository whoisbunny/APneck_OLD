import React from "react";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
  return (
    <>
      <section className="bg-lighter1 p-5">
        <div className="container">
          <div className="flex flex-center justify-center">
            <div className="lg:w-1/3 md:w-1/2 sm:w-5/6">
              <div className="card">
                <div className="p-12">
                  <h2 className="text-center text-lg mb-3 text-primary">
                    LOGIN
                  </h2>
                  <p className="text-center mb-4 text-primary">
                    welcome back !!
                  </p>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
