import Image from 'next/image'
import { ArrowDown, ArrowRight, ArrowUpRight, Leaf, Menu, MoveRight, Sun } from 'lucide-react'

const experiences = [
  {
    title: 'Traditional Pottery',
    detail: 'Shape the red earth with a village potter, and take home a little piece of the land.',
    className: 'culture-pottery',
    number: '01',
  },
  {
    title: 'Cashew Nut Roasting',
    detail: 'Gather around the fire for the smoky, hands-on ritual of roasting local cashews.',
    className: 'culture-cashew',
    number: '02',
  },
  {
    title: 'Kunbi Kapod Dressing',
    detail: 'Discover the stories woven into Goa\'s traditional red-and-green Kunbi saree.',
    className: 'culture-kunbi',
    number: '03',
  },
  {
    title: 'Living with the Land',
    detail: 'See how gobar gas and rainwater harvesting make everyday life more thoughtful.',
    className: 'culture-garden',
    number: '04',
  },
]

const rooms = [
  {
    title: 'The Courtyard Suite',
    copy: 'A quiet hideaway opening onto the tulsi courtyard, with a lovingly restored teak bed and cool laterite walls.',
    className: 'room-courtyard',
    number: '01',
  },
  {
    title: 'The Balcão Room',
    copy: 'Wake to birdsong and garden light in a room of old wood, handwoven details and the easy rhythm of village life.',
    className: 'room-balco',
    number: '02',
  },
  {
    title: 'The Garden Room',
    copy: 'A simple, airy room made with natural materials, reclaimed furniture and a little green view of its own.',
    className: 'room-garden',
    number: '03',
  },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Aamchi Bhui home">
        <span className="brand-mark" aria-hidden="true">A</span>
        <span className="brand-name">Aamchi Bhui<small>our land · our home</small></span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#our-home">Our home</a>
        <a href="#village">Village life</a>
        <a href="#stay">Stay with us</a>
        <a href="#journeys">Excursions</a>
      </nav>
      <a className="header-cta" href="mailto:hello@aamchibhui.com?subject=An%20inquiry%20about%20staying">
        Inquire <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
      </a>
      <a className="mobile-inquire" href="mailto:hello@aamchibhui.com?subject=An%20inquiry%20about%20staying" aria-label="Inquire about your stay">
        <ArrowUpRight size={19} aria-hidden="true" />
      </a>
    </header>
  )
}

function SectionHeading({ eyebrow, title, description, light = false }: { eyebrow: string; title: string; description?: string; light?: boolean }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <span className="eyebrow"><span aria-hidden="true">✳</span> {eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <Image className="hero-image" src="/aamchi-hero.png" alt="A welcoming laterite Goan home framed by a tropical garden" fill priority sizes="100vw" />
      <div className="hero-shade" />
      <div className="hero-content">
        <span className="hero-kicker"><span className="kicker-line" /> A family home in the heart of Goa</span>
        <h1 id="hero-title">Welcome to<br />our land.<br /><em>Welcome to our home.</em></h1>
        <p>Slow down, stay a while, and discover Goa as we know it — through our people, our food and the stories that make this place home.</p>
        <a className="button button-sun" href="mailto:hello@aamchibhui.com?subject=An%20inquiry%20about%20staying">
          Inquire about your stay <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="hero-note"><span>15°29' N · 73°56' E</span><span>Saligao, Goa</span></div>
      <a className="hero-scroll" href="#our-home"><span>Come on in</span><ArrowDown size={15} aria-hidden="true" /></a>
      <div className="hero-stamp" aria-hidden="true"><span>Stay close<br />to the earth</span><Leaf size={23} strokeWidth={1.5} /></div>
    </section>
  )
}

