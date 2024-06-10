export default function errorToaster(toast: any, error: any) {
  if (error?.response && error?.response?.data && error?.response?.data?.detail)
    toast.error(error.response.data.detail);
  else toast.error(error.response.data.message);
}
