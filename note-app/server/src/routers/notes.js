const express = require('express');
const Note = require('../models/notes');
const auth = require('../middlewares/auth');
const router = new express.Router();

//Creation of notes
router.post('/notes', auth, async (req, res) => {
    const note = new Note({
        ...req.body,
        owner: req.user._id,
        ref: 'User'
    })

    try {
        await note.save()
        res.status(201).send(note)
    } catch (e) {
        res.status(400).send()
    }
})

//Updation of notes
router.patch('/notes/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'description']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid Updates' })
    }

    try {
        const note = await Note.findOne({ _id: req.params.id, owner: req.user._id })

        if (!note) {
            return res.status(404).send()
        }

        updates.forEach((update) => note[update] = req.body[update])
        await note.save()


        res.send(note)
    } catch (e) {
        res.status(400).send()
    }
})


//Querying of notes
router.get('/notes', auth, async (req, res) => {
    try {
        await req.user.populate({
            path: 'notes',
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
            }
        }).execPopulate()
        res.send(req.user.notes)
    } catch (e) {
        req.status(500).send()
    }
})

router.get('/notes/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const note = await Note.findOne({ _id, owner: req.user._id })

        if (!note) {
            return res.status(404).send()
        }

        res.send(note);
    } catch (e) {
        req.status(500).send()
    }
})


//Deletion of notes
router.delete('/notes/:id', auth, async (req, res) => {
    try {
        const note = await Note.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!note) {
            return res.status(404).send()
        }
        res.send(note)
    } catch (e) {
        res.status(500).send()
    }
})


module.exports = router;

