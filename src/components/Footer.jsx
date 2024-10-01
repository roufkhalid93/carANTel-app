import '../styles/footer.css'

export default function Footer() {

    return (
        <div className="footerContainer">
            <div className="socialIcons">
                <a href=""><i className="bi bi-facebook"></i></a>
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-twitter"></i></a>
                <a href=""><i className="bi bi-youtube"></i></a>
                <a href=""><i className="bi bi-tiktok"></i></a>
            </div>
            <div className="footerInfo">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/promotion">News</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                </ul>
            </div>
            <div className="footerBottom">
                <p>Copyright &copy;2024; Designed by <span className="designer">Abdur Rouf</span></p>
            </div>
        </div>
    )
}