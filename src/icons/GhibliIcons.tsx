import React from 'react';

// ─── LoadingSpinner ───────────────────────────────────────────────────────────
// Hand-drawn bouncing dots spinner
export const LoadingSpinner: React.FC<{ size?: number; color?: string }> = ({
  size = 24,
  color = '#E8C47C',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="loading"
  >
    {/* Dot 1 */}
    <circle
      cx="6"
      cy="12"
      r="2.5"
      fill={color}
      style={{
        animation: 'ghibli-bounce 1.2s infinite ease-in-out',
        transformOrigin: '6px 12px',
      }}
    />
    {/* Dot 2 */}
    <circle
      cx="12"
      cy="12"
      r="2.5"
      fill={color}
      style={{
        animation: 'ghibli-bounce 1.2s 0.2s infinite ease-in-out',
        transformOrigin: '12px 12px',
      }}
    />
    {/* Dot 3 */}
    <circle
      cx="18"
      cy="12"
      r="2.5"
      fill={color}
      style={{
        animation: 'ghibli-bounce 1.2s 0.4s infinite ease-in-out',
        transformOrigin: '18px 12px',
      }}
    />
    <style>{`
      @keyframes ghibli-bounce {
        0%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-6px); }
      }
    `}</style>
  </svg>
);

// ─── CloseIcon ─────────────────────────────────────────────────────────────────
// Hand-drawn X mark, slightly wobbly to feel hand-crafted
export const CloseIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = '#5C4A32',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="close"
  >
    <path
      d="M3 3L15 15M15 3L3 15"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ strokeWidth: '2.2' }}
    />
  </svg>
);

// ─── StarIcon ─────────────────────────────────────────────────────────────────
// Hand-drawn 5-point star, slightly imperfect
export const StarIcon: React.FC<{
  size?: number;
  color?: string;
  filled?: boolean;
}> = ({ size = 18, color = '#E8C47C', filled = true }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : 'none'}
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="star"
  >
    <path d="M12 2L14.5 8.5H21.5L16 13L18.5 20L12 15.5L5.5 20L8 13L2.5 8.5H9.5L12 2Z" />
  </svg>
);

// ─── HeartIcon ────────────────────────────────────────────────────────────────
// Hand-drawn heart, soft and rounded
export const HeartIcon: React.FC<{
  size?: number;
  color?: string;
  filled?: boolean;
}> = ({ size = 18, color = '#E8B4B8', filled = true }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? color : 'none'}
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="heart"
  >
    <path d="M12 21C12 21 3 14.5 3 8.5C3 5.5 5.5 3 8.5 3C10.5 3 12 4.5 12 4.5C12 4.5 13.5 3 15.5 3C18.5 3 21 5.5 21 8.5C21 14.5 12 21 12 21Z" />
  </svg>
);

// ─── CheckIcon ────────────────────────────────────────────────────────────────
export const CheckIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 18,
  color = '#A8C5A0',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="check"
  >
    <path
      d="M3 9L7.5 13.5L15 5"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
