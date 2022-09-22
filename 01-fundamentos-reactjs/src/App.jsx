import { Post } from "./Post";

import { useState } from "react";
import { Header } from "./components/Header";

import './global.css';

export function App() {

  return (
    <div>
      <Header/>
      <Post
        author="Kelwin Gerson"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione ut libero nisi, unde voluptates qui cupiditate aspernatur aliquid. Veniam id doloremque velit tempore, molestiae dignissimos natus iusto animi esse.     "
      />
      <Post
        author="Ana"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ratione ut libero nisi, unde voluptates qui cupiditate aspernatur aliquid. Veniam id doloremque velit tempore, molestiae dignissimos natus iusto animi esse.     "
      />
    </div>
  );
}
