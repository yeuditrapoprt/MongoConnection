const express = require('express');
const router = express.Router();
const {
  getAllPets,
  getPet,
  createNewPet,
  updatePet,
  deletePet
}= require('../controllers/pets')


/* GET home page. */
router.get('/', getAllPets);
router.get('/petId', getPet);
router.post('/', createNewPet);
router.put('/petId', updatePet);
router.delete('/petId', deletePet);

module.exports = router;
