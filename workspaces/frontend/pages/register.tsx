import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const RegisterPage = () => {
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
          Register
        </h1>

        <form action="" method="post">
          <div className="my-9 px-8">
            <input
              type="text"
              className="w-full block p-3 border-transparent border bg-gray-300 mt-2 text-gray-800 font-semibold placeholder-gray-500 outline-none focus:border-gray-500"
              placeholder="Fullname"
              autoComplete="name"
              required
            />

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
                minLength={6}
                ref={inputPassRef}
                required
              />
              <button
                className="text-xl px-4 absolute right-0 bottom-0 top-0"
                onClick={() => setPassVisible((visible) => !visible)}
              >
                {passVisible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </button>
            </div>

            <button className="p-2 w-full text-gray-800 bg-red-400 block mt-4 text-xl rounded transition-colors duration-200 hover:bg-red-300">
              Register
            </button>

            <div className="flex justify-between mt-6 text-gray-800">
              <Link href="/login">Already registered? Login</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
