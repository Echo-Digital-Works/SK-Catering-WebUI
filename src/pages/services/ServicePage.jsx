// // import React, { useRef } from 'react';
// // import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
// // import { Link } from 'react-router-dom';

// // // --- SERVICE DATA ---
// // const services = [
// //    {
// //   id: "01",
// //   title: "Royal Weddings",
// //   description: "We give good food for big weddings. We cook tasty dishes for all wedding functions.",
// //   image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
// //   iconImage: "assets/icons/weddinicon.png"
// // },

// // {
// //   id: "02",
// //   title: "Big Office Parties",
// //   description: "We serve food for office meetings and company parties with clean and proper service.",
// //   image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
// //   iconImage: "assets/icons/office.png"
// // },

// // {
// //   id: "03",
// //   title: "Baby shower",
// //   description: "Baby Shower is a small celebration to wish a mother and her baby good health and happiness.",
// //   image: "https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg",
// //   iconImage: "assets/icons/baby.png"
// // },

// // {
// //   id: "04",
// //   title: "Birthday Parties",
// //   description: "We give food for small home parties like birthday and anniversary.",
// //   image: "https://cdn.cdnparenting.com/articles/2018/06/243588019-H-768x525.jpg",
// //   iconImage: "assets/icons/birthday.png"
// // },

// // {
// //   id: "05",
// //   title: "Family & Small Functions",
// //   description: "We provide tasty and traditional food for family functions like pooja, anniversaries, and small gatherings.",
// //   image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
// //   iconImage: "assets/icons/family.png"
// // },


// // // ----- NEW MODULES (VERY SIMPLE WORDS) -----

// // {
// //   id: "06",
// //   title: "Engagement",
// //   description: "We give simple and tasty food for engagement function.",
// //   image: "https://wallpapers.com/images/hd/traditional-beautiful-engagement-couple-ring-7o6kh4dv11dsf0dp.jpg",
// //   iconImage: "assets/icons/engagement.png"
// // },

// // {
// //   id: "07",
// //   title: "Mehandhi / Sangeet / Haldi",
// //   description: "We serve snacks, sweets, and special food for these functions.",
// //   image: "https://i.pinimg.com/originals/59/ac/df/59acdf095cf95f73a00706feef5ad110.jpg",
// //   iconImage: "assets/icons/mehandhi.png"
// // },

// // {
// //   id: "08",
// //   title: "Religious Ceremonies",
// //   description: "We cook clean and pure traditional food for temple and puja events.",
// //   image: "https://as1.ftcdn.net/v2/jpg/09/18/56/92/1000_F_918569254_c6HPa4lse9ggSM2wwjgoZfM00bdR2obq.jpg",
// //   iconImage: "assets/icons/relegious.png"
// // },

// // {
// //   id: "09",
// //   title: "Alumni Meet / Retirement Party",
// //   description: "We provide good food for old students meet and retirement parties.",
// //   image: "https://news.temple.edu/sites/news/files/shutterstock_531382432-scaled_0.jpg",
// //   iconImage: "assets/icons/alumini.png"
// // },

// // {
// //   id: "10",
// //   title: "House Warming",
// //   description: "We serve fresh and traditional food for new house opening.",
// //   image: "https://blog.photoadking.com/wp-content/uploads/2022/12/housewarming-invitation-wording.jpg",
// //   iconImage: "assets/icons/house.png"
// // }
// // ];

// // // --- 3D TILT & SPOTLIGHT CARD COMPONENT ---
// // const SpotlightCard = ({ service, index }) => {
// //   const ref = useRef(null);

// //   // Mouse Position Logic
// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);

// //   // Smooth Rotation Logic (Spring Physics)
// //   const xSpring = useSpring(x, { stiffness: 150, damping: 15 });
// //   const ySpring = useSpring(y, { stiffness: 150, damping: 15 });

// //   const rotateX = useTransform(ySpring, [-0.5, 0.5], ["15deg", "-15deg"]);
// //   const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

// //   const handleMouseMove = (e) => {
// //     if (!ref.current) return;
// //     const rect = ref.current.getBoundingClientRect();

// //     const width = rect.width;
// //     const height = rect.height;

// //     const mouseX = e.clientX - rect.left;
// //     const mouseY = e.clientY - rect.top;

// //     // Calculate rotation values (-0.5 to 0.5)
// //     const xPct = mouseX / width - 0.5;
// //     const yPct = mouseY / height - 0.5;

