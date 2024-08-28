import axios from "axios";
import { useEffect, useState } from "react";
import apiUrl from "../utils/GetApiUrl";

export default function User() {
  return (
    <>
      <UserProfile />
    </>
  );
}

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("Token");
    if (userId) {
      axios
        .get(`${apiUrl}/user/profile/${userId}`)
        .then((response) => setUser(response.data))
        .catch((error) => console.error(error));
    }
  }, []);

  return (
    <>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>{user.username}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
