import { useState } from "react";

export default function ClassicalRevival() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "triangular-pediment": "The triangular pediment is derived directly from classical Greek and Roman temples. In Classical Revival homes, it typically crowns the main façade and sometimes appears over windows and doors. This element creates a strong visual focus and conveys a sense of formal dignity.",
    "prominent-columns": "Columns are a quintessential element of Classical Revival architecture. These vertical elements are often full-height and may be in the Doric, Ionic, or Corinthian orders. They provide structural support while creating a grand, temple-like appearance.",
    "large-windows": "Large, symmetrically placed rectangular windows are characteristic of Classical Revival architecture. They typically have multiple panes and are arranged in balanced patterns across the façade, reinforcing the style's emphasis on symmetry and proportional harmony.",
    "symmetrical-facade": "Symmetry is a defining principle of Classical Revival architecture. The façade is typically arranged with perfect bilateral symmetry, with a central entrance and balanced arrangement of windows and other elements on either side."
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
            Classical Revival Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1920s-1950s
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            Classical Revival architecture draws inspiration from the grand traditions of ancient 
            Greece and Rome. This style represented a return to architectural formality and 
            grandeur in reaction to the more informal Victorian and Arts and Crafts styles.
          </p>
          <p className="text-lg leading-relaxed">
            Key features include symmetrical facades, prominent columns and pilasters (often 
            full-height), triangular pediments, large rectangular windows, and elaborate 
            classical details such as dentil moldings and cornices. The overall effect is one 
            of dignity, permanence, and classical proportions.
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
                {/* Main house body */}
                <path d="M200,550 L200,200 L600,200 L600,550 Z" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="2"/>

                {/* Pediment */}
                <g 
                  onClick={() => handleFeatureClick("pediment")}
                  className={`cursor-pointer ${selectedFeature === "pediment" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="150" y="100" width="500" height="100" className="fill-transparent stroke-none"/>
                  <path d="M180,200 L400,100 L620,200 Z" className="pointer-events-none" strokeWidth="1.5"/>
                  {/* Dentil molding */}
                  {[...Array(20)].map((_, i) => (
                    <rect key={i} x={200 + i * 20} y="190" width="10" height="5" className="pointer-events-none" strokeWidth="0.5"/>
                  ))}
                </g>

                {/* Columns */}
                <g 
                  onClick={() => handleFeatureClick("columns")}
                  className={`cursor-pointer ${selectedFeature === "columns" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="240" y="200" width="80" height="350" className="fill-transparent stroke-none"/>
                  <rect x="480" y="200" width="80" height="350" className="fill-transparent stroke-none"/>
                  {/* Left column */}
                  <path d="M250,550 L250,200 L310,200 L310,550" className="pointer-events-none" strokeWidth="1.5"/>
                  {/* Column capital */}
                  <path d="M240,210 L320,210" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M245,205 L315,205" className="pointer-events-none" strokeWidth="1"/>
                  {/* Column base */}
                  <path d="M240,540 L320,540" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M245,545 L315,545" className="pointer-events-none" strokeWidth="1"/>

                  {/* Right column */}
                  <path d="M490,550 L490,200 L550,200 L550,550" className="pointer-events-none" strokeWidth="1.5"/>
                  {/* Column capital */}
                  <path d="M480,210 L560,210" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M485,205 L555,205" className="pointer-events-none" strokeWidth="1"/>
                  {/* Column base */}
                  <path d="M480,540 L560,540" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M485,545 L555,545" className="pointer-events-none" strokeWidth="1"/>
                </g>

                {/* Symmetrical windows */}
                <g 
                  onClick={() => handleFeatureClick("symmetrical-windows")}
                  className={`cursor-pointer ${selectedFeature === "symmetrical-windows" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="340" y="250" width="120" height="160" className="fill-transparent stroke-none"/>
                  {/* Center windows */}
                  <rect x="350" y="260" width="100" height="140" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="400" y1="260" x2="400" y2="400" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="350" y1="330" x2="450" y2="330" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Entry door */}
                <g 
                  onClick={() => handleFeatureClick("entry-door")}
                  className={`cursor-pointer ${selectedFeature === "entry-door" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="360" y="450" width="80" height="100" className="fill-transparent stroke-none"/>
                  <rect x="370" y="460" width="60" height="90" className="pointer-events-none" strokeWidth="1"/>
                  {/* Door panels */}
                  <line x1="400" y1="460" x2="400" y2="550" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="370" y1="505" x2="430" y2="505" className="pointer-events-none" strokeWidth="0.75"/>
                  {/* Door handle */}
                  <circle cx="415" cy="500" r="2" className="pointer-events-none" fill="currentColor"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current" style={{ fontSize: "11px" }} stroke="none">
                {/* Pediment Label */}
                <path d="M400,240 L400,210 L430, 210" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="213" textAnchor="start">Triangular Pediment</text>
                
                {/* Columns Label */}
                <path d="M250,340 L220,340 L200, 360" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="195" y="363" textAnchor="end">Prominent Columns</text>

                {/* Windows Label */}
                <path d="M300,370 L270,370 L250, 390" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="245" y="393" textAnchor="end">Large Windows</text>
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