import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../Api/session";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();

  const userLogIn = useMutation(logIn, {
    onSuccess: (res) => {
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response.data.errorMsg);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    userLogIn.mutate(data);
  };

  return (
    <section className="background_style h-full gradient-form md:h-screen">
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="w-100 justify-center">
                <img
                  className="img_logo m-auto"
                  src={require("../../assets/img/img_logo.png")}
                  alt="logo"
                />
              </div>
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">
                  BARBER SHOP
                </h1>
                <p>Please login your account</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label for="" className="text-s font-semibold px-1">
                        Username
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="email"
                          name="email"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5">
                      <label for="" className="text-s font-semibold px-1">
                        Password
                      </label>
                      <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                          <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                        </div>
                        <input
                          type="password"
                          name="password"
                          className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex -mx-3">
                    <div className="w-full px-3 mb-5 text-center">
                      <button className="block mb-2 w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                        LOG IN
                      </button>
                      <a className=" text-gray-500" href="#!">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="btn-style_newAccount inline-block px-6 py-2 border-2 border-black-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      // onClick={() => register("/register", { replace: true })}
                    >
                      Create account
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="hidden md:block w-1/2 h-80">
              <img
                src={require("../../assets/img/LoginAndRegister/img_login.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
