import { Card, Badge, Container } from 'react-bootstrap';

export default function SedanCard1() {

    return (
        <Container>
            <Card style={{ width: '18rem' }}>
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
                    <Card.Title className='mb-1'>Jaguar E-Type Roadster</Card.Title>
                    <Card.Text className='mb-1'>
                        1989 Jaguar E-Type Series 1
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> 4.2 litre engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> 4-speed manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

