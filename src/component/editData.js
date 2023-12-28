import React, { useState, useEffect } from "react";
import "bulma/css/bulma.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditData = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nim, setNim] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [universitas, setUniv] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const getUserById = async () => {
    try {
      const response = await axios.get(`https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user/${id}`);
      setNama(response.data.nama);
      setEmail(response.data.email);
      setNim(response.data.nim);
      setJurusan(response.data.jurusan);
      setUniv(response.data.universitas);
      setAlamat(response.data.alamat);
      setFakultas(response.data.fakultas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  const editData = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user/${id}`, {
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

  return (
    <div className="container mt-6">
      <form onSubmit={editData}>
        <div className="field">
          <label className="label">Nama</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Alexandra" value={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="email" placeholder="e.g xxx@xxx.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Alamat</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Jl.xxx Rtxx/Rwxx no.xxx kota xxxx" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">NIM</label>
          <div className="control">
            <input className="input" type="tel" placeholder="12xxxxxxxx" value={nim} onChange={(e) => setNim(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Jurusan</label>
          <div className="control">
            <input className="input" type="text" placeholder="Saxxx Texxxx" value={jurusan} onChange={(e) => setJurusan(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Fakultas</label>
          <div className="control">
            <input className="input" type="text" placeholder="Saxxx Texxx" value={fakultas} onChange={(e) => setFakultas(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">Universitas</label>
          <div className="control">
            <input className="input" type="text" placeholder="e.g Teknik xxxxx" value={universitas} onChange={(e) => setUniv(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-success" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditData;
