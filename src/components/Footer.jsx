import '../styles/footer.css'

export default function Footer() {

    return (
        <div className="footerContainer">
            <div className="socialIcons">
                <a href="" style={{ backgroundColor: '#ECFFDC' }}><i className="bi bi-facebook"></i></a>
                <a href="" style={{ backgroundColor: '#ECFFDC' }}><i className="bi bi-instagram"></i></a>
                <a href="" style={{ backgroundColor: '#ECFFDC' }}><i className="bi bi-twitter"></i></a>
                <a href="" style={{ backgroundColor: '#ECFFDC' }}><i className="bi bi-youtube"></i></a>
                <a href="" style={{ backgroundColor: '#ECFFDC' }}><i className="bi bi-tiktok"></i></a>
            </div>
            <div className="footerInfo">
                <ul>
                    <li><a href="/" style={{ color: '#FFFFF0' }}><strong>Home</strong></a></li>
                    <li><a href="/promotion" style={{ color: '#FFFFF0' }}><strong>News</strong></a></li>
                    <li><a href="/aboutus" style={{ color: '#FFFFF0' }}><strong>About Us</strong></a></li>
                </ul>
            </div>
            <div className="footerBottom">
                <p style={{ color: '#FFDEAD' }}>Copyright &copy;2024; Designed by <span className="designer">Abdur Rouf</span></p>
            </div>
        </div>
    )
}