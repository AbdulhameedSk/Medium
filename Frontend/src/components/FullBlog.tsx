import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar name="SHAIK ABDULHAMEED" />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
            <div
              className="pt-4 pr-6 break-words"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex flex-col w-full">
              <div className="flex">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                <div className="text-xl font-bold flex justify-center items-center pl-3">
                  {blog.author.name || "Anonymous"}
                </div>
              </div>
              <div>
                <div className="pt-2 text-slate-500">
                  Random catch phrase about the author's ability to grab the user's attention
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};