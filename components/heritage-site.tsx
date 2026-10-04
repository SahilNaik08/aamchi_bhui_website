'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, MapPin, Menu, X } from 'lucide-react'

// const stories = [
//   {
//     title: 'The hands that shape the earth',
//     category: 'TRADITIONAL POTTERY',
//     description: 'Meet the village potters who turn local red clay into everyday treasures, one careful turn at a time.',
//     imagePosition: 'left top',
//     number: '01',
//   },
//   {
//     title: 'A harvest, shared by all',
//     category: 'CASHEW & COMMUNITY',
//     description: 'Follow the cashew from orchard to fire, and discover the rituals that bring neighbours together.',
//     imagePosition: 'right top',
//     number: '02',
//   },
//   {
//     title: 'Woven into every celebration',
//     category: 'KUNBI WEAVING',
//     description: 'The bold checks of the Kunbi saree carry a story of belonging, beauty and generations of women.',
//     imagePosition: 'left bottom',
//     number: '03',
//   },
// ]

const stories = [
  {
    title: 'Traditional Cooking Workshop',
    category: 'CULINARY',
    description: 'Learn to prepare authentic Goan dishes using locally sourced ingredients from our eco-farm.',
    imgSrc: '/Traditional-Food-Workshop.jpeg',
  },
  {
    title: 'Fishing Workshop',
    category: 'LOCAL LIFE',
    description: 'Take a short walk to the nearby river for a quiet afternoon of traditional fishing by the waterfront.',
    imgSrc: '/Fishing-Workshop.jpeg',
  },
  {
    title: 'Nature Trail',
    category: 'EXPLORE NATURE',
    description: 'Observe local birdlife, discover native plants, and learn about pollinators in our butterfly garden.',
    imgSrc: '/Nature-Trail-Workshop.jpeg',
  },
  {
    title: 'Pottery & Lantern Making',
    category: 'ARTISAN',
    description: 'Shape the red earth with a village potter and craft your own traditional clay diyas and lanterns.',
    imgSrc: '/Pottery-Lantern-Workshop.jpeg',
  },
]

// function BrandMark() {
//   return (
//     <Link className="brand" href="#home" aria-label="Aamchi Goa home">
//       <span className="brand-seal" aria-hidden="true"><span>✳</span></span>
//       <span className="brand-name">AAMCHI <b>GOA</b><small>ART • PEOPLE • PLACE</small></span>
//     </Link>
//   )
// }

function BrandMark() {
  return (
    <Link className="brand" href="#home" aria-label="Aamchi Bhui home">
      <Image 
        src="/New_logo-.png" 
        alt="Aamchi Bhui - A Goan Eco-Retreat" 
        width={800} 
        height={200} 
        style={{ height: '50px', width: 'auto', objectFit: 'contain' }}
        priority
      />
    </Link>
  )
}

