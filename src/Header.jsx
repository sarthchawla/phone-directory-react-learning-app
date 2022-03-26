import './header.css';

const Header = (props) => {
    // Child component
    return (
        <div className="header">
            {props.headName}
        </div>
    )
}

export default Header;