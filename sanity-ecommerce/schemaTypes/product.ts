export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of product',
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images of the product',
            of: [{type: 'image'}]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description of the product',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'price_id',
            title: 'Stripe Price ID',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Product Category',
            type: 'reference',
            to: [{type: 'category'}]
        }
    ],
}