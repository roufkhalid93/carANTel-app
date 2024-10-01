import { Card, Container } from 'react-bootstrap';

export default function SedanCard1() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2FXT0804_01_600px.jpg?alt=media&token=16323680-b706-42e4-9d57-71a482f9d7c6"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#F8DE7E', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge> */}
                    </div>
                    <Card.Title className='mb-1'>Volkswagen Bettle</Card.Title>
                    <Card.Text className='mb-1'>
                        1940 Volkswagen Bettle Kafer
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> 1.6 litre engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> 4-speed manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

