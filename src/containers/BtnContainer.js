import { connect } from 'react-redux'
import { prsBtn1, prsBtn2, prsBtn3, prsBtn4 } from '../actions'

import TopPanel from '../components/TopPanel'

const mapStateToProps = (state) => {
  console.log(state);
  return {
    txt: state.btns.txt,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: (txt) => {
      switch (txt) {
        case 'btn 1':
            dispatch(prsBtn1(txt));
            console.log(txt);
          break;
        case 'btn 2':
            dispatch(prsBtn2(txt));
            console.log(txt);
          break;
          case 'btn 3':
              dispatch(prsBtn3(txt));
              console.log(txt);
            break;
          case 'btn 4':
              dispatch(prsBtn4(txt));
              console.log(txt);
            break;
        default:
      }
    }
  }
}
//console.log(state);
const BtnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPanel)

export default BtnContainer
