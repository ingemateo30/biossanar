export default function CourseCard({ title, image, description, duration }) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="h-48 w-full relative">
          <img className="w-full h-full object-cover" src={image} alt={title} />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <div className="flex items-center text-gray-500 mb-4">
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <button className="w-full bg-primary hover:bg-secondary text-white py-2 px-4 rounded-md transition-colors">
            Más información
          </button>
        </div>
      </div>
    );
  }