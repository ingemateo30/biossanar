export default function Hero() {
    return (
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover mix-blend-overlay opacity-20"
            src="/images/hero-background.jpg"
            alt="Estudiantes de salud"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Formando profesionales</span>
              <span className="block text-accent">en el área de la salud</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-light sm:max-w-3xl">
              Cursos especializados de auxiliar de enfermería, auxiliar oral y más para tu futuro profesional.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="/courses" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary bg-white hover:bg-gray-100">
                  Ver cursos
                </a>
                <a href="/contact" className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent hover:bg-secondary">
                  Contáctanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  