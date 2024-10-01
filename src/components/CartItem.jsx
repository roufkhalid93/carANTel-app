import { Button, Card, CardText, Col, Row } from "react-bootstrap";

export default function CartItem({ item }) {
    return (
        <Card className="mb-2">
            <Card.Body className="card-body-grey">
                <Row className="align-items-stretch">
                    <Col xs={4} md={2} className="d-flex align-items-center">
                        <Card.Img
                            className="card-img-custom"
                            variant="top"
                            src={`https://images2.alphacoders.com/891/891574.jpg`}
                            alt={item.name}
                        />
                    </Col>
                    <Col xs={8} md={10}>
                        <Row>
                            <Col xs={2}>
                                <Card.Text className="card-text-custom"><strong>Model:</strong></Card.Text>
                            </Col>
                            <Col xs={10}>
                                <Card.Text className="card-text-custom">{item.model}</Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <CardText className="card-text-custom"><strong>Status:</strong></CardText>
                                <CardText className="card-text-custom"><strong>Transmission:</strong></CardText>
                            </Col>
                            <Col>
                                <CardText className="card-text-custom">{item.sell_or_rent}</CardText>
                                <CardText className="card-text-custom">{item.transmission}</CardText>
                            </Col>
                            <Col>
                                <CardText className="card-text-custom"><strong>Brand:</strong></CardText>
                                <CardText className="card-text-custom"><strong>Year:</strong></CardText>
                            </Col>
                            <Col>
                                <CardText className="card-text-custom">{item.brand}</CardText>
                                <CardText className="card-text-custom">{item.year}</CardText>
                            </Col>
                            <Col className="card-column-grey">
                                <CardText className="card-text-custom"><strong>Name:</strong></CardText>
                                <CardText className="card-text-custom"><strong>Phone no:</strong></CardText>
                            </Col>
                            <Col className="card-column-grey">
                                <CardText>{item.name}</CardText>
                                <CardText>{item.phone_number}</CardText>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-end">
                                <Button variant="secondary" className="me-.5"><i className="bi bi-pencil-square"></i></Button>
                                <Button variant="danger"><i className="bi bi-trash-fill"></i></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}