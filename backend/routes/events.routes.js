const router = require('express').Router(); 
const Event = require('../models/events.model');  

//  ajouter un événement
router.post('/add', (req, res) => {
    const newEvent = new Event({
        titre: req.body.titre,
        discipline: req.body.discipline,
        date: req.body.date,
        horaire: req.body.horaire,
        lieu: req.body.lieu,
    });

    newEvent.save()
        .then(() => res.status(201).send('Événement ajouté avec succès'))
        .catch(err => res.status(400).send('Erreur lors de l\'ajout de l\'événement: ' + err));
});

// récupérer tous les événements
router.get('/', (req, res) => {
    Event.find()
        .then(events => res.status(200).json(events))
        .catch(err => res.status(500).send('Erreur lors de la récupération des événements: ' + err));
});

// Exporter le routeur pour l'utiliser dans d'autres fichiers
module.exports = router;
