import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans overflow-x-hidden">
      
      {/* 1. HEADER (Navegación) */}
      <header className="bg-[#0b1320] text-white py-4 px-4 md:px-8 2xl:px-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Icono */}
          <div className="w-10 h-10 2xl:w-12 2xl:h-12 border-2 border-[#dca54c] flex flex-col justify-end p-1">
             <div className="flex items-end gap-1 h-full">
                <div className="w-1.5 h-full bg-[#dca54c]"></div>
                <div className="w-1.5 h-3/4 bg-[#dca54c]"></div>
                <div className="w-1.5 h-1/2 bg-[#dca54c]"></div>
             </div>
          </div>
          <div>
            <h1 className="text-2xl 2xl:text-3xl font-light tracking-widest">CBN <span className="font-bold">NOVA</span></h1>
            <p className="text-[0.6rem] 2xl:text-xs text-[#dca54c] tracking-widest uppercase mt-1">Bienes que conectan contigo</p>
          </div>
        </div>

        {/* Menú PC */}
        <nav className="hidden lg:flex gap-6 2xl:gap-10 text-sm 2xl:text-base text-gray-300">
          <a href="#" className="text-[#dca54c] border-b-2 border-[#dca54c] pb-1">Inicio</a>
          <a href="#" className="hover:text-white transition">Terrazas</a>
          <a href="#" className="hover:text-white transition">Renta</a>
          <a href="#" className="hover:text-white transition">Venta</a>
          <a href="#" className="hover:text-white transition">Nosotros</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </nav>

        <div className="flex items-center gap-3 2xl:gap-6">
          <button className="hidden md:flex items-center gap-2 border border-[#dca54c] text-[#dca54c] px-4 py-2 2xl:px-6 2xl:py-3 text-sm 2xl:text-base rounded-lg hover:bg-[#dca54c] hover:text-[#0b1320] transition">
            <span className="border border-current rounded px-1">+</span>
            Publicar propiedad
          </button>
          
          <Link 
            href="/login" 
            className="bg-[#dca54c] hover:bg-[#c59340] text-[#0b1320] px-4 py-2 2xl:px-6 2xl:py-3 text-sm 2xl:text-base rounded-lg font-bold transition duration-200"
          >
            Iniciar Sesión
          </Link>
        </div>
      </header>

      {/* 2. HERO SECTION (Imagen principal y buscador) */}
      {/* En celular mide 500px, en PC 600px, en monitor gigante 750px */}
      <section className="relative w-full h-[500px] lg:h-[600px] 2xl:h-[750px] flex flex-col justify-center px-6 md:px-12 2xl:px-24">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
          alt="Terraza atardecer" 
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        />
        <div className="relative z-10 text-white max-w-2xl 2xl:max-w-4xl">
          <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-medium leading-tight">
            Encuentra el espacio <br/> que <span className="font-serif italic text-[#dca54c]">imaginas</span>
          </h2>
          <p className="mt-4 2xl:mt-6 text-gray-200 text-base md:text-lg 2xl:text-2xl">
            Terrazas, casas en renta, venta y más.<br/>Todo en un solo lugar.
          </p>
          <button className="mt-6 2xl:mt-10 bg-[#dca54c] text-[#0b1320] font-bold px-6 py-3 2xl:px-8 2xl:py-4 rounded text-sm 2xl:text-lg hover:bg-[#c08f3f] transition flex items-center gap-2">
            Explorar propiedades <span>→</span>
          </button>
        </div>

        {/* BUSCADOR FLOTANTE INTELIGENTE */}
        {/* translate-y-1/2 bottom-0 lo mantiene perfectamente mitad adentro y mitad afuera de la imagen */}
        <div className="absolute left-0 right-0 mx-auto w-11/12 max-w-6xl 2xl:max-w-[1500px] bg-white rounded-xl shadow-2xl flex flex-col lg:flex-row items-center p-2 z-20 translate-y-1/2 bottom-0">
          
          <div className="w-full lg:flex-1 p-3 border-b lg:border-b-0 lg:border-r border-gray-200">
            <p className="text-[0.65rem] 2xl:text-sm text-gray-400 mb-1">Tipo de propiedad</p>
            <div className="flex justify-between items-center text-sm 2xl:text-base font-medium">
              <span>Todos</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
          </div>
          
          <div className="w-full lg:flex-1 p-3 border-b lg:border-b-0 lg:border-r border-gray-200">
            <p className="text-[0.65rem] 2xl:text-sm text-gray-400 mb-1">Operación</p>
            <div className="flex justify-between items-center text-sm 2xl:text-base font-medium">
              <span>Todos</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
          
          <div className="w-full lg:flex-1 p-3 border-b lg:border-b-0 lg:border-r border-gray-200">
            <p className="text-[0.65rem] 2xl:text-sm text-gray-400 mb-1">Ubicación</p>
            <div className="flex justify-between items-center text-sm 2xl:text-base font-medium">
              <span>Guadalajara, Jalisco</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
          </div>
          
          <div className="w-full lg:flex-1 p-3">
            <p className="text-[0.65rem] 2xl:text-sm text-gray-400 mb-1">Rango de precio</p>
            <div className="flex justify-between items-center text-sm 2xl:text-base font-medium">
              <span>Cualquier precio</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08-.402-2.599-1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
          
          <div className="w-full lg:w-auto p-3">
            <button className="w-full lg:w-auto bg-[#0b1320] text-white px-8 py-3 2xl:px-12 2xl:py-4 rounded-lg text-sm 2xl:text-lg hover:bg-slate-800 transition flex items-center justify-center gap-2">
              <svg className="w-4 h-4 2xl:w-5 2xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* 3. CATEGORÍAS */}
      {/* pt-56 en celular porque el buscador apilado es muy alto. pt-24 en PC */}
      <section className="pt-56 sm:pt-48 lg:pt-24 2xl:pt-32 pb-12 px-4 md:px-8 text-center max-w-6xl 2xl:max-w-[1500px] mx-auto">
        <p className="text-[0.6rem] 2xl:text-sm text-[#dca54c] tracking-widest uppercase font-bold mb-2">Lo que tenemos para ti</p>
        <h3 className="text-2xl md:text-3xl 2xl:text-5xl font-serif text-slate-800 mb-8 2xl:mb-12">Encuentra lo que necesitas</h3>
        
        <div className="flex flex-wrap justify-center gap-4 2xl:gap-8">
          {[
            { name: "Terrazas", active: true },
            { name: "Casas en Renta", active: false },
            { name: "Casas en Venta", active: false },
            { name: "Departamentos", active: false },
            { name: "Comerciales", active: false },
            { name: "Bodegas", active: false }
          ].map((cat, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center p-4 2xl:p-6 bg-white rounded-lg shadow-sm w-[45%] sm:w-32 2xl:w-44 cursor-pointer border-b-2 ${cat.active ? 'border-[#dca54c] text-[#dca54c] shadow-md' : 'border-transparent text-gray-500 hover:text-[#dca54c]'}`}>
              <div className="w-8 h-8 2xl:w-12 2xl:h-12 mb-2 border border-current rounded flex items-center justify-center">
                 <svg className="w-5 h-5 2xl:w-7 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <span className="text-xs 2xl:text-base font-medium text-center">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROPIEDADES DESTACADAS */}
      <section className="px-4 md:px-8 pb-16 max-w-7xl 2xl:max-w-[1500px] mx-auto">
        <div className="flex justify-between items-end mb-6 2xl:mb-10">
          <h3 className="text-2xl 2xl:text-4xl font-serif text-slate-800">Propiedades destacadas</h3>
          <a href="#" className="text-sm 2xl:text-lg text-[#dca54c] hover:underline flex items-center gap-1 hidden sm:flex">
            Ver todas <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-10">
          
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md group">
            <div className="relative h-48 2xl:h-72">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Terraza en Renta" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <div className="absolute top-3 left-3 bg-[#0b1320] text-white text-[0.6rem] 2xl:text-xs px-2 py-1 rounded tracking-wider flex items-center gap-1">
                ⭐ DESTACADA
              </div>
              <button className="absolute top-3 right-3 text-white hover:text-red-500 bg-black/20 p-1.5 rounded-full backdrop-blur-sm transition">
                 <svg className="w-4 h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4 2xl:p-6">
              <h4 className="font-semibold text-sm 2xl:text-xl text-slate-800">Terraza en Renta</h4>
              <div className="flex justify-between items-end mt-2 2xl:mt-4">
                <p className="text-xs 2xl:text-base text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3 2xl:w-4 2xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Zapopan, Jal
                </p>
                <p className="font-bold text-sm 2xl:text-lg text-slate-900">$18,000 <span className="text-[0.65rem] 2xl:text-sm font-normal text-gray-500">/mes</span></p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md group">
            <div className="relative h-48 2xl:h-72">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Casa en Venta" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <button className="absolute top-3 right-3 text-white hover:text-red-500 bg-black/20 p-1.5 rounded-full backdrop-blur-sm transition">
                 <svg className="w-4 h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4 2xl:p-6">
              <h4 className="font-semibold text-sm 2xl:text-xl text-slate-800">Casa en Venta</h4>
              <div className="flex justify-between items-end mt-2 2xl:mt-4">
                <p className="text-xs 2xl:text-base text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3 2xl:w-4 2xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Valle Real, Zap
                </p>
                <p className="font-bold text-sm 2xl:text-lg text-slate-900">$4,850,000</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md group">
            <div className="relative h-48 2xl:h-72">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" alt="Casa en Renta" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <button className="absolute top-3 right-3 text-white hover:text-red-500 bg-black/20 p-1.5 rounded-full backdrop-blur-sm transition">
                 <svg className="w-4 h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4 2xl:p-6">
              <h4 className="font-semibold text-sm 2xl:text-xl text-slate-800">Casa en Renta</h4>
              <div className="flex justify-between items-end mt-2 2xl:mt-4">
                <p className="text-xs 2xl:text-base text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3 2xl:w-4 2xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Providencia, GDL
                </p>
                <p className="font-bold text-sm 2xl:text-lg text-slate-900">$22,000 <span className="text-[0.65rem] 2xl:text-sm font-normal text-gray-500">/mes</span></p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md group">
            <div className="relative h-48 2xl:h-72">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=2070&auto=format&fit=crop" alt="Terraza en Venta" className="w-full h-full object-cover group-hover:scale-105 transition duration-500"/>
              <button className="absolute top-3 right-3 text-white hover:text-red-500 bg-black/20 p-1.5 rounded-full backdrop-blur-sm transition">
                 <svg className="w-4 h-4 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4 2xl:p-6">
              <h4 className="font-semibold text-sm 2xl:text-xl text-slate-800">Terraza en Venta</h4>
              <div className="flex justify-between items-end mt-2 2xl:mt-4">
                <p className="text-xs 2xl:text-base text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3 2xl:w-4 2xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Lomas del Valle
                </p>
                <p className="font-bold text-sm 2xl:text-lg text-slate-900">$2,950,000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (Ventajas Competitivas) */}
      <section className="bg-[#0b1320] text-white py-10 px-6 md:px-8">
        <div className="max-w-7xl 2xl:max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 2xl:gap-12">
          <div className="flex items-center gap-4">
            <div className="text-[#dca54c]"><svg className="w-10 h-10 2xl:w-14 2xl:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
            <div>
              <h5 className="text-sm 2xl:text-xl font-medium text-[#dca54c] mb-1">Propiedades verificadas</h5>
              <p className="text-xs 2xl:text-sm text-gray-400">Publicaciones revisadas para tu seguridad.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[#dca54c]"><svg className="w-10 h-10 2xl:w-14 2xl:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>
            <div>
              <h5 className="text-sm 2xl:text-xl font-medium text-[#dca54c] mb-1">Asesoría personalizada</h5>
              <p className="text-xs 2xl:text-sm text-gray-400">Te acompañamos en cada paso.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[#dca54c]"><svg className="w-10 h-10 2xl:w-14 2xl:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
            <div>
              <h5 className="text-sm 2xl:text-xl font-medium text-[#dca54c] mb-1">Transacciones seguras</h5>
              <p className="text-xs 2xl:text-sm text-gray-400">Conectamos oportunidades con confianza.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-[#dca54c]"><svg className="w-10 h-10 2xl:w-14 2xl:h-14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
            <div>
              <h5 className="text-sm 2xl:text-xl font-medium text-[#dca54c] mb-1">Enfocados en tu ciudad</h5>
              <p className="text-xs 2xl:text-sm text-gray-400">Especialistas en el mercado local.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}