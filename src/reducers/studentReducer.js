const initialState = {
    students: [],
    comments: [],
    student: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_STUDENTS': {
        return { ...state, students: action.data }
      }
      case 'ADD_STUDENT': {
        return { ...state, students: action.data}
      }
      case 'GET_COMMENTS': {
        return { ...state, comments: action.data}
      }
      default: {
        return state;
      }
    }
  };


