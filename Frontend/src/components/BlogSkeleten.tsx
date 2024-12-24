export const BlogSkeleten = () => {
  return (
    <div className="bg-white overflow-hidden p-2 rounded-lg w-screen max-w-screen-sm mx-auto animate-pulse">
      <div className="flex items-center mt-2">
        <div className="rounded-full bg-gray-300 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1 ml-4">
          <div className="h-2 bg-gray-300 rounded w-1/4"></div>
          <div className="h-2 bg-gray-300 rounded w-1/6"></div>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-4 bg-gray-300 rounded w-2/4 mt-2"></div>
      </div>
      <div className="mt-4">
        <div className="h-2 bg-gray-300 rounded w-full"></div>
        <div className="h-2 bg-gray-300 rounded w-full mt-2"></div>
      </div>
      <div className="text-slate-500 text-sm font-thin py-4">
        <div className="h-2 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>
  );
};