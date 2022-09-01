import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const naviage = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => naviage("order-summary")}>Place order</button>
    </div>
  );
}

export default Home;
