import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div className="header-background-div">
            <section className="header-content">
                <Link to="/">UIUC GenEd Finder</Link>
                <Link to="find-classes">Find Classes</Link>
            </section>
        </div>
    )
}

export default Header


