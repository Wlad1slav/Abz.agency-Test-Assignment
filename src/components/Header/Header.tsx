import Logo from "@/components/Header/Logo";
import Button from "@/components/Form/Button/Button";
import './Header.scss';

function Header() {
    return (
        <header>
            <div>
                <Logo />
                <nav className="buttons">
                    <Button type="button">Users</Button>
                    <Button type="button">Sign up</Button>
                </nav>
            </div>
        </header>
    );
}

export default Header;