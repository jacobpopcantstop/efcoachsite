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
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-center mb-12">Sound Familiar?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{problem.title}</h3>
              <p className="text-gray-600 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
