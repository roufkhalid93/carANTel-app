import { Card, Badge, Container } from 'react-bootstrap';

export default function SedanCard1() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2F5790.jpg?alt=media&token=e338cbe1-9293-4197-9b4a-3620d3987456"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#F8DE7E', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge>
                    </div>
                    <Card.Title className='mb-1'>Cadillac V-16</Card.Title>
                    <Card.Text className='mb-1'>
                        1939 Cadillac V-16
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> 7.4 litre engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> 3-speed manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

