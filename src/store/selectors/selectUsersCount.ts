import {RootStateOrAny, RootStoreType} from "store";


export const selectUsersCount = (state: RootStoreType): number => {
    return state.userCount.count
}
