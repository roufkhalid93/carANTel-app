import { Col, Row } from 'react-bootstrap';
import CarCard from './CarCard';

export default function CarGrid({ title, cars }) {
    return (
        <section className="car-section">
            <h5 className="car-section__title">{title}</h5>
            <Row xs={1} sm={2} lg={3} xl={4} className="g-4">
                {cars.map((car) => (
                    <Col key={car.id}>
                        <CarCard car={car} />
                    </Col>
                ))}
            </Row>
        </section>
    );
}
