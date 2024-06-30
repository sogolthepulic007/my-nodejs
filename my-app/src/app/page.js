'use client'
// pages/masyarakat.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from './../../style.css'; // Import your CSS file3
import axios from 'axios';

// function Masyarakat() {
//   const [data, setData] = useState([]);
//   const [editData, setEditData] = useState(null);
//   const [nik, setNik] = useState('');
//   const [nama, setNama] = useState('');
//   const [alamat, setAlamat] = useState('');

  
//   const fetchData = async () => {
//     console.log("masuk sini")
//     try {
//       let response = await axios.get("http://localhost:8000/masyarakat");
//       console.log(response)
//       // setData([response]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       let url = 'http://localhost:8000/masyarakat';
//       let method = 'POST';
//       let body = { nik, nama, alamat };

//       if (editData) {
//         url = `http://localhost:8000/masyarakat/update/${editData.id}`;
//         method = 'PUT';
//         body = { ...editData, ...{ nik, nama, alamat } };
//       }

//       const response = await axios({
//         method,
//         url,
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         data: body,
//       });

//       // Clear form and refresh data
//       setNik('');
//       setNama('');
//       setAlamat('');
//       setEditData(null);
//       // fetchData();
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

//   const handleEdit = (person) => {
//     setEditData(person);
//     setNik(person.cpm_NIK);
//     setNama(person.cpm_name);
//     setAlamat(person.cpm_address);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:8000/masyarakat/delete/${id}`);

//       // Refresh data after deletion
//       // fetchData();
//     } catch (error) {
//       console.error('Error deleting data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   console.log(data, "this is data")

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Data Masyarakat</title>
//         <link rel="stylesheet" href="/style.css" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>Data Masyarakat</h1>

//         <div id="message"></div>

//         <div id="form-container">
//           {!editData ? (
//             <>
//               <h2>Tambah Data Masyarakat</h2>
//               <form id="form-create" onSubmit={handleSubmit}>
//                 <input type="text" name="nik" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK" required />
//                 <input type="text" name="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" required />
//                 <input type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" required />
//                 <button type="submit">Tambah</button>
//               </form>
//             </>
//           ) : (
//             <>
//               <h2>Edit Data Masyarakat</h2>
//               <form id="form-update" onSubmit={handleSubmit}>
//                 <input type="text" name="nik" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK" required />
//                 <input type="text" name="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" required />
//                 <input type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" required />
//                 <button type="submit">Simpan Perubahan</button>
//               </form>
//             </>
//           )}
//         </div>

//         <div id="data-container">
//           <h2>Data Masyarakat</h2>
//           <table id="masyarakat-table">
//             <thead>
//               <tr>
//                 <th>NIK</th>
//                 <th>Nama</th>
//                 <th>Alamat</th>
//                 <th>Aksi</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.map((person) => (
//                 <tr key={person.id}>
//                   <td>{person.cpm_NIK}</td>
//                   <td>{person.cpm_name}</td>
//                   <td>{person.cpm_address}</td>
//                   <td>
//                     <button type="button" onClick={() => handleEdit(person)}>Edit</button>
//                     <button type="button" onClick={() => handleDelete(person.id)}>Hapus</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// }


export default function Home() {
  // const [data, setData] = useState([]);
  // const [editData, setEditData] = useState(null);
  // const [nik, setNik] = useState('');
  // const [nama, setNama] = useState('');
  // const [alamat, setAlamat] = useState('');

  
  // const fetchData = async () => {
  //   console.log("masuk sini")
  //   try {
  //     let response = await axios.get("http://localhost:8000/masyarakat");
  //     console.log(response)
  //     // setData([response]);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     let url = 'http://localhost:8000/masyarakat';
  //     let method = 'POST';
  //     let body = { nik, nama, alamat };

  //     if (editData) {
  //       url = `http://localhost:8000/masyarakat/update/${editData.id}`;
  //       method = 'PUT';
  //       body = { ...editData, ...{ nik, nama, alamat } };
  //     }

  //     const response = await axios({
  //       method,
  //       url,
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       data: body,
  //     });

  //     // Clear form and refresh data
  //     setNik('');
  //     setNama('');
  //     setAlamat('');
  //     setEditData(null);
  //     // fetchData();
  //   } catch (error) {
  //     console.error('Error submitting data:', error);
  //   }
  // };

  // const handleEdit = (person) => {
  //   setEditData(person);
  //   setNik(person.cpm_NIK);
  //   setNama(person.cpm_name);
  //   setAlamat(person.cpm_address);
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await axios.delete(`http://localhost:8000/masyarakat/delete/${id}`);

  //     // Refresh data after deletion
  //     // fetchData();
  //   } catch (error) {
  //     console.error('Error deleting data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // return (
  //   <div className={styles.container}>
  //     <Head>
  //       <title>Data Masyarakat</title>
  //       <link rel="stylesheet" href="/style.css" />
  //     </Head>

  //     <main className={styles.main}>
  //       <h1 className={styles.title}>Data Masyarakat</h1>

  //       <div id="message"></div>

  //       <div id="form-container">
  //         {!editData ? (
  //           <>
  //             <h2>Tambah Data Masyarakat</h2>
  //             <form id="form-create" onSubmit={handleSubmit}>
  //               <input type="text" name="nik" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK" required />
  //               <input type="text" name="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" required />
  //               <input type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" required />
  //               <button type="submit">Tambah</button>
  //             </form>
  //           </>
  //         ) : (
  //           <>
  //             <h2>Edit Data Masyarakat</h2>
  //             <form id="form-update" onSubmit={handleSubmit}>
  //               <input type="text" name="nik" id="nik" value={nik} onChange={(e) => setNik(e.target.value)} placeholder="NIK" required />
  //               <input type="text" name="nama" id="nama" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Nama" required />
  //               <input type="text" name="alamat" id="alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} placeholder="Alamat" required />
  //               <button type="submit">Simpan Perubahan</button>
  //             </form>
  //           </>
  //         )}
  //       </div>

  //       <div id="data-container">
  //         <h2>Data Masyarakat</h2>
  //         <table id="masyarakat-table">
  //           <thead>
  //             <tr>
  //               <th>NIK</th>
  //               <th>Nama</th>
  //               <th>Alamat</th>
  //               <th>Aksi</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {data.map((person) => (
  //               <tr key={person.id}>
  //                 <td>{person.cpm_NIK}</td>
  //                 <td>{person.cpm_name}</td>
  //                 <td>{person.cpm_address}</td>
  //                 <td>
  //                   <button type="button" onClick={() => handleEdit(person)}>Edit</button>
  //                   <button type="button" onClick={() => handleDelete(person.id)}>Hapus</button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </main>
  //   </div>
  // );
  return (
    <div>123</div>
  )
}

