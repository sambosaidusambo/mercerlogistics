import { useState } from "react";
import axios from "axios";

export const Home = () => {
  const [search, setSearch] = useState("q");

  const subm = () => {
    axios
      .get(`http://127.0.0.1:5000/api/packages/search/${search}`)
      .then((res) => {
       return console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
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
