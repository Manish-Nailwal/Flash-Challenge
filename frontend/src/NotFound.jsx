import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <div className="min-h-screen  flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle size={64} className="text-indigo-700" />
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-6">
            Page Not Found
          </h2>
          <p className="text-white mb-8">
          The page you are attempting to access is currently unavailable or undergoing maintenance.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
