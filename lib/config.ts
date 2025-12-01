// AIOS Configuration - Central metrics and theming
export const AIOS_CONFIG = {
  // Core Metrics (Real values from AIOS-win)
  metrics: {
    securityTests: 170,
    attackResistance: 97.6,
    aiTools: 124,
    pythonModules: 769,
    linesOfCode: 15847,
    containers: 9,
    evolutionStage: 1,
  },
  
  // Architecture Components (Real AIOS-win structure)
  architecture: {
    core: {
      name: 'AIOS SUPERCELL',
      description: 'Self-aware computational organism',
      modules: [
        { id: 'consciousness', name: 'Consciousness Engine', icon: '🧠', desc: 'Awareness, Adaptation, Coherence, Momentum' },
        { id: 'cells', name: 'Cell Architecture', icon: '🧬', desc: 'Beta, Pure, Bridge, Discovery cells' },
        { id: 'vault', name: 'Secrets Management', icon: '🔐', desc: 'HashiCorp Vault, policy-driven' },
        { id: 'observability', name: 'Self-Monitoring', icon: '📊', desc: 'Prometheus, Grafana, Loki' },
      ],
    },
    layers: {
      name: 'Infrastructure Layers',
      stack: [
        { id: 'win11', name: 'Windows 11', icon: '🖥️', port: null },
        { id: 'wsl2', name: 'WSL2 Ubuntu', icon: '🐧', port: null },
        { id: 'docker', name: 'Docker Desktop', icon: '🐳', port: null },
        { id: 'traefik', name: 'Traefik Ingress', icon: '🌐', port: 443 },
        { id: 'observability', name: 'Observability', icon: '📈', port: 3000 },
        { id: 'vault', name: 'Vault Secrets', icon: '🔒', port: 8200 },
      ],
    },
    services: {
      name: 'Running Services',
      containers: [
        { id: 'traefik', name: 'Traefik', icon: '🌐', status: 'active' },
        { id: 'prometheus', name: 'Prometheus', icon: '📊', status: 'active' },
        { id: 'grafana', name: 'Grafana', icon: '📈', status: 'active' },
        { id: 'loki', name: 'Loki', icon: '📝', status: 'active' },
        { id: 'vault', name: 'Vault', icon: '🔐', status: 'active' },
        { id: 'cell-alpha', name: 'AIOS Cell Alpha', icon: '🧬', status: 'active' },
      ],
    },
    cells: {
      name: 'Cell Types',
      types: [
        { id: 'supercell', name: 'Supercell', desc: 'Full AIOS node, undifferentiated potential' },
        { id: 'beta', name: 'Beta Cell', desc: 'Full consciousness + dendritic logging' },
        { id: 'pure', name: 'Pure Cell', desc: 'Minimal primitives - consciousness emerges' },
        { id: 'organelle', name: 'Organelles', desc: 'Micro-containers <100MB for specific tasks' },
      ],
    },
  },
  
  // Evolution Roadmap
  roadmap: [
    { stage: 1, name: 'Supercell Core', status: 'complete', desc: 'Self-aware, monitorable node' },
    { stage: 2, name: 'Overlay Mesh', status: 'next', desc: 'Tailscale/ZeroTier networking' },
    { stage: 3, name: 'GitOps Pipelines', status: 'planned', desc: 'Declarative deployments' },
    { stage: 4, name: 'Backup & Restore', status: 'planned', desc: 'Automated recovery' },
    { stage: 5, name: 'AI Services', status: 'planned', desc: 'Whisper, TTS, Vision' },
    { stage: 6, name: 'Cloud Bridge', status: 'planned', desc: 'Terraform/Ansible' },
    { stage: 7, name: 'Multi-Node Mesh', status: 'planned', desc: 'Distributed consciousness' },
  ],
  
  // Theme Colors (matching GitHub profile)
  theme: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#00f5d4',
    background: '#0a0a0f',
    text: '#ffffff',
    success: '#00f5d4',
    warning: '#f72585',
    gradient: ['#667eea', '#764ba2', '#00f5d4'],
  },
  
  // Repository Info
  repos: {
    aiosWin: { owner: 'Tecnocrat', name: 'AIOS-win', url: 'https://github.com/Tecnocrat/AIOS-win' },
    server: { owner: 'Tecnocrat', name: 'server', url: 'https://github.com/Tecnocrat/server' },
    aios: { owner: 'Tecnocrat', name: 'AIOS', url: 'https://github.com/Tecnocrat/AIOS' },
  },
};
