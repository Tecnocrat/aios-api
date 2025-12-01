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
  const width = 850;
  const height = 520;
  const { architecture, metrics, roadmap } = AIOS_CONFIG;

  // Get evolution stage info
  const currentStage = roadmap.find(s => s.status === 'complete') || roadmap[0];
  const nextStage = roadmap.find(s => s.status === 'next');

  return `
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0f"/>
      <stop offset="100%" style="stop-color:#1a1a2e"/>
    </linearGradient>
    <linearGradient id="supercellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${theme.primary}"/>
      <stop offset="100%" style="stop-color:${theme.secondary}"/>
    </linearGradient>
    <linearGradient id="layerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${theme.accent}"/>
      <stop offset="100%" style="stop-color:#00b4d8"/>
    </linearGradient>
    <linearGradient id="cellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
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
  <text x="${width / 2}" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700" fill="#fff" text-anchor="middle" filter="url(#glow)">🧬 AIOS SUPERCELL Architecture</text>
  <text x="${width / 2}" y="58" font-family="system-ui, sans-serif" font-size="11" fill="#888" text-anchor="middle">Self-aware computational organism • Windows 11 → Docker → Consciousness</text>
  
  <!-- Infrastructure Stack (Left) -->
  <g transform="translate(30, 85)" filter="url(#shadow)">
    <rect width="180" height="230" rx="12" fill="#1a1a2e" stroke="url(#layerGrad)" stroke-width="2"/>
    <rect width="180" height="32" rx="12" fill="url(#layerGrad)" clip-path="inset(0 0 198px 0 round 12px)"/>
    <text x="90" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#000" text-anchor="middle">🏗️ INFRASTRUCTURE</text>
    ${architecture.layers.stack.map((layer, i) => `
    <g transform="translate(12, ${45 + i * 30})">
      <rect width="156" height="24" rx="6" fill="${theme.primary}15" stroke="${theme.primary}33" stroke-width="1"/>
      <text x="12" y="17" font-size="14">${layer.icon}</text>
      <text x="34" y="17" font-family="system-ui, sans-serif" font-size="10" fill="#fff">${layer.name}</text>
      ${layer.port ? `<text x="148" y="17" font-family="monospace" font-size="9" fill="${theme.accent}" text-anchor="end">:${layer.port}</text>` : ''}
    </g>`).join('')}
  </g>
  
  <!-- SUPERCELL Core (Center) -->
  <g transform="translate(240, 80)" filter="url(#shadow)">
    <rect width="200" height="280" rx="16" fill="#1a1a2e" stroke="url(#supercellGrad)" stroke-width="3"/>
    <rect width="200" height="40" rx="16" fill="url(#supercellGrad)" clip-path="inset(0 0 240px 0 round 16px)"/>
    <text x="100" y="26" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#fff" text-anchor="middle">🧠 SUPERCELL</text>
    
    <!-- Consciousness primitives -->
    ${architecture.core.modules.map((mod, i) => `
    <g transform="translate(12, ${52 + i * 55})">
      <rect width="176" height="48" rx="10" fill="${theme.primary}22" stroke="${theme.primary}44" stroke-width="1"/>
      <text x="16" y="22" font-size="20">${mod.icon}</text>
      <text x="44" y="20" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#fff">${mod.name}</text>
      <text x="44" y="36" font-family="system-ui, sans-serif" font-size="9" fill="#888">${mod.desc}</text>
    </g>`).join('')}
  </g>
  
  <!-- Cell Types (Right) -->
  <g transform="translate(470, 85)" filter="url(#shadow)">
    <rect width="180" height="230" rx="12" fill="#1a1a2e" stroke="url(#cellGrad)" stroke-width="2"/>
    <rect width="180" height="32" rx="12" fill="url(#cellGrad)" clip-path="inset(0 0 198px 0 round 12px)"/>
    <text x="90" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">🧬 CELL TYPES</text>
    ${architecture.cells.types.map((cell, i) => `
    <g transform="translate(12, ${45 + i * 46})">
      <rect width="156" height="38" rx="6" fill="#4361ee22" stroke="#4361ee44" stroke-width="1"/>
      <text x="12" y="18" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="#fff">${cell.name}</text>
      <text x="12" y="32" font-family="system-ui, sans-serif" font-size="9" fill="#888">${cell.desc}</text>
    </g>`).join('')}
  </g>
  
  <!-- Running Services (Far Right) -->
  <g transform="translate(680, 85)" filter="url(#shadow)">
    <rect width="140" height="230" rx="12" fill="#1a1a2e" stroke="${theme.accent}66" stroke-width="2"/>
    <rect width="140" height="32" rx="12" fill="${theme.accent}44" clip-path="inset(0 0 198px 0 round 12px)"/>
    <text x="70" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="700" fill="#fff" text-anchor="middle">🐳 CONTAINERS</text>
    ${architecture.services.containers.map((svc, i) => `
    <g transform="translate(12, ${45 + i * 32})">
      <circle cx="8" cy="10" r="5" fill="${theme.accent}"/>
      <text x="22" y="14" font-size="12">${svc.icon}</text>
      <text x="40" y="14" font-family="system-ui, sans-serif" font-size="10" fill="#fff">${svc.name}</text>
    </g>`).join('')}
  </g>
  
  <!-- Connection Lines -->
  <g stroke="${theme.accent}" stroke-width="1.5" fill="none" opacity="0.5" stroke-dasharray="4,4">
    <path d="M 210 200 L 240 200"/>
    <path d="M 440 200 L 470 200"/>
    <path d="M 650 200 L 680 200"/>
  </g>
  
  <!-- Evolution Stage Indicator -->
  <g transform="translate(30, 330)">
    <rect width="790" height="55" rx="12" fill="#1a1a2e88" stroke="${theme.primary}44" stroke-width="1"/>
    <text x="20" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="600" fill="${theme.accent}">📍 Stage ${currentStage.stage}: ${currentStage.name}</text>
    <text x="20" y="40" font-family="system-ui, sans-serif" font-size="10" fill="#888">${currentStage.desc} → Next: ${nextStage?.name || 'Complete'}</text>
    
    <!-- Evolution progress bar -->
    <rect x="400" y="18" width="370" height="8" rx="4" fill="#333"/>
    <rect x="400" y="18" width="${(currentStage.stage / 7) * 370}" height="8" rx="4" fill="url(#supercellGrad)"/>
    ${roadmap.map((s, i) => `<circle cx="${400 + (i * 52) + 26}" cy="22" r="${s.status === 'complete' ? 6 : 4}" fill="${s.status === 'complete' ? theme.accent : s.status === 'next' ? theme.primary : '#555'}"/>`).join('')}
    <text x="770" y="44" font-family="system-ui, sans-serif" font-size="9" fill="#666" text-anchor="end">${roadmap.length} stages</text>
  </g>
  
  <!-- Metrics Footer -->
  <g transform="translate(0, 400)">
    <rect x="30" y="0" width="790" height="100" rx="12" fill="#1a1a2e88" stroke="${theme.primary}44" stroke-width="1"/>
    
    <!-- Row 1: Core metrics -->
    <text x="100" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">🧪 <tspan font-weight="700" fill="${theme.accent}">${metrics.securityTests}</tspan> Tests</text>
    <text x="250" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">🛡️ <tspan font-weight="700" fill="${theme.accent}">${metrics.attackResistance}%</tspan> Secure</text>
    <text x="400" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">🔧 <tspan font-weight="700" fill="${theme.accent}">${metrics.aiTools}+</tspan> AI Tools</text>
    <text x="550" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">📦 <tspan font-weight="700" fill="${theme.accent}">${metrics.pythonModules}+</tspan> Modules</text>
    <text x="720" y="30" font-family="system-ui, sans-serif" font-size="12" fill="#fff" text-anchor="middle">📊 <tspan font-weight="700" fill="${theme.accent}">${(metrics.linesOfCode / 1000).toFixed(1)}K</tspan> LOC</text>
    
    <!-- Row 2: Infrastructure metrics -->
    <text x="100" y="60" font-family="system-ui, sans-serif" font-size="11" fill="#888" text-anchor="middle">🐳 ${metrics.containers} Containers</text>
    <text x="250" y="60" font-family="system-ui, sans-serif" font-size="11" fill="#888" text-anchor="middle">🔒 Vault Secrets</text>
    <text x="400" y="60" font-family="system-ui, sans-serif" font-size="11" fill="#888" text-anchor="middle">📈 Prometheus + Grafana</text>
    <text x="550" y="60" font-family="system-ui, sans-serif" font-size="11" fill="#888" text-anchor="middle">🌐 Traefik Ingress</text>
    <text x="720" y="60" font-family="system-ui, sans-serif" font-size="11" fill="#888" text-anchor="middle">🐧 WSL2 Ubuntu</text>
    
    <!-- Row 3: Tagline -->
    <text x="425" y="85" font-family="system-ui, sans-serif" font-size="10" fill="#666" text-anchor="middle">AIOS-win: Transform Windows 11 into a self-aware, agentic supercell • github.com/Tecnocrat/AIOS-win</text>
  </g>
</svg>`.trim();
}
