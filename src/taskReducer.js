function taskReducer(state, action) {
    // state-current state variable
    // action -- add,delete,update
    console.log("S-tate in reduce::", state);
    console.log("action in reduce::", action);
  
    switch (action.type) {
      case "added":
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
  
      case "changed":
        return state.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      case "deleted":
        return state.filter((t) => t.id !== action.id);
      default:
        throw Error("Unknown action: " + action.type);
    }
  }
  export default taskReducer;