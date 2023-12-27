import React, { useState, useEffect } from 'react'
import 'bulma/css/bulma.css'
import {useNavigate, useParams} from "react-router-dom"
import axios from 'axios'


const EditData = () => {
    const[nama, setNama] =useState("")
    const[email, setEmail] =useState("")
    const[alamat, setAlamat] =useState("")
    const[nim, setNim] =useState("")
    const[jurusan, setJurusan] =useState("")
    const[fakultas, setFakultas] =useState("")
    const[universitas, setUniv] =useState("")
    const navigate= useNavigate();
    const { id } = useParams();

    

    const getUserById = async () =>{
        try {
            const responnse = await axios.get(`https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user/${id}`)
            setNama(responnse.data.nama)
            setEmail(responnse.data.email)
            setNim(responnse.data.nim)
            setJurusan(responnse.data.jurusan)
            setUniv(responnse.data.universitas)
            setAlamat(responnse.data.alamat)
            setFakultas(responnse.data.fakultas)
        } catch (error) {
            console.log(error)
            
        }
    }
    useEffect(()=>{
        getUserById();
    },[])

    const editData = async(e) =>{
        e.preventDefault()
        try {
            await axios.patch(`https://glittering-bublanina-abf8d9.netlify.app/.netlify/functions/api/user/${id}`,{
                alamat,
                email,
                nim,
                nama,
                jurusan,
                universitas,
                fakultas
            })
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
    <form onSubmit={editData}>
    <div>
        <div>
            <label class='label'>Nama</label>
        </div>
        <div>
            <input 
            className='input' 
            type='text' 
            placeholder='e.g Alexandra'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            />
        </div>
    </div>
    <div>
        <div>
            <label class='label'>Email</label>
        </div>
        <div>
            <input 
            className='input' 
            type='email' 
            placeholder='e.g xxx@xxx.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
    </div>
    <div>
        <div>
            <label class='label'>Address</label>
        </div>
        <div>
            <input className='input'type='text' placeholder='e.g Jl.xxx Rtxx/Rwxx no.xxx kota xxxx' value={alamat} onChange={(e)=>setAlamat(e.target.value)}/>
        </div>
    </div>
    <div>
        <div>
            <label class='label'>NIM</label>
        </div>
        <div>
            <input className='input' type='tel'placeholder='12xxxxxxxx' value={nim} onChange={(e) => setNim(e.target.value)}/>
        </div>
    </div>
    <div>
        <div>
            <label class='label'>Jurusan</label>
        </div>
        <div>
            <input className='input' type='text'placeholder='Saxxx Texxxx' value={jurusan} onChange={(e) => setJurusan(e.target.value)}/>
        </div>
    </div>
    <div>
        <div>
            <label class='label'>Fakultas</label>
        </div>
        <div>
            <input className='input' type='text'placeholder='Saxxx Texxx' value={fakultas} onChange={(e) => setFakultas(e.target.value)}/>
        </div>
    </div>
    <div>
        <div>
            <label className='label'>Universitas</label>
        </div>
        <div>
            <input className='input' type='text' placeholder='e.g Teknik xxxxx' value={universitas} onChange={(e) => setUniv(e.target.value)}/>
        </div>
    </div>
    <div>
        <button className='button success' type='submit'>Submit</button>
    </div>
    </form>
</div>
  )
}
export default EditData
