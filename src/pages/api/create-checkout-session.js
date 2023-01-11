
const stripe = require('stripe')(process.env.STRIPE_SECRETE_KEY);

export default async (req, res) => {
    const{items, email} = req.body;

    const transformedItems = items.map(item => ({
        description: items.description,
        quantity: 1,
        price_data: {
            currency: "zar",
            unit_amount: item.price * 100,
            product_data: {
                name: item.tittle,
                images: [item.image]
            },
        },
    }));

    const session = await stripe.checkout.sesssion.create({
        payment_method_types: ['card'],
        shipping_rates: ['shr_1MP5sIAjlmOBni6jTefQGVLE'],
        shipping_address_collection: {
            allowed_countries: ["GB", "US", "ZA"],
        },
        line_items: transformedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        },
    });

    res.status(200).json({id: session.id});
};