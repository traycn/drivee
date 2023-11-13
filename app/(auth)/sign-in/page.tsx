"use client";

import Image from "next/image"
import { useRouter } from "next/navigation";

const SignIn = () => {

  const router = useRouter();
  
  const redirectToSignUp = () => {
    router.push('/sign-up')
  }
  
  return (
    <main className="flex overflow-hidden">

      <div className='mt-44 mb-24 padding-x padding-y max-width'>
        <div className='flex flex-wrap justify-between items-center sm:px-16 px-6 py-10'>
          <div className="flex border-solid border-slate-100 border-2 shadow-md rounded-md">
            <form className="flex-col bg-slate-50 rounded px-12 pt-6 pb-44">
              <div className="mb-10 mt-2 text-center">
                <h1 className="text-blue-600 font-bold font-inter text-4xl">LOGIN</h1>
              </div>
              <div className="mb-20">
                <p className="block text-gray-700 mb-4 font-inter">Don't have an account?</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-inter w-full p-2 rounded-2xl focus:outline-none focus:shadow-outline" 
                  type="button"
                  onClick={redirectToSignUp}>
                  Sign Up
                </button>
              </div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-200"></hr>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2 font-inter">
                  Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm mb-2 font-inter">
                  Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                <a className="inline-block align-baseline text-sm text-blue-400 hover:text-blue-800 font-inter" href="#">
                  Forgot Password?
                </a>
                <br />
                <a className="text-blue-400 hover:text-blue-800 font-inter text-sm" href="/disclaimer">Disclaimer</a>
              </div>
              <div className="flex items-center justify-between mb-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-inter w-full p-2 rounded-2xl focus:outline-none focus:shadow-outline" type="button">
                  Sign In
                </button>
              </div>
            </form>
            <div className="flex-col">
              <Image 
                src="/assets/sign-in-banner.png"
                alt="Sign In Banner"
                width={775}
                height={750}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignIn