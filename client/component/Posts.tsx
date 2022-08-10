import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { IPosts } from "../types/UserTypes";
import styles from "../styles/Posts.module.css";
import axios from "axios";
import { instance } from "../axios";

interface Posts {
  posts: IPosts[];
}

const Posts: React.FC<Posts> = ({ posts }) => {
  return (
    <div>
      {posts.map(({ value, nickname }, idx) => (
        <div key={idx} className={styles.bubble}>
          <Link href="/Profile">
            <a className={styles.user}>{nickname}</a>
          </Link>
          <div className={styles.message}>{value}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
