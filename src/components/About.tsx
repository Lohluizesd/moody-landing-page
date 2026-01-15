import { Button } from './Button';
import Quemsomos from '../assets/quemsomos.jpg';
import { Badge } from './Badge';

export function About() {
  return (
    <section>
      <div className="text-center mt-8 text-black">
        <Badge text="Quero meu moody!" />
        <h1 className=" font-bold text-5xl font-serif mt-6">
          Por trás da Moody
        </h1>
        <h2 className="text-3xl font-serif mt-4 mb-8">
          Muito mais do que moda: um estilo de vida
        </h2>
      </div>

      <div className="flex ">
        <img src={Quemsomos} className="w-150 h-80 mt-10 mr-7 ml-35" />
        <>
          <p className="w-150 text-justify ml-5 mt-40">
            A Moody nasceu por meio da vontade e potencialidade de ser quem
            somos refletidos no que vestimos. É moda além das expectativas e
            padrões! Onde a única regra é sermos fieis ao que acreditamos.
            <Button className="flex flex-col mt-5">Quero meu moody!</Button>
          </p>
        </>
      </div>
    </section>
  );
}
