import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import Logo from '../public/images/logo.png'

const LoginPage = () => {
  const inputPassRef = useRef<HTMLInputElement>(null)
  const [passVisible, setPassVisible] = useState(false)

  useEffect(() => {
    inputPassRef.current?.setAttribute(
      'type',
      passVisible ? 'text' : 'password'
    )
  }, [passVisible])

  return (
    <div className="bg-gray-800 w-screen h-screen flex justify-center items-center">
      <div
        className="bg-gray-200 w-10/12 lg:w-6/12"
        style={{ maxWidth: '40rem' }}
      >
        <h1 className="text-2xl bg-red-500 p-2 text-gray-800 font-bold text-center uppercase">
          Backer Login
        </h1>

        <div className="mt-5 mb-8 text-center">
          <div className="w-24 h-24 mx-auto relative">
            <Image src={Logo} layout="fill" objectFit="scale-down" />
          </div>
        </div>

        <form action="" method="post">
          <div className="px-8 mb-9 text-gray-800">
            <input
              type="email"
              className="w-full block p-3 border-transparent border bg-gray-300 mt-2 text-gray-800 font-semibold placeholder-gray-500 outline-none focus:border-gray-500"
              placeholder="Email"
              required
            />

            <div className="relative bg-gray-300 mt-2 text-gray-800">
              <input
                type="password"
                className="w-full block p-3 border-transparent border font-semibold bg-transparent placeholder-gray-500 outline-none focus:border-gray-500"
                placeholder="Password"
                ref={inputPassRef}
                minLength={6}
                required
              />
              <button
                className="text-xl px-4 absolute right-0 bottom-0 top-0"
                onClick={() => setPassVisible((visible) => !visible)}
              >
                {passVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            <label className="block mt-4">
              <input type="checkbox" className="mr-2" /> Keep me signed in
            </label>

            <button className="p-2 w-full  bg-red-400 block mt-4 text-xl rounded transition-colors duration-200 hover:bg-red-300">
              Login
            </button>

            <div className="flex justify-between mt-6">
              <Link href="/password-reset">Forget Password?</Link>
              <Link href="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
