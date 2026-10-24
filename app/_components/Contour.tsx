/** The same fine-line motif is used throughout the portfolio. */
export function Contour({ className = "" }: { className?: string }) {
  return (
    <svg className={`contour ${className}`} viewBox="0 0 440 540" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.8">
        {[0, 1, 2, 3, 4, 5, 6].map(index => (
          <ellipse key={index} cx="220" cy="270" rx={186 - index * 19} ry={244 - index * 13} transform={`rotate(${index * 9 - 27} 220 270)`} />
        ))}
      </g>
    </svg>
  );
}
