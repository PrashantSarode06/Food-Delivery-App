import React from "react";
import Nav from "../Components/Nav";
import Categories from "../Category";

function Home() {
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Categories.map((item) => {
          return (
            <div className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-6 text-[15px] text-gray-500 font-semibold rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200">
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
