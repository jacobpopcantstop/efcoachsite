const testimonials = [
  {
    quote: "For the first time, my son actually looks forward to his coaching sessions. Jacob gets him in a way traditional tutors never did.",
    author: "Parent, La Jolla",
  },
  {
    quote: "Jacob helped us understand our daughter's IEP and get accommodations that actually addressed her needs, not just paperwork.",
    author: "Parent, Del Mar",
  },
  {
    quote: "The chess sessions have taught my son to pause and think before acting—something we've been trying to teach him for years.",
    author: "Parent, Pacific Beach",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-center mb-12">What Families Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm relative">
              <div className="text-6xl text-primary opacity-20 absolute top-4 left-6 leading-none">
                &ldquo;
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="text-gray-500 text-sm">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
