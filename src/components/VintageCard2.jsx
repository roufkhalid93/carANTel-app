import { useState, useEffect } from 'react';
import { Card, Container, Modal } from 'react-bootstrap';
import RollsS1 from '../assets/vintage&postVintage/rollsRoyceSilverDawn/RollsS1.jpg';
import RollsS2 from '../assets/vintage&postVintage/rollsRoyceSilverDawn/RollsS2.jpg';
import RollsS3 from '../assets/vintage&postVintage/rollsRoyceSilverDawn/RollsS3.jpg';
import RollsS4 from '../assets/vintage&postVintage/rollsRoyceSilverDawn/RollsS4.jpg';
import RollsS5 from '../assets/vintage&postVintage/rollsRoyceSilverDawn/RollsS5.jpg';
import Dwight from '../assets/vintage&postVintage/rollsRoyceSilverDawn/Dwight.jpg';
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


export default function VintageCard2() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: "1949 Rolls Royce Silver Dawn" },
        { property: "Manufacturer :", value: "Rolls-Royce" },
        { property: "Engine :", value: "4.6 L" },
        { property: "Transmission :", value: "4-speed manual" },
        { property: "Transaction :", value: " Sale" },
        { property: "Price :", value: "RM 387,687" },
    ];
    const images = [RollsS1, RollsS2, RollsS3, RollsS4, RollsS5];

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
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2F15524_main_l.jpg?alt=media&token=42cc5065-2e3f-4e6e-b8ae-6988fc5cc3df"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#F8DE7E', height: '210px' }}>
                    <Card.Title className='mb-1'>
                        Rolls Royce Silver Dawn
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1949 Rolls Royce Silver Dawn
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">387,687</strong>
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        4.6 litre engine
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
                        Rolls Royce Silver Dawn
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
                                src={Dwight}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                className="contact-button"
                                onClick={showContactName}
                            >
                                {contactName ? 'Dwight Schrute' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6018 777 6300 <br />
                                        dwischru@gmail.com
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

