import './App.css';

function App() {
  return (
    <div className="background-image flex items-center flex-col">
      <div className="min-w-40 max-w-96 flex flex-col">
        <strong className='mt-60 md:mt-40'><h1 className='text-xl grid justify-items-center content-center'>Login</h1></strong>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="email" id="miInput" name="miInput" placeholder="Email" />
        <input className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="password" id="miInput" name="miInput" placeholder="Password" />
        <button className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Sign in</button>
      </div>
    </div>
  );
}

export default App;