// //     x.set(xPct);
// //     y.set(yPct);
// //   };

// //   const handleMouseLeave = () => {
// //     x.set(0);
// //     y.set(0);
// //   };

// //   return (
// //     <motion.div
// //       ref={ref}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       initial={{ opacity: 0, scale: 0.9 }}
// //       whileInView={{ opacity: 1, scale: 1 }}
// //       viewport={{ once: true, margin: "-50px" }}
// //       transition={{ duration: 0.5, delay: index * 0.05 }}
// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformStyle: "preserve-3d",
// //       }}
// //       className="relative h-[420px] w-full rounded-2xl bg-zinc-900 group"
// //     >
// //       <Link to={`/services/${service.id}`} className="block h-full w-full relative z-10">
        
// //         {/* INNER CONTENT CONTAINER */}
// //         <div 
// //           className="absolute inset-[1px] rounded-2xl bg-[#0f0f0f] overflow-hidden flex flex-col justify-end p-6 border border-white/5"
// //           style={{ transform: "translateZ(20px)" }} // Parallax separation
// //         >
          
// //           {/* Background Image */}
// //           <div className="absolute inset-0">
// //             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
// //             <motion.img 
// //               src={service.image} 
// //               alt={service.title}
// //               // CHANGE HERE: Removed 'grayscale' and increased base opacity to 80
// //               className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
// //               style={{ transform: "translateZ(-10px) scale(1.2)" }} 
// //             />
// //           </div>

// //           {/* Content */}
// //           <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
// //             {/* Icon */}
// //             <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 
// // flex items-center justify-center backdrop-blur-sm
// // group-hover:bg-amber-500 transition-colors duration-300">

// //   <img
// //     src={service.iconImage}
// //     alt={service.title}
// //     className="w-8 h-8 object-contain"
// //   />
// // </div>


// //             <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-amber-400 transition-colors">
// //               {service.title}
// //             </h3>
            
// //             <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2 mb-4 group-hover:text-zinc-200">
// //               {service.description}
// //             </p>

// //             {/* Hidden "Read More" that slides in */}
// //             <div className="overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
// //               <span className="text-amber-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
// //                 Discover Details <span className="text-lg">→</span>
// //               </span>
// //             </div>
// //           </div>
// //         </div>

// //         {/* --- SPOTLIGHT GLOW EFFECT --- */}
// //         <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
// //            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
// //         </div>

// //       </Link>
// //     </motion.div>
// //   );
// // };

// // const ServicePage = () => {
// //   return (
// //     <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black overflow-x-hidden">
      
// //       {/* --- CINEMATIC GRAIN OVERLAY --- */}
// //       <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
// //         style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
// //       />

// //       {/* --- AMBIENT BLOBS --- */}
// //       <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-amber-600/20 rounded-full blur-[128px] pointer-events-none" />
// //       <div className="fixed bottom-[10%] right-[-5%] w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />

// //       {/* --- HEADER SECTION --- */}
// //       <div className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //         >
// //           <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
// //             World Class Catering
// //           </span>
// //           <h1 className="text-5xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
// //             Curated <br className="hidden md:block" />
// //             <span className="italic font-light text-amber-500">Experiences</span>
// //           </h1>
// //           <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
// //             We don't just serve food; we design culinary landscapes for your most cherished moments. Select an event type to begin.
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* --- GRID --- */}
// //       <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 perspective-1000">
// //           {services.map((service, index) => (
// //             <SpotlightCard key={service.id} service={service} index={index} />
// //           ))}
// //         </div>
// //       </div>

      

// //     </div>
// //   );
// // };

// // export default ServicePage;






// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { Link } from 'react-router-dom';

