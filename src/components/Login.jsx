import React from "react";
function Login() {
  return (
    <div className="h-screen w-screen bg-zinc-900">
      <div className="flex h-full">
        <div className="left flex-[3] bg-teal-500"></div>
        <div className="right flex items-center flex-[2]">
          <div className="form flex-grow flex flex-col gap-6 px-20 pr-48">
            <h3 className="font-black text-5xl">Sign In</h3>
            <br />
            <form className="flex flex-col gap-5 w-full" action="#">
              <div className="field relative">
                <input
                  type="email"
                  name="email"
                  className="peer w-full border border-2 text-md font-bold border-zinc-700 rounded-md focus:border-teal-500 w-full pb-4 pt-6 px-5 outline-none placeholder-transparent"
                  id="email"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute text-xs top-3 text-teal-500 opacity-1 left-5 text-teal-500 text-md font-bold transition-all duration-200 peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:opacity-1 placeholder-transparent peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-6 peer-placeholder-shown:text-base"
                >
                  Email Address
                </label>
              </div>
              <div className="field relative">
                <input
                  type="password"
                  name="password"
                  className="peer w-full border border-2 text-md font-bold border-zinc-700 rounded-md focus:border-teal-500 w-full pb-4 pt-6 px-5 outline-none placeholder-transparent"
                  id="password"
                  placeholder="Password"
                />
                <label
                  htmlFor="password"
                  className="absolute text-xs top-3 text-teal-500 opacity-1 left-5 text-teal-500 text-md font-bold transition-all duration-200 peer-placeholder-shown:text-zinc-400 peer-placeholder-shown:opacity-1 placeholder-transparent peer-placeholder-shown:top-[1.4rem] peer-placeholder-shown:left-6 peer-placeholder-shown:text-base"
                >
                  Password
                </label>
              </div>

              <button className="bg-teal-500 py-3 font-bold text-zinc-900 text-lg">
                Sign In
              </button>
            </form>
            <div className="flex flex-row gap-3 flex-grow items-center">
              <hr className="border border-2 border-zinc-800 w-full" />
              <h3 className="font-bold text-zinc-500 ">OR</h3>
              <hr className="border border-2 border-zinc-800 w-full" />
            </div>
            <button className="text-teal-500 flex items-center gap-5 justify-center font-bold text-xl">
              <svg
                className="stroke-teal-500 fill-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 50 50"
              >
                <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
              </svg>
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;