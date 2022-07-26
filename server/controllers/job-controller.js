const { Job } = require('../models')

const jobController = {

    // get all jobs 

    getAllJobs(req, res) {
        Job.find({})
            .then(dbJobData => res.json(dbJobData))
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // get Job by id

    getJobById({ params }, res) {
        Job.findOne({ _id: params.id })
            .then(dbUserData => {
                // If their is no user found, send 404
                if (!dbJobData) {
                    res.status(404).json({ message: 'No Job found with this id!' });
                    return;
                }
                res.json(dbJobData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // create job 

    createJob({ body }, res) {
        User.create(body)
            .then(dbJobData => res.json(dbJobData))
            .catch(err => res.status(400).json(err))

        console.log(body)
    },

    // update Job by ID

    updateJob({ params, body }, res) {
        Job.findOneAndUpdate({ id: params.id }, body, { new: true })

            .then(dbJobData => {
                if (!dbJobData) {
                    res.status(404).json({ message: 'no job found with this id' })
                }
                res.json(dbJobData)
            })
            .catch(err => res.status(400).json(err))
    },

    // delete user 
    deleteJob({ params }, res) {
        Job.findOneAndDelete({ _id: params.id })

            .then(dbJobData => {
                if (!dbJobData) {
                    res.status(404).json({ message: "no job found with this id" })
                    return
                }
                res.json(dbJobData)
                console.log(params)
            })
            .catch(err => res.status(400).json(err))
    }
}



module.exports = userController;