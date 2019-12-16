import React,{PureComponent} from "react"
import { Row, Col, Icon, Modal } from 'react-materialize'
import axios from 'axios'
import '../styles/rentcar.scss'

interface IRentCarProps {
  user: any
}

interface IRentCarStates {
}
  
class RentCar extends PureComponent<IRentCarProps, IRentCarStates> {
  constructor(props: IRentCarProps) {
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

  render () {
    return (
      <Row className="sectionRent hide z-depth-1">
        <Col s={12} l={12}>
          From rent
        </Col>
      </Row>
    )
  }
}

export default RentCar