// // // --- SERVICE DATA ---
// // const services = [
// //   {
// //     id: "01",
// //     title: "Royal Weddings",
// //     description: "We give good food for big weddings. We cook tasty dishes for all wedding functions.",
// //     image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
// //     iconImage: "assets/icons/weddinicon.png"
// //   },
// //   {
// //     id: "02",
// //     title: "Big Office Parties",
// //     description: "We serve food for office meetings and company parties with clean and proper service.",
// //     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
// //     iconImage: "assets/icons/office.png"
// //   },
// //   {
// //     id: "03",
// //     title: "Baby shower",
// //     description: "Baby Shower is a small celebration to wish a mother and her baby good health and happiness.",
// //     image: "https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg",
// //     iconImage: "assets/icons/baby.png"
// //   },
// //   {
// //     id: "04",
// //     title: "Birthday Parties",
// //     description: "We give food for small home parties like birthday and anniversary.",
// //     image: "https://cdn.cdnparenting.com/articles/2018/06/243588019-H-768x525.jpg",
// //     iconImage: "assets/icons/birthday.png"
// //   },
// //   {
// //     id: "05",
// //     title: "Family & Small Functions",
// //     description: "We provide tasty and traditional food for family functions like pooja, anniversaries, and small gatherings.",
// //     image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
// //     iconImage: "assets/icons/family.png"
// //   },
// //   {
// //     id: "06",
// //     title: "Engagement",
// //     description: "We give simple and tasty food for engagement function.",
// //     image: "https://wallpapers.com/images/hd/traditional-beautiful-engagement-couple-ring-7o6kh4dv11dsf0dp.jpg",
// //     iconImage: "assets/icons/engagement.png"
// //   },
// //   {
// //     id: "07",
// //     title: "Mehandhi / Sangeet / Haldi",
// //     description: "We serve snacks, sweets, and special food for these functions.",
// //     image: "https://i.pinimg.com/originals/59/ac/df/59acdf095cf95f73a00706feef5ad110.jpg",
// //     iconImage: "assets/icons/mehandhi.png"
// //   },
// //   {
// //     id: "08",
// //     title: "Religious Ceremonies",
// //     description: "We cook clean and pure traditional food for temple and puja events.",
// //     image: "https://as1.ftcdn.net/v2/jpg/09/18/56/92/1000_F_918569254_c6HPa4lse9ggSM2wwjgoZfM00bdR2obq.jpg",
// //     iconImage: "assets/icons/relegious.png"
// //   },
// //   {
// //     id: "09",
// //     title: "Alumni Meet / Retirement Party",
// //     description: "We provide good food for old students meet and retirement parties.",
// //     image: "https://news.temple.edu/sites/news/files/shutterstock_531382432-scaled_0.jpg",
// //     iconImage: "assets/icons/alumini.png"
// //   },
// //   {
// //     id: "10",
// //     title: "House Warming",
// //     description: "We serve fresh and traditional food for new house opening.",
// //     image: "https://blog.photoadking.com/wp-content/uploads/2022/12/housewarming-invitation-wording.jpg",
// //     iconImage: "assets/icons/house.png"
// //   }
// // ];

// // const ServicePage = () => {
// //   // Set the first item as active by default
// //   const [activeId, setActiveId] = useState(services[0].id);

// //   return (
// //     <div className="min-h-screen bg-black text-white selection:bg-amber-500 selection:text-black overflow-x-hidden relative">
      
// //       {/* --- CINEMATIC GRAIN OVERLAY --- */}
// //       <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
// //         style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
// //       />

// //       {/* --- AMBIENT BLOBS --- */}
// //       <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-amber-600/20 rounded-full blur-[128px] pointer-events-none" />
// //       <div className="fixed bottom-[10%] right-[-5%] w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />

// //       {/* --- HEADER SECTION --- */}
// //       <div className="relative pt-32 pb-12 px-6 max-w-7xl mx-auto text-center z-10">
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, ease: "easeOut" }}
// //         >
// //           <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
// //             World Class Catering
// //           </span>
// //           <h1 className="text-4xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
// //             Curated <br className="hidden md:block" />
// //             <span className="italic font-light text-amber-500">Experiences</span>
// //           </h1>
// //           <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
// //             We don't just serve food; we design culinary landscapes for your most cherished moments. Select an event type to explore.
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* --- ACCORDION SECTION --- */}
// //       {/* Note: overflow-x-auto allows horizontal scrolling if the 10 items become too compressed on smaller screens */}
// //       <div className="w-full max-w-[1600px] mx-auto px-4 pb-32 relative z-10 overflow-x-auto hide-scrollbar">
// //         <div className="h-[600px] md:h-[500px] flex flex-col md:flex-row gap-2 md:gap-3 min-w-full md:min-w-[1000px]">
// //           {services.map((service) => {
// //             const isActive = activeId === service.id;
            
