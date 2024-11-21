import { useState, useEffect } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import RollsG1 from '../assets/veteran/rollsRoyceGhost/RollsG1.jpeg';
import RollsG2 from '../assets/veteran/rollsRoyceGhost/RollsG2.jpeg';
import RollsG3 from '../assets/veteran/rollsRoyceGhost/RollsG3.jpeg';
import Billy from '../assets/veteran/rollsRoyceGhost/Billy.jpg';
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

export default function VeteranCard1() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: "1913 Rolls Royce Silver Ghost" },
        { property: "Manufacturer :", value: "Rolls Royce" },
        { property: "Engine :", value: "V6" },
        { property: "Transmission :", value: "4-speed manual" },
        { property: "Transaction :", value: "Sale" },
        { property: "Price :", value: "RM 3,798,386" },
    ];
    const images = [RollsG2, RollsG3, RollsG1];

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
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2Fcover_rolls-royce-silver-ghost-the-most-expensive-car-in-the-world.jpeg?alt=media&token=4282fd36-1fd1-472d-885d-aaa8fe5353ef"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#FAD5A5', height: '210px' }}>
                    <Card.Title className='mb-1'>
                        Rolls Royce Ghost
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1913 Rolls Royce Silver Ghost
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">3,798,386</strong>
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        V6 engine
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
                        Rolls Royce Ghost
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
                                src={Billy}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                className="contact-button"
                                onClick={showContactName}
                            >
                                {contactName ? 'Billy Kimber' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6019 684 3201 <br />
                                        bilkim@gmail.com
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
