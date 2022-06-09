
export interface items {
    id: String,
    title: String,
    price: {
        currency: String,
        amount: Number,
        decimals: Number
    },
    picture: String,
    condition: String,
    free_shipping: Boolean,
    address: String,
    description?:String,
    sold_quantity?:Number
}

export interface articlesAll {
    
    author: {
        name: String,
        lastname: String
    },
    categories: String[],
    items: items[]
}

export interface article {
    
    author: {
        name: String,
        lastname: String
    },
    items: items
}


export const initialValues = {
    author: {
        name: "",
        lastname: ""
    },
    categories: [''],
    items: [
    {
        id: "",
        title: "",
        price: {
            currency: "",
            amount: 0,
            decimals: 0
        },
        picture: "",
        condition: "",
        free_shipping: false,
        address: ''
    }]
}

export const initialValuesItem =  {
        author: {
            name: "",
            lastname: ""
        },
        items:{
            id: "",
            title: "",
            price: {
                currency: "",
                amount: 0,
                decimals: 0
            },
            picture: "",
            condition: "",
            free_shipping: false,
            address: '',
            description:'',
            sold_quantity: 0
        }
       
}