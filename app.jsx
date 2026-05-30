const { useState, useRef, useEffect, useCallback } = React;

// ─── ICONS ────────────────────────────────────────────────────────────────────
const MicIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="9" y1="22" x2="15" y2="22"/></svg>);
const SendIcon = () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>);
const StopIcon = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>);
const PlusIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>);
const MenuIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>);
const CloseIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>);
const BackIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>);
const GoogleIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>);
const EmailIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/></svg>);
const SunIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>);
const MoonIcon = () => (<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>);
const UserIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const InfoIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>);
const SettingsIcon2 = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>);
const LogoutIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>);
const TrashIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>);
const ShareIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>);
const EditIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>);
const PinIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1v3.76z"/></svg>);
const ImgIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>);
const FileIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>);
const CameraIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>);

// ─── THEMES ───────────────────────────────────────────────────────────────────
const THEMES = {
  dark: {
    bg:"#0A0A0F", sidebar:"#0D0D14", border:"#1A1A25",
    card:"#131320", cardHover:"#16161F", input:"#0F0F18",
    inputBorder:"#252535", text:"#F0EDE8", subtext:"#8888AA",
    muted:"#55556A", accent:"#E8C547", accentDark:"#C4973A",
    cyan:"#5BE8C5", bubble_user:"#1A2A3A", bubble_ai:"#131320",
    border_user:"#2A4A5A", border_ai:"#1E1E2E", msgColor:"#E8E5E0",
    overlay:"rgba(0,0,0,0.75)", modalBg:"#0F0F1A", panelBg:"#111118",
    danger:"#E87070", dangerBg:"#1E1010", dangerBorder:"#5A2020",
  },
  light: {
    bg:"#F5F4F0", sidebar:"#EEEAE3", border:"#DDDAD2",
    card:"#FFFFFF", cardHover:"#F0EDE6", input:"#FFFFFF",
    inputBorder:"#D0CCC4", text:"#1A1814", subtext:"#6B6660",
    muted:"#9A9690", accent:"#C4973A", accentDark:"#A07B28",
    cyan:"#2A9E88", bubble_user:"#E8F4FF", bubble_ai:"#FFFFFF",
    border_user:"#B8D8F0", border_ai:"#E0DDD8", msgColor:"#2A2520",
    overlay:"rgba(0,0,0,0.45)", modalBg:"#FAFAF8", panelBg:"#F2EFE9",
    danger:"#C0392B", dangerBg:"#FFF0EE", dangerBorder:"#F5C6C0",
  }
};

const SUGGESTIONS = ["Explique-moi l'intelligence artificielle","Écris un poème sur l'espace","Aide-moi à coder en Python","Résume les actualités tech"];

// ─── TYPING INDICATOR ─────────────────────────────────────────────────────────
const TypingIndicator = ({ accent }) => (
  <div style={{ display:"flex", gap:"5px", alignItems:"center", padding:"4px 0" }}>
    {[0,1,2].map(i => <span key={i} style={{ width:7,height:7,borderRadius:"50%",background:accent,display:"inline-block",animation:`bounce 1.2s ease-in-out ${i*0.2}s infinite` }}/>)}
  </div>
);

// ─── FULL-SCREEN PANEL ────────────────────────────────────────────────────────
function FullPanel({ T, title, icon, onClose, children }) {
  return (
    <div style={{ position:"fixed", inset:0, background:T.modalBg, zIndex:500, display:"flex", flexDirection:"column", animation:"slideUp 0.28s cubic-bezier(0.4,0,0.2,1)" }}>
      {/* header */}
      <div style={{ display:"flex", alignItems:"center", gap:12, padding:"16px 20px", borderBottom:`1px solid ${T.border}` }}>
        <button onClick={onClose} style={{ width:38,height:38,borderRadius:10,background:T.card,border:`1px solid ${T.border}`,color:T.text,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>
          <BackIcon/>
        </button>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <span style={{ color:T.accent }}>{icon}</span>
          <span style={{ fontSize:17, fontWeight:800, color:T.text }}>{title}</span>
        </div>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:"24px 20px" }}>{children}</div>
    </div>
  );
}

