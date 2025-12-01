import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '@/lib/config';
import { generateMetricCardSVG } from '@/lib/svg-generator';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const style = searchParams.get('style') || 'default';

  const metrics = [
    { label: 'Security Tests', value: AIOS_CONFIG.metrics.securityTests, icon: '🧪' },
    { label: 'Attack Resistance', value: `${AIOS_CONFIG.metrics.attackResistance}%`, icon: '🛡️' },
    { label: 'AI Tools', value: `${AIOS_CONFIG.metrics.aiTools}+`, icon: '🔧' },
    { label: 'Python Modules', value: `${AIOS_CONFIG.metrics.pythonModules}+`, icon: '📦' },
    { label: 'Lines of Code', value: `${(AIOS_CONFIG.metrics.linesOfCode / 1000).toFixed(1)}K`, icon: '📊' },
  ];

  const svg = generateMetricCardSVG('AIOS Metrics', metrics);

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
