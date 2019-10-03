const mongoose = require('mongoose');

// temos dois tipos de relacinonamento aqui
// A reserva que é feita por um usuário e é uma reserva pra trabalhar dentro do spot
const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot'
    }
})

module.exports =  mongoose.model('Booking', BookingSchema);