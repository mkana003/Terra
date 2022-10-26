const palette = {
    dark_orange: "#DC6434",
    light_orange: "#DDA15E",
    middle: "#FEFAE0",
    light_green: "#606C38",
    dark_green: "#384B22"
}

export const lightTheme = {
    colors: {
      background: "#FFFFFF",
      search_background: "#F1F5FE",
      base_text: "#9B9AA1",
      primary: palette.dark_green,
      secondary: palette.dark_green,
    }
};

export const darkTheme = {
    colors: {
        ...lightTheme.colors,
        background: "#363636",
        base_text: "#F1F5FE",
    }
}