// //             return (
// //               <motion.div
// //                 key={service.id}
// //                 layout
// //                 onClick={() => setActiveId(service.id)}
// //                 onMouseEnter={() => setActiveId(service.id)}
// //                 className={`relative h-full rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
// //                   isActive ? 'flex-[4] md:flex-[5] min-w-[280px]' : 'flex-[1] min-w-[60px] md:min-w-[80px] opacity-60 grayscale hover:grayscale-[50%] hover:opacity-100'
// //                 }`}
// //                 style={{
// //                   boxShadow: isActive ? `0 0 30px rgba(245, 158, 11, 0.15)` : 'none' // Amber glow
// //                 }}
// //               >
// //                 {/* Background Image */}
// //                 <img 
// //                   src={service.image} 
// //                   alt={service.title} 
// //                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
// //                 />
                
// //                 {/* Overlay Gradient */}
// //                 <div 
// //                   className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"
// //                   style={{ backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.7)' }}
// //                 />

// //                 {/* --- CONTENT --- */}
// //                 <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-end pointer-events-none">
                  
// //                   {/* Vertical Title (Collapsed State - Desktop Only) */}
// //                   {!isActive && (
// //                     <div className="hidden md:flex absolute inset-0 items-center justify-center pb-8">
// //                       <h3 
// //                         className="text-white font-serif text-xl tracking-widest uppercase whitespace-nowrap opacity-80"
// //                         style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
// //                       >
// //                         {service.title}
// //                       </h3>
// //                     </div>
// //                   )}
                  
// //                   {/* Simple Title (Collapsed State - Mobile Only) */}
// //                   {!isActive && (
// //                     <div className="md:hidden absolute inset-0 flex items-center justify-center">
// //                       <h3 className="text-white font-serif text-sm tracking-widest uppercase text-center px-2"
// //                           style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
// //                         {service.title}
// //                       </h3>
// //                     </div>
// //                   )}

// //                   {/* Expanded Content */}
// //                   <AnimatePresence>
// //                     {isActive && (
// //                       <motion.div
// //                         initial={{ opacity: 0, y: 20 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         exit={{ opacity: 0, y: 10 }}
// //                         transition={{ duration: 0.5, delay: 0.1 }}
// //                         className="w-full flex flex-col justify-end pointer-events-auto"
// //                       >
// //                         {/* Icon */}
// //                         <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center backdrop-blur-md mb-4">
// //                           <img
// //                             src={service.iconImage}
// //                             alt={service.title}
// //                             className="w-6 h-6 object-contain"
// //                           />
// //                         </div>

// //                         {/* Title & Description */}
// //                         <h3 className="text-2xl md:text-4xl font-serif text-white mb-3 drop-shadow-md">
// //                           {service.title}
// //                         </h3>
                        
// //                         <div className="w-12 h-1 mb-4 rounded-full bg-amber-500" />
                        
// //                         <p className="text-zinc-300 text-sm md:text-base mb-6 font-light max-w-md line-clamp-3 md:line-clamp-none">
// //                           {service.description}
// //                         </p>

// //                         {/* CTA Button */}
// //                         <Link to={`/services/${service.id}`} className="w-max">
// //                           <motion.button
// //                             whileHover={{ scale: 1.05 }}
// //                             whileTap={{ scale: 0.95 }}
// //                             className="px-6 py-2.5 bg-amber-500 text-black text-sm md:text-base font-bold rounded-full flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]"
// //                           >
// //                             Discover Details <span>→</span>
// //                           </motion.button>
// //                         </Link>
// //                       </motion.div>
// //                     )}
// //                   </AnimatePresence>
// //                 </div>
// //               </motion.div>
// //             );
// //           })}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicePage;






// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link } from 'react-router-dom';

