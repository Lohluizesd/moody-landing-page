import { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from './TestimonialCard';

export function Depoiments() {
  const testimonials: Testimonial[] = [
    {
      name: 'Person 1',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
    },
    {
      name: 'Person 2',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'Person 3',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'Person 4',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'Person 5',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'Person 6',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
    {
      name: 'Person 7',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -280, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 280, behavior: 'smooth' });
  };

  return (
    <section className="mx-auto max-w-5xl">
      <h2 className="text-2xl font-semibold">Depoimentos</h2>
      {/*Mudar aqui depois, colocar um titulo maior*/}

      <div className="mt-4 flex justify-end gap-2">
        <button
          onClick={scrollLeft}
          className="h-10 w-10 rounded-full border bg-white shadow hover:bg-gray-100"
        >
          ←
        </button>

        <button
          onClick={scrollRight}
          className="h-10 w-10 rounded-full border bg-white shadow hover:bg-gray-100"
        >
          →
        </button>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-16"
        style={{ scrollbarWidth: 'none' }}
      >
        <style>{`
            div::-webkit-scrollbar { display: none; }
          `}</style>

        {testimonials.map((item, index) => (
          <TestimonialCard key={index} name={item.name} text={item.text} />
        ))}
      </div>
    </section>
  );
}
