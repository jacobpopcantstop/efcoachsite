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
    ? "bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900"
    : "bg-gradient-to-br from-primary to-primary-dark dark:from-blue-900 dark:to-blue-950";

  return (
    <section className={`py-24 ${bgClass} text-white text-center relative overflow-hidden transition-colors`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10">
        <h2 className="text-white mb-6 animate-fade-in">{title}</h2>
        <p className="text-gray-300 dark:text-gray-400 text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up">{description}</p>
        <Link href={buttonHref} className="btn btn-primary text-lg px-10 py-5 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all animate-slide-up-delay">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
