import { combineReducers} from 'redux';

import articles from './aticles_reducers'

const rootReducer = combineReducers({
    articles
})

export default rootReducer;