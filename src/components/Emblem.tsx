import React from 'react';

interface EmblemProps {
  className?: string;
  size?: number;
  variant?: 'full' | 'monochrome' | 'gold';
}

/**
 * Official Coat of Arms of the Democratic Republic of the Congo
 * Features: Leopard head, elephant tusk (left), ceremonial spear (right),
 * stone base, and banner with the national motto: "JUSTICE · PAIX · TRAVAIL".
 */
export const DrcEmblem: React.FC<EmblemProps> = ({
  className = '',
  size = 48,
  variant = 'full',
}) => {
  const isGold = variant === 'gold';
  const isMono = variant === 'monochrome';

  const goldColor = isMono ? 'currentColor' : '#D6A84B';
  const deepNavy = isMono ? 'currentColor' : '#071B33';
  const accentRed = isMono ? 'currentColor' : '#CE1126';
  const skyBlue = isMono ? 'currentColor' : '#007FFF';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Armoiries Officielles de la République Démocratique du Congo"
    >
      {/* Subtle outer halo circle */}
      <circle cx="60" cy="60" r="58" stroke={goldColor} strokeWidth="1.2" strokeOpacity="0.4" />
      <circle cx="60" cy="60" r="55" stroke={goldColor} strokeWidth="0.6" strokeDasharray="2 2" strokeOpacity="0.3" />

      {/* Decorative laurel/olive branches arch */}
      <path
        d="M26 78 C20 54 32 30 52 24 M94 78 C100 54 88 30 68 24"
        stroke={goldColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />

      {/* Elephant Tusk (Heraldic sinister / Left side) */}
      <path
        d="M34 84 C28 62 36 38 48 26 C47 38 40 60 48 82 Z"
        fill={isGold ? '#D6A84B' : '#F4E8D0'}
        stroke={deepNavy}
        strokeWidth="1.5"
      />
      <path
        d="M37 72 C35 56 40 40 46 32"
        stroke={goldColor}
        strokeWidth="0.8"
        strokeOpacity="0.6"
      />

      {/* Sovereign Spear (Heraldic dexter / Right side) */}
      <path
        d="M72 84 L88 24 L91 25 L75 85 Z"
        fill={goldColor}
      />
      {/* Spear head */}
      <polygon
        points="88,24 85,32 94,30"
        fill={accentRed}
        stroke={goldColor}
        strokeWidth="1"
      />

      {/* Granite / Stone Base */}
      <path
        d="M40 85 C40 82 80 82 80 85 L84 94 C84 96 36 96 36 94 Z"
        fill={isGold ? '#C59937' : '#2D3748'}
        stroke={goldColor}
        strokeWidth="1.2"
      />

      {/* Central Leopard Head - Symbol of sovereign authority and resilience */}
      <g transform="translate(60, 56) scale(0.95)">
        {/* Head contours */}
        <path
          d="M -22 -14 C -26 -28 -14 -32 -8 -22 C -4 -24 4 -24 8 -22 C 14 -32 26 -28 22 -14 C 26 -4 24 12 14 20 C 6 26 -6 26 -14 20 C -24 12 -26 -4 -22 -14 Z"
          fill={isGold ? '#D6A84B' : '#E5A93C'}
          stroke={deepNavy}
          strokeWidth="1.8"
        />
        {/* Ears inside */}
        <path d="M -16 -24 C -18 -18 -14 -16 -12 -18" stroke={deepNavy} strokeWidth="1.2" fill={isGold ? '#B88628' : '#C53030'} />
        <path d="M 16 -24 C 18 -18 14 -16 12 -18" stroke={deepNavy} strokeWidth="1.2" fill={isGold ? '#B88628' : '#C53030'} />
        {/* Leopard spots */}
        <circle cx="-12" cy="-6" r="2" fill={deepNavy} />
        <circle cx="12" cy="-6" r="2" fill={deepNavy} />
        <circle cx="-16" cy="6" r="1.8" fill={deepNavy} />
        <circle cx="16" cy="6" r="1.8" fill={deepNavy} />
        <circle cx="0" cy="-14" r="2" fill={deepNavy} />
        {/* Eyes */}
        <polygon points="-10,-4 -6,-8 -4,-3" fill={deepNavy} />
        <polygon points="10,-4 6,-8 4,-3" fill={deepNavy} />
        <circle cx="-7" cy="-5" r="1" fill="#FFFFFF" />
        <circle cx="7" cy="-5" r="1" fill="#FFFFFF" />
        {/* Muzzle / Nose */}
        <polygon points="-4,4 4,4 0,9" fill={deepNavy} />
        {/* Whiskers */}
        <line x1="-14" y1="8" x2="-26" y2="7" stroke={deepNavy} strokeWidth="0.8" />
        <line x1="-14" y1="11" x2="-25" y2="13" stroke={deepNavy} strokeWidth="0.8" />
        <line x1="14" y1="8" x2="26" y2="7" stroke={deepNavy} strokeWidth="0.8" />
        <line x1="14" y1="11" x2="25" y2="13" stroke={deepNavy} strokeWidth="0.8" />
      </g>

      {/* Motto Banner: JUSTICE · PAIX · TRAVAIL */}
      <path
        d="M 22 96 C 42 92 78 92 98 96 L 94 106 C 76 102 44 102 26 106 Z"
        fill={accentRed}
        stroke={goldColor}
        strokeWidth="1.2"
      />
      {/* Banner folds on ends */}
      <polygon points="22,96 26,106 18,103" fill="#990000" stroke={goldColor} strokeWidth="0.8" />
      <polygon points="98,96 94,106 102,103" fill="#990000" stroke={goldColor} strokeWidth="0.8" />

      {/* Motto text */}
      <text
        x="60"
        y="102"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="5"
        fontWeight="bold"
        letterSpacing="0.8"
        fontFamily="sans-serif"
      >
        JUSTICE · PAIX · TRAVAIL
      </text>
    </svg>
  );
};

