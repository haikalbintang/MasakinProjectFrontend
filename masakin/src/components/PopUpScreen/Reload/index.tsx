import Modal from "@/components/Modal";

interface ReloadProps {
  show?: boolean;
  onClose: () => void;
}

export default function Reload({ show, onClose }: ReloadProps) {
  return (
    <>
      <Modal onClose={onClose}>
        <div className="w-80 px-5 py-4 flex flex-col justify-center items-center">
          <p className="text-sm text-center p-6 pb-8">
            Halaman tidak dapat ditampilkan, cek koneksi internet anda
          </p>
          <div className="w-full">
            <button className="bg-rose-600 text-white w-full py-2 rounded-xl text-sm">
              Muat ulang
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
