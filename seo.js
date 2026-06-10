(function () {
  'use strict';

  var SITE = 'https://www.beerbeveragemachinery.com';
  var OG_IMAGE = SITE + '/e0b898133f68a563c07e.jpg';
  var BRAND = 'KIWL Machine';

  var PAGES = {
    '/': {
      title: 'KIWL Machine | Professional Beer & Beverage Machinery for Global Breweries',
      description: 'KIWL Machine is a leading manufacturer of professional beer brewing equipment, beverage filling lines, canning machines, and turnkey brewery solutions. Get a custom quote today!',
      type: 'website'
    },
    '/products': {
      title: 'Beer Brewing Equipment & Beverage Machinery | KIWL Machine Products',
      description: 'Explore KIWL Machine complete range of beer brewing equipment, can filling lines, fermentation tanks, brewhouse systems, and beverage packaging machinery for global breweries.',
      type: 'website'
    },
    '/products/modulfill-bloc-fs-c': {
      title: 'Modulfill Bloc FS-C Can Filler-Seamer | KIWL Machine',
      description: 'KIWL Machine Modulfill Bloc FS-C advanced counter-pressure can filler-seamer block for high-speed beer and beverage canning with minimal oxygen pickup.',
      type: 'product',
      productName: 'Modulfill Bloc FS-C Can Filler-Seamer Block'
    },
    '/products/modulseam-can-seamer': {
      title: 'Modulseam Can Seamer | KIWL Machine Beer Canning Equipment',
      description: 'KIWL Machine Modulseam precision can seaming equipment ensuring perfect hermetic seals for beer and beverage cans in modern brewing production lines.',
      type: 'product',
      productName: 'Modulseam Can Seamer'
    },
    '/products/cantronic-c-inspection': {
      title: 'Cantronic C Can Inspection System | KIWL Machine',
      description: 'KIWL Machine Cantronic C automated can inspection unit with AI-powered defect detection for reliable quality control in beer brewing lines.',
      type: 'product',
      productName: 'Cantronic C Inspection System'
    },
    '/products/checkmat-compact': {
      title: 'Checkmat Compact Fill Level Inspection | KIWL Machine',
      description: 'KIWL Machine Checkmat Compact fill level and cap inspection system for space-saving quality assurance in beer bottling and canning lines.',
      type: 'product',
      productName: 'Checkmat Compact Inspection System'
    },
    '/solutions': {
      title: 'Turnkey Brewery Solutions & Production Lines | KIWL Machine',
      description: 'KIWL Machine delivers complete brewery solutions from process technology and filling lines to packaging and IT integration for beverage producers worldwide.',
      type: 'website'
    },
    '/service': {
      title: 'Global Service & Technical Support | KIWL Machine',
      description: 'KIWL Machine provides worldwide installation, maintenance, spare parts, and 24/7 technical support for beer brewing and beverage filling equipment.',
      type: 'website'
    },
    '/about': {
      title: 'About KIWL Machine | Global Beer & Beverage Equipment Manufacturer',
      description: 'Learn about KIWL Machine — a trusted manufacturer of beer brewing equipment and beverage machinery serving breweries in over 50 countries worldwide.',
      type: 'website'
    },
    '/contact': {
      title: 'Contact KIWL Machine | Request a Brewery Equipment Quote',
      description: 'Contact KIWL Machine for a free consultation and customized quote on beer brewing equipment, filling lines, and turnkey brewery solutions.',
      type: 'website'
    }
  };

  var CATEGORY_PRODUCTS = {
    'lines/scale-brewhouse': {
      title: 'Scale Brewhouse Systems | KIWL Machine Industrial Brewing',
      description: 'KIWL Machine complete scale brewhouse solutions with mash tun, lauter tun, wort kettle, and whirlpool for large-scale beer production.',
      productName: 'Scale Brewhouse Systems'
    },
    'lines/craft-brewhouse': {
      title: 'Craft Brewhouse Systems | KIWL Machine',
      description: 'KIWL Machine craft brewhouse systems designed for artisanal breweries with flexible batch sizes and precise brewing process control.',
      productName: 'Craft Brewhouse Systems'
    },
    'lines/glass-bottling-line': {
      title: 'Glass Bottle Filling Lines | KIWL Machine',
      description: 'KIWL Machine high-speed glass bottle filling lines for beer and beverages with counter-pressure filling and integrated quality inspection.',
      productName: 'Glass Bottle Filling Lines'
    },
    'lines/can-filling-line': {
      title: 'Can Filling Lines | KIWL Machine Beer Canning',
      description: 'KIWL Machine complete can filling lines for beer and carbonated beverages with filler-seamer blocks and automated inspection systems.',
      productName: 'Can Filling Lines'
    },
    'lines/turnkey-brewery': {
      title: 'Turnkey Brewery Plants | KIWL Machine',
      description: 'KIWL Machine complete turnkey brewery plants from brewhouse and fermentation to filling, packaging, and utilities for global customers.',
      productName: 'Complete Turnkey Brewery Plants'
    },
    'machines/fermentation-tanks': {
      title: 'Fermentation & Cellar Tanks | KIWL Machine',
      description: 'KIWL Machine stainless steel fermentation and cellar tanks with precise temperature control for consistent beer quality and hygiene.',
      productName: 'Fermentation & Cellar Tanks'
    },
    'machines/co2-mixing': {
      title: 'CO2 Mixing & Carbonation Systems | KIWL Machine',
      description: 'KIWL Machine CO2 mixing and carbonation systems for precise carbonation control in beer and soft drink production.',
      productName: 'CO2 Mixing & Carbonation Systems'
    },
    'machines/packaging-systems': {
      title: 'End-of-Line Packaging Systems | KIWL Machine',
      description: 'KIWL Machine end-of-line packaging systems including packers, palletizers, and crate handling for beverage production lines.',
      productName: 'End-of-Line Packaging Systems'
    },
    'machines/kiwl-bottle-washer': {
      title: 'KIWL Bottle Washer D5 | KIWL Machine',
      description: 'KIWL Machine high-performance bottle washer for beer brewing lines, ensuring hygienic cleaning of returnable glass bottles with minimal water consumption.',
      productName: 'KIWL Bottle Washer D5'
    },
    'machines/kiwl-pasteurizer': {
      title: 'KIWL Tunnel Pasteurizer | KIWL Machine',
      description: 'KIWL Machine advanced tunnel pasteurizer for beer and beverage production with precise temperature control and energy efficiency.',
      productName: 'KIWL Tunnel Pasteurizer'
    },
    'machines/kiwl-labeler': {
      title: 'KIWL Bottle Labeler | KIWL Machine',
      description: 'KIWL Machine precision bottle labeling system for beer containers with accurate placement and high-speed operation.',
      productName: 'KIWL Bottle Labeler'
    }
  };

  var LINE_PRODUCTS = {
    'kiwl-1000l-copper': ['KIWL Machine 1000L Copper Brewhouse', 'KIWL Machine high-quality 1000L copper brewhouse with excellent thermal conductivity and durable construction for consistent brewing results.'],
    'kiwl-1000l-four-vessel': ['KIWL Machine 1000L Four-Vessel System', 'KIWL Machine versatile 1000L four-vessel brewhouse suitable for various beer styles with precise temperature and timing controls.'],
    'kiwl-1000l-four-vessel-hot': ['KIWL Machine 1000L Four-Vessel with Hot Water Tank', 'KIWL Machine complete 1000L four-vessel system with integrated hot water tank for energy-efficient brewing operations.'],
    'kiwl-1000l-three-vessel': ['KIWL Machine 1000L Three-Vessel System', 'KIWL Machine space-efficient 1000L three-vessel brewhouse combining functionality with compact design for smaller brewery facilities.'],
    'kiwl-1000l-two-vessel-hot': ['KIWL Machine 1000L Two-Vessel with Hot Water', 'KIWL Machine economical 1000L two-vessel system with hot water tank offering essential brewing capabilities for startup breweries.'],
    'kiwl-1500l-four-vessel': ['KIWL Machine 1500L Four-Vessel Brewhouse', 'KIWL Machine compact 1500L four-vessel brewhouse ideal for growing craft breweries requiring reliable and scalable production capacity.'],
    'kiwl-1ton-copper': ['KIWL Machine 1-Ton Copper System', 'KIWL Machine elegant copper-finished 1-ton brewhouse delivering superior heat distribution and classic brewing aesthetics for premium beer production.'],
    'kiwl-1ton-equipment': ['KIWL Machine 1-Ton Brewing Equipment', 'KIWL Machine robust 1-ton brewing equipment package including all essential vessels and controls for professional beer production.'],
    'kiwl-2000l-copper': ['KIWL Machine 2000L Copper Brewhouse', 'KIWL Machine premium copper-clad 2000L brewhouse combining traditional aesthetics with modern brewing technology for craft breweries.'],
    'kiwl-2000l-craft': ['KIWL Machine 2000L Craft Beer System', 'KIWL Machine specialized craft beer brewing system with flexible recipe programming and small-batch optimization for artisanal breweries.'],
    'kiwl-2000l-four-vessel-1': ['KIWL Machine 2000L Four-Vessel System', 'KIWL Machine efficient four-vessel 2000L brewhouse with integrated heating and cooling systems for consistent beer quality.'],
    'kiwl-2500l-five-vessel': ['KIWL Machine 2500L Five-Vessel System', 'KIWL Machine advanced five-vessel 2500L brewhouse with separate mash tun, lauter tun, kettle, whirlpool and hot liquor tank for optimal brewing efficiency.'],
    'kiwl-3000l-equipment': ['KIWL Machine 3000L Brewing Equipment', 'KIWL Machine 3000L brewhouse equipment with stainless steel construction and precise process control for medium-scale beer production.'],
    'kiwl-5000l-system': ['KIWL Machine 5000L Brewing System', 'KIWL Machine professional 5000L brewing system featuring automated temperature control and efficient wort production for commercial breweries.'],
    'kiwl-5ton-brewhouse': ['KIWL Machine 5-Ton Brewhouse System', 'KIWL Machine industrial-scale 5-ton brewhouse with complete mashing, lautering, boiling and whirlpool systems for large brewery production.']
  };

  Object.keys(LINE_PRODUCTS).forEach(function (id) {
    var item = LINE_PRODUCTS[id];
    CATEGORY_PRODUCTS['lines/' + id] = {
      title: item[0] + ' | KIWL Machine',
      description: item[1],
      productName: item[0]
    };
  });

  function getPath() {
    var path = window.location.pathname || '/';
    if (path.length > 1 && path.charAt(path.length - 1) === '/') {
      path = path.slice(0, -1);
    }
    return path || '/';
  }

  function resolveMeta(path) {
    var meta;
    if (PAGES[path]) {
      meta = PAGES[path];
    } else {
      var match = path.match(/^\/products\/([^/]+)\/([^/]+)$/);
      if (match && CATEGORY_PRODUCTS[match[1] + '/' + match[2]]) {
        var cat = CATEGORY_PRODUCTS[match[1] + '/' + match[2]];
        meta = {
          title: cat.title,
          description: cat.description,
          type: 'product',
          productName: cat.productName
        };
      } else {
        meta = PAGES['/'];
      }
    }

    if (window.KIWL_KEYWORDS) {
      var kw = window.KIWL_KEYWORDS.getPageKeywords(path);
      if (kw) {
        meta.tier = kw.tier;
        meta.primaryKeyword = kw.primary;
        meta.keywords = [kw.primary].concat(kw.secondary);
      }
    }

    return meta;
  }

  function upsertMeta(attr, key, value) {
    var selector = 'meta[' + attr + '="' + key + '"]';
    var el = document.querySelector(selector);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  }

  function upsertLink(rel, href) {
    var el = document.querySelector('link[rel="' + rel + '"]');
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }

  function upsertJsonLd(id, data) {
    var el = document.getElementById(id);
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.id = id;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  }

  function buildBreadcrumbs(path, pageTitle) {
    var items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' }];
    if (path.indexOf('/products') === 0) {
      items.push({ '@type': 'ListItem', position: 2, name: 'Products', item: SITE + '/products' });
      if (path !== '/products') {
        items.push({ '@type': 'ListItem', position: 3, name: pageTitle, item: SITE + path });
      }
    } else if (path !== '/') {
      items.push({ '@type': 'ListItem', position: 2, name: pageTitle, item: SITE + path });
    }
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items
    };
  }

  function updateSEO() {
    var path = getPath();
    var meta = resolveMeta(path);
    var url = SITE + (path === '/' ? '/' : path);
    var title = meta.title;

    document.title = title;

    upsertMeta('name', 'description', meta.description);
    if (meta.keywords && meta.keywords.length) {
      upsertMeta('name', 'keywords', meta.keywords.join(', '));
    }
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertLink('canonical', url);

    upsertMeta('property', 'og:type', meta.type === 'product' ? 'product' : 'website');
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:image', OG_IMAGE);
    upsertMeta('property', 'og:site_name', BRAND);
    upsertMeta('property', 'og:locale', 'en_US');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', OG_IMAGE);

    upsertJsonLd('seo-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: BRAND,
      url: SITE,
      logo: SITE + '/0975c021f3cef4b6973f.png',
      email: 'saler@beerbeveragemachinery.com',
      description: 'Professional beer brewing equipment and beverage machinery manufacturer serving global breweries.',
      sameAs: []
    });

    upsertJsonLd('seo-website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: BRAND,
      url: SITE,
      potentialAction: {
        '@type': 'SearchAction',
        target: SITE + '/products?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    });

    upsertJsonLd('seo-breadcrumbs', buildBreadcrumbs(path, meta.productName || title.split(' | ')[0]));

    if (meta.type === 'product' && meta.productName) {
      upsertJsonLd('seo-product', {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: meta.productName,
        description: meta.description,
        brand: { '@type': 'Brand', name: BRAND },
        manufacturer: { '@type': 'Organization', name: BRAND },
        url: url,
        image: OG_IMAGE,
        category: 'Beer Brewing Equipment',
        keywords: meta.primaryKeyword || (meta.keywords ? meta.keywords[0] : '')
      });
    } else {
      var productLd = document.getElementById('seo-product');
      if (productLd) productLd.remove();
    }
  }

  function hookHistory() {
    var pushState = history.pushState;
    var replaceState = history.replaceState;

    history.pushState = function () {
      pushState.apply(history, arguments);
      updateSEO();
    };
    history.replaceState = function () {
      replaceState.apply(history, arguments);
      updateSEO();
    };
    window.addEventListener('popstate', updateSEO);
  }

  hookHistory();
  updateSEO();
  document.addEventListener('DOMContentLoaded', updateSEO);
  window.addEventListener('load', function () {
    setTimeout(updateSEO, 100);
    setTimeout(updateSEO, 500);
  });
})();
