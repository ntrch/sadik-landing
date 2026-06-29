/* @ds-bundle: {"format":3,"namespace":"SADIKDesignSystem_019e23","components":[],"sourceHashes":{"DashboardScreen.jsx":"184bde3d5f86","components.jsx":"c1787c5fd89d","ui_kits/sadik-app/AgendaScreen.jsx":"887c7b56ed36","ui_kits/sadik-app/App.jsx":"956e9c4ff1a3","ui_kits/sadik-app/BottomNav.jsx":"c0d082f5988b","ui_kits/sadik-app/ChatScreen.jsx":"2ee9852a4fa5","ui_kits/sadik-app/DashboardScreen.jsx":"ea33730f9695","ui_kits/sadik-app/HabitsScreen.jsx":"29f8648af2e9","ui_kits/sadik-app/HeaderBar.jsx":"2915c7905bcd","ui_kits/sadik-app/TasksScreen.jsx":"a58dae2ab742","ui_kits/sadik-app/VoiceScreen.jsx":"e6cffd21874a","ui_kits/sadik-app/components.jsx":"8c0ce03d86dc","ui_kits/sadik-app/icons.jsx":"c3823f761899","ui_kits/sadik-app/macos-window.jsx":"e96bd3ed42db","ui_kits/sadik-app/tweaks-panel.jsx":"22c052960f83"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SADIKDesignSystem_019e23 = window.SADIKDesignSystem_019e23 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// DashboardScreen.jsx
try { (() => {
/* global JSX, React, Icon, Card, StatTile, ModeChip, Pill, PrimaryButton, MODES, hexA */

function DashboardScreen({
  tweaks
}) {
  const [activeMode, setActiveMode] = React.useState('derinKod');
  const greet = (() => {
    const h = new Date().getHours();
    if (h < 6) return {
      eyebrow: 'Gece yarısı',
      title: 'İyi geceler'
    };
    if (h < 12) return {
      eyebrow: 'Sabah',
      title: 'Günaydın'
    };
    if (h < 17) return {
      eyebrow: 'Öğleden sonra',
      title: 'İyi günler'
    };
    if (h < 21) return {
      eyebrow: 'Akşam',
      title: 'İyi akşamlar'
    };
    return {
      eyebrow: 'Gece',
      title: 'İyi geceler'
    };
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, greet.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, greet.title)), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Bug\xFCnk\xFC \xF6zet",
    icon: /*#__PURE__*/React.createElement(Icon.Activity, {
      size: 15
    }),
    iconColor: "#A78BFA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.Clock, {
      size: 18
    }),
    label: "Ekran s\xFCresi",
    value: "4s 30dk",
    color: "#7DD3FC"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.CheckSquare, {
      size: 18
    }),
    label: "Tamamlanan",
    value: "3 g\xF6rev",
    color: "#6EE7B7"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.Flame, {
      size: 18
    }),
    label: "Pomodoro",
    value: "5 oturum",
    color: "#FDBA74"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.Sparkles, {
      size: 18
    }),
    label: "Aktif mod",
    value: "Derin Kod",
    color: "#A78BFA"
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "\xC7al\u0131\u015Fma modlar\u0131",
    icon: /*#__PURE__*/React.createElement(Icon.Sparkles, {
      size: 15
    }),
    iconColor: "#67E8F9",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        fontSize: 11,
        color: 'rgb(var(--text-secondary))',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon.Plus, {
      size: 12
    }), " \xD6zel mod")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, MODES.map(m => /*#__PURE__*/React.createElement(ModeChip, {
    key: m.key,
    mode: m,
    active: activeMode === m.key,
    onClick: () => setActiveMode(m.key)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Yap\u0131lacaklar",
    icon: /*#__PURE__*/React.createElement(Icon.ListTodo, {
      size: 15
    }),
    iconColor: "#67E8F9",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        fontSize: 11,
        color: '#A78BFA',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, "T\xFCm\xFCn\xFC g\xF6r ", /*#__PURE__*/React.createElement(Icon.ArrowRight, {
      size: 11
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MiniTask, {
    color: "#FDBA74",
    running: true,
    title: "Sesli komut ak\u0131\u015F testi",
    priority: "Y\xFCksek",
    pomo: 3
  }), /*#__PURE__*/React.createElement(MiniTask, {
    color: "#FCD34D",
    title: "T8.1 \u2014 kay\u0131p animasyonlar",
    priority: "Y\xFCksek",
    date: "14 Kas"
  }), /*#__PURE__*/React.createElement(MiniTask, {
    color: "#A78BFA",
    title: "Beta i\xE7in changelog yaz",
    priority: "Normal",
    date: "15 Kas"
  }), /*#__PURE__*/React.createElement(MiniTask, {
    color: "#7DD3FC",
    title: "VAD e\u015Fiklerini \xF6l\xE7",
    priority: "Normal",
    date: "16 Kas"
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Uygulama kullan\u0131m\u0131",
    icon: /*#__PURE__*/React.createElement(Icon.BarChart, {
      size: 15
    }),
    iconColor: "#6EE7B7"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(UsageRow, {
    rank: 1,
    name: "VS Code",
    time: "2s 14dk",
    pct: 100,
    color: "#ef4444"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 2,
    name: "Google Chrome",
    time: "1s 32dk",
    pct: 70,
    color: "#F59E0B"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 3,
    name: "Slack",
    time: "48dk",
    pct: 36,
    color: "#FCD34D"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 4,
    name: "Notion",
    time: "22dk",
    pct: 17,
    color: "#84CC16"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 5,
    name: "Spotify",
    time: "14dk",
    pct: 11,
    color: "#22C55E"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Son d\xFC\u015F\xFCnceler",
    icon: /*#__PURE__*/React.createElement(Icon.Lightbulb, {
      size: 15
    }),
    iconColor: "#FCD34D",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        fontSize: 11,
        color: '#FCD34D',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, "Beyin f\u0131rt\u0131nas\u0131 ", /*#__PURE__*/React.createElement(Icon.ArrowRight, {
      size: 11
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "14:02",
    tag: "fikir",
    color: "#FCD34D",
    text: "Pomodoro bitiminde OLED'de mini bir kutlama animasyonu yapsak \u2014 'goodbye_to_idle' aras\u0131na."
  }), /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "11:48",
    tag: "not",
    color: "#7DD3FC",
    text: "VAD e\u015Fi\u011Fi 0.6 fazla agresif. T\xFCrk\xE7e nefes seslerini konu\u015Fma san\u0131yor; 0.65'e \xE7ekip yeniden \xF6l\xE7elim."
  }), /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "10:22",
    tag: "soru",
    color: "#F472B6",
    text: "Custom mode'a sesli k\u0131sayol atamak m\xFCmk\xFCn olmal\u0131 m\u0131? 'Tasar\u0131m moduna ge\xE7' \xF6rne\u011Fi \xFCzerinde d\xFC\u015F\xFCn."
  }), /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "09:05",
    tag: "\xF6neri",
    color: "#A78BFA",
    text: "Onboarding'in 3. ekran\u0131nda KVKK metnini \xF6zet + tam linkle ikiye ay\u0131r; uzun metni okumuyorlar."
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Pomodoro",
    icon: /*#__PURE__*/React.createElement(Icon.Flame, {
      size: 15
    }),
    iconColor: "#FDBA74"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '3px solid rgba(253,186,116,0.3)',
      borderTopColor: '#FDBA74',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 17,
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em'
    }
  }, "14:32"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Sesli komut ak\u0131\u015F testi"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-muted))',
      marginBottom: 10
    }
  }, "3. oturum \xB7 odaklanma faz\u0131"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon.Pause, {
      size: 12
    })
  }, "Duraklat"), /*#__PURE__*/React.createElement(PrimaryButton, {
    size: "sm",
    variant: "secondary"
  }, "Atla")))))));
}
function MiniTask({
  color,
  title,
  priority,
  pomo,
  date,
  running
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...{
        position: 'relative',
        padding: '10px 12px 10px 14px',
        background: `${color}1F`,
        border: `1px solid ${color}66`,
        borderRadius: 14
      },
      background: "rgb(31, 31, 31)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 8,
      bottom: 8,
      width: 3,
      borderRadius: 9999,
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: color,
      marginTop: 5,
      flexShrink: 0,
      animation: running ? 'glow 1.4s ease-in-out infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      fontSize: 10
    }
  }, priority && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 7px',
      borderRadius: 6,
      background: `${color}1F`,
      color,
      border: `1px solid ${color}55`
    }
  }, /*#__PURE__*/React.createElement(Icon.Flag, {
    size: 9
  }), " ", priority), date && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 7px',
      borderRadius: 6,
      background: 'rgb(var(--bg-card))',
      color: 'rgb(var(--text-secondary))',
      border: '1px solid rgb(var(--border))'
    }
  }, date), pomo > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 7px',
      borderRadius: 6,
      background: 'rgba(253,186,116,0.12)',
      color: '#FDBA74',
      border: '1px solid rgba(253,186,116,0.3)'
    }
  }, "\uD83D\uDD25 ", pomo)));
}
function UsageRow({
  rank,
  name,
  time,
  pct,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 11,
      fontWeight: 700,
      color,
      width: 18,
      textAlign: 'right'
    }
  }, "#", rank), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-secondary))'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 9999,
      background: 'rgb(var(--bg-input))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: color,
      borderRadius: 9999
    }
  }))));
}
window.DashboardScreen = DashboardScreen;
function ThoughtRow({
  time,
  tag,
  color,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '38px 56px 1fr',
      gap: 10,
      alignItems: 'flex-start',
      padding: '8px 10px',
      borderRadius: 12,
      background: 'rgb(var(--bg-input) / 0.5)',
      border: '1px solid rgb(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: 'rgb(var(--text-muted))',
      paddingTop: 2
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '2px 7px',
      borderRadius: 6,
      background: `${color}22`,
      color,
      border: `1px solid ${color}55`,
      textAlign: 'center',
      height: 18,
      lineHeight: '13px'
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'rgb(var(--text-primary))'
    }
  }, text));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// components.jsx
