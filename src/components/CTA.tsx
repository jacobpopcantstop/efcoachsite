import Link from "next/link";

interface CTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "primary";
}

export default function CTA({
  title = "Ready to Try a Different Approach?",
  description = "Book a free 20-minute call. We'll talk about your child, your goals, and whether play-based coaching is the right fit.",
  buttonText = "Schedule Your Free Call",
  buttonHref = "/book/consult",
  variant = "dark",
}: CTAProps) {
  const bgClass = variant === "dark"
    ? "bg-gradient-to-br from-gray-900 to-gray-800"
    : "bg-gradient-to-br from-primary to-primary-dark";

  return (
    <section className={`py-24 ${bgClass} text-white text-center`}>
      <div className="container">
        <h2 className="text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto mb-8">{description}</p>
        <Link href={buttonHref} className="btn btn-primary text-lg px-8 py-4">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
