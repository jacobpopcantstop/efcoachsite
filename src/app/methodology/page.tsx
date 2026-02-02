import CTA from "@/components/CTA";

export default function MethodologyPage() {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container text-center">
          <h1 className="mb-4">The Science Behind the Play</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every game and activity is backed by research on executive function and neuroplasticity.
            Fun isn&apos;t fluff—it&apos;s the mechanism.
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-8">What is Executive Function?</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Executive function is your brain&apos;s CEO—the set of mental skills that help you
            plan, focus, remember instructions, and juggle multiple tasks.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "Inhibition", desc: "Stopping before acting impulsively" },
              { icon: "🔄", title: "Flexibility", desc: "Adapting when plans change" },
              { icon: "📝", title: "Working Memory", desc: "Holding information while using it" },
              { icon: "📅", title: "Planning", desc: "Breaking goals into steps" },
              { icon: "⏰", title: "Time Management", desc: "Estimating and allocating time" },
              { icon: "💭", title: "Metacognition", desc: "Thinking about your thinking" },
            ].map((skill, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="improv" className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Method 1</span>
          <h2 className="mb-2">The &quot;Yes, And...&quot; Framework</h2>
          <h3 className="text-xl text-gray-500 font-normal mb-8">Improv Games for Cognitive Flexibility</h3>
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary mb-8">
            <h4 className="text-primary font-semibold mb-2">The Science</h4>
            <p className="text-gray-700">
              Improv requires rapid cognitive shifting and inhibition of planned responses.
              Research shows it improves divergent thinking and reduces anxiety around mistakes.
            </p>
          </div>
          <h4 className="font-semibold mb-4">What It Trains:</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Cognitive Flexibility:</strong> Adapting to unexpected inputs</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Impulse Control:</strong> Listening before responding</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Active Listening:</strong> Building on what others say</span></li>
          </ul>
        </div>
      </section>

      <section id="chess" className="py-16 bg-white">
        <div className="container max-w-4xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Method 2</span>
          <h2 className="mb-2">The &quot;Checkmate&quot; Protocol</h2>
          <h3 className="text-xl text-gray-500 font-normal mb-8">Chess for Planning and Inhibition</h3>
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-8">
            <h4 className="text-primary font-semibold mb-2">The Science</h4>
            <p className="text-gray-700">
              Chess activates the prefrontal cortex—the same area responsible for executive function.
              Studies show regular chess practice improves planning, working memory, and impulse control.
            </p>
          </div>
          <h4 className="font-semibold mb-4">What It Trains:</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Planning:</strong> Thinking multiple moves ahead</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Inhibition:</strong> Resisting impulsive moves</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Consequence Thinking:</strong> Evaluating outcomes before acting</span></li>
          </ul>
        </div>
      </section>

      <section id="cubing" className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm mb-4">Method 3</span>
          <h2 className="mb-2">The &quot;Algorithm&quot; Approach</h2>
          <h3 className="text-xl text-gray-500 font-normal mb-8">Speed Cubing for Working Memory</h3>
          <div className="bg-white p-6 rounded-lg border-l-4 border-primary mb-8">
            <h4 className="text-primary font-semibold mb-2">The Science</h4>
            <p className="text-gray-700">
              Solving a Rubik&apos;s cube requires memorizing algorithms and applying them in sequence.
              This directly exercises working memory and teaches frustration tolerance.
            </p>
          </div>
          <h4 className="font-semibold mb-4">What It Trains:</h4>
          <ul className="space-y-2 mb-8">
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Working Memory:</strong> Holding algorithms while executing</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Frustration Tolerance:</strong> Persisting through difficulty</span></li>
            <li className="flex gap-3"><span className="text-primary">→</span><span><strong>Procedural Learning:</strong> Breaking impossible into learnable steps</span></li>
          </ul>
        </div>
      </section>

      <CTA
        title="Ready to See It in Action?"
        description="Book a free consultation and let's talk about which approach fits your child best."
        buttonText="Schedule Free Consultation"
        buttonHref="/book/consult"
      />
    </>
  );
}
