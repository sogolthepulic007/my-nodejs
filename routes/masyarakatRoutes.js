// routes/masyarakatRoutes.js

const express = require('express');
const router = express.Router();
const masyarakatController = require('../controllers/masyarakatController');

// Routes untuk CRUD masyarakat
router.post('/', masyarakatController.createMasyarakat);
router.get('/', masyarakatController.getAllMasyarakat);
router.get('/:cpm_NIK', masyarakatController.getMasyarakatById);
router.put('/:cpm_NIK', masyarakatController.updateMasyarakat);
router.delete('/:cpm_NIK', masyarakatController.deleteMasyarakat);

module.exports = router;
