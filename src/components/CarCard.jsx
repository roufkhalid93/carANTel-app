import { useState } from 'react';
import { Badge, Card } from 'react-bootstrap';
import CarModal from './CarModal';
import { formatRM } from '../data/cars';
import '../styles/card.css';

export default function CarCard({ car }) {
    const [showModal, setShowModal] = useState(false);
    const open = () => setShowModal(true);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            open();
        }
    };

    return (
        <>
            <Card
                className="car-card h-100"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${car.fullName}`}
                onClick={open}
                onKeyDown={handleKeyDown}
            >
                <div className="car-card__media">
                    <Card.Img
                        variant="top"
                        src={car.images[0]}
                        alt={car.fullName}
                        loading="lazy"
                        decoding="async"
                    />
                    {car.hot && (
                        <Badge bg="danger" className="car-card__badge">
                            <i className="bi bi-fire"></i> Hot Item
                        </Badge>
                    )}
                    <span className="car-card__deal">{car.rentalPrice ? 'Rent · Sale' : 'Sale'}</span>
                </div>

                <Card.Body className="d-flex flex-column">
                    <Card.Title className="car-card__title">{car.name}</Card.Title>
                    <div className="car-card__subtitle">{car.subtitle}</div>

                    <div className="car-card__price">{formatRM(car.price)}</div>
                    <div className="car-card__rental">
                        {car.rentalPrice && <>or rent from {formatRM(car.rentalPrice)}/month</>}
                    </div>

                    <div className="car-card__specs">
                        <span className="car-card__chip">
                            <i className="bi bi-speedometer"></i> {car.engine}
                        </span>
                        <span className="car-card__chip">
                            <i className="bi bi-joystick"></i> {car.transmission}
                        </span>
                    </div>

                    <div className="car-card__cta">
                        View details <i className="bi bi-arrow-right"></i>
                    </div>
                </Card.Body>
            </Card>

            <CarModal car={car} show={showModal} onHide={() => setShowModal(false)} />
        </>
    );
}
