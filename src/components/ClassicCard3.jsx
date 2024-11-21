import { useState, useEffect } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import LamboM1 from '../assets/classic&modernClassic/lamborghiniMiura/LamboM1.jpg';
import LamboM2 from '../assets/classic&modernClassic/lamborghiniMiura/LamboM2.jpg';
import LamboM3 from '../assets/classic&modernClassic/lamborghiniMiura/LamboM3.jpg';
import LamboM4 from '../assets/classic&modernClassic/lamborghiniMiura/LamboM4.jpg';
import LamboM5 from '../assets/classic&modernClassic/lamborghiniMiura/LamboM5.jpg';
import LamboM6 from '../assets/classic&modernClassic/lamborghiniMiura/LamboM6.jpg';
import Lisa from '../assets/classic&modernClassic/lamborghiniMiura/Lisa.jpg';
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

export default function ClassicCard3() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: " 1969 Lamborghini Miura P400" },
        { property: "Manufacturer :", value: "Lamborghini" },
        { property: "Engine :", value: "3.9 L (400 Nm)" },
        { property: "Transmission :", value: "5-speed manual" },
        { property: "Transaction :", value: "Sale" },
        { property: "Price :", value: "RM 10,277,000" },
    ];
    const images = [LamboM1, LamboM2, LamboM3, LamboM4, LamboM5, LamboM6];

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
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2F20200529_lambo_0001.jpg?alt=media&token=fb5b95a6-4b98-41f4-8bfd-1de866e732dd"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#E5AA70', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                    </div>
                    <Card.Title className='mb-1'>
                        Lamborghini Miura
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1969 Miura P400
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">RM 10,277,000</strong>
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        3.9 litre engine
                    </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808', marginRight: '10px' }}></i>
                        5-speed manual
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Modal Component */}
            <Modal show={showModal} onHide={handleClose} dialogClassName="custom-modal">
                <Modal.Header closeButton style={{ backgroundColor: '#EADDCA' }}>
                    <Modal.Title style={{ color: '#880808', fontWeight: 'bold' }}>
                        Lamborghini Miura P400
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
                                src={Lisa}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                onClick={showContactName}
                                className="contact-button"
                            >
                                {contactName ? 'Lisa Cuddy' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6012 444 6633 <br />
                                        licud@gmail.com
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
