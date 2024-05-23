import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: localStorage.getItem("PortFolioTheme") ? localStorage.getItem("PortFolioTheme") : "",
}

export const ThemeSlice = createSlice({
    name: "Theme",
    initialState: initialState,
    reducers:{
        
    }

})