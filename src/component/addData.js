import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddData = () => {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [alamat, setAlamat] = useState("");
  const [universitas, setUniv] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const saveData = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user", {
        alamat,
        email,
        nim,
        nama,
        jurusan,
        universitas,
        fakultas,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const formContainerStyle = {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };

  const labelStyle = {
    display: "block",
    fontSize: "1.2em",
    marginBottom: "5px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "1em",
    marginBottom: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "12px 20px",
    fontSize: "1.2em",
    borderRadius: "4px",
    cursor: "pointer",
  };

  return (
    <div style={formContainerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Input Data Mahasiswa</h1>
      <form onSubmit={saveData}>
        <div>
          <label style={labelStyle}>Nama</label>
          <input style={inputStyle} type="text" placeholder="e.g Khafka Fadillah" value={nama} onChange={(e) => setNama(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input style={inputStyle} type="email" placeholder="e.g khafka@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Alamat</label>
          <input style={inputStyle} type="text" placeholder="e.g Jl.xxx Rtxx/Rwxx no.xxx kota xxxx" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>NIM</label>
          <input style={inputStyle} type="tel" placeholder="12xxxxxxxx" value={nim} onChange={(e) => setNim(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Jurusan</label>
          <input style={inputStyle} type="text" placeholder="Saxxx Texxxx" value={jurusan} onChange={(e) => setJurusan(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Fakultas</label>
          <input style={inputStyle} type="text" placeholder="Saxxx Texxx" value={fakultas} onChange={(e) => setFakultas(e.target.value)} />
        </div>
        <div>
          <label style={labelStyle}>Universitas</label>
          <input style={inputStyle} type="text" placeholder="e.g Teknik xxxxx" value={universitas} onChange={(e) => setUniv(e.target.value)} />
        </div>
        <div>
          <button style={buttonStyle} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddData;
