import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
const UserDetails = () => {
  const { userId } = useParams();
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  const userData = data?.find((user) => user.id == userId);

  return (
    <div style={{ height: "70rem" }}>
      {userData ? (
        <div className="container my-5">
          <h2>{userData.name}</h2>
          <ul className="list-group">
            <il className="list-group-item">
              <strong>Name: </strong>
              {userData.name}
            </il>
            <il className="list-group-item">
              {" "}
              <strong>Username: </strong>
              {userData.username}
            </il>
            <il className="list-group-item">
              {" "}
              <strong>Email: </strong>
              {userData.email}
            </il>
            <il className="list-group-item">
              {" "}
              <strong>Phone: </strong>
              {userData.phone}
            </il>
            <il className="list-group-item">
              {" "}
              <strong>Website: </strong>
              {userData.website}
            </il>
            <il className="list-group-item">
              <strong>Company: </strong>
              {userData.company.name}
            </il>
            <il className="list-group-item">
              {" "}
              <strong>City: </strong>
              {userData.address.city}
            </il>
            <il className="list-group-item">
              {" "}
              <strong>Zipcode: </strong>
              {userData.address.zipcode}
            </il>
          </ul>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserDetails;
