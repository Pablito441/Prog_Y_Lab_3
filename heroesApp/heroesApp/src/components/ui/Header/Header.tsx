import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { setLogout } from "../../../redux/slices/auth";
import { useAppDispatch } from "../../../hooks/redux";

export const Header = () => {
    const dispatch = useAppDispatch();
    const handleLogout = ()=>{
        dispatch(setLogout())
    };
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand >
                    <Nav.Item>
                        <Link to={'/'} className="nav-link">Inicio</Link>
                    </Nav.Item>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Item>
                        <Link to={'/search'} className="nav-link">Buscar Heore</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/dcHereos'} className="nav-link">DC Heroes</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to={'/MarvelHeroes'} className="nav-link">Marvel Heroes</Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end gap-2">
                    <Navbar.Text>Ingresado como : Admin</Navbar.Text>
                    <Nav.Item>
                        <div className="d-flex justify-content-center align-items-center" onClick={handleLogout}>
                        <span style={{color: "#ffff", cursor : "pointer"}} className="material-symbols-outlined">logout</span>
                        </div>
                    </Nav.Item>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