try { (() => {
/* global JSX, React, Icon */
/* Shared primitives + mode catalog. */

const MODES = [{
  key: 'derinKod',
  label: 'Derin Kod',
  icon: 'Code',
  color: '#67E8F9'
}, {
  key: 'genelCalisma',
  label: 'Genel Çalışma',
  icon: 'Briefcase',
  color: '#A78BFA'
}, {
  key: 'mola',
  label: 'Mola',
  icon: 'Coffee',
  color: '#6EE7B7'
}, {
  key: 'toplanti',
  label: 'Toplantı',
  icon: 'Users',
  color: '#FCD34D'
}, {
  key: 'yazmaAkisi',
  label: 'Yazma Akışı',
  icon: 'Pencil',
  color: '#F472B6'
}, {
  key: 'okuma',
  label: 'Okuma',
  icon: 'Book',
  color: '#A3E635'
}];
function modeByKey(key) {
  return MODES.find(m => m.key === key) ?? MODES[0];
}

// rgba(hex, alpha-as-hex-suffix) — append AA hex pair
function hexA(hex, aa) {
  if (!hex || hex.length !== 7) return hex;
  return hex + aa;
}

// ── Primary button ───────────────────────────────────────────────
function PrimaryButton({
  children,
  onClick,
  icon,
  disabled,
  variant = 'primary',
  size = 'md',
  style
}) {
  const sizes = {
    sm: {
      padding: '7px 12px',
      fontSize: 12
    },
    md: {
      padding: '10px 18px',
      fontSize: 13
    },
    lg: {
      padding: '12px 22px',
      fontSize: 14
    }
  };
  const variants = {
    primary: {
      background: '#A78BFA',
      color: '#fff'
    },
    secondary: {
      background: 'rgb(var(--bg-input))',
      color: 'rgb(var(--text-primary))',
      border: '1px solid rgb(var(--border))'
    },
    ghost: {
      background: 'transparent',
      color: 'rgb(var(--text-secondary))'
    },
    danger: {
      background: 'rgba(252,165,165,0.12)',
      color: '#FCA5A5',
      border: '1px solid rgba(252,165,165,0.3)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 14,
      fontWeight: 600,
      transition: 'opacity 150ms, transform 150ms',
      whiteSpace: 'nowrap',
      opacity: disabled ? 0.4 : 1,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.opacity = 0.88;
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? 0.4 : 1;
      e.currentTarget.style.transform = 'none';
    }
  }, icon, children);
}

// ── Icon-only round button ──────────────────────────────────────
function IconButton({
  icon,
  onClick,
  active,
  title,
  color = '#9AA3B2',
  activeColor
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: active ? `${activeColor || '#A78BFA'}22` : 'rgb(var(--bg-input))',
      color: active ? activeColor || '#A78BFA' : color,
      border: active ? `1px solid ${activeColor || '#A78BFA'}55` : '1px solid rgb(var(--border-subtle))',
      transition: 'all 150ms'
    }
  }, icon);
}

// ── Card ─────────────────────────────────────────────────────────
function Card({
  title,
  eyebrow,
  icon,
  iconColor,
  children,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      padding: 18,
      ...style
    }
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 10,
      background: `${iconColor || '#A78BFA'}22`,
      border: `1px solid ${iconColor || '#A78BFA'}55`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: iconColor || '#A78BFA',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 2,
      color: "rgb(255, 255, 255)",
      height: "14px",
      fontSize: "24px"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, title))), action), children);
}

// ── Stat tile ────────────────────────────────────────────────────
function StatTile({
  icon,
  label,
  value,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color,
      marginBottom: 8
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      fontSize: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      color: 'rgb(var(--text-primary))'
    }
  }, value));
}

// ── Mode chip ────────────────────────────────────────────────────
function ModeChip({
  mode,
  active,
  onClick
}) {
  const c = mode.color;
  const IconComp = Icon[mode.icon];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 14,
      fontWeight: 600,
      fontSize: 13,
      background: active ? hexA(c, '33') : '#1f1f23',
      border: active ? `2px solid ${c}` : `2px solid ${hexA(c, '55')}`,
      color: active ? c : hexA(c, 'CC'),
      transition: 'all 150ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      boxShadow: `0 0 6px ${c}`,
      flexShrink: 0
    }
  }), IconComp && /*#__PURE__*/React.createElement(IconComp, {
    size: 14
  }), mode.label);
}

// ── Toggle ───────────────────────────────────────────────────────
function Toggle({
  on,
  onChange,
  color = '#6EE7B7'
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!on),
    style: {
      width: 34,
      height: 20,
      borderRadius: 9999,
      position: 'relative',
      flexShrink: 0,
      background: on ? color : 'rgb(var(--bg-input))',
      border: `1px solid ${on ? color : 'rgb(var(--border))'}`,
      transition: 'all 180ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 180ms'
    }
  }));
}

// ── Pill / status badge ──────────────────────────────────────────
function Pill({
  color = '#A78BFA',
  children,
  dot,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 9999,
      background: `${color}26`,
      color,
      border: `1px solid ${color}4D`,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.02em',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color
    }
  }), children);
}

// ── OLED face preview ────────────────────────────────────────────
function OledFace({
  state = 'idle',
  size = 'sm'
}) {
  // Two eyes; expressions: idle (open), thinking (blink), talking (smile)
  const W = size === 'lg' ? 200 : 110;
  const H = size === 'lg' ? 76 : 42;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#000',
      borderRadius: 14,
      border: '1px solid rgba(167,139,250,0.3)',
      boxShadow: '0 0 1px rgba(167,139,250,0.3), 0 0 12px rgba(167,139,250,0.18)',
      padding: size === 'lg' ? '18px 22px' : '10px 14px',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      opacity: "0"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: "0 0 200 70"
  }, state === 'thinking' ? /*#__PURE__*/React.createElement("g", {
    fill: "#A78BFA"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "32",
    width: "36",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "124",
    y: "32",
    width: "36",
    height: "4",
    rx: "2"
  })) : state === 'talking' ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "32",
    r: "10",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "32",
    r: "10",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 50 Q 100 60 120 50",
    stroke: "#A78BFA",
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "34",
    r: "14",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "34",
    r: "14",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "63",
    cy: "32",
    r: "3",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "143",
    cy: "32",
    r: "3",
    fill: "#000"
  }))), size === 'lg' && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: '#A78BFA',
      fontSize: 10,
      letterSpacing: '0.12em'
    }
  }, "SADIK \xB7 ", state));
}

