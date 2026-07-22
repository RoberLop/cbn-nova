import React from 'react';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 font-sans">
      
      {/* 1. HEADER (Navegación) */}
      <header className="bg-[#0b1320] text-white py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo Icono */}
          <div className="w-10 h-10 border-2 border-[#dca54c] flex flex-col justify-end p-1">
             <div className="flex items-end gap-1 h-full">
                <div className="w-1.5 h-full bg-[#dca54c]"></div>
                <div className="w-1.5 h-3/4 bg-[#dca54c]"></div>
                <div className="w-1.5 h-1/2 bg-[#dca54c]"></div>
             </div>
          </div>
          <div>
            <h1 className="text-2xl font-light tracking-widest">CBN <span className="font-bold">NOVA</span></h1>
            <p className="text-[0.6rem] text-[#dca54c] tracking-widest uppercase mt-1">Bienes que conectan contigo</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <a href="#" className="text-[#dca54c] border-b-2 border-[#dca54c] pb-1">Inicio</a>
          <a href="#" className="hover:text-white transition">Terrazas</a>
          <a href="#" className="hover:text-white transition">Renta</a>
          <a href="#" className="hover:text-white transition">Venta</a>
          <a href="#" className="hover:text-white transition">Servicios</a>
          <a href="#" className="hover:text-white transition">Nosotros</a>
          <a href="#" className="hover:text-white transition">Contacto</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-[#dca54c] text-white px-4 py-2 text-sm rounded hover:bg-[#c08f3f] transition">
            <span className="border border-white rounded px-1">+</span>
            Publica tu propiedad
          </button>
          <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION (Imagen principal y buscador) */}
      <section className="relative w-full h-[500px] flex flex-col justify-center px-12">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop" 
          alt="Terraza atardecer" 
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-50"
        />
        <div className="relative z-10 text-white max-w-2xl">
          <h2 className="text-5xl font-medium leading-tight">
            Encuentra el espacio <br/> que <span className="font-serif italic text-[#dca54c]">imaginas</span>
          </h2>
          <p className="mt-4 text-gray-200 text-lg">
            Terrazas, casas en renta, venta y más.<br/>Todo en un solo lugar.
          </p>
          <button className="mt-6 bg-[#dca54c] text-white px-6 py-3 rounded text-sm hover:bg-[#c08f3f] transition flex items-center gap-2">
            Explorar propiedades <span>→</span>
          </button>
        </div>

        {/* Buscador Flotante */}
        <div className="absolute -bottom-10 left-0 right-0 mx-auto w-11/12 max-w-6xl bg-white rounded-lg shadow-xl flex flex-wrap md:flex-nowrap items-center p-2 z-20">
          <div className="flex-1 p-3 border-r border-gray-200">
            <p className="text-xs text-gray-400 mb-1">Tipo de propiedad</p>
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Todos</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            </div>
          </div>
          <div className="flex-1 p-3 border-r border-gray-200">
            <p className="text-xs text-gray-400 mb-1">Operación</p>
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Todos</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
          <div className="flex-1 p-3 border-r border-gray-200">
            <p className="text-xs text-gray-400 mb-1">Ubicación</p>
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Guadalajara, Jalisco</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            </div>
          </div>
          <div className="flex-1 p-3">
            <p className="text-xs text-gray-400 mb-1">Rango de precio</p>
            <div className="flex justify-between items-center text-sm font-medium">
              <span>Cualquier precio</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
          </div>
          <div className="px-3">
            <button className="bg-[#0b1320] text-white px-8 py-3 rounded text-sm hover:bg-slate-800 transition flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* 3. CATEGORÍAS */}
      <section className="pt-24 pb-12 px-8 text-center max-w-6xl mx-auto">
        <p className="text-[0.6rem] text-[#dca54c] tracking-widest uppercase font-bold mb-2">Lo que tenemos para ti</p>
        <h3 className="text-3xl font-serif text-slate-800 mb-8">Encuentra lo que necesitas</h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { name: "Terrazas", active: true },
            { name: "Casas en Renta", active: false },
            { name: "Casas en Venta", active: false },
            { name: "Departamentos", active: false },
            { name: "Locales Comerciales", active: false },
            { name: "Bodegas", active: false },
            { name: "Terrenos", active: false }
          ].map((cat, idx) => (
            <div key={idx} className={`flex flex-col items-center justify-center p-4 bg-white rounded shadow-sm w-32 cursor-pointer border-b-2 ${cat.active ? 'border-[#dca54c] text-[#dca54c]' : 'border-transparent text-gray-500 hover:text-[#dca54c]'}`}>
              <div className="w-8 h-8 mb-2 border border-current rounded flex items-center justify-center">
                 {/* Icono genérico */}
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              </div>
              <span className="text-xs font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PROPIEDADES DESTACADAS */}
      <section className="px-8 pb-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-6">
          <h3 className="text-2xl font-serif text-slate-800">Propiedades destacadas</h3>
          <a href="#" className="text-sm text-[#dca54c] hover:underline flex items-center gap-1">
            Ver todas las propiedades <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Tarjeta 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md group">
            <div className="relative h-48">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Terraza en Renta" className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
              <div className="absolute top-3 left-3 bg-[#0b1320] text-white text-[0.6rem] px-2 py-1 rounded tracking-wider flex items-center gap-1">
                ⭐ DESTACADA
              </div>
              <button className="absolute top-3 right-3 text-white hover:text-red-500">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-sm text-slate-800">Terraza en Renta</h4>
              <div className="flex justify-between items-end mt-2">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Zapopan, Jalisco
                </p>
                <p className="font-bold text-sm text-slate-900">$18,000 MXN <span className="text-[0.65rem] font-normal text-gray-500">/mes</span></p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md group">
            <div className="relative h-48">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" alt="Casa en Venta" className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
              <button className="absolute top-3 right-3 text-white hover:text-red-500">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-sm text-slate-800">Casa en Venta</h4>
              <div className="flex justify-between items-end mt-2">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Valle Real, Zapopan
                </p>
                <p className="font-bold text-sm text-slate-900">$4,850,000 MXN</p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md group">
            <div className="relative h-48">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" alt="Casa en Renta" className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
              <button className="absolute top-3 right-3 text-white hover:text-red-500">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-sm text-slate-800">Casa en Renta</h4>
              <div className="flex justify-between items-end mt-2">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Providencia, Guadalajara
                </p>
                <p className="font-bold text-sm text-slate-900">$22,000 MXN <span className="text-[0.65rem] font-normal text-gray-500">/mes</span></p>
              </div>
            </div>
          </div>

          {/* Tarjeta 4 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md group">
            <div className="relative h-48">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4ea0d?q=80&w=2070&auto=format&fit=crop" alt="Terraza en Venta" className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
              <button className="absolute top-3 right-3 text-white hover:text-red-500">
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </button>
            </div>
            <div className="p-4">
              <h4 className="font-medium text-sm text-slate-800">Terraza en Venta</h4>
              <div className="flex justify-between items-end mt-2">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"></path></svg>
                  Lomas del Valle, Zapopan
                </p>
                <p className="font-bold text-sm text-slate-900">$2,950,000 MXN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER (Ventajas Competitivas) */}
      <section className="bg-[#0b1320] text-white py-8 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="text-[#dca54c]"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
            <div>
              <h5 className="text-sm text-[#dca54c] mb-0.5">Propiedades verificadas</h5>
              <p className="text-xs text-gray-400">Publicaciones revisadas para tu seguridad.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#dca54c]"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div>
            <div>
              <h5 className="text-sm text-[#dca54c] mb-0.5">Asesoría personalizada</h5>
              <p className="text-xs text-gray-400">Te acompañamos en cada paso del proceso.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#dca54c]"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
            <div>
              <h5 className="text-sm text-[#dca54c] mb-0.5">Transacciones seguras</h5>
              <p className="text-xs text-gray-400">Conectamos oportunidades, creamos confianza.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-[#dca54c]"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
            <div>
              <h5 className="text-sm text-[#dca54c] mb-0.5">Enfocados en Guadalajara</h5>
              <p className="text-xs text-gray-400">Especialistas en el mercado inmobiliario local.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}