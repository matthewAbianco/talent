const express = require('express')
const router = express.Router()

const {
    getAllJobs,
    getJobById,
    createJob,
    updateJob,
    deleteJob
} = require('../../controllers/job-controller')

// Set up GET all and POST at /api/job
router
    .route('/')
    .get(getAllJobs)
    .post(createJob);

// Set up GET one, PUT, and DELETE at /api/job/:id
router
    .route('/:id')
    .get(getJobById)
    .put(updateJob)
    .delete(deleteJob);

module.exports = router 