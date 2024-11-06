import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-3">User Data base</h1>
        <p>View company's user data</p>
        <Link className="btn my-3 bg-body-tertiary fw-normal" to="/users">
          View List of Users
        </Link>
      </div>

      <div className="text-center py-5 bg-body-tertiary">
        <h1 className="display-3">User Statistics</h1>
        <p>View company's user statistics</p>
        <Link className="btn btn-primary my-3  fw-normal" to="/statictics">
          View user Stats
        </Link>
      </div>
    </>
  );
};

export default Home;
