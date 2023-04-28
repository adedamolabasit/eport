import {
    COURSE_LIST_REQUEST,
    COURSE_LIST_SUCCESS,
    COURSE_LIST_FAIL,

    COURSE_REGISTERED_REQUEST,
    COURSE_REGISTERED_SUCCESS,
    COURSE_REGISTERED_FAIL,
  } from "../constants";


export  const courseListReducer = (state = {courses:{}},action) => {
    
    switch(action.type){
        
        case COURSE_LIST_REQUEST:
            return {loading:true,courses:[]}

        case COURSE_LIST_SUCCESS:
            return{loading:false,courses:[action.payload]}
            

        case COURSE_LIST_FAIL:
            return{loading:false,error:action.payload}

        default:
            return state 

    }
} 
export const registeredCoursesReducer = (state = {coursesData:{}},action) => {
    
    switch(action.type){
        
        case COURSE_REGISTERED_REQUEST:
            return {loading:true,coursesData:[]}

        case COURSE_REGISTERED_SUCCESS:
            return{loading:false,coursesData:[action.payload]}
            

        case COURSE_REGISTERED_FAIL:
            return{loading:false,error:action.payload}

        default:
            return state 

    }
} 




