const express = require('express');
const router = express.Router();
const db = require('../db')



router.get('/findAll', (req, res, next) => {
    db.query('SELECT * FROM public.person ORDER BY id_person ASC', [], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows)
    })
});

router.get('/find/:id', (req, res, next) => {
    db.query('SELECT * FROM public.person p WHERE p.id_person = $1', [req.params.id], (err, result) => {
      if (err) {
        return next(err)
      }
      res.send(result.rows)
    })
});

module.exports = router;