// models/Masyarakat.js

const koneksi = require('../config/database');

const Masyarakat = {
    create: function(data, callback) {
        koneksi.query('INSERT INTO ppbs_cpm SET ?', data, callback);
    },
    getAll: function(callback) {
        koneksi.query('SELECT * FROM ppbs_cpm', callback);
    },
    getById: function(id, callback) {
        koneksi.query('SELECT * FROM ppbs_cpm WHERE cpm_NIK = ?', id, callback);
    },
    update: function(id, data, callback) {
        koneksi.query('UPDATE ppbs_cpm SET ? WHERE cpm_NIK = ?', [data, id], callback);
    },
    delete: function(id, callback) {
        koneksi.query('DELETE FROM ppbs_cpm WHERE cpm_NIK = ?', id, callback);
    }
};

module.exports = Masyarakat;
