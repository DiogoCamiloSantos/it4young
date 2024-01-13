import darkTheme from "../../../common/theme/dark-theme";

const themeReducer = (state = darkTheme, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;