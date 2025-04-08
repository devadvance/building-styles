import { useState } from "react";

export default function MinimalTraditional() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "small-eaves": "Unlike previous styles with wide overhanging eaves, Minimal Traditional homes feature small or minimal eaves. This economical design detail reduced construction costs and materials during the Depression and post-war eras.",
    "simple-windows": "Windows are typically double-hung with simple, unadorned surrounds. They lack the decorative elements of earlier styles, reflecting the economical approach to construction and the stripped-down aesthetic.",
    "basic-door": "Entry doors are simple and functional, often with minimal ornamentation. They may include small glass panes or sidelights but generally lack elaborate detailing.",
    "roof-pitch": "The low to intermediate roof pitch is steeper than Ranch styles but not as steep as Tudor or Colonial Revivals. This moderate pitch was both economical and created a traditional silhouette."
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
            Minimal Traditional Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1930s-1950s
          </p>
        </header>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            The Minimal Traditional style emerged during the Great Depression and became very 
            popular in the post-World War II building boom. This style represents a simplified 
            version of prewar traditional homes, adapted to economic constraints and changing 
            tastes.
          </p>
          <p className="text-lg leading-relaxed">
            These homes are characterized by their modest size, simple floor plans, and lack of 
            architectural detail. They typically feature low or intermediate roof pitches, small 
            eaves, and traditional details stripped down to their basic forms. While less 
            decorative than earlier styles, they maintain a traditional feel through their 
            use of materials and basic forms.
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
                <path d="M200,550 L200,250 L600,250 L600,550 Z" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="2"/>

                {/* Low-pitched roof */}
                <g 
                  onClick={() => handleFeatureClick("low-pitched-roof")}
                  className={`cursor-pointer ${selectedFeature === "low-pitched-roof" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="150" y="150" width="500" height="100" className="fill-transparent stroke-none"/>
                  <path d="M180,250 L400,150 L620,250" className="pointer-events-none" strokeWidth="1.5"/>
                </g>

                {/* Small front porch */}
                <g 
                  onClick={() => handleFeatureClick("small-porch")}
                  className={`cursor-pointer ${selectedFeature === "small-porch" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="340" y="400" width="120" height="150" className="fill-transparent stroke-none"/>
                  <path d="M350,550 L350,410 L450,410 L450,550" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M350,410 L400,390 L450,410" className="pointer-events-none" strokeWidth="1"/>
                  {/* Porch columns */}
                  <rect x="360" y="410" width="10" height="140" className="pointer-events-none" strokeWidth="0.75"/>
                  <rect x="430" y="410" width="10" height="140" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Multi-pane windows */}
                <g 
                  onClick={() => handleFeatureClick("multi-pane-windows")}
                  className={`cursor-pointer ${selectedFeature === "multi-pane-windows" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit areas */}
                  <rect x="240" y="300" width="100" height="140" className="fill-transparent stroke-none"/>
                  <rect x="460" y="300" width="100" height="140" className="fill-transparent stroke-none"/>
                  {/* Left window */}
                  <rect x="250" y="310" width="80" height="120" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="290" y1="310" x2="290" y2="430" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="250" y1="370" x2="330" y2="370" className="pointer-events-none" strokeWidth="0.75"/>
                  {/* Right window */}
                  <rect x="470" y="310" width="80" height="120" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="510" y1="310" x2="510" y2="430" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="470" y1="370" x2="550" y2="370" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Entry door */}
                <g 
                  onClick={() => handleFeatureClick("simple-door")}
                  className={`cursor-pointer ${selectedFeature === "simple-door" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="370" y="450" width="60" height="100" className="fill-transparent stroke-none"/>
                  <rect x="380" y="460" width="40" height="90" className="pointer-events-none" strokeWidth="1"/>
                  <circle cx="395" cy="500" r="2" className="pointer-events-none" fill="currentColor"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current" style={{ fontSize: "11px" }} stroke="none">
                {/* Roof Label */}
                <path d="M400,240 L400,210 L430, 210" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="213" textAnchor="start">Low/Intermediate Roof Pitch</text>
                
                {/* Windows Label */}
                <path d="M250,370 L220,370 L200, 390" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="195" y="393" textAnchor="end">Simple Windows</text>

                {/* Door Label */}
                <path d="M360,440 L330,440 L310, 460" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="305" y="463" textAnchor="end">Basic Door</text>
              </g>
            </svg>

            {selectedFeature && (
              <div className="mt-4 p-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
                  {selectedFeature === "roof-pitch" 
                    ? "Low/Intermediate Roof Pitch" 
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