const btns = (state = {txt: "1-st state"}, action) => {
  switch (action.type) {
    case 'PRS_BTN1':
      console.log("state.txt: "+state.txt)
      return {txt: action.txt}
    default:
      return state
  }
}

export default btns
