'use client';

import { useEffect, useState } from 'react';

export default function BootLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);
    const hideTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'radial-gradient(circle at center, #ffffff 0%, #f8fafc 100%)',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: 'none',
      }}
    >
      {/* Centered card container */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'logoFadeIn 0.8s ease-out forwards',
        }}
      >
        {/* Pulsing logo wrapper */}
        <div
          style={{
            animation: 'logoPulse 2s ease-in-out infinite',
            filter: 'drop-shadow(0 15px 30px rgba(14, 46, 80, 0.08))',
          }}
        >
          <img 
            src="/images/JPG/sri-pavansai-logo.png" 
            alt="SRI Pavan Sai Hospital Logo" 
            style={{
              height: '200px',
              width: 'auto',
              display: 'block',
            }}
          />
        </div>
      </div>
      
      {/* Premium Loading bar container */}
      <div 
        style={{
          marginTop: '32px',
          width: '220px',
          height: '3px',
          backgroundColor: '#e2e8f0',
          borderRadius: '9999px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.02)',
        }}
      >
        <div 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            background: 'linear-gradient(90deg, #DC2626 0%, #ef4444 100%)',
            boxShadow: '0 0 8px rgba(220, 38, 38, 0.5)',
            borderRadius: '9999px',
            animation: 'loadingBar 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards'
          }}
        />
      </div>

      {/* Subtext loader */}
      <div
        style={{
          marginTop: '16px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          fontSize: '11px',
          fontWeight: 600,
          color: '#0E2E50',
          opacity: 0.6,
          letterSpacing: '3px',
          textTransform: 'uppercase',
          animation: 'textPulse 1.5s ease-in-out infinite alternate',
        }}
      >
        Providing Trusted Care
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loadingBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes logoFadeIn {
          0% { opacity: 0; transform: scale(0.92) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes logoPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes textPulse {
          0% { opacity: 0.4; }
          100% { opacity: 0.8; }
        }
      `}} />
    </div>
  );
}
