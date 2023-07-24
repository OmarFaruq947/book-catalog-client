import { createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../Sheared/Types/globalTypes";

interface IBookCart {
  books: IBook[];
  filteredData: [];
  filterValue: "";
}

const initialState: IBookCart = {
  books: [],
  filteredData: [],
  filterValue: "",
};

export const dataFilterSlice = createSlice({
  name: "dataFilter",
  initialState,
  reducers: {
    // setData: (state, action) => {
    //   state.books = action.payload;
    //   state.filteredData = action.payload;
    // },
    // setFilterValue: (state, action) => {
    //   state.filterValue = action.payload;
    //   state.filteredData = state.books.filter((item) =>
    //     item.filterProperty.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    // },
  },
});

export const {} = dataFilterSlice.actions;
export default dataFilterSlice.reducer;
