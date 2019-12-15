import React,{PureComponent} from "react"
import { Row, Col, Icon, NavItem } from 'react-materialize'
import axios from 'axios'
import '../styles/signup.scss'


interface ISignUpProps {
}
  
interface ISignUpStates {
}

class SignUp extends PureComponent<ISignUpProps, ISignUpStates> {

  render () {
    return (
      <div>
        Holi SignUp
      </div>
    )
  }
  
}

export default SignUp