// // --- SERVICE DATA ---
// const services = [
//   {
//     id: "01",
//     title: "Royal Weddings",
//     description: "We give good food for big weddings. We cook tasty dishes for all wedding functions.",
//     image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
//     iconImage: "assets/icons/weddinicon.png"
//   },
//   {
//     id: "02",
//     title: "Big Office Parties",
//     description: "We serve food for office meetings and company parties with clean and proper service.",
//     image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
//     iconImage: "assets/icons/office.png"
//   },
//   {
//     id: "03",
//     title: "Baby shower",
//     description: "Baby Shower is a small celebration to wish a mother and her baby good health and happiness.",
//     image: "https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg",
//     iconImage: "assets/icons/baby.png"
//   },
//   {
//     id: "04",
//     title: "Birthday Parties",
//     description: "We give food for small home parties like birthday and anniversary.",
//     image: "https://cdn.cdnparenting.com/articles/2018/06/243588019-H-768x525.jpg",
//     iconImage: "assets/icons/birthday.png"
//   },
//   {
//     id: "05",
//     title: "Family & Small Functions",
//     description: "We provide tasty and traditional food for family functions like pooja, anniversaries, and small gatherings.",
//     image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
//     iconImage: "assets/icons/family.png"
//   },
//   {
//     id: "06",
//     title: "Engagement",
//     description: "We give simple and tasty food for engagement function.",
//     image: "https://wallpapers.com/images/hd/traditional-beautiful-engagement-couple-ring-7o6kh4dv11dsf0dp.jpg",
//     iconImage: "assets/icons/engagement.png"
//   },
//   {
//     id: "07",
//     title: "Mehandhi / Sangeet / Haldi",
//     description: "We serve snacks, sweets, and special food for these functions.",
//     image: "https://i.pinimg.com/originals/59/ac/df/59acdf095cf95f73a00706feef5ad110.jpg",
//     iconImage: "assets/icons/mehandhi.png"
//   },
//   {
//     id: "08",
//     title: "Religious Ceremonies",
//     description: "We cook clean and pure traditional food for temple and puja events.",
//     image: "https://as1.ftcdn.net/v2/jpg/09/18/56/92/1000_F_918569254_c6HPa4lse9ggSM2wwjgoZfM00bdR2obq.jpg",
//     iconImage: "assets/icons/relegious.png"
//   },
//   {
//     id: "09",
//     title: "Alumni Meet / Retirement Party",
//     description: "We provide good food for old students meet and retirement parties.",
//     image: "https://news.temple.edu/sites/news/files/shutterstock_531382432-scaled_0.jpg",
//     iconImage: "assets/icons/alumini.png"
//   },
//   {
//     id: "10",
//     title: "House Warming",
//     description: "We serve fresh and traditional food for new house opening.",
//     image: "https://blog.photoadking.com/wp-content/uploads/2022/12/housewarming-invitation-wording.jpg",
//     iconImage: "assets/icons/house.png"
//   }
// ];

// const ServicePage = () => {
//   // Set the first service as active by default
//   const [activeId, setActiveId] = useState(services[0].id);

//   return (
//     <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black overflow-x-hidden pb-32">
      
//       {/* --- CINEMATIC GRAIN OVERLAY --- */}
//       <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
//         style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
//       />

//       {/* --- AMBIENT BLOBS --- */}
//       <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-amber-600/20 rounded-full blur-[128px] pointer-events-none" />
//       <div className="fixed bottom-[10%] right-[-5%] w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />

//       {/* --- HEADER SECTION --- */}
//       <div className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto text-center z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
//             World Class Catering
//           </span>
//           <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
//             Curated <br className="hidden md:block" />
//             <span className="italic font-light text-amber-500">Experiences</span>
//           </h1>
//           <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
//             We don't just serve food; we design culinary landscapes for your most cherished moments. Select an event type to explore.
//           </p>
//         </motion.div>
//       </div>

//       {/* --- HORIZONTAL ACCORDION SECTION --- */}
//       <div className="max-w-[95%] mx-auto relative z-10 h-[800px] md:h-[600px] flex flex-col md:flex-row gap-2 md:gap-3">
//         {services.map((service) => {
//           const isActive = activeId === service.id;
          
//           return (
//             <motion.div
//               key={service.id}
//               layout
//               onClick={() => setActiveId(service.id)}
//               onMouseEnter={() => setActiveId(service.id)}
//               className={`relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
//                 isActive ? 'flex-[4] md:flex-[5]' : 'flex-[1] opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
//               }`}
//               style={{
//                 boxShadow: isActive ? `0 0 40px rgba(245, 158, 11, 0.15)` : 'none' // Amber shadow for active
//               }}
//             >
//               {/* Background Image */}
//               <img 
//                 src={service.image} 
//                 alt={service.title} 
//                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
//               />
              
//               {/* Overlay Gradient */}
//               <div 
//                 className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
//                 style={{ backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.7)' }}
//               />

//               {/* --- CONTENT --- */}
//               <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                
//                 {/* Vertical Title (Collapsed State - Desktop Only) */}
//                 {!isActive && (
//                   <div className="hidden md:flex absolute inset-0 items-center justify-center">
//                     <h3 
//                       className="text-white font-serif text-xl tracking-widest uppercase whitespace-nowrap opacity-80"
//                       style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
//                     >
//                       {service.title}
//                     </h3>
//                   </div>
//                 )}
                
