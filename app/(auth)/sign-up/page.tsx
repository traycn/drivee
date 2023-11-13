"use client";
import Image from 'next/image'
import { useRouter } from "next/navigation";

const SignUp = () => {

  const router = useRouter();

  const redirectToOnboarding = () => {
    router.push('/onboarding')
  }
  

  return (

    <main className="flex overflow-hidden">
      <div className='mt-44 mb-24 padding-x padding-y max-width'>
        <div className='flex flex-wrap justify-between items-center sm:px-16 px-6 py-10'>
          <div className="flex border-solid border-slate-100 border-2 rounded-md shadow-md">
            <form className="flex flex-1 flex-col bg-slate-50 rounded px-12 pt-6 justify-between">
              <div className='flex-col'>
                <div className="mb-10 mt-2 text-center">
                  <h1 className="text-blue-600 font-semibold font-inter text-4xl">SIGN UP</h1>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2 font-inter">
                    Full Name
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder='Jane Doe'/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2 font-inter">
                    Number
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pnumber" type="tel" placeholder='123-456-7890'/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm mb-2 font-inter">
                    Address
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder='1234 Sports Drive'/>
                  <label className="block text-gray-700 text-sm mb-2 font-inter">
                    Apt/Unit
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="text" placeholder='APT 8'/>
                  <label className="block text-gray-700 text-sm mb-2 font-inter">
                    Zip Code
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="address" type="number" min="11111" placeholder='12345'/>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm mb-2 font-inter">
                    Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" />
                  <a className="text-blue-400 hover:text-blue-800 font-inter text-sm" href="/disclaimer">Disclaimer</a>
                  <a className="inline-block align-baseline text-sm font-inter invisible" href="#">
                    Forgot Password?
                  </a>
                </div>

              </div>
              <div className="flex items-center justify-between mb-2 align-bottom">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-inter w-full p-2 rounded focus:outline-none focus:shadow-outline" 
                  type="button"
                  onClick={redirectToOnboarding}>
                    Sign Up
                </button>
              </div>
            </form>
            <div className="flex-col">
              <Image 
                src="/assets/sign-up-banner.png"
                alt="Sign In Banner"
                width={775}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </main>

  )
}

export default SignUp