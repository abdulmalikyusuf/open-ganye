import React from 'react'
import { Container, Row, } from 'react-bootstrap'

import PhotoGrid from '../components/PhotoGrid'
import Scan31 from "../assets/cdp/Scan31.jpg"
import Scan32 from "../assets/cdp/Scan32.jpg"
import Scan33 from "../assets/cdp/Scan33.jpg"
import Scan34 from "../assets/cdp/Scan34.jpg"
import Scan35 from "../assets/cdp/Scan35.jpg"
import Scan36 from "../assets/cdp/Scan36.jpg"
import Scan37 from "../assets/cdp/Scan37.jpg"
import Scan38 from "../assets/cdp/Scan38.jpg"
import Scan40 from "../assets/cdp/Scan40.jpg"
import Scan41 from "../assets/cdp/Scan41.jpg"
import Scan42 from "../assets/cdp/Scan42.jpg"
import Scan43 from "../assets/cdp/Scan43.jpg"
import Scan44 from "../assets/cdp/Scan44.jpg"
import Scan45 from "../assets/cdp/Scan45.jpg"
import Scan46 from "../assets/cdp/Scan46.jpg"
import Scan47 from "../assets/cdp/Scan47.jpg"
import Scan49 from "../assets/cdp/Scan49.jpg"
import Scan50 from "../assets/cdp/Scan50.jpg"


function Community() {
    
    const photos = [Scan31, Scan32, Scan33, Scan34, Scan35, Scan36, Scan37, Scan38, Scan40, Scan41,
        Scan42, Scan43, Scan44, Scan45, Scan46, Scan47, Scan49, Scan50]

    React.useEffect(()=> {
        document.title = "Community Dev. Plan | FollowTaxes"
      }, [])

      
  return (
    <Container className="pt-5">
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{photos.length} Photos</h1>
            <hr className="mt-0 pt-0"/>
            {photos.map((photo, idx) => <PhotoGrid photo={photo} key={photo}/>)}
        </Row>
    </Container>
  )
}

export default Community