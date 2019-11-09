import React, { useEffect } from "react";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);
  return (
    <div>
      <h2>Hello from NextJS</h2>
      <Link href="/about">
        <a>Go to about</a>
      </Link>
    </div>
  );
};

export default Home;
