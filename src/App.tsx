import React from 'react';
import { Atom, Calendar, Users, Send, Brain, ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import EventCard from './components/EventCard';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ParticleBackground />
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative z-10">
            <Atom className="w-24 h-24 text-[#8000ff] mx-auto mb-6 animate-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#8000ff] to-[#ffdd00] text-transparent bg-clip-text">
              Q-BITS
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Exploring Quantum Realities
            </p>
            <a
              href="#join"
              className="inline-block bg-[#8000ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6600cc] transition-colors"
            >
              Join the Future
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#ffdd00]" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20">
              <Brain className="w-12 h-12 text-[#ffdd00] mb-4" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                Advancing quantum understanding through collaborative research and hands-on experimentation.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20">
              <Users className="w-12 h-12 text-[#ffdd00] mb-4" />
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <p className="text-gray-300">
                Building a network of passionate quantum enthusiasts and future innovators.
              </p>
            </div>
            <div className="bg-black/40 backdrop-blur-lg p-6 rounded-lg border border-purple-500/20">
              <Calendar className="w-12 h-12 text-[#ffdd00] mb-4" />
              <h3 className="text-xl font-bold mb-4">Activities</h3>
              <p className="text-gray-300">
                Regular workshops, seminars, and hands-on projects in quantum computing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <EventCard
              title="Quantum Computing Workshop"
              date="March 15, 2024"
              description="Introduction to quantum circuits and algorithms using IBM Quantum."
              type="Workshop"
            />
            <EventCard
              title="Guest Lecture: Quantum Entanglement"
              date="March 22, 2024"
              description="Dr. Sarah Chen discusses recent breakthroughs in quantum entanglement."
              type="Lecture"
            />
            <EventCard
              title="Quantum Hackathon"
              date="April 5-7, 2024"
              description="48-hour hackathon focused on quantum computing applications."
              type="Hackathon"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Quantum Error Correction"
              description="Implementing error correction algorithms for quantum computers."
              image="https://images.unsplash.com/photo-1635070041078-e363dbe005cb"
              link="#"
            />
            <ProjectCard
              title="Quantum Machine Learning"
              description="Exploring quantum algorithms for machine learning applications."
              image="https://images.unsplash.com/photo-1509228468518-180dd4864904"
              link="#"
            />
            <ProjectCard
              title="Quantum Cryptography"
              description="Developing quantum-safe encryption protocols."
              image="https://images.unsplash.com/photo-1516110833967-0b5716ca1387"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="join" className="py-20 bg-black/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Join Q-BITS</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-black/40 border border-purple-500/20 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-black/40 border border-purple-500/20 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Why do you want to join?
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md bg-black/40 border border-purple-500/20 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#8000ff]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8000ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#6600cc] transition-colors"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-[#ffdd00]">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ffdd00]">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ffdd00]">
              <Twitter className="w-8 h-8" />
            </a>
          </div>
          <div className="inline-flex items-center space-x-2">
            <Send className="w-5 h-5 text-[#ffdd00]" />
            <a href="mailto:contact@qbits.edu" className="text-gray-300 hover:text-white">
              contact@qbits.edu
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>© 2024 Q-BITS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;