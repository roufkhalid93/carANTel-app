import { Card, Container } from 'react-bootstrap';

export default function SedanCard1() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
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
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge> */}
                    </div>
                    <Card.Title className='mb-1'>Rolls Royce Silver Dawn</Card.Title>
                    <Card.Text className='mb-1'>
                        1949 Rolls Royce Silver Dawn
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> 4.6 litre engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> 4-speed manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

