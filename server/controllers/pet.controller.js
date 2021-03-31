const Pet = require('../models/pet.model')

module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then(allPets => res.json({ Result: allPets }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.createOnePet = (req, res) => {
    Pet.create(req.body)
        .then(newlyCreatedPet => res.json({ Result: newlyCreatedPet }))
        .catch(err => res.json({ message: 'More than 3 chars required', err }));
}

module.exports.findAPet = (req, res) => {
    Pet.findOne({ _id: req.params.petid })
    .then(oneSinglePet => res.json({ result: oneSinglePet }))
    .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

module.exports.updateExistingPet = (req, res) => {
    Pet.findOneAndUpdate(
        { _id: req.params.petid },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedPet => res.json({ Result: updatedPet }))
        .catch(err => res.json({ message: 'More than 3 chars required', err }));
}
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.petid})
        .then(deletedResult => res.json({ result: deletedResult }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}