import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome Back!</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2 text-blue-500 leading-tight" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
