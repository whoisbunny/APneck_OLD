import { useNavigate } from "react-router-dom";

import IMG from "/assets/image/no-result-search.png";

const Error = ({ message }) => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/admin");
  };
  const gotoBack = () => {
    navigate(-1);
  };
  return (
    <>
      {/* <Seo metaTitle="404 Not Found" /> */}

      <div className="container flex justify-center items-center flex-col min-h-[75vh]">
        <div className="">
          <img src={IMG} alt="" className="noresult_Img" />
        </div>
        <div className="text-center">
          <h1 className="mt-5 mb-4">{message ? message : "404 Not Found"}</h1>
          <div className="flex justify-center gap-4">
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={gotoBack}
            >
              Go Back
            </button>
            <button
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={gotoHome}
            >
              Go To Homepage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
