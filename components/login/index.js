import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../public/super-app-logo.svg'
import EyeSlash from '../../public/eye-slash.png'
import EyeIcon from '../../public/eye.png'
import KPLogo from '../../public/KP_logo.png'

export default function Index() {

  const [showPassword, setshowPassword] = useState(false);

  const changetypePassword = () => {

    setshowPassword(!showPassword);

  };

  return (
    <>
      <section className='w-full login-bg'>
        <div className='pt-[50px] pb-[50px] bg-GreenC text-center logo-container relative'>
          <Link href="/">
            <a>
              <Image
                src={Logo}
                alt="Super App Logo"
                className='!max-w-[245px] !h-auto !w-full'
              />
            </a>
          </Link>
        </div>
        <div className='login-form-container'>
          <h1 className='font-bold text-DarkGrey1C text-[22px] leading-[30px]'>Welcome back</h1>
          <p className='text-[14px] leading-[19px] mt-1.5 text-BlackC/[0.5]'>Super App by Govt of KP</p>
          <form className='w-full'>
            <div className='flex flex-col justify-between items-start mt-8'>
              <label htmlFor="email" className='text-[13px] leading-[17px] text-BlackC capitalize'>Email</label>
              <input type='text' id='email' name='email' placeholder='Enter Email' className='login-input-field' />
            </div>
            <div className='flex flex-col justify-between items-start mt-4 relative'>
              <label htmlFor="password" className='text-[13px] leading-[17px] text-BlackC capitalize'>Password</label>
              <input type={showPassword ? 'text' : 'password'} id='password' name='password' placeholder='Enter Password' className='login-input-field' />
              <button className='absolute right-[15px] top-[40px]' type='button'>
                <Image src={showPassword ? EyeSlash : EyeIcon} alt="icon" title={showPassword ? 'Hide Password' : 'Show Password'} onClick={changetypePassword} className='w-[14px] h-auto' />
              </button>
            </div>
            <div className='mt-2.5 text-right pr-2.5'>
              <Link href="/">
                <a className='text-[14px] leading-[19px] text-DarkGrey1C hover:text-GreenC capitalize'>
                  Forgot password?
                </a>
              </Link>
            </div>
            <div>
              <button type='submit' className='custom-button'>Log in</button>
            </div>
          </form>
        </div>
        <div className='mt-[30px] text-center'>
          <Link href="/">
            <a>
              <Image
                src={KPLogo}
                alt="Government of KPK Logo"
                className='!max-w-[329px] !h-auto !w-full'
              />
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}