// export function SiteHeader() {
//   const [menuOpen, setMenuOpen] = useState(false)
//   const links = [
//   ['Our Story', '/#story'],
//   ['Art & craft', '/#traditions'],
//   ['Our Products', '/products'],
// ]
//   return (
//     <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
//       <div className="nav-inner">
//         <BrandMark />
//         <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>
//         <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
//           {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
//           <Link className="nav-visit" href="#visit" onClick={() => setMenuOpen(false)}>Plan your visit <ArrowUpRight size={15} /></Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true)
    window.addEventListener('open-booking-modal', handleOpen)
    return () => window.removeEventListener('open-booking-modal', handleOpen)
  }, [])
  
  const links = [
    ['Our story', '/#story'],
    ['Art & craft', '/#traditions'],
    ['Our Products', '/products'],
    ['Brochure', '/Brochure.png'],
  ]
  
  return (
    <>
      <header className={`site-header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="nav-inner">
          <BrandMark />
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}
            {/* Changed from Link to a button that opens the modal */}
            <button className="nav-visit" onClick={() => { setMenuOpen(false); setIsModalOpen(true); }}>
              Plan your visit <ArrowUpRight size={15} />
            </button>
          </nav>
        </div>
      </header>

      {/* The Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171b16]/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}>
          <div className="bg-[#fff9eb] rounded-xl p-8 max-w-md w-full relative shadow-2xl border border-[#d9d0bc] animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-[#a5a894] hover:text-[#a2391e] transition-colors" 
              onClick={() => setIsModalOpen(false)}
              aria-label="Close form"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-3xl font-serif text-[#2c493c] mb-2">Plan Your Visit</h3>
            <p className="text-sm text-[#605b50] mb-6 font-serif italic">Tell us a bit about your trip, and we&apos;ll help you organize your stay at Aamchi Bhui.</p>
            
            {/* Form action uses mailto for easy backend-free submission */}
            <form className="flex flex-col gap-4" action="mailto:hello@aamchibhui.com?subject=New%20Booking%20Inquiry" method="POST" encType="text/plain">
  {/* Name */}
  <input type="text" name="Name" placeholder="Your Name" className="w-full p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
  
  {/* Contact & Residence Row */}
  <div className="flex gap-4">
    <input type="tel" name="Contact Number" placeholder="Contact Number" className="w-1/2 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
    <input type="text" name="Residence" placeholder="City of Residence" className="w-1/2 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
  </div>

  {/* Trip Details Row */}
  <div className="flex gap-4">
    <input type="text" name="Visit Date" placeholder="Visit Date" onFocus={(e) => (e.target.type = "date")} onBlur={(e) => (!e.target.value && (e.target.type = "text"))} className="w-1/3 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#605b50]" required />
    <input type="number" name="Days" placeholder="No. of Days" min="1" className="w-1/3 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
    <input type="number" name="Guests" placeholder="Guests" min="1" className="w-1/3 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
  </div>
  
  {/* Message */}
  <textarea name="Message" placeholder="Any special requests or questions?" rows={2} className="w-full p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16] resize-none"></textarea>
  
  {/* Submit & Disclaimer */}
  <div className="mt-2 text-center">
    <button type="submit" className="w-full bg-[#a2391e] text-[#fff9eb] py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity mb-3">
      Send Request
    </button>
    <p className="text-xs text-[#605b50] font-serif italic">Our team will contact you soon.</p>
  </div>
</form>
          </div>
        </div>
      )}
    </>
  )
}

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> A LIVING MUSEUM OF GOA</p>
        <h1 id="hero-title">Stories shaped<br />by <em>soil, sea</em><br />&amp; song.</h1>
        <p className="hero-intro">Step into the colours, craft and everyday magic of Goa — kept alive by the people who call it home.</p>
        <div className="hero-actions">
          <Link className="button button-dark" href="#traditions">Explore our heritage <ArrowRight size={16} /></Link>
          <Link className="text-link" href="#story">Get to know us <ArrowDown size={15} /></Link>
        </div>
        <div className="hero-footnote"><span className="footnote-rule" /> Rooted in Loutolim, Goa <span className="footnote-dot">✳</span> Open to all</div>
      </div>
      <div className="hero-visual">
        <div className="hero-photo-frame">
          <Image src="/aamchi-hero.png" alt="A traditional Goan home framed by a lush tropical garden" fill priority sizes="(max-width: 760px) 100vw, 53vw" className="hero-photo" />
          <div className="photo-caption"><span></span><span>THE GOA WE CALL HOME</span></div>
        </div>
        <div className="hero-stamp" aria-hidden="true"><span>GOA<br />GOA<br />GOA</span><b>✳</b></div>
        <span className="hero-side-note" aria-hidden="true">A PLACE TO REMEMBER</span>
      </div>
      <div className="hero-bottom-mark" aria-hidden="true"><span>✳</span> GOA IS A FEELING <span>✳</span></div>
    </section>
  )
}

function IntroSection() {
  return (
    <section className="intro-section" id="story">
      <div className="intro-index">01 <span>—</span> OUR STORY</div>
      <div className="intro-content">
        <p className="eyebrow eyebrow-light">MORE THAN A PLACE TO VISIT</p>
        <h2>Goa, told by the<br /><em>people who live it.</em></h2>
        <div className="intro-bottom">
          <p>Not behind glass. Not frozen in time. Here, Goan heritage is a living, breathing part of the day — in the food we share, the things we make, and the stories passed around the table.</p>
          <Link className="intro-link" href="#traditions">Come see for yourself <ArrowUpRight size={17} /></Link>
        </div>
      </div>
      <div className="intro-flower" aria-hidden="true">✳</div>
    </section>
  )
}

// function StoryCard({ story }: { story: (typeof stories)[number] }) {
//   return (
//     <article className="story-card">
//       <div className="story-photo" role="img" aria-label={`${story.category.toLowerCase()} in Goa`} style={{ backgroundPosition: story.imagePosition }}>
//         <span className="story-number">{story.number}</span>
//         <span className="story-open" aria-hidden="true"><ArrowUpRight size={19} /></span>
//       </div>
//       <div className="story-copy">
//         <p className="story-category">{story.category}</p>
//         <h3>{story.title}</h3>
//         <p className="story-description">{story.description}</p>
//         <Link href="#visit" className="story-link">Discover the story <ArrowRight size={15} /></Link>
//       </div>
//     </article>
//   )
// }

// function TraditionsSection() {
//   const [activeStory, setActiveStory] = useState(0)
//   const goTo = (direction: number) => setActiveStory((activeStory + direction + stories.length) % stories.length)
//   return (
//     <section className="traditions-section" id="traditions">
//       <div className="traditions-top">
//         <div>
//           <p className="eyebrow"><span className="eyebrow-dot" /> MADE HERE, SHARED WITH YOU</p>
//           <h2>Traditions with<br /><em>mud on their feet.</em></h2>
//         </div>
//         <p className="traditions-aside">A few of the crafts, customs and quiet wonders that make this corner of Goa its own.</p>
//       </div>
//       <div className="story-grid" aria-live="polite">
//         {stories.map((story, index) => <div key={story.number} className={`story-slot ${index === activeStory ? 'story-active' : ''}`}><StoryCard story={story} /></div>)}
//       </div>
//       <div className="story-controls">
//         <div className="story-pagination" aria-label={`Story ${activeStory + 1} of ${stories.length}`}>
//           {stories.map((story, index) => <button key={story.number} type="button" aria-label={`Show story ${index + 1}: ${story.category}`} aria-current={index === activeStory ? 'true' : undefined} onClick={() => setActiveStory(index)} className={index === activeStory ? 'page-dot active' : 'page-dot'} />)}
//         </div>
//         <div className="story-arrows">
//           <button type="button" aria-label="Previous story" onClick={() => goTo(-1)}><ArrowLeft size={18} /></button>
//           <button type="button" aria-label="Next story" onClick={() => goTo(1)}><ArrowRight size={18} /></button>
//         </div>
//         <span className="story-count">0{activeStory + 1} <i>/</i> 0{stories.length}</span>
//       </div>
//     </section>
//   )
// }

function TraditionsSection() {
  return (
    <section className="traditions-section" id="traditions">
      <div className="traditions-top">
        <div>
          <p className="eyebrow"><span className="eyebrow-dot" /> MADE HERE, SHARED WITH YOU</p>
          <h2>Traditions with<br /><em>mud on their feet.</em></h2>
        </div>
        <p className="traditions-aside">A few of the crafts, customs and quiet wonders that make this corner of Goa its own.</p>
      </div>
      
      {/* Updated to a 2x2 or 4-column grid depending on screen size */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {stories.map((story) => (
          <article key={story.title} className="bg-[#fff9eb] border border-[#d9d0bc] rounded-xl overflow-hidden hover:-translate-y-1 transition-transform shadow-sm">
            <div className="relative h-48 w-full">
              <Image src={story.imgSrc} alt={story.title} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
            </div>
            <div className="p-6">
              <p className="text-[10px] font-bold tracking-widest text-[#a2391e] mb-2 uppercase">{story.category}</p>
              <h3 className="font-serif text-xl text-[#171b16] mb-3 leading-tight">{story.title}</h3>
              <p className="text-sm text-[#605b50] leading-relaxed mb-4">{story.description}</p>
              <Link href="/#visit" className="inline-flex items-center gap-2 text-xs font-bold border-t border-[#d9d0bc] pt-4 w-full text-[#171b16] hover:text-[#a2391e] transition-colors">
  Book Workshop <ArrowRight size={14} />
</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function VisitSection() {
  return (
    <section className="visit-section" id="visit">
      <div className="visit-image">
        <Image src="/aamchi-hero.png" alt="The garden entrance to a welcoming Goan heritage home" fill sizes="(max-width: 760px) 100vw, 50vw" className="visit-photo" />
        <span className="visit-image-label">A LITTLE PLACE WITH A LOT OF HEART</span>
      </div>
      <div className="visit-copy">
        <p className="eyebrow eyebrow-light"><MapPin size={13} /> Rooted in Olaulim, Bardez, Goa</p>
        <h2>Come as a<br /><em>guest. Leave<br />as a friend.</em></h2>
        <p className="visit-description">Wander the village, meet its makers, and make room for a slower kind of afternoon. We&apos;ll put the kettle on.</p>
        <button className="button button-cream bg-[#a2391e] text-[#fff9eb] hover:opacity-90 border-none" onClick={() => window.dispatchEvent(new Event('open-booking-modal'))}>
  Plan a visit <ArrowUpRight size={16} />
</button>
        <div className="visit-details" id="visit-details"><span>OPEN DAILY</span><span>10:00 AM — 6:00 PM</span><span>Olaulim, Bardez, Goa 403523</span></div>
      </div>
      <div className="visit-sun" aria-hidden="true">✳</div>
    </section>
  )
}

// function DirectionsSection() {
//   return (
//     <section className="bg-[#f7eedb] py-24 px-8 md:px-[8%] border-t border-[#d9d0bc]" id="directions">
//       <div className="max-w-[1000px] mx-auto">
//         <h2 className="text-4xl md:text-5xl font-serif text-[#2c493c] text-center mb-16">How to Get Here</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0">
          
//           {/* Left Column: Details & Map */}
//           <div className="flex flex-col gap-10 md:border-r border-[#d9d0bc] md:pr-16 text-center md:text-right">
//             <div>
//               <h3 className="font-serif text-xl text-[#2c493c] mb-4">Physical Address</h3>
//               <p className="text-[#605b50] text-sm leading-relaxed font-serif italic">
//                 Aamchi Bhui Eco-Retreat<br />
//                 Olaulim, Bardez<br />
//                 Goa 403523<br />
//                 India
//               </p>
//             </div>
            
//             <div>
//               <h3 className="font-serif text-xl text-[#2c493c] mb-4">GPS Coordinates</h3>
//               <p className="text-[#605b50] text-sm leading-relaxed font-serif italic">
//                 15°35&apos;30.6&quot;N 73°51&apos;49.1&quot;E<br />
//                 <span className="text-[11px] not-italic tracking-wider uppercase mt-1 block">Approximate Center</span>
//               </p>
//             </div>

//             <div className="flex flex-col items-center md:items-end mt-4">
//               <h3 className="font-serif text-xl text-[#2c493c] mb-4">Where to Park</h3>
//               <p className="text-[#605b50] text-sm leading-relaxed mb-6 font-serif italic">
//                 Complimentary parking is available<br />just inside the main estate gates.
//               </p>
//               {/* Map Image matching the reference screenshot */}
//               <div className="relative w-[280px] h-[180px] rounded-lg overflow-hidden border-2 border-[#d9d0bc] shadow-sm hover:shadow-md transition-shadow">
//                  <Image 
//                    src="/map_aamchi-bhui.jpeg" 
//                    alt="Route map from Panaji to Olaulim" 
//                    fill 
//                    style={{ objectFit: 'cover', objectPosition: 'center' }} 
//                  />
//               </div>
//             </div>
//           </div>

//           {/* Right Column: Step-by-Step Directions */}
//           <div className="flex flex-col gap-8 md:pl-16">
//             <h3 className="font-serif text-2xl text-[#2c493c] mb-2 border-b border-[#d9d0bc] pb-4">Directions</h3>
            
//             <div>
//               <h4 className="font-bold text-[#171b16] mb-2 font-serif text-lg">By Air</h4>
//               <p className="text-[#605b50] text-sm leading-relaxed">
//                 Fly into Manohar International Airport (Mopa) or Dabolim Airport. Pre-paid airport taxis are available at both terminals for a direct route to Olaulim.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold text-[#171b16] mb-2 font-serif text-lg">By Train</h4>
//               <p className="text-[#605b50] text-sm leading-relaxed">
//                 The closest major railway station is Thivim (approx. 25 minutes away). Karmali station is also a convenient option depending on your inbound route.
//               </p>
//             </div>

//             <div>
//               <h4 className="font-bold text-[#171b16] mb-2 font-serif text-lg">By Car (From Panaji)</h4>
//               <p className="text-[#605b50] text-sm leading-relaxed">
//                 Follow NH66 northwards across the Mandovi River towards Porvorim. Take a right turn towards Salvador do Mundo, and follow Route 12 along the backwaters directly into Olaulim. Please follow the wooden signs to the estate entrance.
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

function DirectionsSection() {
  return (
    <section className="bg-[#f7eedb] py-24 px-8 md:px-[8%] border-t border-[#d9d0bc]" id="directions">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Big Map */}
          <div className="relative w-full h-[400px] lg:h-[750px] rounded-2xl overflow-hidden border-2 border-[#d9d0bc] shadow-[8px_8px_0px_rgba(83,92,64,0.1)]">
             <Image 
               src="/map_aamchi-bhui.jpeg" 
               alt="Route map from Panaji to Olaulim" 
               fill 
               style={{ objectFit: 'cover', objectPosition: 'center' }} 
               sizes="(max-width: 1024px) 100vw, 50vw"
             />
          </div>

          {/* Right Column: All Content */}
          <div className="flex flex-col py-4">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c493c] mb-12">How to Get Here</h2>
            
            {/* Address & GPS Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 pb-10 border-b border-[#d9d0bc]">
              <div>
                <h3 className="font-serif text-xl text-[#2c493c] mb-4">Physical Address</h3>
                <p className="text-[#605b50] text-sm leading-relaxed font-serif italic">
                  Aamchi Bhui Eco-Retreat<br />
                  Olaulim, Bardez<br />
                  Goa 403523<br />
                  India
                </p>
              </div>
              
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-serif text-xl text-[#2c493c] mb-2">GPS Coordinates</h3>
                  <p className="text-[#605b50] text-sm leading-relaxed font-serif italic">
                    15°35&apos;30.6&quot;N 73°51&apos;49.1&quot;E<br />
                    <span className="text-[11px] not-italic tracking-wider uppercase mt-1 block">Approximate Center</span>
                  </p>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#2c493c] mb-2">Where to Park</h3>
                  <p className="text-[#605b50] text-sm leading-relaxed font-serif italic">
                    Complimentary parking is available<br />just inside the main estate gates.
                  </p>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="flex flex-col gap-8">
              <h3 className="font-serif text-2xl text-[#2c493c] mb-2">Directions</h3>
              
              <div>
                <h4 className="font-bold text-[#171b16] mb-2 font-serif text-lg">By Air</h4>
                <p className="text-[#605b50] text-sm leading-relaxed">
                  Fly into Manohar International Airport (Mopa) or Dabolim Airport. Pre-paid airport taxis are available at both terminals for a direct route to Olaulim.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#171b16] mb-2 font-serif text-lg">By Train</h4>
                <p className="text-[#605b50] text-sm leading-relaxed">
                  The closest major railway station is Thivim (approx. 25 minutes away). Karmali station is also a convenient option depending on your inbound route.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#171b16] mb-2 font-serif text-lg">By Car (From Panaji)</h4>
                <p className="text-[#605b50] text-sm leading-relaxed">
                  Follow NH66 northwards across the Mandovi River towards Porvorim. Take a right turn towards Salvador do Mundo, and follow Route 12 along the backwaters directly into Olaulim. Please follow the wooden signs to the estate entrance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

// function ReviewsSection() {
//   const reviews = [
//     {
//       name: "Priya & Rohan",
//       location: "Mumbai",
//       text: "Aamchi Bhui is a slice of paradise. The mud cottages are beautifully crafted, and waking up to the sound of the backwaters was exactly the reset we needed. The traditional Goan thali was unforgettable.",
//       rating: 5
//     },
//     {
//       name: "Sarah Jenkins",
//       location: "London",
//       text: "An incredibly authentic experience. We loved the pottery workshop and the guided nature trails. It's rare to find a place that balances sustainability with such warm, effortless hospitality.",
//       rating: 5
//     },
//     {
//       name: "The Sharma Family",
//       location: "Delhi",
//       text: "The perfect escape from the city. Our kids loved exploring the organic farm and the butterfly garden. Amisha and the team went above and beyond to make us feel like old friends.",
//       rating: 5
//     }
//   ]

//   return (
//     <section className="bg-[#fff9eb] py-24 px-8 md:px-[8%] border-t border-[#d9d0bc]" id="reviews">
//       <div className="max-w-[1200px] mx-auto">
        
//         <div className="text-center mb-16">
//           <p className="eyebrow flex items-center justify-center gap-2 mb-4 text-[#6b6556] text-[10px] font-bold tracking-[.17em]">
//             <span className="w-2 h-2 bg-[#a2391e] rounded-full" /> GUEST STORIES
//           </p>
//           <h2 className="text-4xl md:text-5xl font-serif text-[#2c493c]">Kind Words</h2>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {reviews.map((review, i) => (
//             <div key={i} className="bg-white p-8 rounded-2xl border border-[#d9d0bc] shadow-[4px_4px_0px_rgba(83,92,64,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
//               <div>
//                 <div className="text-[#a2391e] mb-6 text-sm tracking-widest" aria-label={`${review.rating} out of 5 stars`}>
//                   {'★'.repeat(review.rating)}
//                 </div>
//                 <p className="font-serif italic text-[#605b50] leading-relaxed mb-8 text-lg">
//                   &quot;{review.text}&quot;
//                 </p>
//               </div>
//               <div className="border-t border-[#d9d0bc] pt-5">
//                 <p className="font-bold text-[#171b16] text-sm uppercase tracking-wide">{review.name}</p>
//                 <p className="text-xs text-[#a5a894] mt-1 uppercase tracking-wider">{review.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   )
// }

export function ReviewsSection() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false)

  const reviews = [
    {
      name: "Priya & Rohan",
      location: "Mumbai",
      text: "Aamchi Bhui is a slice of paradise. The mud cottages are beautifully crafted, and waking up to the sound of the backwaters was exactly the reset we needed. The traditional Goan thali was unforgettable.",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      location: "London",
      text: "An incredibly authentic experience. We loved the pottery workshop and the guided nature trails. It's rare to find a place that balances sustainability with such warm, effortless hospitality.",
      rating: 5
    },
    {
      name: "The Sharma Family",
      location: "Delhi",
      text: "The perfect escape from the city. Our kids loved exploring the organic farm and the butterfly garden. Amisha and the team went above and beyond to make us feel like old friends.",
      rating: 5
    }
  ]

  return (
    <>
      <section className="bg-[#fff9eb] py-24 px-8 md:px-[8%] border-t border-[#d9d0bc]" id="reviews">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center mb-16">
            <p className="eyebrow flex items-center justify-center gap-2 mb-4 text-[#6b6556] text-[10px] font-bold tracking-[.17em]">
              <span className="w-2 h-2 bg-[#a2391e] rounded-full" /> GUEST STORIES
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c493c]">Kind Words</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-[#d9d0bc] shadow-[4px_4px_0px_rgba(83,92,64,0.05)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="text-[#a2391e] mb-6 text-sm tracking-widest" aria-label={`${review.rating} out of 5 stars`}>
                    {'★'.repeat(review.rating)}
                  </div>
                  <p className="font-serif italic text-[#605b50] leading-relaxed mb-8 text-lg">
                    &quot;{review.text}&quot;
                  </p>
                </div>
                <div className="border-t border-[#d9d0bc] pt-5">
                  <p className="font-bold text-[#171b16] text-sm uppercase tracking-wide">{review.name}</p>
                  <p className="text-xs text-[#a5a894] mt-1 uppercase tracking-wider">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button 
              className="bg-[#a2391e] text-[#fff9eb] py-3 px-8 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
              onClick={() => setIsReviewModalOpen(true)}
            >
              Leave a Review
            </button>
          </div>

        </div>
      </section>

      {/* Review Modal Overlay */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171b16]/40 backdrop-blur-sm" onClick={() => setIsReviewModalOpen(false)}>
          <div className="bg-[#fff9eb] rounded-xl p-8 max-w-md w-full relative shadow-2xl border border-[#d9d0bc] animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-[#a5a894] hover:text-[#a2391e] transition-colors" 
              onClick={() => setIsReviewModalOpen(false)}
              aria-label="Close form"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-3xl font-serif text-[#2c493c] mb-2">Leave a Review</h3>
            <p className="text-sm text-[#605b50] mb-6 font-serif italic">Share your experience at Aamchi Bhui.</p>
            
            <form className="flex flex-col gap-4" action="mailto:hello@aamchibhui.com?subject=New%20Guest%20Review" method="POST" encType="text/plain">
              <input type="text" name="Name" placeholder="Your Name" className="w-full p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
              
              <div className="flex gap-4">
                <input type="text" name="Location" placeholder="City / Location" className="w-1/2 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
                <input type="number" name="Rating" placeholder="Rating (1-5)" min="1" max="5" className="w-1/2 p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16]" required />
              </div>
              
              <textarea name="Review" placeholder="Tell us about your stay..." rows={4} className="w-full p-3 bg-white border border-[#d9d0bc] rounded-md focus:outline-none focus:border-[#a2391e] focus:ring-1 focus:ring-[#a2391e] text-sm text-[#171b16] resize-none" required></textarea>
              
              <div className="mt-2 text-center">
                <button type="submit" className="w-full bg-[#a2391e] text-[#fff9eb] py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity mb-3">
                  Submit Review
                </button>
                <p className="text-xs text-[#605b50] font-serif italic">Thank you for sharing your story.</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <BrandMark />
      <p>Keeping Goan stories close, and doors open.</p>
      <Link href="#home" className="footer-top">Back to top ↑</Link>
      <span className="footer-copy">© 2026 AAMCHI BHUI ECO-RETREAT</span>
    </footer>
  )
}

export default function HeritageSite() {
  return (
    <main className="heritage-site">
      <SiteHeader />
      <Hero />
      <IntroSection />
      <TraditionsSection />
      <VisitSection />
      <DirectionsSection />
      <ReviewsSection />
      <SiteFooter />
    </main>
  )
}
