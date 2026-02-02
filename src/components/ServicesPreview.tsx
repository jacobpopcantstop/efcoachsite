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
    <section className="py-24 bg-white">
      <div className="container">
        <h2 className="text-center mb-12">How to Work Together</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg text-center border-2 transition-all ${
                service.featured
                  ? "bg-white border-primary scale-105 shadow-lg"
                  : "bg-gray-50 border-transparent"
              }`}
            >
              <div
                className={`inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 ${
                  service.featured
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {service.tier}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900">{service.price}</span>
                <span className="text-gray-500">{service.unit}</span>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link
                href={service.href}
                className={service.featured ? "btn btn-primary w-full" : "btn btn-outline w-full"}
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
