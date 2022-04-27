import {Button, Nav} from 'react-bootstrap'
import Link from "next/link";

const Header = () => {
    const onClick= () => {
        alert("Tweet button Clicked")
    };
    return (
      <>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Link href="/home">
            <Nav.Link href="/home">Home</Nav.Link>
          </Link>

          <Link href="/home">
            <Nav.Link eventKey="link-1">Explore</Nav.Link>
          </Link>

          <Nav.Link eventKey="link-2">Notifications</Nav.Link>
          <Nav.Link eventKey="link-2">Messages</Nav.Link>
          <Nav.Link eventKey="link-2">Bookmarks</Nav.Link>
          <Nav.Link eventKey="link-2">Lists</Nav.Link>
          <Nav.Link eventKey="link-2">Profile</Nav.Link>
          <Nav.Link eventKey="link-2">More</Nav.Link>
          <Button
            variant="primary"
            type="submit"
            className="rounded-pill btn-lg"
            onClick={onClick}
          >
            Tweet
          </Button>
        </Nav>
      </>
    );
}

export default Header;