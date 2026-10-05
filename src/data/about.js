// About copy — verbatim from Figma 04 About (131:97).
// Layer `icon`: '#' frame, '▢' item, '★' / '✦' award glyphs.

export const LAYERS = [
  {
    id: 'experience',
    name: 'Experience',
    meta: '3 yrs',
    open: true,
    children: [
      { id: 'procergs', name: 'UX/UI Designer — PROCERGS', meta: '2025 – now', icon: '▢' },
      { id: 'academy', name: 'UX/UI Designer — Apple Developer Academy - PUCRS', meta: '2025 – now', icon: '▢' },
    ],
  },
  {
    id: 'education',
    name: 'Education',
    open: true,
    children: [
      { id: 'uniritter', name: 'Holds a degree in Graphic Design — Uniritter', meta: '2025', icon: '▢' },
      { id: 'cruzeiro', name: 'Studying User Experience — Cruzeiro do Sul', meta: '2025', icon: '▢' },
    ],
  },
  {
    id: 'awards',
    name: 'Awards 🏆',
    meta: '2',
    open: true,
    children: [
      { id: 'ssc', name: 'Swift Student Challenge', meta: '2026', icon: '★' },
      { id: 'campus', name: 'Campus Mobile', meta: '2026', icon: '✦' },
      // TODO(gigi): confirm — layer reads "GOIASSSAS" in Figma (awards count says 2)
      { id: 'goiasssas', name: 'GOIASSSAS', meta: '2026', icon: '✦' },
    ],
  },
  {
    id: 'certificates',
    name: 'Certificates',
    meta: 'click to expand',
    open: false,
    children: [{ id: 'cert-pending', name: '[certificates — to be added]', icon: '▢', pending: true }],
  },
  {
    id: 'funfacts',
    name: 'Fun facts',
    meta: '4 · see Off-screen',
    open: false,
    children: [{ id: 'offscreen-link', name: 'Off-screen ↓', icon: '↳', href: '#off-screen' }],
  },
]

export const BIO = {
  lead: "I'm a Product Designer from Brazil 🇧🇷 with 3 years of experience in UX/UI. I love the messy middle of a project, interviews, flows, endless iterations and the moment it all clicks into something simple.",
  body: [
    'Lately I design (and sometimes code) iOS and iPadOS apps for kids and families, like Dear Diary, Fonfon and Lumina, with accessibility at the heart. Now I’m looking for my next UX/UI role.',
    "When I'm not in Figma, I'm drawing, which is how this site got its stickers.",
  ],
}

export const TOOLBOX = {
  design: ['Figma', 'FigJam', 'Prototyping', 'User research', 'Usability testing', 'Design systems'],
  draw: ['Procreate', 'Illustrator', 'Swift'],
}

// Off-screen hobbies. `back` is the left (−4°) polaroid drawn on top, `front` the right one (8.31°).
export const HOBBIES = [
  {
    title: 'Thrillers',
    text: 'My favourite: Jantar Secreto and Suicidas, by Raphael Montes.',
    back: {
      src: '/images/about/jantar-secreto.webp',
      alt: 'Cover of the book Jantar Secreto by Raphael Montes',
      caption: 'Jantar Secreto',
      frame: 'coral',
      crop: { width: '102.55%', height: '141.24%', left: '-3.08%', top: '-15.94%' },
    },
    front: {
      src: '/images/about/suicidas.webp',
      alt: 'Cover of the book Suicidas by Raphael Montes',
      caption: 'Suicidas',
      frame: 'purple',
      crop: { width: '100.39%', height: '138.42%', left: '-0.25%', top: '-16.6%' },
    },
  },
  {
    title: 'Cross-stitch',
    text: 'Embroidery, one little x at a time.',
    back: {
      src: '/images/about/naruto.webp',
      alt: 'Cross-stitch embroidery of a Naruto character in a hoop',
      caption: 'Naruto',
      frame: 'yellow',
      crop: { width: '133.01%', height: '163.16%', left: '-18.45%', top: '-32.51%' },
    },
    front: {
      src: '/images/about/frankenstein.webp',
      alt: 'Cross-stitch embroidery of Frankenstein in a hoop',
      // TODO(gigi): caption reads "Frankstein" in Figma — kept verbatim
      caption: 'Frankstein',
      frame: 'green',
      crop: { width: '104.48%', height: '128.16%', left: '-3.96%', top: '-16.73%' },
    },
  },
  {
    title: '2 cats and 2 dogs (Jade is an angel now)',
    text: 'Proud pet mom.',
    back: {
      src: '/images/about/joaquim-joaquina.webp',
      alt: 'Two cats, Joaquim and Joaquina, curled up together',
      caption: 'Joaquim and Joaquina',
      frame: 'blue',
      crop: { width: '114.59%', height: '140.57%', left: '-10.62%', top: '-21.23%' },
    },
    front: {
      src: '/images/about/luna-jade.webp',
      alt: 'Two small dogs, Luna and Jade, sitting side by side',
      caption: 'Luna and Jade',
      frame: 'purple',
      crop: { width: '162.31%', height: '265.47%', left: '-32.5%', top: '-84.4%' },
    },
  },
]