/**
 * Flag of the Democratic Republic of the Congo
 * Sky blue field, diagonal red stripe with gold fimbriation, gold star in canton.
 */
export const DrcFlag: React.FC<{ className?: string; size?: number; ratio?: 'standard' | 'icon' }> = ({
  className = '',
  size = 28,
  ratio = 'standard',
}) => {
  const width = ratio === 'standard' ? Math.round(size * 1.5) : size;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 80"
      className={`rounded-xs overflow-hidden shadow-xs border border-white/20 shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Drapeau de la République Démocratique du Congo"
    >
      <rect width="120" height="80" fill="#007FFF" />
      {/* Diagonal red stripe bordered in yellow: from lower hoist (0,80) to upper fly (120,0) */}
      <polygon points="0,80 0,64 96,0 120,0 120,16 24,80" fill="#F7D618" />
      <polygon points="0,76 0,68 102,0 114,0 120,4 120,12 18,80" fill="#CE1126" />
      {/* Yellow five-pointed star in upper hoist */}
      <g transform="translate(24, 22)">
        <polygon
          points="0,-14 4.3,-4.5 14.5,-4.5 6.3,2 9.5,12 0,6 -9.5,12 -6.3,2 -14.5,-4.5 -4.3,-4.5"
          fill="#F7D618"
        />
      </g>
    </svg>
  );
};

/**
 * Flag of the Republic of Namibia
 * Blue upper triangle with gold sun, green lower triangle, diagonal red stripe bordered in white.
 */
export const NamibiaFlag: React.FC<{ className?: string; size?: number; ratio?: 'standard' | 'icon' }> = ({
  className = '',
  size = 28,
  ratio = 'standard',
}) => {
  const width = ratio === 'standard' ? Math.round(size * 1.5) : size;
  const height = size;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 80"
      className={`rounded-xs overflow-hidden shadow-xs border border-white/20 shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Flag of the Republic of Namibia"
    >
      {/* Upper triangle: Blue */}
      <polygon points="0,0 120,0 0,80" fill="#003580" />
      {/* Lower triangle: Green */}
      <polygon points="120,0 120,80 0,80" fill="#009543" />
      {/* White fimbriation for diagonal */}
      <polygon points="0,80 0,64 96,0 120,0 120,16 24,80" fill="#FFFFFF" />
      {/* Diagonal red stripe */}
      <polygon points="0,76 0,68 102,0 114,0 120,4 120,12 18,80" fill="#D21034" />
      {/* Golden sun with 12 rays in upper hoist */}
      <g transform="translate(24, 24)">
        <circle cx="0" cy="0" r="7" fill="#FFCE00" stroke="#003580" strokeWidth="1.2" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
          <line
            key={deg}
            x1="0"
            y1="-8"
            x2="0"
            y2="-13"
            stroke="#FFCE00"
            strokeWidth="1.8"
            strokeLinecap="round"
            transform={`rotate(${deg})`}
          />
        ))}
      </g>
    </svg>
  );
};
