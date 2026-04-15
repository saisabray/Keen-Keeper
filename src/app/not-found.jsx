'use client';
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-red-200 p-6 rounded-full">
            <FaExclamationTriangle className="text-red-600 text-5xl" />
          </div>
        </div>

        <h1 className="text-6xl font-bold ">404</h1>
        <h2 className="text-2xl font-semibold mt-2">Page Not Found</h2>

        <p className="text-xl font-medium italic mt-4">
          Sorry the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/" className="btn btn-primary">
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Go Back
          </button>
        </div>

        <p className="text-[20px] font-semibold mt-5">
          Error code: 404 | Resource not found
        </p>
      </div>
    </div>
  );
}
export default NotFound;