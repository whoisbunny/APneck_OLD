import { useDispatch, useSelector } from "react-redux";
import {

  toggleEditModal,
} from "../../app/features/product/productSlice";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useDropzone } from "react-dropzone";
import Modal from "../../components/ui/Modal";
import DropZone from "../../components/ui/DropZone";

const schema = z.object({
  name: z.string(),
  description: z.string().min(6),
  price: z.string(),
  quantity: z.string(),
  // image: z.string(),
});

const EditProduct = () => {
  const dispatch = useDispatch();
  // const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
  //   accept: "image/*",
  // });
  const { editModal, editItem } = useSelector((state) => state.product);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    // console.log(acceptedFiles);
    console.log(data);
    data.category = "662964adfca94f3299ea5f7f";

    // const formData = new FormData();
    // formData.append("name", data.name);
    // formData.append("price", data.price);
    // formData.append("quantity", data.quantity);
    // formData.append("description", data.description);
    // formData.append("category", data.category);
    // formData.append("image", acceptedFiles[0]);
    // dispatch(editProducts(formData));
    setTimeout(() => {
      reset();
      dispatch(toggleEditModal(false));
    }, 400);
  };

  return (
    <>
      <Modal
        isOpen={editModal}
        onClose={() => dispatch(toggleEditModal(false))}
        className={"w-[50vw] px-8"}
        title="Edit Product"
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
              defaultValue={editItem.name}
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
              defaultValue={editItem.description}
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
              defaultValue={editItem.price}
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
              defaultValue={editItem.quantity}
            />
            {errors.quantity && (
              <span className=" text-red-600">{errors.quantity.message}</span>
            )}
          </div>


          <div className="mb-4">
            <DropZone/>
          </div>
          <button
            type="submit"
            className="px-4 py-2 text-lg text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          >
            Edit Product
          </button>
        </form>
      </Modal>
    </>
  );
};

export default EditProduct;
