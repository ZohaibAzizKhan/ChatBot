import { Link } from "react-router";

function Login(){
   return(
    <form  className="flex flex-col shadow-lg border-1 rounded-2xl items-center w-full h-full p-3">
      <h1 className="font-bold text-4xl text-white">Login</h1>
      <div class="w-full p-4">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="block w-full  mb-4 rounded-2xl border border-black focus:border-2 focus:border-pink-400 p-2 bg-gray-50" placeholder="john.doe@company.com" required />
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="email" class=" bg-gray-50 border  text-gray-900 text-sm rounded-2xl focus:border-blue-500 block w-full p-2.5 " required />
    </div>
    <div className="w-full p-4 flex flex-row">
    <button type="button" class="text-black w-full bg-white hover:bg-gray-400 focus:outline-none focus:ring-4 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Sign In</button>
    <Link to={'/registration'} type="button" class="text-white w-full bg-black hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Up</Link>
      </div> 
    </form>
   )
}
export default Login;