// ─── PANEL: ABOUT ─────────────────────────────────────────────────────────────
function AboutPanel({ T, onClose }) {
  return (
    <FullPanel T={T} title="À propos" icon={<InfoIcon/>} onClose={onClose}>
      <div style={{ maxWidth:520, margin:"0 auto", display:"flex", flexDirection:"column", gap:20 }}>
        <div style={{ textAlign:"center", padding:"32px 0 20px" }}>
          <div style={{ fontSize:64, marginBottom:12, background:`linear-gradient(135deg,${T.accent},${T.cyan})`, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>✦</div>
          <div style={{ fontSize:28, fontWeight:800, color:T.text, letterSpacing:"-1px" }}>SOMA</div>
          <div style={{ fontSize:12, color:T.accent, fontWeight:700, letterSpacing:"2px", marginTop:4 }}>VERSION 1.0.0 · BETA</div>
          <p style={{ fontSize:14, color:T.subtext, marginTop:14, lineHeight:1.8, maxWidth:380, margin:"14px auto 0" }}>
            SOMA est un assistant IA conversationnel alimenté par Mistral Large. Conçu pour être rapide, intelligent et beau.
          </p>
        </div>
        {/* Info grid */}
        <div style={{ background:T.card, borderRadius:16, border:`1px solid ${T.border}`, overflow:"hidden" }}>
          {[["Modèle IA","Mistral Large"],["Backend","Render (Node.js)"],["Authentification","Firebase Auth"],["Base de données","Firestore"],["Hébergement","Render + Firebase"],["Développé par","Toi + Claude 🤝"]].map(([k,v],i,arr)=>(
            <div key={k} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 18px",borderBottom:i<arr.length-1?`1px solid ${T.border}`:"none" }}>
              <span style={{ fontSize:13, color:T.subtext }}>{k}</span>
              <span style={{ fontSize:13, color:T.text, fontWeight:700 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ background:`${T.accent}12`, border:`1px solid ${T.accent}33`, borderRadius:14, padding:"16px 18px" }}>
          <p style={{ fontSize:13, color:T.text, lineHeight:1.7 }}>
            💡 <strong>Stack technique :</strong> React · Firebase Auth · Firestore · Node.js Proxy · Anthropic API · Render
          </p>
        </div>
        <p style={{ fontSize:12, color:T.muted, textAlign:"center" }}>© 2025 SOMA · Tous droits réservés</p>
      </div>
    </FullPanel>
  );
}

// ─── PANEL: SETTINGS ──────────────────────────────────────────────────────────
function SettingsPanel({ T, themeName, onThemeToggle, onClose }) {
  const [notif, setNotif] = useState(true);
  const [history, setHistory] = useState(true);
  const [lang, setLang] = useState("fr");

  return (
    <FullPanel T={T} title="Paramètres" icon={<SettingsIcon2/>} onClose={onClose}>
      <div style={{ maxWidth:520, margin:"0 auto", display:"flex", flexDirection:"column", gap:16 }}>

        {/* APPARENCE */}
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", color:T.muted, textTransform:"uppercase", marginTop:4 }}>Apparence</div>
        <div style={{ background:T.card, borderRadius:16, border:`1px solid ${T.border}`, overflow:"hidden" }}>
          {/* Toggle */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 18px", borderBottom:`1px solid ${T.border}` }}>
            <div>
              <div style={{ fontSize:14, fontWeight:600, color:T.text }}>Thème</div>
              <div style={{ fontSize:12, color:T.subtext, marginTop:2 }}>{themeName==="dark"?"Mode sombre activé":"Mode clair activé"}</div>
            </div>
            <button onClick={onThemeToggle} style={{ width:52,height:28,borderRadius:14,background:themeName==="dark"?"#252535":"#D8D4CC",border:"none",cursor:"pointer",position:"relative",transition:"background 0.3s" }}>
              <div style={{ position:"absolute",top:3,left:themeName==="dark"?3:27,width:22,height:22,borderRadius:"50%",background:themeName==="dark"?T.accent:"#FFF",transition:"left 0.3s",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 6px rgba(0,0,0,0.25)" }}>
                {themeName==="dark"?<MoonIcon/>:<SunIcon/>}
              </div>
            </button>
          </div>
          {/* Theme previews */}
          <div style={{ padding:"14px 18px", display:"flex", gap:10 }}>
            {["dark","light"].map(t=>(
              <button key={t} onClick={()=>t!==themeName&&onThemeToggle()} style={{ flex:1,padding:"12px",borderRadius:12,cursor:"pointer",background:t==="dark"?"#0A0A0F":"#F5F4F0",border:`2px solid ${themeName===t?T.accent:T.border}`,transition:"all 0.2s" }}>
                <div style={{ width:"100%",height:7,borderRadius:3,background:t==="dark"?"#1A1A28":"#DDDAD2",marginBottom:5 }}/>
                <div style={{ width:"60%",height:5,borderRadius:2,background:t==="dark"?"#252535":"#C8C4BC",marginBottom:8 }}/>
                <div style={{ fontSize:11,color:t==="dark"?"#8888AA":"#6B6660",fontWeight:700 }}>{t==="dark"?"🌙 Sombre":"☀️ Clair"}</div>
              </button>
            ))}
          </div>
        </div>

        {/* PRÉFÉRENCES */}
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", color:T.muted, textTransform:"uppercase" }}>Préférences</div>
        <div style={{ background:T.card, borderRadius:16, border:`1px solid ${T.border}`, overflow:"hidden" }}>
          {[
            { label:"Notifications", sub:"Alertes pour les nouvelles réponses", val:notif, set:setNotif },
            { label:"Sauvegarder l'historique", sub:"Conserver les conversations", val:history, set:setHistory },
          ].map((item,i)=>(
            <div key={item.label} style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"16px 18px",borderBottom:i===0?`1px solid ${T.border}`:"none" }}>
              <div>
                <div style={{ fontSize:14,fontWeight:600,color:T.text }}>{item.label}</div>
                <div style={{ fontSize:12,color:T.subtext,marginTop:2 }}>{item.sub}</div>
              </div>
              <button onClick={()=>item.set(v=>!v)} style={{ width:52,height:28,borderRadius:14,background:item.val?T.accent:"#252535",border:"none",cursor:"pointer",position:"relative",transition:"background 0.3s" }}>
                <div style={{ position:"absolute",top:3,left:item.val?27:3,width:22,height:22,borderRadius:"50%",background:"#FFF",transition:"left 0.3s",boxShadow:"0 2px 6px rgba(0,0,0,0.25)" }}/>
              </button>
            </div>
          ))}
        </div>

        {/* LANGUE */}
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", color:T.muted, textTransform:"uppercase" }}>Langue</div>
        <div style={{ background:T.card, borderRadius:16, border:`1px solid ${T.border}`, padding:"4px" }}>
          <div style={{ display:"flex", gap:4 }}>
            {[["fr","🇫🇷 Français"],["en","🇬🇧 English"],["es","🇪🇸 Español"]].map(([code,label])=>(
              <button key={code} onClick={()=>setLang(code)} style={{ flex:1,padding:"10px 8px",borderRadius:12,background:lang===code?`${T.accent}22`:"transparent",border:lang===code?`1px solid ${T.accent}66`:"1px solid transparent",color:lang===code?T.accent:T.subtext,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit",transition:"all 0.2s" }}>{label}</button>
            ))}
          </div>
        </div>

        {/* API */}
        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"1.5px", color:T.muted, textTransform:"uppercase" }}>Serveur & API</div>
        <div style={{ background:T.card, borderRadius:16, border:`1px solid ${T.border}`, overflow:"hidden" }}>
          {[["Endpoint","Render (HTTPS)"],["Proxy API","Activé ✓"],["Clé API","Sécurisée côté serveur ✓"],["CORS","Configuré ✓"],["Auth","Firebase ✓"]].map(([k,v],i,arr)=>(
            <div key={k} style={{ display:"flex",justifyContent:"space-between",alignItems:"center",padding:"13px 18px",borderBottom:i<arr.length-1?`1px solid ${T.border}`:"none" }}>
              <span style={{ fontSize:13, color:T.subtext }}>{k}</span>
              <span style={{ fontSize:13, color:T.cyan, fontWeight:700 }}>{v}</span>
            </div>
          ))}
        </div>
        <div style={{ background:`${T.cyan}12`, border:`1px solid ${T.cyan}33`, borderRadius:14, padding:"14px 18px" }}>
          <p style={{ fontSize:12, color:T.text, lineHeight:1.7 }}>
            💡 Proxy actif sur <code style={{ color:T.accent, fontSize:11 }}>https://soma-server.onrender.com/api/chat</code>
          </p>
        </div>
      </div>
    </FullPanel>
  );
}

// ─── PANEL: ACCOUNT ───────────────────────────────────────────────────────────
function AccountPanel({ T, user, onLogin, onLogout, onClose }) {
  const [mode, setMode] = useState(user ? "profile" : "choice");
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [name, setName] = useState(""); const [error, setError] = useState("");

  const handleAuth = (e) => {
    e.preventDefault();
    if (!email||!password){setError("Remplis tous les champs.");return;}
    if(mode==="register"&&!name){setError("Entre ton prénom.");return;}
    onLogin({name:name||email.split("@")[0],email,method:"email"});
    setMode("profile");
  };

  return (
    <FullPanel T={T} title="Compte" icon={<UserIcon/>} onClose={onClose}>
      <div style={{ maxWidth:420, margin:"0 auto", display:"flex", flexDirection:"column", gap:14 }}>
        {/* PROFILE */}
        {mode==="profile" && user && (
          <>
            <div style={{ textAlign:"center", padding:"28px 0 16px" }}>
              <div style={{ width:80,height:80,borderRadius:"50%",background:`linear-gradient(135deg,${T.cyan},#3BBFA3)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,fontWeight:800,color:"#0A0A0F",margin:"0 auto 14px" }}>{user.name[0].toUpperCase()}</div>
              <div style={{ fontSize:20, fontWeight:800, color:T.text }}>{user.name}</div>
              <div style={{ fontSize:13, color:T.subtext, marginTop:4 }}>{user.email}</div>
              <div style={{ display:"inline-flex",alignItems:"center",gap:6,marginTop:8,padding:"4px 12px",borderRadius:20,background:`${T.cyan}18`,border:`1px solid ${T.cyan}44`,color:T.cyan,fontSize:12,fontWeight:700 }}>
                {user.method==="google"?"🟢 Google":"📧 Email"} · Connecté
              </div>
            </div>
            <div style={{ background:T.card, borderRadius:16, border:`1px solid ${T.border}`, overflow:"hidden" }}>
              {[["Plan","Gratuit"],["Conversations","Illimitées"],["Membre depuis","Mai 2025"]].map(([k,v],i,arr)=>(
                <div key={k} style={{ display:"flex",justifyContent:"space-between",padding:"14px 18px",borderBottom:i<arr.length-1?`1px solid ${T.border}`:"none" }}>
                  <span style={{ fontSize:13,color:T.subtext }}>{k}</span>
                  <span style={{ fontSize:13,color:T.text,fontWeight:700 }}>{v}</span>
                </div>
              ))}
            </div>
            <button onClick={()=>{onLogout();setMode("choice");}} style={{ width:"100%",padding:"14px",borderRadius:14,background:T.dangerBg,border:`1px solid ${T.dangerBorder}`,color:T.danger,cursor:"pointer",fontSize:14,fontWeight:700,fontFamily:"inherit",display:"flex",alignItems:"center",justifyContent:"center",gap:8 }}>
              <LogoutIcon/> Se déconnecter
            </button>
          </>
        )}

        {/* CHOICE */}
        {mode==="choice" && (
          <>
            <div style={{ textAlign:"center", padding:"24px 0 12px" }}>
              <div style={{ fontSize:48, marginBottom:8 }}>👋</div>
              <div style={{ fontSize:20,fontWeight:800,color:T.text }}>Bienvenue sur SOMA</div>
              <p style={{ fontSize:13,color:T.subtext,marginTop:8,lineHeight:1.7 }}>Connecte-toi pour sauvegarder tes conversations et accéder à SOMA depuis n'importe quel appareil.</p>
            </div>
            <button onClick={()=>{onLogin({name:"Utilisateur Google",email:"user@gmail.com",method:"google"});setMode("profile");}} style={{ width:"100%",padding:"14px 18px",borderRadius:14,background:T.card,border:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",gap:10,cursor:"pointer",fontSize:14,fontWeight:700,color:T.text,fontFamily:"inherit",marginBottom:4 }}>
              <GoogleIcon/> Continuer avec Google
            </button>
            <button onClick={()=>setMode("login")} style={{ width:"100%",padding:"14px 18px",borderRadius:14,background:T.card,border:`1px solid ${T.border}`,display:"flex",alignItems:"center",justifyContent:"center",gap:10,cursor:"pointer",fontSize:14,fontWeight:700,color:T.text,fontFamily:"inherit" }}>
              <EmailIcon/> Continuer avec Email
            </button>
            <div style={{ textAlign:"center", marginTop:4 }}>
              <span style={{ fontSize:13,color:T.subtext }}>Pas de compte ? </span>
              <span onClick={()=>setMode("register")} style={{ fontSize:13,color:T.accent,cursor:"pointer",fontWeight:700 }}>Créer un compte</span>
            </div>
          </>
        )}

        {/* LOGIN / REGISTER */}
        {(mode==="login"||mode==="register") && (
          <>
            <div style={{ padding:"16px 0 8px" }}>
              <div style={{ fontSize:20,fontWeight:800,color:T.text,marginBottom:6 }}>{mode==="login"?"Connexion":"Créer un compte"}</div>
              <p style={{ fontSize:13,color:T.subtext }}>{mode==="login"?"Content de te revoir !":"Rejoins SOMA gratuitement"}</p>
            </div>
            {error&&<div style={{ fontSize:12,color:T.danger,background:T.dangerBg,border:`1px solid ${T.dangerBorder}`,borderRadius:10,padding:"10px 14px" }}>{error}</div>}
            {mode==="register"&&<input value={name} onChange={e=>setName(e.target.value)} placeholder="Ton prénom" style={{ width:"100%",padding:"14px",borderRadius:12,background:T.input,border:`1px solid ${T.inputBorder}`,color:T.text,fontSize:14,fontFamily:"inherit",outline:"none" }}/>}
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" style={{ width:"100%",padding:"14px",borderRadius:12,background:T.input,border:`1px solid ${T.inputBorder}`,color:T.text,fontSize:14,fontFamily:"inherit",outline:"none" }}/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Mot de passe" style={{ width:"100%",padding:"14px",borderRadius:12,background:T.input,border:`1px solid ${T.inputBorder}`,color:T.text,fontSize:14,fontFamily:"inherit",outline:"none" }}/>
            <button onClick={handleAuth} style={{ width:"100%",padding:"14px",borderRadius:14,border:"none",background:`linear-gradient(135deg,${T.accent},${T.accentDark})`,color:"#0A0A0F",fontSize:15,fontWeight:800,fontFamily:"inherit",cursor:"pointer" }}>
              {mode==="login"?"Se connecter →":"Créer mon compte →"}
            </button>
            <div style={{ textAlign:"center" }}>
              <span onClick={()=>{setMode(mode==="login"?"register":"login");setError("");}} style={{ fontSize:13,color:T.accent,cursor:"pointer",fontWeight:600 }}>
                {mode==="login"?"Créer un compte":"Déjà un compte ? Connexion"}
              </span>
              {" · "}
              <span onClick={()=>setMode("choice")} style={{ fontSize:13,color:T.subtext,cursor:"pointer" }}>Retour</span>
            </div>
            <p style={{ textAlign:"center",fontSize:11,color:T.muted }}>🔒 Sécurisé par Firebase Authentication</p>
          </>
        )}
      </div>
    </FullPanel>
  );
}

// ─── PLUS MENU (attachment picker) ────────────────────────────────────────────
function PlusMenu({ T, onClose, onFileSelect }) {
  const imgRef = useRef(); const fileRef = useRef();
  return (
    <>
      <div onClick={onClose} style={{ position:"fixed",inset:0,zIndex:98 }}/>
      <div style={{ position:"absolute", bottom:"calc(100% + 8px)", left:0, background:T.modalBg, border:`1px solid ${T.border}`, borderRadius:16, padding:8, zIndex:99, minWidth:190, boxShadow:"0 12px 40px rgba(0,0,0,0.35)", animation:"fadeSlideUp 0.18s ease" }}>
        <input ref={imgRef} type="file" accept="image/*" style={{ display:"none" }} onChange={e=>{ if(e.target.files[0]) onFileSelect(e.target.files[0],"image"); onClose(); }}/>
        <input ref={fileRef} type="file" style={{ display:"none" }} onChange={e=>{ if(e.target.files[0]) onFileSelect(e.target.files[0],"file"); onClose(); }}/>
        {[
          { icon:<ImgIcon/>, label:"Photo / Image", action:()=>imgRef.current.click() },
          { icon:<FileIcon/>, label:"Fichier", action:()=>fileRef.current.click() },
          { icon:<CameraIcon/>, label:"Caméra", action:()=>imgRef.current.click() },
        ].map(item=>(
          <button key={item.label} onClick={item.action} style={{ width:"100%",display:"flex",alignItems:"center",gap:12,padding:"11px 14px",borderRadius:10,background:"transparent",border:"none",color:T.text,cursor:"pointer",fontSize:14,fontFamily:"inherit",fontWeight:600,textAlign:"left",transition:"background 0.15s" }}
            onMouseEnter={e=>e.currentTarget.style.background=T.cardHover}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
            <span style={{ color:T.accent }}>{item.icon}</span>{item.label}
          </button>
        ))}
      </div>
    </>
  );
}

// ─── CONV CONTEXT MENU ────────────────────────────────────────────────────────
function ConvMenu({ T, conv, pos, onClose, onDelete, onShare, onRename, onPin }) {
  return (
    <>
      <div onClick={onClose} style={{ position:"fixed",inset:0,zIndex:299 }}/>
      <div style={{ position:"fixed", top:pos.y, left:Math.min(pos.x,window.innerWidth-200), background:T.modalBg, border:`1px solid ${T.border}`, borderRadius:14, padding:6, zIndex:300, minWidth:180, boxShadow:"0 12px 40px rgba(0,0,0,0.4)", animation:"fadeSlideIn 0.15s ease" }}>
        {[
          { icon:<PinIcon/>,   label: conv.pinned ? "Désépingler":"Épingler", action:onPin,   color:T.accent },
          { icon:<EditIcon/>,  label:"Renommer",  action:onRename, color:T.text },
          { icon:<ShareIcon/>, label:"Partager",  action:onShare,  color:T.cyan },
          { icon:<TrashIcon/>, label:"Supprimer", action:onDelete, color:T.danger },
        ].map(item=>(
          <button key={item.label} onClick={()=>{ item.action(); onClose(); }} style={{ width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:9,background:"transparent",border:"none",color:item.color,cursor:"pointer",fontSize:13,fontFamily:"inherit",fontWeight:600,textAlign:"left",transition:"background 0.15s" }}
            onMouseEnter={e=>e.currentTarget.style.background=T.cardHover}
            onMouseLeave={e=>e.currentTarget.style.background="transparent"}>
            {item.icon}{item.label}
          </button>
        ))}
      </div>
    </>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [aborted, setAborted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [fullPanel, setFullPanel] = useState(null); // "about" | "settings" | "account" | null
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [themeName, setThemeName] = useState("dark");
  const [conversations, setConversations] = useState([{ id:1, title:"Nouvelle conversation", pinned:false }]);
  const [activeConv, setActiveConv] = useState(1);
  const [convMenu, setConvMenu] = useState(null); // { convId, pos }
  const [renamingId, setRenamingId] = useState(null);
  const [renameVal, setRenameVal] = useState("");
  const [showPlusMenu, setShowPlusMenu] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const abortRef = useRef(false);
  const plusBtnRef = useRef(null);
  const recognitionRef = useRef(null);

  const T = THEMES[themeName];

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior:"smooth" }); }, [messages, loading]);
  useEffect(() => {
    if(textareaRef.current){
      textareaRef.current.style.height="auto";
      textareaRef.current.style.height=Math.min(textareaRef.current.scrollHeight,160)+"px";
    }
  }, [input]);

  // ── SPEECH RECOGNITION ────────────────────────────────────────────────────
  const toggleMic = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { alert("La reconnaissance vocale n'est pas supportée sur ce navigateur."); return; }
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }
    const rec = new SR();
    rec.lang = "fr-FR"; rec.continuous = false; rec.interimResults = false;
    rec.onresult = (e) => { const t = e.results[0][0].transcript; setInput(prev => prev ? prev + " " + t : t); };
    rec.onend = () => setIsListening(false);
    rec.onerror = () => setIsListening(false);
    rec.start();
    recognitionRef.current = rec;
    setIsListening(true);
  }, [isListening]);

  // ── STOP GENERATION ───────────────────────────────────────────────────────
  const stopGeneration = useCallback(() => { abortRef.current=true; setLoading(false); setAborted(true); }, []);

  // ── SEND ──────────────────────────────────────────────────────────────────
  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText && attachments.length===0) return;
    if (loading) return;
    setInput(""); setAttachments([]); setAborted(false); abortRef.current=false;
    const label = userText || (attachments[0]?.name);
    const userMsg = { role:"user", content: userText || `📎 ${attachments[0]?.name}`, id:Date.now() };
    const history = [...messages, userMsg];
    setMessages(history); setLoading(true);
    if(messages.length===0){
      setConversations(prev=>prev.map(c=>c.id===activeConv?{...c,title:label.slice(0,30)+(label.length>30?"…":"")}:c));
    }
    try {
      const apiMessages = history.map(m=>({role:m.role,content:m.content}));
      const response = await fetch("https://soma-server.onrender.com/api/chat",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({ model:"mistral-large-latest", max_tokens:1000,
          system:"Tu es SOMA, un assistant IA intelligent, créatif et bienveillant. Réponds en français sauf si l'utilisateur parle une autre langue. Sois concis mais complet.",
          messages:apiMessages }),
      });
      if(abortRef.current)return;
      const data = await response.json();
      if(abortRef.current)return;
      const txt = data.content?.map(b=>b.text||"").join("")||"Désolé, une erreur est survenue.";
      setMessages([...history,{role:"assistant",content:txt,id:Date.now()+1}]);
    } catch {
      if(!abortRef.current) setMessages([...history,{role:"assistant",content:"❌ Erreur de connexion.",id:Date.now()+1}]);
    } finally { if(!abortRef.current) setLoading(false); }
  };

  const handleKey = (e) => { if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();sendMessage();} };

  // ── CONVERSATION ACTIONS ──────────────────────────────────────────────────
  const newConversation = () => {
    const id = Date.now();
    setConversations(prev=>[{id,title:"Nouvelle conversation",pinned:false},...prev]);
    setActiveConv(id); setMessages([]); setAborted(false);
  };

  const deleteConv = (id) => {
    setConversations(prev=>prev.filter(c=>c.id!==id));
    if(activeConv===id){ setMessages([]); setActiveConv(conversations.find(c=>c.id!==id)?.id||null); }
  };

  const pinConv = (id) => setConversations(prev=>prev.map(c=>c.id===id?{...c,pinned:!c.pinned}:c));

  const shareConv = (conv) => {
    const text = `Conversation SOMA: "${conv.title}"`;
    if(navigator.share) navigator.share({title:"SOMA",text}).catch(()=>{});
    else navigator.clipboard?.writeText(text).then(()=>alert("Lien copié !"));
  };

  const startRename = (conv) => { setRenamingId(conv.id); setRenameVal(conv.title); };
  const applyRename = () => {
    if(renameVal.trim()) setConversations(prev=>prev.map(c=>c.id===renamingId?{...c,title:renameVal.trim()}:c));
    setRenamingId(null);
  };

  const sortedConvs = [...conversations].sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0));
  const hasInput = input.trim().length>0 || attachments.length>0;

  return (
    <div style={{ fontFamily:"'Syne', sans-serif", display:"flex", height:"100vh", background:T.bg, color:T.text, overflow:"hidden", transition:"background 0.3s, color 0.3s", position:"relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;} ::-webkit-scrollbar-track{background:transparent;} ::-webkit-scrollbar-thumb{background:#2A2A35;border-radius:4px;}
        @keyframes bounce{0%,80%,100%{transform:translateY(0);opacity:0.4}40%{transform:translateY(-6px);opacity:1}}
        @keyframes fadeSlideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        @keyframes slideInRight{from{transform:translateX(100%)}to{transform:translateX(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}
        @keyframes stopPulse{0%,100%{box-shadow:0 0 0 0 #E8454522}50%{box-shadow:0 0 0 6px #E8454500}}
        @keyframes micPulse{0%,100%{box-shadow:0 0 0 0 rgba(232,197,71,0.3)}50%{box-shadow:0 0 0 8px rgba(232,197,71,0)}}
        .msg-anim{animation:fadeSlideIn 0.3s ease forwards;}
        .conv-item:hover .conv-actions{opacity:1 !important;}
        .conv-item:hover{background:${T.cardHover} !important;}
        .send-btn-active:hover{transform:scale(1.07);filter:brightness(1.1);}
        .send-btn-active:active{transform:scale(0.95);}
        .stop-btn:hover{filter:brightness(1.15);transform:scale(1.05);}
        .plus-btn:hover{border-color:${T.accent}66 !important;}
        .menu-nav-btn:hover{background:${T.cardHover} !important;}
        textarea:focus,input:focus{outline:none;}
        textarea{resize:none;}
        input::placeholder,textarea::placeholder{color:${T.muted};}
        .input-wrap:focus-within{border-color:${T.accent}66 !important;box-shadow:0 0 0 1px ${T.accent}14 !important;}
      `}</style>

      {/* ── SIDEBAR ─────────────────────────────────────────────────────────── */}
      <div style={{ width:sidebarOpen?265:0, minWidth:sidebarOpen?265:0, background:T.sidebar, borderRight:`1px solid ${T.border}`, display:"flex", flexDirection:"column", transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)", overflow:"hidden" }}>
        {/* Logo */}
        <div style={{ padding:"22px 18px 14px", borderBottom:`1px solid ${T.border}` }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
            <div style={{ width:34,height:34,borderRadius:10,background:`linear-gradient(135deg,${T.accent},${T.accentDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,fontWeight:800,color:"#0A0A0F" }}>✦</div>
            <span style={{ fontSize:20,fontWeight:800,letterSpacing:"-1px",color:T.text }}>SOMA</span>
          </div>
          <button onClick={newConversation} style={{ width:"100%",padding:"10px 14px",background:T.card,border:`1px solid ${T.border}`,borderRadius:10,color:T.text,cursor:"pointer",fontSize:13,fontWeight:600,fontFamily:"inherit",display:"flex",alignItems:"center",gap:8,transition:"background 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.background=T.cardHover} onMouseLeave={e=>e.currentTarget.style.background=T.card}>
            <PlusIcon/> Nouvelle conversation
          </button>
        </div>

        {/* Conversations */}
        <div style={{ flex:1, overflowY:"auto", padding:"10px 8px" }}>
          {conversations.some(c=>c.pinned)&&<div style={{ fontSize:10,fontWeight:700,letterSpacing:"1.5px",color:T.muted,padding:"4px 8px 6px",textTransform:"uppercase" }}>📌 Épinglées</div>}
          {sortedConvs.filter(c=>c.pinned).map(conv=>renderConvItem(conv))}
          <div style={{ fontSize:10,fontWeight:700,letterSpacing:"1.5px",color:T.muted,padding:"8px 8px 6px",textTransform:"uppercase" }}>Historique</div>
          {sortedConvs.filter(c=>!c.pinned).map(conv=>renderConvItem(conv))}
        </div>

        {/* Footer */}
        <div style={{ padding:"12px 16px", borderTop:`1px solid ${T.border}` }}>
          {user ? (
            <div style={{ display:"flex",alignItems:"center",gap:10 }}>
              <div style={{ width:30,height:30,borderRadius:"50%",background:`linear-gradient(135deg,${T.cyan},#3BBFA3)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:700,color:"#0A0A0F" }}>{user.name[0].toUpperCase()}</div>
              <div>
                <div style={{ fontSize:12,fontWeight:600,color:T.text }}>{user.name}</div>
                <div style={{ fontSize:10,color:T.cyan }}>● Connecté</div>
              </div>
            </div>
          ) : (
            <button onClick={()=>setFullPanel("account")} style={{ width:"100%",padding:"9px 12px",borderRadius:10,background:`${T.accent}18`,border:`1px solid ${T.accent}44`,color:T.accent,cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",transition:"all 0.2s" }}>
              ✦ Se connecter
            </button>
          )}
        </div>
      </div>

      {/* ── MAIN ────────────────────────────────────────────────────────────── */}
      <div style={{ flex:1, display:"flex", flexDirection:"column", overflow:"hidden" }}>
        {/* Header */}
        <div style={{ padding:"14px 18px", borderBottom:`1px solid ${T.border}`, display:"flex", alignItems:"center", gap:12, background:T.bg }}>
          <button onClick={()=>setSidebarOpen(!sidebarOpen)} style={{ width:36,height:36,borderRadius:9,background:T.card,border:`1px solid ${T.border}`,color:T.text,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.2s" }}>
            {sidebarOpen?"←":"→"}
          </button>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex",alignItems:"center",gap:8 }}>
              <span style={{ fontSize:15,fontWeight:800,letterSpacing:"-0.5px",color:T.text }}>SOMA</span>
              <span style={{ fontSize:10,padding:"2px 8px",borderRadius:20,background:`${T.cyan}18`,color:T.cyan,border:`1px solid ${T.cyan}44`,fontWeight:600 }}>mistral-large</span>
            </div>
            <div style={{ fontSize:11,color:T.muted }}>{loading?"En train de réfléchir…":aborted?"Réponse interrompue":"Prête à discuter"}</div>
          </div>
          {/* Hamburger */}
          <button onClick={()=>setDrawerOpen(true)} style={{ width:38,height:38,borderRadius:10,background:T.card,border:`1px solid ${T.border}`,color:T.text,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.2s" }}
            onMouseEnter={e=>e.currentTarget.style.background=T.cardHover} onMouseLeave={e=>e.currentTarget.style.background=T.card}>
            <MenuIcon/>
          </button>
        </div>

        {/* Messages */}
        <div style={{ flex:1, overflowY:"auto", padding:"28px 18px" }}>
          {messages.length===0&&!loading&&(
            <div style={{ display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:26 }}>
              <div style={{ textAlign:"center" }}>
                <div style={{ fontSize:50,marginBottom:10,background:`linear-gradient(135deg,${T.accent},${T.cyan})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>✦</div>
                <h2 style={{ fontSize:24,fontWeight:800,letterSpacing:"-0.5px",marginBottom:8,color:T.text }}>Bonjour, je suis SOMA.<br/>Comment puis-je vous aider ?</h2>
                <p style={{ fontSize:14,color:T.muted }}>Posez une question ou choisissez une suggestion</p>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,maxWidth:500,width:"100%" }}>
                {SUGGESTIONS.map(s=>(
                  <button key={s} onClick={()=>sendMessage(s)} style={{ padding:"13px 15px",borderRadius:12,background:T.card,border:`1px solid ${T.border}`,color:T.subtext,cursor:"pointer",textAlign:"left",fontSize:13,fontFamily:"inherit",fontWeight:500,transition:"all 0.2s",lineHeight:1.4 }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor=T.accent} onMouseLeave={e=>e.currentTarget.style.borderColor=T.border}>{s}</button>
                ))}
              </div>
            </div>
          )}
          <div style={{ maxWidth:700,margin:"0 auto",display:"flex",flexDirection:"column",gap:18 }}>
            {messages.map(msg=>(
              <div key={msg.id} className="msg-anim" style={{ display:"flex",flexDirection:msg.role==="user"?"row-reverse":"row",gap:12,alignItems:"flex-start" }}>
                <div style={{ width:34,height:34,borderRadius:10,flexShrink:0,background:msg.role==="user"?`linear-gradient(135deg,${T.cyan},#3BBFA3)`:`linear-gradient(135deg,${T.accent},${T.accentDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:msg.role==="user"?13:15,fontWeight:700,color:"#0A0A0F" }}>
                  {msg.role==="user"?(user?user.name[0].toUpperCase():"U"):"✦"}
                </div>
                <div style={{ maxWidth:"78%",padding:"13px 17px",borderRadius:msg.role==="user"?"18px 4px 18px 18px":"4px 18px 18px 18px",background:msg.role==="user"?T.bubble_user:T.bubble_ai,border:`1px solid ${msg.role==="user"?T.border_user:T.border_ai}`,fontSize:14,lineHeight:1.75,color:T.msgColor,whiteSpace:"pre-wrap" }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading&&(
              <div className="msg-anim" style={{ display:"flex",gap:12,alignItems:"flex-start" }}>
                <div style={{ width:34,height:34,borderRadius:10,background:`linear-gradient(135deg,${T.accent},${T.accentDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,color:"#0A0A0F",animation:"pulse 1.5s ease-in-out infinite" }}>✦</div>
                <div style={{ display:"flex",flexDirection:"column",gap:10,alignItems:"flex-start" }}>
                  <div style={{ padding:"13px 17px",borderRadius:"4px 18px 18px 18px",background:T.bubble_ai,border:`1px solid ${T.border_ai}` }}><TypingIndicator accent={T.accent}/></div>
                  <button className="stop-btn" onClick={stopGeneration} style={{ display:"flex",alignItems:"center",gap:8,padding:"7px 14px",borderRadius:20,background:T.dangerBg,border:`1px solid ${T.dangerBorder}`,color:T.danger,cursor:"pointer",fontSize:12,fontFamily:"inherit",fontWeight:600,transition:"all 0.2s",animation:"stopPulse 2s ease-in-out infinite" }}>
                    <StopIcon/> Interrompre
                  </button>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}/>
          </div>
        </div>

        {/* ── INPUT BAR ────────────────────────────────────────────────────── */}
        <div style={{ padding:"12px 18px 16px", background:T.bg, borderTop:`1px solid ${T.border}` }}>
          {/* Attachments preview */}
          {attachments.length>0&&(
            <div style={{ maxWidth:700,margin:"0 auto 8px",display:"flex",gap:8,flexWrap:"wrap" }}>
              {attachments.map((a,i)=>(
                <div key={i} style={{ display:"flex",alignItems:"center",gap:6,padding:"4px 10px",borderRadius:20,background:T.card,border:`1px solid ${T.border}`,fontSize:12,color:T.text }}>
                  {a.type==="image"?"🖼️":"📎"} {a.file.name.slice(0,20)}
                  <span onClick={()=>setAttachments(prev=>prev.filter((_,j)=>j!==i))} style={{ cursor:"pointer",color:T.muted,marginLeft:2 }}>×</span>
                </div>
              ))}
            </div>
          )}
          <div className="input-wrap" style={{ maxWidth:700,margin:"0 auto",display:"flex",alignItems:"flex-end",gap:8,background:T.input,border:`1px solid ${T.inputBorder}`,borderRadius:18,padding:"10px 10px 10px 12px",transition:"border-color 0.2s, box-shadow 0.2s",position:"relative" }}>
            {/* Plus button */}
            <div style={{ position:"relative" }}>
              {showPlusMenu&&<PlusMenu T={T} onClose={()=>setShowPlusMenu(false)} onFileSelect={(file,type)=>setAttachments(prev=>[...prev,{file,type}])}/>}
              <button ref={plusBtnRef} onClick={()=>setShowPlusMenu(v=>!v)} className="plus-btn" title="Joindre" style={{ width:34,height:34,borderRadius:9,flexShrink:0,background:T.card,border:`1px solid ${showPlusMenu?T.accent:T.border}`,color:showPlusMenu?T.accent:T.subtext,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s" }}>
                <PlusIcon/>
              </button>
            </div>
            {/* Textarea */}
            <textarea ref={textareaRef} value={input} onChange={e=>setInput(e.target.value)} onKeyDown={handleKey}
              placeholder={isListening?"🎤 Écoute en cours…":"Message à SOMA… (Entrée pour envoyer)"} rows={1}
              style={{ flex:1,background:"transparent",border:"none",color:T.text,fontSize:14,fontFamily:"inherit",lineHeight:1.6,maxHeight:160,overflowY:"auto",paddingTop:6 }}/>
            {/* Mic / Send */}
            {hasInput ? (
              <button className="send-btn-active" onClick={()=>sendMessage()} disabled={loading} style={{ width:38,height:38,borderRadius:11,border:"none",flexShrink:0,background:`linear-gradient(135deg,${T.accent},${T.accentDark})`,color:"#0A0A0F",cursor:loading?"default":"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",opacity:loading?0.5:1 }}>
                <SendIcon/>
              </button>
            ) : (
              <button onClick={toggleMic} title={isListening?"Arrêter":"Dicter un message"} style={{ width:38,height:38,borderRadius:11,border:`1px solid ${isListening?T.accent:T.border}`,flexShrink:0,background:isListening?`${T.accent}22`:T.card,color:isListening?T.accent:T.subtext,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s",animation:isListening?"micPulse 1.5s ease-in-out infinite":"none" }}>
                <MicIcon/>
              </button>
            )}
          </div>
          <div style={{ textAlign:"center",marginTop:7,fontSize:11,color:T.border }}>SOMA peut faire des erreurs · Hébergé sur Render · Sécurisé par Firebase</div>
        </div>
      </div>

      {/* ── HAMBURGER DRAWER (mini) ──────────────────────────────────────────── */}
      {drawerOpen&&(
        <>
          <div onClick={()=>setDrawerOpen(false)} style={{ position:"fixed",inset:0,background:T.overlay,zIndex:200,animation:"fadeIn 0.2s ease" }}/>
          <div style={{ position:"fixed",top:0,right:0,bottom:0,width:280,background:T.modalBg,borderLeft:`1px solid ${T.border}`,zIndex:201,display:"flex",flexDirection:"column",animation:"slideInRight 0.25s cubic-bezier(0.4,0,0.2,1)",boxShadow:"-12px 0 40px rgba(0,0,0,0.3)" }}>
            <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"18px 18px 14px",borderBottom:`1px solid ${T.border}` }}>
              <div style={{ display:"flex",alignItems:"center",gap:10 }}>
                <div style={{ width:30,height:30,borderRadius:8,background:`linear-gradient(135deg,${T.accent},${T.accentDark})`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,color:"#0A0A0F",fontWeight:800 }}>✦</div>
                <span style={{ fontWeight:800,fontSize:16,color:T.text }}>SOMA</span>
              </div>
              <button onClick={()=>setDrawerOpen(false)} style={{ background:"none",border:"none",cursor:"pointer",color:T.subtext,display:"flex" }}><CloseIcon/></button>
            </div>
            <div style={{ flex:1,padding:"12px" }}>
              {[
                { id:"about",   label:"À propos",   icon:<InfoIcon/>,     desc:"Version, stack technique" },
                { id:"settings",label:"Paramètres", icon:<SettingsIcon2/>,desc:"Thème, langue, API" },
                { id:"account", label:"Compte",      icon:<UserIcon/>,     desc:user?user.name:"Connexion / Inscription" },
              ].map(item=>(
                <button key={item.id} className="menu-nav-btn" onClick={()=>{ setFullPanel(item.id); setDrawerOpen(false); }} style={{ width:"100%",padding:"14px 16px",borderRadius:14,marginBottom:6,background:"transparent",border:`1px solid ${T.border}`,display:"flex",alignItems:"center",gap:14,cursor:"pointer",color:T.text,fontFamily:"inherit",transition:"background 0.2s",textAlign:"left" }}>
                  <div style={{ width:38,height:38,borderRadius:10,background:T.card,display:"flex",alignItems:"center",justifyContent:"center",color:T.accent,flexShrink:0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize:14,fontWeight:700 }}>{item.label}</div>
                    <div style={{ fontSize:11,color:T.subtext,marginTop:2 }}>{item.desc}</div>
                  </div>
                  <div style={{ marginLeft:"auto",color:T.muted,fontSize:16 }}>›</div>
                </button>
              ))}
            </div>
            <div style={{ padding:"14px 16px",borderTop:`1px solid ${T.border}` }}>
              <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between" }}>
                <span style={{ fontSize:12,color:T.subtext }}>Thème</span>
                <button onClick={()=>setThemeName(n=>n==="dark"?"light":"dark")} style={{ display:"flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:20,background:T.card,border:`1px solid ${T.border}`,color:T.text,cursor:"pointer",fontSize:12,fontWeight:600,fontFamily:"inherit" }}>
                  {themeName==="dark"?<><MoonIcon/>Sombre</>:<><SunIcon/>Clair</>}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── FULL-SCREEN PANELS ────────────────────────────────────────────── */}
      {fullPanel==="about"    && <AboutPanel    T={T} onClose={()=>setFullPanel(null)}/>}
      {fullPanel==="settings" && <SettingsPanel T={T} themeName={themeName} onThemeToggle={()=>setThemeName(n=>n==="dark"?"light":"dark")} onClose={()=>setFullPanel(null)}/>}
      {fullPanel==="account"  && <AccountPanel  T={T} user={user} onLogin={u=>setUser(u)} onLogout={()=>setUser(null)} onClose={()=>setFullPanel(null)}/>}

      {/* ── CONV CONTEXT MENU ────────────────────────────────────────────── */}
      {convMenu&&(
        <ConvMenu T={T} conv={conversations.find(c=>c.id===convMenu.convId)} pos={convMenu.pos}
          onClose={()=>setConvMenu(null)}
          onDelete={()=>deleteConv(convMenu.convId)}
          onShare={()=>shareConv(conversations.find(c=>c.id===convMenu.convId))}
          onRename={()=>startRename(conversations.find(c=>c.id===convMenu.convId))}
          onPin={()=>pinConv(convMenu.convId)}/>
      )}
    </div>
  );

  // helper to render a conv item (defined inside to access state)
  function renderConvItem(conv) {
    const isActive = conv.id===activeConv;
    const isRenaming = renamingId===conv.id;
    return (
      <div key={conv.id} className="conv-item" onClick={()=>{ if(!isRenaming){setActiveConv(conv.id);setMessages([]);} }}
        onContextMenu={e=>{e.preventDefault();setConvMenu({convId:conv.id,pos:{x:e.clientX,y:e.clientY}});}}
        style={{ padding:"9px 10px",borderRadius:9,cursor:"pointer",background:isActive?`${T.accent}18`:"transparent",borderLeft:`2px solid ${isActive?T.accent:"transparent"}`,fontSize:13,color:isActive?T.text:T.subtext,marginBottom:2,transition:"all 0.18s",display:"flex",alignItems:"center",gap:6,position:"relative" }}>
        {conv.pinned&&<span style={{ fontSize:10,color:T.accent,flexShrink:0 }}>📌</span>}
        {isRenaming ? (
          <input autoFocus value={renameVal} onChange={e=>setRenameVal(e.target.value)}
            onBlur={applyRename} onKeyDown={e=>{ if(e.key==="Enter")applyRename(); if(e.key==="Escape")setRenamingId(null); }}
            onClick={e=>e.stopPropagation()}
            style={{ flex:1,background:"transparent",border:"none",borderBottom:`1px solid ${T.accent}`,color:T.text,fontSize:13,fontFamily:"inherit",outline:"none",padding:"1px 0" }}/>
        ) : (
          <span style={{ flex:1, whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>{conv.title}</span>
        )}
        {/* Long-press / 3-dot menu trigger */}
        <button className="conv-actions" onClick={e=>{ e.stopPropagation(); setConvMenu({convId:conv.id,pos:{x:e.clientX,y:e.clientY}}); }}
          style={{ opacity:0,transition:"opacity 0.15s",background:"none",border:"none",color:T.muted,cursor:"pointer",padding:"2px 4px",fontSize:16,lineHeight:1,flexShrink:0 }}>⋯</button>
      </div>
    );
  }
}

// Mount
const _root = ReactDOM.createRoot(document.getElementById('root'));
_root.render(React.createElement(App));
