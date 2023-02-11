import { configureStore , combineReducers} from 'redux';

import CategoryReducer from './actions/reducer/Category.reducer';
import ProductReducer from './actions/reducer/Products.recuder';

const RootReducer = combineReducers({
    categories: CategoryReducer,
    product: ProductReducer
})

export default configureStore (RootReducer);