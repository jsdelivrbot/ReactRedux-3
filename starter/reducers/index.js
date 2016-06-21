export default function findState(state,action){
   switch (action.type) {
    case 'Edit':
      return 'Editing'
    case 'Add':
      return 'Adding'
  case 'Clear':
  return 'Clearing'
    default:
      return state
  }
    
}

