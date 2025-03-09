import { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [search, setSearch] = useState("");

   const subm = () => {
  if (!search) {
    console.log("Please enter a tracking ID");
    return;
  }

  axios
    .get(`/api/packages/search/${search}`)
    .then((res) => {
      console.log("Response Data:", res.data);return;
    })
    .catch((err) => {
      console.error("Error:", err.response ? err.response.data : err.message);
    });
};

  const value = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container-fluid p-5 bg-primary text-center">
      <div className="input-group mb-3">
        <input
          onChange={value}
          type="text"
          className="  "
          placeholder="Search"
        />
        <button onClick={subm} className="btn btn-success" type="submit">
          Go
        </button>
      </div>
    </div>
  );
};
