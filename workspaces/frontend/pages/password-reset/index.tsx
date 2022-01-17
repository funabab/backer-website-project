import Link from 'next/link'

const PasswordResetPage = () => {
  return (
    <div className="bg-gray-800 w-screen h-screen flex justify-center items-center">
      <div
        className="bg-gray-200 w-10/12 lg:w-6/12"
        style={{ maxWidth: '40rem' }}
      >
        <h1 className="text-2xl bg-red-500 p-2 text-gray-800 font-bold text-center uppercase">
          Password Reset
        </h1>

        <form action="" method="post">
          <div className="my-9 px-8">
            <input
              type="email"
              className="w-full block p-3 border-transparent border bg-gray-300 mt-2 text-gray-800 font-semibold placeholder-gray-500 outline-none focus:border-gray-500"
              placeholder="Email"
              required
            />

            <button className="p-2 w-full text-gray-800 bg-red-400 block mt-4 text-xl rounded transition-colors duration-200 hover:bg-red-300">
              Reset Password
            </button>

            <div className="flex justify-between mt-6 text-gray-800">
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PasswordResetPage