// ── Avatar bubble (assistant 'S') ───────────────────────────────
function SAvatar({
  size = 28
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'rgba(167,139,250,0.20)',
      border: '1px solid rgba(167,139,250,0.30)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#A78BFA',
      fontWeight: 700,
      fontSize: size * 0.42,
      flexShrink: 0
    }
  }, "S");
}
Object.assign(window, {
  MODES,
  modeByKey,
  hexA,
  PrimaryButton,
  IconButton,
  Card,
  StatTile,
  ModeChip,
  Toggle,
  Pill,
  OledFace,
  SAvatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/AgendaScreen.jsx
try { (() => {
/* global JSX, React, Icon, Card, Pill */

const HOURS = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
const EVENTS = [{
  start: 9,
  dur: 1,
  title: 'Stand-up · ekip',
  source: 'gcal',
  color: '#A78BFA',
  loc: 'Google Meet'
}, {
  start: 10.5,
  dur: 1.5,
  title: 'UX review — onboarding',
  source: 'gcal',
  color: '#67E8F9',
  loc: 'Toplantı odası B'
}, {
  start: 13,
  dur: 0.5,
  title: 'Öğle yemeği',
  source: 'sadik',
  color: '#6EE7B7',
  loc: ''
}, {
  start: 14,
  dur: 1.5,
  title: 'Derin Kod · T8.1',
  source: 'sadik',
  color: '#FDBA74',
  loc: 'Kendin için bloklandı'
}, {
  start: 16,
  dur: 1,
  title: 'Sürüm hazırlığı · changelog',
  source: 'notion',
  color: '#F472B6',
  loc: 'Notion'
}];
function AgendaScreen() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Cuma, 14 Kas\u0131m"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Ajanda")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: "#A78BFA"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/integrations/google-calendar.svg",
    width: "11",
    height: "11",
    style: {
      verticalAlign: -1,
      marginRight: 4
    }
  }), "Google Calendar"), /*#__PURE__*/React.createElement(Pill, {
    color: "#67E8F9"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/integrations/notion.svg",
    width: "11",
    height: "11",
    style: {
      verticalAlign: -1,
      marginRight: 4
    }
  }), "Notion"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 280px',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Bug\xFCn",
    icon: /*#__PURE__*/React.createElement(Icon.CalendarDays, {
      size: 15
    }),
    iconColor: "#A78BFA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: 380
    }
  }, HOURS.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      position: 'absolute',
      top: i * 38,
      left: 0,
      right: 0,
      height: 38,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      borderTop: '1px dashed rgb(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10,
      color: 'rgb(var(--text-muted))',
      width: 36,
      paddingTop: 1
    }
  }, h))), EVENTS.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: 'absolute',
      top: (e.start - 9) * 38 + 4,
      height: e.dur * 38 - 8,
      left: 56,
      right: 4,
      background: `${e.color}1F`,
      borderLeft: `3px solid ${e.color}`,
      borderRadius: 8,
      padding: '6px 10px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'rgb(var(--text-primary))'
    }
  }, e.title), e.loc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: 'rgb(var(--text-secondary))'
    }
  }, e.loc))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "S\u0131rada"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 4
    }
  }, "UX review \u2014 onboarding"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-secondary))',
      marginBottom: 10
    }
  }, "10:30 \u2014 12:00 \xB7 Toplant\u0131 odas\u0131 B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: "#67E8F9"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/integrations/google-meet.svg",
    width: "11",
    height: "11",
    style: {
      verticalAlign: -1,
      marginRight: 4
    }
  }), "Meet'e kat\u0131l"))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "SADIK \xF6nerisi",
    icon: /*#__PURE__*/React.createElement(Icon.Sparkles, {
      size: 14
    }),
    iconColor: "#A78BFA"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.55,
      color: 'rgb(var(--text-primary))'
    }
  }, "14:00 \u2014 15:30 aras\u0131 bo\u015F. ", /*#__PURE__*/React.createElement("strong", null, "Derin Kod"), " modu i\xE7in iyi bir dilim. Bloklay\u0131m m\u0131?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '6px 12px',
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 600,
      background: '#A78BFA',
      color: '#fff'
    }
  }, "Evet, blokla"), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: '6px 12px',
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 600,
      background: 'rgb(var(--bg-input))',
      color: 'rgb(var(--text-secondary))',
      border: '1px solid rgb(var(--border))'
    }
  }, "Daha sonra"))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Hava"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Icon.CloudSun, {
    size: 36,
    strokeWidth: 1.3
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 24,
      fontWeight: 700
    }
  }, "18\xB0"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-secondary))'
    }
  }, "\u0130stanbul \xB7 par\xE7al\u0131 bulutlu")))))));
}
window.AgendaScreen = AgendaScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/AgendaScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/App.jsx
try { (() => {
/* global JSX, React */
/* Main app shell — combines HeaderBar + body screen + BottomNav, fixed Electron-window size. */
/* global HeaderBar, BottomNav, DashboardScreen, TasksScreen, ChatScreen, VoiceScreen, HabitsScreen, AgendaScreen, TweaksPanel, TweakSection, TweakToggle, TweakText, useTweaks */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "wakeWord": true,
  "focusRunning": false,
  "focusTime": "14:32",
  "focusTask": "Sesli komut akış testi"
} /*EDITMODE-END*/;
function App() {
  const [route, setRoute] = React.useState('dashboard');
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const tweaks = t;
  const setTweaks = updater => {
    const next = typeof updater === 'function' ? updater(t) : updater;
    setTweak(next);
  };
  const [showVoice, setShowVoice] = React.useState(false);
  const Screen = (() => {
    if (showVoice) return /*#__PURE__*/React.createElement(VoiceScreen, null);
    switch (route) {
      case 'dashboard':
        return /*#__PURE__*/React.createElement(DashboardScreen, {
          tweaks: tweaks,
          setTweak: setTweak
        });
      case 'tasks':
        return /*#__PURE__*/React.createElement(TasksScreen, null);
      case 'agenda':
        return /*#__PURE__*/React.createElement(AgendaScreen, null);
      case 'habits':
        return /*#__PURE__*/React.createElement(HabitsScreen, null);
      case 'chat':
        return /*#__PURE__*/React.createElement(ChatScreen, null);
      case 'memory':
        return /*#__PURE__*/React.createElement(PlaceholderScreen, {
          title: "Beyin F\u0131rt\u0131nas\u0131",
          subtitle: "Yak\u0131nda \u2014 d\xFC\u015F\xFCnce ve notlar buraya kaydedilecek.",
          color: "#FCD34D",
          icon: "Lightbulb"
        });
      case 'workspace':
        return /*#__PURE__*/React.createElement(PlaceholderScreen, {
          title: "\xC7al\u0131\u015Fma Alan\u0131",
          subtitle: "Yak\u0131nda \u2014 derin odak i\xE7in haz\u0131r kurulumlar.",
          color: "#F472B6",
          icon: "Rocket"
        });
      case 'insights':
        return /*#__PURE__*/React.createElement(PlaceholderScreen, {
          title: "Kullan\u0131m",
          subtitle: "Yak\u0131nda \u2014 haftal\u0131k profilin ve ekran s\xFCresi.",
          color: "#6EE7B7",
          icon: "BarChart"
        });
      default:
        return /*#__PURE__*/React.createElement(DashboardScreen, {
          tweaks: tweaks,
          setTweak: setTweak
        });
    }
  })();
  return /*#__PURE__*/React.createElement("div", {
    className: "app-window"
  }, /*#__PURE__*/React.createElement(HeaderBar, {
    tweaks: tweaks,
    setTweaks: setTweaks
  }), route === 'chat' && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 28px',
      borderBottom: '1px solid rgb(var(--border-subtle))',
      display: 'flex',
      gap: 8,
      paddingTop: 12,
      paddingBottom: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowVoice(false),
    style: {
      padding: '8px 16px',
      borderRadius: 14,
      fontSize: 12,
      fontWeight: 600,
      background: !showVoice ? 'rgba(167,139,250,0.20)' : 'rgb(var(--bg-card))',
      color: !showVoice ? '#A78BFA' : 'rgb(var(--text-secondary))',
      border: !showVoice ? '1px solid rgba(167,139,250,0.3)' : '1px solid rgb(var(--border))',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.Chat, {
    size: 13
  }), " Sohbet"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowVoice(true),
    style: {
      padding: '8px 16px',
      borderRadius: 14,
      fontSize: 12,
      fontWeight: 600,
      background: showVoice ? 'rgba(103,232,249,0.20)' : 'rgb(var(--bg-card))',
      color: showVoice ? '#67E8F9' : 'rgb(var(--text-secondary))',
      border: showVoice ? '1px solid rgba(103,232,249,0.3)' : '1px solid rgb(var(--border))',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon.Mic, {
    size: 13
  }), " Sesli")), /*#__PURE__*/React.createElement("main", {
    className: "app-body fade-in",
    key: route + showVoice
  }, Screen), /*#__PURE__*/React.createElement(BottomNav, {
    current: route,
    onNavigate: r => {
      setRoute(r);
      setShowVoice(false);
    }
  }), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Odaklanma"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "\xC7al\u0131\u015F\u0131yor",
    value: tweaks.focusRunning,
    onChange: v => setTweak('focusRunning', v)
  }), /*#__PURE__*/React.createElement(TweakText, {
    label: "G\xF6rev",
    value: tweaks.focusTask,
    onChange: v => setTweak('focusTask', v)
  }), /*#__PURE__*/React.createElement(TweakText, {
    label: "S\xFCre",
    value: tweaks.focusTime,
    onChange: v => setTweak('focusTime', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Asistan"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Uyand\u0131rma s\xF6zc\xFC\u011F\xFC",
    value: tweaks.wakeWord,
    onChange: v => setTweak('wakeWord', v)
  })));
}
function PlaceholderScreen({
  title,
  subtitle,
  color,
  icon
}) {
  const IconComp = Icon[icon];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '60px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 18,
      minHeight: 400
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 18,
      background: `${color}22`,
      border: `1px solid ${color}55`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color
    }
  }, /*#__PURE__*/React.createElement(IconComp, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginBottom: 6
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'rgb(var(--text-secondary))',
      maxWidth: 360
    }
  }, subtitle)));
}
window.App = App;
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/BottomNav.jsx
try { (() => {
/* global JSX, React, Icon */
/* Floating bottom navigation island. */

const NAV_ITEMS = [{
  key: 'dashboard',
  icon: 'Layout',
  label: 'Ana Sayfa',
  color: '#FFFFFF'
}, {
  key: 'tasks',
  icon: 'ListTodo',
  label: 'Yapılacaklar',
  color: '#67E8F9'
}, {
  key: 'agenda',
  icon: 'CalendarDays',
  label: 'Ajanda',
  color: '#A78BFA'
}, {
  key: 'habits',
  icon: 'Flame',
  label: 'Alışkanlıklar',
  color: '#FDBA74'
}, {
  key: 'memory',
  icon: 'Lightbulb',
  label: 'Beyin Fırtınası',
  color: '#FCD34D'
}, {
  key: 'workspace',
  icon: 'Rocket',
  label: 'Çalışma Alanı',
  color: '#F472B6'
}, {
  key: 'chat',
  icon: 'Chat',
  label: 'Sohbet',
  color: '#FCA5A5'
}, {
  key: 'insights',
  icon: 'BarChart',
  label: 'Kullanım',
  color: '#6EE7B7'
}];
function BottomNav({
  current,
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      alignItems: 'center',
      gap: 2,
      padding: 6,
      background: 'rgb(var(--bg-main) / 0.55)',
      backdropFilter: 'blur(24px) saturate(1.5)',
      WebkitBackdropFilter: 'blur(24px) saturate(1.5)',
      border: '1px solid rgba(255,255,255,0.10)',
      borderRadius: 9999,
      boxShadow: '0 -4px 20px rgba(0,0,0,0.4), 0 8px 32px rgba(0,0,0,0.5)',
      zIndex: 40
    }
  }, NAV_ITEMS.map(({
    key,
    icon,
    label,
    color
  }) => {
    const IconComp = Icon[icon];
    const active = current === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => onNavigate(key),
      title: label,
      style: {
        padding: 10,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: active ? color : 'rgb(var(--text-secondary) / 0.7)',
        background: active ? `${color === '#FFFFFF' ? 'rgba(255,255,255,0.15)' : color + '26'}` : 'transparent',
        transition: 'all 150ms'
      },
      onMouseEnter: e => {
        if (!active) e.currentTarget.style.color = 'rgb(var(--text-primary))';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.color = 'rgb(var(--text-secondary) / 0.7)';
      }
    }, /*#__PURE__*/React.createElement(IconComp, {
      size: 18
    }));
  }));
}
window.BottomNav = BottomNav;
window.NAV_ITEMS = NAV_ITEMS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/BottomNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/ChatScreen.jsx
try { (() => {
/* global JSX, React, Icon, SAvatar, PrimaryButton */

const SEED_CHAT = [{
  role: 'assistant',
  text: 'Günaydın Erkin. Bugün için takvimde üç toplantı, ikisi yarım saatlik. Derin Kod için 14:00–15:30 boş — bloklayım mı?'
}, {
  role: 'user',
  text: 'Evet, blokla. O sırada bildirimleri de kapat.'
}, {
  role: 'assistant',
  text: 'Tamam. Toplantı modunda DND açıldı, 15:30\'a kadar dinlemiyorum. Bir de Notion\'da "T8.1" sayfasına bağlı görevleri panoya aldım.'
}, {
  role: 'user',
  text: 'Süper. Şimdi 25 dakikalık bir Pomodoro başlat lütfen.'
}, {
  role: 'assistant',
  text: 'Hallederim. "Sesli komut akış testi" görevine bağlıyorum. Başladık — bitince haber veririm.'
}];
function ChatScreen() {
  const [msgs, setMsgs] = React.useState(SEED_CHAT);
  const [input, setInput] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const bottom = React.useRef(null);
  React.useEffect(() => {
    bottom.current?.scrollTo({
      top: 999999,
      behavior: 'smooth'
    });
  }, [msgs, typing]);
  const send = () => {
    const t = input.trim();
    if (!t) return;
    setMsgs([...msgs, {
      role: 'user',
      text: t
    }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMsgs(cur => [...cur, {
        role: 'user',
        text: t
      }.role && cur[cur.length - 1].role === 'user' ? cur[cur.length - 1] : null].filter(Boolean));
      setMsgs(cur => [...cur, {
        role: 'assistant',
        text: 'Anlaşıldı. Onun için bir hatırlatıcı kuruyorum — saat 16:00\'da gelir.'
      }]);
      setTyping(false);
    }, 1400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '20px 28px 0',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 20px',
      borderRadius: 14,
      fontSize: 13,
      fontWeight: 600,
      background: 'rgba(167,139,250,0.20)',
      color: '#A78BFA',
      border: '1px solid rgba(167,139,250,0.30)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Chat, {
    size: 16
  }), " Sohbet"), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 20px',
      borderRadius: 14,
      fontSize: 13,
      fontWeight: 600,
      background: 'rgb(var(--bg-card))',
      color: 'rgb(var(--text-secondary))',
      border: '1px solid rgb(var(--border))'
    }
  }, /*#__PURE__*/React.createElement(Icon.Mic, {
    size: 16
  }), " Sesli")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 28px',
      borderBottom: '1px solid rgb(var(--border-subtle))',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 2
    }
  }, "Sohbet"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 18,
      fontWeight: 600
    }
  }, "Bug\xFCn \u2014 5 mesaj")), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: 8,
      borderRadius: 12,
      color: 'rgb(var(--text-muted))'
    },
    title: "Ge\xE7mi\u015Fi temizle"
  }, /*#__PURE__*/React.createElement(Icon.Trash, {
    size: 15
  }))), /*#__PURE__*/React.createElement("div", {
    ref: bottom,
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, msgs.map((m, i) => /*#__PURE__*/React.createElement(Bubble, {
    key: i,
    m: m
  })), typing && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8
    },
    className: "fade-in"
  }, /*#__PURE__*/React.createElement(SAvatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgb(var(--bg-card))',
      border: '1px solid rgb(var(--border))',
      borderRadius: 16,
      borderBottomLeftRadius: 4,
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Dot, {
    delay: 0
  }), /*#__PURE__*/React.createElement(Dot, {
    delay: 0.2
  }), /*#__PURE__*/React.createElement(Dot, {
    delay: 0.4
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 28px 20px',
      borderTop: '1px solid rgb(var(--border-subtle))',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    className: "field",
    rows: 1,
    placeholder: "Bir mesaj yaz\u0131n...",
    value: input,
    onChange: e => setInput(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        send();
      }
    },
    style: {
      maxHeight: 120
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: send,
    disabled: !input.trim(),
    style: {
      padding: 12,
      borderRadius: 14,
      flexShrink: 0,
      background: '#A78BFA',
      color: '#fff',
      opacity: input.trim() ? 1 : 0.4
    }
  }, /*#__PURE__*/React.createElement(Icon.Send, {
    size: 15
  })))));
}
function Bubble({
  m
}) {
  const isUser = m.role === 'user';
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 8,
      justifyContent: isUser ? 'flex-end' : 'flex-start'
    }
  }, !isUser && /*#__PURE__*/React.createElement(SAvatar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 14px',
      borderRadius: 16,
      maxWidth: '70%',
      fontSize: 13,
      lineHeight: 1.5,
      background: isUser ? '#A78BFA' : 'rgb(var(--bg-card))',
      border: isUser ? 'none' : '1px solid rgb(var(--border))',
      color: isUser ? '#fff' : 'rgb(var(--text-primary))',
      borderBottomLeftRadius: isUser ? 16 : 4,
      borderBottomRightRadius: isUser ? 4 : 16
    }
  }, m.text));
}
function Dot({
  delay
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'rgb(var(--text-muted))',
      margin: '0 1px',
      animation: `typing-dot 1.2s infinite`,
      animationDelay: `${delay}s`
    }
  });
}
window.ChatScreen = ChatScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/ChatScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/DashboardScreen.jsx
try { (() => {
/* global JSX, React, Icon, Card, StatTile, ModeChip, Pill, PrimaryButton, MODES, hexA */

function DashboardScreen({
  tweaks,
  setTweak
}) {
  const [activeMode, setActiveMode] = React.useState('derinKod');
  const focusRunning = tweaks?.focusRunning ?? true;
  const focusTime = tweaks?.focusTime ?? '14:32';
  const focusTask = tweaks?.focusTask ?? 'Sesli komut akış testi';
  const toggleFocus = () => setTweak && setTweak('focusRunning', !focusRunning);
  const greet = (() => {
    const h = new Date().getHours();
    if (h < 6) return {
      eyebrow: 'Gece yarısı',
      title: 'İyi geceler'
    };
    if (h < 12) return {
      eyebrow: 'Sabah',
      title: 'Günaydın'
    };
    if (h < 17) return {
      eyebrow: 'Öğleden sonra',
      title: 'İyi günler'
    };
    if (h < 21) return {
      eyebrow: 'Akşam',
      title: 'İyi akşamlar'
    };
    return {
      eyebrow: 'Gece',
      title: 'İyi geceler'
    };
  })();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, greet.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, greet.title)), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Bug\xFCnk\xFC \xF6zet",
    icon: /*#__PURE__*/React.createElement(Icon.Activity, {
      size: 15
    }),
    iconColor: "#A78BFA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.Clock, {
      size: 18
    }),
    label: "Ekran s\xFCresi",
    value: "4 Saat 30 Dakika",
    color: "#7DD3FC"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.CheckSquare, {
      size: 18
    }),
    label: "Tamamlanan",
    value: "3 g\xF6rev",
    color: "#6EE7B7"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.Flame, {
      size: 18
    }),
    label: "Pomodoro",
    value: "5 oturum",
    color: "#FDBA74"
  }), /*#__PURE__*/React.createElement(StatTile, {
    icon: /*#__PURE__*/React.createElement(Icon.Sparkles, {
      size: 18
    }),
    label: "Aktif mod",
    value: "Derin Kod",
    color: "#A78BFA"
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "\xC7al\u0131\u015Fma modlar\u0131",
    icon: /*#__PURE__*/React.createElement(Icon.Sparkles, {
      size: 15
    }),
    iconColor: "#67E8F9",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        fontSize: 11,
        color: 'rgb(var(--text-secondary))',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement(Icon.Plus, {
      size: 12
    }), " \xD6zel mod")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, MODES.map(m => /*#__PURE__*/React.createElement(ModeChip, {
    key: m.key,
    mode: m,
    active: activeMode === m.key,
    onClick: () => setActiveMode(m.key)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Yap\u0131lacaklar",
    icon: /*#__PURE__*/React.createElement(Icon.ListTodo, {
      size: 15
    }),
    iconColor: "#67E8F9",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        fontSize: 11,
        color: '#A78BFA',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, "T\xFCm\xFCn\xFC g\xF6r ", /*#__PURE__*/React.createElement(Icon.ArrowRight, {
      size: 11
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(MiniTask, {
    color: "#FDBA74",
    running: true,
    title: "Sesli komut ak\u0131\u015F testi",
    priority: "Y\xFCksek",
    pomo: 3
  }), /*#__PURE__*/React.createElement(MiniTask, {
    color: "#FCD34D",
    title: "T8.1 \u2014 kay\u0131p animasyonlar",
    priority: "Y\xFCksek",
    date: "14 Kas"
  }), /*#__PURE__*/React.createElement(MiniTask, {
    color: "#A78BFA",
    title: "Beta i\xE7in changelog yaz",
    priority: "Normal",
    date: "15 Kas"
  }), /*#__PURE__*/React.createElement(MiniTask, {
    color: "#7DD3FC",
    title: "VAD e\u015Fiklerini \xF6l\xE7",
    priority: "Normal",
    date: "16 Kas"
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Uygulama kullan\u0131m\u0131",
    icon: /*#__PURE__*/React.createElement(Icon.BarChart, {
      size: 15
    }),
    iconColor: "#6EE7B7"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(UsageRow, {
    rank: 1,
    name: "VS Code",
    time: "2s 14dk",
    pct: 100,
    color: "#ef4444"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 2,
    name: "Google Chrome",
    time: "1s 32dk",
    pct: 70,
    color: "#F59E0B"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 3,
    name: "Slack",
    time: "48dk",
    pct: 36,
    color: "#FCD34D"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 4,
    name: "Notion",
    time: "22dk",
    pct: 17,
    color: "#84CC16"
  }), /*#__PURE__*/React.createElement(UsageRow, {
    rank: 5,
    name: "Spotify",
    time: "14dk",
    pct: 11,
    color: "#22C55E"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Son d\xFC\u015F\xFCnceler",
    icon: /*#__PURE__*/React.createElement(Icon.Lightbulb, {
      size: 15
    }),
    iconColor: "#FCD34D",
    action: /*#__PURE__*/React.createElement("button", {
      style: {
        fontSize: 11,
        color: '#FCD34D',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4
      }
    }, "Beyin f\u0131rt\u0131nas\u0131 ", /*#__PURE__*/React.createElement(Icon.ArrowRight, {
      size: 11
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "14:02",
    tag: "fikir",
    color: "#FCD34D",
    text: "Pomodoro bitiminde OLED'de mini bir kutlama animasyonu yapsak \u2014 'goodbye_to_idle' aras\u0131na."
  }), /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "11:48",
    tag: "not",
    color: "#7DD3FC",
    text: "VAD e\u015Fi\u011Fi 0.6 fazla agresif. T\xFCrk\xE7e nefes seslerini konu\u015Fma san\u0131yor; 0.65'e \xE7ekip yeniden \xF6l\xE7elim."
  }), /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "10:22",
    tag: "soru",
    color: "#F472B6",
    text: "Custom mode'a sesli k\u0131sayol atamak m\xFCmk\xFCn olmal\u0131 m\u0131? 'Tasar\u0131m moduna ge\xE7' \xF6rne\u011Fi \xFCzerinde d\xFC\u015F\xFCn."
  }), /*#__PURE__*/React.createElement(ThoughtRow, {
    time: "09:05",
    tag: "\xF6neri",
    color: "#A78BFA",
    text: "Onboarding'in 3. ekran\u0131nda KVKK metnini \xF6zet + tam linkle ikiye ay\u0131r; uzun metni okumuyorlar."
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Odaklanma",
    icon: /*#__PURE__*/React.createElement(Icon.Flame, {
      size: 15
    }),
    iconColor: "#FDBA74"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: '50%',
      border: '3px solid rgba(253,186,116,0.3)',
      borderTopColor: focusRunning ? '#FDBA74' : 'rgba(253,186,116,0.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 17,
      fontWeight: 700,
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-0.02em',
      flexShrink: 0,
      animation: focusRunning ? 'spin 12s linear infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      animation: focusRunning ? 'spin 12s linear infinite reverse' : 'none'
    }
  }, focusTime)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 4,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, focusTask), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-muted))',
      marginBottom: 10
    }
  }, "3. oturum \xB7 ", focusRunning ? 'odaklanma fazı' : 'duraklatıldı'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(PrimaryButton, {
    size: "sm",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon.RotateCw, {
      size: 12
    })
  }, "S\u0131f\u0131rla"), /*#__PURE__*/React.createElement(PrimaryButton, {
    size: "sm",
    variant: "secondary"
  }, "Atla"))), /*#__PURE__*/React.createElement(FocusPlayButton, {
    running: focusRunning,
    onClick: toggleFocus
  })))));
}
function MiniTask({
  color,
  title,
  priority,
  pomo,
  date,
  running
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '10px 12px 10px 14px',
      background: `${color}1F`,
      border: `1px solid ${color}66`,
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 8,
      bottom: 8,
      width: 3,
      borderRadius: 9999,
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: color,
      marginTop: 5,
      flexShrink: 0,
      animation: running ? 'glow 1.4s ease-in-out infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      lineHeight: 1.3
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      fontSize: 10
    }
  }, priority && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 7px',
      borderRadius: 6,
      background: `${color}1F`,
      color,
      border: `1px solid ${color}55`
    }
  }, /*#__PURE__*/React.createElement(Icon.Flag, {
    size: 9
  }), " ", priority), date && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 7px',
      borderRadius: 6,
      background: 'rgb(var(--bg-card))',
      color: 'rgb(var(--text-secondary))',
      border: '1px solid rgb(var(--border))'
    }
  }, date), pomo > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '2px 7px',
      borderRadius: 6,
      background: 'rgba(253,186,116,0.12)',
      color: '#FDBA74',
      border: '1px solid rgba(253,186,116,0.3)'
    }
  }, "\uD83D\uDD25 ", pomo)));
}
function UsageRow({
  rank,
  name,
  time,
  pct,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 11,
      fontWeight: 700,
      color,
      width: 18,
      textAlign: 'right'
    }
  }, "#", rank), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-secondary))'
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      borderRadius: 9999,
      background: 'rgb(var(--bg-input))',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      width: `${pct}%`,
      background: color,
      borderRadius: 9999
    }
  }))));
}
window.DashboardScreen = DashboardScreen;

