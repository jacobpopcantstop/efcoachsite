import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container text-center">
          <h1 className="mb-4">Services & Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From group workshops to intensive 1:1 coaching, find the right level of support.
          </p>
        </div>
      </div>

      <section id="workshops" className="py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-300">01</span>
              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold uppercase">Try It Out</span>
            </div>
            <h2 className="mb-2">Saturday Brain Games</h2>
            <p className="text-gray-600 mb-6">
              Group workshops featuring chess, speed cubing, and improv games.
              A low-commitment way to experience the methodology.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$40</span>
              <span className="text-gray-500">/session</span>
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• 90-minute group session (4-8 kids)</li>
              <li>• All three modalities: Chess, Cubing, Improv</li>
              <li>• Parent observation welcome</li>
              <li>• Liberty Station location</li>
            </ul>
            <Link href="/book/workshop" className="btn btn-outline">Book Workshop</Link>
          </div>
        </div>
      </section>

      <section id="coaching" className="py-16 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-300">02</span>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">Most Popular</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="mb-2">1:1 EF Coaching</h2>
                <p className="text-gray-600 mb-6">
                  Personalized executive function coaching tailored to your child&apos;s specific needs.
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$180-225</span>
                  <span className="text-gray-500">/hour</span>
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• 60-minute personalized session</li>
                  <li>• Custom EF skill-building exercises</li>
                  <li>• Brain Play with chess/cube/improv</li>
                  <li>• Parent check-in and homework tips</li>
                  <li>• In-person or virtual options</li>
                </ul>
                <Link href="/book/coaching" className="btn btn-primary">Book Coaching Session</Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-4">Packages</h4>
                <div className="space-y-4">
                  <div className="border border-primary rounded-lg p-4 relative">
                    <span className="absolute -top-2 left-4 bg-primary text-white text-xs px-2 py-0.5 rounded">Recommended</span>
                    <h5 className="font-semibold">8-Session Package</h5>
                    <p className="text-xl font-bold text-primary">$1,600</p>
                    <p className="text-sm text-gray-500">$200/session (save $200)</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-semibold">4-Session Package</h5>
                    <p className="text-xl font-bold">$840</p>
                    <p className="text-sm text-gray-500">$210/session (save $60)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="iep" className="py-16 bg-white">
        <div className="container max-w-5xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl font-bold text-gray-300">03</span>
              <span className="bg-gray-200 text-gray-600 px-3 py-1 rounded-full text-sm font-semibold uppercase">For Parents</span>
            </div>
            <h2 className="mb-2">IEP Translation</h2>
            <p className="text-gray-600 mb-6">
              I attend IEP meetings with you and translate district-speak into plain English.
            </p>
            <div className="mb-6">
              <span className="text-4xl font-bold">$250</span>
              <span className="text-gray-500">/meeting</span>
            </div>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>• Pre-meeting IEP review</li>
              <li>• Attend meeting with you (in-person or virtual)</li>
              <li>• Real-time translation of district language</li>
              <li>• Post-meeting summary and recommendations</li>
            </ul>
            <Link href="/book/iep" className="btn btn-outline">Book IEP Support</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-600 text-lg mb-8">
            Book a free 20-minute consultation. We&apos;ll talk about your child&apos;s needs
            and I&apos;ll recommend the right service.
          </p>
          <Link href="/book/consult" className="btn btn-primary text-lg px-8 py-4">
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
