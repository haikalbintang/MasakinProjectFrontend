import axios from "axios";
import { useRouter } from "next/router";

export const setupInterceptors = (store: any) => {
  const router = useRouter();

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        switch (error.response.status) {
          case 400:
            console.error("Bad Request, showing popup...");
            store.setPopupMessage("Permintaan tidak valid. Silakan periksa data yang Anda masukkan.");
            break;
          case 401:
            console.error("Unauthorized, redirecting to login...");
            store.setPopupMessage("Anda tidak memiliki akses. Silakan login kembali.");
            router.push("/login");
            break;
          case 403:
            console.error("Forbidden, redirecting to login...");
            store.setPopupMessage("Anda tidak memiliki izin untuk mengakses sumber daya ini.");
            router.push("/login");
            break;
          case 404:
            console.error("Not Found, showing popup...");
            store.setPopupMessage("Sumber daya yang Anda cari tidak ditemukan.");
            break;
          case 500:
            console.error("Internal Server Error, showing popup...");
            store.setPopupMessage("Terjadi kesalahan pada server. Silakan coba lagi nanti.");
            break;
          default:
            console.error("An error occurred, showing popup...");
            store.setPopupMessage("Terjadi kesalahan. Silakan coba lagi.");
        }
        store.setShowPopup(true); // Tampilkan popup
      }
      return Promise.reject(error);
    }
  );
};