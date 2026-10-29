// About copy — verbatim from Figma 04 About (131:97).
// Layer `icon`: '★' / '✦' glyphs before each item.

export const LAYERS = [
  {
    id: 'experience',
    name: 'Experience',
    meta: '2 yrs',
    open: true,
    children: [
      { id: 'academy', name: 'UX/UI Designer — Apple Developer Academy (POA)', meta: '2025 – 2026', icon: '★' },
      { id: 'adp', name: 'UX Designer — ADP', meta: '2026 – now', icon: '★' },
      { id: 'procergs', name: 'UX/UI Designer — PROCERGS', meta: '2025 – 2026', icon: '★' },
    ],
  },
  {
    id: 'education',
    name: 'Education',
    open: true,
    children: [
      { id: 'uniritter', name: 'Holds a degree in Graphic Design — Uniritter', meta: '2025', icon: '★' },
      { id: 'cruzeiro', name: 'Studying User Experience — Cruzeiro do Sul', meta: '2025', icon: '★' },
    ],
  },
  {
    id: 'awards',
    name: 'Awards',
    open: true,
    children: [
      { id: 'ssc', name: 'Swift Student Challenge', meta: '2026', icon: '★' },
      { id: 'campus', name: 'Campus Mobile', meta: '2026', icon: '✦' },
      { id: 'cei-ufg', name: 'CEI UFG', meta: '2026', icon: '✦' },
    ],
  },
]

export const BIO = {
  lead: "I'm a Product Designer from Brazil 🇧🇷 with 3 years of experience in UX/UI. I love the messy middle of a project, interviews, flows, endless iterations and the moment it all clicks into something simple.",
  body: [
    'Lately I design (and sometimes code) apps for kids and families, like Dear Diary, Fonfon and Lumina, with accessibility at the heart. Now I’m looking for my next UX/UI role.',
    "When I'm not in Figma, I'm drawing, which is how this site got its stickers.",
  ],
}

export const TOOLBOX = {
  design: ['Figma', 'FigJam', 'Prototyping', 'User research', 'Usability testing', 'Design systems'],
  // Figma 131:174 shows these as plain outline tags too (Figma spells "Diversisty"/"Acessibility")
  more: ['Procreate', 'Illustrator', 'Swift', 'Diversity', 'Accessibility'],
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
    halo: true, // crayon halo over Jade (Figma 459:468)
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
