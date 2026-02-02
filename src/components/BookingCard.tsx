import Link from "next/link";

interface BookingCardProps {
  icon: string;
  title: string;
  duration: string;
  price: string;
  description: string;
  href: string;
  featured?: boolean;
}

export default function BookingCard({
  icon,
  title,
  duration,
  price,
  description,
  href,
  featured = false,
}: BookingCardProps) {
  return (
    <Link
      href={href}
      className={`block p-6 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-1 ${
        featured
          ? "border-primary bg-white shadow-md"
          : "border-gray-200 bg-gray-50 hover:border-primary"
      }`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
        <span>⏱ {duration}</span>
        <span className="font-semibold text-gray-900">{price}</span>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <span className="text-primary font-medium text-sm">
        Book Now →
      </span>
    </Link>
  );
}
