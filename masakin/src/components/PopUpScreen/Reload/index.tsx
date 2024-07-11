import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

export default function Reload() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  if (isOnline) {
    return null;
  }

  return (
    <>
      <Modal>
        <div className="w-80 px-5 py-4 flex flex-col justify-center items-center">
          <p className="text-sm text-center p-6 pb-8">
            Halaman tidak dapat ditampilkan, cek koneksi internet anda
          </p>
          <div className="w-full">
            <button
              onClick={handleReload}
              className="bg-rose-600 text-white w-full py-2 rounded-xl text-sm"
            >
              Muat ulang
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
