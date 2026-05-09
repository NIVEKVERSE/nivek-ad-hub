import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Zap, Shield, Play, CheckCircle2, MessageSquare, Send, ShieldAlert, BarChart3, Activity } from 'lucide-react';

const SECURITY = {
passkey: "Kcc0092$$",

question: "Nivek's💫 net Worth?",
answer: "+unlimited nairas"

};

export function App() {
const [mode, setMode] = useState('player');
const [isAuthed, setIsAuthed] = useState(false);
const [passInput, setPassInput] = useState('');
const [adStatus, setAdStatus] = useState('idle');
const [timeLeft, setTimeLeft] = useState(15);
const [adminTab, setAdminTab] = useState('intelligence');

useEffect(() => {
const handleHash = () => {
if (window.location.hash === '#admin') setMode('admin');
else setMode('player');
};
handleHash();
window.addEventListener('hashchange', handleHash);
return () => window.removeEventListener('hashchange', handleHash);
}, []);

const handleLogin = () => {
if (passInput === SECURITY.passkey || passInput.toLowerCase() === SECURITY.answer) {
setIsAuthed(true);
setPassInput('');
}
};

if (mode === 'player') {
return (



 NIVEK_UPLINK
 LIVE


{adStatus === 'idle' ? (
<button onClick={() => {
setAdStatus('playing');
const t = setInterval(() => setTimeLeft(p => { if(p<=1){clearInterval(t); setAdStatus('done'); return 0;} return p-1; }), 1000);
}} className="flex flex-col items-center gap-3 group">

Initialize Extraction

) : adStatus === 'playing' ? (

{timeLeft}s
Focus Verification Active

) : (


Access Granted

)}


<button
disabled={adStatus !== 'done'}
className={`w-full py-4 font-black uppercase italic tracking-widest rounded transition-all ${adStatus === 'done' ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'bg-slate-800 text-slate-600'}`}
onClick={() => { if(adStatus === 'done') window.location.href = '[https://t.me/NivekAIBot](https://www.google.com/search?q=https://t.me/NivekAIBot)'; }}
>
Return to Bot




);
}

if (mode === 'admin' && !isAuthed) {
return (



Admin Uplink
<input
type="password"
placeholder="PASSKEY..."
className="w-full bg-black border border-white/10 p-4 rounded mb-4 text-white font-mono text-center outline-none focus:border-cyan-500"
value={passInput}
onChange={e => setPassInput(e.target.value)}
/>
Connect


);
}

return (


NIVEK_HUB

<button onClick={() => setAdminTab('intelligence')} className={`w-full flex items-center gap-3 p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${adminTab === 'intelligence' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:bg-white/5'}`}> Intelligence
<button onClick={() => setAdminTab('intercom')} className={`w-full flex items-center gap-3 p-3 rounded text-[10px] font-bold uppercase tracking-widest transition-all ${adminTab === 'intercom' ? 'bg-cyan-600 text-white' : 'text-slate-500 hover:bg-white/5'}`}> Intercom



Command_Center


Impressions
0




);
}

const container = document.getElementById('root');
if (container) {
const root = createRoot(container);
root.render();
}
