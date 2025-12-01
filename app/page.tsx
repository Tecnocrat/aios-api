export default function HomePage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
    }}>
      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 700,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #00f5d4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1rem',
        }}>
          🧠 AIOS API
        </h1>
        
        <p style={{
          fontSize: '1.25rem',
          color: '#888',
          marginBottom: '3rem',
        }}>
          Adaptive Intelligence Operating System Infrastructure
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          textAlign: 'left',
        }}>
          <EndpointCard
            title="📊 Stats API"
            endpoint="/api/stats"
            description="Get AIOS metrics in JSON format"
          />
          <EndpointCard
            title="🏗️ Architecture"
            endpoint="/api/architecture"
            description="Dynamic SVG architecture diagram"
          />
          <EndpointCard
            title="🎫 Badges"
            endpoint="/api/badge/[metric]"
            description="Dynamic metric badges (tests, security, tools, modules, loc)"
          />
          <EndpointCard
            title="🃏 Stats Card"
            endpoint="/api/card"
            description="Comprehensive metrics card SVG"
          />
        </div>

        <div style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(102, 126, 234, 0.2)',
        }}>
          <h3 style={{ marginBottom: '1rem', color: '#667eea' }}>Quick Start</h3>
          <code style={{
            display: 'block',
            padding: '1rem',
            background: '#0a0a0f',
            borderRadius: '8px',
            fontSize: '0.9rem',
          }}>
            {'<img src="https://aios-api.vercel.app/api/architecture" />'}
          </code>
        </div>

        <p style={{
          marginTop: '2rem',
          color: '#666',
          fontSize: '0.9rem',
        }}>
          Built by <a href="https://github.com/Tecnocrat" style={{ color: '#00f5d4' }}>@Tecnocrat</a> • 
          <a href="https://github.com/Tecnocrat/AIOS" style={{ color: '#667eea', marginLeft: '0.5rem' }}>View AIOS Repository</a>
        </p>
      </div>
    </main>
  );
}

function EndpointCard({ title, endpoint, description }: { title: string; endpoint: string; description: string }) {
  return (
    <a href={endpoint} style={{
      display: 'block',
      padding: '1.5rem',
      background: 'rgba(26, 26, 46, 0.8)',
      borderRadius: '12px',
      border: '1px solid rgba(102, 126, 234, 0.3)',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
    }}>
      <h3 style={{ 
        fontSize: '1.1rem', 
        marginBottom: '0.5rem',
        color: '#fff',
      }}>{title}</h3>
      <code style={{
        display: 'block',
        color: '#00f5d4',
        fontSize: '0.85rem',
        marginBottom: '0.5rem',
      }}>{endpoint}</code>
      <p style={{
        color: '#888',
        fontSize: '0.9rem',
        margin: 0,
      }}>{description}</p>
    </a>
  );
}
