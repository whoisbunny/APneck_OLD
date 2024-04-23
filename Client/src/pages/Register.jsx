import React from 'react'
import RegisterForm from '../components/forms/RegisterForm';

const Register = () => {
  return (
    <section className="bg-lighter1 p-5">
      <div className="container">
        <div className="flex flex-center justify-center">
          <div className="lg:w-1/3 md:w-1/2 sm:w-5/6">
            <div className="card rounded-xl">
              <div className="p-12">
                <h2 className="text-center text-lg mb-3 text-primary">Sign Up</h2>
                <p className="text-center mb-4 text-primary">
                  Join us in shopping!!
                </p>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register