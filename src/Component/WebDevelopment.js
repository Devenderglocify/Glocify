import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const WebDevelopment = () => {
  return (
    <>
      <section className='glocify-section position-relative'>
            <Container fluid className='px-0'>
                <div className=''>
                    <img className='img-fluid' src={window.location.origin + '/././images/web_banner.png'} />
                </div>
            </Container> 
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='position-absolute d-flex justify-content-center'
                        style={{
                            top: "0px",
                            bottom: "0",
                            left: "0",
                            right: "0",
                            paddingTop: "120px"
                        }}>
                        <h1 className='text-white fw-bolder' style={{
                            fontSize: "100px",
                        }}>Web Development</h1>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>
    </>
  )
}
