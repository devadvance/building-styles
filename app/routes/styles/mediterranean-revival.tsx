import { useState } from "react";

export default function MediterraneanRevival() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "arched-windows-doors": "Arched openings are a signature element of Mediterranean Revival architecture. Windows and doorways typically feature rounded arches, reflecting Spanish, Italian, and Moorish influences. These arched elements add elegance and a sense of history to the façade.",
    "wrought-iron-balconies": "Decorative wrought iron elements, including balconies, window grilles, and railings, are hallmarks of Mediterranean Revival style. These features add visual interest and authentic Mediterranean character while also serving functional purposes.",
    "stucco-walls": "Smooth stucco exterior walls in white or pastel colors are characteristic of Mediterranean Revival homes. This finish mimics the traditional building materials of Mediterranean coastal regions and provides a backdrop for ornamental details.",
    "tile-roof": "Low-pitched clay tile roofs in red, orange, or terra cotta are perhaps the most distinctive feature of Mediterranean Revival architecture. These tiles, often with a half-barrel shape, create a distinctive silhouette and texture."
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
            Mediterranean Revival Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1920s-1950s
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Mediterranean Revival architecture draws inspiration from the seaside villas of 
            Mediterranean countries. This romantic style became particularly popular in warm-weather 
            states like Florida and California during the 1920s and 1930s resort boom.
          </p>
          <p className="text-lg leading-relaxed">
            Characteristic elements include stucco walls, low-pitched red tile roofs, arched windows 
            and doors, wrought iron balconies and window grilles, courtyard entries, and 
            symmetrical facades. The style often features outdoor living spaces like courtyards 
            and loggias, reflecting the Mediterranean lifestyle.
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
                {/* Stucco walls */}
                <g 
                  onClick={() => handleFeatureClick("stucco-walls")}
                  className={`cursor-pointer ${selectedFeature === "stucco-walls" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="190" y="340" width="420" height="220" className="fill-transparent stroke-none"/>
                  <path d="M200,550 L200,350 L600,350 L600,550 Z" className="pointer-events-none" strokeWidth="2"/>
                </g>

                {/* Low-pitched red tile roof */}
                <g
                  onClick={() => handleFeatureClick("tile-roof")}
                  className={`cursor-pointer ${selectedFeature === "tile-roof" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="170" y="240" width="460" height="120" className="fill-transparent stroke-none"/>
                  <path d="M180,350 L400,250 L620,350 Z" className="pointer-events-none" strokeWidth="1.5"/>
                </g>
                
                {/* Arched windows and doors */}
                <g 
                  data-feature="arched-windows-doors"
                  onClick={() => handleFeatureClick("arched-windows-doors")}
                  className={`cursor-pointer ${selectedFeature === "arched-windows-doors" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="240" y="330" width="100" height="60" className="fill-transparent stroke-none"/>
                  <rect x="460" y="330" width="100" height="60" className="fill-transparent stroke-none"/>
                  <rect x="350" y="400" width="100" height="60" className="fill-transparent stroke-none"/>
                  <path d="M250,380 Q290,340 330,380 Z" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M470,380 Q510,340 550,380 Z" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M360,450 Q400,410 440,450 Z" className="pointer-events-none" strokeWidth="1"/>
                </g>

                {/* Wrought iron balconies */}
                <g 
                  data-feature="wrought-iron-balconies"
                  onClick={() => handleFeatureClick("wrought-iron-balconies")}
                  className={`cursor-pointer ${selectedFeature === "wrought-iron-balconies" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="240" y="390" width="100" height="20" className="fill-transparent stroke-none"/>
                  <rect x="460" y="390" width="100" height="20" className="fill-transparent stroke-none"/>
                  <line x1="250" y1="400" x2="330" y2="400" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="470" y1="400" x2="550" y2="400" className="pointer-events-none" strokeWidth="0.75"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current" style={{ fontSize: "11px" }} stroke="none">
                {/* Roof Label */}
                <path d="M400,240 L400,210 L430, 210" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="213" textAnchor="start">Low-Pitched Tile Roof</text>
                
                {/* Windows Label */}
                <path d="M250,370 L220,370 L200, 390" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="195" y="393" textAnchor="end">Arched Windows</text>

                {/* Door Label */}
                <path d="M360,440 L330,440 L310, 460" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="305" y="463" textAnchor="end">Arched Door</text>
              </g>
            </svg>

            {selectedFeature && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {selectedFeature === "tile-roof" 
                    ? "Low-Pitched Tile Roof" 
                    : selectedFeature === "stucco-walls"
                    ? "Stucco Walls"
                    : selectedFeature.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
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