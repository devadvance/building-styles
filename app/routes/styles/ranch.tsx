import { useState } from "react";

export default function Ranch() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "large-windows": "Ranch homes typically feature large windows, especially in living areas, to maximize natural light and create a connection with the outdoors. These windows are often wider than they are tall, reinforcing the home's horizontal emphasis.",
    "sliding-doors": "Sliding glass doors are a trademark feature of Ranch style, providing easy access to patios and backyards while visually connecting indoor and outdoor living spaces. This reflects the style's emphasis on casual, indoor-outdoor living.",
    "attached-garage": "The attached garage became a standard feature of Ranch homes, integrated into the main structure rather than as a separate building. This innovation reflected America's growing car culture in the mid-20th century.",
    "low-pitched-roof": "The low-pitched roof is a defining characteristic of Ranch style, typically with wide eave overhangs. This roofline creates the home's characteristic horizontal silhouette and provides shade for large windows."
  };

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(featureId === selectedFeature ? null : featureId);
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto mb-8">
        <a href="/" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          ← Home
        </a>
      </div>
      <article className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Ranch Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1940s-1970s
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            The Ranch style epitomizes mid-20th century American suburban living. Emerging from 
            California in the 1940s, it quickly became the dominant residential style across the 
            country, symbolizing informal living and connection with the outdoors.
          </p>
          <p className="text-lg leading-relaxed">
            These single-story homes are characterized by their long, low-slung profiles, 
            low-pitched roofs with wide eaves, and strong horizontal emphasis. They typically 
            feature open floor plans, large windows, sliding glass doors, and attached garages. 
            The style emphasizes easy indoor-outdoor living with patios and backyards integrated 
            into the overall design.
          </p>
        </div>
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner border border-gray-300 dark:border-gray-600">
          <div className="relative">
            <svg
              viewBox="0 0 800 600"
              className="w-full h-auto"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Arrowhead marker for leader lines */}
                <marker id="arrowhead-clean" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L8,3 L0,6 Z" fill="currentColor" />
                </marker>
              </defs>

              {/* Ground Line */}
              <line x1="50" y1="550" x2="750" y2="550" strokeWidth="1"/>

              {/* Main house structure */}
              <g>
                {/* Low-pitched roof */}
                <g 
                  onClick={() => handleFeatureClick("low-pitched-roof")}
                  className={`cursor-pointer ${selectedFeature === "low-pitched-roof" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="150" y="200" width="500" height="100" className="fill-transparent stroke-none"/>
                  <path d="M180,300 L400,200 L620,300" className="pointer-events-none" strokeWidth="1.5"/>
                </g>

                {/* Main house body */}
                <path d="M200,550 L200,300 L600,300 L600,550 Z" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="2"/>

                {/* Picture window */}
                <g 
                  onClick={() => handleFeatureClick("picture-window")}
                  className={`cursor-pointer ${selectedFeature === "picture-window" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="240" y="350" width="160" height="120" className="fill-transparent stroke-none"/>
                  <rect x="250" y="360" width="140" height="100" className="pointer-events-none" strokeWidth="1"/>
                </g>

                {/* Horizontal emphasis */}
                <g 
                  onClick={() => handleFeatureClick("horizontal-emphasis")}
                  className={`cursor-pointer ${selectedFeature === "horizontal-emphasis" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="190" y="320" width="420" height="40" className="fill-transparent stroke-none"/>
                  {/* Horizontal siding lines */}
                  <line x1="200" y1="330" x2="600" y2="330" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="200" y1="350" x2="600" y2="350" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Attached garage */}
                <g 
                  onClick={() => handleFeatureClick("attached-garage")}
                  className={`cursor-pointer ${selectedFeature === "attached-garage" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="440" y="350" width="140" height="200" className="fill-transparent stroke-none"/>
                  <rect x="450" y="360" width="120" height="190" className="pointer-events-none" strokeWidth="1"/>
                  {/* Garage door panels */}
                  <line x1="450" y1="400" x2="570" y2="400" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="450" y1="440" x2="570" y2="440" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="450" y1="480" x2="570" y2="480" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="450" y1="520" x2="570" y2="520" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Entry */}
                <g 
                  onClick={() => handleFeatureClick("minimal-entry")}
                  className={`cursor-pointer ${selectedFeature === "minimal-entry" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="360" y="450" width="60" height="100" className="fill-transparent stroke-none"/>
                  <rect x="370" y="460" width="40" height="90" className="pointer-events-none" strokeWidth="1"/>
                  <circle cx="385" cy="500" r="2" className="pointer-events-none" fill="currentColor"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current" style={{ fontSize: "11px" }} stroke="none">
                {/* Roof Label */}
                <path d="M400,290 L400,260 L430, 260" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="263" textAnchor="start">Low-Pitched Roof</text>
                
                {/* Windows Label */}
                <path d="M150,410 L120,410 L100, 430" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="95" y="433" textAnchor="end">Large Windows</text>

                {/* Sliding Doors Label */}
                <path d="M250,440 L220,440 L200, 460" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="195" y="463" textAnchor="end">Sliding Glass Doors</text>

                {/* Garage Label */}
                <path d="M650,440 L680,440 L700, 460" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="705" y="463" textAnchor="start">Attached Garage</text>
              </g>
            </svg>

            {selectedFeature && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {selectedFeature.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{featureDescriptions[selectedFeature]}</p>
              </div>
            )}
          </div>
        </div>
      </article>
    </main>
  );
} 