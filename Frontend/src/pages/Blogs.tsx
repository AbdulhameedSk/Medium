// filepath: /c:/Users/shaik/OneDrive/Desktop/medium/medium/Frontend/src/pages/Blogs.tsx
import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useBlogs } from "../hooks";
import { BlogSkeleten } from "../components/BlogSkeleten";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <Appbar name="SHAIK ABDULHAMEED" />
        <div className="flex flex-col items-center">
          <BlogSkeleten />
          <BlogSkeleten />
          <BlogSkeleten />
          <BlogSkeleten />
          <BlogSkeleten />
          <BlogSkeleten />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar name="SHAIK ABDULHAMEED" />
      <div className="flex flex-col items-center">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            publishedDate={"2nd Feb 2021"}
          />
        ))}
      </div>
    </div>
  );
};