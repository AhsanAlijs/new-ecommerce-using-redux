import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
    name: "Products",
    initialState: {
        products: []
    },
    reducers: {
        gettingProducts: (state, action) => {
            
            axios.get('https://fakestoreapi.com/products?limit=5')
                .then((res) => {
                    state.products = res.data
                })
                .catch((rej) => {
                    console.log(rej);
                })

            state.products.push({
                title: action.payload.title,
                price: action.payload.price,
                description: action.payload.description,
                image: action.payload.image
            })
        }
    }
})

export const { gettingProducts } = productSlice.actions
export default productSlice.reducer