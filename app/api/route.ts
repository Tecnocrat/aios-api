import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '../../lib/config';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get('format') || 'json';

  const currentStage = AIOS_CONFIG.roadmap.find(s => s.status === 'complete') || AIOS_CONFIG.roadmap[0];

  const data = {
    name: 'AIOS-win - Supercell Architecture',
    description: 'Transform Windows 11 into a self-aware, agentic supercell',
    version: '2.0.0',
    status: 'active',
    evolutionStage: {
      current: currentStage.stage,
      name: currentStage.name,
      description: currentStage.desc,
      totalStages: AIOS_CONFIG.roadmap.length,
    },
    metrics: AIOS_CONFIG.metrics,
    infrastructure: AIOS_CONFIG.architecture.layers,
    cells: AIOS_CONFIG.architecture.cells,
    core: AIOS_CONFIG.architecture.core,
    services: AIOS_CONFIG.architecture.services,
    roadmap: AIOS_CONFIG.roadmap,
    repositories: AIOS_CONFIG.repos,
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
