import React from 'react'
import { Container, Row} from 'react-bootstrap'

import DocumentGrid from '../components/DocumentGrid'
import G21 from '../assets/pdf/G21.pdf'

function Budgets() {
    React.useEffect(()=> {
        document.title = "Budgets | FollowTaxes"
      }, [])
    
    const documents = [G21]
  return (
    <Container className="pt-5">
        <Row className="g-5">
            <h1 className="mb-0 pb-0">{documents.length} Documents</h1>
            <hr className="mt-0 pt-0"/>
            {documents.map((document, idx) => <DocumentGrid document={document} key={document}/>)}
        </Row>
    </Container>
  )
}

export default Budgets