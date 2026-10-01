import { Modal } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { formatRM } from '../data/cars';
import '../styles/card.css';

export default function CarModal({ car, show, onHide }) {
    const { contact, rentalPrice, price } = car;

    const details = [
        { label: 'Model', value: car.subtitle },
        { label: 'Manufacturer', value: car.manufacturer },
        { label: 'Engine', value: car.torque ? `${car.engine} (${car.torque})` : car.engine },
        { label: 'Transmission', value: car.transmission },
        { label: 'Transaction', value: rentalPrice ? 'Rental / Sale' : 'Sale' },
        {
            label: 'Price',
            value: rentalPrice
                ? `${formatRM(rentalPrice)} per month / ${formatRM(price)}`
                : formatRM(price),
        },
    ];

    const gmailDraftUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}`;

    return (
        <Modal
            show={show}
            onHide={onHide}
            dialogClassName="car-modal"
            fullscreen="sm-down"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title>{car.fullName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="car-modal__layout">
                    <div className="car-modal__gallery">
                        <Swiper
                            className="car-gallery"
                            slidesPerView={1}
                            navigation={{ clickable: true }}
                            pagination={{ clickable: true }}
                            modules={[Autoplay, Navigation, Pagination]}
                            autoplay={{ delay: 6000, disableOnInteraction: false }}
                            speed={1000}
                        >
                            {car.images.map((image, index) => (
                                <SwiperSlide key={image} className="car-gallery__slide">
                                    <img
                                        src={image}
                                        alt={`${car.fullName} photo ${index + 1}`}
                                        className="car-gallery__img"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <dl className="car-modal__details">
                        {details.map((item) => (
                            <div key={item.label}>
                                <dt>{item.label}</dt>
                                <dd>{item.value}</dd>
                            </div>
                        ))}
                    </dl>

                    <div className="car-modal__contact">
                        <div className="car-modal__contact-actions">
                            <div className="contact-button contact-button--static contact-button--name">
                                <i className="bi bi-person"></i> {contact.name}
                            </div>
                            <div className="contact-button contact-button--static">
                                <i className="bi bi-telephone"></i> {contact.phone}
                            </div>
                            <a
                                className="contact-button contact-button--link"
                                href={gmailDraftUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`Email ${contact.name}`}
                            >
                                <i className="bi bi-envelope"></i> {contact.email}
                            </a>
                        </div>
                        <img src={contact.photo} alt={contact.name} className="car-modal__contact-photo" />
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
