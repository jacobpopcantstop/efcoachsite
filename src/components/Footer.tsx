import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 dark:text-gray-500 py-16 transition-colors">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-2xl text-white mb-4 hover:opacity-80 transition-opacity">
              <span className="text-3xl text-primary-light dark:text-blue-400">♕</span>
              <span>Jacob<span className="text-primary-light dark:text-blue-400">EF</span></span>
            </Link>
            <p className="text-sm leading-relaxed">
              Neuro-Performance Coaching in San Diego. Executive function training through play.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/methodology" className="hover:text-white dark:hover:text-blue-400 transition-colors">Methodology</Link></li>
              <li><Link href="/services" className="hover:text-white dark:hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white dark:hover:text-blue-400 transition-colors">About Jacob</Link></li>
              <li><Link href="/contact" className="hover:text-white dark:hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/book/coaching" className="hover:text-white dark:hover:text-blue-400 transition-colors">1:1 EF Coaching</Link></li>
              <li><Link href="/book/workshop" className="hover:text-white dark:hover:text-blue-400 transition-colors">Brain Games Workshops</Link></li>
              <li><Link href="/book/iep" className="hover:text-white dark:hover:text-blue-400 transition-colors">IEP Translation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">San Diego Based</h4>
            <p className="text-sm mb-4 leading-relaxed">
              Serving La Jolla, Del Mar, Pacific Beach, and greater San Diego County.
            </p>
            <Link href="/book" className="btn btn-outline text-sm px-5 py-2.5 hover:bg-white hover:text-gray-900 dark:hover:bg-blue-400 dark:hover:text-white dark:hover:border-blue-400 transition-all">
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-800 pt-8 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-600">&copy; {new Date().getFullYear()} Jacob Rozansky | Neuro-Performance Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