//                 {/* Simple Title (Collapsed State - Mobile Only) */}
//                 {!isActive && (
//                   <div className="md:hidden absolute inset-0 flex items-center justify-center">
//                     <h3 className="text-white font-serif text-sm tracking-widest uppercase text-center px-2">
//                       {service.title}
//                     </h3>
//                   </div>
//                 )}

//                 {/* Expanded Content */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 10 }}
//                       transition={{ duration: 0.5, delay: 0.2 }}
//                       className="w-full relative z-20"
//                     >
//                       {/* Icon */}
//                       <div className="w-12 h-12 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center backdrop-blur-md shadow-lg">
//                         <img
//                           src={service.iconImage}
//                           alt={`${service.title} icon`}
//                           className="w-6 h-6 object-contain"
//                           onError={(e) => { e.target.style.display = 'none' }} // Hides broken image icon if path is wrong
//                         />
//                       </div>

//                       {/* Title & Description */}
//                       <h3 className="text-3xl md:text-5xl font-serif text-white mb-3 leading-tight drop-shadow-lg">
//                         {service.title}
//                       </h3>
                      
//                       <p className="text-zinc-300 text-sm md:text-base mb-6 font-light max-w-md line-clamp-3 md:line-clamp-none">
//                         {service.description}
//                       </p>

//                       {/* Divider */}
//                       <div className="w-16 h-1 mb-6 rounded-full bg-amber-500" />

//                       {/* CTA Button */}
//                       <Link to={`/services/${service.id}`}>
//                         <motion.button
//                           whileHover={{ scale: 1.05 }}
//                           whileTap={{ scale: 0.95 }}
//                           className="px-6 py-2.5 bg-amber-500 text-black font-bold rounded-full flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-xl text-sm"
//                         >
//                           Discover Details <span>→</span>
//                         </motion.button>
//                       </Link>

//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ServicePage;







import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

// --- SERVICE DATA ---
const services = [
  {
    id: "01",
    title: "Royal Weddings",
    description: "We give good food for big weddings. We cook tasty dishes for all wedding functions.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    iconImage: "assets/icons/weddinicon.png"
  },
  {
    id: "02",
    title: "Big Office Parties",
    description: "We serve food for office meetings and company parties with clean and proper service.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    iconImage: "assets/icons/office.png"
  },
  {
    id: "03",
    title: "Baby shower",
    description: "Baby Shower is a small celebration to wish a mother and her baby good health and happiness.",
    image: "https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg",
    iconImage: "assets/icons/baby.png"
  },
  {
    id: "04",
    title: "Birthday Parties",
    description: "We give food for small home parties like birthday and anniversary.",
    image: "https://cdn.cdnparenting.com/articles/2018/06/243588019-H-768x525.jpg",
    iconImage: "assets/icons/birthday.png"
  },
  {
    id: "05",
    title: "Family & Small Functions",
    description: "We provide tasty and traditional food for family functions like pooja, anniversaries, and small gatherings.",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80",
    iconImage: "assets/icons/family.png"
  },
  {
    id: "06",
    title: "Engagement",
    description: "We give simple and tasty food for engagement function.",
    image: "https://wallpapers.com/images/hd/traditional-beautiful-engagement-couple-ring-7o6kh4dv11dsf0dp.jpg",
    iconImage: "assets/icons/engagement.png"
  },
  {
    id: "07",
    title: "Mehandhi / Sangeet / Haldi",
    description: "We serve snacks, sweets, and special food for these functions.",
    image: "https://i.pinimg.com/originals/59/ac/df/59acdf095cf95f73a00706feef5ad110.jpg",
    iconImage: "assets/icons/mehandhi.png"
  },
  {
    id: "08",
    title: "Religious Ceremonies",
    description: "We cook clean and pure traditional food for temple and puja events.",
    image: "https://as1.ftcdn.net/v2/jpg/09/18/56/92/1000_F_918569254_c6HPa4lse9ggSM2wwjgoZfM00bdR2obq.jpg",
    iconImage: "assets/icons/relegious.png"
  },
  {
    id: "09",
    title: "Alumni Meet / Retirement Party",
    description: "We provide good food for old students meet and retirement parties.",
    image: "https://news.temple.edu/sites/news/files/shutterstock_531382432-scaled_0.jpg",
    iconImage: "assets/icons/alumini.png"
  },
  {
    id: "10",
    title: "House Warming",
    description: "We serve fresh and traditional food for new house opening.",
    image: "https://blog.photoadking.com/wp-content/uploads/2022/12/housewarming-invitation-wording.jpg",
    iconImage: "assets/icons/house.png"
  }
];

