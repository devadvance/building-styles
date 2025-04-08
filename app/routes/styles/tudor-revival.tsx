import { useState } from "react";

export default function TudorRevival() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "half-timbering": "Decorative half-timbering is the most recognizable feature of Tudor Revival homes. These exposed wood framework elements are set against stucco or brick infill to create a distinctive visual pattern, mimicking the construction techniques of medieval English buildings.",
    "tall-windows": "Tudor Revival homes typically feature tall, narrow windows, often grouped in sets of two or three. They commonly have multiple small panes in a diamond or rectangular pattern, creating visual interest while referencing medieval fenestration patterns.",
    "massive-chimney": "Prominent chimneys are a hallmark of Tudor Revival architecture. These chimneys are typically large, made of brick or stone, and often placed prominently on the front facade. Many feature decorative chimney pots or elaborately patterned brickwork.",
    "steep-roof": "The steeply pitched roof with one or more prominent cross gables is perhaps the most defining characteristic of Tudor Revival homes. These dramatic rooflines create a distinctly medieval silhouette and were originally designed to shed snow and rain in the English climate."
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
            Tudor Revival Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1920s-1940s
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Tudor Revival architecture romanticizes medieval English building traditions, 
            bringing a European flair to American neighborhoods. This style became especially 
            popular in prosperous suburbs during the 1920s and 1930s.
          </p>
          <p className="text-lg leading-relaxed">
            The style is immediately recognizable by its steeply pitched gabled roofs, 
            decorative half-timbering with stucco or brick infill, tall narrow windows 
            (often grouped) with multi-pane glazing, massive chimneys (often crowned with 
            decorative chimney pots), and entry doors with a characteristic rounded arch.
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
                {/* Steeply pitched gabled roofs */}
                <g 
                  onClick={() => handleFeatureClick("steep-gabled-roof")}
                  className={`cursor-pointer ${selectedFeature === "steep-gabled-roof" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="150" y="100" width="500" height="150" className="fill-transparent stroke-none"/>
                  <path d="M200,250 L400,100 L600,250" className="pointer-events-none" strokeWidth="1.5"/>
                </g>

                {/* Decorative half-timbering */}
                <g 
                  onClick={() => handleFeatureClick("half-timbering")}
                  className={`cursor-pointer ${selectedFeature === "half-timbering" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="240" y="150" width="320" height="200" className="fill-transparent stroke-none"/>
                  {/* Vertical timbers */}
                  <line x1="300" y1="150" x2="300" y2="350" className="pointer-events-none" strokeWidth="2"/>
                  <line x1="400" y1="150" x2="400" y2="350" className="pointer-events-none" strokeWidth="2"/>
                  <line x1="500" y1="150" x2="500" y2="350" className="pointer-events-none" strokeWidth="2"/>
                  {/* Horizontal timbers */}
                  <line x1="250" y1="250" x2="550" y2="250" className="pointer-events-none" strokeWidth="2"/>
                  {/* Diagonal timbers */}
                  <line x1="300" y1="150" x2="400" y2="250" className="pointer-events-none" strokeWidth="2"/>
                  <line x1="400" y1="150" x2="500" y2="250" className="pointer-events-none" strokeWidth="2"/>
                  <line x1="300" y1="250" x2="400" y2="350" className="pointer-events-none" strokeWidth="2"/>
                  <line x1="400" y1="250" x2="500" y2="350" className="pointer-events-none" strokeWidth="2"/>
                </g>

                {/* Main house body */}
                <path d="M200,550 L200,250 L600,250 L600,550 Z" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="2"/>

                {/* Tall narrow windows */}
                <g 
                  onClick={() => handleFeatureClick("tall-narrow-windows")}
                  className={`cursor-pointer ${selectedFeature === "tall-narrow-windows" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="240" y="300" width="80" height="200" className="fill-transparent stroke-none"/>
                  <rect x="480" y="300" width="80" height="200" className="fill-transparent stroke-none"/>
                  {/* Left window group */}
                  <rect x="250" y="310" width="60" height="180" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="280" y1="310" x2="280" y2="490" className="pointer-events-none" strokeWidth="0.75"/>
                  {/* Right window group */}
                  <rect x="490" y="310" width="60" height="180" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="520" y1="310" x2="520" y2="490" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Massive chimney */}
                <g 
                  onClick={() => handleFeatureClick("massive-chimney")}
                  className={`cursor-pointer ${selectedFeature === "massive-chimney" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="340" y="50" width="120" height="200" className="fill-transparent stroke-none"/>
                  <path d="M350,250 L350,60 L450,60 L450,250" className="pointer-events-none" strokeWidth="1.5"/>
                  {/* Chimney crown */}
                  <path d="M340,60 L400,40 L460,60" className="pointer-events-none" strokeWidth="1"/>
                  {/* Decorative brick patterns */}
                  <line x1="350" y1="100" x2="450" y2="100" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="350" y1="140" x2="450" y2="140" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="350" y1="180" x2="450" y2="180" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="350" y1="220" x2="450" y2="220" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Entry door */}
                <g 
                  onClick={() => handleFeatureClick("arched-door")}
                  className={`cursor-pointer ${selectedFeature === "arched-door" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="360" y="400" width="80" height="150" className="fill-transparent stroke-none"/>
                  <path d="M370,550 L370,420 Q400,400 430,420 L430,550" className="pointer-events-none" strokeWidth="1.5"/>
                  <circle cx="385" cy="480" r="3" className="pointer-events-none" fill="currentColor"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current" style={{ fontSize: "11px" }} stroke="none">
                {/* Roof Label */}
                <path d="M400,140 L400,110 L430, 110" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="113" textAnchor="start">Steeply Pitched Roof</text>
                
                {/* Windows Label */}
                <path d="M250,370 L220,370 L200, 390" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="195" y="393" textAnchor="end">Tall Narrow Windows</text>

                {/* Chimney Label */}
                <path d="M620,240 L650,240 L670, 260" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="675" y="263" textAnchor="start">Massive Chimney</text>

                {/* Door Label */}
                <path d="M360,440 L330,440 L310, 460" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="305" y="463" textAnchor="end">Arched Door</text>
              </g>
            </svg>

            {selectedFeature && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {selectedFeature === "steep-gabled-roof" 
                    ? "Steeply Pitched Roof" 
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