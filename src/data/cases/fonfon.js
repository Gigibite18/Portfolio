// Case — Fonfon (Figma 293:405). Copy is verbatim from the file.
// Synced with the Figma redo on 2026-11-25: Fredoka everywhere, Fonfon DS colours,
// real mascot art and app screens. Team of 5 (no Antônio on this one).

const soft = (t) => [t, 'soft']
const softBold = (t) => [t, 'soft bold']
const bold = (t) => [t, 'bold']

export default {
  slug: 'fonfon',
  header: {
    title: 'Fonfon — phonics that feel like play',
    subtitle: 'Giovana Hossein Rebello · Product Designer',
  },
  prototype: null, // pending link

  hero: {
    band: 'band-1',
    meta: [
      ['PROJECT TYPE', 'Speech game · iPad · ages 4–8'],
      ['CONTEXT', 'Team of 5 · Tecnopuc Experience'],
      ['YEAR', '2026'],
      ['MY ROLE', 'Product Designer (UX/UI)'],
    ],
    // the app's own wordmark replaces the giant word (Figma 598:6605)
    word: { text: 'Fonfon', x: 224, y: 72, size: 250 },
    logo: { src: '/images/fonfon/logo.svg', x: 224, y: 72, w: 762 },
    curl: { x: 42, y: 98, r: 0 },
    rays: { x: 1082, y: 122, r: 0 },
    // Figma keeps the “Ssss!” sticker tucked under the iPad, so it is left out
    note: { lines: ['say “sapo”', 'and the frog', 'walks'], x: 200, y: 507, tone: 'c2', r: 6 },
    device: { x: 339.5, y: 329, r: -4 },
    screen: {
      src: '/images/fonfon/screen-home.webp',
      alt: 'Fonfon home: the FonFon mascot waves on an island under the logo, with a big play button',
    },
    art: {
      src: '/images/fonfon/mascot-sit.webp',
      alt: '',
      x: 839,
      y: 410,
      w: 186,
    },
  },

  sections: [
    {
      type: 'about',
      id: 'about',
      nav: 'About',
      eyebrow: 'ABOUT PROJECT',
      n: 1,
      lead: [
        bold('Fonfon'),
        ' is an iPad game where kids practise ',
        bold('speech sounds'),
        ' by playing with their voice.',
      ],
      body: 'A team of 5 built it in 4 months, after interviews with 20+ speech therapists. Kids aged 4 to 8 explore islands with 3 mini-games (sound, syllable, word) while our own pronunciation AI listens.',
      pills: ['Speech therapy', 'Pronunciation AI', 'Story onboarding', 'Mascot & 3D', 'Design system'],
      role: 'Onboarding, splash, widgets, iPhone Duo, the FonFon mascot and the visual system.',
      stats: [
        ['3', 'mini-games per island'],
        ['10', 'rounds per game'],
        ['30s', 'mouth warm-up'],
      ],
      art: {
        src: '/images/fonfon/mascot-wave.webp',
        alt: 'FonFon, the blue mascot, waving in an explorer hat',
        // Figma 598:6653 — 284×318 at (-40, 158) on the 392×476 panel
        box: { x: -40, y: 158, w: 284, h: 318 },
        crop: { width: '100%', height: '100%', left: 0, top: 0, objectFit: 'contain' },
      },
    },
    {
      type: 'scope',
      id: 'scope',
      nav: 'Scope',
      eyebrow: 'SCOPE OF WORK',
      n: 2,
      title: [softBold('Four months'), soft(', paced like this')],
      art: {
        src: '/images/fonfon/mascot-lying.webp',
        alt: '',
        // Figma 598:6658 — 174×155 at (524, 9) on the 1200px section
        x: 524,
        y: 9,
        w: 174,
      },
      columns: [
        { label: 'Month 1', x: 99 },
        { label: 'Month 2', x: 369 },
        { label: 'Month 3', x: 641 },
        { label: 'Month 4', x: 913 },
      ],
      dividers: [272, 544, 816],
      bars: [
        { label: 'Research', tag: '20+ interviews', x: 24, w: 300, tone: 'c1' },
        { label: 'Game flow', tag: 'Play', x: 230, w: 290, tone: 'c2' },
        { label: 'Mascot & islands', tag: 'Art', x: 430, w: 300, tone: 'c3' },
        { label: 'Design system', tag: 'System', x: 600, w: 300, tone: 'c4' },
        { label: 'Ready to code', tag: 'Handoff', x: 800, w: 264, tone: 'c5' },
      ],
    },
    {
      type: 'problem',
      id: 'problem',
      nav: 'Problem',
      eyebrow: 'PROBLEM STATEMENT',
      n: 3,
      title: 'Practising sounds at home is hard to keep up.',
      body: 'We interviewed more than 20 speech therapists.',
      art: {
        src: '/images/fonfon/mascot-face.webp',
        alt: '',
        // Figma 598:6659 — 142×162, rotated 16°, peeking over the third card
        x: 990,
        y: 213,
        w: 142,
        r: 16,
      },
      insights: [
        {
          tag: 'INSIGHT 1',
          title: 'Practice at home fades between sessions',
          n: '01',
          foot: 'so the practice had to feel like a game',
          tone: 'c1',
          glow: 'c2',
        },
        {
          tag: 'INSIGHT 2',
          title: 'Kids copy a mouth better than a sound',
          n: '02',
          numAccent: true,
          foot: 'so every sound starts with a warm-up video',
          tone: 'on-dark',
        },
        {
          tag: 'INSIGHT 3',
          title: 'Therapists want to follow from afar',
          n: '03',
          foot: 'so they got their own area on iPhone, Mac and Web',
          tone: 'c5',
          glow: 'c4',
        },
      ],
    },
    {
      type: 'research',
      id: 'research',
      nav: 'Research',
      eyebrow: 'EMPATHY MAP',
      n: 4,
      title: [[soft('What kids go through')], [soft('& how '), softBold('Fonfon'), soft(' helps')]],
      handSoft: true,
      center: { src: '/images/fonfon/face-circle.webp', alt: 'FonFon’s face, mouth wide open' },
      quadrants: [
        { label: 'Says', tone: 'c1', text: ['“I already did it!”', '“Look, I said it!”'] },
        { label: 'Thinks', tone: 'c2', text: ['“This sound is hard.”', '“Is it a game or homework?”'] },
        { label: 'Does', tone: 'c3', text: ['Loses focus fast.', 'Copies the adult’s mouth.'] },
        { label: 'Feels', tone: 'c4', text: ['Proud when the frog moves.', 'Shy when a sound goes wrong.'] },
      ],
      notes: [
        {
          tag: 'Pain point',
          text: ['Practice at home turns into homework, and kids give up between sessions.'],
          tone: 'c1',
          rotate: 5,
        },
        {
          tag: 'Promise',
          text: ['Warm up,', 'say the sound,', 'win the badge.'],
          tone: 'band-3',
          rotate: -4,
        },
        {
          tag: 'What we kept hearing',
          text: ['Practice works when it feels like play, not like homework.'],
          tone: 'band-1',
          rotate: 3,
        },
      ],
    },
    {
      type: 'process',
      id: 'process',
      nav: 'Process',
      eyebrow: 'DESIGN PROCESS',
      n: 5,
      title: [soft('From a sound to a game')],
      align: 'center',
      steps: [
        { title: 'Research', pills: ['20+ speech therapists'] },
        { title: 'Game loop', pills: ['Warm-up, 30s', 'Sound', 'Syllable & word'] },
        { title: 'World', pills: ['Islands', 'FonFon mascot + 3D', 'Badges'] },
        { title: 'Design system', pills: ['Primitives', 'Semantic tokens', 'Atoms → organisms', 'Living docs'] },
        { title: 'Launch', pills: ['Tecnopuc Experience', 'App Store'] },
      ],
    },
    {
      type: 'keyscreen',
      id: 'main-flow',
      nav: 'Main flow',
      eyebrow: 'MAIN FLOW',
      n: 6,
      title: [soft('The frog game, up close')],
      screen: {
        src: '/images/fonfon/screen-frog.webp',
        alt: 'Frog game: “Faça o fonema Sssss para o sapo pegar a mosca!”, round 1 of 10',
      },
      frame: { x: 244, y: 116, w: 600, h: 450, device: false },
      selection: { x: 472, y: 318, w: 144, h: 150, tag: 'Frog' },
      cursor: { x: 612, y: 407 },
      comments: [
        {
          n: 1,
          title: 'Voice is the controller',
          text: 'Saying “Sssss” makes the frog catch the fly, so the practice is the game itself.',
          x: 12,
          y: 170,
          pin: { x: 222, y: 150 },
        },
        {
          n: 2,
          title: 'Short, counted rounds',
          text: 'Each game has 10 rounds and a “1 de 10” counter, so kids always know how far they are.',
          x: 699,
          y: 231,
          pin: { x: 679, y: 225 },
        },
        {
          n: 3,
          title: 'Warm up first',
          text: 'Before each sound, 30 seconds of mouth warm-up on video with Gigi, the real speech therapist who helped us.',
          x: 846,
          y: 62,
          pin: { x: 828, y: 145 },
        },
      ],
    },
    {
      type: 'features',
      id: 'features',
      nav: 'Features',
      eyebrow: 'FEATURES',
      n: 7,
      blocks: [
        {
          kind: 'image',
          tone: 'band-4',
          doodles: 'pond',
          title: ['The ', bold('speech therapist'), ' can follow along.'],
          body: 'The speech therapist links each kid by code or QR from a professional area on iPhone, Mac and Web, then follows progress and unlocks the sounds.',
          image: {
            src: '/images/fonfon/feature-therapist-link.webp',
            alt: 'iPad onboarding screen: “Faz acompanhamento com Fonodióloga?”, with a field for the therapist’s code and a button to scan a QR code',
            // Figma 598:6651 — 434×309 at (86, 75) on the 620×440 visual
            x: 86,
            y: 75,
            w: 434,
          },
          // the therapist code, as a sticker (Figma 598:6647)
          sticker: { text: 'FONO - 2486', x: 667, y: 83, r: -8 },
          tags: [
            { label: 'S', tone: 'c1', x: 60, y: 80, r: 6 },
            { label: 'Z', tone: 'c2', x: 470, y: 86, r: -5 },
            { label: 'LH', tone: 'c3', x: 70, y: 299, r: -4 },
            { label: 'Sapo', tone: 'c5', x: 470, y: 330, r: 4 },
          ],
        },
        {
          kind: 'image',
          tone: 'band-5',
          flip: true,
          title: ['Rewards and ', bold('rest'), ', built in.'],
          body: 'Kids earn a badge for each sound, “O emblema do S é seu!”, and can pause anytime.',
          image: {
            src: '/images/fonfon/feature-badges.webp',
            alt: 'Badge board on iPad: gold badges for D, K and S, grey ones still locked, “3 de 7”',
            // Figma 598:6663 — 494×387 at (9, 25) on the 600×440 visual
            x: 9,
            y: 25,
            w: 494,
            w0: 600,
          },
        },
        {
          kind: 'screens',
          tone: 'band-2',
          label: 'FEATURE 03',
          title: ['One ', bold('island'), ' for each sound.'],
          screens: [
            { src: '/images/fonfon/screen-island-s.webp', alt: 'Island S, with a sign for the /s/ sound' },
            {
              src: '/images/fonfon/screen-frog-thumb.webp',
              alt: 'Sound game: say “Sssss” so the frog catches the fly',
            },
            {
              src: '/images/fonfon/screen-syllable.webp',
              alt: 'Syllable game: match SA to the word with the same first syllable',
            },
            {
              src: '/images/fonfon/screen-lily.webp',
              alt: 'Word game: say “sapo” so the frog hops across the lily pads',
            },
          ],
        },
      ],
    },
    {
      type: 'identity',
      id: 'identity',
      nav: 'Identity',
      eyebrow: 'VISUAL IDENTITY',
      n: 8,
      title: [soft('Cream and aqua, '), softBold('rounded type')],
      font: {
        name: 'Fredoka',
        source: 'Google Fonts',
        family: "'Fredoka', sans-serif",
        weight: 600,
        sample: 'Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789',
        scale: [
          ['001', 'Title', '40 pt', 40],
          ['002', 'Subtitle', '32 pt', 30],
          ['003', 'Body', '24 pt', 22],
        ],
        note: 'Fredoka everywhere, in large sizes for small readers.',
        tag: 'SF Pro',
      },
      palette: [
        { name: 'Aqua 300', ramp: true, rampName: 'Aqua', hex: '7FDCEC', tone: 'c1' },
        { name: 'Sunny', hex: 'FFC400', tone: 'c2' },
        { name: 'Lime', hex: '8FD11A', tone: 'c3' },
        { name: 'Coral 300', hex: 'F9AA9F', tone: 'c4' },
        { name: 'Grape 300', hex: 'CDAEF2', tone: 'c5' },
        { name: 'Deep aqua', hex: '0C6B7F', tone: 'accent', onDark: true },
      ],
    },
    {
      type: 'thanks',
      id: 'thanks',
      eyebrow: 'THE END',
      title: ['Thanks for', 'reading.'],
      body: 'Ready for the next challenge?',
      weave: { base: 'c2', v: 'c3', h: 'c1' },
      polaroids: [
        {
          src: '/images/fonfon/screen-home.webp',
          alt: 'Fonfon home screen with the logo and the play button',
          caption: 'Descubra o mundo dos sons',
          rotate: 7,
        },
        {
          src: '/images/fonfon/screen-lily.webp',
          alt: 'Word game: the frog on a lily pad, “Fale sapo para ele andar!”',
          caption: 'Fale “sapo” para ele andar!',
          rotate: -8,
        },
      ],
      credits: [
        ['THIS PROJECT WAS MADE AS', 'A team project, 2026'],
        ['DESIGN & ILLUSTRATION', 'Giovana Hossein Rebello'],
        ['TEAM', 'Ana Poletto, Barbara Dapper, Sofia Leitão, Marcos Raach'],
        ['SPEECH THERAPIST', '@fono.giovannaambrosini • CRF\u2011a:\u00a07\u201111529'],
      ],
    },
  ],
}
