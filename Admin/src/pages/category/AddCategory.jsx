import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/ui/Modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addcategory, getCategories, openAddModal } from "../../app/features/category/categorySlice";

const schema = z.object({
  name: z.string(),
  description: z.string().min(6),
  
});

const AddCategory = () => {
  const dispatch = useDispatch();
  const { addModal } = useSelector((state) => state.category);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addcategory(data));

    setTimeout(() => {
      reset();
      dispatch(getCategories());
      
      dispatch(openAddModal(false));
    }, 800);
  };

  return (
    <>
      <Modal
        isOpen={addModal}
        onClose={() => dispatch(openAddModal(false))}
        className={"w-[50vw] px-8"}
        title="Add Category"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="m-2">
              <label>Enter Category name</label>
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
          <button
            type="submit"
            className="px-4 py-2 text-lg text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
          >
            Add Category
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddCategory;
