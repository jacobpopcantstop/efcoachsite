import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-white mb-4">
              <span className="text-3xl text-primary-light">♕</span>
              <span>Jacob<span className="text-primary-light">EF</span></span>
            </Link>
            <p className="text-sm">
              Neuro-Performance Coaching in San Diego. Executive function training through play.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/methodology" className="hover:text-white">Methodology</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/about" className="hover:text-white">About Jacob</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/book/coaching" className="hover:text-white">1:1 EF Coaching</Link></li>
              <li><Link href="/book/workshop" className="hover:text-white">Brain Games Workshops</Link></li>
              <li><Link href="/book/iep" className="hover:text-white">IEP Translation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">San Diego Based</h4>
            <p className="text-sm mb-4">
              Serving La Jolla, Del Mar, Pacific Beach, and greater San Diego County.
            </p>
            <Link href="/book" className="btn btn-outline text-sm px-4 py-2">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jacob Rozansky | Neuro-Performance Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
