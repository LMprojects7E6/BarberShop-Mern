import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../LoginPage/Login.css'

const Login2 = () => {
    const register = useNavigate();
  return (
    <section className="background_style h-full gradient-form md:h-screen">
    <div class="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{maxWidth:"1000px"}}>
        <div class="md:flex w-full">
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
            <div className='w-100 justify-center'>
                        <img
                            className="img_logo m-auto"
                            src={require("../../assets/img/img_logo.png")}
                            alt="logo"
                        />
                    </div>
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">BARBER SHOP</h1>
                    <p>Please login your account</p>
                </div>
                <div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                        <label for="" class="text-s font-semibold px-1">Username</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Username" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="" class="text-s font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5 text-center">
                            <button class="block mb-2 w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">LOG IN</button>
                            <a className=" text-gray-500" href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="btn-style_newAccount inline-block px-6 py-2 border-2 border-black-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      onClick={() => register("/register",{replace: true})}
                    >
                      Create account
                    </button>
                  </div>
                </div>
            </div>
            <div class="hidden md:block w-1/2 h-80">
              <img src={require("../../assets/img/LoginAndRegister/img_login.jpg")} />
            </div>
        </div>
    </div>
    </div>
</section>
  )
}

export default Login2