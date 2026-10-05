export type Testimonial = {
  name: string;
  text: string;
};

export default function TestimonialCard({ name, text }: Testimonial) {
  return (
    <article className="min-w-[260px] max-w-[260px] snap-start rounded-2xl bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </article>
  );
}
