import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Services from './Services';

export const Home = () => {       
    
  return (
    <div>
        <>
        <section className='glocify-section position-relative'>
            <Container fluid className='px-0'>
                <div className=''>
                    <img className='img-fluid' src={window.location.origin + '/././images/banner_home.jpg'} />
                </div>
            </Container> 
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='position-absolute d-flex justify-content-center align-items-center'
                        style={{
                            top: "0px",
                            bottom: "0",
                            left: "0",
                            right: "0",
                        }}>
                        <h1 className='text-white fw-bolder' style={{
                            fontSize: "9em",
                        }}>Your Idea <br className='d-none d-lg-block' /> Our Technology asas</h1>
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>

        <section className='glocify-section position-relative overflow-hidden'>
            <Container fluid className='px-0'>
               <Row className='px-0'>                
                    <Services />                   
               </Row>
            </Container>
        </section> 

        <section className='glocify-section position-relative overflow-hidden' style={{backgroundImage: "url('././images/sec1_bg.jpg')",padding: "130px 0"}}>
            <Container>
               <Row>                
                    <Col lg={6}>
                        <div className='text-start text-white'>
                            <h2 className='fs-62px fw-700'>Why Glocify?</h2>
                            <p className='fs-21px fw-400'>Let’s build your remote IT team</p>
                            <p className='fs-24px fw-400 lh-31px mt-2'>Anyone can build a website but we can help you in building a remote IT team which will help you with all aspects of your business to help you grow online.</p>
                            <ul className='border-start list-unstyled'>
                                <li className='p-4'>
                                    <h2 className='fs-35px'>40 Hours Commitment</h2>
                                    <p className='fs-13px fw-300'>We provide a minimum of 40 hours per week availability of our remote team.</p>
                                </li>
                                <li className='p-4'>
                                    <h2 className='fs-35px'>Backup Available</h2>
                                    <p className='fs-13px fw-300'>We provide backup resource incase of emergency so you are 100% covered.</p>
                                </li>
                                <li className='p-4'>
                                    <h2 className='fs-35px'>Beyond Value</h2>
                                    <p className='fs-13px fw-300'>Our resources are cost effective and don’t require any contracts or commitments.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>                    
                    <Col lg={6} className='position-relative d-flex justify-content-start pt-lg-5 mt-lg-5'>
                        <div>
                            <div className='position-absolute top-0' style={{right: "0", zIndex: '1'}}>
                                    <h2 className='fs-110px fw-700 text-white' style={{fontSize: '6.875em'}}>Your Team <br className='d-none d-lg-block'/> Your Terms</h2>
                                    <p className='fs-21px fw-400 text-white'>Build your ideal remote IT team at an affordable cost and execute your ideas. A team with skillful people can deliver top-notch IT solutions to clients. Stay lean! Move Fast.</p>
                            </div>
                            <div className='position-relative overflow-hidden br-16px h-100' style={{boxShadow: '1px 2px 37px rgb(0 0 0 / 30%)',maxHeight: '582px' }}>
                                    <img className='w-100 h-100' src={window.location.origin + '/././images/sec_1.jpg'} alt=''/>
                            </div>
                        </div>                        
                    </Col>                    
               </Row>
            </Container>
        </section> 

        <section className='glocify-section position-relative overflow-hidden' style={{backgroundImage: "url('././images/collage.jpg')",padding: "130px 0"}}>
            <Container>
               <Row>                
                    <Col lg={6}>
                        <div className='text-start text-white'>
                            <h2 className='fs-62px fw-700'>Why Glocify?</h2>
                            <p className='fs-21px fw-400'>Let’s build your remote IT team</p>
                            <p className='fs-24px fw-400 lh-31px mt-2'>Anyone can build a website but we can help you in building a remote IT team which will help you with all aspects of your business to help you grow online.</p>
                            <ul className='border-start list-unstyled'>
                                <li className='p-4'>
                                    <h2 className='fs-35px'>40 Hours Commitment</h2>
                                    <p className='fs-13px fw-300'>We provide a minimum of 40 hours per week availability of our remote team.</p>
                                </li>
                                <li className='p-4'>
                                    <h2 className='fs-35px'>Backup Available</h2>
                                    <p className='fs-13px fw-300'>We provide backup resource incase of emergency so you are 100% covered.</p>
                                </li>
                                <li className='p-4'>
                                    <h2 className='fs-35px'>Beyond Value</h2>
                                    <p className='fs-13px fw-300'>Our resources are cost effective and don’t require any contracts or commitments.</p>
                                </li>
                            </ul>
                        </div>
                    </Col>                    
                    <Col lg={6} className='position-relative d-flex justify-content-start pt-lg-5 mt-lg-5'>
                        <div>
                            <div className='position-absolute top-0' style={{right: "0", zIndex: '1'}}>
                                    <h2 className='fs-110px fw-700 text-white' style={{fontSize: '6.875em'}}>Your Team <br className='d-none d-lg-block'/> Your Terms</h2>
                                    <p className='fs-21px fw-400 text-white'>Build your ideal remote IT team at an affordable cost and execute your ideas. A team with skillful people can deliver top-notch IT solutions to clients. Stay lean! Move Fast.</p>
                            </div>
                            <div className='position-relative overflow-hidden br-16px h-100' style={{boxShadow: '1px 2px 37px rgb(0 0 0 / 30%)',maxHeight: '582px' }}>
                                  
                            </div>
                        </div>                        
                    </Col>                    
               </Row>
            </Container>
        </section> 

        <Container>
            <Row>                
                <Col>
                    <Alert variant="success">
                        This is a alert—check it out!
                    </Alert>
                </Col>
                <Col xs={6}>
                    <Alert variant="danger">
                        This is a alert—check it out!
                    </Alert>
                </Col>
                <Col>
                    <Alert variant="primary">
                        This is a alert—check it out!
                    </Alert>
                </Col>
                <Col sm={6}>
                    <Alert variant="danger">
                        col-sm-6
                    </Alert>
                </Col>
                <Col sm={6}>
                    <Alert variant="danger">
                        This is a alert—check it out!
                    </Alert>
                </Col>
            </Row>
            
        </Container>    
        </>
    </div>
  )
}
