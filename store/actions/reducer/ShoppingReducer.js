import { Switch } from 'react-native';
import { Types } from '../ShoppingAction';

export const ShoppingInitialState = {
    products: [
        {id:1,
        name: 'Hamburguesa',
        price: 1500},
        {id:2,
        name: 'Helado 1/4',
        price: 900},
        {id:3,
        name: 'Pinta cerveza',
        price: 650}
    ],
    cart:[],
};
//funcion pura
export function shoppingReducer(state, action) {
    switch (action.type) {
        case Types.AddToCart:{
            let newItem = state.products.find(product => product.id === action.payload);
            let itemInCart =state.cart.find(item => item.id === newItem.id);
           return itemInCart ? { 
            ...state,
            cart: state.cart.map(item => item.id === newItem.id ? {...item, quantity:item.quantity + 1} : item)
           } : {
            ...state,
            cart:[...state.cart, {...newItem, quantity:1}]
           };
        }
        case Types.RemoveOneFromCart:{
            let itemDelete = state.cart.find(item => item.id === action.payload);
            return itemDelete.quantity > 1 ? {
                ...state,
                cart:state.cart.map((item) => item.id === action.payload ? {...item, quantity:item.quantity -1}
                     : item)
            }  : {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        }
        case Types.RemoveAllFromCart:{
            return {
                ...state,
                cart:state.cart.filter((item) => item.id !== action.payload),
            }


        }
        case Types.ClearCart:
            return ShoppingInitialState;
        default:
        return state;
    }
}