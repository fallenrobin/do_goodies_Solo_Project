const express = require('express');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
});
/**
 * GET route template
 */
router.get('/fetchTreats', (req, res) => {
    console.log('/treat GET route');
    console.log('is authenticated?', req.isAuthenticated());
    // console.log('results', result.rows);

    const queryText = `SELECT * FROM "treats"`;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get treats:', error);
        res.sendStatus(500);
    });
});

//PUT route for treat edit
router.put('/:id', rejectUnauthenticated, (req, res) => {
    // console.log(req.body);
    // console.log(req.params.id);

    const queryText = `
    UPDATE "treats"
    SET treat_name = $1, treat_description = $2, price = $3
    WHERE "id"= $4;`

    const values = [
        req.body.treat_name, req.body.treat_description,
        req.body.price, req.params.id
    ]
    pool.query(queryText, values)
        .then((result) => {
            // res.send(result.rows);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error PUT treat', error);
            res.sendStatus(500);
        })
});

// delete route for treat
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    
    pool.query('DELETE FROM "treats" WHERE id=$1', [id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error DELETE /api/treat/delete', error);
            res.sendStatus(500);
        })
});

//GET route for just one treat
router.get('/detail/:id', (req, res) => {

    const query = `
    SELECT * FROM "treats"
    WHERE "id" = $1; 
    `;

    console.log('server', req.params)
    pool.query(query, [req.params.id]).then((result) => {
        res.send(result.rows);
    }).catch(err => {
        console.log('ERROR: Get one treat', err);
        res.sendStatus(500)
    });
});

/**
 * POST route template
 */
router.post('/addTreat', (req, res) => {
    // POST route code here
    const treat_name = req.body.treat_name;
    const treat_description = req.body.treat_description;
    const treat_image = req.body.treat_image;
    const price = req.body.price;



    const queryText = `INSERT INTO "treats" (treat_name, treat_description, treat_image, price, user_id)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    pool
        .query(queryText, [treat_name, treat_description, treat_image, price, req.user.id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log('Add treat failed: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;
