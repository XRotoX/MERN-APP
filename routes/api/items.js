const express = require('express')
const router = express.Router()

const Item = require('../../models/item')

router.get('/', (req, res, next) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
})

router.post('/', (req, res, next) => {
    const { name } = req.body
    const newItem = new Item({ name })
    newItem.save().then((item) => res.json(item))
})

router.delete('/:id', (req, res, next) => {
    Item.findById(req.params.id)
        .then((item) => item.remove().then(() => res.json({success:true})))
        .catch((err) => res.status(404).json({success:false}))
})

module.exports = router