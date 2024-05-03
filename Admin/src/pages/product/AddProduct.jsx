import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/ui/Modal";
import { addProducts, toggleAddModal } from "../../app/features/product/productSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";

const schema = z.object({
  name: z.string(),
  description: z.string().min(6),
  price: z.string(),
  quantity: z.string(),
  // image: z.string(),
});


const AddProduct = () => {
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
  });
  const { openProductModal } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(acceptedFiles);
    console.log(data);
    data.category = "662964adfca94f3299ea5f7f";

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("description", data.description);
    formData.append('category', data.category)
    formData.append("image", acceptedFiles[0]);
      dispatch(addProducts(formData));

    setTimeout(() => {
      reset();
      dispatch(toggleAddModal(false));
    }, 400);


  };

  return (
    <>
      <Modal
        isOpen={openProductModal}
        onClose={() => dispatch(toggleAddModal(false))}
        className={"w-[50vw] px-8"}
        title="Add Product"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="m-2">
              <label>Enter product name</label>
            </div>
            <input
              {...register("name")}
              className="form-control dark:bg-slate-700 dark:text-white "
              placeholder="enter name here ..."
            />
            {errors.name && (
              <span className=" text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div className="mb-4">
            <div className="m-2">
              <label>Description</label>
            </div>
            <textarea
              {...register("description")}
              className="form-control dark:bg-slate-700 dark:text-white"
              placeholder="enter descriptions here..."
            />
            {errors.description && (
              <span className=" text-red-600">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <div className="m-2">
              <label>Enter product price</label>
            </div>
            <input
              // type="number"
              {...register("price")}
              className="form-control dark:bg-slate-700 dark:text-white "
              placeholder="enter price here ..."
            />
            {errors.price && (
              <span className=" text-red-600">{errors.price.message}</span>
            )}
          </div>
          <div className="mb-4">
            <div className="m-2">
              <label>Enter product quantity</label>
            </div>
            <input
              // type="number"
              {...register("quantity")}
              className="form-control dark:bg-slate-700 dark:text-white"
              placeholder="enter quantity here ..."
            />
            {errors.quantity && (
              <span className=" text-red-600">{errors.quantity.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image
            </label>
            <div
              {...getRootProps()}
              className="dropzone border-2 border-dashed border-gray-400 rounded-md p-8 text-center"
            >
              <input {...getInputProps()} name="image" />
              <p>Drag & drop an image here, or click to select</p>
            </div>
            {acceptedFiles.length > 0 && (
              <>
                <p>Selected file: {acceptedFiles[0].name}</p>
              </>
            )}
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-lg text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          >
            Add Product
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddProduct;
