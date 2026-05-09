import React, { useState, useEffect } from 'react';
import { Zap, Shield, Play, CheckCircle2, MessageSquare, Send, ShieldAlert, BarChart3, Activity } from 'lucide-react';

const SECURITY = { passkey: "889900", answer: "nivek ai" };

export default function App() {
  const [mode, setMode] = useState('player');
  const [isAuthed, setIsAuthed] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [adStatus, setAdStatus] = useState('idle');
  const [timeLeft, setTimeLeft] = useState(15);
  const [adminTab, setAdminTab] = useState('intelligence');

  useEffect(() => {
    if (window.location.hash === '#admin') setMode('admin');
  }, []);

  const handleLogin = () => {
    if (passInput === SECURITY.passkey || passInput.toLowerCase() === SECURITY.answer) {
      setIsAuthed(true);
    }
  };

  // --- PLAYER VIEW ---
  if (mode === 'player') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#020617] text-slate-300">
        <div className="w-full max-w-md bg-slate-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 bg-slate-900/50 border-b border-white/5 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
            <div className="flex items-center gap-2"><Zap size={14} className="text-cyan-500" /> NIVEK_UPLINK</div>
            <div className="text-emerald-500 animate-pulse flex items-center gap-1"><Activity size={10}/> LIVE</div>
          </div>
          <div className="aspect-video bg-black flex flex-col items-center justify-center border-b border-white/5">
            {adStatus === 'idle' ? (
              <button onClick={() => {
                setAdStatus('playing');
                const t = setInterval(() => setTimeLeft(p => { if(p<=1){clearInterval(t); setAdStatus('done'); return 0;} return p-1; }), 1000);
              }} className="flex flex-col items-center gap-3 group">
                <div className="bg-white p-4 rounded-full text-black group-hover:scale-110 transition-transform"><Play fill="currentColor" /></div>
                <span className="text-xs font-bold uppercase italic text-white tracking-widest">Initialize Extraction</span>
              </button>
            ) : adStatus === 'playing' ? (
              <div className="text-center">
                <div className="text-6xl font-black italic text-white mb-2">{timeLeft}s</div>
                <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest">Focus Verification Active</div>
              </div>
            ) : (
              <div className="text-center animate-bounce">
                <CheckCircle2 size={48} className="text-emerald-500 mx-auto" />
                <h2 className="text-white font-black italic uppercase mt-2">Access Granted</h2>
              </div>
            )}
          </div>
          <div className="p-6">
            <button disabled={adStatus !== 'done'} className={`w-full py-4 font-black uppercase italic tracking-widest rounded transition-all ${adStatus === 'done' ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]' : 'bg-slate-800 text-slate-600'}`}>
               Return to Bot
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- ADMIN LOGIN ---
  if (mode === 'admin' && !isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#020617]">
        <div className="w-full max-w-sm bg-slate-950 border border-cyan-500/20 p-8 rounded-lg text-center shadow-2xl">
          <Shield className="w-12 h-12 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-white font-black italic mb-6 uppercase tracking-widest">Admin Uplink</h2>
          <input type="password" placeholder="PASSKEY..." className="w-full bg-black border border-white/10 p-3 rounded mb-4 text-white font-mono text-center outline-none focus:border-cyan-500" value={passInput} onChange={e => setPassInput(e.target.value)} />
          <button onClick={handleLogin} className="w-full bg-cyan-600 text-white font-black py-3 uppercase text-xs tracking-widest hover:bg-cyan-500 transition-all">Connect</button>
        </div>
      </div>
    );
  }

  // --- ADMIN DASHBOARD ---
  return (
    <div className="min-h-screen flex bg-black text-slate-300">
      <aside className="w-64 border-r border-white/5 p-6 flex flex-col gap-6">
        <div className="font-black italic text-xl text-white">NIVEK<span className="text-cyan-500">_HUB</span></div>
        <nav className="space-y-2">
          <button onClick={() => setAdminTab('intelligence')} className={`w-full flex items-center gap-3 p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${adminTab === 'intelligence' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:bg-white/5'}`}><BarChart3 size={16}/> Intelligence</button>
          <button onClick={() => setAdminTab('intercom')} className={`w-full flex items-center gap-3 p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${adminTab === 'intercom' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:bg-white/5'}`}><MessageSquare size={16}/> Intercom</button>
          <button onClick={() => setAdminTab('fraud')} className={`w-full flex items-center gap-3 p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${adminTab === 'fraud' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:bg-white/5'}`}><ShieldAlert size={16}/> Security</button>
        </nav>
      </aside>
      <main className="flex-1 p-12 overflow-y-auto">
        {adminTab === 'intelligence' && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Command_Center</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Est. Ad Revenue</p>
                <p className="text-3xl font-black text-white italic">$0.00</p>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-xl border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2">Total Impressions</p>
                <p className="text-3xl font-black text-white italic">0</p>
              </div>
            </div>
          </div>
        )}
        {adminTab === 'intercom' && (
          <div className="max-w-xl space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Neural_Intercom</h2>
            <div className="space-y-4 bg-slate-900/50 p-8 rounded-xl border border-white/5">
              <input type="text" placeholder="HUMAN_ID..." className="w-full bg-black border border-white/10 p-4 rounded text-white font-mono text-sm focus:border-cyan-500 outline-none" />
              <textarea placeholder="TRANSMISSION..." rows="4" className="w-full bg-black border border-white/10 p-4 rounded text-white font-mono text-sm resize-none focus:border-cyan-500 outline-none" />
              <button className="w-full bg-white text-black font-black py-4 uppercase italic flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all">Execute <Send size={16}/></button>
            </div>
          </div>
        )}
        {adminTab === 'fraud' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-4xl font-black text-white italic uppercase tracking-tighter">Security_Logs</h2>
            <div className="bg-slate-900/50 border border-white/5 p-4 rounded font-mono text-[10px] text-slate-500 tracking-widest uppercase">
              System monitoring active. No breaches recorded.
            </div>
          </div>
        )}
      </main>
    </div>
  );
      }
