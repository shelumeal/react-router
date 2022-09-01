import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParam, setSearchParam] = useSearchParams();
  const showActiveUsers = searchParam.get("filter") === "active";
  return (
    <div>
      <nav>
        <Link to=":1">User 1</Link>
        <Link to=":2">User 2</Link>
        <Link to="admin">Admin</Link>
      </nav>
      <Outlet />
      <div>
        <button onClick={() => setSearchParam({ filter: "active" })}>
          Active users
        </button>
        <button onClick={() => setSearchParam({})}>Reset users</button>
      </div>
      {showActiveUsers ? (
        <h2>Showing active users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
}

export default Users;
