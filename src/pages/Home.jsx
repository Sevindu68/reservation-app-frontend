import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="text-4xl flex justify-center align-middle h-[100%]">
        <div className="p-12 rounded border-2 border-cyan-500 mt-60">Welcome to Vehicle reservation app</div>
      </div>
    </div>
  );
};

export default Home;
