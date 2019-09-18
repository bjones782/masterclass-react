const initialState = {
    plans: [],
    studentStandards: [],
    standards: [],
    masteredStandards1: [],
    almostStandards: [],
    notyetStandards: [], 
    masteredStandards2: [],
    almostStandards2: [],
    notyetStandards2: [],
    masteredStandards3: [],
    almostStandards3: [],
    notyetStandards3: [],
    lessons: []
    
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case 'GET_STUDENT_STANDARDS': {
        console.log(state)
        var foo = { ...state, studentStandards: action.data }
        console.log("foo", foo)
        return foo
      }
      case 'GET_STANDARDS': {
        return { ...state, standards: action.data}
      }
      case 'GET_LESSONS': {
        
        return { ...state, lessons: action.data }
      }
      case 'ADD_MASTERED': {
        const masteredStandards1 = state.masteredStandards1.concat(action.name)
        console.log("DATA", action.masterylevel, action.name)
        return { ...state, masteredStandards1}
        this.forceUpdate()
        }
      case 'ADD_ALMOST': {
        const almostStandards = state.almostStandards.concat(action.name)
        console.log("ACTION DATA", action)
        return { ...state, almostStandards}
      }
      case 'ADD_NOTYET': {
        const notyetStandards = state.notyetStandards.concat(action.name)
        return { ...state, notyetStandards}
      }
      case 'ADD_MASTERED2': {
        const masteredStandards2 = state.masteredStandards2.concat(action.name)
        return { ...state, masteredStandards2}
      }
      case 'ADD_ALMOST2': {
        const almostStandards2 = state.almostStandards2.concat(action.name)
        return { ...state, almostStandards2}
      }
      case 'ADD_NOTYET2': {
        const notyetStandards2 = state.notyetStandards2.concat(action.name)
        return { ...state, notyetStandards2}
      }
      case 'ADD_MASTERED3': {
        const masteredStandards3 = state.masteredStandards3.concat(action.name)
        return { ...state, masteredStandards3}
      }
      case 'ADD_ALMOST3': {
        const almostStandards3 = state.almostStandards3.concat(action.name)
        return { ...state, almostStandards3}
      }
      case 'ADD_NOTYET3': {
        const notyetStandards3 = state.notyetStandards3.concat(action.name)
        return { ...state, notyetStandards3}
      }
      case 'ADD_PLAN': {
        // const notyetStandards3 = state.notyetStandards3.concat(action.name)
        return { ...state, plans: action.data}
      }
      case 'GET_PLANS': {
        // const notyetStandards3 = state.notyetStandards3.concat(action.name)
        return { ...state, plans: action.data}
      }
      
      default: {
        return state
      }
    }
  };

  