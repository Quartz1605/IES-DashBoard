import React from 'react'

const SimpleDashboard = () => {
  return (
    <div style={{ 
      display: 'flex', 
      height: '100vh', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8fafc'
    }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#0f172a',
        color: 'white',
        padding: '20px'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ margin: 0, fontSize: '20px' }}>MarketPulse</h2>
        </div>
        
        <nav>
          <div style={{ 
            padding: '12px', 
            marginBottom: '8px', 
            backgroundColor: '#3b82f6',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            📊 Dashboard
          </div>
          <div style={{ 
            padding: '12px', 
            marginBottom: '8px', 
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            📈 Stocks
          </div>
          <div style={{ 
            padding: '12px', 
            marginBottom: '8px', 
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            📊 Markets
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Top Bar */}
        <div style={{
          height: '64px',
          backgroundColor: 'white',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px'
        }}>
          <h1 style={{ margin: 0, fontSize: '24px', color: '#1f2937' }}>
            Market Dashboard
          </h1>
          <input 
            type="text" 
            placeholder="Search stocks, indices..."
            style={{
              width: '300px',
              padding: '8px 12px',
              border: '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '14px'
            }}
          />
        </div>

        {/* Dashboard Content */}
        <div style={{ flex: 1, padding: '24px', overflow: 'auto' }}>
          {/* Stats Cards */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '24px'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>
                Market Cap
              </h3>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>
                $13.42T
              </div>
              <div style={{ color: '#10b981', fontSize: '14px', marginTop: '8px' }}>
                📈 +0.47%
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>
                Trading Volume
              </h3>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>
                487.32M
              </div>
              <div style={{ color: '#6b7280', fontSize: '14px', marginTop: '8px' }}>
                Today's volume
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>
                Top Gainer
              </h3>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>
                NVDA
              </div>
              <div style={{ color: '#10b981', fontSize: '14px', marginTop: '8px' }}>
                📈 +1.78% NVIDIA Corp
              </div>
            </div>

            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 8px 0', color: '#6b7280', fontSize: '14px' }}>
                Top Loser
              </h3>
              <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#111827' }}>
                TSLA
              </div>
              <div style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>
                📉 -1.55% Tesla Inc.
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '24px'
          }}>
            {/* Watchlist */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', color: '#111827' }}>
                Watchlist
              </h3>
              
              <div style={{
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '16px', color: '#111827' }}>AAPL</h4>
                    <p style={{ margin: '4px 0', fontSize: '14px', color: '#6b7280' }}>Apple Inc.</p>
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>📊</div>
                </div>
                
                <div style={{ marginTop: '12px' }}>
                  <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>
                    $187.80
                  </div>
                  <div style={{ color: '#10b981', fontSize: '14px' }}>
                    +$1.76 (+0.95%)
                  </div>
                </div>
                
                <div style={{ 
                  marginTop: '12px', 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  fontSize: '12px',
                  color: '#6b7280'
                }}>
                  <div>Volume: 58.39M</div>
                  <div>Mkt Cap: $2.92T</div>
                </div>
                
                <p style={{ fontSize: '11px', color: '#9ca3af', margin: '8px 0 0 0' }}>
                  Updated: Just now
                </p>
              </div>
            </div>

            {/* AAPL Chart */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <div>
                  <h3 style={{ margin: 0, fontSize: '18px', color: '#111827' }}>AAPL</h3>
                  <p style={{ margin: '4px 0', fontSize: '14px', color: '#6b7280' }}>Apple Inc.</p>
                  <p style={{ margin: '4px 0', fontSize: '12px', color: '#6b7280' }}>$199.30</p>
                </div>
                <div style={{ display: 'flex', gap: '4px', fontSize: '12px' }}>
                  <span style={{ padding: '4px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>1D</span>
                  <span style={{ padding: '4px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>1W</span>
                  <span style={{ padding: '4px 8px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '4px' }}>1M</span>
                  <span style={{ padding: '4px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>3M</span>
                  <span style={{ padding: '4px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>1Y</span>
                  <span style={{ padding: '4px 8px', backgroundColor: '#f3f4f6', borderRadius: '4px' }}>All</span>
                </div>
              </div>
              
              <div style={{
                height: '200px',
                backgroundColor: '#f8fafc',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6b7280'
              }}>
                📈 Chart Area (Recharts would go here)
              </div>
            </div>

            {/* Global Markets */}
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              border: '1px solid #e2e8f0'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#3b82f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: 'white', fontSize: '12px' }}>🌐</span>
                </div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#111827' }}>Global Markets</h3>
              </div>
              
              <div>
                <h4 style={{ margin: '0 0 12px 0', fontSize: '16px', color: '#111827' }}>United States</h4>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: '#111827' }}>S&P 500</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>SPX</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>5,123.09</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#10b981' }}>+0.68%</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: '#111827' }}>Dow Jones</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>38,227.13</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#10b981' }}>+0.30%</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '500', color: '#111827' }}>NASDAQ</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>COMP</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: '#111827' }}>16,788.07</p>
                      <p style={{ margin: 0, fontSize: '12px', color: '#10b981' }}>+1.15%</p>
                    </div>
                  </div>
                </div>
                
                <div style={{ paddingTop: '16px', borderTop: '1px solid #e2e8f0' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#111827' }}>Japan</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#6b7280' }}>Market closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleDashboard
