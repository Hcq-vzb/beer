/**
 * KIWL Machine — Site-wide Keyword Pyramid
 * Tier 1: Core head terms (brand + industry, highest competition)
 * Tier 2: Category mid-tail (product lines, moderate competition)
 * Tier 3: Product long-tail (specific models/specs, lower competition)
 * Tier 4: Intent/conversion (commercial & transactional queries)
 */
(function (global) {
  'use strict';

  var KEYWORD_PYRAMID = {
    tier1: {
      label: 'Core Head Keywords',
      description: 'Broad industry terms — homepage authority hub',
      keywords: [
        'beer brewing equipment',
        'beverage machinery',
        'brewery equipment manufacturer',
        'beer beverage machinery',
        'professional brewery equipment'
      ],
      targetPages: ['/']
    },
    tier2: {
      label: 'Category Mid-Tail Keywords',
      description: 'Product category clusters — collection & solution pages',
      clusters: {
        brewhouse: {
          keywords: [
            'brewhouse systems',
            'craft brewhouse equipment',
            'industrial brewhouse systems',
            'brewery production lines',
            'mash tun lauter tun system'
          ],
          targetPages: [
            '/products',
            '/products/lines/scale-brewhouse',
            '/products/lines/craft-brewhouse',
            '/solutions'
          ]
        },
        filling: {
          keywords: [
            'beer filling lines',
            'beverage filling equipment',
            'glass bottle filling line',
            'can filling line',
            'counter-pressure filler'
          ],
          targetPages: [
            '/products',
            '/products/lines/glass-bottling-line',
            '/products/lines/can-filling-line',
            '/products/modulfill-bloc-fs-c',
            '/products/modulseam-can-seamer'
          ]
        },
        fermentation: {
          keywords: [
            'fermentation tanks',
            'brewery cellar tanks',
            'stainless steel fermentation tank',
            'beer fermentation equipment'
          ],
          targetPages: [
            '/products/machines/fermentation-tanks'
          ]
        },
        packaging: {
          keywords: [
            'beverage packaging equipment',
            'brewery packaging systems',
            'bottle washer machine',
            'tunnel pasteurizer',
            'bottle labeling machine'
          ],
          targetPages: [
            '/products/machines/packaging-systems',
            '/products/machines/kiwl-bottle-washer',
            '/products/machines/kiwl-pasteurizer',
            '/products/machines/kiwl-labeler'
          ]
        },
        inspection: {
          keywords: [
            'can inspection system',
            'fill level inspection',
            'beer quality control equipment',
            'AI defect detection brewing'
          ],
          targetPages: [
            '/products/cantronic-c-inspection',
            '/products/checkmat-compact'
          ]
        },
        turnkey: {
          keywords: [
            'turnkey brewery solutions',
            'complete brewery plant',
            'turnkey brewery equipment',
            'beverage production line supplier'
          ],
          targetPages: [
            '/products/lines/turnkey-brewery',
            '/solutions'
          ]
        },
        carbonation: {
          keywords: [
            'CO2 mixing system',
            'beer carbonation equipment',
            'carbonation system brewery',
            'beverage CO2 mixer'
          ],
          targetPages: [
            '/products/machines/co2-mixing'
          ]
        },
        service: {
          keywords: [
            'brewery equipment service',
            'brewing machinery maintenance',
            'beer equipment technical support',
            'brewery installation service'
          ],
          targetPages: ['/service']
        }
      }
    },
    tier3: {
      label: 'Product Long-Tail Keywords',
      description: 'Model-specific & capacity-specific — product detail pages',
      keywords: [
        '1000L brewhouse',
        '1000L copper brewhouse',
        '2000L craft beer system',
        '5000L brewing system',
        '5 ton brewhouse',
        'four vessel brewhouse',
        'Modulfill can filler seamer',
        'Modulseam can seamer machine',
        'Cantronic can inspection',
        'Checkmat fill level control',
        'KIWL bottle washer D5',
        'KIWL tunnel pasteurizer'
      ]
    },
    tier4: {
      label: 'Intent & Conversion Keywords',
      description: 'Transactional queries — contact & quote pages',
      keywords: [
        'brewery equipment quote',
        'beer brewing equipment price',
        'craft brewery equipment supplier',
        'commercial brewery equipment for sale',
        'brewery machinery manufacturer China',
        'custom brewery equipment',
        'brewery project consultation'
      ],
      targetPages: ['/contact', '/about']
    }
  };

  var PAGE_KEYWORDS = {
    '/': {
      tier: 1,
      primary: 'beer brewing equipment',
      secondary: ['beverage machinery', 'brewery equipment manufacturer', 'turnkey brewery solutions', 'professional brewery equipment']
    },
    '/products': {
      tier: 2,
      primary: 'beer brewing equipment',
      secondary: ['beverage filling lines', 'fermentation tanks', 'brewhouse systems', 'canning machines', 'brewery machinery catalog']
    },
    '/products/modulfill-bloc-fs-c': {
      tier: 3,
      primary: 'can filler seamer block',
      secondary: ['beer canning equipment', 'counter-pressure can filler', 'Modulfill Bloc FS-C', 'high-speed can filling line']
    },
    '/products/modulseam-can-seamer': {
      tier: 3,
      primary: 'can seamer machine',
      secondary: ['beer can seaming equipment', 'Modulseam can seamer', 'beverage can sealing machine', 'hermetic can sealer']
    },
    '/products/cantronic-c-inspection': {
      tier: 3,
      primary: 'can inspection system',
      secondary: ['AI can defect detection', 'beer quality control equipment', 'Cantronic inspection unit', 'automated can inspection']
    },
    '/products/checkmat-compact': {
      tier: 3,
      primary: 'fill level inspection system',
      secondary: ['cap inspection brewery', 'Checkmat Compact', 'beer bottling quality control', 'compact fill level checker']
    },
    '/solutions': {
      tier: 2,
      primary: 'turnkey brewery solutions',
      secondary: ['beverage production lines', 'complete brewery systems', 'brewing process technology', 'digital brewery solutions']
    },
    '/service': {
      tier: 2,
      primary: 'brewery equipment service',
      secondary: ['brewing machinery maintenance', '24/7 technical support', 'brewery installation service', 'spare parts brewing equipment']
    },
    '/about': {
      tier: 4,
      primary: 'beer equipment manufacturer',
      secondary: ['KIWL Machine', 'global brewery supplier', 'beverage machinery company', 'brewing equipment exporter']
    },
    '/contact': {
      tier: 4,
      primary: 'brewery equipment quote',
      secondary: ['beer brewing equipment inquiry', 'custom brewery quote', 'brewing machinery consultation', 'free equipment quote']
    },
    '/products/lines/scale-brewhouse': {
      tier: 2,
      primary: 'scale brewhouse systems',
      secondary: ['industrial brewhouse equipment', 'mash tun lauter tun', 'large-scale beer production', 'wort kettle whirlpool system']
    },
    '/products/lines/craft-brewhouse': {
      tier: 2,
      primary: 'craft brewhouse systems',
      secondary: ['craft brewery equipment', 'artisanal brewery systems', 'small batch brewhouse', 'microbrewery equipment']
    },
    '/products/lines/glass-bottling-line': {
      tier: 2,
      primary: 'glass bottle filling line',
      secondary: ['beer bottle filler', 'counter-pressure bottle filling', 'glass bottling equipment', 'beer bottling line']
    },
    '/products/lines/can-filling-line': {
      tier: 2,
      primary: 'can filling line',
      secondary: ['beer canning line', 'beverage can filling equipment', 'carbonated drink canning', 'can production line brewery']
    },
    '/products/lines/turnkey-brewery': {
      tier: 2,
      primary: 'turnkey brewery plant',
      secondary: ['complete brewery equipment', 'end-to-end brewery solution', 'brewery turnkey project', 'full brewery production line']
    },
    '/products/machines/fermentation-tanks': {
      tier: 2,
      primary: 'fermentation tanks',
      secondary: ['brewery cellar tanks', 'stainless steel fermenter', 'beer fermentation equipment', 'temperature controlled fermenter']
    },
    '/products/machines/co2-mixing': {
      tier: 2,
      primary: 'CO2 carbonation system',
      secondary: ['beer carbonation equipment', 'CO2 mixing system', 'beverage carbonation machine', 'inline carbonation brewery']
    },
    '/products/machines/packaging-systems': {
      tier: 2,
      primary: 'brewery packaging systems',
      secondary: ['end-of-line packaging', 'beverage packer palletizer', 'crate handling system', 'brewery packaging equipment']
    },
    '/products/machines/kiwl-bottle-washer': {
      tier: 3,
      primary: 'bottle washer brewery',
      secondary: ['glass bottle washing machine', 'KIWL bottle washer D5', 'returnable bottle cleaner', 'brewery bottle washer']
    },
    '/products/machines/kiwl-pasteurizer': {
      tier: 3,
      primary: 'tunnel pasteurizer beer',
      secondary: ['beverage pasteurization equipment', 'KIWL tunnel pasteurizer', 'beer pasteurizer machine', 'tunnel pasteurization line']
    },
    '/products/machines/kiwl-labeler': {
      tier: 3,
      primary: 'bottle labeling machine',
      secondary: ['beer bottle labeler', 'KIWL labeling system', 'high-speed bottle labeler', 'brewery labeling equipment']
    },
    '/products/lines/kiwl-1000l-copper': {
      tier: 3,
      primary: '1000L copper brewhouse',
      secondary: ['craft brewery 1000L system', 'copper brewhouse equipment', '1000L batch brewery', 'small craft brewhouse']
    },
    '/products/lines/kiwl-1000l-four-vessel': {
      tier: 3,
      primary: '1000L four vessel brewhouse',
      secondary: ['four vessel brewing system', '1000L brewhouse equipment', 'craft beer production system', 'multi-vessel brewhouse']
    },
    '/products/lines/kiwl-1000l-four-vessel-hot': {
      tier: 3,
      primary: '1000L four vessel brewhouse hot water tank',
      secondary: ['energy efficient brewhouse', '1000L brewing system', 'hot liquor tank brewhouse', 'four vessel brewery equipment']
    },
    '/products/lines/kiwl-1000l-three-vessel': {
      tier: 3,
      primary: '1000L three vessel brewhouse',
      secondary: ['compact brewhouse system', 'three vessel brewery', 'space efficient brewing equipment', '1000L brewery setup']
    },
    '/products/lines/kiwl-1000l-two-vessel-hot': {
      tier: 3,
      primary: '1000L two vessel brewhouse',
      secondary: ['startup brewery equipment', 'economical brewhouse system', 'two vessel brewing setup', 'entry level brewery equipment']
    },
    '/products/lines/kiwl-1500l-four-vessel': {
      tier: 3,
      primary: '1500L four vessel brewhouse',
      secondary: ['growing craft brewery equipment', '1500L brewing system', 'scalable brewhouse', 'four vessel craft brewery']
    },
    '/products/lines/kiwl-1ton-copper': {
      tier: 3,
      primary: '1 ton copper brewhouse',
      secondary: ['copper brewing system', '1 ton brewery equipment', 'premium small batch brewhouse', 'copper clad brewhouse']
    },
    '/products/lines/kiwl-1ton-equipment': {
      tier: 3,
      primary: '1 ton brewing equipment',
      secondary: ['professional brewery package', '1 ton brewhouse system', 'entry commercial brewery', 'complete 1 ton brewery']
    },
    '/products/lines/kiwl-2000l-copper': {
      tier: 3,
      primary: '2000L copper brewhouse',
      secondary: ['craft brewery 2000L', 'copper clad brewhouse', 'premium craft brewing equipment', '2000L batch brewery']
    },
    '/products/lines/kiwl-2000l-craft': {
      tier: 3,
      primary: '2000L craft beer system',
      secondary: ['artisanal brewery equipment', 'craft beer production line', 'small batch optimization', '2000L craft brewhouse']
    },
    '/products/lines/kiwl-2000l-four-vessel-1': {
      tier: 3,
      primary: '2000L four vessel brewhouse',
      secondary: ['2000L brewing system', 'integrated heating cooling brewhouse', 'commercial craft brewery', 'four vessel 2000L system']
    },
    '/products/lines/kiwl-2500l-five-vessel': {
      tier: 3,
      primary: '2500L five vessel brewhouse',
      secondary: ['five vessel brewing system', 'advanced brewhouse equipment', '2500L brewery plant', 'hot liquor tank brewhouse']
    },
    '/products/lines/kiwl-3000l-equipment': {
      tier: 3,
      primary: '3000L brewing equipment',
      secondary: ['medium scale brewhouse', '3000L brewery system', 'stainless steel brewhouse', 'commercial brewing plant']
    },
    '/products/lines/kiwl-5000l-system': {
      tier: 3,
      primary: '5000L brewing system',
      secondary: ['commercial brewery equipment', '5000L brewhouse', 'automated brewing system', 'large craft brewery equipment']
    },
    '/products/lines/kiwl-5ton-brewhouse': {
      tier: 3,
      primary: '5 ton brewhouse system',
      secondary: ['industrial brewhouse equipment', 'large scale brewery plant', '5 ton beer production', 'industrial brewing system']
    }
  };

  function getPageKeywords(path) {
    return PAGE_KEYWORDS[path] || null;
  }

  function getKeywordString(path) {
    var kw = PAGE_KEYWORDS[path];
    if (!kw) return '';
    return [kw.primary].concat(kw.secondary).join(', ');
  }

  global.KIWL_KEYWORDS = {
    pyramid: KEYWORD_PYRAMID,
    pages: PAGE_KEYWORDS,
    getPageKeywords: getPageKeywords,
    getKeywordString: getKeywordString
  };
})(typeof window !== 'undefined' ? window : this);
