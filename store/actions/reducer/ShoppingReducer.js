import { Switch } from 'react-native';
import { Types } from '../ShoppingAction';

export const ShoppingInitialState = {
    products: [
        {id:1,
        name: 'Cuatro pintas con papas y bastones muzzarela',
        price: 3000},
        {id:2,
        name: 'Helado 1/4 50% off',
        price: 500},
        {id:3,
        name: 'Pinta cerveza 50% off toda la noche',
        price: 250},
        {id:4,
        name: 'Hamburguesa completa con una pinta o gaseosa',
        price: 1200},
        {id:5,
        name: '1x3 en tragos, pagas uno tomas tres',
        price: 800}
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