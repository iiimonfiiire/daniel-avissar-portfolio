/* @ds-bundle: {"format":4,"namespace":"CarchariasDesignSystem_c8a750","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ImagePlate","sourcePath":"components/core/ImagePlate.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Meter","sourcePath":"components/feedback/Meter.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"628034a0563e","components/core/Button.jsx":"b0a1534a6ddc","components/core/Card.jsx":"73eb31f8a096","components/core/Icon.jsx":"c8b4c9949327","components/core/IconButton.jsx":"dfe9eec7f5b3","components/core/ImagePlate.jsx":"b34f229052e0","components/core/Tag.jsx":"bf8528206c60","components/feedback/Dialog.jsx":"b5e2dbd775d9","components/feedback/Meter.jsx":"117afd0de2e3","components/feedback/Toast.jsx":"e3f0784e2b09","components/feedback/Tooltip.jsx":"036822556876","components/forms/Checkbox.jsx":"8ff0e2497b07","components/forms/Field.jsx":"47e0a538eba5","components/forms/Input.jsx":"c07a19f62f20","components/forms/Radio.jsx":"3a764a2e89e1","components/forms/Select.jsx":"16ddf0033922","components/forms/Slider.jsx":"d2a36b29233c","components/forms/Switch.jsx":"373e8a75c2b6","components/navigation/SideNav.jsx":"2ce2e5007d2a","components/navigation/Tabs.jsx":"7c31e4406bb1","ui_kits/app/AppShell.jsx":"db20780ee67b","ui_kits/app/EventsScreen.jsx":"44f112b96aaa","ui_kits/app/OverviewScreen.jsx":"85893a9c108e","ui_kits/app/SettingsScreen.jsx":"874de0b97067","ui_kits/marketing/DocsScreen.jsx":"70eaf344c58b","ui_kits/marketing/HomeScreen.jsx":"97b3eed76c89","ui_kits/marketing/PricingScreen.jsx":"db160ffd5adc","ui_kits/marketing/SiteChrome.jsx":"7e93b272b810"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CarchariasDesignSystem_c8a750 = window.CarchariasDesignSystem_c8a750 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: ['rgba(195,207,211,.1)', 'var(--text-body)', 'var(--line-strong)'],
  success: ['rgba(46,211,192,.12)', 'var(--tide-400)', 'rgba(46,211,192,.35)'],
  highlight: ['rgba(255,107,26,.12)', 'var(--signal-400)', 'rgba(255,107,26,.35)'],
  warn: ['rgba(255,176,32,.12)', 'var(--warn-500)', 'rgba(255,176,32,.35)'],
  danger: ['rgba(232,67,52,.12)', 'var(--danger-500)', 'rgba(232,67,52,.38)'],
  info: ['rgba(78,168,222,.12)', 'var(--info-500)', 'rgba(78,168,222,.35)']
};
function Badge({
  children,
  tone = 'neutral',
  solid = false,
  dot = false,
  style,
  ...rest
}) {
  const [bg, fg, bd] = TONES[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      height: 22,
      padding: '0 8px',
      background: solid ? fg : bg,
      color: solid ? 'var(--abyss-900)' : fg,
      border: `1px solid ${solid ? 'transparent' : bd}`,
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--track-label)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 'var(--radius-pill)',
      background: solid ? 'var(--abyss-900)' : fg
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  variant = 'panel',
  pad = 'var(--pad-card)',
  interactive = false,
  accent,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    panel: {
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      boxShadow: 'none'
    },
    raised: {
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-hairline)',
      boxShadow: 'var(--shadow-sm)'
    },
    inset: {
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      boxShadow: 'none'
    },
    flat: {
      background: 'transparent',
      border: '1px solid var(--line-hairline)',
      boxShadow: 'none'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-md)',
      padding: pad,
      color: 'var(--text-body)',
      transition: 'var(--transition-control)',
      cursor: interactive ? 'pointer' : undefined,
      ...base,
      ...(accent ? {
        borderTop: `var(--border-thick) solid ${accent}`
      } : null),
      ...(interactive && hover ? {
        borderColor: 'var(--chrome-500)',
        background: 'var(--surface-raised)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SETS = {
  ui: 'lucide',
  brand: 'fluent-emoji-high-contrast'
};

/** Thin wrapper over the Iconify runtime. Load the runtime once per page:
 *  <script src="https://code.iconify.design/iconify-icon/2.1.0/iconify-icon.min.js"></script> */
