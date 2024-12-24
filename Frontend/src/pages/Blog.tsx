import { Appbar } from "../components/Appbar";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog(id || "");

  if (loading || !blog) {
    return (
      <div>
        <Appbar name="SHAIK ABDULHAMEED" />
        <div className="h-screen flex flex-col justify-center">
          <div className="h-screen flex flex-col justify-center items-center">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};