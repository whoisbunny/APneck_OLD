/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import b1 from "/assets/images/blog/b1.jpg";
import b6 from "/assets/images/blog/b6.jpg";
import b2 from "/assets/images/blog/b2.jpg";
import b3 from "/assets/images/blog/b3.jpg";
import b4 from "/assets/images/blog/b4.jpg";
import b5 from "/assets/images/blog/b5.jpg";
import b7 from "/assets/images/blog/b7.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../app/features/blog/blogSlice";
import dayjs from "dayjs";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  
  const { blogs } = useSelector((state) => state.blog);
  console.log(blogs);


  return (
    <>
      <section className="blog-wrapper p-5 bg-gray-900">
        <div className="container-xxl">
          <div className="row flex flex-wrap my-1 mx-0.5">
            <div className="col-12 w-full">
              <div className="shop-details text-center">
                <h1 className="text-white text-4xl font-bold">#Read More</h1>
                <p className="text-white text-3xl">
                  Get to know what our trusted customers say...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5 flex items-center">
        <div className=" container p-12">
          <div className="row">
            <div className="flex flex-col items-center text-center w-full">
              <h1 className="mb-3 text-search font-bold text-4xl">
                Explore more in our library
              </h1>
              <p className="mb-4">Why we have trending Outfits Everywhere</p>
            </div>


  {
    blogs?.map((el)=>{
      return(<>

            <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="flex gap-12 p-4">
                  <div className="w-1/2 md:w-1/3 lg:w-1/4">
                    <img
                      src={el?.blogImage}
                      alt=""
                      className="object-cover w-full rounded-tl-lg rounded-bl-lg"
                    />
                  </div>
                  <div className="w-1/2 md:w-2/3 lg:w-3/4">
                    <div className="card-body">
                      <h5 className="card-title">{el?.title}</h5>
                      <p className="card-text">
                        {el?.description}
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          {dayjs(el?.lastUpdate).format('DD/MM/YYYY')}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
      
      
      </>)
    })
  }
            
            
            {/* <div className="col-12 p-5">
              <div className="card mb-3">
                <div className="flex gap-12 p-4">
                  <div className="w-1/2 md:w-1/3 lg:w-1/4">
                    <img
                      src={b7}
                      alt=""
                      className="object-cover w-full rounded-tl-lg rounded-bl-lg"
                    />
                  </div>
                  <div className="w-1/2 md:w-2/3 lg:w-3/4">
                    <div className="card-body">
                      <h5 className="card-title">Melisa Ivy</h5>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit{" "}
                        <br />. Doloribus maxime consequatur, ipsam architecto
                        incidunt volup <br />
                        tate! Iste ipsa numquam quos nam quibusdam perferendis
                        excepturi rem, a quo laudantium libero dolore nisi.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