function Icon({
  name,
  set = 'ui',
  size = 18,
  color = 'currentColor',
  spin = false,
  style,
  ...rest
}) {
  const slug = name.includes(':') ? name : `${SETS[set] || set}:${name}`;
  return /*#__PURE__*/React.createElement("iconify-icon", _extends({
    icon: slug,
    width: size,
    height: size,
    style: {
      color,
      display: 'inline-block',
      verticalAlign: 'middle',
      flex: '0 0 auto',
      animation: spin ? 'cfx-spin 900ms linear infinite' : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const HEIGHTS = {
  sm: 'var(--control-sm)',
  md: 'var(--control-md)',
  lg: 'var(--control-lg)'
};
const PADS = {
  sm: '0 10px',
  md: '0 14px',
  lg: '0 18px'
};
const FONTS = {
  sm: 'var(--text-xs)',
  md: 'var(--text-sm)',
  lg: 'var(--text-md)'
};
const VARIANTS = {
  primary: {
    background: 'var(--intent-primary)',
    color: 'var(--text-on-tide)',
    border: '1px solid var(--intent-primary)'
  },
  secondary: {
    background: 'var(--surface-raised)',
    color: 'var(--text-display)',
    border: '1px solid var(--line-strong)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-display)',
    border: '1px solid var(--line-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: '1px solid transparent'
  },
  danger: {
    background: 'var(--intent-danger)',
    color: 'var(--chrome-000)',
    border: '1px solid var(--intent-danger)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--intent-primary-hover)',
    borderColor: 'var(--intent-primary-hover)'
  },
  secondary: {
    background: 'var(--abyss-500)'
  },
  outline: {
    background: 'rgba(195,207,211,.06)',
    borderColor: 'var(--chrome-400)'
  },
  ghost: {
    background: 'rgba(195,207,211,.06)',
    color: 'var(--text-display)'
  },
  danger: {
    background: 'var(--danger-600)',
    borderColor: 'var(--danger-600)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  block = false,
  disabled = false,
  loading = false,
  as = 'button',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  const iconSize = size === 'lg' ? 17 : size === 'sm' ? 14 : 15;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === 'button' ? disabled || loading : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: block ? 'flex' : 'inline-flex',
      width: block ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--gap-inline)',
      height: HEIGHTS[size],
      padding: PADS[size],
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-ui)',
      fontSize: FONTS[size],
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--track-label)',
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      transition: 'var(--transition-control)',
      opacity: disabled ? 0.4 : 1,
      ...VARIANTS[variant],
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-circle",
    size: iconSize,
    spin: true
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize
  }) : null, children, iconAfter ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconAfter,
    size: iconSize
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: 28,
  md: 36,
  lg: 44
};
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  active = false,
  disabled = false,
  round = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-display)',
      border: '1px solid var(--line-strong)'
    },
    solid: {
      background: 'var(--surface-raised)',
      color: 'var(--text-display)',
      border: '1px solid var(--line-hairline)'
    },
    primary: {
      background: 'var(--intent-primary)',
      color: 'var(--text-on-tide)',
      border: '1px solid var(--intent-primary)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: BOX[size],
      height: BOX[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'var(--transition-control)',
      ...base,
      ...(active ? {
        color: 'var(--intent-active)',
        background: 'var(--surface-selected)'
      } : null),
      ...(hover && !disabled ? {
        background: active ? 'rgba(46,211,192,.16)' : 'rgba(195,207,211,.08)',
        color: active ? 'var(--tide-400)' : 'var(--text-display)'
      } : null),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 15 : size === 'lg' ? 20 : 17
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ImagePlate.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Honest placeholder where real imagery goes. This system ships no stock or
 *  generated images, so layouts reserve the space and label it instead. */
function ImagePlate({
  label = 'Image',
  ratio = '4 / 3',
  height,
  dark = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      aspectRatio: height ? undefined : ratio,
      height,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-5)',
      background: dark ? 'var(--surface-inset)' : 'var(--chrome-100)',
      backgroundImage: 'var(--texture-grid)',
      border: '1px dashed var(--line-strong)',
      borderRadius: 'var(--radius-md)',
      color: 'var(--text-faint)',
      overflow: 'hidden',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 20
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      textAlign: 'center',
      padding: '0 12px'
    }
  }, label));
}
Object.assign(__ds_scope, { ImagePlate });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ImagePlate.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  children,
  selected = false,
  onRemove,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      height: 28,
      padding: onRemove ? '0 6px 0 10px' : '0 11px',
      background: selected ? 'var(--surface-selected)' : hover && clickable ? 'rgba(195,207,211,.08)' : 'transparent',
      color: selected ? 'var(--tide-400)' : 'var(--text-body)',
      border: `1px solid ${selected ? 'rgba(46,211,192,.45)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-regular)',
      lineHeight: 1,
      cursor: clickable ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      userSelect: 'none',
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  description,
  children,
  footer,
  onClose,
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-9)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'var(--blur-glass)'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-panel)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-dialog)',
      animation: 'cfx-dialog-in var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      padding: 'var(--space-8) var(--space-8) var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose
  }) : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--space-8) var(--space-8)',
      font: 'var(--type-body)',
      color: 'var(--text-body)'
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-8)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  primary: 'var(--intent-primary)',
  warn: 'var(--warn-500)',
  danger: 'var(--danger-500)',
  info: 'var(--info-500)'
};

/** Usage bar. Shows label, value and limit together so the reader never has to hunt. */
function Meter({
  value = 0,
  max = 100,
  label,
  valueText,
  tone,
  unit = '',
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const auto = pct >= 90 ? 'danger' : pct >= 75 ? 'warn' : 'primary';
  const color = TONES[tone || auto];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), label || valueText ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 'var(--space-5)'
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-value)',
      color: 'var(--text-display)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, valueText || `${value}${unit} / ${max}${unit}`)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-pill)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Meter.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  info: ['var(--info-500)', 'info'],
  success: ['var(--tide-500)', 'check'],
  warn: ['var(--warn-500)', 'triangle-alert'],
  danger: ['var(--danger-500)', 'circle-alert']
};
function Toast({
  tone = 'info',
  title,
  children,
  action,
  onClose,
  style,
  ...rest
}) {
  const [color, icon] = TONES[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      minWidth: 300,
      maxWidth: 420,
      padding: 'var(--space-6)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-strong)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-panel)',
      animation: 'cfx-toast-in var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 17,
    color: color,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, children) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)'
    }
  }, action) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Dismiss",
    size: "sm",
    onClick: onClose
  }) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  label,
  side = 'top',
  children,
  style,
  ...rest
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-8px,-50%)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(8px,-50%)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      zIndex: 80,
      ...pos,
      padding: '5px 9px',
      background: 'var(--chrome-050)',
      color: 'var(--abyss-900)',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.3,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  checked = false,
  indeterminate = false,
  label,
  hint,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      minHeight: 22,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--intent-primary)' : 'var(--surface-inset)',
      border: `1px solid ${on ? 'var(--intent-primary)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-xs)',
      transition: 'var(--transition-control)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "minus",
    size: 13,
    color: "var(--text-on-tide)"
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "var(--text-on-tide)"
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-display)'
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null) : null);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shared label/hint/error frame for every form control. */
function Field({
  label,
  hint,
  error,
  optional,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)',
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, label, optional ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, "Optional") : null) : null, hint && !error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-muted)',
      marginTop: -2
    }
  }, hint) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--danger-500)'
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-sm)',
  md: 'var(--control-md)',
  lg: 'var(--control-lg)'
};
function Input({
  size = 'md',
  icon,
  suffix,
  invalid = false,
  mono = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      height: H[size],
      padding: '0 var(--pad-control)',
      background: 'var(--surface-inset)',
      border: `1px solid ${invalid ? 'var(--danger-500)' : focus ? 'var(--tide-500)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : invalid ? 'var(--ring-danger)' : 'none',
      opacity: disabled ? .45 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 15,
    color: "var(--text-faint)"
  }) : null, /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      background: 'none',
      border: 'none',
      outline: 'none',
      color: 'var(--text-display)',
      fontFamily: mono ? 'var(--font-mono)' : 'var(--font-ui)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
      letterSpacing: mono ? 'var(--track-mono)' : 'var(--track-normal)'
    }
  }, rest)), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)'
    }
  }, suffix) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  checked = false,
  label,
  hint,
  name,
  value,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      minHeight: 22,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: '0 0 auto',
      marginTop: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--surface-inset)',
      border: `1px solid ${checked ? 'var(--intent-primary)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-circle)',
      transition: 'var(--transition-control)'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 'var(--radius-circle)',
      background: 'var(--intent-primary)'
    }
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-display)'
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null) : null);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 'var(--control-sm)',
  md: 'var(--control-md)',
  lg: 'var(--control-lg)'
};
function Select({
  options = [],
  size = 'md',
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: H[size],
      padding: '0 var(--pad-control)',
      background: 'var(--surface-inset)',
      border: `1px solid ${invalid ? 'var(--danger-500)' : focus ? 'var(--tide-500)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? 'var(--ring-focus)' : 'none',
      opacity: disabled ? .45 : 1,
      transition: 'var(--transition-control)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      flex: 1,
      minWidth: 0,
      background: 'none',
      border: 'none',
      outline: 'none',
      color: 'var(--text-display)',
      fontFamily: 'var(--font-ui)',
      fontSize: size === 'sm' ? 'var(--text-sm)' : 'var(--text-md)',
      paddingRight: 18,
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        background: 'var(--abyss-800)'
      }
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 15,
    color: "var(--text-faint)",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  label,
  unit = '',
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, rest), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-value)',
      color: 'var(--text-body)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, value, unit)) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 18,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 'auto 0',
      height: 4,
      background: 'var(--surface-inset)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-pill)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'var(--intent-primary)',
      borderRadius: 'var(--radius-pill)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 7px)`,
      width: 14,
      height: 14,
      background: 'var(--chrome-050)',
      borderRadius: 'var(--radius-circle)',
      boxShadow: 'var(--shadow-sm)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'relative',
      width: '100%',
      margin: 0,
      opacity: 0,
      height: 18,
      cursor: 'pointer'
    }
  })));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Applies immediately — no Save step. */
