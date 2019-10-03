//  index, show, store, update, destroy = métodos que existe num controller

const User = require('../models/User');

module.exports = {

    async store(req, res) {

        const { email } =  req.body;
        
        let user = await User.findOne({ email });

        if(!user) {
            user = await User.create({ email });
        }

        // comunicação com a base de dados para criar um usuário

        return res.json(user);
    }
};