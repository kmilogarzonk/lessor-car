import React,{PureComponent} from "react"
import { Row, Col, Icon, NavItem } from 'react-materialize'
import axios from 'axios'
import '../styles/map.scss'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

interface IMapContainerProps {
  api_key: string
  google: any
}
  
interface IMapContainerStates {

}
  
export class MapContainer extends PureComponent<IMapContainerProps, IMapContainerStates> {
  constructor(props: IMapContainerProps) {
    super(props)
    //Axios HEADERS
    const csrfToken: string = document.querySelector<HTMLMetaElement>(
      "[name=csrf-token]"
    )!.content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios.defaults.headers.common["Content-Type"] = "application/json";    
  }

  componentDidMount() {
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
      </Map>
    )
  }
}

export default GoogleApiWrapper(
  (props: IMapContainerProps) => ({
    apiKey: props.api_key
  })
)(MapContainer)
