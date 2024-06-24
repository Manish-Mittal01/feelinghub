import toast from "react-hot-toast";

export const successMsg = (msg) => {
  toast.dismiss();
  toast.success(msg);
};

export const errorMsg = (msg) => {
  toast.dismiss();
  toast.error(msg);
};
