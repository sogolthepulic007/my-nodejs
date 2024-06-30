// controllers/masyarakatController.js

const Masyarakat = require('../models/Masyarakat');

const masyarakatController = {
    createMasyarakat: function(req, res) {
        const data = { ...req.body };
        Masyarakat.create(data, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal insert data masyarakat!', error: err });
            }
            res.status(201).json({ success: true, message: 'Berhasil insert data masyarakat!' });
        });
    },

    getAllMasyarakat: function(req, res) {
        Masyarakat.getAll((err, rows) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            res.status(200).json({ success: true, data: rows });
        });
    },

    getMasyarakatById: function(req, res) {
        Masyarakat.getById(req.params.cpm_NIK, (err, rows) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            res.status(200).json({ success: true, data: rows });
        });
    },

    updateMasyarakat: function(req, res) {
        const data = { ...req.body };
        Masyarakat.update(req.params.cpm_NIK, data, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            res.status(200).json({ success: true, message: 'Berhasil update data masyarakat!' });
        });
    },

    deleteMasyarakat: function(req, res) {
        Masyarakat.delete(req.params.cpm_NIK, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
            res.status(200).json({ success: true, message: 'Berhasil hapus data!' });
        });
    }
};

module.exports = masyarakatController;
