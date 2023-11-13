"use client";

import Link from 'next/link';
import Image from 'next/image';

import CustomButton from './CustomButton';
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  
  const redirectToSignIn = () => {
    router.push('/sign-in')
  }

  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1400px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image 
            src="/logo-header.svg"
            alt="Drive Ease Logo"
            width={215}
            height={24}
            className='object-contain'
          />
        </Link>

        <CustomButton 
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={redirectToSignIn}
        />
      </nav>
    </header>
  )
}

export default Navbar