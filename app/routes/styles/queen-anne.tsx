import { useState } from "react";

export default function QueenAnne() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const featureDescriptions: Record<string, string> = {
    "tower": "Asymmetrical towers, often with conical or pyramid-shaped roofs, are a hallmark of Queen Anne style. They typically rise above the main roofline and serve as a focal point for the facade.",
    "wraparound-porch": "Wide, wraparound porches extend across multiple facades of the house, providing outdoor living space and creating a transition between interior and exterior spaces.",
    "spindle-work": "Delicate turned wood balusters, often called 'gingerbread,' create decorative railings. This ornate spindle work is representative of the style's emphasis on decorative detail.",
    "decorative-windows": "Windows are typically ornate with decorative crowns and surrounds. Single-pane sashes are common, sometimes with decorative upper sashes featuring small square panes or stained glass.",
    "gable-decoration": "Ornate gable decorations, often referred to as 'gable ornaments' or 'gable screens,' add visual interest and texture to the upper portions of the house."
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
            Queen Anne Style
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            1880s-1910s
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
                {/* Arrowhead marker for leader lines */}
                <marker id="arrowhead-clean" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L8,3 L0,6 Z" fill="currentColor" />
                </marker>
              </defs>

              {/* Ground Line */}
              <line x1="50" y1="550" x2="750" y2="550" strokeWidth="1"/>

              {/* Main house structure */}
              <g>
                {/* Tower */}
                <g 
                  data-feature="tower" 
                  onClick={() => handleFeatureClick("tower")}
                  className={`cursor-pointer ${selectedFeature === "tower" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="490" y="30" width="120" height="520" className="fill-transparent stroke-none"/>
                  <path d="M500,550 L500,150 L600,150 L600,550" className="pointer-events-none" strokeWidth="1.5"/>
                  <path d="M500,150 L550,50 L600,150 Z" className="pointer-events-none" strokeWidth="1.5"/> {/* Tower roof */}
                  <path d="M548,50 L550,30 L552,50" className="pointer-events-none" strokeWidth="1"/> {/* Finial */}
                  {/* Tower Windows */}
                  <rect x="520" y="200" width="60" height="90" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="550" y1="200" x2="550" y2="290" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="520" y1="245" x2="580" y2="245" className="pointer-events-none" strokeWidth="0.75"/>
                  <rect x="520" y="320" width="60" height="90" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="550" y1="320" x2="550" y2="410" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="520" y1="365" x2="580" y2="365" className="pointer-events-none" strokeWidth="0.75"/>
                </g>

                {/* Main house body */}
                <path d="M200,550 L200,200 L500,200 L500,550 Z" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="2"/>
                {/* Main Roof */}
                <path d="M180,200 L400,80 L620,200" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="1.5"/>
                <path d="M200,200 L400,100 L500,200" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="1.5"/>
                
                {/* Wraparound porch */}
                <g 
                  data-feature="wraparound-porch"
                  onClick={() => handleFeatureClick("wraparound-porch")}
                  className={`cursor-pointer ${selectedFeature === "wraparound-porch" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="140" y="390" width="520" height="170" className="fill-transparent stroke-none"/>
                  <path d="M150,550 L150,400 L650,400 L650,550" className="pointer-events-none" strokeWidth="1"/>
                  <path d="M150,400 L650,400" className="pointer-events-none" strokeWidth="1.5"/> {/* Porch roof line */}
                  {/* Spindle Work/Railing */} 
                  <g 
                    data-feature="spindle-work" 
                    onClick={(e) => { e.stopPropagation(); handleFeatureClick("spindle-work"); }}
                    className={`cursor-pointer ${selectedFeature === "spindle-work" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                  >
                    {/* Invisible hit area */}
                    <rect x="140" y="410" width="520" height="50" className="fill-transparent stroke-none"/>
                    <line x1="150" y1="420" x2="650" y2="420" className="pointer-events-none" strokeWidth="0.75"/> {/* Top rail */}
                    <line x1="150" y1="450" x2="650" y2="450" className="pointer-events-none" strokeWidth="0.75"/> {/* Bottom rail */}
                    {[...Array(20)].map((_, i) => (
                      <line key={i} x1={150 + i * 25 + 12.5} y1="420" x2={150 + i * 25 + 12.5} y2="450" className="pointer-events-none" strokeWidth="0.75"/>
                    ))}
                  </g>
                  {/* Porch Columns */}
                  <rect x="160" y="400" width="15" height="150" className="pointer-events-none" strokeWidth="1"/>
                  <rect x="300" y="400" width="15" height="150" className="pointer-events-none" strokeWidth="1"/>
                  <rect x="450" y="400" width="15" height="150" className="pointer-events-none" strokeWidth="1"/>
                  <rect x="600" y="400" width="15" height="150" className="pointer-events-none" strokeWidth="1"/>
                </g>
                
                {/* Main Windows */}
                <g 
                  data-feature="decorative-windows"
                  onClick={() => handleFeatureClick("decorative-windows")}
                  className={`cursor-pointer ${selectedFeature === "decorative-windows" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="240" y="220" width="220" height="160" className="fill-transparent stroke-none"/>
                  <rect x="250" y="250" width="80" height="120" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="290" y1="250" x2="290" y2="370" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="250" y1="310" x2="330" y2="310" className="pointer-events-none" strokeWidth="0.75"/>
                  {/* Window decorative crown */}
                  <path d="M245,250 Q 290,230 335,250" className="pointer-events-none" strokeWidth="1" fill="none"/>

                  <rect x="370" y="250" width="80" height="120" className="pointer-events-none" strokeWidth="1"/>
                  <line x1="410" y1="250" x2="410" y2="370" className="pointer-events-none" strokeWidth="0.75"/>
                  <line x1="370" y1="310" x2="450" y2="310" className="pointer-events-none" strokeWidth="0.75"/>
                  <path d="M365,250 Q 410,230 455,250" className="pointer-events-none" strokeWidth="1" fill="none"/>
                </g>

                {/* Door */}
                <rect x="250" y="450" width="80" height="100" className="fill-white dark:fill-gray-700 pointer-events-none" strokeWidth="1"/>
                <circle cx="315" cy="500" r="3" className="pointer-events-none" fill="currentColor" strokeWidth="0.5"/>
                
                {/* Gable decoration */}
                <g 
                  data-feature="gable-decoration" 
                  onClick={() => handleFeatureClick("gable-decoration")}
                  className={`cursor-pointer ${selectedFeature === "gable-decoration" ? "fill-blue-100 dark:fill-blue-900" : "fill-white dark:fill-gray-700"}`}
                >
                  {/* Invisible hit area */}
                  <rect x="375" y="110" width="50" height="40" className="fill-transparent stroke-none"/>
                  <path d="M385,120 L400,140 L415,120" className="pointer-events-none" strokeWidth="1" fill="none"/>
                  <circle cx="400" cy="130" r="5" className="pointer-events-none" fill="none"/>
                </g>
              </g>

              {/* Feature Labels with Leader Lines */}
              <g className="text-xs fill-current" style={{ fontSize: "11px" }} stroke="none">
                {/* Tower Label */}
                <path d="M620,180 L650,170 L680,170" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="685" y="173" textAnchor="start">Tower</text>
                
                {/* Decorative Gable Label */}
                <path d="M400,95 L400,65 L430,65" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="435" y="68" textAnchor="start">Decorative Gable</text>
                
                {/* Wraparound Porch Label */}
                <path d="M130,410 L100,410 L80, 430" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="75" y="433" textAnchor="end">Wraparound Porch</text>
                
                {/* Spindle Work Label */}
                <path d="M130,440 L100,440 L80, 460" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="75" y="463" textAnchor="end">Spindle Work</text>

                {/* Ornate Windows Label */}
                <path d="M355,240 L375,220 L405,220" fill="none" stroke="currentColor" strokeWidth="0.75" markerEnd="url(#arrowhead-clean)"/>
                <text x="410" y="223" textAnchor="start">Ornate Windows</text>
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
            The Queen Anne style represents the height of Victorian-era architecture in America. 
            It emerged in the late 19th century, blending elements of Elizabethan and Jacobean design 
            with American innovation and industrial-age manufacturing capabilities.
          </p>
          <p className="text-lg leading-relaxed">
            These homes are known for their picturesque asymmetrical compositions, decorative excess, 
            and eclectic details. Key features include steeply pitched roofs with irregular shapes, 
            dominant front-facing gables, towers, wraparound porches with turned posts and spindle work, 
            and walls with textured surfaces from varying materials and patterns. The overall effect is one 
            of romantic complexity—a deliberate contrast to earlier, more symmetrical architectural styles.
          </p>
        </div>
      </article>
    </main>
  );
} 