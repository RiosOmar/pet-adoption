const PetController = require("../controllers/pet.controller");

module.exports = app => {

    app.get('/pet/all', PetController.findAllPets);
    app.post('/pet/create', PetController.createOnePet);
    app.get('/pet/:petid', PetController.findAPet);
    app.put('/pet/update/:petid', PetController.updateExistingPet);
    app.delete('/pet/delete/:petid', PetController.deletePet)
}