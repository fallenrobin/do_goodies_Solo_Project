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
