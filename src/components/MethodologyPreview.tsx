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
    <section className="py-24 bg-gray-50 dark:bg-gray-800/50 transition-colors">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="mb-4">
            The <span className="text-primary dark:text-blue-400 bg-gradient-to-r from-primary to-primary-light dark:from-blue-400 dark:to-blue-300 bg-clip-text">Play-Based Neuroplasticity</span> Approach
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I don&apos;t do &quot;more homework help.&quot; I train brains using activities
            that naturally build executive function—while being genuinely fun.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {methods.map((method, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">{method.title}</h3>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-800 dark:text-gray-200">Tool:</strong> {method.tool}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong className="text-gray-800 dark:text-gray-200">Trains:</strong> {method.trains}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{method.description}</p>
              <Link href={method.href} className="text-primary dark:text-blue-400 font-semibold text-sm hover:underline inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
