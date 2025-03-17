import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        fullname: 'Samet Tunay',
        username: 'Samettunayyy7',
        avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
    },
    accounts: [],
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccount: (state, action) => {
            state.accounts.push(action.payload);
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload);
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false);
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload;
        },
    },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;



