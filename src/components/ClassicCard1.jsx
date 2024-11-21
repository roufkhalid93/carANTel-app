import { useState, useEffect } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import PorshGT1 from '../assets/classic&modernClassic/porsheGT2/PorshGT1.jpg';
import PorshGT2 from '../assets/classic&modernClassic/porsheGT2/PorshGT2.jpg';
import PorshGT3 from '../assets/classic&modernClassic/porsheGT2/PorshGT3.jpg';
import Allison from '../assets/classic&modernClassic/porsheGT2/Allison.jpg';
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

export default function ClassicCard1() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: " 1993 Porsche 911 GT2 (993)" },
        { property: "Manufacturer :", value: "Porsche" },
        { property: "Engine/Motor :", value: "3.6 L (432 Nm)" },
        { property: "Transmission :", value: "6-speed manual" },
        { property: "Transaction :", value: ["Rental ", "/", " Sale"] },
        { property: "Price :", value: "RM 940 per-month / RM 85,800" },
    ];
    const images = [PorshGT1, PorshGT2, PorshGT3];

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
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2Fart-mg-porsche993gt1.jpg?alt=media&token=1126f0cf-536d-4fc5-b91e-7487790c4d53"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#E5AA70', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                    </div>
                    <Card.Title className='mb-1'>Porshe 911</Card.Title>
                    <Card.Text className='mb-1'>
                        1993 Porshe 911 GT2 (993)
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        3.6 litre engine
                    </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808', marginRight: '10px' }}></i>
                        6-speed manual
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Modal Component */}
            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton style={{ backgroundColor: '#EADDCA' }}>
                    <Modal.Title style={{ color: '#880808', fontWeight: 'bold' }}>
                        Porsche 911 GT2 (993)
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

                    <div className="modal-content-wrapper">
                        <table className="car-details-table">
                            <tbody>
                                {carData.map((item, index) => (
                                    <tr key={index}>
                                        <td className='cellStyle40'>{item.property}</td>
                                        <td className='cellStyle60'>{item.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="contact-details-wrapper">
                            <img
                                src={Allison}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                onClick={showContactName}
                                className="contact-button"
                            >
                                {contactName ? 'Allison Cameron' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6012 456 6633 <br />
                                        allca@gmail.com
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