// ── Big circular start/pause button — orange ring matches Pomodoro accent ──
function FocusPlayButton({
  running,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const color = '#FDBA74';
  const scale = press ? 0.94 : hover ? 1.05 : 1;
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    title: running ? 'Duraklat' : 'Başlat',
    "aria-label": running ? 'Duraklat' : 'Başlat',
    style: {
      position: 'relative',
      flexShrink: 0,
      width: 64,
      height: 64,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: running ? `radial-gradient(circle at 30% 25%, ${color}55, ${color}22 60%, ${color}11)` : `radial-gradient(circle at 30% 25%, ${color}, #F59E0B 75%)`,
      border: running ? `1px solid ${color}66` : `1px solid ${color}`,
      color: running ? color : '#1a1208',
      boxShadow: running ? `0 0 0 1px ${color}22, 0 6px 18px ${color}1F` : `0 0 0 4px ${color}22, 0 10px 24px ${color}4D, inset 0 1px 0 rgba(255,255,255,0.35)`,
      transform: `scale(${scale})`,
      transition: 'transform 140ms cubic-bezier(.2,.8,.2,1), box-shadow 180ms, background 200ms'
    }
  }, running && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -2,
      borderRadius: '50%',
      border: `2px solid ${color}`,
      animation: 'pulse-ring 1.8s ease-out infinite',
      pointerEvents: 'none'
    }
  }), running ? /*#__PURE__*/React.createElement(Icon.Pause, {
    size: 22
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transform: 'translateX(2px)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Play, {
    size: 24,
    strokeWidth: 2.4
  })));
}
function ThoughtRow({
  time,
  tag,
  color,
  text
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '38px 56px 1fr',
      gap: 10,
      alignItems: 'flex-start',
      padding: '8px 10px',
      borderRadius: 12,
      background: 'rgb(var(--bg-input) / 0.5)',
      border: '1px solid rgb(var(--border-subtle))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 10.5,
      color: 'rgb(var(--text-muted))',
      paddingTop: 2
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '2px 7px',
      borderRadius: 6,
      background: `${color}22`,
      color,
      border: `1px solid ${color}55`,
      textAlign: 'center',
      height: 18,
      lineHeight: '13px'
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      lineHeight: 1.5,
      color: 'rgb(var(--text-primary))'
    }
  }, text));
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/HabitsScreen.jsx
try { (() => {
/* global JSX, React, Icon, Card, Toggle, Pill */

const HABITS = [{
  name: 'Sabah 30dk okuma',
  streak: 12,
  target: 30,
  doneToday: true,
  color: '#A3E635',
  days: [1, 1, 1, 1, 1, 1, 1]
}, {
  name: 'Su · 2L',
  streak: 5,
  target: 8,
  doneToday: false,
  color: '#7DD3FC',
  days: [1, 1, 0, 1, 1, 1, 1]
}, {
  name: 'Pomodoro · 4 oturum',
  streak: 23,
  target: 4,
  doneToday: true,
  color: '#FDBA74',
  days: [1, 1, 1, 1, 1, 1, 1]
}, {
  name: 'Akşam yürüyüşü',
  streak: 0,
  target: 1,
  doneToday: false,
  color: '#6EE7B7',
  days: [1, 0, 1, 1, 1, 0, 0]
}, {
  name: 'Notion günlüğü',
  streak: 8,
  target: 1,
  doneToday: true,
  color: '#F472B6',
  days: [1, 1, 1, 1, 1, 1, 1]
}];
function HabitsScreen() {
  const [list, setList] = React.useState(HABITS);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, "S\xFCrd\xFCrebilirlik"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Al\u0131\u015Fkanl\u0131klar")), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 14px',
      borderRadius: 14,
      background: 'rgba(253,186,116,0.15)',
      color: '#FDBA74',
      border: '1px solid rgba(253,186,116,0.30)',
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon.Plus, {
    size: 13
  }), " Al\u0131\u015Fkanl\u0131k ekle")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Bu hafta"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 30,
      fontWeight: 700
    }
  }, "28"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(var(--text-secondary))'
    }
  }, "/ 35 tamamland\u0131")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: 'rgb(var(--bg-input))',
      borderRadius: 9999,
      marginTop: 10,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80%',
      height: '100%',
      background: '#FDBA74'
    }
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "En uzun seri"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: '#FDBA74'
    }
  }, "23"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(var(--text-secondary))'
    }
  }, "g\xFCn \xB7 Pomodoro")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-muted))',
      marginTop: 6
    }
  }, "20 Eki \u2014 bug\xFCn")), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Bug\xFCn"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 30,
      fontWeight: 700,
      color: '#6EE7B7'
    }
  }, "3"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'rgb(var(--text-secondary))'
    }
  }, "/ 5 i\u015Faretlendi")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-muted))',
      marginTop: 6
    }
  }, "Ak\u015Fam y\xFCr\xFCy\xFC\u015F\xFC kald\u0131"))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Bu hafta",
    icon: /*#__PURE__*/React.createElement(Icon.Flame, {
      size: 15
    }),
    iconColor: "#FDBA74"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, list.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '24px 1fr auto auto auto',
      alignItems: 'center',
      gap: 14,
      padding: '10px 4px',
      borderBottom: i < list.length - 1 ? '1px solid rgb(var(--border-subtle))' : 'none'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setList(list.map((x, idx) => idx === i ? {
      ...x,
      doneToday: !x.doneToday
    } : x)),
    style: {
      width: 22,
      height: 22,
      borderRadius: 7,
      border: `1.5px solid ${h.doneToday ? h.color : 'rgb(var(--border))'}`,
      background: h.doneToday ? h.color : 'transparent',
      color: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, h.doneToday && /*#__PURE__*/React.createElement(Icon.Check, {
    size: 13,
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: h.doneToday ? 'rgb(var(--text-muted))' : 'rgb(var(--text-primary))',
      textDecoration: h.doneToday ? 'line-through' : 'none'
    }
  }, h.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, h.days.map((d, di) => /*#__PURE__*/React.createElement("span", {
    key: di,
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: d ? h.color : 'rgb(var(--bg-input))',
      opacity: d ? di === h.days.length - 1 ? 1 : 0.65 : 1
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 11,
      fontWeight: 600,
      color: h.color
    }
  }, /*#__PURE__*/React.createElement(Icon.Flame, {
    size: 11
  }), " ", h.streak), /*#__PURE__*/React.createElement("span", {
    className: "mono",
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-muted))',
      minWidth: 32,
      textAlign: 'right'
    }
  }, h.target > 1 ? `${Math.min(h.target, h.target)}/${h.target}` : '—'))))));
}
window.HabitsScreen = HabitsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/HabitsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/HeaderBar.jsx
try { (() => {
/* global JSX, React, Icon, OledFace, Pill, IconButton */
/* Sticky top bar — clock, greeting, integrations status, controls. */

function HeaderBar({
  tweaks,
  setTweaks,
  userName = 'Erkin'
}) {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const timeStr = now.toLocaleTimeString('tr-TR', {
    hour: '2-digit',
    minute: '2-digit'
  });
  const dateStr = now.toLocaleDateString('tr-TR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  const hour = now.getHours();
  const TimeIcon = hour >= 6 && hour < 12 ? Icon.Sunrise : hour >= 12 && hour < 17 ? Icon.CloudSun : hour >= 17 && hour < 21 ? Icon.Sun : Icon.Moon;
  const timeColor = hour >= 6 && hour < 12 ? '#FCD34D' : hour >= 12 && hour < 17 ? '#FDBA74' : hour >= 17 && hour < 21 ? '#FB923C' : '#A78BFA';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      flexShrink: 0,
      background: 'rgb(var(--bg-main) / 0.85)',
      backdropFilter: 'blur(20px) saturate(1.3)',
      WebkitBackdropFilter: 'blur(20px) saturate(1.3)',
      borderBottom: '1px solid rgb(var(--border-subtle))',
      padding: '12px 26px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 16,
      zIndex: 30,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 44,
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon.CloudSun, {
    size: 36,
    strokeWidth: 1.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -6,
      left: -8,
      background: 'rgb(var(--bg-card) / 0.9)',
      borderRadius: 9999,
      padding: '2px 6px',
      fontSize: 10,
      fontWeight: 600,
      fontVariantNumeric: 'tabular-nums'
    }
  }, "18\xB0")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: 'rgb(var(--border) / 0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, timeStr), /*#__PURE__*/React.createElement("span", {
    style: {
      color: timeColor
    }
  }, /*#__PURE__*/React.createElement(TimeIcon, {
    size: 20
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: 'rgb(var(--text-muted))',
      marginTop: 3,
      textTransform: 'capitalize',
      letterSpacing: '0.02em'
    }
  }, dateStr))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 28,
      background: 'rgb(var(--border) / 0.5)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, "Merhaba, ", userName)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(OledFace, {
    state: "idle",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      borderRadius: 9999,
      background: 'rgb(var(--bg-card))',
      border: '1px solid rgb(var(--border-subtle))',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      color: 'rgb(var(--text-primary))'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: '#6EE7B7',
      boxShadow: '0 0 6px #6EE7B7'
    }
  }), "SADIK"), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Sun, {
      size: 18
    }),
    active: true,
    activeColor: "#FCD34D",
    title: "Ekstra parlakl\u0131k"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Bell, {
      size: 18
    }),
    title: "Bildirimler"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: 'rgb(var(--border) / 0.5)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Mic, {
      size: 18
    }),
    active: tweaks.wakeWord,
    activeColor: "#A78BFA",
    onClick: () => setTweaks({
      ...tweaks,
      wakeWord: !tweaks.wakeWord
    }),
    title: "Sesli komut"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Settings, {
      size: 18
    }),
    title: "Ayarlar"
  })));
}
window.HeaderBar = HeaderBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/HeaderBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/TasksScreen.jsx
try { (() => {
/* global JSX, React, Icon, Card, PrimaryButton, IconButton, Pill */

const STATUSES = [{
  key: 'todo',
  label: 'Yapılacak',
  color: '#A78BFA'
}, {
  key: 'in_progress',
  label: 'Devam Eden',
  color: '#FDBA74'
}, {
  key: 'done',
  label: 'Tamamlandı',
  color: '#6EE7B7'
}];
const INITIAL_TASKS = [{
  id: 1,
  title: 'T8.1 — kayıp OLED animasyonları',
  desc: 'Thinking ve confirmation_success kliplerini ekle. 1.2s loop, monokrom.',
  priority: 2,
  date: '14 Kas',
  pomo: 1,
  status: 'todo'
}, {
  id: 2,
  title: 'Changelog 0.2.9 yaz',
  desc: 'Beta sürümüne giren değişiklikleri TR olarak hazırla.',
  priority: 1,
  date: '14 Kas',
  pomo: 0,
  status: 'todo'
}, {
  id: 3,
  title: 'Notion senkronizasyon ayarları',
  desc: 'Workspace seçimini onboarding sırasında al.',
  priority: 1,
  date: '15 Kas',
  pomo: 0,
  status: 'todo'
}, {
  id: 4,
  title: 'Sesli komut akış testi — VAD eşikleri',
  desc: 'Yanlış tetiklemeleri %30 azaltacak parametre taraması.',
  priority: 3,
  date: 'Bugün 14:00',
  pomo: 3,
  status: 'in_progress'
}, {
  id: 5,
  title: 'Mola modu için OLED yüzü',
  desc: 'Goodbye-to-idle geçişini akıcılaştır.',
  priority: 2,
  date: 'Bugün 16:30',
  pomo: 1,
  status: 'in_progress'
}, {
  id: 6,
  title: 'Beta katılımcılarına e-posta',
  desc: 'TR. Onboarding linki + KVKK metni.',
  priority: 1,
  date: '13 Kas',
  pomo: 2,
  status: 'done'
}];
const PRIORITY = {
  0: {
    label: 'Düşük',
    color: '#6B7280'
  },
  1: {
    label: 'Normal',
    color: '#A78BFA'
  },
  2: {
    label: 'Yüksek',
    color: '#FCD34D'
  },
  3: {
    label: 'Acil',
    color: '#FCA5A5'
  }
};
function TasksScreen() {
  const [tasks, setTasks] = React.useState(INITIAL_TASKS);
  const [filter, setFilter] = React.useState('all');
  const [composer, setComposer] = React.useState('');
  const addTask = () => {
    const t = composer.trim();
    if (!t) return;
    setTasks([{
      id: Date.now(),
      title: t,
      desc: '',
      priority: 1,
      date: 'Bugün',
      pomo: 0,
      status: 'todo'
    }, ...tasks]);
    setComposer('');
  };
  const cycleStatus = id => {
    setTasks(tasks.map(t => {
      if (t.id !== id) return t;
      const next = t.status === 'todo' ? 'in_progress' : t.status === 'in_progress' ? 'done' : 'todo';
      return {
        ...t,
        status: next
      };
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, "G\xF6rev panosu"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Yap\u0131lacaklar")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon.Search, {
      size: 16
    })
  }), /*#__PURE__*/React.createElement(PrimaryButton, {
    variant: "secondary",
    size: "sm",
    icon: /*#__PURE__*/React.createElement(Icon.CalendarDays, {
      size: 13
    })
  }, "14 Kas\u0131m"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: 8,
      background: 'rgb(var(--bg-card))',
      border: '1px solid rgb(var(--border-subtle))',
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 10,
      background: 'rgba(167,139,250,0.18)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#A78BFA',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon.Plus, {
    size: 16
  })), /*#__PURE__*/React.createElement("input", {
    className: "field",
    placeholder: "Yeni g\xF6rev ekle \u2014  \u23CE ile kaydet",
    value: composer,
    onChange: e => setComposer(e.target.value),
    onKeyDown: e => {
      if (e.key === 'Enter') addTask();
    },
    style: {
      background: 'transparent',
      border: 0
    }
  }), /*#__PURE__*/React.createElement(PrimaryButton, {
    onClick: addTask,
    size: "sm"
  }, "Ekle")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, STATUSES.map(s => {
    const list = tasks.filter(t => t.status === s.key);
    return /*#__PURE__*/React.createElement("div", {
      key: s.key,
      style: {
        background: 'rgb(var(--bg-card) / 0.6)',
        border: '1px solid rgb(var(--border-subtle))',
        borderRadius: 18,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        minHeight: 320
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: '50%',
        background: s.color,
        boxShadow: `0 0 6px ${s.color}`
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600
      }
    }, s.label)), /*#__PURE__*/React.createElement("span", {
      className: "mono",
      style: {
        fontSize: 11,
        color: 'rgb(var(--text-muted))'
      }
    }, list.length)), list.map(t => /*#__PURE__*/React.createElement(TaskCardBig, {
      key: t.id,
      task: t,
      onCycle: () => cycleStatus(t.id)
    })), list.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 22,
        textAlign: 'center',
        color: 'rgb(var(--text-muted))',
        fontSize: 11
      }
    }, "Hen\xFCz g\xF6rev yok"));
  })));
}
function TaskCardBig({
  task,
  onCycle
}) {
  const p = PRIORITY[task.priority];
  const isRunning = task.status === 'in_progress';
  const isDone = task.status === 'done';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onCycle,
    style: {
      background: isRunning ? 'rgba(253,186,116,0.10)' : 'rgb(var(--bg-card))',
      border: `1px solid ${isRunning ? 'rgba(253,186,116,0.4)' : 'rgb(var(--border))'}`,
      borderRadius: 14,
      padding: '12px 14px',
      cursor: 'pointer',
      opacity: isDone ? 0.6 : 1,
      transition: 'all 150ms'
    },
    onMouseEnter: e => {
      if (!isDone) e.currentTarget.style.borderColor = isRunning ? '#FDBA74' : 'rgba(167,139,250,0.4)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = isRunning ? 'rgba(253,186,116,0.4)' : 'rgb(var(--border))';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(Icon.Grip, {
    size: 14,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 4,
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? 'rgb(var(--text-muted))' : 'inherit'
    }
  }, task.title), task.desc && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'rgb(var(--text-secondary))',
      lineHeight: 1.45
    }
  }, task.desc))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10,
      padding: '2px 7px',
      borderRadius: 6,
      background: `${p.color}1F`,
      color: p.color,
      border: `1px solid ${p.color}55`
    }
  }, /*#__PURE__*/React.createElement(Icon.Flag, {
    size: 9
  }), " ", p.label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10,
      padding: '2px 7px',
      borderRadius: 6,
      background: 'rgb(var(--bg-input))',
      color: 'rgb(var(--text-secondary))',
      border: '1px solid rgb(var(--border))'
    }
  }, /*#__PURE__*/React.createElement(Icon.CalendarDays, {
    size: 9
  }), " ", task.date), task.pomo > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 10,
      padding: '2px 7px',
      borderRadius: 6,
      background: 'rgba(253,186,116,0.10)',
      color: '#FDBA74',
      border: '1px solid rgba(253,186,116,0.30)'
    }
  }, /*#__PURE__*/React.createElement(Icon.Flame, {
    size: 9
  }), " ", task.pomo)));
}
window.TasksScreen = TasksScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/TasksScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/VoiceScreen.jsx
try { (() => {
/* global JSX, React, Icon, OledFace, Pill, PrimaryButton */

const STATE_LABELS = {
  idle: {
    label: 'Dinlemek için mikrofona basın',
    color: '#9AA3B2'
  },
  listening: {
    label: 'Dinleniyor...',
    color: '#A78BFA'
  },
  processing: {
    label: 'Düşünüyor...',
    color: '#A78BFA'
  },
  speaking: {
    label: 'Konuşuyor...',
    color: '#67E8F9'
  }
};
function VoiceScreen() {
  const [state, setState] = React.useState('listening');
  const [transcript] = React.useState('Yarın sabah 9:00\'a UX review koy, Erkin ile.');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 6
    }
  }, "Sesli asistan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: STATE_LABELS[state].color
    }
  }, STATE_LABELS[state].label)), /*#__PURE__*/React.createElement(OledFace, {
    state: state === 'speaking' ? 'talking' : state === 'processing' ? 'thinking' : 'idle',
    size: "lg"
  }), /*#__PURE__*/React.createElement(MicVisual, {
    state: state
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, Object.keys(STATE_LABELS).map(s => /*#__PURE__*/React.createElement("button", {
    key: s,
    onClick: () => setState(s),
    style: {
      padding: '6px 12px',
      borderRadius: 9999,
      fontSize: 11,
      fontWeight: 600,
      background: s === state ? 'rgba(167,139,250,0.2)' : 'rgb(var(--bg-card))',
      color: s === state ? '#A78BFA' : 'rgb(var(--text-secondary))',
      border: `1px solid ${s === state ? 'rgba(167,139,250,0.4)' : 'rgb(var(--border-subtle))'}`
    }
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      padding: 18,
      background: 'rgb(var(--bg-card) / 0.6)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgb(var(--border-subtle))',
      borderRadius: 18,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Tan\u0131nan"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.5
    }
  }, transcript)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: "#A78BFA",
    dot: true
  }, "Takvim ekleniyor"), /*#__PURE__*/React.createElement(Pill, {
    color: "#7DD3FC",
    dot: true
  }, "Notion aran\u0131yor")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setState('idle'),
    style: {
      padding: '10px 22px',
      borderRadius: 9999,
      background: 'rgba(252,165,165,0.12)',
      color: '#FCA5A5',
      border: '1px solid rgba(252,165,165,0.3)',
      fontSize: 13,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon.X, {
    size: 14,
    style: {
      verticalAlign: -2,
      marginRight: 4
    }
  }), " \u0130ptal"));
}
function MicVisual({
  state
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 140,
      height: 140
    }
  }, state === 'listening' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'rgba(167,139,250,0.18)',
      animation: 'pulse-ring 1.6s ease-out infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'rgba(167,139,250,0.18)',
      animation: 'pulse-ring 1.6s ease-out infinite 0.5s'
    }
  })), state === 'speaking' && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: 'rgba(103,232,249,0.18)',
      animation: 'pulse-ring 1.2s ease-out infinite'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 16,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: state === 'idle' ? 'rgb(var(--bg-input))' : state === 'speaking' ? 'rgba(103,232,249,0.18)' : 'rgba(167,139,250,0.18)',
      border: `2px solid ${state === 'idle' ? 'rgb(var(--border))' : state === 'speaking' ? 'rgba(103,232,249,0.5)' : 'rgba(167,139,250,0.5)'}`,
      color: state === 'idle' ? 'rgb(var(--text-muted))' : state === 'speaking' ? '#67E8F9' : '#A78BFA',
      animation: state === 'processing' ? 'spin 1.4s linear infinite' : 'none'
    }
  }, state === 'speaking' ? /*#__PURE__*/React.createElement(Icon.Volume, {
    size: 36
  }) : state === 'processing' ? /*#__PURE__*/React.createElement(Icon.Sparkles, {
    size: 36
  }) : /*#__PURE__*/React.createElement(Icon.Mic, {
    size: 36
  })));
}
window.VoiceScreen = VoiceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/VoiceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/components.jsx
try { (() => {
/* global JSX, React, Icon */
/* Shared primitives + mode catalog. */

const MODES = [{
  key: 'derinKod',
  label: 'Derin Kod',
  icon: 'Code',
  color: '#67E8F9'
}, {
  key: 'genelCalisma',
  label: 'Genel Çalışma',
  icon: 'Briefcase',
  color: '#A78BFA'
}, {
  key: 'mola',
  label: 'Mola',
  icon: 'Coffee',
  color: '#6EE7B7'
}, {
  key: 'toplanti',
  label: 'Toplantı',
  icon: 'Users',
  color: '#FCD34D'
}, {
  key: 'yazmaAkisi',
  label: 'Yazma Akışı',
  icon: 'Pencil',
  color: '#F472B6'
}, {
  key: 'okuma',
  label: 'Okuma',
  icon: 'Book',
  color: '#A3E635'
}];
function modeByKey(key) {
  return MODES.find(m => m.key === key) ?? MODES[0];
}

// rgba(hex, alpha-as-hex-suffix) — append AA hex pair
function hexA(hex, aa) {
  if (!hex || hex.length !== 7) return hex;
  return hex + aa;
}

// ── Primary button ───────────────────────────────────────────────
function PrimaryButton({
  children,
  onClick,
  icon,
  disabled,
  variant = 'primary',
  size = 'md',
  style
}) {
  const sizes = {
    sm: {
      padding: '7px 12px',
      fontSize: 12
    },
    md: {
      padding: '10px 18px',
      fontSize: 13
    },
    lg: {
      padding: '12px 22px',
      fontSize: 14
    }
  };
  const variants = {
    primary: {
      background: '#A78BFA',
      color: '#fff'
    },
    secondary: {
      background: 'rgb(var(--bg-input))',
      color: 'rgb(var(--text-primary))',
      border: '1px solid rgb(var(--border))'
    },
    ghost: {
      background: 'transparent',
      color: 'rgb(var(--text-secondary))'
    },
    danger: {
      background: 'rgba(252,165,165,0.12)',
      color: '#FCA5A5',
      border: '1px solid rgba(252,165,165,0.3)'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 14,
      fontWeight: 600,
      transition: 'opacity 150ms, transform 150ms',
      whiteSpace: 'nowrap',
      opacity: disabled ? 0.4 : 1,
      ...sizes[size],
      ...variants[variant],
      ...style
    },
    onMouseEnter: e => {
      if (!disabled) {
        e.currentTarget.style.opacity = 0.88;
        e.currentTarget.style.transform = 'translateY(-1px)';
      }
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = disabled ? 0.4 : 1;
      e.currentTarget.style.transform = 'none';
    }
  }, icon, children);
}

// ── Icon-only round button ──────────────────────────────────────
function IconButton({
  icon,
  onClick,
  active,
  title,
  color = '#9AA3B2',
  activeColor
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    style: {
      width: 36,
      height: 36,
      borderRadius: 9999,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      background: active ? `${activeColor || '#A78BFA'}22` : 'rgb(var(--bg-input))',
      color: active ? activeColor || '#A78BFA' : color,
      border: active ? `1px solid ${activeColor || '#A78BFA'}55` : '1px solid rgb(var(--border-subtle))',
      transition: 'all 150ms'
    }
  }, icon);
}

// ── Card ─────────────────────────────────────────────────────────
function Card({
  title,
  eyebrow,
  icon,
  iconColor,
  children,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      padding: 18,
      ...style
    }
  }, (title || eyebrow) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 10,
      background: `${iconColor || '#A78BFA'}22`,
      border: `1px solid ${iconColor || '#A78BFA'}55`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: iconColor || '#A78BFA',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 2
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, title))), action), children);
}

