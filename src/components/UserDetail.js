import React from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
  const { userId } = useParams();
  return <div>User Details ID - {userId}</div>;
}

export default UserDetail;
