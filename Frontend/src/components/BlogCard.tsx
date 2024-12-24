import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id: number;
}

export const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
  const truncatedContent = content.length > 200 ? content.slice(0, 200) + "..." : content;

  return (
    <Link to={`/blog/${id}`}>
      <div className="bg-white overflow-hidden p-2 rounded-lg w-screen max-w-screen-sm cursor-pointer">
        <div className="">
          <div className="flex items-center mt-2">
            <Avatar name={authorName} />
            <p className="mx-2 text-gray-800">{authorName}.</p>
            <p className="mx-2 text-gray-300 text-thin">{publishedDate}</p>
          </div>
          <h2 className="font-semibold text-2xl text-gray-800 mt-2">{title}</h2>
          <div className="flex">
            <p
              className="text-gray-600 block break-all whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: truncatedContent }}
            ></p>
          </div>
          <div className="text-slate-500 text-sm font-thin py-4">
            {`${Math.ceil(content.length / 100)} minute(s) read`}
          </div>
        </div>
        <div className="border"></div>
      </div>
    </Link>
  );
};

export function Avatar({ name, size = "small" }: { name: string; size?: "small" | "big" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
      </span>
    </div>
  );
}