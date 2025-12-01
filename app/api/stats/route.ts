import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '../../../lib/config';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  return NextResponse.json({
    metrics: AIOS_CONFIG.metrics,
    computed: {
      totalModules: AIOS_CONFIG.metrics.pythonModules,
      securityScore: `${AIOS_CONFIG.metrics.attackResistance}%`,
      toolCount: AIOS_CONFIG.metrics.aiTools,
      codebaseSize: `${(AIOS_CONFIG.metrics.linesOfCode / 1000).toFixed(1)}K LOC`,
    },
    lastUpdated: new Date().toISOString(),
  }, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
