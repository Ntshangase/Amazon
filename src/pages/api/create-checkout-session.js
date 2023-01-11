
const stripe = require('stripe')('sk_test_51MP4GpAjlmOBni6jJ0A3l1wybC7IA4FNiamTSEvUt2ZGAL2vmKz8XSoBp4BV4CyCH1gAcroHRZwkBNfbMbHI8T4r00ymzHUE1J');

export default async (req, res) => {
    const {items, email} = req.body;

    const transformedItems = items.map(item => ({
        description: items.description,
        quantity: 1,
        price_data: {
            currency: "zar",
            unit_amount: item.price * 100,
            product_data: {
                name: 'T-shirt',//instead oof item.name
                images: [item.image]
            },
        },
    }));

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_options: [
            {
              shipping_rate_data: {
                type: 'fixed_amount',
                fixed_amount: {amount: 0, currency: 'zar'},
                display_name: 'Free shipping',
                delivery_estimate: {
                  minimum: {unit: 'business_day', value: 5},
                  maximum: {unit: 'business_day', value: 7},
                },
              },
            },
          ],
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