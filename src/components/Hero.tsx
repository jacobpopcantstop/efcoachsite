"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Parent Hero */}
      <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 parent-content transition-colors">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-block bg-primary dark:bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-shadow">
              San Diego&apos;s Play-Based EF Specialist
            </div>
            <h1 className="mb-6 animate-slide-up">
              Executive Function Coaching That{" "}
              <span className="text-primary dark:text-blue-400 bg-gradient-to-r from-primary to-primary-light dark:from-blue-400 dark:to-blue-300 bg-clip-text">Actually Engages</span> Your Child
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up-delay">
              I combine Special Education expertise with Improv, Chess, and Speed Cubing
              to build focus, flexibility, and self-regulation—through methods kids actually enjoy.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up-delay-2">
              <Link href="/book/consult" className="btn btn-primary transform hover:scale-105 transition-transform">
                Schedule a Free Consultation
              </Link>
              <Link href="/methodology" className="btn btn-secondary">
                See the Science
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition-colors">
                <span className="text-xl">🎓</span>
                <span>Special Education Background</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition-colors">
                <span className="text-xl">🎭</span>
                <span>Improv & Comedy Trained</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary dark:hover:text-blue-400 transition-colors">
                <span className="text-xl">♟</span>
                <span>Chess & Cubing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Hero */}
      <section className="min-h-screen items-center pt-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 student-content transition-colors">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-block bg-gradient-to-r from-student-primary to-student-secondary dark:from-purple-600 dark:to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-6 shadow-lg hover:shadow-xl transition-shadow">
              Level Up Your Brain
            </div>
            <h1 className="mb-6 animate-slide-up">
              Learn to{" "}
              <span className="bg-gradient-to-r from-student-primary to-student-secondary dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Hack Your Own Brain
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up-delay">
              Forget boring tutoring. We play chess, solve cubes, and do improv—while
              secretly training your brain to focus, plan, and crush it.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-slide-up-delay-2">
              <Link href="/book/consult" className="btn bg-gradient-to-r from-student-primary to-student-secondary dark:from-purple-600 dark:to-pink-600 text-white hover:opacity-90 transform hover:scale-105 transition-all">
                Let&apos;s Go
              </Link>
              <Link href="#cube-challenge" className="btn bg-student-primary/10 dark:bg-purple-500/20 text-student-primary dark:text-purple-400 hover:bg-student-primary/20 dark:hover:bg-purple-500/30">
                Free Cube Challenge
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 text-center">
              <div className="hover:scale-110 transition-transform">
                <span className="text-3xl block">♔</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Chess Puzzles</span>
              </div>
              <div className="hover:scale-110 transition-transform">
                <span className="text-3xl block">🎲</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Brain Games</span>
              </div>
              <div className="hover:scale-110 transition-transform">
                <span className="text-3xl block">🎤</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">Improv Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
