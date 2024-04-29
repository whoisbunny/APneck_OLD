import { useDispatch, useSelector } from "react-redux";
import Modal from "../../components/ui/Modal";
import { toggleAddModal } from "../../app/features/product/productSlice";

const AddProduct = () => {



  console.log('in AddProduct');
  const dispatch = useDispatch()
  const { openProductModal } = useSelector((state) => state.product);
  console.log(openProductModal);



  return (
    <>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={openProductModal}
        onClose={() => dispatch(toggleAddModal(false))}
      >
        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Modal Title
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Modal content goes here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AddProduct