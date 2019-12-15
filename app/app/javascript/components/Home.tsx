import React,{PureComponent} from "react"
import { Row, Col, Icon, NavItem } from 'react-materialize'
import axios from 'axios'
import '../styles/home.scss'
import Login from './Login'
import SignUp from './SignUp'

interface IHomeProps {
  path_url: string
  logged_in: boolean
}

interface IHomeStates {
  viewSign: any
}
  
class Home extends PureComponent<IHomeProps, IHomeStates> {
  constructor(props: IHomeProps) {
    super(props)
    this.state = {
      viewSign: "in"
    }
    //Axios HEADERS
    const csrfToken: string = document.querySelector<HTMLMetaElement>(
      "[name=csrf-token]"
    )!.content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  componentDidMount() {
    console.log(this.props.logged_in)
  }

  _changeViewSign = (type) => {
    this.setState({ viewSign: type }, () => {
      this.forceUpdate()
    })
  }

  unLogged = () => {
    return(
      <Row className="content unlogged valign-wrapper center-align">
        <Col s={12} l={12}>

          <div className="card-sign z-depth-1">
            <img src="/images/logo.png" className="logo"/>
            <h5>
              <a href="#" onClick={e => {
                e.preventDefault()
                this._changeViewSign("in")
              }}>Inicia sesión</a> o 
              <a  href="#" onClick={e => {
                e.preventDefault()
                this._changeViewSign("out")
              }}> Regístrate</a>
            </h5>
            { this.state.viewSign == "in" ?
                <Login />
              :
                <SignUp />
            }
          </div>

        </Col>
      </Row>      
    )
  }

  logged = () => {
    return(
      <div>
        Holi looged
      </div>
    )
  }

  contentHome = () => {
    let content:any = ""
    if(this.props.logged_in){
      content = this.logged()
    }else{
      content = this.unLogged()
    }
    return content
  }

  render () {
    return (
      this.contentHome()
    )
  }
}

export default Home
