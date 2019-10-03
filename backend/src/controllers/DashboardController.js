const Spot =  require('../models/Spot');

module.exports =  {
 async show(req, res) {
     const { user_id } = req.headers;

    //  buscar todos os spots cujo user é igual ao user id qu está vindo atravé do cabeçalho (headers)
     const spots =  await Spot.find({ user: user_id });


     return res.json(spots);
 }   
}