import React, { useState } from "react";
import "bulma/css/bulma.css";
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
  return (
    <div>
      <h1>Hallo Admin! Silahkan input data mahasiswa</h1>
      <form onSubmit={saveData}>
        <div>
          <div>
            <label class="label">Nama</label>
          </div>
          <div>
            <input className="input" type="text" placeholder="e.g Khafka Fadillah" value={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <label class="label">Email</label>
          </div>
          <div>
            <input className="input" type="email" placeholder="e.g khafka@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <label class="label">Address</label>
          </div>
          <div>
            <input className="input" type="text" placeholder="e.g Jl.xxx Rtxx/Rwxx no.xxx kota xxxx" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <label class="label">NIM</label>
          </div>
          <div>
            <input className="input" type="tel" placeholder="12xxxxxxxx" value={nim} onChange={(e) => setNim(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <label class="label">Jurusan</label>
          </div>
          <div>
            <input className="input" type="text" placeholder="Saxxx Texxxx" value={jurusan} onChange={(e) => setJurusan(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <label class="label">Fakultas</label>
          </div>
          <div>
            <input className="input" type="text" placeholder="Saxxx Texxx" value={fakultas} onChange={(e) => setFakultas(e.target.value)} />
          </div>
        </div>
        <div>
          <div>
            <label className="label">Universitas</label>
          </div>
          <div>
            <input className="input" type="text" placeholder="e.g Teknik xxxxx" value={universitas} onChange={(e) => setUniv(e.target.value)} />
          </div>
        </div>
        <div>
          <button className="button success" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddData;
