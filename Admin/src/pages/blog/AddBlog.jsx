import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/ui/Modal";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDropzone } from "react-dropzone";
import { addBlog, openAddModal } from "../../app/features/blog/blogSlice";

const schema = z.object({
  title: z.string(),
  description: z.string().min(6),
  // image: z.string(),
});

const AddBlog = () => {
  const dispatch = useDispatch();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
  });
  const { addModal } = useSelector((state) => state.blog);

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

    const formData = new FormData();
    formData.append("title", data.title);

    formData.append("description", data.description);
    formData.append("blogImage", acceptedFiles[0]);
    dispatch(addBlog(formData));

    setTimeout(() => {
      reset();
      dispatch(openAddModal(false));
    }, 400);
  };

  return (
    <>
      <Modal
        isOpen={addModal}
        onClose={() => dispatch(openAddModal(false))}
        className={"w-[50vw] px-8"}
        title="Add Blog"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <div className="m-2">
              <label>Enter title</label>
            </div>
            <input
              {...register("title")}
              className="form-control dark:bg-slate-700 dark:text-white "
              placeholder="enter name here ..."
            />
            {errors.title && (
              <span className=" text-red-600">{errors.title.message}</span>
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
              <input {...getInputProps()} name="blogImage" />
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
            Add Blog
          </button>
        </form>
      </Modal>
    </>
  );
};

export default AddBlog;
