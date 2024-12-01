import React, { createContext } from "react";

export let themeContext = createContext()

export let theme = {
    dark: {
        backgroundColor: "#0b0b0b"
    },
    light: {
        backgroundColor: "#17c7f3"
    }
}