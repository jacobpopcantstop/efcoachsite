import { notFound } from "next/navigation";
import CalEmbed from "@/components/CalEmbed";
import Link from "next/link";

const serviceConfig: Record<string, {
  title: string;
  description: string;
  calLink: string;
  duration: string;
  price: string;
}> = {
  consult: {
    title: "Free Consultation",
    description: "20-minute video call to discuss your child's needs and see if we're a good fit.",
    calLink: "jacobrozansky/free-consultation",
    duration: "20 min",
    price: "Free",
  },
  coaching: {
    title: "1:1 EF Coaching",
    description: "Personalized executive function coaching with \"Brain Play\" time.",
    calLink: "jacobrozansky/ef-coaching",
    duration: "60 min",
    price: "$200",
  },
  workshop: {
    title: "Saturday Brain Games",
    description: "Group workshop at Liberty Station with chess, cubing, and improv games.",
    calLink: "jacobrozansky/saturday-workshop",
    duration: "90 min",
    price: "$40",
  },
  iep: {
    title: "IEP Translation",
    description: "I attend your IEP meeting and help you understand and advocate for your child.",
    calLink: "jacobrozansky/iep-translation",
    duration: "60 min",
    price: "$250",
  },
};

export function generateStaticParams() {
  return Object.keys(serviceConfig).map((service) => ({ service }));
}

export default async function BookingPage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const config = serviceConfig[service];

  if (!config) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link href="/book" className="text-primary hover:underline mb-6 inline-block">
          ← Back to all services
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <h1 className="text-3xl mb-4">{config.title}</h1>
            <p className="text-gray-600 mb-6">{config.description}</p>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium">{config.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Price</span>
                <span className="font-medium">{config.price}</span>
              </div>
            </div>

            <div className="text-sm text-gray-500 space-y-2">
              <p>✓ Instant confirmation</p>
              <p>✓ Calendar invite sent automatically</p>
              <p>✓ Zoom link for virtual sessions</p>
              <p>✓ 48-hour free cancellation</p>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-4 min-h-[600px]">
            <CalEmbed calLink={config.calLink} />
          </div>
        </div>
      </div>
    </div>
  );
}
