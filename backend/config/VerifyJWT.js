const jwt = require('jsonwebtoken');

const config = require('./config')


module.exports.verifyJwtToken = (req, res, next) => {
    console.log("verifyJwtToken")
    try {
        const token = req.headers.authorization;
        const result = jwt.verify(token.split(' ')[1], config.secret)
        req._id = result.id;

        next();
    } catch (err) {
        res.status(401).send("Unauthaurized!!!")
    }
}
