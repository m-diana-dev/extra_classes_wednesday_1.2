import {UserType} from 'types';
import {RootStateOrAny, RootStoreType} from "../index";


export const selectUsers = (state: RootStoreType): UserType[] => {
    return state.usersData.users
};
