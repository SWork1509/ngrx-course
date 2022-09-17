import { createAction, props } from "@ngrx/store";
import { IUser } from "./model/user.model";

export const login = createAction(
    "[Login Page] User Login",
    props<{ user: IUser }>()
)

export const logout = createAction(
    "[Top Menu] Logout",
)