// ── Stat tile ────────────────────────────────────────────────────
function StatTile({
  icon,
  label,
  value,
  color
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "surface",
    style: {
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color,
      marginBottom: 8
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      fontSize: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgb(107, 114, 128)'
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 22,
      fontWeight: 700,
      marginTop: 2,
      color: 'rgb(var(--text-primary))'
    }
  }, value));
}

// ── Mode chip ────────────────────────────────────────────────────
function ModeChip({
  mode,
  active,
  onClick
}) {
  const c = mode.color;
  const IconComp = Icon[mode.icon];
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 16px',
      borderRadius: 14,
      fontWeight: 600,
      fontSize: 13,
      background: active ? hexA(c, '33') : '#1f1f23',
      border: active ? `2px solid ${c}` : `2px solid ${hexA(c, '55')}`,
      color: active ? c : hexA(c, 'CC'),
      transition: 'all 150ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: c,
      boxShadow: `0 0 6px ${c}`,
      flexShrink: 0
    }
  }), IconComp && /*#__PURE__*/React.createElement(IconComp, {
    size: 14
  }), mode.label);
}

// ── Toggle ───────────────────────────────────────────────────────
function Toggle({
  on,
  onChange,
  color = '#6EE7B7'
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!on),
    style: {
      width: 34,
      height: 20,
      borderRadius: 9999,
      position: 'relative',
      flexShrink: 0,
      background: on ? color : 'rgb(var(--bg-input))',
      border: `1px solid ${on ? color : 'rgb(var(--border))'}`,
      transition: 'all 180ms'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: on ? 16 : 2,
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 180ms'
    }
  }));
}

