
const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY);

export default async (req, res) => {
    const{items, email} = req.body;

    console.log(items);
    console.log(email);
};