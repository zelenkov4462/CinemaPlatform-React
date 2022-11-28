import {configureStore} from "@reduxjs/toolkit";
import cinema from './reducers/cinema'
import series from './reducers/series'
import onefilm from "./reducers/oneFilm"
import user from "./reducers/user";

export const store = configureStore({
    reducer: {
        cinema,
        series,
        onefilm,
        user
    }
})