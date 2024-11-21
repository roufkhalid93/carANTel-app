import { useState, useEffect } from 'react';
import { Card, Container, Modal, Badge } from 'react-bootstrap';
import JagE1 from '../assets/classic&modernClassic/jaguarEType/JagE1.jpg';
import JagE2 from '../assets/classic&modernClassic/jaguarEType/JagE2.jpg';
import JagE3 from '../assets/classic&modernClassic/jaguarEType/JagE3.jpg';
import JagE4 from '../assets/classic&modernClassic/jaguarEType/JagE4.jpg';
import JagE5 from '../assets/classic&modernClassic/jaguarEType/JagE5.jpg';
import JagE6 from '../assets/classic&modernClassic/jaguarEType/JagE6.jpg';
import JagE7 from '../assets/classic&modernClassic/jaguarEType/JagE7.jpg';
import House from '../assets/classic&modernClassic/jaguarEType/House.jpg';
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

export default function ClassicCard2() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: " 1989 Jaguar E-Type Series 1" },
        { property: "Manufacturer :", value: "Jaguar" },
        { property: "Engine/Motor :", value: "4.2 L (384 Nm)" },
        { property: "Transmission :", value: "4-speed manual" },
        { property: "Transaction :", value: ["Rental ", "/", " Sale"] },
        { property: "Price :", value: "RM 7,412 per-month / RM 730,800" },
    ];
    const images = [JagE1, JagE2, JagE3, JagE4, JagE5, JagE6, JagE7];

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
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2FJaguar-E-Type-Series-1-020-1.jpg?alt=media&token=7337f15d-056c-42c8-b04c-158f2ad00002"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#E5AA70', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge>
                    </div>
                    <Card.Title className='mb-1'>
                        Jaguar E-Type Roadster
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1989 Jaguar E-Type Series 1
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">730,800</strong> RM 7,412/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        4.2 litre engine
                    </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808', marginRight: '10px' }}></i>
                        4-speed manual
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Modal Component */}
            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton style={{ backgroundColor: '#EADDCA' }}>
                    <Modal.Title style={{ color: '#880808', fontWeight: 'bold' }}>
                        Jaguar E-Type Roadster
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
                                src={House}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                className="contact-button"
                                onClick={showContactName}
                                style={{
                                    width: '100%',
                                    marginBottom: '10px',
                                    padding: '5px',
                                    borderRadius: '8px',
                                }}
                            >
                                {contactName ? 'Gregory House' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6011 777 4422 <br />
                                        greho@gmail.com
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