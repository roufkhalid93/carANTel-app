import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const BASE_URL = "https://2e3f63ac-3df4-4312-a17e-4ea774846b23-00-1chbu1yyknn6i.spock.replit.dev";

//async thunk for fetchinig a user's listings
export const fetchListingsByUser = createAsyncThunk(
    "listings/fetchByUser",
    async (userId) => {
        const response = await fetch(`${BASE_URL}/listings/user/${userId}`);
        return response.json();
    }
);

//Slice 
const listingsSlice = createSlice({
    name: "listings",
    initialState: { listings: [], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchListingsByUser.fulfilled, (state, action) => {
            state.listings = action.payload;
            state.loading = false;
        });
    },
});

export default listingsSlice.reducer;








// const cartSlice = createSlice({
//     name: "cart",
//     initialState: [],
//     reducers: {
//         addToCart: (state, action) => {
//             state.push(action.payload);
//         },
//     },
// });

// export const { addToCart } = cartSlice.actions;

// export default cartSlice.reducer;