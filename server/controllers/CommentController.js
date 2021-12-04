
const { Comment } = require('../models');

class CommentController {
    static findAll (req, res, next) {
        console.log('<<<');
        Comment.findAll()
            .then(result => {
                return res.status(200).json({ result })
            })
            .catch(err => {
                next(err)
            })
    };
    
    static create (req, res, next) {
        let {name, comment} = req.body
        let payload = {
            name,
            comment
        }
        Comment.create(payload)
            .then(result => {
                return res.status(201).json({ message: "Berhasil membuat ucapan"})
            })
            .catch(err => {
                next(err)
            })
    }
};

module.exports = CommentController;