const ServicePage = () => {
  // Set the first service as active by default
  const [activeId, setActiveId] = useState(services[0].id);

  // Split services into two rows of 5
  const topRow = services.slice(0, 5);
  const bottomRow = services.slice(5, 10);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 selection:text-black overflow-x-hidden pb-32">
      
      {/* --- CINEMATIC GRAIN OVERLAY --- */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-50 mix-blend-overlay"
        style={{ backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")` }}
      />

      {/* --- AMBIENT BLOBS --- */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-amber-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-5%] w-96 h-96 bg-purple-900/20 rounded-full blur-[128px] pointer-events-none" />

      {/* --- HEADER SECTION --- */}
      <div className="relative pt-32 pb-16 px-6 max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-amber-500 text-xs font-mono tracking-widest uppercase mb-6 backdrop-blur-md">
            World Class Catering
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
            Curated <br className="hidden md:block" />
            <span className="italic font-light text-amber-500">Experiences</span>
          </h1>
          <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed">
            We don't just serve food; we design culinary landscapes for your most cherished moments. Select an event type to explore.
          </p>
        </motion.div>
      </div>

      {/* --- HORIZONTAL ACCORDION SECTION (SPLIT INTO 2 ROWS) --- */}
      <div className="max-w-[95%] mx-auto relative z-10 flex flex-col gap-4">
        
        {/* Helper function to render a row to keep code clean */}
        {[topRow, bottomRow].map((row, rowIndex) => (
          <div key={rowIndex} className="h-[600px] md:h-[400px] flex flex-col md:flex-row gap-2 md:gap-3">
            {row.map((service) => {
              const isActive = activeId === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  layout
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`relative h-full rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
                    isActive ? 'flex-[4] md:flex-[5]' : 'flex-[1] opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                  }`}
                  style={{
                    boxShadow: isActive ? `0 0 40px rgba(245, 158, 11, 0.15)` : 'none'
                  }}
                >
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                  />
                  
                  {/* Overlay Gradient */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
                    style={{ backgroundColor: isActive ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.7)' }}
                  />

                  {/* --- CONTENT --- */}
                  <div className="absolute inset-0 p-5 md:p-8 flex flex-col justify-end">
                    
                    {/* Vertical Title (Collapsed State - Desktop Only) */}
                    {!isActive && (
                      <div className="hidden md:flex absolute inset-0 items-center justify-center">
                        <h3 
                          className="text-white font-serif text-lg tracking-widest uppercase whitespace-nowrap opacity-80"
                          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    )}
                    
                    {/* Simple Title (Collapsed State - Mobile Only) */}
                    {!isActive && (
                      <div className="md:hidden absolute inset-0 flex items-center justify-center">
                        <h3 className="text-white font-serif text-sm tracking-widest uppercase text-center px-2">
                          {service.title}
                        </h3>
                      </div>
                    )}

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="w-full relative z-20"
                        >
                          {/* Icon */}
                          <div className="w-10 h-10 mb-3 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center backdrop-blur-md shadow-lg">
                            <img
                              src={service.iconImage}
                              alt={`${service.title} icon`}
                              className="w-5 h-5 object-contain"
                              onError={(e) => { e.target.style.display = 'none' }}
                            />
                          </div>

                          {/* Title & Description */}
                          <h3 className="text-2xl md:text-4xl font-serif text-white mb-2 leading-tight drop-shadow-lg">
                            {service.title}
                          </h3>
                          
                          <p className="text-zinc-300 text-xs md:text-sm mb-4 font-light max-w-sm line-clamp-3 md:line-clamp-none">
                            {service.description}
                          </p>

                          {/* Divider */}
                          <div className="w-12 h-1 mb-4 rounded-full bg-amber-500" />

                          {/* CTA Button */}
                          <Link to={`/services/${service.id}`}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-5 py-2 bg-amber-500 text-black font-bold rounded-full flex items-center gap-2 hover:bg-amber-400 transition-colors shadow-xl text-xs"
                            >
                              Discover Details <span>→</span>
                            </motion.button>
                          </Link>

                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;