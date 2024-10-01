import { Card, Container } from 'react-bootstrap';

export default function SedanCard1() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img
                    variant="top"
                    src="https://firebasestorage.googleapis.com/v0/b/capstone-project-fac0a.appspot.com/o/carImages%2F20200529_lambo_0001.jpg?alt=media&token=fb5b95a6-4b98-41f4-8bfd-1de866e732dd"
                    style={{
                        height: '180px',
                        width: '100%',
                        objectFit: 'cover'
                    }}
                />
                <Card.Body style={{ backgroundColor: '#E5AA70', height: '210px' }}>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* <Badge bg="danger"> <i className="bi bi-fire"></i> Hot Item</Badge> */}
                    </div>
                    <Card.Title className='mb-1'>Lamborghini Miura</Card.Title>
                    <Card.Text className='mb-1'>
                        1969 Miura P400
                    </Card.Text>
                    <Card.Text>
                        RM <strong className="fs-5">85,800</strong> RM 940/month
                    </Card.Text>
                    <Card.Text className='mb-1'><i className="bi bi-speedometer" style={{ color: '#880808' }}></i> 3.9 litre engine </Card.Text>
                    <Card.Text><i className="bi bi-joystick" style={{ color: '#880808' }}></i> 5-speed manual</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

