import React from "react";
import useFetch from "../useFetch";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div className="container my-4">
      <h1>List of Users</h1>
      <ul className="list-group">
        {data ? (
          data.map((user) => (
            <li key={user.id} className="list-group-item">
              <h4>• {user.name}</h4>

              <p> Email: {user.email}</p>
              <p> Phone: {user.phone}</p>
              <p> Company: {user.company.name}</p>
              <Link className="btn btn-primary" to={`/userDetails/${user.id}`}>
                View Details
              </Link>
            </li>
          ))
        ) : (
          <p>loading</p>
        )}
      </ul>
    </div>
  );
};

export default Users;
