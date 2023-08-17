import {configureStore} from '@reduxjs/toolkit';
import users from './slices/users/index';

export default configureStore({
    reducer: {
        users
    }
});