// SVG Generator Utilities for AIOS
import { AIOS_CONFIG } from './config';

const { theme } = AIOS_CONFIG;

export function generateBadgeSVG(
  label: string,
  value: string | number,
  color: string = theme.primary
): string {
  const labelWidth = label.length * 7 + 10;
  const valueWidth = String(value).length * 8 + 10;
  const totalWidth = labelWidth + valueWidth;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="28" viewBox="0 0 ${totalWidth} 28">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#2d2d2d"/>
      <stop offset="100%" style="stop-color:#1a1a1a"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${color}"/>
      <stop offset="100%" style="stop-color:${theme.secondary}"/>
    </linearGradient>
  </defs>
  <rect width="${totalWidth}" height="28" rx="6" fill="url(#bg)"/>
  <rect x="${labelWidth}" width="${valueWidth}" height="28" rx="0" fill="url(#accent)"/>
  <rect x="${totalWidth - 6}" width="6" height="28" rx="0" fill="url(#accent)"/>
  <rect x="${totalWidth - 6}" y="0" width="6" height="28" rx="6" fill="url(#accent)" clip-path="inset(0 0 0 0 round 0 6px 6px 0)"/>
  <text x="${labelWidth / 2}" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="600" fill="#fff" text-anchor="middle">${label}</text>
  <text x="${labelWidth + valueWidth / 2}" y="18" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">${value}</text>
</svg>`.trim();
}

export function generateMetricCardSVG(
  title: string,
  metrics: Array<{ label: string; value: string | number; icon: string }>
): string {
  const width = 400;
  const rowHeight = 36;
  const height = 60 + metrics.length * rowHeight;

  const metricRows = metrics
    .map(
      (m, i) => `
    <g transform="translate(0, ${60 + i * rowHeight})">
      <text x="24" y="24" font-size="18">${m.icon}</text>
      <text x="52" y="24" font-family="system-ui, sans-serif" font-size="13" fill="#aaa">${m.label}</text>
      <text x="${width - 24}" y="24" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="${theme.accent}" text-anchor="end">${m.value}</text>
    </g>`
    )
    .join('');

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a2e"/>
      <stop offset="100%" style="stop-color:#0a0a0f"/>
    </linearGradient>
    <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${theme.primary}"/>
      <stop offset="50%" style="stop-color:${theme.secondary}"/>
      <stop offset="100%" style="stop-color:${theme.accent}"/>
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" rx="12" fill="url(#cardBg)"/>
  <rect width="${width}" height="${height}" rx="12" fill="none" stroke="${theme.primary}33" stroke-width="1"/>
  
  <!-- Header -->
  <rect x="0" y="0" width="${width}" height="4" rx="12" fill="url(#headerGrad)" clip-path="inset(0 0 ${height - 12}px 0 round 12px)"/>
  
  <!-- Title -->
  <text x="24" y="36" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700" fill="#fff">${title}</text>
  
  <!-- Metrics -->
  ${metricRows}
</svg>`.trim();
}

