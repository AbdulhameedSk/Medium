export const Form = () => {
    return (
        <div className="rounded-lg max-w-md mx-auto mt-10 p-4">
            <h1 className="font-bold text-3xl text-center mb-4">Create an account</h1>
            <p className="font-thin text-center mb-4">
                Already have an account?{" "}
                <a href="Login" className="hover:underline text-blue-500">
                    Login
                </a>
            </p>
            <form className="max-w-lg mx-auto">
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="border w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="border w-full rounded-lg py-2 px-4 border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-3/4 hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};
