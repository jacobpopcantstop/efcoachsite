import Link from "next/link";

const services = [
  {
    tier: "Try It Out",
    title: "Saturday Brain Games",
    price: "$40",
    unit: "/session",
    description: "Group workshops featuring chess, cubing, and improv games. A low-commitment way to see if we're a good fit.",
    href: "/book/workshop",
    featured: false,
  },
  {
    tier: "Most Popular",
    title: "1:1 EF Coaching",
    price: "$180-225",
    unit: "/hour",
    description: "Personalized executive function coaching. Every session includes \"Brain Play\" time with chess, cube, or improv.",
    href: "/book/coaching",
    featured: true,
  },
  {
    tier: "For Parents",
    title: "IEP Translation",
    price: "$250",
    unit: "/meeting",
    description: "I attend IEP meetings with you and translate district-speak into plain English. Advocacy without the confusion.",
    href: "/book/iep",
    featured: false,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="mb-4">How to Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the option that fits your needs and budget
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl text-center border-2 transition-all duration-300 group ${
                service.featured
                  ? "bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-blue-950 border-primary dark:border-blue-400 scale-105 shadow-2xl hover:shadow-3xl"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400 hover:shadow-xl"
              }`}
            >
              <div
                className={`inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 ${
                  service.featured
                    ? "bg-primary dark:bg-blue-600 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                }`}
              >
                {service.tier}
              </div>
              <h3 className="text-2xl font-semibold mb-6 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">{service.price}</span>
                <span className="text-gray-500 dark:text-gray-400 text-lg">{service.unit}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed min-h-[4rem]">{service.description}</p>
              <Link
                href={service.href}
                className={`w-full transform hover:scale-105 transition-transform ${service.featured ? "btn btn-primary" : "btn btn-outline"}`}
              >
                {service.featured ? "Get Started" : "Learn More"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