function Switch({
  checked = false,
  label,
  hint,
  disabled = false,
  size = 'md',
  onChange,
  style,
  ...rest
}) {
  const w = size === 'sm' ? 32 : 40,
    h = size === 'sm' ? 18 : 22,
    k = h - 6;
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: w,
      height: h,
      flex: '0 0 auto',
      marginTop: 1,
      background: checked ? 'var(--intent-primary)' : 'var(--surface-inset)',
      border: `1px solid ${checked ? 'var(--intent-primary)' : 'var(--line-strong)'}`,
      borderRadius: 'var(--radius-pill)',
      transition: 'background-color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? w - k - 4 : 2,
      width: k,
      height: k,
      borderRadius: 'var(--radius-circle)',
      background: checked ? 'var(--abyss-900)' : 'var(--chrome-300)',
      transition: 'left var(--dur-fast) var(--ease-standard)'
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-display)'
    }
  }, label), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, hint) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SideNav({
  items = [],
  value,
  onChange,
  header,
  footer,
  width = 232,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      width,
      flex: '0 0 auto',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-panel)',
      borderRight: '1px solid var(--line-hairline)',
      ...style
    }
  }, rest), header ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, header) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: 'var(--space-6) var(--space-5)',
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      overflow: 'auto'
    }
  }, items.map((it, i) => {
    if (it.section) return /*#__PURE__*/React.createElement("div", {
      key: 's' + i,
      style: {
        padding: 'var(--space-7) var(--space-5) var(--space-3)',
        font: 'var(--type-caption)',
        fontWeight: 'var(--weight-medium)',
        color: 'var(--text-faint)'
      }
    }, it.section);
    const on = it.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      onClick: () => onChange && onChange(it.value),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-5)',
        height: 34,
        padding: '0 var(--space-5)',
        width: '100%',
        background: on ? 'var(--surface-selected)' : 'transparent',
        border: 'none',
        borderRadius: 'var(--radius-sm)',
        color: on ? 'var(--text-display)' : 'var(--text-muted)',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-medium)' : 'var(--weight-regular)',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'var(--transition-control)'
      }
    }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 16,
      color: on ? 'var(--intent-active)' : 'currentColor'
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, it.label), it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-faint)'
      }
    }, it.count) : null);
  })), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: variant === 'segmented' ? 2 : 'var(--space-7)',
      padding: variant === 'segmented' ? 3 : 0,
      background: variant === 'segmented' ? 'var(--surface-inset)' : 'transparent',
      borderRadius: variant === 'segmented' ? 'var(--radius-sm)' : 0,
      borderBottom: variant === 'underline' ? '1px solid var(--line-hairline)' : 'none',
      ...style
    }
  }, rest), items.map(it => {
    const id = typeof it === 'string' ? it : it.value;
    const lbl = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        height: variant === 'segmented' ? 28 : 38,
        padding: variant === 'segmented' ? '0 12px' : '0 0 2px',
        background: variant === 'segmented' && on ? 'var(--surface-raised)' : 'transparent',
        border: 'none',
        borderBottom: variant === 'underline' ? `var(--border-thick) solid ${on ? 'var(--intent-primary)' : 'transparent'}` : 'none',
        borderRadius: variant === 'segmented' ? 'var(--radius-xs)' : 0,
        color: on ? 'var(--text-display)' : 'var(--text-muted)',
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-sm)',
        fontWeight: on ? 'var(--weight-medium)' : 'var(--weight-regular)',
        letterSpacing: 'var(--track-label)',
        cursor: 'pointer',
        transition: 'var(--transition-control)'
      }
    }, typeof it === 'object' && it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 15
    }) : null, lbl, typeof it === 'object' && it.count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        color: 'var(--text-faint)'
      }
    }, it.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
