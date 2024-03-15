const express = require('express');
const router = express.Router();

// Create Operation - POST
router.post('/resource', (req, res) => {
    // Implement logic to create a resource
    res.send('Resource created');
});

// Read Operation - GET
router.get('/resource/:id', (req, res) => {
    // Implement logic to retrieve a resource by ID
    const resourceId = req.params.id;
    res.send(`Retrieving resource with ID ${resourceId}`);
});

// Update Operation - PUT
router.put('/resource/:id', (req, res) => {
    // Implement logic to update a resource by ID
    const resourceId = req.params.id;
    res.send(`Updating resource with ID ${resourceId}`);
});

// Partial Update Operation - PATCH
router.patch('/resource/:id', (req, res) => {
    // Implement logic to partially update a resource by ID
    const resourceId = req.params.id;
    res.send(`Partially updating resource with ID ${resourceId}`);
});

// Delete Operation - DELETE
router.delete('/resource/:id', (req, res) => {
    // Implement logic to delete a resource by ID
    const resourceId = req.params.id;
    res.send(`Deleting resource with ID ${resourceId}`);
});

module.exports = router;
