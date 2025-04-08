import { useState } from "react";

export default function Craftsman() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "low-pitched-roof": "Low-pitched gabled roofs with wide, unenclosed eave overhangs are a defining feature of Craftsman style homes. The shallow slope of the roof contrasts with the steeper roofs of Victorian styles.",
    "exposed-rafters": "Exposed roof rafters extend beyond the roof, creating a distinctive shadow line and emphasizing the structural elements of the house as decorative features.",
    "tapered-columns": "Square columns that taper as they rise, often set on large piers extending to ground level, support the porch roof. These are distinctly different from the round columns of Classical styles.",
    "grouped-windows": "Windows are typically arranged in groups of two or three. The upper sash often has a divided-light pattern, while the lower sash is a single pane, creating visual interest.",
    "knee-braces": "Decorative brackets or braces under the gables are both structural and ornamental. They support the wide eave overhangs and add a handcrafted aesthetic to the home."
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
            Craftsman Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1900s-1930s
          </p>
        </header>

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
                {/* Brick pattern */}
                <pattern id="brick-clean" patternUnits="userSpaceOnUse" width="16" height="8">
                  <rect width="16" height="8" fill="#f1f5f9" className="dark:fill-gray-750"/>
                  <path d="M 0,4 L 16,4 M 8,0 L 8,8" stroke="#cbd5e0" className="dark:stroke-gray-600" strokeWidth="0.5" />
                </pattern>
                {/* Wood siding pattern */}
                <pattern id="wood-siding-clean" patternUnits="userSpaceOnUse" width="8" height="8">
                  <path d="M 0,4 L 8,4" stroke="#cbd5e0" className="dark:stroke-gray-600" strokeWidth="0.5" />
                </pattern>
                {/* Arrowhead marker */}
                <marker id="arrowhead-clean" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L8,3 L0,6 Z" fill="currentColor" />
                </marker>
              </defs>

              {/* Ground Line */}
              <line x1="50" y1="550" x2="750" y2="550" strokeWidth="1" className="text-gray-500 dark:text-gray-400"/>

              {/* Main house structure */}
              <g className="text-gray-700 dark:text-gray-300">
                {/* Main body */} 
                <path d="M200,550 L200,250 L600,250 L600,550 Z" fill="url(#wood-siding-clean)" strokeWidth="2"/>
                
                {/* Low-pitched roof with wide eaves */} 
                <g 
                  data-feature="low-pitched-roof"
                  onClick={() => handleFeatureClick("low-pitched-roof")}
                  className={`cursor-pointer ${selectedFeature === "low-pitched-roof" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="150" y="150" width="500" height="100" className="fill-transparent stroke-none"/>
                  <path d="M150,250 L400,150 L650,250 Z" className="pointer-events-none" strokeWidth="1.5"/>
                </g>
                
                {/* Exposed rafter tails */} 
                <g 
                  data-feature="exposed-rafters" 
                  onClick={() => handleFeatureClick("exposed-rafters")}
                  className={`cursor-pointer ${selectedFeature === "exposed-rafters" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="175" y="250" width="475" height="15" className="fill-transparent stroke-none"/>
                  {[...Array(10)].map((_, i) => (
                    <rect key={i} x={175 + i * 50} y={250} width="8" height="15" className="pointer-events-none" strokeWidth="1"/>
                  ))}
                </g>
                
                {/* Front porch with tapered columns on brick piers */} 
                <g 
                  data-feature="tapered-columns"
                  onClick={() => handleFeatureClick("tapered-columns")}
                  className={`cursor-pointer ${selectedFeature === "tapered-columns" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="280" y="300" width="240" height="250" className="fill-transparent stroke-none"/>
                  {/* Porch roof */}
                  <path d="M250,300 L400,250 L550,300" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="250" y1="300" x2="550" y2="300" className="pointer-events-none" strokeWidth="1"/>
                  {/* Brick Piers */}
                  <rect x="280" y="450" width="80" height="100" fill="url(#brick-clean)" className="pointer-events-none" strokeWidth="1"/>
                  <rect x="440" y="450" width="80" height="100" fill="url(#brick-clean)" className="pointer-events-none" strokeWidth="1"/>
                  {/* Tapered Columns */}
                  <path d="M290,450 L310,300 L350,300 L370,450 Z" className="pointer-events-none" strokeWidth="1"/> 
                  <path d="M430,450 L450,300 L490,300 L510,450 Z" className="pointer-events-none" strokeWidth="1"/> 
                </g>
                
                {/* Windows (multi-pane over single pane) */}
                <g 
                  data-feature="grouped-windows"
                  onClick={() => handleFeatureClick("grouped-windows")}
                  className={`cursor-pointer ${selectedFeature === "grouped-windows" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="220" y="320" width="100" height="150" className="fill-transparent stroke-none"/>
                  <rect x="480" y="320" width="100" height="150" className="fill-transparent stroke-none"/>
                  {/* Left window */}
                  <rect x="220" y="320" width="100" height="150" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="220" y1="380" x2="320" y2="380" className="pointer-events-none" strokeWidth="0.75"/> {/* Horizontal divider */}
                  <line x1="270" y1="320" x2="270" y2="380" className="pointer-events-none" strokeWidth="0.75"/> {/* Vertical top 1 */}
                  <line x1="245" y1="320" x2="245" y2="380" className="pointer-events-none" strokeWidth="0.75"/> {/* Vertical top 2 */}
                  <line x1="295" y1="320" x2="295" y2="380" className="pointer-events-none" strokeWidth="0.75"/> {/* Vertical top 3 */}
                  {/* Right window */}
                  <rect x="480" y="320" width="100" height="150" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="480" y1="380" x2="580" y2="380" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="530" y1="320" x2="530" y2="380" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="505" y1="320" x2="505" y2="380" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="555" y1="320" x2="555" y2="380" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Door */}
                <rect x="380" y="450" width="80" height="100" fill="#f1f5f9" className="dark:fill-gray-750 pointer-events-none" strokeWidth="1"/>
                <rect x="390" y="460" width="20" height="30" className="pointer-events-none" strokeWidth="0.5"/> {/* Small window */}
                <circle cx="445" cy="500" r="3" className="pointer-events-none" fill="currentColor" strokeWidth="0.5"/>
                
                {/* Decorative knee braces */} 
                <g 
                  data-feature="knee-braces" 
                  onClick={() => handleFeatureClick("knee-braces")}
                  className={`cursor-pointer ${selectedFeature === "knee-braces" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="380" y="170" width="40" height="20" className="fill-transparent stroke-none"/>
                  <path d="M380,170 L380,190 L420,190" className="pointer-events-none" strokeWidth="1" fill="none"/>
                  <path d="M420,170 L420,190 L380,190" className="pointer-events-none" strokeWidth="1" fill="none"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current text-gray-600 dark:text-gray-400" style={{ fontSize: "11px" }} stroke="none">
                {/* Roof Label */}
                <path d="M400,145 L400,120 L430, 120" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="123" textAnchor="start">Low-Pitched Roof & Wide Eaves</text>
                
                {/* Rafters Label */}
                <path d="M160,260 L130,260 L110, 280" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="105" y="283" textAnchor="end">Exposed Rafter Tails</text>
                
                {/* Columns Label */}
                <path d="M270,400 L240,400 L220, 420" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="215" y="423" textAnchor="end">Tapered Columns on Piers</text>

                {/* Windows Label */}
                <path d="M600,350 L630,350 L650, 370" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="655" y="373" textAnchor="start">Multi-Pane Windows</text>

                {/* Braces Label */}
                <path d="M400,180 L400,210 L430, 210" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="213" textAnchor="start">Knee Braces</text>
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

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            The Craftsman style emerged from the Arts and Crafts movement, emphasizing handcrafted quality, 
            natural materials, and simplicity. This style represented a rejection of the mass-produced, 
            ornate elements of the Victorian era in favor of artisanal craftsmanship.
          </p>
          <p className="text-lg leading-relaxed">
            Defining features include low-pitched gabled roofs with wide, unenclosed eave overhangs, 
            exposed roof rafters, decorative beams or braces under the gables, and tapered square 
            columns supporting the porch roof. The emphasis on natural materials is evident in the use 
            of wood, stone, and brick throughout these homes.
          </p>
        </div>
      </article>
    </main>
  );
} 