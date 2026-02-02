import BookingCard from "@/components/BookingCard";

const services = [
  {
    icon: "📞",
    title: "Free Consultation",
    duration: "20 min",
    price: "Free",
    description: "Let's talk about your child, your goals, and whether play-based coaching is the right fit.",
    href: "/book/consult",
    featured: false,
  },
  {
    icon: "🧠",
    title: "1:1 EF Coaching",
    duration: "60 min",
    price: "$200",
    description: "Personalized executive function coaching with chess, cubing, or improv \"Brain Play\" time.",
    href: "/book/coaching",
    featured: true,
  },
  {
    icon: "🎲",
    title: "Saturday Workshop",
    duration: "90 min",
    price: "$40",
    description: "Group brain games session at Liberty Station. Great way to try out the approach.",
    href: "/book/workshop",
    featured: false,
  },
  {
    icon: "📋",
    title: "IEP Translation",
    duration: "60 min",
    price: "$250",
    description: "I attend your IEP meeting and translate district-speak into plain English.",
    href: "/book/iep",
    featured: false,
  },
];

export default function BookPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="mb-4">Book a Session</h1>
          <p className="text-xl text-gray-600">
            Choose a service below to see available times and book instantly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <BookingCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>All sessions include automatic calendar invites and reminders.</p>
          <p>Virtual sessions include Zoom link. 48-hour cancellation policy.</p>
        </div>
      </div>
    </div>
  );
}
