const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const koneksi = require('./config/database'); // Adjust this path according to your database configuration
const Masyarakat = require('./models/Masyarakat');
const app = express();
const mysql = require('mysql');
const PORT = 8000;
const masyarakatController = require('./controllers/masyarakatController')
const cors = require('cors')

// Konfigurasi body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"))
app.use(cors())

// Menambah data masyarakat
app.post('/masyarakat/add', function(req, res) {
    // Lakukan validasi input jika diperlukan

    // Masukkan data ke dalam database
    const query = 'INSERT INTO ppbs_cpm(cpm_NIK, cpm_name, cpm_address) VALUES (?, ?, ?)';
    koneksi.query(query, [req.body.cpm_NIK, req.body.cpm_name, req.body.cpm_address], function(error, results, fields) {
        if (error) {
            console.error('Error inserting data:', error);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Data added successfully');
        res.status(200).send('Data Sukses Ditambahkan');
    });
});


app.get('/', function(req, res) {
    koneksi.query('SELECT * FROM masyarakat', function(error, results, fields) {
        // if (error) throw error;
        res.render('masyarakat', { data: results });
    });
});

// Create new masyarakat
app.post('/masyarakat', function(req, res) {
    const { nik, nama, alamat } = req.body;
    const insertQuery = `INSERT INTO masyarakat (cpm_NIK, cpm_name, cpm_address) VALUES (?, ?, ?)`;
    koneksi.query(insertQuery, [nik, nama, alamat], function(error, results, fields) {
        // if (error) throw error;
        res.redirect('/');
    });
});

// Update masyarakat
app.post('/masyarakat/update/:id', function(req, res) {
    const id = req.params.id;
    const { nik, nama, alamat } = req.body;
    const updateQuery = `UPDATE masyarakat SET cpm_NIK = ?, cpm_name = ?, cpm_address = ? WHERE id = ?`;
    koneksi.query(updateQuery, [nik, nama, alamat, id], function(error, results, fields) {
        // if (error) throw error;
        res.redirect('/');
    });
});

// Delete masyarakat
app.delete('/masyarakat/delete/:id', function(req, res) {
    const id = req.params.id;
    const deleteQuery = `DELETE FROM masyarakat WHERE id = ?`;
    koneksi.query(deleteQuery, [req.body.cpm_NIK, req.body.cpm_name, req.body.cpm_address], function(error, results, fields) {
        // if (error) throw error;
        res.redirect('/');
    });
});


// Route to render the masyarakat.ejs view
app.get('/masyarakat', (req, res) => {
    console.log("mask sini")
    const querySql = 'SELECT * FROM ppbs_cpm';
    koneksi.query(querySql, (err, rows, fields) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.status(200).send(rows);
    });
});

// Route to handle form submission (POST request)
app.post('/masyarakat', (req, res) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO ppbs_cpm SET ?';
    koneksi.query(querySql, data, (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        console.log('Inserted ID:', result.insertId);
        res.redirect('/masyarakat'); // Redirect to refresh the data
    });
});

// Start Server

app.listen(PORT, function() {
    console.log('Server running at port:', PORT);
});


//const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));



// Serve static files from the 'public' folder
// app.use(express.static(path.join(__dirname, 'public')));


// Middleware
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('view engine', 'ejs');

// Routes
// Get all masyarakat

// Start the server
// app.listen(PORT, () => {
//     console.log(`Server running at port: ${PORT}`);
// });

//----Batas Atas----

// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');
// const sysuserRoutes = require('./routes/masyarakatRoutes');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// // Login form route
// app.get('/masyarakat', (req, res) => {
//     res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Data Masyarakat</title>
//         <link rel="stylesheet" href="styles.css">
//     </head>
//     <body>
//         <h1>Data Masyarakat</h1>
    
//         <div id="message"></div>
    
//         <div id="form-container">
//             <h2>Tambah Data Masyarakat</h2>
//             <form id="form-create">
//                 <input type="text" id="nik" placeholder="NIK" required>
//                 <input type="text" id="nama" placeholder="Nama" required>
//                 <input type="text" id="alamat" placeholder="Alamat" required>
//                 <button type="submit">Tambah</button>
//             </form>
//         </div>
    
//         <div id="data-container">
//             <h2>Data Masyarakat</h2>
//             <ul id="masyarakat-list"></ul>
//         </div>
    
//         <script src="scripts.js"></script>
//     </body>
//     </html>    
//     `);
// });


// // app.use('/api', masyarakatRoutes);

// app.listen(PORT, () => console.log('Server running at port: ${PORT}'));

// // const express = require('express');
// // const bodyParser = require('body-parser');
// // const koneksi = require('./config/database');
// // const app = express();
// // const PORT = process.env.PORT || 3000;

