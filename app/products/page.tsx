'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { SiteHeader, SiteFooter } from '@/components/heritage-site'

export default function ProductsPage() {
  const products = [
    { 
      name: 'Fresh Vegetables', 
      description: 'Locally grown organic vegetables from our eco\u2011farm.',
      imgSrc: '/Fresh-Veggie-Prod.jpeg'
    },
    { 
      name: 'Seasonal Fruits', 
      description: 'Hand-picked fresh fruits right from our orchards.',
      imgSrc: '/Seasonal-Fruits-Prod.jpeg'
    },
    { 
      name: 'Spices', 
      description: 'Authentic Goan spices to bring flavor to your kitchen.',
      imgSrc: '/Spices-Prod.jpeg'
    },
    { 
      name: 'Dried Fish', 
      description: 'Traditional sun-dried fish, a Goan staple.',
      imgSrc: '/Dried-Fish-Prod.jpeg'
    },
    { 
      name: 'Goan Masala', 
      description: 'Homemade traditional spice blends for perfect curries.',
      imgSrc: '/Goan-Masala-Prod.jpeg'
    },
    { 
      name: 'Kokum', 
      description: 'Dried Kokum, a traditional Goan ingredient.',
      imgSrc: '/Kokum-Prod.jpeg'
    },
  ]

  return (
    <div className="heritage-site">
      <SiteHeader />
      
      <main className="relative min-h-screen pt-12 pb-24 px-10 md:px-20 flex flex-col items-center bg-[#f7eedb]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/eco-retreat.jpg" 
            alt="Aamchi Bhui Eco Farm"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-[#f7eedb]/70 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl w-full mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#a2391e] hover:opacity-80 transition-opacity mb-12">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-7xl font-serif text-[#2c493c] mb-4">Our Products</h1>
          
          <p className="text-lg text-[#605b50] mb-12 max-w-3xl font-serif italic">
            Take home locally grown produce and handmade products straight from our eco&#8209;farm.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <article key={product.name} className="bg-[#fff9eb]/95 backdrop-blur-sm border border-[#d9d0bc] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                <div className="relative h-56 w-full border-b border-[#d9d0bc]">
                  <Image 
                    src={product.imgSrc} 
                    alt={product.name} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-serif text-[#a2391e] mb-3">{product.name}</h2>
                  <p className="text-[#605b50] leading-relaxed">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { ArrowLeft } from 'lucide-react'
// import { SiteHeader, SiteFooter } from '@/components/heritage-site'

// export default function ProductsPage() {
//   const products = [
//     { name: 'Fresh Vegetables', description: 'Locally grown organic vegetables from our eco-farm.' },
//     { name: 'Seasonal Fruits', description: 'Hand-picked fresh fruits right from our orchards.' },
//     { name: 'Spices', description: 'Authentic Goan spices to bring flavor to your kitchen.' },
//     { name: 'Dried Fish', description: 'Traditional sun-dried fish, a Goan staple.' },
//     { name: 'Goan Masala', description: 'Homemade traditional spice blends for perfect curries.' },
//     { name: 'Kokum', description: 'Dried Kokum, a traditional Goan ingredient.' },
//   ]

//   return (
//     <div className="heritage-site">
//       <SiteHeader />
      
//       <main className="relative min-h-screen py-32 px-10 md:px-20 flex flex-col items-center bg-[#f7eedb]">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 z-0">
//           <Image 
//             src="/eco-retreat.jpg" 
//             alt="Aamchi Bhui Eco Farm"
//             fill
//             style={{ objectFit: 'cover' }}
//             className="opacity-25"
//             priority
//           />
//           <div className="absolute inset-0 bg-[#f7eedb]/70 backdrop-blur-[2px]" />
//         </div>
        
//         <div className="relative z-10 max-w-4xl w-full mx-auto">
//           <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#a2391e] hover:opacity-80 transition-opacity mb-12">
//             <ArrowLeft size={16} /> Back to Home
//           </Link>
          
//           <h1 className="text-5xl md:text-7xl font-serif text-[#2c493c] mb-4">Our Products</h1>
//           <p className="text-lg text-[#605b50] mb-12 max-w-2xl font-serif italic">
//             Take home locally grown produce and handmade products straight from our eco-farm.
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {products.map((product) => (
//               <article key={product.name} className="p-8 bg-[#fff9eb]/95 backdrop-blur-sm border border-[#d9d0bc] rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
//                 <h2 className="text-2xl font-serif text-[#a2391e] mb-3">{product.name}</h2>
//                 <p className="text-[#605b50] leading-relaxed">{product.description}</p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </main>

//       <SiteFooter />
//     </div>
//   )
// }



// import Link from 'next/link'
// import { ArrowLeft } from 'lucide-react'

// export default function ProductsPage() {
//   const products = [
//     { name: 'Fresh Vegetables', description: 'Locally grown organic vegetables from our eco-farm.' },
//     { name: 'Seasonal Fruits', description: 'Hand-picked fresh fruits right from our orchards.' },
//     { name: 'Spices', description: 'Authentic Goan spices to bring flavor to your kitchen.' },
//     { name: 'Dried Fish', description: 'Traditional sun-dried fish, a Goan staple.' },
//     { name: 'Goan Masala', description: 'Homemade traditional spice blends for perfect curries.' },
//   ]

//   return (
//     <main className="min-h-screen bg-[#f7eedb] text-[#171b16] p-10 md:p-20">
//       <div className="max-w-4xl mx-auto">
//         <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#a2391e] hover:opacity-80 transition-opacity mb-12">
//           <ArrowLeft size={16} /> Back to Home
//         </Link>
        
//         <h1 className="text-5xl md:text-7xl font-serif text-[#2c493c] mb-4">Our Products</h1>
//         <p className="text-lg text-[#605b50] mb-12 max-w-2xl">Take home locally grown produce and handmade products straight from our eco-farm.</p>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {products.map((product) => (
//             <article key={product.name} className="p-8 bg-[#fff9eb] border-2 border-[#d9d0bc] rounded-xl hover:-translate-y-1 transition-transform">
//               <h2 className="text-2xl font-serif text-[#a2391e] mb-3">{product.name}</h2>
//               <p className="text-[#605b50] leading-relaxed">{product.description}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }