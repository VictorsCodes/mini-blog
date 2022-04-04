import React from "react";
import { Post } from "../types/Post";
import heartImg from "../heart.svg";

type Props = {
  data: Post;
};

export const PostItem = ({ data }: Props) => {
  return (
    <div className="bg-white rounded mt-5 p-2 cursor-pointer hover:bg-slate-100">
      <span className="text-xs flex justify-between">
        #{data.id}{" "}
        <img className="hover:scale-105 " src={heartImg} width={25} />
      </span>
      <h1 className="text-xl font-bold mt-3 text-slate-900">
        {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
      </h1>
      <p className="mt-4 text-slate-500">- {data.body}</p>
    </div>
  );
};
