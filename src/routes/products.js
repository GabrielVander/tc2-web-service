import {add, deleteById, getAll, getById} from "../service/productService";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    getAll()
        .then(result => res.send(result))
        .catch(err => {
            res
                .status(500)
                .send(err);
        })
});

router.post('/', (req, res) => {
    add(req.body)
        .then(result => res.send(result))
        .catch(err => res
            .status(500)
            .send(err)
        );
});

router.get('/:productId', (req, res) => {
    getById(req.params.productId)
        .then(result => res
            .status(result ? 200 : 404)
            .send(result))
        .catch(err => res
            .status(500)
            .send(err));
});

router.delete('/:productId', (req, res) => {
    deleteById(req.params.productId)
        .then(result => res
            .status(result ? 200 : 404)
            .send(result))
        .catch(err => res
            .status(500)
            .send(err));
})

module.exports = router;