const {
  SideNav,
  Badge,
  IconButton,
  Icon,
  Input,
  Button,
  Tooltip
} = window.CarchariasDesignSystem_c8a750;
function TopBar({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 52,
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: '0 var(--space-7)',
      background: 'var(--surface-panel)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://api.iconify.design/fluent-emoji-high-contrast/shark.svg?color=%232ED3C0",
    width: "22",
    height: "22",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 'var(--text-md)',
      letterSpacing: '-.01em',
      color: 'var(--text-display)'
    }
  }, "Carcharias")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--line-hairline)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 30,
      padding: '0 10px',
      background: 'transparent',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, "Acme Inc", /*#__PURE__*/React.createElement(Icon, {
    name: "chevrons-up-down",
    size: 14,
    color: "var(--text-faint)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      marginLeft: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search events, projects, members",
    onChange: onSearch
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "What's new",
    side: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "sparkles",
    label: "What's new",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Alerts",
    side: "bottom"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    label: "Alerts",
    size: "sm",
    active: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--line-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      color: 'var(--text-body)'
    }
  }, "DA")));
}
function PageHeader({
  title,
  description,
  actions,
  tabs
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-9) 0',
      borderBottom: tabs ? 'none' : '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-8)',
      paddingBottom: tabs ? 'var(--space-6)' : 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-2xl)'
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, description) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, actions) : null), tabs);
}
function AppShell({
  view,
  setView,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SideNav, {
    value: view,
    onChange: setView,
    width: 214,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "All systems normal"), /*#__PURE__*/React.createElement("span", {
      className: "cfx-caption"
    }, "Team plan \xB7 19 of 20 seats")),
    items: [{
      value: 'overview',
      label: 'Overview',
      icon: 'layout-dashboard'
    }, {
      section: 'Monitor'
    }, {
      value: 'events',
      label: 'Events',
      icon: 'list',
      count: 2410
    }, {
      value: 'alerts',
      label: 'Alerts',
      icon: 'bell',
      count: 3
    }, {
      section: 'Workspace'
    }, {
      value: 'settings',
      label: 'Settings',
      icon: 'settings'
    }]
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'auto'
    }
  }, children)));
}
Object.assign(window, {
  AppShell,
  TopBar,
  PageHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/EventsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  Input,
  Select,
  Tag,
  Checkbox,
  Tabs,
  Icon,
  Toast
} = window.CarchariasDesignSystem_c8a750;
const EVENTS = [['evt_8fA2c1', 'Error', 'PaymentDeclined', 'acme-production', '14:02:19', 'Card issuer declined the charge.'], ['evt_8fA2b9', 'Warning', 'SlowQuery', 'acme-staging', '14:01:44', 'Query took 4.2s to complete.'], ['evt_8fA2b1', 'Info', 'UserSignedUp', 'acme-production', '14:00:02', 'New account created from the web app.'], ['evt_8fA2a7', 'Error', 'WebhookTimeout', 'acme-eu-edge', '13:58:31', 'No response after 30s. Will retry twice.'], ['evt_8fA2a0', 'Info', 'ExportCompleted', 'acme-production', '13:55:10', '48,210 rows written to CSV.'], ['evt_8fA299', 'Warning', 'RateLimited', 'acme-eu-edge', '13:52:07', '429 returned for 41 requests.'], ['evt_8fA290', 'Error', 'PaymentDeclined', 'acme-production', '13:49:55', 'Insufficient funds.'], ['evt_8fA288', 'Info', 'MemberInvited', 'Workspace', '13:44:12', 'Invite sent to sam@acme.com.']];
const TONES = {
  Error: 'danger',
  Warning: 'warn',
  Info: 'info'
};
function EventsScreen() {
  const [sel, setSel] = React.useState([]);
  const [filters, setFilters] = React.useState(['Errors']);
  const [q, setQ] = React.useState('');
  const [open, setOpen] = React.useState(EVENTS[0]);
  const [tab, setTab] = React.useState('all');
  const rows = EVENTS.filter(e => e[2].toLowerCase().includes(q.toLowerCase()) || e[0].includes(q));
  const toggleSel = id => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const toggleFilter = t => setFilters(fs => fs.includes(t) ? fs.filter(x => x !== t) : [...fs, t]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Events",
    description: "2,410 events in the last 24 hours.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "download"
    }, "Export"), /*#__PURE__*/React.createElement(Button, {
      icon: "plus"
    }, "Create alert")),
    tabs: /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'all',
        label: 'All',
        count: 2410
      }, {
        value: 'err',
        label: 'Errors',
        count: 41
      }, {
        value: 'warn',
        label: 'Warnings',
        count: 128
      }, {
        value: 'saved',
        label: 'Saved views'
      }]
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-9)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search by name or ID",
    value: q,
    onChange: e => setQ(e.target.value)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['All projects', 'acme-production', 'acme-staging', 'acme-eu-edge']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement(Select, {
    size: "sm",
    options: ['Last 24 hours', 'Last 7 days', 'Last 30 days']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      marginLeft: 'var(--space-4)'
    }
  }, ['Errors', 'Warnings', 'Info'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: filters.includes(t),
    onClick: () => toggleFilter(t)
  }, t))), sel.length > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, sel.length, " selected"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: "check"
  }, "Resolve"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    icon: "archive"
  }, "Archive")) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gridTemplateColumns: '1fr 340px',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '38px 90px 1fr 150px 100px',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) var(--space-9)',
      background: 'var(--surface-inset)',
      position: 'sticky',
      top: 0,
      zIndex: 2
    }
  }, ['', 'Level', 'Event', 'Project', 'Time'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--type-caption)',
      fontWeight: 500,
      color: 'var(--text-faint)'
    }
  }, h))), rows.map(e => {
    const on = sel.includes(e[0]);
    const active = open && open[0] === e[0];
    return /*#__PURE__*/React.createElement("div", {
      key: e[0],
      onClick: () => setOpen(e),
      style: {
        display: 'grid',
        gridTemplateColumns: '38px 90px 1fr 150px 100px',
        gap: 'var(--space-5)',
        alignItems: 'center',
        padding: 'var(--space-5) var(--space-9)',
        borderBottom: '1px solid var(--line-hairline)',
        cursor: 'pointer',
        background: active ? 'var(--surface-selected)' : on ? 'rgba(195,207,211,.04)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: on,
      onChange: () => toggleSel(e[0])
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: TONES[e[1]],
      dot: true
    }, e[1]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        color: 'var(--text-display)'
      }
    }, e[2]), /*#__PURE__*/React.createElement("span", {
      className: "cfx-caption",
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, e[5])), /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--type-body-sm)',
        color: 'var(--text-muted)'
      }
    }, e[3]), /*#__PURE__*/React.createElement("span", {
      className: "cfx-value",
      style: {
        color: 'var(--text-muted)'
      }
    }, e[4]));
  })), /*#__PURE__*/React.createElement("aside", {
    style: {
      borderLeft: '1px solid var(--line-hairline)',
      background: 'var(--surface-panel)',
      overflow: 'auto'
    }
  }, open ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: TONES[open[1]],
    dot: true
  }, open[1]), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, open[2]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, open[5])), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: () => setOpen(null)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, [['Event ID', open[0]], ['Project', open[3]], ['Time', open[4] + ' UTC'], ['Environment', 'production'], ['Occurrences', '14 in 24h'], ['First seen', '3 days ago']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) 0',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 104,
      flex: '0 0 auto',
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "cfx-value",
    style: {
      color: 'var(--text-body)'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    icon: "check"
  }, "Resolve event"), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "outline",
    icon: "bell"
  }, "Create alert from this"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      alignItems: 'center',
      textAlign: 'center',
      marginTop: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mouse-pointer-click",
    size: 22,
    color: "var(--text-faint)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-body)'
    }
  }, "No event selected"), /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, "Select a row to see its details.")))));
}
Object.assign(window, {
  EventsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/EventsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/OverviewScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Meter,
  Icon,
  Tabs,
  IconButton,
  Tooltip
} = window.CarchariasDesignSystem_c8a750;
const STATS = [['Events', '2.4M', '+12% vs last month', 'success'], ['Error rate', '0.41%', '+0.08 vs last month', 'warn'], ['p95 latency', '182 ms', '−14 ms vs last month', 'success'], ['Open alerts', '3', '2 need attention', 'danger']];
const ALERTS = [['High error rate', 'acme-production', '14:02', 'danger'], ['Approaching event limit', 'Workspace', '11:40', 'warn'], ['Slow queries detected', 'acme-staging', 'Yesterday', 'warn']];
const PROJECTS = [['acme-production', 'Europe', '1.8M', '0.44%', 'Active'], ['acme-staging', 'Europe', '480K', '0.12%', 'Active'], ['acme-eu-edge', 'Europe', '96K', '2.10%', 'Degraded'], ['internal-tools', 'North America', '24K', '0.00%', 'Paused']];
function StatCard({
  label,
  value,
  delta,
  tone
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "inset",
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-muted)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-3xl)',
      fontWeight: 500,
      color: 'var(--text-display)',
      fontVariantNumeric: 'tabular-nums',
      letterSpacing: '-.01em'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: tone === 'danger' ? 'var(--danger-500)' : tone === 'warn' ? 'var(--warn-500)' : 'var(--text-faint)'
    }
  }, delta)));
}
function OverviewScreen({
  go
}) {
  const [range, setRange] = React.useState('30d');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Overview",
    description: "Last 30 days across 4 projects.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Tabs, {
      variant: "segmented",
      value: range,
      onChange: setRange,
      items: [{
        value: '24h',
        label: '24h'
      }, {
        value: '7d',
        label: '7 days'
      }, {
        value: '30d',
        label: '30 days'
      }]
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      icon: "download"
    }, "Export"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 'var(--space-6)'
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement(StatCard, {
    key: s[0],
    label: s[0],
    value: s[1],
    delta: s[2],
    tone: s[3]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr 1fr',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--space-6) var(--space-7)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Projects"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconAfter: "arrow-right",
    style: {
      marginLeft: 'auto'
    },
    onClick: () => go('events')
  }, "View events")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .9fr .7fr .7fr .8fr',
      gap: 'var(--space-5)',
      padding: 'var(--space-5) var(--space-7)',
      background: 'var(--surface-inset)'
    }
  }, ['Project', 'Region', 'Events', 'Errors', 'Status'].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      font: 'var(--type-caption)',
      fontWeight: 500,
      color: 'var(--text-faint)'
    }
  }, h))), PROJECTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr .9fr .7fr .7fr .8fr',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-5) var(--space-7)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-display)'
    }
  }, p[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, p[1]), /*#__PURE__*/React.createElement("span", {
    className: "cfx-value"
  }, p[2]), /*#__PURE__*/React.createElement("span", {
    className: "cfx-value",
    style: {
      color: parseFloat(p[3]) > 1 ? 'var(--warn-500)' : 'var(--text-body)'
    }
  }, p[3]), /*#__PURE__*/React.createElement(Badge, {
    tone: p[4] === 'Active' ? 'success' : p[4] === 'Degraded' ? 'warn' : 'neutral',
    dot: p[4] === 'Active'
  }, p[4])))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Usage"), /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption",
    style: {
      marginLeft: 'auto'
    }
  }, "Resets 1 September")), /*#__PURE__*/React.createElement(Meter, {
    label: "Events",
    valueText: "2.4M / 5M",
    value: 2.4,
    max: 5
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Storage",
    valueText: "78 GB / 100 GB",
    value: 78,
    max: 100
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Seats",
    valueText: "19 / 20",
    value: 19,
    max: 20
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    block: true
  }, "Manage plan"))), /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: 'var(--space-6) var(--space-7)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Alerts"), /*#__PURE__*/React.createElement(Badge, {
    tone: "danger",
    style: {
      marginLeft: 'auto'
    }
  }, "3 open")), ALERTS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a[0],
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-7)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: a[3] === 'danger' ? 'circle-alert' : 'triangle-alert',
    size: 16,
    color: a[3] === 'danger' ? 'var(--danger-500)' : 'var(--warn-500)',
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, a[0]), /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, a[1], " \xB7 ", a[2])), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Resolve"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "check",
    label: "Resolve",
    size: "sm"
  })))))))));
}
Object.assign(window, {
  OverviewScreen,
  StatCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/OverviewScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/SettingsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  IconButton,
  Input,
  Select,
  Field,
  Switch,
  Checkbox,
  Radio,
  Slider,
  Tabs,
  Dialog,
  Icon
} = window.CarchariasDesignSystem_c8a750;
const MEMBERS = [['Daniel Avissar', 'daniel@acme.com', 'Owner', 'Active'], ['Sam Okafor', 'sam@acme.com', 'Admin', 'Active'], ['Priya Raman', 'priya@acme.com', 'Member', 'Active'], ['Jonas Weber', 'jonas@acme.com', 'Member', 'Invited']];
function SettingsScreen() {
  const [tab, setTab] = React.useState('general');
  const [confirm, setConfirm] = React.useState(false);
  const [days, setDays] = React.useState(30);
  const [flags, setFlags] = React.useState({
    mfa: true,
    digest: true,
    ip: false
  });
  const [plan, setPlan] = React.useState('team');
  const set = k => e => setFlags(v => ({
    ...v,
    [k]: e.target.checked
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PageHeader, {
    title: "Settings",
    description: "Workspace-wide settings. Changes apply to all projects.",
    tabs: /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: 'general',
        label: 'General'
      }, {
        value: 'members',
        label: 'Members',
        count: 4
      }, {
        value: 'security',
        label: 'Security'
      }, {
        value: 'billing',
        label: 'Billing'
      }]
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8) var(--space-9)',
      maxWidth: 880,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, tab === 'members' ? /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-7)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Members"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-caption",
    style: {
      marginTop: 2
    }
  }, "19 of 20 seats used.")), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "plus",
    style: {
      marginLeft: 'auto'
    }
  }, "Invite member")), MEMBERS.map(m => /*#__PURE__*/React.createElement("div", {
    key: m[1],
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1.4fr 110px 90px 36px',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-6) var(--space-7)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-display)'
    }
  }, m[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, m[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, m[2]), /*#__PURE__*/React.createElement(Badge, {
    tone: m[3] === 'Active' ? 'success' : 'info',
    dot: m[3] === 'Active'
  }, m[3]), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis",
    label: "Manage member",
    size: "sm"
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Workspace"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-caption",
    style: {
      marginTop: 3
    }
  }, "Visible to everyone in this workspace.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Workspace name"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "Acme Inc"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "URL",
    hint: "Lowercase letters, numbers and dashes."
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    defaultValue: "acme",
    suffix: ".carcharias.app"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Default region",
    hint: "New projects are created here."
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Europe (eu-west-1)', 'North America (us-east-1)', 'Asia Pacific (ap-south-1)']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Contact email",
    optional: true
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "ops@acme.com"
  }))), /*#__PURE__*/React.createElement(Slider, {
    label: "Event retention",
    value: days,
    unit: " days",
    min: 1,
    max: 90,
    onChange: e => setDays(+e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Save changes"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Cancel")))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Security and notifications"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-caption",
    style: {
      marginTop: 3
    }
  }, "These apply immediately.")), /*#__PURE__*/React.createElement(Switch, {
    checked: flags.mfa,
    onChange: set('mfa'),
    label: "Require two-factor authentication",
    hint: "Members without it will be prompted at next sign-in."
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: flags.digest,
    onChange: set('digest'),
    label: "Send a weekly summary",
    hint: "Every Monday at 09:00 UTC."
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: flags.ip,
    onChange: set('ip'),
    label: "Restrict access by IP address",
    hint: "You will need to add at least one range."
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Plan"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-caption",
    style: {
      marginTop: 3
    }
  }, "Billed monthly. Change takes effect immediately.")), /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    checked: plan === 'starter',
    onChange: () => setPlan('starter'),
    label: "Starter",
    hint: "1M events, 5 seats. $0."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    checked: plan === 'team',
    onChange: () => setPlan('team'),
    label: "Team",
    hint: "5M events, 20 seats. $29 per month."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    checked: plan === 'org',
    onChange: () => setPlan('org'),
    label: "Organisation",
    hint: "Unlimited events and seats, SSO. Contact us."
  }))), /*#__PURE__*/React.createElement(Card, {
    accent: "var(--intent-danger)",
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, "Delete workspace"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, "Removes 4 projects, 2.4M events and 19 members. This cannot be undone.")), /*#__PURE__*/React.createElement(Button, {
    variant: "danger",
    onClick: () => setConfirm(true)
  }, "Delete workspace"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    width: 440,
    title: "Delete this workspace?",
    description: "Removes 4 projects, 2.4M events and 19 members. This cannot be undone.",
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setConfirm(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "danger",
      onClick: () => setConfirm(false)
    }, "Delete workspace"))
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Type acme to confirm"
  }, /*#__PURE__*/React.createElement(Input, {
    mono: true,
    placeholder: "acme"
  }))));
}
Object.assign(window, {
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/DocsScreen.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Input,
  Icon,
  Tag
} = window.CarchariasDesignSystem_c8a750;
const NAV = [['Getting started', ['Introduction', 'Install the SDK', 'Send your first event', 'Set up alerts']], ['Guides', ['Filtering events', 'Retention and limits', 'Webhooks', 'Managing members']], ['Reference', ['REST API', 'SDK options', 'Error codes', 'Rate limits']]];
function DocsScreen() {
  const [page, setPage] = React.useState('Send your first event');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '220px 1fr 190px',
      gap: 'var(--space-11)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      position: 'sticky',
      top: 76,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    icon: "search",
    placeholder: "Search docs"
  }), NAV.map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, group), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it,
    onClick: () => setPage(it),
    style: {
      textAlign: 'left',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '3px 0',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      color: page === it ? 'var(--tide-400)' : 'var(--text-muted)',
      fontWeight: page === it ? 500 : 400
    }
  }, it))))), /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      font: 'var(--type-caption)',
      color: 'var(--text-faint)'
    }
  }, "Getting started ", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 12
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, page)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-4xl)',
      letterSpacing: '-.02em'
    }
  }, page), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-prose)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.5,
      color: 'var(--text-muted)'
    }
  }, "Send one event from your app and confirm it appears in the Events table. This takes about two minutes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "Node.js"), /*#__PURE__*/React.createElement(Tag, {
    onClick: () => {}
  }, "Python"), /*#__PURE__*/React.createElement(Tag, {
    onClick: () => {}
  }, "Go"), /*#__PURE__*/React.createElement(Tag, {
    onClick: () => {}
  }, "cURL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "Before you start"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-prose"
  }, "You need a project and its API key. Create a project in the app, then copy the key from Settings. Keys start with ", /*#__PURE__*/React.createElement("code", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '.9em',
      color: 'var(--tide-400)'
    }
  }, "sk_live_"), " and are shown once."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "Send the event"), /*#__PURE__*/React.createElement(Card, {
    variant: "inset",
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("pre", {
    style: {
      margin: 0,
      overflow: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.7,
      color: 'var(--chrome-100)'
    }
  }, `import { Carcharias } from "@carcharias/sdk";

const cx = new Carcharias(process.env.CARCHARIAS_KEY);

await cx.track({
  name: "UserSignedUp",
  level: "info",
  context: { plan: "team", region: "eu-west-1" }
});`)), /*#__PURE__*/React.createElement("p", {
    className: "cfx-prose"
  }, "The call returns as soon as the event is queued. Delivery is retried three times over five minutes, so a failed network call does not lose data."), /*#__PURE__*/React.createElement(Card, {
    accent: "var(--intent-info)",
    pad: "var(--space-7)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 17,
    color: "var(--info-500)",
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, "Events are counted once"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)'
    }
  }, "Retries do not count against your quota.")))), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-xl)'
    }
  }, "Confirm it arrived"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-prose"
  }, "Open Events in the app and filter by name. New events appear within a few seconds. If nothing shows after a minute, check that the key belongs to the project you are looking at."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "arrow-left",
    onClick: () => setPage('Install the SDK')
  }, "Install the SDK"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    iconAfter: "arrow-right",
    onClick: () => setPage('Set up alerts'),
    style: {
      marginLeft: 'auto'
    }
  }, "Set up alerts")))), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 76,
      alignSelf: 'start',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, "On this page"), ['Before you start', 'Send the event', 'Confirm it arrived'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: h,
    style: {
      font: 'var(--type-body-sm)',
      color: i === 0 ? 'var(--tide-400)' : 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, h))));
}
Object.assign(window, {
  DocsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/DocsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/HomeScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  ImagePlate,
  Meter
} = window.CarchariasDesignSystem_c8a750;
const VALUES = [['bell', 'Alerts that mean something', 'Set a threshold once. We tell you when it is crossed, and nothing else.'], ['list', 'One table for everything', 'Errors, warnings and info in a single view you can filter in two clicks.'], ['gauge', 'Costs you can predict', 'A flat monthly price and a visible quota. No per-seat surprises.']];
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--line-hairline)',
      background: 'var(--surface-page)',
      backgroundImage: 'var(--texture-grid)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-14) var(--space-9) var(--space-12)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-7)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Now in public beta"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-6xl)',
      lineHeight: 1.08,
      letterSpacing: '-.022em',
      maxWidth: '18ch'
    }
  }, "See what broke, and when"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      maxWidth: '46ch'
    }
  }, "Event monitoring for small teams. Connect a project, get alerts that matter, and stop reading logs by hand."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('pricing')
  }, "Start free"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    iconAfter: "arrow-right",
    onClick: () => go('docs')
  }, "Read the docs")), /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, "Free for 1M events a month. No card required."))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(ImagePlate, {
    label: "Product screenshot \u2014 Overview screen, dark theme, 1440\xD7900",
    ratio: "16 / 9"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: '0 var(--space-9) var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)'
    }
  }, VALUES.map(([icon, title, body]) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 22,
    color: "var(--tide-500)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, body)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--line-hairline)',
      borderBottom: '1px solid var(--line-hairline)',
      background: 'var(--surface-inset)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-9)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-3xl)',
      letterSpacing: '-.016em'
    }
  }, "Your quota is always on screen"), /*#__PURE__*/React.createElement("p", {
    className: "cfx-prose"
  }, "Every plan shows what you have used and what is left, on every page. You will know you are close to a limit before you hit it, not after."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => go('pricing')
  }, "See plans"))), /*#__PURE__*/React.createElement(Card, {
    pad: "var(--space-8)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Meter, {
    label: "Events",
    valueText: "2.4M / 5M",
    value: 2.4,
    max: 5
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Storage",
    valueText: "78 GB / 100 GB",
    value: 78,
    max: 100
  }), /*#__PURE__*/React.createElement(Meter, {
    label: "Seats",
    valueText: "19 / 20",
    value: 19,
    max: 20
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, "Used by teams at"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 'var(--space-6)',
      width: '100%'
    }
  }, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement(ImagePlate, {
    key: i,
    label: `Customer logo ${i}`,
    height: 56
  }))), /*#__PURE__*/React.createElement("p", {
    className: "cfx-caption",
    style: {
      maxWidth: '52ch'
    }
  }, "Logos are placeholders. Real customer marks go here once permission is on file."))), /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-narrow)',
      margin: '0 auto',
      padding: 'var(--space-13) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-4xl)',
      letterSpacing: '-.02em'
    }
  }, "Connect your first project in five minutes"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, "One install command, one API key. Nothing to configure before you see data."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg"
  }, "Start free"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, "Book a demo")))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/PricingScreen.jsx
