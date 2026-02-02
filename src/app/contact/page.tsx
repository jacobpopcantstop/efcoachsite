import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Ready to start? Book a session. Have questions? Send a message.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link
            href="/book/consult"
            className="bg-white border-2 border-primary p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold mb-2">Book a Call</h3>
            <p className="text-sm text-gray-600 mb-4">Free 20-min consultation to discuss your child&apos;s needs.</p>
            <span className="text-primary font-medium">Schedule Now →</span>
          </Link>

          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-600 mb-4">For general inquiries or questions before booking.</p>
            <a href="mailto:jacob@efcoach.com" className="text-primary font-medium">jacob@efcoach.com</a>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-gray-600 mb-4">In-person sessions available throughout San Diego.</p>
            <span className="text-gray-700">San Diego, CA</span>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl mb-6">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2 text-gray-700">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary bg-white">
                <option>General Question</option>
                <option>Coaching Inquiry</option>
                <option>Workshop Information</option>
                <option>IEP Support</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2 text-gray-700">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Tell me about your child and what you're looking for..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            I typically respond within 24-48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
