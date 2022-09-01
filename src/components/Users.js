import React from "react";
import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <div>
      <nav>
        <Link to=":1">User 1</Link>
        <Link to=":2">User 2</Link>
        <Link to="admin">Admin</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Users;
