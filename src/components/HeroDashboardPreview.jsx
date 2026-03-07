import { motion } from 'framer-motion';

const getAccentColor = () => {
  if (typeof window === 'undefined') return '#16A34A';
  const root = document.documentElement;
  const value = getComputedStyle(root).getPropertyValue('--accent-green').trim();
  return value || '#16A34A';
};

const ACCENT = getAccentColor();

const navItems = [
  { label: 'Dashboard', icon: 'M4 6h16M4 12h16M4 18h7', active: true },
  { label: 'Orders', icon: 'M9 5h2v14H9V5zm4 0h2v14h-2V5z', active: false },
  { label: 'Finance', icon: 'M12 8v8m4-4h.01M16 12a4 4 0 11-8 0 4 4 0 018 0z', active: false },
  { label: 'Projects', icon: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z', active: false },
  { label: 'Reports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2v-5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', active: false },
  { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', active: false },
];

const kpis = [
  { label: 'Total Revenue', value: '$128,540', trend: 'up', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { label: 'Active Projects', value: '24', trend: 'up', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
  { label: 'Pending Invoices', value: '8', trend: 'down', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { label: 'Monthly Growth', value: '+12%', trend: 'up', icon: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' },
];

const transactions = [
  { client: 'Acme Inc', service: 'Consulting', amount: '$4,200', status: 'Paid', date: 'Feb 22' },
  { client: 'Beta LLC', service: 'Development', amount: '$12,800', status: 'Pending', date: 'Feb 21' },
  { client: 'Gamma Co', service: 'Support', amount: '$890', status: 'Overdue', date: 'Feb 18' },
  { client: 'Delta Ltd', service: 'License', amount: '$2,400', status: 'Paid', date: 'Feb 20' },
];

const statusColors = {
  Paid: 'bg-[color:var(--accent-green)]/20 text-[color:var(--accent-green)] border-[color:var(--accent-green)]/30 dark:bg-[color:var(--accent-green)]/20 dark:text-[color:var(--accent-green)] dark:border-[color:var(--accent-green)]/30',
  Pending: 'bg-amber-500/20 text-amber-600 border-amber-500/30 dark:bg-amber-500/20 dark:text-amber-400 dark:border-amber-500/30',
  Overdue: 'bg-red-500/20 text-red-600 border-red-500/30 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/30',
};

// Simple line chart data (points)
const linePoints = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95];
const barHeights = [65, 40, 80, 55, 70, 45, 90];

export default function HeroDashboardPreview() {
  return (
    <div className="relative perspective-[1400px] w-full max-w-[520px]">
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 0, rotateY: -15, rotateZ: -6 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotateX: 0,
        rotateY: -15,
        rotateZ: -6,
      }}
      transition={{
        opacity: { duration: 0.8, ease: 'easeOut' },
        y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        rotateX: { duration: 0.8, ease: 'easeOut' },
        rotateY: { duration: 0.8, ease: 'easeOut' },
        rotateZ: { duration: 0.8, ease: 'easeOut' },
      }}
      className="relative w-full max-w-[520px] overflow-hidden rounded-[20px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-[color:var(--primary-green)]/35 transform-gpu shadow-[0_40px_80px_rgba(0,0,0,0.35)] hover:shadow-[0_60px_120px_rgba(0,0,0,0.45)] dark:shadow-2xl transition-all duration-500"
    >
      {/* Premium depth overlay */}
      <div className="absolute inset-0 rounded-[20px] pointer-events-none" style={{ backgroundImage: 'linear-gradient(135deg, rgba(var(--primary-green-rgb),0.09), transparent 40%, rgba(var(--accent-green-rgb),0.07))' }} />
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700/60 bg-gray-50/90 dark:bg-gray-800/80">
        <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">Toro Corp</span>
        <div className="flex-1 max-w-[140px] min-w-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-lg bg-gray-200/60 dark:bg-gray-700/60 border border-gray-300/80 dark:border-gray-600/50 px-3 py-1.5 text-xs text-gray-800 dark:text-gray-200 placeholder-gray-500 focus:border-[color:var(--primary-green)]/70 focus:outline-none focus:ring-1 focus:ring-[color:var(--primary-green)]/50"
            readOnly
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
          <div className="w-7 h-7 rounded-full bg-[color:var(--primary-green)]/30 dark:bg-[color:var(--primary-green)]/40 border border-[color:var(--primary-green)]/40 dark:border-[color:var(--primary-green)]/50 flex items-center justify-center text-xs font-medium text-[color:var(--primary-green)]">
            JD
          </div>
        </div>
      </div>

      <div className="flex min-h-[340px]">
        {/* Sidebar */}
        <aside className="w-[72px] shrink-0 flex flex-col py-2 border-r border-gray-200 dark:border-gray-700/60 bg-gray-50/80 dark:bg-gray-800/50">
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className={`mx-2 mb-0.5 flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 ${
                item.active
                ? 'bg-[color:var(--primary-green)]/20 dark:bg-[color:var(--primary-green)]/25 text-[color:var(--primary-green)] border border-[color:var(--primary-green)]/35 dark:border-[color:var(--primary-green)]/40'
                  : 'text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-200/60 dark:hover:bg-gray-700/50'
              }`}
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-[10px] font-medium leading-tight text-center">{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0 p-3 space-y-3 overflow-hidden">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-2">
            {kpis.map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="rounded-xl bg-gray-100/80 dark:bg-gray-700/40 backdrop-blur border border-gray-200/80 dark:border-[color:var(--primary-green)]/25 p-2.5 hover:border-[color:var(--primary-green)]/40 dark:hover:border-[color:var(--primary-green)]/45 hover:shadow-[0_0_20px_rgba(15,23,42,0.12)] dark:hover:shadow-[0_0_24px_rgba(15,23,42,0.28)] transition-all duration-300"
              >
                <svg className="w-3.5 h-3.5 text-[color:var(--primary-green)] opacity-80 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={kpi.icon} />
                </svg>
                <p className="text-[11px] font-semibold text-gray-900 dark:text-white truncate">{kpi.value}</p>
                <p className="text-[9px] text-gray-500 dark:text-gray-400 truncate">{kpi.label}</p>
                <span className={`inline-flex items-center text-[9px] mt-0.5 ${kpi.trend === 'up' ? 'text-[color:var(--primary-green)]' : 'text-red-600 dark:text-red-400'}`}>
                  {kpi.trend === 'up' ? (
                    <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                  ) : (
                    <svg className="w-3 h-3 mr-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                  )}
                  {kpi.trend === 'up' ? 'Up' : 'Down'}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-gray-100/80 dark:bg-gray-700/40 backdrop-blur border border-gray-200/80 dark:border-[color:var(--primary-green)]/25 p-3 hover:border-[color:var(--primary-green)]/40 dark:hover:border-[color:var(--primary-green)]/40 transition-all">
              <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 mb-2">Revenue Overview</p>
              <div className="h-[72px] w-full">
                <svg viewBox="0 0 120 40" className="w-full h-full" preserveAspectRatio="none">
                  <polyline
                    fill="none"
                    stroke={ACCENT}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={linePoints.map((y, i) => `${(i / (linePoints.length - 1)) * 120},${40 - (y / 100) * 36}`).join(' ')}
                    opacity={0.9}
                  />
                </svg>
              </div>
            </div>
            <div className="rounded-xl bg-gray-100/80 dark:bg-gray-700/40 backdrop-blur border border-gray-200/80 dark:border-[color:var(--primary-green)]/25 p-3 hover:border-[color:var(--primary-green)]/40 dark:hover:border-[color:var(--primary-green)]/40 transition-all">
              <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 mb-2">Orders This Month</p>
              <div className="h-[72px] flex items-end gap-0.5">
                {barHeights.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end" style={{ height: '72px' }}>
                    <div
                      className="rounded-t min-h-[4px] w-full transition-all duration-300 hover:opacity-90"
                      style={{ height: `${h}%`, backgroundColor: ACCENT, opacity: 0.7 + (i * 0.04) }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="rounded-xl bg-gray-100/80 dark:bg-gray-700/40 backdrop-blur border border-gray-200/80 dark:border-[color:var(--primary-green)]/25 overflow-hidden hover:border-[color:var(--primary-green)]/40 dark:hover:border-[color:var(--primary-green)]/40 transition-all">
            <p className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 px-3 py-2 border-b border-gray-200 dark:border-gray-600/50">Recent Transactions</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px]">
                <thead>
                  <tr className="text-gray-500 dark:text-gray-500 border-b border-gray-200 dark:border-gray-600/40">
                    <th className="text-left font-medium py-1.5 pl-3">Client</th>
                    <th className="text-left font-medium py-1.5">Service</th>
                    <th className="text-right font-medium py-1.5">Amount</th>
                    <th className="text-left font-medium py-1.5">Status</th>
                    <th className="text-right font-medium py-1.5 pr-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((row, i) => (
                    <tr key={i} className="border-b border-gray-200/80 dark:border-gray-600/30 last:border-0 text-gray-700 dark:text-gray-300 hover:bg-gray-200/40 dark:hover:bg-gray-700/40">
                      <td className="py-1.5 pl-3 font-medium truncate max-w-[70px]">{row.client}</td>
                      <td className="py-1.5 truncate max-w-[60px]">{row.service}</td>
                      <td className="py-1.5 text-right">{row.amount}</td>
                      <td className="py-1.5">
                        <span className={`inline-block px-1.5 py-0.5 rounded border text-[8px] font-medium ${statusColors[row.status]}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-1.5 pr-3 text-right text-gray-500 dark:text-gray-500">{row.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
    </div>
  );
}
