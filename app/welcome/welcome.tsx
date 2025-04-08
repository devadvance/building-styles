import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Architectural Styles Explorer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover and explore the rich history of architectural styles through an interactive visual journey
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {architecturalStyles.map((style) => (
            <div
              key={style.name}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 dark:bg-gray-700">
                <div className="flex items-center justify-center h-full text-4xl text-gray-400 dark:text-gray-500">
                  {style.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {style.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {style.description}
                </p>
                <Link
                  to={style.path}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Explore style
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const architecturalStyles = [
  {
    name: "Queen Anne",
    description: "Popular in the 1880s-1900s, featuring asymmetrical facades, decorative spindles, round towers, and ornate wraparound porches.",
    path: "/styles/queen-anne",
    icon: "👑",
  },
  {
    name: "Craftsman",
    description: "Emerged in the 1900s-1930s, featuring natural materials, wide porches with tapered columns, exposed beams, and handcrafted woodwork.",
    path: "/styles/craftsman",
    icon: "🏠",
  },
  {
    name: "Tudor Revival",
    description: "Popularized in the 1920s-1940s with decorative half-timbering, steep gabled roofs, tall narrow windows, and prominent chimneys.",
    path: "/styles/tudor-revival",
    icon: "🏰",
  },
  {
    name: "Classical Revival",
    description: "Flourished in the 1920s-1950s, characterized by symmetrical facades, prominent columns, and details inspired by Greek and Roman architecture.",
    path: "/styles/classical-revival",
    icon: "🏛️",
  },
  {
    name: "Mediterranean Revival",
    description: "Gained popularity in the 1920s-1950s, featuring stucco walls, low-pitched red tile roofs, arched windows, and enclosed courtyards.",
    path: "/styles/mediterranean-revival",
    icon: "🏺",
  },
  {
    name: "Minimal Traditional",
    description: "Emerged in the 1930s-1950s, offering simplified traditional details, modest size, low or intermediate roof pitches, and minimal ornamentation.",
    path: "/styles/minimal-traditional",
    icon: "🏘️",
  },
  {
    name: "Ranch",
    description: "Dominated from the 1940s-1970s, featuring single-story living with open floor plans, low-pitched roofs, and indoor-outdoor integration.",
    path: "/styles/ranch",
    icon: "🏡",
  },
];
