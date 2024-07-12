import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
        <div className="fixed flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl z-50">
          {children}
        </div>
      </div>
    </>
  );
}