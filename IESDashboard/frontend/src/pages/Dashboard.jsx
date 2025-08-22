import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, LineChart } from 'recharts'

// Mock data for the dashboard
const stockData = [
  { time: '9:30', price: 185 },
  { time: '10:00', price: 190 },
  { time: '10:30', price: 188 },
  { time: '11:00', price: 192 },
  { time: '11:30', price: 194 },
  { time: '12:00', price: 189 },
  { time: '12:30', price: 195 },
  { time: '1:00', price: 199 },
]

const watchlistData = [
  { symbol: 'AAPL', company: 'Apple Inc.', price: 187.80, change: 1.76, changePercent: 0.95, volume: '58.39M', marketCap: '2.92T' },
  { symbol: 'MSFT', company: 'Microsoft Corp.', price: 378.85, change: -2.15, changePercent: -0.56, volume: '24.51M', marketCap: '2.81T' },
]

const marketStats = [
  { title: 'Market Cap', value: '$13.42T', change: '+0.47%', isPositive: true },
  { title: 'Trading Volume', value: '487.32M', subtitle: 'Today\'s volume' },
  { title: 'Top Gainer', value: 'NVDA', subtitle: '+1.78% NVIDIA Corp', isPositive: true },
  { title: 'Top Loser', value: 'TSLA', subtitle: '-1.55% Tesla Inc.', isPositive: false },
]

const globalMarkets = [
  { name: 'S&P 500', symbol: 'SPX', value: '5,123.09', change: '+0.68%', isPositive: true },
  { name: 'Dow Jones', symbol: '', value: '38,227.13', change: '+0.30%', isPositive: true },
  { name: 'NASDAQ', symbol: 'COMP', value: '16,788.07', change: '+1.15%', isPositive: true },
]

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Market Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketStats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <h3 className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</h3>
                {stat.subtitle && (
                  <p className="text-sm text-gray-500 mt-1">{stat.subtitle}</p>
                )}
                {stat.change && (
                  <div className={`flex items-center gap-1 mt-2 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.isPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">{stat.change}</span>
                  </div>
                )}
              </div>
              <div className="text-gray-400">
                {index === 0 && <div className="w-6 h-6 bg-gray-100 rounded"></div>}
                {index === 1 && <div className="w-6 h-6 bg-gray-100 rounded"></div>}
                {index === 2 && <TrendingUp className="w-6 h-6" />}
                {index === 3 && <TrendingDown className="w-6 h-6" />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Watchlist */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Watchlist</h3>
          <div className="space-y-4">
            {watchlistData.map((stock) => (
              <div key={stock.symbol} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{stock.symbol}</h4>
                    <p className="text-sm text-gray-600">{stock.company}</p>
                  </div>
                  <div className="w-16 h-8 bg-gray-50 rounded flex items-center justify-center">
                    <LineChart className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-gray-900">${stock.price}</span>
                    <div className={`flex items-center gap-1 ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      <span className="text-sm font-medium">
                        {stock.change >= 0 ? '+' : ''}${stock.change} ({stock.changePercent >= 0 ? '+' : ''}{stock.changePercent}%)
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="block">Volume: {stock.volume}</span>
                    </div>
                    <div>
                      <span className="block">Mkt Cap: {stock.marketCap}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-500">Updated: Just now</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AAPL Chart */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">AAPL</h3>
              <p className="text-sm text-gray-600">Apple Inc.</p>
              <p className="text-xs text-gray-500 mt-1">$199.30</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">1D</button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">1W</button>
              <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded">1M</button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">3M</button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">1Y</button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded">All</button>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stockData}>
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
                <Area 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#3B82F6" 
                  fill="url(#colorGradient)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Markets */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Global Markets</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">United States</h4>
              <div className="space-y-3">
                {globalMarkets.map((market, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{market.name}</p>
                      {market.symbol && <p className="text-xs text-gray-500">{market.symbol}</p>}
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{market.value}</p>
                      <p className={`text-sm ${market.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                        {market.change}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <h4 className="font-medium text-gray-900 mb-2">Japan</h4>
              <p className="text-sm text-gray-500">Market closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
