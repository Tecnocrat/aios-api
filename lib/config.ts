// AIOS Configuration - Central metrics and theming
export const AIOS_CONFIG = {
  // Core Metrics
  metrics: {
    securityTests: 170,
    attackResistance: 97.6,
    aiTools: 124,
    pythonModules: 769,
    linesOfCode: 15847,
    commits: 658,
  },
  
  // Architecture Components
  architecture: {
    core: {
      name: 'AIOS CORE',
      modules: [
        { id: 'adaptive', name: 'Adaptive Framework', icon: '🔄', status: 'active' },
        { id: 'neural', name: 'Neural Intelligence', icon: '🧬', status: 'active' },
        { id: 'immune', name: 'Immune System', icon: '🛡️', status: 'active' },
        { id: 'memory', name: 'Memory Matrix', icon: '💾', status: 'active' },
      ],
    },
    services: {
      name: 'Service Layer',
      modules: [
        { id: 'http', name: 'HTTP Bridge', icon: '🌐', status: 'active' },
        { id: 'websocket', name: 'WebSocket', icon: '📡', status: 'active' },
        { id: 'mcp', name: 'MCP Server', icon: '🔌', status: 'active' },
      ],
    },
    security: {
      name: 'Security Layer',
      modules: [
        { id: 'auth', name: 'Authentication', icon: '🔐', status: 'active' },
        { id: 'crypto', name: 'Encryption', icon: '🔏', status: 'active' },
        { id: 'audit', name: 'Audit Trail', icon: '📋', status: 'active' },
      ],
    },
  },
  
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
  repo: {
    owner: 'Tecnocrat',
    name: 'AIOS',
    url: 'https://github.com/Tecnocrat/AIOS',
  },
};
