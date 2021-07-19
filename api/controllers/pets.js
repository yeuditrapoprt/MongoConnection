const pet = require('../module/pet');
const Pet = require('../module/pet')
module.exports = {
  getAllPets: (req, res) => {
    Pet.find({}).then((pets) => {
      res.send(pets)
    }).catch(error => {
      console.log('error')
      res.status(500).json({
        error
      })
    });
  },

  getPet: (req, res) => {
    const petId = req.params.petId;
    Pet.findById(petId).then((petId) =>res.send(petId))
  },

  createNewPet: (req, res) => {
    const { _id, name, species } = req.body;
    const pet = new Pet({
      _id: _id,
      name: name,
      species: species
    });
    pet.save()
      .then(() => {
        res.status(200).json({
          Massage: 'Create a new pet'
        })
      }).catch(error => {
        console.log('errror')
        res.status(500).json({
          error
        })
      });
  },

  updatePet: (req, res) => {
    const petId = req.params.petId;
    Pet.update({ _id: petId }, req.body).then(() => {
      res.status(200).json({
        Massage: `Update pet ${petId}`
      })
    })
  },

  deletePet: (req, res) => {
   debugger;
    const petId =req.params.petId;
    Pet.findById(petId)
     // .then((pet) => {
        //console.log(pet)
      //   if (pet==null) {         
      //     return res.status(404).json({
      //       Massage: 'Pet not Found'
      //     })
      //   }
     //  })
     .then(() => {
        Pet.remove({ _id: petId }) }).then(() => {
        res.status(200).json({
          Massage: `Delete the pet ${petId}`
        })
      })
  }
}