// ── Pill / status badge ──────────────────────────────────────────
function Pill({
  color = '#A78BFA',
  children,
  dot,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 9999,
      background: `${color}26`,
      color,
      border: `1px solid ${color}4D`,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.02em',
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: color
    }
  }), children);
}

// ── OLED face preview ────────────────────────────────────────────
function OledFace({
  state = 'idle',
  size = 'sm'
}) {
  // Two eyes; expressions: idle (open), thinking (blink), talking (smile)
  const W = size === 'lg' ? 200 : 110;
  const H = size === 'lg' ? 76 : 42;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#000',
      borderRadius: 14,
      border: '1px solid rgba(167,139,250,0.3)',
      boxShadow: '0 0 1px rgba(167,139,250,0.3), 0 0 12px rgba(167,139,250,0.18)',
      padding: size === 'lg' ? '18px 22px' : '10px 14px',
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: W,
    height: H,
    viewBox: "0 0 200 70"
  }, state === 'thinking' ? /*#__PURE__*/React.createElement("g", {
    fill: "#A78BFA"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "32",
    width: "36",
    height: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "124",
    y: "32",
    width: "36",
    height: "4",
    rx: "2"
  })) : state === 'talking' ? /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "32",
    r: "10",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "32",
    r: "10",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 80 50 Q 100 60 120 50",
    stroke: "#A78BFA",
    strokeWidth: "4",
    fill: "none",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "34",
    r: "14",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "140",
    cy: "34",
    r: "14",
    fill: "#A78BFA"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "63",
    cy: "32",
    r: "3",
    fill: "#000"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "143",
    cy: "32",
    r: "3",
    fill: "#000"
  }))), size === 'lg' && /*#__PURE__*/React.createElement("div", {
    className: "mono",
    style: {
      color: '#A78BFA',
      fontSize: 10,
      letterSpacing: '0.12em'
    }
  }, "SADIK \xB7 ", state));
}

