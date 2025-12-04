import { NextRequest, NextResponse } from 'next/server';
import { AIOS_CONFIG } from '../../../lib/config';

export const runtime = 'edge';

/**
 * /api/surface - Knowledge Surface API
 * Returns the publicly exposed AIOS knowledge surface as JSON
 * Mirrors the exposed_surface.yaml manifest
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const level = searchParams.get('level') || 'all'; // L0_PUBLIC, L1_PROFESSIONAL, L2_TECHNICAL, all
  const category = searchParams.get('category'); // supercell, security, evolution, runtime, infrastructure, stack

  const surface = {
    metadata: {
      version: '2.0.0',
      lastSync: new Date().toISOString().split('T')[0],
      curator: 'Tecnocrat',
      sourceManifest: 'exposed_surface.yaml',
      apiEndpoint: 'https://tecnocrat-api.vercel.app/api',
    },

    exposureLevels: {
      L0_PUBLIC: { name: 'Public', description: 'Visible to everyone' },
      L1_PROFESSIONAL: { name: 'Professional', description: 'Recruiters, collaborators' },
      L2_TECHNICAL: { name: 'Technical', description: 'Developers, researchers' },
    },

    surface: {
      supercell: {
        name: 'Supercell Architecture',
        description: 'Transform Windows 11 into a containerized AI-driven operating environment',
        exposed: [
          {
            id: 'core_concept',
            name: 'Core Concept',
            level: 'L2_TECHNICAL',
            description: 'Living systems architecture for AI',
            displayContent: {
              title: 'Supercell Architecture',
              tagline: 'Windows 11 as a self-aware, agentic supercell',
              layers: ['Nucleus (Core)', 'Membrane (Security)', 'Organelles (Containers)', 'Cytoplasm (Runtime)'],
            },
          },
          {
            id: 'cell_types',
            name: 'Cell Types',
            level: 'L2_TECHNICAL',
            description: 'Specialized container types in the Supercell architecture',
            displayContent: {
              cells: AIOS_CONFIG.architecture.cells,
            },
          },
          {
            id: 'philosophy',
            name: 'Philosophy',
            level: 'L1_PROFESSIONAL',
            description: 'Biological-inspired AI system design',
            displayContent: {
              tagline: 'Living systems architecture for AI',
              principle: 'Cells that compute, membranes that protect, evolution that adapts',
            },
          },
        ],
      },

      security: {
        name: 'Security Membrane',
        description: 'Digital immune system with membrane validation',
        exposed: [
          {
            id: 'architecture_patterns',
            name: 'Architecture Patterns',
            level: 'L2_TECHNICAL',
            description: 'Digital immune system design',
            displayContent: {
              concept: 'Digital Immune System',
              patterns: ['Membrane Validation', 'Coherence Enforcement', 'Immune Memory', 'Attack Resistance'],
              testsPassed: `${AIOS_CONFIG.metrics.securityTests}/170`,
              securityScore: `${AIOS_CONFIG.metrics.attackResistance}%`,
            },
          },
          {
            id: 'concept_overview',
            name: 'Concept Overview',
            level: 'L1_PROFESSIONAL',
            description: 'Security-first AI development approach',
            displayContent: {
              tagline: 'Biological-inspired security for AI systems',
              features: ['HashiCorp Vault integration', 'Traefik reverse proxy', 'Container isolation'],
            },
          },
        ],
      },

      evolution: {
        name: 'Evolution Lab',
        description: 'Multi-agent code generation and AI experimentation',
        exposed: [
          {
            id: 'successful_experiments',
            name: 'Successful Experiments',
            level: 'L2_TECHNICAL',
            description: 'Multi-agent code generation results',
            displayContent: {
              agents: ['Ollama (local)', 'Gemini', 'DeepSeek', 'Claude', 'GPT-4'],
              capability: 'Parallel code generation and cross-validation',
              tools: AIOS_CONFIG.metrics.aiTools,
            },
          },
          {
            id: 'methodology',
            name: 'Methodology',
            level: 'L1_PROFESSIONAL',
            description: 'AI-assisted development approach',
            displayContent: {
              approach: 'Human-guided AI experimentation with evolution tracking',
              outputs: ['Generated code', 'Conversation logs', 'Evolution history', 'Neural chains'],
            },
          },
        ],
      },

      runtime: {
        name: 'Runtime Intelligence',
        description: 'Real-time monitoring and AI orchestration',
        exposed: [
          {
            id: 'ai_tools',
            name: 'AI Tools',
            level: 'L0_PUBLIC',
            description: `${AIOS_CONFIG.metrics.aiTools} integrated AI tools`,
            displayContent: {
              count: AIOS_CONFIG.metrics.aiTools,
              label: 'AI Tools',
            },
          },
          {
            id: 'containers',
            name: 'Container Fleet',
            level: 'L1_PROFESSIONAL',
            description: `${AIOS_CONFIG.metrics.containers} specialized Docker containers`,
            displayContent: {
              count: AIOS_CONFIG.metrics.containers,
              services: AIOS_CONFIG.architecture.services.containers.map((c) => c.name),
            },
          },
          {
            id: 'capabilities',
            name: 'Capabilities',
            level: 'L1_PROFESSIONAL',
            description: 'Monitoring, diagnostics, optimization',
            displayContent: {
              features: ['System health checks', 'Performance monitoring', 'Architecture validation', 'Self-healing'],
            },
          },
        ],
      },

      infrastructure: {
        name: 'Infrastructure Layer',
        description: 'Docker orchestration and observability',
        exposed: [
          {
            id: 'docker_compose',
            name: 'Container Orchestration',
            level: 'L2_TECHNICAL',
            description: 'Docker Compose multi-service stack',
            displayContent: {
              services: AIOS_CONFIG.metrics.containers,
              networks: ['aios-network'],
              volumes: ['persistent state', 'model cache', 'secrets'],
            },
          },
          {
            id: 'observability',
            name: 'Observability Stack',
            level: 'L2_TECHNICAL',
            description: 'Full observability with Prometheus + Grafana',
            displayContent: {
              metrics: 'Prometheus',
              visualization: 'Grafana',
              logging: 'Structured JSON',
            },
          },
        ],
      },

      stack: {
        name: 'Technology Stack',
        description: 'Multi-language AI platform',
        exposed: [
          {
            id: 'languages',
            name: 'Languages',
            level: 'L0_PUBLIC',
            description: 'Python 3.12+, C++17, C# .NET 8.0, TypeScript 5.x',
            displayContent: {
              languages: [
                { name: 'Python', version: '3.12+', role: 'AI Core & Orchestration' },
                { name: 'C++', version: '17', role: 'Performance Engine' },
                { name: 'C#', version: '.NET 8.0', role: 'Desktop Interface' },
                { name: 'TypeScript', version: '5.x', role: 'API & Web' },
              ],
            },
          },
          {
            id: 'architecture',
            name: 'Architecture',
            level: 'L2_TECHNICAL',
            description: 'Multi-language coordination via HTTP API',
            displayContent: {
              pattern: 'Supercell Interface Bridge',
              port: 8000,
              protocol: 'HTTP/REST + WebSocket',
              linesOfCode: AIOS_CONFIG.metrics.linesOfCode,
            },
          },
        ],
      },
    },

    stats: {
      aiTools: AIOS_CONFIG.metrics.aiTools,
      containers: AIOS_CONFIG.metrics.containers,
      linesOfCode: AIOS_CONFIG.metrics.linesOfCode,
      testsPassed: AIOS_CONFIG.metrics.securityTests,
      pythonModules: AIOS_CONFIG.metrics.pythonModules,
      securityScore: AIOS_CONFIG.metrics.attackResistance,
    },

    timestamp: new Date().toISOString(),
  };

  // Filter by category if specified
  let result: any = surface;
  if (category && surface.surface[category as keyof typeof surface.surface]) {
    result = {
      ...surface,
      surface: {
        [category]: surface.surface[category as keyof typeof surface.surface],
      },
    };
  }

  // Filter by level if specified
  if (level !== 'all') {
    const filteredSurface: Record<string, any> = {};
    for (const [key, value] of Object.entries(result.surface)) {
      const cat = value as { name: string; description: string; exposed: Array<{ level: string }> };
      const filteredExposed = cat.exposed.filter((item) => item.level === level);
      if (filteredExposed.length > 0) {
        filteredSurface[key] = { name: cat.name, description: cat.description, exposed: filteredExposed };
      }
    }
    result = { ...result, surface: filteredSurface };
  }

  return NextResponse.json(result, {
    headers: {
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
