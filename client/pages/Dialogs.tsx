import React, { useState } from "react";
import { instance } from "../axios";
import Posts from "../component/Posts";
import { useAppSelector } from "../hooks/useAppSelector";
import { IPosts } from "../types/types";
import styles from "../styles/Posts.module.css";
import { GetServerSideProps } from "next";

interface Post {
  posts: IPosts[];
}

const Dialogs: React.FC<Post> = ({ posts }) => {
  const [text, setText] = useState<string>();
  const { data } = useAppSelector((state) => state.authorization);
  function addPost(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      instance.post("/posts/addpost", {
        nickname: data.nickname,
        value: text,
      });
      setText("");
    }
  }

  return (
    <div>
      <title>Диалог</title>
      <div className={styles.scroller}>
        <Posts posts={posts} />
      </div>
      <div className={styles.tool}>
        <input
          onChange={(event) => setText(event.target.value)}
          placeholder="Сообщение"
          value={text}
          className={styles.inp}
          onKeyDown={addPost}
        />
      </div>
    </div>
  );
};

export default Dialogs;
export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await instance.get("/posts/get");
  return {
    props: {
      posts: posts.data,
    },
  };
};
