(function () {
  'use strict';

  var WA_NUMBER = '8617751189576';
  var BRAND = 'KIWL Machine';
  var SITE = 'https://www.beerbeveragemachinery.com';

  var PAGE_LABELS = {
    '/': 'Home',
    '/products': 'Products',
    '/products/modulfill-bloc-fs-c': 'Modulfill Bloc FS-C',
    '/products/modulseam-can-seamer': 'Modulseam Can Seamer',
    '/products/cantronic-c-inspection': 'Cantronic C Inspection',
    '/products/checkmat-compact': 'Checkmat Compact',
    '/solutions': 'Solutions',
    '/service': 'Service & Support',
    '/about': 'About Us',
    '/contact': 'Contact / Quote'
  };

  var TOPICS = {
    brewhouse: {
      label: 'Brewhouse Systems',
      reply: 'We offer complete brewhouse solutions — from 1000L craft systems to 5-ton industrial plants. Our lines include mash tun, lauter tun, wort kettle, and whirlpool configurations. Copper and stainless steel options available for craft and commercial breweries.'
    },
    filling: {
      label: 'Filling & Canning Lines',
      reply: 'Our filling technology covers glass bottle lines, can filling lines, and integrated filler-seamer blocks like Modulfill Bloc FS-C. High-speed counter-pressure filling ensures minimal oxygen pickup and consistent product quality.'
    },
    fermentation: {
      label: 'Fermentation Tanks',
      reply: 'KIWL fermentation and cellar tanks feature premium stainless steel construction with precise temperature control — scalable from craft breweries to industrial production facilities.'
    },
    turnkey: {
      label: 'Turnkey Brewery',
      reply: 'We deliver end-to-end turnkey brewery plants: brewhouse, fermentation, filling, packaging, and utilities. Every line is customized to your capacity, budget, and local requirements.'
    },
    quote: {
      label: 'Request a Quote',
      reply: 'Great! Our sales manager can prepare a customized quote for your project. Click the WhatsApp button below to connect directly — your current page link will be included so we know exactly what you are looking at.'
    }
  };

  function getPath() {
    var path = location.pathname || '/';
    if (path.length > 1 && path.charAt(path.length - 1) === '/') {
      path = path.slice(0, -1);
    }
    return path || '/';
  }

  function getPageLabel() {
    var path = getPath();
    if (PAGE_LABELS[path]) return PAGE_LABELS[path];
    if (path.indexOf('/products/lines/') === 0) {
      return 'Product: ' + path.split('/').pop().replace(/-/g, ' ');
    }
    if (path.indexOf('/products/machines/') === 0) {
      return 'Product: ' + path.split('/').pop().replace(/-/g, ' ');
    }
    if (path.indexOf('/products/') === 0) return 'Products';
    return document.title.split(' | ')[0] || 'Website';
  }

  function getPageUrl() {
    return SITE + (getPath() === '/' ? '/' : getPath());
  }

  function buildWhatsAppLink(extra) {
    var pageName = getPageLabel();
    var pageUrl = getPageUrl();
    var lines = [
      'Hello! I am interested in ' + BRAND + ' products.',
      '',
      'Page: ' + pageName,
      'Link: ' + pageUrl
    ];
    if (extra) lines.push('', extra);
    lines.push('', 'I would like to speak with your sales manager. Thank you!');
    return 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  function injectStyles() {
    if (document.getElementById('kiwl-chat-styles')) return;
    var style = document.createElement('style');
    style.id = 'kiwl-chat-styles';
    style.textContent = [
      '#kiwl-chat-root{position:fixed;bottom:24px;right:24px;z-index:99999;font-family:Inter,system-ui,sans-serif}',
      '#kiwl-chat-toggle{width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;background:linear-gradient(135deg,#2563eb,#16a34a);color:#fff;box-shadow:0 8px 24px rgba(37,99,235,.35);display:flex;align-items:center;justify-content:center;transition:transform .2s,box-shadow .2s}',
      '#kiwl-chat-toggle:hover{transform:scale(1.08);box-shadow:0 12px 28px rgba(37,99,235,.45)}',
      '#kiwl-chat-toggle svg{width:28px;height:28px}',
      '#kiwl-chat-panel{display:none;position:absolute;bottom:76px;right:0;width:360px;max-width:calc(100vw - 32px);background:#fff;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,.18);overflow:hidden;flex-direction:column}',
      '#kiwl-chat-panel.open{display:flex}',
      '.kiwl-chat-header{background:linear-gradient(135deg,#1e40af,#2563eb);color:#fff;padding:16px 18px;display:flex;align-items:center;justify-content:space-between}',
      '.kiwl-chat-header-info{display:flex;align-items:center;gap:10px}',
      '.kiwl-chat-avatar{width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px}',
      '.kiwl-chat-header h4{margin:0;font-size:15px;font-weight:600}',
      '.kiwl-chat-header p{margin:2px 0 0;font-size:12px;opacity:.85}',
      '.kiwl-chat-close{background:none;border:none;color:#fff;cursor:pointer;padding:4px;opacity:.8}',
      '.kiwl-chat-close:hover{opacity:1}',
      '.kiwl-chat-messages{flex:1;overflow-y:auto;padding:16px;max-height:340px;display:flex;flex-direction:column;gap:10px;background:#f8fafc}',
      '.kiwl-chat-msg{max-width:88%;padding:10px 14px;border-radius:12px;font-size:13.5px;line-height:1.55;animation:kiwlFadeIn .3s ease}',
      '.kiwl-chat-msg.bot{background:#fff;color:#1e293b;border:1px solid #e2e8f0;border-bottom-left-radius:4px;align-self:flex-start}',
      '.kiwl-chat-msg.user{background:#2563eb;color:#fff;border-bottom-right-radius:4px;align-self:flex-end}',
      '.kiwl-chat-chips{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 12px;background:#f8fafc}',
      '.kiwl-chat-chip{background:#fff;border:1px solid #2563eb;color:#2563eb;padding:6px 12px;border-radius:20px;font-size:12px;cursor:pointer;transition:all .15s}',
      '.kiwl-chat-chip:hover{background:#2563eb;color:#fff}',
      '.kiwl-chat-footer{padding:12px 16px 16px;border-top:1px solid #e2e8f0;background:#fff}',
      '.kiwl-chat-wa{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:12px;border:none;border-radius:10px;background:#25d366;color:#fff;font-size:14px;font-weight:600;cursor:pointer;text-decoration:none;transition:background .15s}',
      '.kiwl-chat-wa:hover{background:#1da851}',
      '.kiwl-chat-wa svg{width:20px;height:20px;fill:currentColor}',
      '.kiwl-chat-page-hint{font-size:11px;color:#94a3b8;text-align:center;margin-top:8px}',
      '@keyframes kiwlFadeIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}',
      '@media(max-width:480px){#kiwl-chat-root{bottom:16px;right:16px}#kiwl-chat-panel{bottom:68px;width:calc(100vw - 32px)}}'
    ].join('');
    document.head.appendChild(style);
  }

  function createWidget() {
    injectStyles();

    var root = document.createElement('div');
    root.id = 'kiwl-chat-root';

    var panel = document.createElement('div');
    panel.id = 'kiwl-chat-panel';
    panel.innerHTML = [
      '<div class="kiwl-chat-header">',
      '  <div class="kiwl-chat-header-info">',
      '    <div class="kiwl-chat-avatar">KM</div>',
      '    <div><h4>' + BRAND + ' Support</h4><p>Online · Sales Team</p></div>',
      '  </div>',
      '  <button class="kiwl-chat-close" aria-label="Close chat">&times;</button>',
      '</div>',
      '<div class="kiwl-chat-messages" id="kiwl-chat-messages"></div>',
      '<div class="kiwl-chat-chips" id="kiwl-chat-chips"></div>',
      '<div class="kiwl-chat-footer">',
      '  <a class="kiwl-chat-wa" id="kiwl-chat-wa" href="#" target="_blank" rel="noopener noreferrer">',
      '    <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
      '    Chat on WhatsApp',
      '  </a>',
      '  <div class="kiwl-chat-page-hint" id="kiwl-chat-hint"></div>',
      '</div>'
    ].join('');

    var toggle = document.createElement('button');
    toggle.id = 'kiwl-chat-toggle';
    toggle.setAttribute('aria-label', 'Open customer support chat');
    toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

    root.appendChild(panel);
    root.appendChild(toggle);
    document.body.appendChild(root);

    return { root: root, panel: panel, toggle: toggle };
  }

  var state = { opened: false, initialized: false, topicChosen: null };

  function el(id) { return document.getElementById(id); }

  function addMessage(text, type) {
    var box = el('kiwl-chat-messages');
    if (!box) return;
    var div = document.createElement('div');
    div.className = 'kiwl-chat-msg ' + (type || 'bot');
    div.textContent = text;
    box.appendChild(div);
    box.scrollTop = box.scrollHeight;
  }

  function renderChips() {
    var chips = el('kiwl-chat-chips');
    if (!chips) return;
    chips.innerHTML = '';
    Object.keys(TOPICS).forEach(function (key) {
      var btn = document.createElement('button');
      btn.className = 'kiwl-chat-chip';
      btn.textContent = TOPICS[key].label;
      btn.addEventListener('click', function () {
        onTopicSelect(key);
      });
      chips.appendChild(btn);
    });
  }

  function updateWhatsAppLink(extra) {
    var link = el('kiwl-chat-wa');
    var hint = el('kiwl-chat-hint');
    if (link) link.href = buildWhatsAppLink(extra);
    if (hint) hint.textContent = 'Inquiry from: ' + getPageLabel();
  }

  function getPageIntro() {
    var path = getPath();
    if (path === '/products' || path.indexOf('/products/') === 0) {
      return 'You are browsing our Products section — we supply brewhouse systems, filling lines, fermentation tanks, canning machines, and packaging equipment.';
    }
    if (path === '/solutions') {
      return 'You are on our Solutions page — we offer complete turnkey brewery plants and customized production line integration.';
    }
    if (path === '/service') {
      return 'You are viewing our Service page — we provide global installation, maintenance, and 24/7 technical support in 50+ countries.';
    }
    if (path === '/contact') {
      return 'You are on our Contact page — feel free to ask about quotes, technical specs, or project timelines.';
    }
    return 'Every day, millions of bottles and cans run through KIWL Machine lines worldwide. We serve breweries, beverage bottlers, and food producers with complete production systems.';
  }

  function initConversation() {
    var box = el('kiwl-chat-messages');
    if (!box) return;
    box.innerHTML = '';
    state.topicChosen = null;

    addMessage('Hello! Welcome to ' + BRAND + '. How can we help you today?');
    setTimeout(function () {
      addMessage('We are a leading manufacturer of professional beer brewing equipment, beverage filling lines, canning machines, and turnkey brewery solutions — trusted by customers in over 50 countries.');
    }, 600);
    setTimeout(function () {
      addMessage(getPageIntro());
    }, 1400);
    setTimeout(function () {
      addMessage('Please select a topic below, or chat directly with our sales manager on WhatsApp.');
      renderChips();
    }, 2200);

    updateWhatsAppLink();
  }

  function onTopicSelect(key) {
    var topic = TOPICS[key];
    if (!topic) return;
    state.topicChosen = key;
    addMessage(topic.label, 'user');
    setTimeout(function () {
      addMessage(topic.reply);
    }, 400);
    setTimeout(function () {
      addMessage('Ready to move forward? Tap the green button below to reach our sales manager on WhatsApp. Your page link will be sent automatically.');
      updateWhatsAppLink('Topic: ' + topic.label);
    }, 1000);
  }

  function toggleChat(open) {
    var panel = el('kiwl-chat-panel');
    if (!panel) return;
    state.opened = typeof open === 'boolean' ? open : !state.opened;
    panel.classList.toggle('open', state.opened);
    if (state.opened && !state.initialized) {
      state.initialized = true;
      initConversation();
    }
    if (state.opened) updateWhatsAppLink(state.topicChosen ? 'Topic: ' + TOPICS[state.topicChosen].label : null);
  }

  function hookNavigation() {
    var push = history.pushState;
    var replace = history.replaceState;
    history.pushState = function () {
      push.apply(history, arguments);
      if (state.opened) updateWhatsAppLink(state.topicChosen ? 'Topic: ' + TOPICS[state.topicChosen].label : null);
    };
    history.replaceState = function () {
      replace.apply(history, arguments);
      if (state.opened) updateWhatsAppLink(state.topicChosen ? 'Topic: ' + TOPICS[state.topicChosen].label : null);
    };
    window.addEventListener('popstate', function () {
      if (state.opened) updateWhatsAppLink(state.topicChosen ? 'Topic: ' + TOPICS[state.topicChosen].label : null);
    });
  }

  function init() {
    var ui = createWidget();
    ui.toggle.addEventListener('click', function () { toggleChat(); });
    ui.panel.querySelector('.kiwl-chat-close').addEventListener('click', function () { toggleChat(false); });
    hookNavigation();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
