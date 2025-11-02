
import React from "react";



export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAVBAR */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="font-bold text-lg">MySite</div>
            <div className="text-sm text-slate-500">Simple homepage</div>
          </div>
          <nav className="space-x-4 text-sm">
            <a href="#home" className="hover:text-indigo-600">Home</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      
      <main>
        <section id="home" className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold">Welcome to MySite</h1>
            <p className="mt-4 text-slate-600">
              A clean, normal homepage layout — easy to customize for any project.
            </p>
            <div className="mt-6">
              <a href="#about" className="inline-block px-4 py-2 bg-indigo-600 text-white rounded">
                Learn more
              </a>
            </div>
          </div>
        </section>


        <section id="about" className="py-12 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="mt-3 text-slate-600">
              This section briefly describes the site. Replace this text with your own content.
            </p>
          </div>
        </section>

      
        <section id="contact" className="py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 text-slate-600">
              Have questions? Reach out via email or social links.
            </p>
            <div className="mt-4">
              <a href="mailto:you@example.com" className="text-indigo-600">
                you@example.com
              </a>
            </div>
          </div>
        </section>
      </main>

   
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} MySite</div>
          <div className="space-x-4">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
