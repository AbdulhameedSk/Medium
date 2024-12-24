import { Link } from "react-router-dom";
export const Appbar=({name}:{name:string})=>{
    return (
        <div>
        <nav className="bg-white border-white-200 bg-white-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/blogs" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/* <img src="src\assets\6102425088075877028.jpg" className="h-8 rounded-full" alt="Flowbite Logo" /> */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Medium</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black-500 rounded-lg md:hidden hover:bg-white-100 focus:outline-none focus:ring-2 focus:ring-white-200 dark:text-black-400 dark:hover:bg-white-700 dark:focus:ring-white-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className=" hidden w-full md:block md:w-auto" id="navbar-default">

      <ul className="font-medium flex flex-col p-4 md:p-0 mt-5 border border-white-100 rounded-lg bg-white-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-white-800 md:dark:bg-white-900 dark:border-white-700">
      <div className="mt-1">
        <Avatar name={name}  />
        </div>
<Link to="/publish">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 border border-blue-700 rounded">
  New Post
</button>
</Link>
        <li>
          <a href="#" className="block mt-1 px-3 text-black-900 rounded hover:bg-white-100  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-black md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" className="block mt-1 px-3 text-black-900 rounded hover:bg-white-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-white-700 dark:hover:text-black md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </div>
    )
}

function Avatar({ name }: { name: string }) {
  return (
      <div className="relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full w-8 h-8">
          <span className="text-xs font-extralight text-gray-600 dark:text-gray-300">
              {name[0]}
          </span>
      </div>
  );
}