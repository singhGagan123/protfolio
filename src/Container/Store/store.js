import { configureStore } from '@reduxjs/toolkit';
import current_state_slice from './current_state_slice';




const store= configureStore({
    reducer:{
        name:current_state_slice
    }
})


export default store;