function WelcomeSection() {
  return (
    <section className="welcome section-wrap" id="our-home">
      <div className="welcome-copy">
        <span className="eyebrow"><span aria-hidden="true">✳</span> The Aamchi Bhui way</span>
        <h2>Here, you arrive<br />as a guest and leave<br /><em>as family.</em></h2>
        <p className="welcome-lede">Aamchi Bhui means "our land". This is the Goa we grew up with: generous, green, full of stories and best shared around a table.</p>
        <p>We're a family-run homestay rooted in the everyday life of our village. There's no itinerary to keep up with — just time to meet the people, learn the old ways and feel at home in a place that's not quite your own.</p>
        <a className="text-link" href="#village">Find your place here <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="welcome-photo-wrap">
        <div className="welcome-photo-frame">
          <Image src="/aamchi-hero.png" alt="The old Goan family home and leafy courtyard" fill sizes="(max-width: 760px) 90vw, 46vw" />
        </div>
        <div className="photo-caption"><span>01 / 06</span><span>Our home, Saligao</span></div>
        <div className="welcome-note"><span>Rooted in Goa</span><strong>Since generations</strong></div>
      </div>
    </section>
  )
}

function VillageSection() {
  return (
    <section className="village-section" id="village">
      <div className="village-topline"><span>Life, at its own pace</span><span>Scroll to wander <MoveRight size={15} aria-hidden="true" /></span></div>
      <SectionHeading eyebrow="A day in the village" title="Learn by being here." description="A few small, beautiful ways to get to know our corner of Goa." light />
      <div className="experience-scroller" aria-label="Village experiences">
        {experiences.map((experience) => (
          <article className="experience-card" key={experience.title}>
            <div className={`experience-photo ${experience.className}`} role="img" aria-label={experience.title} />
            <div className="experience-copy">
              <div className="card-number">{experience.number} <span>✳</span></div>
              <h3>{experience.title}</h3>
              <p>{experience.detail}</p>
              <a href="#journeys" aria-label={`Discover ${experience.title}`}>Discover <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
      <div className="village-footnote"><span>Handmade, remembered, shared.</span><span className="sun-dots" aria-hidden="true">● ● ● ● ●</span></div>
    </section>
  )
}

function TableSection() {
  return (
    <section className="table-section">
      <div className="table-ornament" aria-hidden="true">✳</div>
      <div className="table-copy">
        <span className="eyebrow"><span aria-hidden="true">✳</span> Gather around</span>
        <h2>Our family table<br />is always <em>long enough.</em></h2>
        <p>Some of our best stories begin when everyone takes a seat. We cook what's in season, set out fresh banana leaves and make room for one more.</p>
        <div className="dish-list">
          <span>Uman fish curry</span><i aria-hidden="true">·</i><span>Khatkatem</span><i aria-hidden="true">·</i><span>Biyaam Tondak</span><i aria-hidden="true">·</i><span>Soft, warm sannas</span>
        </div>
        <a className="text-link" href="mailto:hello@aamchibhui.com?subject=Tell%20me%20about%20the%20family%20table">Come hungry <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="table-photo" role="img" aria-label="A traditional Goan family meal served on a banana leaf">
        <div className="table-photo-label"><Sun size={15} aria-hidden="true" /> From our kitchen, with love</div>
      </div>
    </section>
  )
}

function RoomsSection() {
  return (
    <section className="rooms-section" id="stay">
      <SectionHeading eyebrow="Stay a little longer" title="A room in our home." description="Rest easy in rooms shaped by the things we value: simplicity, old stories and a lighter touch on the land." />
      <div className="rooms-grid">
        {rooms.map((room) => (
          <article className="room-card" key={room.title}>
            <div className={`room-photo ${room.className}`} role="img" aria-label={`${room.title}, a heritage homestay room`}>
              <span className="room-photo-number">Room {room.number}</span>
            </div>
            <div className="room-info">
              <h3>{room.title}</h3>
              <p>{room.copy}</p>
              <a href={`mailto:hello@aamchibhui.com?subject=${encodeURIComponent(`Ask about ${room.title}`)}`}>View room <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function JourneysSection() {
  const journeys = [
    ['01', 'Rubber & spice plantations', 'Walk the red earth and learn what grows around us.'],
    ['02', 'Ancestral Goa Museum', 'A lively glimpse into the art, craft and memory of Goan life.'],
    ['03', 'An evening of Tiatr', 'Join us for an open-air amphitheatre show under the stars.'],
  ]
  return (
    <section className="journeys-section" id="journeys">
      <div className="journeys-intro">
        <span className="eyebrow"><span aria-hidden="true">✳</span> A little further afield</span>
        <h2>Go where the<br /><em>stories lead.</em></h2>
        <p>There's a whole village, and a whole Goa, just beyond our gate. We'll help you find the way.</p>
        <a className="button button-outline" href="mailto:hello@aamchibhui.com?subject=Tell%20me%20about%20Goan%20excursions">Let's plan a day <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
      <div className="journey-list">
        {journeys.map(([number, title, description]) => (
          <a className="journey-row" href={`mailto:hello@aamchibhui.com?subject=${encodeURIComponent(`Ask about ${title}`)}`} key={title}>
            <span className="journey-number">{number}</span>
            <span className="journey-text"><strong>{title}</strong><small>{description}</small></span>
            <ArrowUpRight size={19} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">A</span><span>Aamchi Bhui</span></a>
      <p>Our land. Our home. Your place at the table.</p>
      <a href="mailto:hello@aamchibhui.com">Say hello <ArrowUpRight size={14} aria-hidden="true" /></a>
      <span className="footer-place">Saligao, Goa · India</span>
    </footer>
  )
}

export function AamchiHomepage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <WelcomeSection />
        <VillageSection />
        <TableSection />
        <RoomsSection />
        <JourneysSection />
      </main>
      <SiteFooter />
    </>
  )
}

export { Menu }

export default function ExperienceImageProbe() {
  return null
}

export function UnusedName() {
  return null
}

export function DecorativeDivider() {
  return <div className="decorative-divider" aria-hidden="true" />
}

export function HomeLayout() {
  return <AamchiHomepage />
}

export function ArchedImage({ src, alt }: { src: string; alt: string }) {
  return <div className="arched-image"><Image src={src} alt={alt} fill sizes="100vw" /></div>
}

export function HostPhoto() {
  return <div className="host-photo-placeholder" role="img" aria-label="Host family in their traditional tulsi courtyard garden" />
}

export function SunMark() {
  return <span className="sun-mark" aria-hidden="true">✳</span>
}

export function HeritageIcon() {
  return <Leaf size={18} strokeWidth={1.5} aria-hidden="true" />
}

export function MenuIcon() {
  return <Menu size={20} aria-hidden="true" />
}

export function ArrowIcon() {
  return <ArrowUpRight size={15} aria-hidden="true" />
}

export function ScrollCue() {
  return <ArrowDown size={15} aria-hidden="true" />
}

export function SectionArrow() {
  return <MoveRight size={15} aria-hidden="true" />
}

export function SunIcon() {
  return <Sun size={15} aria-hidden="true" />
}

export function LinkArrow() {
  return <ArrowRight size={16} aria-hidden="true" />
}

export function GoanDetails() {
  return <span className="goan-details" aria-hidden="true">✳</span>
}

export function ImageFrame() {
  return <div className="image-frame" aria-hidden="true" />
}

export function CultureCard({ title, imageClass }: { title: string; imageClass: string }) {
  return <article className="culture-card"><div className={`experience-photo ${imageClass}`} role="img" aria-label={title} /><h3>{title}</h3></article>
}

export function StayCard({ title, imageClass }: { title: string; imageClass: string }) {
  return <article className="stay-card"><div className={`room-photo ${imageClass}`} role="img" aria-label={title} /><h3>{title}</h3></article>
}

export function InquireLink() {
  return <a className="text-link" href="mailto:hello@aamchibhui.com">Inquire about your stay <ArrowRight size={16} aria-hidden="true" /></a>
}

export function MobileNavMenu() {
  return <nav className="mobile-nav" aria-label="Mobile navigation"><a href="#home">Home</a><a href="#our-home">Our home</a><a href="#village">Village life</a><a href="#stay">Stay with us</a><a href="#journeys">Excursions</a></nav>
}

export function StayNote() {
  return <span className="stay-note">Small moments, lasting memories.</span>
}
