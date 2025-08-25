import Logo from '../assets/logo.png';
import { Button } from './Button';

interface NavbarProps {
  logo?: string;
}

export function Navbar({ logo = Logo }: NavbarProps) {
  return (
    <nav>
      <a href="#">
        <img src={logo} alt="Logo" />
      </a>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">What we sell</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
      </ul>
      <Button>Texto</Button>
    </nav>
  );
}
