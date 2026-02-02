const problems = [
  {
    icon: "📚",
    title: '"They\'re so smart, but..."',
    description: "Your child aces tests when engaged but \"forgets\" to turn in homework. Their potential is obvious—so why isn't it showing up?",
  },
  {
    icon: "😰",
    title: "Tutoring feels like punishment",
    description: "You've tried tutors, but sitting through more \"school after school\" creates resistance, not results.",
  },
  {
    icon: "📄",
    title: "The IEP maze is overwhelming",
    description: "\"Preferential seating\" and \"extended time\" sound helpful—but you're not sure your child is getting what they actually need.",
  },
  {
    icon: "💡",
    title: "Executive Function is the missing piece",
    description: "It's not about being smarter. It's about planning, prioritizing, and following through—skills that can be trained.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container">
        <h2 className="text-center mb-4">Sound Familiar?</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          These are the challenges families face every day. You're not alone.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{problem.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">{problem.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
