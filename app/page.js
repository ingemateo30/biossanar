import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';
import CourseCard from '../components/CourseCard';
import './globals.css';

export default function Home() {
  const featuredCourses = [
    {
      id: 1,
      title: 'Auxiliar de Enfermería',
      image: '/images/nursing.jpg',
      description: 'Forma parte del equipo de atención médica, con un enfoque integral en el cuidado del paciente.',
      duration: '12 meses'
    },
    {
      id: 2,
      title: 'Auxiliar de Salud Oral',
      image: '/images/dental.jpg',
      description: 'Aprende a asistir en procedimientos odontológicos y a gestionar la higiene bucal de pacientes.',
      duration: '10 meses'
    },
    {
      id: 3,
      title: 'Técnico en Farmacia',
      image: '/images/pharmacy.jpg',
      description: 'Especialízate en la dispensación de medicamentos y atención farmacéutica.',
      duration: '14 meses'
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Egresada de Enfermería',
      image: '/images/testimonial1.jpg',
      text: 'La formación que recibí me permitió incorporarme rápidamente al campo laboral. Los profesores son excelentes y las prácticas muy completas.'
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Estudiante de Salud Oral',
      image: '/images/testimonial2.jpg',
      text: 'El ambiente de estudio es increíble, los laboratorios están muy bien equipados y los docentes siempre están disponibles para resolver dudas.'
    },
    {
      id: 3,
      name: 'Laura Sánchez',
      role: 'Egresada de Farmacia',
      image: '/images/testimonial3.jpg',
      text: 'Gracias a la bolsa de empleo conseguí trabajo antes de terminar mis estudios. La formación es muy completa y práctica.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      {/* Sección de Cursos Destacados */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Programas Educativos
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Formación práctica y teórica con profesionales de excelencia.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard 
                key={course.id}
                title={course.title}
                image={course.image}
                description={course.description}
                duration={course.duration}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Sección de Ventajas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              ¿Por qué elegirnos?
            </h2>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-medium text-gray-900">Docentes Expertos</h3>
                <p className="mt-2 text-base text-gray-500">
                  Profesionales con amplia experiencia en el sector salud.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-medium text-gray-900">Práctica Garantizada</h3>
                <p className="mt-2 text-base text-gray-500">
                  Convenios con instituciones de salud para prácticas profesionales.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-medium text-gray-900">Instalaciones Modernas</h3>
                <p className="mt-2 text-base text-gray-500">
                  Laboratorios equipados con tecnología de última generación.
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-3 text-xl font-medium text-gray-900">Bolsa de Empleo</h3>
                <p className="mt-2 text-base text-gray-500">
                  Apoyo en la inserción laboral para nuestros egresados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}