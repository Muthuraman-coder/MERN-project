import { createContext, useReducer } from 'react'

export const Routinecontext = createContext()

export const Routinereducer = (state, action) => {
  switch (action.type) {
    case 'Set-routines':
      return { 
        routines: action.payload 
      }
    case 'Create-routines':
      return { 
        routines: [action.payload, ...state.routines] 
      }
    default:
      return state
  }
}

export const RoutineContextProvider = ({ child }) => {
  const [state, dispatch] = useReducer(Routinereducer, { 
    routines: null
  })
  
  return (
    <Routinecontext.Provider value={{ ...state, dispatch }}>
      { child }
    </Routinecontext.Provider>
  )
}