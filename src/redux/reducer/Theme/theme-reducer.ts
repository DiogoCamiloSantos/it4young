import darkTheme from "../../../common/theme/dark-theme";
import lightTheme from "../../../common/theme/light-theme";

const initialState = darkTheme;

const themeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return action.payload ;
    default:
      return state;
  }
};

export default themeReducer;