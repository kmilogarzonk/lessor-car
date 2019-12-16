import React,{PureComponent} from "react"
import { Button, Icon } from 'react-materialize'
import '../styles/map.scss'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'
import RentCar from "./RentCar"

interface IMapContainerProps {
  api_key: string
  google: any
  user: any
}
  
interface IMapContainerStates {
  currentLocation: any
  cL: boolean
  openContent: boolean
}
  
export class MapContainer extends PureComponent<IMapContainerProps, IMapContainerStates> {
  constructor(props: IMapContainerProps) {
    super(props)
    this.state = {
      currentLocation: {
        lat: 4.6486259,
        lng: -74.247893
      },
      cL: false,
      openContent: false
    }   
  }

  componentDidMount() { 
    this.getCurrentLocation()    
  }

  loader = () => {
    let loader: any = document.querySelector('.loader')
    if (loader.classList.contains('hide')) {
      loader.classList.add('flex')
      loader.classList.remove('hide')
    } else {
      loader.classList.add('hide')
      loader.classList.remove('flex')
    }
  }

  getCurrentLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords
        this.setState({
          cL: true,
          currentLocation: { lat: coords.latitude, lng: coords.longitude }
        })
      })
    } else {
      error => console.log("error", error)
    }
  }

  iconUser = () => {
    let icon:any = {
      url: "/images/user.png",
      size: { width: 40, height: 40 },
      scaledSize: { width: 40, height: 40 }
    }
    return icon
  }

  rentCar = () => {
    this.setState({ openContent: true }, () => {
      let section: any = document.querySelector('.sectionRent')
      section.classList.add('flex')
      section.classList.remove('hide')
    })   
  }

  render() {
    return (
      <div className="map">
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={this.state.currentLocation}
          className="mapPlatform"
          centerAroundCurrentLocation={true}
          visible={true}>
            {this.state.cL ?
                <Marker
                  position={ this.getCurrentLocation() }
                  animation= { this.props.google.maps.Animation.DROP }
                  icon={ this.iconUser() }
                  name={ this.props.user.identification_number}
                />
              :
                null
            }          
        </Map>
        <Button
          className="light-green darken-1 btnC btnRent"
          floating
          icon={<Icon>directions_car</Icon>}
          large
          node="button"
          waves="light"
          tooltip="Alquila tu auto"
          onClick={e => {
            e.preventDefault()
            if(this.state.openContent == false){
              this.rentCar()
            }
          }}
          tooltipOptions={{
            position: 'right'
          }}
        />
        <Button
          className="light-green lighten-2 btnC btnRide"
          floating
          icon={<Icon>directions</Icon>}
          large
          node="button"
          waves="light"
          tooltip="Cotiza un viaje"
          tooltipOptions={{
            position: 'right'
          }}
        />
        <RentCar user={this.props.user} />
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props: IMapContainerProps) => ({
    apiKey: props.api_key
  })
)(MapContainer)