try { (() => {
const {
  Button,
  Card,
  Badge,
  Icon,
  Tabs
} = window.CarchariasDesignSystem_c8a750;
const PLANS = [{
  name: 'Starter',
  price: '$0',
  per: 'forever',
  line: 'For one person testing an idea.',
  features: ['1M events a month', '5 seats', '7-day retention', 'Email alerts'],
  cta: 'Start free',
  variant: 'outline'
}, {
  name: 'Team',
  price: '$29',
  per: 'per month',
  line: 'For a team that ships every week.',
  featured: true,
  features: ['5M events a month', '20 seats', '30-day retention', 'Email and webhook alerts', 'Weekly summaries'],
  cta: 'Start free trial',
  variant: 'primary'
}, {
  name: 'Organisation',
  price: 'Custom',
  per: '',
  line: 'For teams with compliance requirements.',
  features: ['Unlimited events', 'Unlimited seats', '90-day retention', 'SSO and SAML', 'Audit log', 'Priority support'],
  cta: 'Contact sales',
  variant: 'outline'
}];
const ROWS = [['Events a month', '1M', '5M', 'Unlimited'], ['Seats', '5', '20', 'Unlimited'], ['Retention', '7 days', '30 days', '90 days'], ['Email alerts', true, true, true], ['Webhook alerts', false, true, true], ['SSO and SAML', false, false, true], ['Audit log', false, false, true], ['Support', 'Community', 'Email, 1 business day', 'Priority, 4 hours']];
const FAQ = [['What counts as an event?', 'Any single item you send us: an error, a log line, or a custom event. We count each one once.'], ['What happens if I go over my limit?', 'We keep collecting for 48 hours and email you. Nothing is dropped without warning.'], ['Can I change plan later?', 'Yes, at any time. Changes take effect immediately and we prorate the difference.'], ['Do you offer annual billing?', 'Yes, at two months off. Contact us and we will switch your account over.']];
function Cell({
  v
}) {
  if (v === true) return /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--tide-500)"
  });
  if (v === false) return /*#__PURE__*/React.createElement(Icon, {
    name: "minus",
    size: 16,
    color: "var(--text-faint)"
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, v);
}
function PricingScreen() {
  const [cycle, setCycle] = React.useState('monthly');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      padding: 'var(--space-12) var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-5xl)',
      letterSpacing: '-.022em'
    }
  }, "Simple pricing"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body)',
      fontSize: 'var(--text-lg)',
      color: 'var(--text-muted)',
      maxWidth: '44ch'
    }
  }, "One flat price per workspace. Seats are included, not billed separately."), /*#__PURE__*/React.createElement(Tabs, {
    variant: "segmented",
    value: cycle,
    onChange: setCycle,
    items: [{
      value: 'monthly',
      label: 'Monthly'
    }, {
      value: 'annual',
      label: 'Annual, 2 months free'
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, PLANS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    variant: p.featured ? 'raised' : 'panel',
    pad: "var(--space-8)",
    style: p.featured ? {
      borderColor: 'rgba(46,211,192,.45)'
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-lg)'
    }
  }, p.name), p.featured ? /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Most popular") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 'var(--text-4xl)',
      letterSpacing: '-.02em',
      color: 'var(--text-display)'
    }
  }, cycle === 'annual' && p.price === '$29' ? '$24' : p.price), p.per ? /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, p.per) : null), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, p.line), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: p.variant
  }, p.cta), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      paddingTop: 'var(--space-5)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, p.features.map(ft => /*#__PURE__*/React.createElement("div", {
    key: ft,
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--tide-500)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-body)'
    }
  }, ft)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)'
    }
  }, "Compare plans"), /*#__PURE__*/React.createElement(Card, {
    pad: "0"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 'var(--space-5)',
      padding: 'var(--space-6) var(--space-7)',
      background: 'var(--surface-inset)'
    }
  }, ['', 'Starter', 'Team', 'Organisation'].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--type-label)',
      color: i === 0 ? 'var(--text-faint)' : 'var(--text-display)'
    }
  }, h))), ROWS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r[0],
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr 1fr 1fr',
      gap: 'var(--space-5)',
      alignItems: 'center',
      padding: 'var(--space-6) var(--space-7)',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-display)'
    }
  }, r[0]), /*#__PURE__*/React.createElement(Cell, {
    v: r[1]
  }), /*#__PURE__*/React.createElement(Cell, {
    v: r[2]
  }), /*#__PURE__*/React.createElement(Cell, {
    v: r[3]
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.4fr',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)'
    }
  }, "Common questions"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, FAQ.map(([q, a]) => /*#__PURE__*/React.createElement("div", {
    key: q,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-7) 0',
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-md)'
    }
  }, q), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)',
      maxWidth: '58ch'
    }
  }, a))))));
}
Object.assign(window, {
  PricingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/PricingScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/SiteChrome.jsx
try { (() => {
const {
  Button,
  IconButton,
  Icon,
  Badge
} = window.CarchariasDesignSystem_c8a750;
function Wordmark({
  size = 17
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://api.iconify.design/fluent-emoji-high-contrast/shark.svg?color=%232ED3C0",
    width: size + 6,
    height: size + 6,
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: size,
      letterSpacing: '-.012em',
      color: 'var(--text-display)'
    }
  }, "Carcharias"));
}
function SiteHeader({
  route,
  go
}) {
  const nav = [['home', 'Product'], ['pricing', 'Pricing'], ['docs', 'Docs']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 60,
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-9)',
      padding: '0 var(--space-9)',
      background: 'rgba(5,8,10,.86)',
      backdropFilter: 'var(--blur-glass)',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go('home'),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-7)'
    }
  }, nav.map(([r, l]) => /*#__PURE__*/React.createElement("button", {
    key: r,
    onClick: () => go(r),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-sm)',
      fontWeight: route === r ? 500 : 400,
      color: route === r ? 'var(--text-display)' : 'var(--text-muted)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm"
  }, "Start free")));
}
function SiteFooter() {
  const cols = [['Product', ['Overview', 'Events', 'Alerts', 'Integrations']], ['Resources', ['Docs', 'API reference', 'Status', 'Changelog']], ['Company', ['About', 'Contact', 'Privacy', 'Terms']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inset)',
      borderTop: '1px solid var(--line-hairline)',
      padding: 'var(--space-12) var(--space-9) var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      maxWidth: '32ch'
    }
  }, "Event monitoring for small teams. See what broke, and when."), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "All systems normal")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      color: 'var(--text-display)'
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      font: 'var(--type-body-sm)',
      color: 'var(--text-muted)',
      cursor: 'pointer'
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--width-content)',
      margin: '0 auto',
      marginTop: 'var(--space-11)',
      paddingTop: 'var(--space-6)',
      borderTop: '1px solid var(--line-hairline)',
      display: 'flex',
      gap: 'var(--space-8)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cfx-caption"
  }, "\xA9 2026 Carcharias"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      color: 'var(--text-faint)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 16
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 16
  }))));
}
Object.assign(window, {
  Wordmark,
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ImagePlate = __ds_scope.ImagePlate;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
