const INITIAL_STATE = {
  items: [],
};

export default (
  state = INITIAL_STATE,
  action: {type: string; payload?: any},
) => {
  switch (action.type) {
    default:
      return state;
  }
};
