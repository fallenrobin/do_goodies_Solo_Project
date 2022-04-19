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

module.exports = router;
