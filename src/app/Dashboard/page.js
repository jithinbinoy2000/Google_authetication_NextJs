import { auth } from "../auth";
import { SignOut } from "../components/signout-btn";

export default async function Dashboard() {
  const session = await auth();

  if (!session?.user) return <p>Loading...</p>;

  return (
    <div className="h-[100vh] bg-gradient-to-r from-gray-800 to-gray-900 text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-900 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <div className="flex items-center justify-center mb-6">
          <img
            src={session.user.image}
            alt={session.user.name}
            className="w-24 h-24 rounded-full border-4 border-gray-700 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
          />
        </div>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold mb-2 transition-colors duration-300 hover:text-yellow-300">
            Welcome, {session.user.name}!
          </h1>
          <p className="text-lg font-medium text-gray-400 transition-colors duration-300 hover:text-gray-300">
            Your email ID is {session.user.email}
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <button
          
            className="relative px-8 py-4 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 text-white rounded-full shadow-lg transition-transform transform-gpu hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 overflow-hidden"
          >
            <span className="relative z-10">Let's Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 opacity-30 rounded-full"></div>
            <div className="absolute inset-0 transform -rotate-45 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 opacity-20 rounded-full"></div>
          </button>
        </div>
        <div className="flex justify-center">
          <SignOut />
        </div>
      </div>
    </div>
  );
}
