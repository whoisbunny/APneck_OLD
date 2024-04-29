import ProductList from "../components/ProductList";

const Product = () => {
  return (
    <>
      <section className="p-12 shop-banner">
        <div className="container">
          <div className="flex flex-center justify-center items-center">
            <div className="md:col-span-8 lg:col-span-6 text-center">
              <div className="shop-details">
                <h1 className="text-white text-2xl">
                  <b className="text-primary">#100%</b> Off On All Products
                </h1>
                <p className="text-white text-lg">
                  Make your orders we will deliver..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" p-12">
        <div className="container">
          <div className="flex flex-center">
            <ProductList />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
