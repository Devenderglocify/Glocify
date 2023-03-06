import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
    const navList = [
           {
            'title': 'Resources',            
            },
           {
            'title': 'Company'
            },           
    ];
    const lists = [
        {
            id: 1, linkTitle: 'Web Development'
        },
        {
            id: 2, linkTitle: 'Mobile Apps'
        },
        {
            id: 3, linkTitle: 'Digital Marketing'
        }        
    ]
  return (
    <>
         <section className='glocify-section position-relative overflow-hidden py-5' style={{backgroundColor: '#202325'}}>           
            <Container>
                <Row>
                    <Col lg={9}>
                        <Row>
                            <Col lg={4}>
                                <div className=''>
                                    <img className='img-fluid px-5 mx-auto' src={window.location.origin + '/././images/logo_footer.png'} />
                                    <p className='fs-14px text-white d-block my-4 text-start'>
                                        <a to='/' className='fs-18px fw-600 d-flex align-items-center border-bottom mb-2 pb-2 text-decoration-none' style={{color: '#ffd919'}}>
                                            Our Location
                                        </a>                                        
                                        2nd Floor, Plot #10, Rajiv Gandhi IT Park, Chandigarh 160101
                                    </p>
                                </div>
                            </Col>
                            {navList.map((list)=>{
                            return <Col lg={4}>
                                <div className=''>
                                    <h5 className='text-white '>{list.title}</h5>
                                    <ul>
                                        {lists.map((footerList)=>{
                                            return <li><a to='' className='text-white'>{footerList.linkTitle}</a></li>
                                        })}
                                    </ul>
                                </div>
                            </Col>

                            })}
                        </Row>                       
                    </Col>
                    <Col lg={3}>
                       
                    </Col>
                </Row>
            </Container> 
        </section>
    </>
  )
}

export default Footer