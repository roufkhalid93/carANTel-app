import { useState, useEffect } from 'react';
import { Card, Container, Modal, Badge } from 'react-bootstrap';
import FordM1 from '../assets/classic&modernClassic/fordGT350R/FordM1.jpg';
import FordM2 from '../assets/classic&modernClassic/fordGT350R/FordM2.jpg';
import FordM3 from '../assets/classic&modernClassic/fordGT350R/FordM3.jpg';
import FordM4 from '../assets/classic&modernClassic/fordGT350R/FordM4.jpg';
import FordM5 from '../assets/classic&modernClassic/fordGT350R/FordM5.jpg';
import FordM6 from '../assets/classic&modernClassic/fordGT350R/FordM6.jpg';
import James from '../assets/classic&modernClassic/fordGT350R/James.jpg';
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

export default function ClassicCard4() {
    const [showModal, setShowModal] = useState(false);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const carData = [
        { property: "Model :", value: "1966 Shelby GT350R" },
        { property: "Manufacturer :", value: "Ford & Shelby American" },
        { property: "Engine :", value: "4.7 L (446 Nm)" },
        { property: "Transmission :", value: "4-speed manual" },
        { property: "Transaction :", value: ["Rental ", "/", " Sale"] },
        { property: "Price :", value: "RM 12,690 per-month / RM 1,237,500" },
    ];
    const images = [FordM1, FordM2, FordM3, FordM4, FordM5, FordM6];

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
    const [clickCount, setClickCount] = useState(0);

    useEffect(() => {
        if (!showModal) {
            setContactDetails(false);
        }
    }, [showModal]);

    const showContactDetails = () => {
        setClickCount((prevCount) => prevCount + 1)

        if(!contactDetails){
            setContactDetails(true);
        }
        if (clickCount + 1 === 2){
            window.location.href="https://mail.google.com/mail/?view=cm&fs=1&to=jawil@gmail.com"
            setClickCount(0)
        }
    };


    return (
        <Container className="custom-card">
            <Card style={{ width: '18rem' }} onClick={handleShow}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2F1965Shelby_Mustang_GT350R.jpg4_.jpg?alt=media&token=c15f0a0c-7859-4f41-95b6-2dafaf50ace1"
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
                        Ford Mustang GT350R
                    </Card.Title>
                    <Card.Text className='mb-1'>
                        1966 Shelby GT350R
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">1,237,500</strong> RM 12,690/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808', marginRight: '10px' }}></i>
                        4.7 litre engine
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
                        Ford Mustang Shelby GT350R
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
                                src={James}
                                alt="Car"
                                className="contact-image"
                            />
                            <button
                                className="contact-button"
                                onClick={showContactName}
                            >
                                {contactName ? 'James Wilson' : 'Contact Name'}
                            </button>
                            <button
                                className="contact-button"
                                onClick={showContactDetails}
                            >
                                {contactDetails ? (
                                    <>
                                        +6017 494 5578 <br />
                                        jawil@gmail.com
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
