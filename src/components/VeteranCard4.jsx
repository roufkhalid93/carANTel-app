import { Card, Badge, Container } from 'react-bootstrap';

export default function SedanCard1() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2Ff1438da7473864557a3662ebf035508f1dfdf981.jpg?alt=media&token=c3136a40-0e15-4499-a281-5f42ae890983"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#FAD5A5', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge>
                    </div>
                    <Card.Title className='mb-1'>Mercedes 70HP</Card.Title>
                    <Card.Text className='mb-1'>
                        1911 Mercedes 70HP Touring
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> 9.8 litre engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}
