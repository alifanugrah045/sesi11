import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserList = () => {
  const DataUser = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();

  const doFetchUsers = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="container">
      <h1>Data Post</h1>
      
        <button className="btn btn-primary mt-5" onClick={doFetchUsers} type="submit">
          {!!DataUser?.isPending? (
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              Loading...
            </button>
          ) : (
            "Get Data Post"
          )};
        </button>
        <table className="table table-striped mt-4">
          <thead>
            <tr>
              <th>No</th>
              <th>UserId</th>
              <th>title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {DataUser.map((user, index) => (
              <tr key={user?.id}>
                <td>{index + 1}</td>
                <td>{user.userId}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      <div>
        {!!DataUser?.errorMessage && (
          <div className="alert alert-danger" role="alert">
            {!!DataUser?.errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
