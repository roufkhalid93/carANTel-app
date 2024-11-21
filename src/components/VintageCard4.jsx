import { useState, useEffect } from 'react';
import { Card, Container, Modal, Badge } from 'react-bootstrap';
import CadV1 from '../assets/vintage&postVintage/cadillacV16/CadV1.jpg';
import CadV2 from '../assets/vintage&postVintage/cadillacV16/CadV2.jpg';
import CadV3 from '../assets/vintage&postVintage/cadillacV16/CadV3.jpg';
import CadV4 from '../assets/vintage&postVintage/cadillacV16/CadV4.jpg';
import CadV5 from '../assets/vintage&postVintage/cadillacV16/CadV5.jpg';
import CadV6 from '../assets/vintage&postVintage/cadillacV16/CadV6.jpg';
import Pam from '../assets/vintage&postVintage/cadillacV16/Pam.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
    Autoplay,
    Navigation,
    Pagination,
} from "swiper/modules";
import '../styles/card.css';

export default function VintageCard4() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: "1939 Cadillac V-16" },
        { property: "Manufacturer :", value: "Cadillac" },
        { property: "Engine :", value: "7.4 L" },
        { property: "Transmission :", value: "3-speed manual" },
        { property: "Transaction :", value: ["Rental ", "/", " Sale"] },
        { property: "Price :", value: "RM 8,752 per-month / RM 1,032,281" },
    ];
    const images = [CadV1, CadV2, CadV3, CadV4, CadV5, CadV6];

    const [contactName, setContactName] = useState(false);

    useEffect(() => {
        if (!showModal) {
            setContactName(false);
        }
    }, [showModal]);

    const showContactName = () => {
        setContactName(true);
    };

    const [contactDetails, setContactDetails] = useState(false);

    useEffect(() => {
        if (!showModal) {
            setContactDetails(false);
        }
    }, [showModal]);

    const showContactDetails = () => {
        setContactDetails(true);
    };



    return (
        <Container className="custom-card">
            <Card style={{ width: '18rem' }} onClick={handleShow}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2F5790.jpg?alt=media&token=e338cbe1-9293-4197-9b4a-3620d3987456"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#F8DE7E', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge>
                    </div>
                    <Card.Title className='mb-1'>
                        Cadillac V-16
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1939 Cadillac V-16
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">1,032,281</strong> RM 8,752/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        7.4 litre engine
                    </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808', marginRight: '10px' }}></i>
                        3-speed manual
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Modal Component */}
            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton style={{ backgroundColor: '#EADDCA' }}>
                    <Modal.Title style={{ color: '#880808', fontWeight: 'bold' }}>
                        Cadillac V-16
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#EADDCA' }}>
                    <Swiper
                        slidesPerView={1}
                        navigation={{ clickable: true }}
                        pagination={{ clickable: true }}
                        effect="fade"
                        modules={[Autoplay, Navigation, Pagination]}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        speed={1000}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={index} className="swiper-slide-custom">
                                <img
                                    src={image}
                                    alt={`Slide ${index}`}
                                    className="swiper-slide-img"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div
                        className="modal-content-wrapper"
                    >
                        <table
                            className="car-details-table"
                        >
                            <tbody>
                                {carData.map((item, index) => (
                                    <tr key={index}>
                                        <td className='cellStyle40'>{item.property}</td>
                                        <td className='cellStyle60'>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div
                            className="contact-details-wrapper"
                        >
                            <img
                                src={Pam}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                className="contact-button"
                                onClick={showContactName}
                            >
                                {contactName ? 'Pam Beesly' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6019 644 6301 <br />
                                        pambees@gmail.com
                                    </>
                                ) : (
                                    'Contact Details'
                                )}
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

