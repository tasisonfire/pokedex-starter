import { AxiosResponse, AxiosError } from "axios";

export const handleResonspe = {
  success: (res: AxiosResponse) => {
    return {
      status: res.status,
      data: res.data,
    };
  },
  error: (res: AxiosError<AxiosResponse>) => {
    if (res.message == "Network Error") {
      return {
        status: 500,
        error: res,
      };
    } else {
      return {
        status: res.response?.status,
        error: res.response?.data,
      };
    }
  },
};
