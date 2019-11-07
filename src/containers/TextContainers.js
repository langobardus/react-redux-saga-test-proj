import { connect } from 'react-redux'
import ScreenItem from '../components/ScreenItem'


const mapStateToProps = (state) => {
  return{
  txt: state.btns.txt
}}


const TextContainer = connect(
  mapStateToProps
)(ScreenItem)

export default TextContainer
