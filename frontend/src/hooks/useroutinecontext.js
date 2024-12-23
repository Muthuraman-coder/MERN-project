import { Routinecontext } from "../context/routinecontext"
import { useContext } from "react"

export const Useroutinecontext = () => {
  const context = useContext(Routinecontext)

  if(!context) {
    throw Error('useroutinecontext must be used inside an RoutinesContextProvider')
  }

  return context
}