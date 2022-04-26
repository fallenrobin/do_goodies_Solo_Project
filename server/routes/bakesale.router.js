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
router.get('/fetchBakesales', (req, res) => {
    console.log('/bakesale GET route');
    console.log('is authenticated?', req.isAuthenticated());
    // console.log('results', result.rows);

    const queryText = `SELECT * FROM "bakesales"
    WHERE "id" != 3
    `;

    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in get bakesales router:', error);
        res.sendStatus(500);
    });
});

//GET route for just one treat
router.get('/detail/:id', (req, res) => {

    const query = `
    SELECT * FROM "bakesales"
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
router.post('/addBakesale', (req, res) => {
    // POST route code here
    
    const org_name = req.body.org_name;
    const org_description = req.body.org_description;
    const org_image = req.body.org_image;
    const org_website = req.body.org_website;
    const fundraising_goal = req.body.fundraising_goal;



    const queryText = `INSERT INTO "bakesales" (org_name, org_description, org_image, org_website, fundraising_goal, user_id)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`;
    pool
        .query(queryText, [org_name, org_description, org_image, org_website, fundraising_goal, req.user.id])
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log('Add treat failed: ', err);
            res.sendStatus(500);
        });
});

//PUT route for bakesale edit
router.put('/:id', rejectUnauthenticated, (req, res) => {
    console.log(req.body);
    console.log(req.params.id);

    const queryText = `
    UPDATE "bakesales"
    SET org_name = $1, org_description = $2, org_image = $3,
    org_website = $4, fundraising_goal = $5
    WHERE "id"= $6;`

    const values = [
        req.body.org_name, req.body.org_description,
        req.body.org_image, req.body.org_website, req.body.fundraising_goal,
        req.params.id
    ]
    pool.query(queryText, values)
        .then((result) => {
            // res.send(result.rows);
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error PUT bakesale', error);
            res.sendStatus(500);
        })
});

// delete route for bakesale
router.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    
    pool.query('DELETE FROM "bakesales" WHERE id=$1', [id])
        .then((result) => {
            res.sendStatus(200);
        }).catch((error) => {
            console.log('Error DELETE /api/bakesale/delete', error);
            res.sendStatus(500);
        })
});

module.exports = router;
