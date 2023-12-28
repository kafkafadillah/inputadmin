import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user");
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user/${id}`);
      getData();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  return (
    <div className="columns is-centered mt-6">
      <div className="column is-three-quarters">
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>NIM</th>
              <th>Jurusan</th>
              <th>Fakultas</th>
              <th>Alamat</th>
              <th>Universitas</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.nama}</td>
                <td>{user.nim}</td>
                <td>{user.jurusan}</td>
                <td>{user.fakultas}</td>
                <td>{user.alamat}</td>
                <td>{user.universitas}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user._id}`} className="button is-success is-small mr-2">
                    Edit Data
                  </Link>
                  <button onClick={() => deleteData(user._id)} className="button is-danger is-small">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4">
          <Link to="/add" className="button is-success">
            Add New Data
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListData;
