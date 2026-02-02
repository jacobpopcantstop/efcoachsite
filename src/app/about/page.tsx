import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2">
              <h1 className="mb-4">Hi, I&apos;m Jacob Rozansky</h1>
              <p className="text-xl text-gray-600">
                San Diego&apos;s play-based executive function coach for neurodivergent kids.
                Special educator turned EF specialist. Chess player, cuber, improv nerd.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400">
                <span className="text-6xl mb-2">👤</span>
                <span className="text-sm">Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <h2 className="mb-8">My Story</h2>
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h3 className="text-primary mb-3">The Special Ed Years</h3>
              <p>
                I started my career in special education classrooms, where I saw firsthand how
                brilliant kids got labeled as &quot;lazy&quot; or &quot;unmotivated&quot; simply because their brains
                worked differently.
              </p>
            </div>
            <div>
              <h3 className="text-primary mb-3">The Discovery</h3>
              <p>
                Then I noticed something: the same kids who couldn&apos;t sit through homework would
                hyperfocus for hours on chess puzzles. Kids who &quot;couldn&apos;t follow instructions&quot;
                would memorize complex Rubik&apos;s cube algorithms.
              </p>
            </div>
            <div>
              <h3 className="text-primary mb-3">The Approach</h3>
              <p>
                I started building a methodology around what actually worked. Play-based,
                engagement-first, backed by neuroscience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-center mb-12">What I Bring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-4">Special Education</h3>
              <p className="text-gray-600">
                Years in SPED classrooms. I understand IEPs, 504s, and how to actually get
                accommodations that work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-semibold mb-4">Improv & Comedy</h3>
              <p className="text-gray-600">
                Trained in improv comedy. I use these skills to connect with kids and reduce
                anxiety around mistakes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">♟️</div>
              <h3 className="text-xl font-semibold mb-4">Chess & Cubing</h3>
              <p className="text-gray-600">
                Competitive chess player and speed cuber. I teach these as tools for building
                executive function.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-center mb-12">My Coaching Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "Meet Kids Where They Are", desc: "Not where we wish they were. Engagement first, skill-building follows." },
              { num: "02", title: "Play Is the Work", desc: "Fun isn't a reward—it's the mechanism. Brains learn better when they're enjoying themselves." },
              { num: "03", title: "Skills Transfer", desc: "The goal isn't to be good at chess. It's to take the thinking patterns and apply them everywhere." },
              { num: "04", title: "Parents Are Partners", desc: "You know your child best. I provide tools and strategies; you help implement them at home." },
            ].map((item) => (
              <div key={item.num} className="bg-gray-50 p-6 border-l-4 border-primary">
                <span className="text-2xl font-bold text-primary opacity-50">{item.num}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="mb-4">San Diego Based</h2>
          <p className="text-lg text-gray-600 mb-8">
            I&apos;m a San Diego local. I know SDUSD, the local private schools, and the
            neurodivergent community here.
          </p>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Areas Served</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {["La Jolla", "Del Mar", "Pacific Beach", "Point Loma", "Scripps Ranch", "Carmel Valley", "Encinitas", "Carlsbad"].map((area) => (
                <span key={area} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">{area}</span>
              ))}
            </div>
            <p className="text-sm text-gray-500">In-person and virtual sessions available throughout San Diego County.</p>
          </div>
        </div>
      </section>

      <CTA
        title="Let's Talk"
        description="Book a free 20-minute call. Tell me about your child, and I'll tell you if I can help."
        buttonText="Schedule Free Call"
        buttonHref="/book/consult"
      />
    </>
  );
}