// ── Avatar bubble (assistant 'S') ───────────────────────────────
function SAvatar({
  size = 28
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'rgba(167,139,250,0.20)',
      border: '1px solid rgba(167,139,250,0.30)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#A78BFA',
      fontWeight: 700,
      fontSize: size * 0.42,
      flexShrink: 0
    }
  }, "S");
}
Object.assign(window, {
  MODES,
  modeByKey,
  hexA,
  PrimaryButton,
  IconButton,
  Card,
  StatTile,
  ModeChip,
  Toggle,
  Pill,
  OledFace,
  SAvatar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/icons.jsx
try { (() => {
/* global JSX - lucide SVG icon components, drawn at default stroke width 2.
   Each accepts a `size` prop (default 18) and inherits `currentColor`. */

const I = ({
  children,
  size = 18,
  strokeWidth = 2
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, children);
const Icon = {
  Mic: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 10v2a7 7 0 0 1-14 0v-2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "23",
    x2: "16",
    y2: "23"
  })),
  MicOff: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "19",
    x2: "12",
    y2: "23"
  })),
  Bell: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  })),
  BellOff: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M13.73 21a2 2 0 0 1-3.46 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.63 13A17.89 17.89 0 0 1 18 8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 8a6 6 0 0 0-9.33-5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "1",
    x2: "23",
    y2: "23"
  })),
  Settings: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.59.21 1 .78 1 1.51H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
  })),
  Sun: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "3"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "21",
    x2: "12",
    y2: "23"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "4.22",
    x2: "5.64",
    y2: "5.64"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "18.36",
    x2: "19.78",
    y2: "19.78"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "12",
    x2: "3",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "12",
    x2: "23",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "19.78",
    x2: "5.64",
    y2: "18.36"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "5.64",
    x2: "19.78",
    y2: "4.22"
  })),
  SunDim: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 4V2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22v-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.93 4.93 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17.66 17.66 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6.34 17.66-1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.07 4.93-1.41 1.41"
  })),
  Moon: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
  })),
  Sunrise: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 18a5 5 0 0 0-10 0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4.22",
    y1: "10.22",
    x2: "5.64",
    y2: "11.64"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "1",
    y1: "18",
    x2: "3",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "18",
    x2: "23",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18.36",
    y1: "11.64",
    x2: "19.78",
    y2: "10.22"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "23",
    y1: "22",
    x2: "1",
    y2: "22"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "8 6 12 2 16 6"
  })),
  CloudSun: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.93 4.93 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.07 4.93-1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"
  })),
  Radio: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.1 4.9C23 8.8 23 15.2 19.1 19.1"
  })),
  Layout: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "9",
    x2: "21",
    y2: "9"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "21",
    x2: "9",
    y2: "9"
  })),
  ListTodo: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "5",
    width: "6",
    height: "6",
    rx: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3 17 2 2 4-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 6h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 12h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 18h8"
  })),
  CalendarDays: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "16",
    y1: "2",
    x2: "16",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "2",
    x2: "8",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "10",
    x2: "21",
    y2: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 14h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 14h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 18h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 18h.01"
  })),
  Flame: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
  })),
  Lightbulb: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M9 18h6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 22h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2a7 7 0 0 0-4 12.7C9 16 9 17 9 18h6c0-1 0-2 1-3.3A7 7 0 0 0 12 2z"
  })),
  Rocket: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
  })),
  Chat: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
  })),
  BarChart: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12",
    y2: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "20",
    x2: "18",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "20",
    x2: "6",
    y2: "16"
  })),
  Clock: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 7 12 12 15 14"
  })),
  Check: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  })),
  CheckSquare: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "9 11 12 14 22 4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
  })),
  Send: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "22",
    y1: "2",
    x2: "11",
    y2: "13"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "22 2 15 22 11 13 2 9 22 2"
  })),
  Plus: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "5",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  })),
  X: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })),
  Search: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "21",
    x2: "16.65",
    y2: "16.65"
  })),
  ChevronDown: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  })),
  ChevronUp: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "18 15 12 9 6 15"
  })),
  ArrowRight: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  })),
  Trash: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "3 6 5 6 21 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 11v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 11v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
  })),
  Briefcase: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "7",
    width: "20",
    height: "14",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
  })),
  Code: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "16 18 22 12 16 6"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "8 6 2 12 8 18"
  })),
  Coffee: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 8h1a4 4 0 1 1 0 8h-1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "2",
    x2: "6",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "2",
    x2: "10",
    y2: "4"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "2",
    x2: "14",
    y2: "4"
  })),
  Users: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 21v-2a4 4 0 0 0-3-3.87"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.13a4 4 0 0 1 0 7.75"
  })),
  Pencil: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z"
  })),
  Edit3: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 20h9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z"
  })),
  GraduationCap: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M22 10v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 10l10-5 10 5-10 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 12v5c0 2 4 3 6 3s6-1 6-3v-5"
  })),
  Palette: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "13.5",
    cy: "6.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "10.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "7.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6.5",
    cy: "12.5",
    r: ".5",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
  })),
  Book: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
  })),
  Timer: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "2",
    x2: "14",
    y2: "2"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "14",
    x2: "15",
    y2: "11"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "14",
    r: "8"
  })),
  Play: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polygon", {
    points: "5 3 19 12 5 21 5 3"
  })),
  Pause: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("rect", {
    x: "6",
    y: "4",
    width: "4",
    height: "16"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14",
    y: "4",
    width: "4",
    height: "16"
  })),
  Flag: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M4 21V3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 3l16 4-4 5 4 5-16-4"
  })),
  Volume: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14"
  })),
  Usb: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "7",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "20",
    r: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.7 19.3 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17 13-1-4 5 1-4 3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 18.5 21 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 13-7 7-7-7 .7-.7"
  })),
  Wifi: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M5 13a10 10 0 0 1 14 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 16.5a5 5 0 0 1 7 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 8.82a15 15 0 0 1 20 0"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "20",
    x2: "12.01",
    y2: "20"
  })),
  RotateCw: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "23 4 23 10 17 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10"
  })),
  Activity: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "22 12 18 12 15 21 9 3 6 12 2 12"
  })),
  Sparkles: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "m12 3-1.9 5.8-5.8 1.9 5.8 1.9L12 18l1.9-5.4 5.8-1.9-5.8-1.9z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 3v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 17v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5h4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 19h4"
  })),
  Shield: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  Grip: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "6",
    r: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "12",
    r: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "18",
    r: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "6",
    r: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "12",
    r: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "18",
    r: "1",
    fill: "currentColor"
  })),
  CornerDown: p => /*#__PURE__*/React.createElement(I, p, /*#__PURE__*/React.createElement("polyline", {
    points: "9 10 4 15 9 20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4v7a4 4 0 0 1-4 4H4"
  }))
};
Object.assign(window, {
  Icon,
  I
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/macos-window.jsx
try { (() => {
// MacOS.jsx — Simplified macOS Tahoe (Liquid Glass) window
// Based on the macOS Tahoe UI Kit. No image assets, no dependencies.
// Exports: MacWindow, MacSidebar, MacSidebarItem, MacToolbar, MacGlass, MacTrafficLights

const MAC_FONT = '-apple-system, BlinkMacSystemFont, "SF Pro", "Helvetica Neue", sans-serif';

// ─────────────────────────────────────────────────────────────
// Liquid glass primitive — blur + white tint + inset highlight
// ─────────────────────────────────────────────────────────────
function MacGlass({
  children,
  radius = 296,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: radius,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: radius,
      background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.35)',
      backdropFilter: 'blur(40px) saturate(180%)',
      WebkitBackdropFilter: 'blur(40px) saturate(180%)',
      border: dark ? '0.5px solid rgba(255,255,255,0.12)' : '0.5px solid rgba(255,255,255,0.6)',
      boxShadow: dark ? '0 8px 40px rgba(0,0,0,0.2)' : '0 8px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Traffic lights (14px, Tahoe colors)
// ─────────────────────────────────────────────────────────────
function MacTrafficLights({
  style = {}
}) {
  const dot = bg => /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: bg,
      border: '0.5px solid rgba(0,0,0,0.1)'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      padding: 1,
      ...style
    }
  }, dot('#ff736a'), dot('#febc2e'), dot('#19c332'));
}

// ─────────────────────────────────────────────────────────────
// Toolbar — title + single glass pill icon
// ─────────────────────────────────────────────────────────────
function MacToolbar({
  title = 'Folder'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      padding: 8,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: MAC_FONT,
      fontSize: 15,
      fontWeight: 700,
      color: 'rgba(0,0,0,0.85)',
      whiteSpace: 'nowrap',
      paddingLeft: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(MacGlass, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: '#4c4c4c',
      opacity: 0.4
    }
  }))), /*#__PURE__*/React.createElement(MacGlass, null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "5.5",
    r: "4",
    stroke: "#727272",
    strokeWidth: "1.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 8.5l3 3",
    stroke: "#727272",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: MAC_FONT,
      fontSize: 13,
      fontWeight: 500,
      color: '#727272'
    }
  }, "Search"))));
}

