const { User } = require('../models')

const userController = {

    // get all users

    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))

            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    // get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                // If their is no user found, send 404
                if (!dbUserData) {
                    res.status(404).json({ message: 'No User found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },


    // create User 
    createUser({ body }, res) {
        User.create(body)
            .then(dbUserData => res.json(dbUserData))
            .catch(err => res.status(400).json(err))
    },

    // update User by ID
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ id: params.id }, body, { new: true })

            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'no user found with this id' })
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    },

    // delete user 
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })

            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: "no user found with this id" })

                    return
                }
                res.json(dbUserData)
            })
            .catch(err => res.status(400).json(err))
    }
}



module.exports = userController;