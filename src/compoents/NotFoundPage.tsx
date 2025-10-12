import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex items-center justify-center">
      <div className="bg-neutral-900 border border-gray-800 rounded-2xl shadow-lg p-10 text-center max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">404</h1>
        <p className="text-gray-400 mb-8">
          Oops! The page you're looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/developerMode"
          className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-500 transition"
        >
          Go to Developer Mode
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
