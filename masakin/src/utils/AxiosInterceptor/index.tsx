import axios from "axios";

export const setupInterceptors = (store: any, router: any) => {
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
            store.setPopupMessage("Invalid request. Please check the data you entered.");
            break;
          case 401:
            console.error("Unauthorized, redirecting to login...");
            store.setPopupMessage("You do not have access. Please log in again.");
            router.push("/login");
            break;
          case 403:
            console.error("Forbidden, redirecting to login...");
            store.setPopupMessage("You do not have permission to access this resource.");
            router.push("/login");
            break;
          case 404:
            console.error("Not Found, showing popup...");
            store.setPopupMessage("The resource you are looking for was not found.");
            break;
          case 500:
            console.error("Internal Server Error, showing popup...");
            store.setPopupMessage("An error occurred on the server. Please try again later.");
            break;
          default:
            console.error("An error occurred, showing popup...");
            store.setPopupMessage("An error occurred. Please try again.");
        }
        store.setShowPopup(true);
      }
      return Promise.reject(error);
    }
  );
};