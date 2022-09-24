import axios from "axios";
import { toast } from "react-toastify";

const loginService = async (user, navigate,location) => {
  const response = await axios.post("https://dogs-breed-app.herokuapp.com/login", {
    email: user.email,
    password: user.password,
  });

  const { data } = response;

  if (data?.auth) {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", JSON.stringify(data.auth));
    toast.success("You are Succesfully Logged In");
    navigate(location?.state?.from?.pathname || "/breedlisting", { replace: true });
  } else {
    toast.warn("Please enter correct details");
  }
};

const registerService = async (newUser, navigate, location) => {
  try {
    const response = await axios.post(
      "https://dogs-breed-app.herokuapp.com/register",
      newUser
    );

    localStorage.setItem("user", JSON.stringify(response.data.result));
    localStorage.setItem("token", JSON.stringify(response.data.auth));
    toast.success("You account is successfully created")
    navigate(location?.state?.from?.pathname || "/breedlisting", { replace: true });
  } catch (error) {
    console.error(error);
  }
};

export { loginService, registerService };
