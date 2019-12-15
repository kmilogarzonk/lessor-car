import React,{PureComponent} from "react"
import { Row, Col, TextInput, Icon, Button } from 'react-materialize'
import axios from 'axios'
import M from "materialize-css/dist/js/materialize"
import '../styles/login.scss'


interface ILoginProps {
}
  
interface ILoginStates {
  username: string
  password: string
}

class Login extends PureComponent<ILoginProps, ILoginStates> {

  constructor(props: ILoginProps) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }    
    this._handleSubmitLogin = this._handleSubmitLogin.bind(this)
    const csrfToken: string = document.querySelector<HTMLMetaElement>(
      "[name=csrf-token]"
    )!.content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  loader() {
    let loader: any = document.querySelector('.loader')
    if (loader.classList.contains('hide')) {
      loader.classList.add('flex')
      loader.classList.remove('hide')
    } else {
      loader.classList.add('hide')
      loader.classList.remove('flex')
    }
  }

  _handleSubmitLogin = e => {
    console.log(e)
    e.preventDefault()
    let user: string = this.state.username
    let pass: string = this.state.password
    this.validatorLogin(user, pass)
  }

  validatorLogin = (user, pass) => {
    if(user == "" || pass == ""){
      return M.toast({ html: 'La identificación o la contraseña no pueden estar vacias' })
    } else {
      this.login()
    }
  }

  login = () => {
    this.loader()
    let url: any = `/login`
    let method: any = "POST"

    axios
      .request({
        url,
        method,
        data: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(({ data }) => {
        console.log(data)
        this.loader()        
        this.forceUpdate()
        M.toast({ html: data })
      })
      .catch(e => {
        console.log(e);
      })

  }

  handleChangeUsername = e => {
    e.preventDefault()
    this.setState({
      username: e.target.value
    })
  }

  handleChangePassword = e => {
    e.preventDefault()
    this.setState({
      password: e.target.value
    })
  }

  render () {
    return (
      <Row>
        <Col s={12} l={12}>
          <form onSubmit={this._handleSubmitLogin} className="formLogin">
            <TextInput
              s={12} l={12}
              validate={true}
              label="Identificación"       
              value={this.state.username}
              onChange={this.handleChangeUsername} />
            <TextInput
              s={12} l={12}
              validate={true}
              password
              label="Contraseña"       
              value={this.state.password}
              onChange={this.handleChangePassword} />
            <Button
              className="btnSend white black-text"          
              type="submit"
              waves="light"
              icon={<Icon>done</Icon>}> Ingresar
            </Button>
          </form>
        </Col>
      </Row>
    )
  }

}

export default Login