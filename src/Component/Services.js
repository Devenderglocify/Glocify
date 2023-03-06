import React from 'react';
import Col from 'react-bootstrap/Col';

const Services = () => {
    let imgStyle={
        opacity: '.4',
        transitionDuration : '1s',
        mixBlendMode: 'multiply',
    }
    const services = [
        {
            "id": "1",
            "title": "Web Development",
            "description": "Hire best web developers for your next big thing with Glocify.",
            "image": "././images/serv1.jpg",
            "backgroundImage": 'linear-gradient(-90deg,#b0296c, #2b2b5d)'
        },
        {
            "id": "2",
            "title": "Mobile Apps",
            "description": "Hire best mobile apps developers for your next big thing with Glocify.",
            "image": "././images/ser2.jpg",
            "backgroundImage": 'linear-gradient(-90deg,#b0296c, #2b2b5d)'
        },
        {
            "id": "3",
            "title": "Digital Marketing ",
            "description": "Hire best digital marketing experts for your next big thing with Glocify.",
            "image": "././images/ser3.jpg",
            "backgroundImage": 'linear-gradient(-90deg,#b0296c, #2b2b5d)'
        },
        {
            "id": "4",
            "title": "Hire A Glocian ",
            "description": "",
            "image": "././images/ser4.jpg",
            "backgroundImage": 'linear-gradient(-90deg,#b0296c, #2b2b5d)'
        },
    ];
    const colors = ['linear-gradient(-90deg,#b0296c, #2b2b5d)', 'linear-gradient(90deg,#fe8f5f, #b03031)', 'linear-gradient(45deg,#29b1bf, #21285e)', 'linear-gradient(45deg, #2e6f73, #77a0a4)'];
  return (
    <>
    {services.map((service, i)=> {
            return <Col lg={3} className='px-0' key='id'>
                <div className="card h-100 border-0 position-relative">                                    
                    <div className="card-body p-0 position-relative">
                        <a href='' className='position-absolute top-0 w-100 h-100 text-decoration-none' style={{left: '0px',}}>
                            <div className='position-relative' style={{zIndex: '1'}}>
                                <h5 className="card-title fs-42px text-white ps-5 py-4 border-bottom fw-700 lh-42px position-relative" style={{letterSpacing: '-1px',minHeight: '133px', paddingRight: '120px'}}>{service.title}</h5>
                                <p className="card-text fs-20px text-white px-5 mt-4">{service.description}</p> 
                            </div>
                        </a>
                        <div className='' style={{ backgroundImage: colors[i] }}>
                            <img className='img-fluid' src={service.image} alt='' style={imgStyle}/>
                        </div>
                    </div>
                </div>
            </Col>
        })} 
    </>
  )
}

export default Services