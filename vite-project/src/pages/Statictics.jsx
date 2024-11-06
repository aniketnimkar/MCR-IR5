import React from "react";

const Statictics = () => {
  return (
    <>
      <div class="container my-4" style={{ width: "80rem" }}>
        <h1>User Statictics</h1>
        <hr />
        <div class="row">
          <div class="col-sm-6 mb-3 mb-sm-0 my-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Total Number of Users</h5>
                <p class="card-text display-3">10</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3 mb-sm-0 my-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Paid Users</h5>
                <p class="card-text display-3">5</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 mb-3 mb-sm-0 my-2">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Most Valuable User</h5>
                <p class="card-text display-3">Leanne Graham</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statictics;
