import { connect } from 'react-redux'
import { prsBtn1 } from '../actions'
import TopPanel from '../components/TopPanel'


const mapStateToProps = (state) => {
  console.log(state);
  return {
    txt: state.btns.txt,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBtnClick: () => {
      dispatch(prsBtn1("PRS_BTN1"));
      console.log(prsBtn1("PRS_BTN1"));
    }
  }
}
//console.log(state);
const BtnContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopPanel)

export default BtnContainer
