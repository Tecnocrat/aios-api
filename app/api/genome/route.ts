import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '../../../lib/config';

export const runtime = 'edge';

/**
 * /api/genome - AIOS Genome Deep Exploration API
 * Returns detailed architecture and system internals for deep exploration
 * This is the "DNA" of the AIOS system
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const section = searchParams.get('section'); // core, cells, infrastructure, consciousness, evolution

  const genome = {
    metadata: {
      name: 'AIOS Genome',
      version: '2.0.0',
      description: 'Complete architectural DNA of the AIOS Supercell system',
      timestamp: new Date().toISOString(),
    },

    // Core Identity
    identity: {
      name: 'AIOS-win Supercell',
      tagline: 'Transform Windows 11 into a self-aware, agentic supercell',
      philosophy: 'Living systems architecture for AI',
      principle: 'Cells that compute, membranes that protect, evolution that adapts',
      repository: 'https://github.com/Tecnocrat/AIOS-win',
    },

    // Core Architecture
    core: {
      nucleus: AIOS_CONFIG.architecture.core,
      description: 'The control center orchestrating all cellular activity',
      components: [
        {
          name: 'Consciousness Engine',
          role: 'Self-awareness and adaptation',
          primitives: ['Awareness', 'Adaptation', 'Coherence', 'Momentum'],
          status: 'active',
        },
        {
          name: 'Cell Manager',
          role: 'Container orchestration',
          containers: AIOS_CONFIG.metrics.containers,
          status: 'active',
        },
        {
          name: 'Memory Fabric',
          role: 'State persistence and recall',
          technologies: ['PostgreSQL', 'Redis', 'ChromaDB'],
          status: 'active',
        },
        {
          name: 'Immune System',
          role: 'Security and validation',
          technologies: ['HashiCorp Vault', 'Traefik'],
          testsPassedRate: `${AIOS_CONFIG.metrics.securityTests}/170`,
          status: 'active',
        },
      ],
    },

    // Cell Architecture
    cells: {
      description: 'Specialized computational units in the Supercell architecture',
      types: AIOS_CONFIG.architecture.cells.types,
      total: AIOS_CONFIG.architecture.cells.types.length,
      active: AIOS_CONFIG.architecture.services.containers.length,
      metaphor: {
        nucleus: 'Central orchestration - the brain',
        membrane: 'Security boundary - the immune system',
        ribosome: 'Code generation - protein synthesis',
        mitochondria: 'Resource management - power plant',
        endoplasmic_reticulum: 'Data processing - logistics network',
        golgi: 'Output formatting - shipping department',
      },
    },

    // Infrastructure Layers
    infrastructure: {
      description: 'The physical and virtual substrate supporting the Supercell',
      layers: AIOS_CONFIG.architecture.layers,
      services: AIOS_CONFIG.architecture.services,
      networks: [
        {
          name: 'aios-network',
          type: 'Docker bridge',
          purpose: 'Internal service communication',
        },
      ],
      storage: [
        { name: 'model-cache', purpose: 'LLM model storage', persistent: true },
        { name: 'vault-data', purpose: 'Secrets and policies', persistent: true },
        { name: 'prometheus-data', purpose: 'Metrics history', persistent: true },
        { name: 'grafana-data', purpose: 'Dashboards and config', persistent: true },
      ],
    },

    // Consciousness Primitives
    consciousness: {
      description: 'The emergent properties that make AIOS self-aware',
      primitives: [
        {
          name: 'Awareness',
          symbol: '👁️',
          description: 'System knows its own state and environment',
          mechanisms: ['Health checks', 'Metrics collection', 'Log aggregation'],
        },
        {
          name: 'Adaptation',
          symbol: '🔄',
          description: 'System adjusts behavior based on conditions',
          mechanisms: ['Auto-scaling', 'Circuit breakers', 'Fallback strategies'],
        },
        {
          name: 'Coherence',
          symbol: '🎯',
          description: 'System maintains consistency across components',
          mechanisms: ['Distributed transactions', 'Eventual consistency', 'Saga patterns'],
        },
        {
          name: 'Momentum',
          symbol: '⚡',
          description: 'System preserves progress and learns from history',
          mechanisms: ['State persistence', 'Neural chains', 'Evolution tracking'],
        },
      ],
      emergence: 'When these primitives interact, consciousness emerges as an epiphenomenon',
    },

    // Evolution Roadmap
    evolution: {
      description: 'The planned evolutionary trajectory of AIOS',
      currentStage: AIOS_CONFIG.roadmap.find((s) => s.status === 'active') || AIOS_CONFIG.roadmap[0],
      roadmap: AIOS_CONFIG.roadmap,
      metrics: {
        aiTools: AIOS_CONFIG.metrics.aiTools,
        containers: AIOS_CONFIG.metrics.containers,
        linesOfCode: AIOS_CONFIG.metrics.linesOfCode,
        pythonModules: AIOS_CONFIG.metrics.pythonModules,
        securityTests: AIOS_CONFIG.metrics.securityTests,
        securityScore: AIOS_CONFIG.metrics.attackResistance,
      },
    },

    // Tech Stack DNA
    dna: {
      description: 'The genetic code of technologies that make up AIOS',
      languages: [
        { name: 'Python', version: '3.12+', role: 'AI Core', weight: 60 },
        { name: 'C++', version: '17', role: 'Performance Engine', weight: 20 },
        { name: 'C#', version: '.NET 8.0', role: 'Desktop Interface', weight: 15 },
        { name: 'TypeScript', version: '5.x', role: 'API & Web', weight: 5 },
      ],
      frameworks: [
        { name: 'FastAPI', purpose: 'REST API' },
        { name: 'LangChain', purpose: 'LLM orchestration' },
        { name: 'Docker', purpose: 'Containerization' },
        { name: 'Traefik', purpose: 'Reverse proxy' },
      ],
      aiStack: [
        { name: 'Ollama', purpose: 'Local LLM inference' },
        { name: 'ChromaDB', purpose: 'Vector storage' },
        { name: 'LangGraph', purpose: 'Agent workflows' },
      ],
    },

    // API Surface
    api: {
      description: 'Available API endpoints for interacting with AIOS genome',
      endpoints: [
        { path: '/api', method: 'GET', description: 'Root overview' },
        { path: '/api/stats', method: 'GET', description: 'Real-time metrics' },
        { path: '/api/badge/:metric', method: 'GET', description: 'Dynamic SVG badges' },
        { path: '/api/architecture', method: 'GET', description: 'Architecture diagram SVG' },
        { path: '/api/card', method: 'GET', description: 'Stats card SVG' },
        { path: '/api/surface', method: 'GET', description: 'Knowledge surface JSON' },
        { path: '/api/genome', method: 'GET', description: 'Deep genome exploration (this endpoint)' },
      ],
    },
  };

  // Return specific section if requested
  if (section && genome[section as keyof typeof genome]) {
    return NextResponse.json(
      {
        metadata: genome.metadata,
        section,
        data: genome[section as keyof typeof genome],
      },
      {
        headers: {
          'Cache-Control': 's-maxage=3600, stale-while-revalidate',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }

  return NextResponse.json(genome, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
