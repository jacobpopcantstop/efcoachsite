"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* Parent Hero */}
      <section className="min-h-screen flex items-center pt-24 bg-gradient-to-br from-gray-50 to-white parent-content">
        <div className="container">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              San Diego&apos;s Play-Based EF Specialist
            </div>
            <h1 className="mb-6">
              Executive Function Coaching That{" "}
              <span className="text-primary">Actually Engages</span> Your Child
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I combine Special Education expertise with Improv, Chess, and Speed Cubing
              to build focus, flexibility, and self-regulation—through methods kids actually enjoy.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/book/consult" className="btn btn-primary">
                Schedule a Free Consultation
              </Link>
              <Link href="/methodology" className="btn btn-secondary">
                See the Science
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <span>Special Education Background</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🎭</span>
                <span>Improv & Comedy Trained</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">♟</span>
                <span>Chess & Cubing Specialist</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Hero */}
      <section className="min-h-screen items-center pt-24 bg-gradient-to-br from-gray-50 to-white student-content">
        <div className="container">
          <div className="max-w-2xl">
            <div className="inline-block bg-gradient-to-r from-student-primary to-student-secondary text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Level Up Your Brain
            </div>
            <h1 className="mb-6">
              Learn to{" "}
              <span className="bg-gradient-to-r from-student-primary to-student-secondary bg-clip-text text-transparent">
                Hack Your Own Brain
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Forget boring tutoring. We play chess, solve cubes, and do improv—while
              secretly training your brain to focus, plan, and crush it.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/book/consult" className="btn bg-gradient-to-r from-student-primary to-student-secondary text-white hover:opacity-90">
                Let&apos;s Go
              </Link>
              <Link href="#cube-challenge" className="btn bg-student-primary/10 text-student-primary hover:bg-student-primary/20">
                Free Cube Challenge
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 text-center">
              <div>
                <span className="text-3xl block">♔</span>
                <span className="text-sm text-gray-500">Chess Puzzles</span>
              </div>
              <div>
                <span className="text-3xl block">🎲</span>
                <span className="text-sm text-gray-500">Brain Games</span>
              </div>
              <div>
                <span className="text-3xl block">🎤</span>
                <span className="text-sm text-gray-500">Improv Skills</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
