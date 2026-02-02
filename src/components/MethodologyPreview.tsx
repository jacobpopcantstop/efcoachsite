import Link from "next/link";

const methods = [
  {
    icon: "🎭",
    title: 'The "Yes, And..." Framework',
    tool: "Improv Games",
    trains: "Cognitive Flexibility, Impulse Control, Active Listening",
    description: "Improv forces you to adapt in real-time. No scripts, no \"right answers\"—just learning to roll with whatever happens.",
    href: "/methodology#improv",
  },
  {
    icon: "♟",
    title: 'The "Checkmate" Protocol',
    tool: "Chess",
    trains: "Planning, Inhibition, Consequence Thinking",
    description: "Chess is a gym for impulse control. Every move teaches \"stop, think, then act\"—the exact skill ADHD brains need.",
    href: "/methodology#chess",
  },
  {
    icon: "🧩",
    title: 'The "Algorithm" Approach',
    tool: "Speed Cubing",
    trains: "Working Memory, Frustration Tolerance, Procedural Learning",
    description: "Solving a Rubik's cube proves that \"impossible\" is just a series of learnable steps. Essays, projects, life—same principle.",
    href: "/methodology#cubing",
  },
];

export default function MethodologyPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">
            The <span className="text-primary">Play-Based Neuroplasticity</span> Approach
          </h2>
          <p className="text-lg text-gray-600">
            I don&apos;t do &quot;more homework help.&quot; I train brains using activities
            that naturally build executive function—while being genuinely fun.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="text-4xl mb-4">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{method.title}</h3>
              <p className="text-sm text-gray-600 mb-1">
                <strong className="text-gray-800">Tool:</strong> {method.tool}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong className="text-gray-800">Trains:</strong> {method.trains}
              </p>
              <p className="text-gray-600 text-sm mb-4">{method.description}</p>
              <Link href={method.href} className="text-primary font-medium text-sm hover:underline">
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
