import { redirect } from 'next/navigation';

async function loginAction(formData: FormData) {
  'use server';

  const username = formData.get('username');
  const password = formData.get('password');

  // Simulate authentication
  if (username === 'admin' && password === 'admin') {
    redirect('/dashboard');
  }

  redirect('/login?error=invalid');
}

export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'system-ui, sans-serif',
      background: '#111',
      color: '#fff',
      padding: '2rem'
    }}>
      {/* Warning Banner */}
      <div style={{
        background: '#b91c1c',
        color: '#fff',
        padding: '1rem 2rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center',
        maxWidth: '600px',
        width: '100%'
      }}>
        <strong style={{ fontSize: '1.1rem' }}>FOR TESTING AND DEMONSTRATION ONLY</strong>
        <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', opacity: 0.9 }}>
          This is an intentionally vulnerable application for testing React2Shell Scanner.
          Do NOT deploy to production.
        </p>
      </div>

      <h1 style={{ marginBottom: '0.5rem', color: '#f44' }}>
        Vulnerable Next.js App
      </h1>

      {/* Version Info */}
      <div style={{
        background: '#222',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        <p style={{ margin: 0, color: '#888', fontSize: '0.875rem' }}>
          <strong style={{ color: '#f97316' }}>Next.js 15.0.4</strong> | React 19.0.0
        </p>
        <p style={{ margin: '0.5rem 0 0', color: '#ef4444', fontSize: '0.875rem' }}>
          CVE-2025-55182 & CVE-2025-66478
        </p>
      </div>

      <form action={loginAction} style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        padding: '2rem',
        background: '#222',
        borderRadius: '8px',
        minWidth: '300px'
      }}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          style={{
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #444',
            background: '#333',
            color: '#fff'
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          style={{
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #444',
            background: '#333',
            color: '#fff'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.75rem',
            borderRadius: '4px',
            border: 'none',
            background: '#f44',
            color: '#fff',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Login
        </button>
      </form>

      {/* Info Section */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        background: '#1a1a1a',
        borderRadius: '8px',
        border: '1px solid #333',
        maxWidth: '500px',
        width: '100%'
      }}>
        <h3 style={{ margin: '0 0 1rem', color: '#888', fontSize: '0.875rem' }}>
          Vulnerability Information
        </h3>
        <ul style={{
          margin: 0,
          padding: '0 0 0 1.25rem',
          color: '#666',
          fontSize: '0.8rem',
          lineHeight: '1.8'
        }}>
          <li>Next.js Server Components RCE</li>
          <li>Affects Next.js &lt; 15.1.2, &lt; 14.2.25, &lt; 13.5.9</li>
          <li>
            <a
              href="https://nextjs.org/blog/security-update-2025-12-11"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'underline' }}
            >
              Security Advisory (2025-12-11)
            </a>
          </li>
          <li>
            <a
              href="https://github.com/assetnote/react2shell-scanner"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#60a5fa', textDecoration: 'underline' }}
            >
              React2Shell Scanner (GitHub)
            </a>
          </li>
        </ul>
      </div>

      <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: '#444', textAlign: 'center' }}>
        This application exists solely for security testing and educational demonstration purposes.
      </p>
    </main>
  );
}
