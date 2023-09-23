export const smartDevicesReducer = (state, action) => {
  switch (action.type) {
    // TODO: Other action types
    case "toggle":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          action.payload === index ? !light : light
        ),
      };
    case "allOn":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          light = true
        ),
      };
    case "allOff":
      return {
        ...state,
        lights: state.lights.map((light, index) =>
          light = false
        ),
      };
  }
  return state;
};