export function generateArchitectureSVG(): string {
  const width = 800;
  const height = 500;
  const { architecture } = AIOS_CONFIG;

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0f"/>
      <stop offset="100%" style="stop-color:#1a1a2e"/>
    </linearGradient>
    <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${theme.primary}"/>
      <stop offset="100%" style="stop-color:${theme.secondary}"/>
    </linearGradient>
    <linearGradient id="serviceGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${theme.accent}"/>
      <stop offset="100%" style="stop-color:#00b4d8"/>
    </linearGradient>
    <linearGradient id="securityGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#4361ee"/>
      <stop offset="100%" style="stop-color:#3a0ca3"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)"/>
  
  <!-- Grid Pattern -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${theme.primary}11" stroke-width="1"/>
  </pattern>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>
  
  <!-- Title -->
  <text x="${width / 2}" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="700" fill="#fff" text-anchor="middle" filter="url(#glow)">🧠 AIOS Architecture</text>
  
  <!-- Input Node -->
  <g transform="translate(60, 230)" filter="url(#shadow)">
    <circle cx="30" cy="30" r="30" fill="#1a1a2e" stroke="${theme.accent}" stroke-width="2"/>
    <text x="30" y="26" font-size="20" text-anchor="middle">📥</text>
    <text x="30" y="44" font-family="system-ui, sans-serif" font-size="10" fill="#fff" text-anchor="middle">INPUT</text>
  </g>
  
  <!-- Service Layer -->
  <g transform="translate(160, 160)" filter="url(#shadow)">
    <rect width="140" height="160" rx="12" fill="#1a1a2e" stroke="url(#serviceGrad)" stroke-width="2"/>
    <rect width="140" height="30" rx="12" fill="url(#serviceGrad)" clip-path="inset(0 0 130px 0 round 12px)"/>
    <text x="70" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#000" text-anchor="middle">⚡ SERVICES</text>
    ${architecture.services.modules
      .map(
        (m, i) => `
    <g transform="translate(16, ${45 + i * 38})">
      <text x="0" y="14" font-size="16">${m.icon}</text>
      <text x="28" y="14" font-family="system-ui, sans-serif" font-size="11" fill="#fff">${m.name}</text>
      <circle cx="120" cy="8" r="4" fill="${theme.accent}"/>
    </g>`
      )
      .join('')}
  </g>
  
  <!-- AIOS Core -->
  <g transform="translate(330, 120)" filter="url(#shadow)">
    <rect width="180" height="240" rx="16" fill="#1a1a2e" stroke="url(#coreGrad)" stroke-width="3"/>
    <rect width="180" height="36" rx="16" fill="url(#coreGrad)" clip-path="inset(0 0 204px 0 round 16px)"/>
    <text x="90" y="24" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">🧠 AIOS CORE</text>
    ${architecture.core.modules
      .map(
        (m, i) => `
    <g transform="translate(16, ${55 + i * 46})">
      <rect width="148" height="38" rx="8" fill="${theme.primary}22" stroke="${theme.primary}44" stroke-width="1"/>
      <text x="14" y="25" font-size="18">${m.icon}</text>
      <text x="42" y="25" font-family="system-ui, sans-serif" font-size="11" fill="#fff">${m.name}</text>
    </g>`
      )
      .join('')}
  </g>
  
  <!-- Security Layer -->
  <g transform="translate(540, 160)" filter="url(#shadow)">
    <rect width="140" height="160" rx="12" fill="#1a1a2e" stroke="url(#securityGrad)" stroke-width="2"/>
    <rect width="140" height="30" rx="12" fill="url(#securityGrad)" clip-path="inset(0 0 130px 0 round 12px)"/>
    <text x="70" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#fff" text-anchor="middle">🔒 SECURITY</text>
    ${architecture.security.modules
      .map(
        (m, i) => `
    <g transform="translate(16, ${45 + i * 38})">
      <text x="0" y="14" font-size="16">${m.icon}</text>
      <text x="28" y="14" font-family="system-ui, sans-serif" font-size="11" fill="#fff">${m.name}</text>
      <circle cx="120" cy="8" r="4" fill="${theme.accent}"/>
    </g>`
      )
      .join('')}
  </g>
  
  <!-- Output Node -->
  <g transform="translate(710, 230)" filter="url(#shadow)">
    <circle cx="30" cy="30" r="30" fill="#1a1a2e" stroke="${theme.accent}" stroke-width="2"/>
    <text x="30" y="26" font-size="20" text-anchor="middle">📤</text>
    <text x="30" y="44" font-family="system-ui, sans-serif" font-size="10" fill="#fff" text-anchor="middle">OUTPUT</text>
  </g>
  
  <!-- Connection Lines -->
  <g stroke="${theme.accent}" stroke-width="2" fill="none" opacity="0.6">
    <!-- Input to Services -->
    <path d="M 120 260 Q 140 260 160 240" marker-end="url(#arrow)"/>
    <!-- Services to Core -->
    <path d="M 300 240 L 330 240"/>
    <!-- Core to Security -->
    <path d="M 510 240 L 540 240"/>
    <!-- Security to Output -->
    <path d="M 680 240 Q 700 240 710 260"/>
  </g>
  
  <!-- Flow Arrows -->
  <defs>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="${theme.accent}"/>
    </marker>
  </defs>
  
  <!-- Metrics Footer -->
  <g transform="translate(0, 420)">
    <rect x="60" y="0" width="680" height="60" rx="12" fill="#1a1a2e88" stroke="${theme.primary}44" stroke-width="1"/>
    <text x="120" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">🧪 <tspan font-weight="700" fill="${theme.accent}">170</tspan> Tests</text>
    <text x="260" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">🛡️ <tspan font-weight="700" fill="${theme.accent}">97.6%</tspan> Secure</text>
    <text x="400" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">🔧 <tspan font-weight="700" fill="${theme.accent}">124+</tspan> Tools</text>
    <text x="540" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">📦 <tspan font-weight="700" fill="${theme.accent}">769+</tspan> Modules</text>
    <text x="680" y="36" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">📊 <tspan font-weight="700" fill="${theme.accent}">15.8K</tspan> LOC</text>
  </g>
</svg>`.trim();
}
