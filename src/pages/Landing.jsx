import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          Restaurant Name
        </h1>
        <p className="mt-3 text-gray-500 text-sm sm:text-base">
          Welcome! Browse our menu and place your order.
        </p>

        <Link
          to="/menu"
          className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98]"
        >
          Start Order
        </Link>
      </div>
    </div>
  )
}
