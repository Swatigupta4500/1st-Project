const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://127.0.0.1:27017/smai_auth')
const conn = mongoose.connection;

// conn.on('open', () => {
//     console.log('successfully connected to database');
// })
// conn.on('error', (err) => {
//     console.log('failed to connect to database');
// })


const productSchema = new Schema({
    name: String,
    price: Number,
    unit: Number
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;