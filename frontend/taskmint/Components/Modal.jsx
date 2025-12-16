import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
const Modal = ({ children }) => {
  const { showModal, setShowModal } = useContext(AppContext);

  return (
    <>
      {showModal && (
        <div className="fixed h-full w-full flex justify-center items-center z-50 inset-0 bg-black/80">
          <div className="w-full max-w-200   bg-neutral-950 text-white p-4 shadow-md  rounded-md">
            {children}
          </div>
          {/* modal close button */}
          <button
            onClick={() => setShowModal(false)}
            className=" absolute top-5 right-5 bg-white text-black p-2 border-0 rounded-md cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </>
  );
};

export default Modal;