// // // set body parser
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: false }));

// // // ============= create data / insert data
// // // coba di postman --> (post, x-www-urlencoded)
// // app.post('/masyarakat', (req, res) => {

// //     console.log('datanya', req.body);
// //     // buat variabel penampung data dan query sql
// //     const data = { ...req.body };
// //     const querySql = 'INSERT INTO ppbs_cpm SET ?';
// //     console.log('coba create /input baru');
// //     console.log('datanya=', req.body);

// //     // jalankan query
// //     koneksi.query(querySql, data, (err, rows, field) => {
// //         // error handling
// //         if (err) {
// //             return res.status(500).json({ message: 'Gagal insert data masyarakat!', error: err });
// //         }

// //         // jika request berhasil
// //         res.status(201).json({ success: true, message: 'Berhasil insert data masyarakat!' });
// //     });
// // });


// // // ============= read data / get data
// // // coba di postman --> (get)
// // app.get('/masyarakat', (req, res) => {
// //     // buat query sql
// //     const querySql = 'SELECT * FROM ppbs_cpm ';
// //     console.log('Ini GET' );

// //     // jalankan query
// //     koneksi.query(querySql, (err, rows, field) => {
// //         // error handling
// //         if (err) {
// //             return res.status(500).json({ message: 'Ada kesalahan', error: err });
// //         }

// //         // jika request berhasil
// //         res.status(200).json({ success: true, data: rows });
// //     });
// // });


// // // ========= get one record data
// // // coba di postman --> (get)
// // app.get('/masyarakat/:cpm_NIK', (req, res) => {
// //     // buat query sql
// //     const querySql = 'SELECT * FROM ppbs_cpm WHERE cpm_NIK = ${req.params.cpm_NIK}';
// //     console.log(`Request nik = ${req.params.cpm_NIK}`) 
   

// //     // jalankan query
// //     koneksi.query(querySql, (err, rows, field) => {
// //         // error handling
// //         if (err) {
// //             return res.status(500).json({ message: 'Ada kesalahan', error: err });
// //         }

// //         // jika request berhasil
// //         res.status(200).json({ success: true, data: rows });
// //     });
// // });


// // // update data 
// // // coba di postman --> (put, body)
// // app.put('/masyarakat/:cpm_NIK', (req, res) => {
// //     // buat variabel penampung data dan query sql
// //     const data = { ...req.body };
// //     const querySearch = 'SELECT * FROM ppbs_cpm WHERE cpm_NIK = ?';
// //     const queryUpdate = 'UPDATE ppbs_cpm SET ? WHERE cpm_NIK = ?';

// //     // jalankan query untuk melakukan pencarian data
// //     koneksi.query(querySearch, req.params.cpm_NIK, (err, rows, field) => {
// //         // error handling
// //         if (err) {
// //             return res.status(500).json({ message: 'Ada kesalahan', error: err });
// //         }

// //         // jika id yang dimasukkan sesuai dengan data yang ada di db
// //         if (rows.length) {
// //             // jalankan query update
// //             koneksi.query(queryUpdate, [data, req.params.cpm_NIK], (err, rows, field) => {
// //                 // error handling
// //                 if (err) {
// //                     return res.status(500).json({ message: 'Ada kesalahan', error: err });
// //                 }

// //                 // jika update berhasil
// //                 res.status(200).json({ success: true, message: 'Berhasil update data masyarakat!' });
// //             });
// //         } else {
// //             return res.status(404).json({ message: 'Data masyarakat tidak ditemukan!', success: false });
// //         }
// //     });
// // });


// // // delete data
// // // coba di postman --> (delete)
// // app.delete('/masyarakat/:cpm_NIK', (req, res) => {
// //     // buat query sql untuk mencari data dan hapus
// //     const querySearch = 'SELECT * FROM ppbs_cpm WHERE cpm_NIK = ?';
// //     const queryDelete = 'DELETE FROM ppbs_cpm WHERE cpm_NIK = ?';

// //     // jalankan query untuk melakukan pencarian data
// //     koneksi.query(querySearch, req.params.cpm_NIK, (err, rows, field) => {
// //         // error handling
// //         if (err) {
// //             return res.status(500).json({ message: 'Ada kesalahan', error: err });
// //         }

// //         // jika id yang dimasukkan sesuai dengan data yang ada di db
// //         if (rows.length) {
// //             // jalankan query delete
// //             koneksi.query(queryDelete, req.params.cpm_NIK, (err, rows, field) => {
// //                 // error handling
// //                 if (err) {
// //                     return res.status(500).json({ message: 'Ada kesalahan', error: err });
// //                 }

// //                 // jika delete berhasil
// //                 res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
// //             });
// //         } else {
// //             return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
// //         }
// //     });
// // });


// // // buat server nya
// // app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
