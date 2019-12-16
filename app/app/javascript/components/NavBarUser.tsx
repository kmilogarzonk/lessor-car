import React,{PureComponent} from "react"
import { Row, Col, Navbar, Dropdown, Divider, Icon, NavItem } from 'react-materialize'
import axios from 'axios'
import '../styles/navbaruser.scss'

interface INavBarUserProps {
  user: any
}

interface INavBarUserStates {

}
  
class NavBarUser extends PureComponent<INavBarUserProps, INavBarUserStates> {
  constructor(props: INavBarUserProps) {
    super(props)
    //Axios HEADERS
    const csrfToken: string = document.querySelector<HTMLMetaElement>(
      "[name=csrf-token]"
    )!.content;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    axios.defaults.headers.common["Content-Type"] = "application/json";
  }

  render () {
    return (
      <Navbar
        className="barUser"
        alignLinks="right"
        brand={<a href="/">
            <img src="/images/logo.png" />
          </a>}
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: 'left',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
      >
        <Dropdown
          options={{
            alignment: 'left',
            autoTrigger: true,
            closeOnClick: true,
            constrainWidth: true,
            container: null,
            coverTrigger: true,
            hover: false,
            inDuration: 150,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 250
          }}
        trigger={<a href="#!">{this.props.user.identification_number}{' '}<Icon right>arrow_drop_down</Icon></a>}
        >
          <a href="#">
            Mis viajes
          </a>
          <a href="#">
            Configuraciónes
          </a>
          <a href="#">
            Mis autos
          </a>
          <Divider />
          <a href="#">
            Salir
          </a>
        </Dropdown>
      </Navbar>
    )
  }
}

export default NavBarUser
