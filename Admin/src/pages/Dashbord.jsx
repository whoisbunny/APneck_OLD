import { MdSpaceDashboard } from "react-icons/md";
const Dashbord = () => {
  return (
    <>
      <div>
        <div className=" pt-10 pb-[9.5rem]   bg-[#624bff]"></div>
        <div className="px-8 -mt-40 w-full">
          <div className="row ">
            <div className="w-full flex-[0_0_auto] ">
              <div>
                <div className="flex  justify-between items-center">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="mb-0 text-white text-2xl"> Projects</h3>
                  </div>
                  <div className="">
                    <button className="px-3 py-2 rounded bg-white">
                      Create New Project
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 px-2  flex-[0_0_auto] xl:w-1/4 max-xl:w-1/4 max-lg:w-1/2 max-md:w-full">
              <div className="card shadow-lg">
                <div className="flex-[1_1_auto] p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="mb-0 text-[1.125rem] font-medium">
                        Projects
                      </h4>
                    </div>
                    <div className="rounded-s-md inline-flex items-center text-center justify-center w-10 h-10 leading-10">
                      <MdSpaceDashboard />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold">18</h1>
                    <p className="mb-0">
                      <span>2</span> complated
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8  px-2 flex-[0_0_auto] max-xl:w-1/4 xl:w-1/4 max-lg:w-1/2 max-md:w-full">
              <div className="card shadow-lg">
                <div className="flex-[1_1_auto] p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="mb-0 text-[1.125rem] font-medium">
                        Projects
                      </h4>
                    </div>
                    <div className="rounded-s-md inline-flex items-center text-center justify-center w-10 h-10 leading-10">
                      <MdSpaceDashboard />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold">18</h1>
                    <p className="mb-0">
                      <span>2</span> complated
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 px-2 flex-[0_0_auto] max-xl:w-1/4  xl:w-1/4 max-lg:w-1/2 max-md:w-full">
              <div className="card shadow-lg">
                <div className="flex-[1_1_auto] p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="mb-0 text-[1.125rem] font-medium">
                        Projects
                      </h4>
                    </div>
                    <div className="rounded-s-md inline-flex items-center text-center justify-center w-10 h-10 leading-10">
                      <MdSpaceDashboard />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold">18</h1>
                    <p className="mb-0">
                      <span>2</span> complated
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 px-2 flex-[0_0_auto] max-xl:w-1/4 xl:w-1/4 max-lg:w-1/2 max-md:w-full">
              <div className="card shadow-lg">
                <div className="flex-[1_1_auto] p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="mb-0 text-[1.125rem] font-medium">
                        Projects
                      </h4>
                    </div>
                    <div className="rounded-s-md inline-flex items-center text-center justify-center w-10 h-10 leading-10">
                      <MdSpaceDashboard />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold">18</h1>
                    <p className="mb-0">
                      <span>2</span> complated
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashbord;
