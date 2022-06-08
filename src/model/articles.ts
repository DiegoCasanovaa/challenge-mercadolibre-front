export interface articlesAll {
    
    author: {
        name: String,
        lastname: String
    },
    categories: String[],
    items: [
    {
        id: String,
        title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
        picture: String,
        condition: String,
        free_shipping: Boolean
    }]
}