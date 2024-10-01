import { Card, Container } from 'react-bootstrap';

export default function SedanCard1() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2Fcover_rolls-royce-silver-ghost-the-most-expensive-car-in-the-world.jpeg?alt=media&token=4282fd36-1fd1-472d-885d-aaa8fe5353ef"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#FAD5A5', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge> */}
                    </div>
                    <Card.Title className='mb-1'>Rolls Royce Ghost</Card.Title>
                    <Card.Text className='mb-1'>
                        1913 Rolls Royce Silver Ghost
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> V6 engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> 4-speed manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}
