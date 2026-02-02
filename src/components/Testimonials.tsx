const testimonials = [
  {
    quote: "For the first time, my son actually looks forward to his coaching sessions. Jacob gets him in a way traditional tutors never did.",
    author: "Parent, La Jolla",
    rating: 5,
  },
  {
    quote: "Jacob helped us understand our daughter's IEP and get accommodations that actually addressed her needs, not just paperwork.",
    author: "Parent, Del Mar",
    rating: 5,
  },
  {
    quote: "The chess sessions have taught my son to pause and think before acting—something we've been trying to teach him for years.",
    author: "Parent, Pacific Beach",
    rating: 5,
  },
  {
    quote: "My daughter went from struggling with homework to completing it independently. The improv techniques Jacob taught her changed everything.",
    author: "Parent, Encinitas",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Families Say</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real feedback from parents who've seen their children thrive
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 relative group hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-6xl text-primary dark:text-blue-400 opacity-20 absolute top-4 left-6 leading-none group-hover:scale-110 transition-transform">
                &ldquo;
              </div>
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                {testimonial.quote}
              </p>
              <div className="text-gray-500 dark:text-gray-400 text-sm font-medium">— {testimonial.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
