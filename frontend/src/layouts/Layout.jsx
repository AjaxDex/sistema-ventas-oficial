import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Container className="flex-grow-1 my-4">
        {children}
      </Container>
      <Footer />
    </div>
  );
}

export default Layout;