// ─────────────────────────────────────────────────────────────
// Sidebar — frosted glass panel floating inside the window
// ─────────────────────────────────────────────────────────────
function MacSidebarItem({
  label,
  selected = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      height: 24,
      padding: '4px 10px 4px 6px',
      margin: '0 10px',
      borderRadius: 8,
      position: 'relative',
      fontFamily: MAC_FONT,
      fontSize: 11,
      fontWeight: 500
    }
  }, selected && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 8,
      background: 'rgba(0,0,0,0.11)',
      mixBlendMode: 'multiply'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: selected ? '#007aff' : 'rgba(0,0,0,0.4)',
      opacity: selected ? 1 : 0.5,
      flexShrink: 0,
      position: 'relative'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(0,0,0,0.85)',
      position: 'relative'
    }
  }, label));
}
function MacSidebar({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: '100%',
      padding: 8,
      flexShrink: 0,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 8,
      borderRadius: 18,
      background: 'rgba(210,225,245,0.45)',
      backdropFilter: 'blur(50px) saturate(200%)',
      WebkitBackdropFilter: 'blur(50px) saturate(200%)',
      border: '0.5px solid rgba(255,255,255,0.5)',
      boxShadow: '0 8px 40px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.35)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: '10px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 32,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px',
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement(MacTrafficLights, null)), children));
}
function MacSidebarHeader({
  title
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 18px 5px',
      fontFamily: MAC_FONT,
      fontSize: 11,
      fontWeight: 700,
      color: 'rgba(0,0,0,0.5)'
    }
  }, title);
}

// ─────────────────────────────────────────────────────────────
// Window — r:26, big shadow, sidebar + toolbar + content
// ─────────────────────────────────────────────────────────────
function MacWindow({
  width = 900,
  height = 600,
  title = 'Folder',
  sidebar,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 26,
      overflow: 'hidden',
      background: '#fff',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.23), 0 16px 48px rgba(0,0,0,0.35)',
      display: 'flex',
      position: 'relative',
      fontFamily: MAC_FONT
    }
  }, /*#__PURE__*/React.createElement(MacSidebar, null, sidebar), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(MacToolbar, {
    title: title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      padding: '4px 8px'
    }
  }, children)));
}
Object.assign(window, {
  MacWindow,
  MacSidebar,
  MacSidebarItem,
  MacSidebarHeader,
  MacToolbar,
  MacGlass,
  MacTrafficLights
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/macos-window.jsx", error: String((e && e.message) || e) }); }

// ui_kits/sadik-app/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/sadik-app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

})();
