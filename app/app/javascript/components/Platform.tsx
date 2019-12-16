import React,{PureComponent} from "react"
import { Row, Col, Icon, NavItem } from 'react-materialize'
import axios from 'axios'
import '../styles/platform.scss'
import NavBarUser from './NavBarUser'
import MapContainer from './MapContainer'

interface IPlatformProps {
  path_url: string
  logged_in: boolean
  user: any
  apiKey: string
  google: any
}

interface IPlatformStates {

}
  
class Platform extends PureComponent<IPlatformProps, IPlatformStates> {
  constructor(props: IPlatformProps) {
    super(props)
    //Axios HEADERS
    const csrfToken: string = document.querySelector<HTMLMetaElement>(
      "[name=csrf-token]"
    )!.content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  componentDidMount() {
    console.log(this.props.user)
  }

  render () {
    return (
      <div className="platform">
        <NavBarUser user={this.props.user} />
        <MapContainer api_key={this.props.apiKey} google={this.props.google} user={this.props.user}  />
      </div>
    )
  }
}

export default Platform
