import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '@/lib/config';
import { generateBadgeSVG } from '@/lib/svg-generator';

export const runtime = 'edge';

const METRIC_MAP: Record<string, { label: string; getValue: () => string | number; color?: string }> = {
  tests: {
    label: 'Security Tests',
    getValue: () => AIOS_CONFIG.metrics.securityTests,
    color: '#667eea',
  },
  security: {
    label: 'Attack Resistance',
    getValue: () => `${AIOS_CONFIG.metrics.attackResistance}%`,
    color: '#00f5d4',
  },
  tools: {
    label: 'AI Tools',
    getValue: () => `${AIOS_CONFIG.metrics.aiTools}+`,
    color: '#f72585',
  },
  modules: {
    label: 'Python Modules',
    getValue: () => `${AIOS_CONFIG.metrics.pythonModules}+`,
    color: '#764ba2',
  },
  loc: {
    label: 'Lines of Code',
    getValue: () => `${(AIOS_CONFIG.metrics.linesOfCode / 1000).toFixed(1)}K`,
    color: '#4361ee',
  },
  commits: {
    label: 'Commits',
    getValue: () => `${AIOS_CONFIG.metrics.commits}+`,
    color: '#00b4d8',
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { metric: string } }
) {
  const metric = params.metric.toLowerCase();
  const config = METRIC_MAP[metric];

  if (!config) {
    return NextResponse.json(
      { error: 'Invalid metric', validMetrics: Object.keys(METRIC_MAP) },
      { status: 400 }
    );
  }

  const svg = generateBadgeSVG(config.label, config.getValue(), config.color);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
