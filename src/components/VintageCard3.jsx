import { useState, useEffect } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import VolksB1 from '../assets/vintage&postVintage/volkswagenBeetle/VolksB1.jpg';
import VolksB2 from '../assets/vintage&postVintage/volkswagenBeetle/VolksB2.jpg';
import VolksB3 from '../assets/vintage&postVintage/volkswagenBeetle/VolksB3.jpg';
import VolksB4 from '../assets/vintage&postVintage/volkswagenBeetle/VolksB4.jpg';
import VolksB5 from '../assets/vintage&postVintage/volkswagenBeetle/VolksB5.jpg';
import Micheal from '../assets/vintage&postVintage/volkswagenBeetle/Micheal.jpg';
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

export default function VintageCard3() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: "1940 Volkswagen Kafer" },
        { property: "Manufacturer :", value: "Volkswagen" },
        { property: "Engine :", value: "1.6 L" },
        { property: "Transmission :", value: "4-speed manual" },
        { property: "Transaction :", value: ["Rental ", "/", " Sale"] },
        { property: "Price :", value: "RM 12,690 per-month / RM 1,237,500" },
    ];
    const images = [VolksB1, VolksB2, VolksB3, VolksB4, VolksB5];

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
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2FXT0804_01_600px.jpg?alt=media&token=16323680-b706-42e4-9d57-71a482f9d7c6"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#F8DE7E', height: '210px' }}>
                    <Card.Title className='mb-1'>
                        Volkswagen Bettle
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1940 Volkswagen Bettle Kafer
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">1,237,500</strong> RM 12,690/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        1.6 litre engine
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
                        Volkswagen Beetle The Bug
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
                                src={Micheal}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                className="contact-button"
                                onClick={showContactName}
                            >
                                {contactName ? 'Micheal Scott' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6018 777 6300 <br />
                                        michsco@gmail.com
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

