import React,{PureComponent} from "react"
import { Row, Col, Icon, TextInput, Button } from 'react-materialize'
import axios from 'axios'
import M from "materialize-css/dist/js/materialize"
import '../styles/signup.scss'


interface ISignUpProps {
}
  
interface ISignUpStates {
  password: string
  identification_number: string
  email: string
  phone_number: string
}

class SignUp extends PureComponent<ISignUpProps, ISignUpStates> {

  constructor(props: ISignUpProps) {
    super(props)
    this.state = {
      password: "",
      identification_number: "",
      email: "",
      phone_number: ""
    }    
    this._handleSubmitSignUp = this._handleSubmitSignUp.bind(this)
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

  _handleSubmitSignUp = e => {
    console.log(e)
    e.preventDefault()
    this.validatorSignUp()
  }

  validatorSignUp = () => {
    if(this.state.identification_number == ""){
      return M.toast({ html: 'La identificación no puede ser vacia' })
    } else if(this.state.password == ""){
      return M.toast({ html: 'La contraseña no puede ser vacia' })
    } else if(this.state.email == ""){
      return M.toast({ html: 'El email no puede ser vacio' })
    } else {
      this.signUp()
    }
  }

  signUp = () => {
    this.loader()
    let url: any = `/signup`
    let method: any = "POST"

    axios
      .request({
        url,
        method,
        data: {
          identification_number: this.state.identification_number,
          password_digest: this.state.password,
          email: this.state.email,
          phone_number: this.state.phone_number
        }
      })
      .then(({ data }) => {
        console.log(data)
        this.loader()        
        this.forceUpdate()
        M.toast({ html: data })
        return <Redirect to = {{ pathname: "/home" }} />;
      })
      .catch(e => {
        console.log(e);
      })

  }

  handleChangePassword = e => {
    e.preventDefault()
    this.setState({
      password: e.target.value
    })
  }

  handleChangeIdentificationNumber = e => {
    e.preventDefault()
    this.setState({
      identification_number: e.target.value
    })
  }

  handleChangeEmail = e => {
    e.preventDefault()
    this.setState({
      email: e.target.value
    })
  }

  handleChangePhoneNumber = e => {
    e.preventDefault()
    this.setState({
      phone_number: e.target.value
    })
  }

  render () {
    return (
      <Row>
        <Col s={12} l={12}>
          <form onSubmit={this._handleSubmitSignUp} className="formSignUp">
            <TextInput
              s={12} l={12}
              validate={true}
              label="Identificación"       
              value={this.state.identification_number}
              onChange={this.handleChangeIdentificationNumber} />
            <TextInput
              s={12} l={12}
              validate={true}
              password
              label="Contraseña"       
              value={this.state.password}
              onChange={this.handleChangePassword} />
            <TextInput
              s={12} l={12}
              validate={true}
              label="Email"       
              value={this.state.email}
              onChange={this.handleChangeEmail} />
            <TextInput
              s={12} l={12}
              label="Número de telefono"       
              value={this.state.phone_number}
              onChange={this.handleChangePhoneNumber} />
            
            <Button
              className="btnSend white black-text"          
              type="submit"
              waves="light"
              icon={<Icon>done</Icon>}> Registrarme
            </Button>
          </form>
        </Col>
      </Row>
    )
  }
  
}

export default SignUp