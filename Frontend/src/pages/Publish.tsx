import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { ReactQuillWrapper } from "../../TextEditor";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
const navigate = useNavigate();
  return (
    <div>
      <Appbar name="SHAIK" />
      <div className="border rounded-lg max-w-lg mx-auto mt-10 p-4">
        <div className="">
          <input
            aria-describedby="helper-text-explanation"
            className="bg-gray-50 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Title of the Blog"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <ReactQuillWrapper onChange={setContent} />
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={async() => {
              console.log("Publish button clicked");
              const response=await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content,
              },{
                headers: {
                  Authorization: localStorage.getItem("token"),
                },
              });
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg w-3/4 hover:bg-blue-600"
          >
            Publish
          </button>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Preview</h2>
          <div
            className="border p-4 mt-2  break-all "
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </div>
  );
};