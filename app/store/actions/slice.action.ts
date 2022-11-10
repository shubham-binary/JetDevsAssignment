import { apiLoaderSlice } from "../reducers/apiLoaderSlice";
import { setUserReducerSlice } from "../reducers/user-all.reducer";
import { setUserLoginStatusSlice } from "../reducers/user-status.reducer";


// apiLoaderReducer
export const {apiLoader} = apiLoaderSlice.actions

//  login status
export const {setUserLoginStatus} = setUserLoginStatusSlice.actions


// all user data 
export const {addUserData,userFavorite,userUnFavorite,deleteUnFavorite,resetUserData} = setUserReducerSlice.actions