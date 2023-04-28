import { createStore,combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { courseListReducer, registeredCoursesReducer} from './reducers/courseReducer'



const reducer = combineReducers({
    courseList:courseListReducer,
    coursesRegisterd:registeredCoursesReducer

})




const initialState = {
    // courses: {courseItems: cartItemsFromLocalStorage},

}

const middleware = [thunk]


const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store