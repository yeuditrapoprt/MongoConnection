const Pet = require('../module/pet')
module.exports = {
    getAllPets:(req,res)=>{
      Pet.find({}).then((pets)=>{
       res.send(pets)
      }).catch(error => {
        console.log('error')
        res.status(500).json({
              error
          })
      });
   },
   
   getPet:(req,res)=>{
    const petId=req.params.petId ; 
     Pet.findById(petId).then((pet)=>res.status(200).json({
      pet
     }))
 },
 
   createNewPet:(req,res)=>{
        const {_id,name,species} = req.body;
        const pet = new Pet({
        _id:_id,
        name:name,
        species:species
        });
        pet.save()
        .then(()=>{res.status(200).json({
            Massage:'Create a new pet'
          })
        }).catch(error => {
          console.log('errror')
          res.status(500).json({
                error
            })
        });
        },     
    
    updatePet:(req,res)=>
    {
    const petId=req.params.petId ; 
    res.status(200).json({
       Massage:`Update pet ${petId}`
    })},
      
    deletePet:(req,res)=>{
    const petId=req.params.petId ;
        res.status(200).json({
        Massage:`Create New Pet ${petId}`
    })}

}