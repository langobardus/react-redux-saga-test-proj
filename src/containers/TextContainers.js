import { connect } from 'react-redux'
import ScreenItem from '../components/ScreenItem'
import DogItem from '../components/DogItem'

const mapStateToProps1 = (state) => {
  return{
  txt: state.btns.txt
}}
export const TextContainer1 = connect(
  mapStateToProps1
)(ScreenItem)

const mapStateToProps2 = (state) => {
  return{
    dogs: state.dogs
  }}
  export const TextContainer2 = connect(
    mapStateToProps2
  )(DogItem)


  const mapStateToProps3 = (state) => {
    return{
      txt: state.btns.counterBtn5
    }}
    export const TextContainer3 = connect(
      mapStateToProps3
    )(ScreenItem)


const mapStateToProps4 = (state) => {
  return{
  txt: state.btns.counterBtn1+state.btns.counterBtn2+state.btns.counterBtn3+state.btns.counterBtn4+state.btns.counterBtn5
}}
export const TextContainer4 = connect(
  mapStateToProps4
)(ScreenItem)


const mapStateToProps5 = (state) => {
  return{
  txt: state.btns.counterBtn1
}}
export const TextContainer5 = connect(
  mapStateToProps5
)(ScreenItem)


const mapStateToProps6 = (state) => {
  return{
  txt: state.btns.counterBtn2
}}
export const TextContainer6 = connect(
  mapStateToProps6
)(ScreenItem)


const mapStateToProps7 = (state) => {
  return{
  txt: state.btns.counterBtn3
}}
export const TextContainer7 = connect(
  mapStateToProps7
)(ScreenItem)


const mapStateToProps8 = (state) => {
  return{
  txt: state.btns.counterBtn4
}}
export const TextContainer8 = connect(
  mapStateToProps8
)(ScreenItem)

//export default TextContainer1
