import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '../../lib/config';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';

  const data = {
    name: 'AIOS - Adaptive Intelligence Operating System',
    version: '2.0.0',
    status: 'active',
    metrics: AIOS_CONFIG.metrics,
    architecture: AIOS_CONFIG.architecture,
    repository: AIOS_CONFIG.repo,
    api: {
      endpoints: [
        { path: '/api/stats', description: 'Get AIOS statistics' },
        { path: '/api/badge/:metric', description: 'Get dynamic badge SVG' },
        { path: '/api/architecture', description: 'Get architecture diagram SVG' },
        { path: '/api/card', description: 'Get stats card SVG' },
      ],
    },
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
