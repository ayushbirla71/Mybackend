const mongoose = require('mongoose');

////////////////////////~Schema~///////////////////////
const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    tags: [String],
    isPublished: Boolean,
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    sales: { type: Number, default: 10 },
    summary: mongoose.Schema.Types.Mixed,
    isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")
}, { timestamps: true });

/////////////////////////~Modules~///////////////////////////
module.exports = mongoose.model('Book', bookSchema) //users
