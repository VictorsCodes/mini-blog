import { useEffect, useState } from "react";
import { Post } from "./types/Post";
import { PostItem } from "./components/PostItem";
import { api } from "./api";

const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const json = await api.getAllPosts();
      setPosts(json);
    } catch (err) {
      alert("Deu erro em alguma coisa primo. xD");
      console.log(err);
    }
  };
  return (
    <div className="container mx-auto">
      <header className="flex justify-between items-center my-10">
        <h1 className="text-white text-2xl underline cursor-pointer">
          Blog Victor
        </h1>
        <button
          onClick={() => alert("Hello World!")}
          className="rounded bg-slate-900 hover:bg-slate-800 p-2 text-white"
        >
          Assinar newsletter
        </button>
      </header>
      <div className="border border-white border-solid p-1 mb-20">
        <div className="px-1">
          {posts.map((post, index) => (
            <PostItem data={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
