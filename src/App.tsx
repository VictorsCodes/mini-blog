import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import heartImg from "./heart.svg";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await response.json();
    setPosts(json);
  };
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center my-10">
        <h1 className="text-white text-2xl underline cursor-pointer">
          Blog Victor
        </h1>
        <button
          onClick={() => alert("Bonieky você é muito foda! xD")}
          className="rounded bg-slate-900 hover:bg-slate-800 p-2 text-white"
        >
          Assinar newsletter
        </button>
      </header>
      <div className="border border-white border-solid p-1 mb-20">
        <div className="px-1">
          {posts.map((post, index) => (
            <div className="bg-white rounded mt-5 p-2 cursor-pointer hover:bg-slate-100">
              <span className="text-xs flex justify-between">
                #{post.id}{" "}
                <img className="hover:scale-105 " src={heartImg} width={25} />
              </span>
              <h1 className="text-xl font-bold mt-3 text-slate-900" key={index}>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </h1>
              <p className="mt-4 text-slate-500">- {post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
