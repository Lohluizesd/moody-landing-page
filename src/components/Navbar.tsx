import Logo from '../assets/logo.png';
import { Button } from './Button';

interface NavbarProps {
  logo?: string;
}
export function Navbar({ logo = Logo }: NavbarProps) {
  return (
    <nav className="bg-red-200 flex justify-between items-center p-4">
      <a href="#">
        <img src={logo} alt="Logo" className="h-[60px] w-[80px]" />
      </a>
      <div className="flex item-center gap-8">
        <ul className="flex gap-6 items-center">
          <li>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors ml-[20px]"
            >
              A Moody
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Lançamento
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Quem Somos
            </a>
          </li>
        </ul>
        <Button className="h-[40px] px-6 mt-2">Comprar</Button>
      </div>
    </nav>
  );
}
