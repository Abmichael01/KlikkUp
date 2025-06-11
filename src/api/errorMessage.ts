interface ApiError extends Error {
  response?: {
    data: {
      detail: string;
      email: string;
      username: string;
      password: string;
    };
  };
}

export default function errorMessage(error: ApiError) {
  return (
    error.response?.data.detail ??
    error.response?.data.email ??
    error.response?.data.password ??
    error.response?.data.password ??
    error.response?.data.username ??
    error.message
  );
}
