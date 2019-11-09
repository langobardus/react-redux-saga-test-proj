const btns = (state = {txt: "text Y", counterBtn: 0, counterBtn1: 0, counterBtn2: 0, counterBtn3: 0, counterBtn4: 0}, action) => {
  switch (action.type) {
    case 'PRS_BTN1':
      console.log("state.txt: "+action.txt)
      return {...state, txt: action.txt, txt1:  action.txt, counterBtn: state.counterBtn1+1, counterBtn1: state.counterBtn1+1}
    case 'PRS_BTN2':
      console.log("state.txt: "+action.txt)
      return {...state, txt: action.txt, txt2:  action.txt, counterBtn: state.counterBtn2+1, counterBtn2: state.counterBtn2+1}
    case 'PRS_BTN3':
        console.log("state.txt: "+action.txt)
        return {...state, txt: action.txt, txt3:  action.txt, counterBtn: state.counterBtn3+1, counterBtn3: state.counterBtn3+1}
    case 'PRS_BTN4':
        console.log("state.txt: "+action.txt)
        return {...state, txt: action.txt, txt4:  action.txt, counterBtn: state.counterBtn4+1, counterBtn4: state.counterBtn4+1}
    default:
      return state
  }
}

export default btns
