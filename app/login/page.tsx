"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  
  // Estados para los campos
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Estados para UI y validaciones
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Validadores en tiempo real
  const hasUpperCase = /[A-Z]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isPasswordValid = hasUpperCase && hasSpecialChar && password.length >= 8;
  const passwordsMatch = password === confirmPassword;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLogin && (!isPasswordValid || !passwordsMatch)) {
      alert("Por favor, corrige los errores en la contraseña antes de continuar.");
      return;
    }
    console.log(isLogin ? "Iniciando sesión..." : "Registrando...", { email, password, rememberMe });
    alert(isLogin ? "¡Simulando inicio de sesión exitoso!" : "¡Simulando registro! Te enviaríamos un correo de verificación.");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1320] text-gray-200">
      
      {/* Botón de regreso */}
      <div className="pt-4 lg:pt-6 px-6 lg:px-8">
        <Link href="/" className="text-xs lg:text-sm text-gray-400 hover:text-[#dca54c] flex items-center gap-2 transition w-fit">
          <span>←</span> Volver al inicio
        </Link>
      </div>

      {/* Contenedor Principal */}
      <div className="flex-1 flex items-center justify-center px-4 py-4 lg:py-12">
        {/* MAGIA AQUÍ: p-5 para laptop, lg:p-10 para monitor. Anchos elásticos */}
        <div className={`w-full bg-gray-900 rounded-xl shadow-2xl p-5 lg:p-10 border border-gray-800 transition-all duration-300 ${isLogin ? 'max-w-md lg:max-w-lg' : 'max-w-2xl lg:max-w-4xl'}`}>
          
          <div className="text-center mb-4 lg:mb-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-1 lg:mb-3">
              {isLogin ? "Bienvenido de vuelta" : "Crea tu cuenta en NOVA"}
            </h2>
            <p className="text-xs lg:text-base text-gray-400">
              {isLogin ? "Ingresa tus datos para continuar" : "Únete para reservar las mejores propiedades"}
            </p>
          </div>

          {/* Formulario con space-y-3 (laptop) y lg:space-y-6 (monitor) */}
          <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">
            
            {/* VISTA DE REGISTRO */}
            {!isLogin && (
              <>
                <div className="flex flex-col sm:flex-row gap-3 lg:gap-6">
                  <div className="flex-1">
                    <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Nombre</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none text-sm lg:text-base" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Apellidos</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none text-sm lg:text-base" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-6">
                  <div className="flex-1">
                    <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Correo Electrónico</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none text-sm lg:text-base" placeholder="tu@correo.com" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Número de Teléfono</label>
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none text-sm lg:text-base" placeholder="Ej. 33 1234 5678" />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 lg:gap-6 items-start">
                  <div className="flex-1 w-full">
                    <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Contraseña</label>
                    <div className="relative">
                      <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required
                        className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none pr-9 lg:pr-12 text-sm lg:text-base" placeholder="••••••••" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 lg:right-4 top-2 lg:top-3.5 text-gray-400 hover:text-white">
                        {showPassword ? (
                          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                        ) : (
                          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        )}
                      </button>
                    </div>
                    {password.length > 0 && (
                      <div className="mt-1 lg:mt-2 text-[0.60rem] lg:text-xs flex flex-col gap-0.5 lg:gap-1 leading-tight">
                        <span className={hasUpperCase ? "text-green-400" : "text-gray-500"}>{hasUpperCase ? "✓" : "○"} Una mayúscula</span>
                        <span className={hasSpecialChar ? "text-green-400" : "text-gray-500"}>{hasSpecialChar ? "✓" : "○"} Un carácter especial</span>
                        <span className={password.length >= 8 ? "text-green-400" : "text-gray-500"}>{password.length >= 8 ? "✓" : "○"} Mínimo 8 caracteres</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 w-full">
                    <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Confirmar Contraseña</label>
                    <input type={showPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
                      className={`w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border focus:outline-none text-sm lg:text-base ${confirmPassword.length > 0 && !passwordsMatch ? 'border-red-500' : 'border-gray-700 focus:border-[#dca54c]'}`} placeholder="••••••••" />
                    {confirmPassword.length > 0 && !passwordsMatch && (
                      <p className="text-red-500 text-[0.60rem] lg:text-xs mt-1 lg:mt-2">No coinciden.</p>
                    )}
                  </div>
                </div>
              </>
            )}

            {/* VISTA DE LOGIN */}
            {isLogin && (
              <>
                <div>
                  <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Correo Electrónico</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                    className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none text-sm lg:text-base" placeholder="tu@correo.com" />
                </div>
                <div>
                  <label className="block text-[0.70rem] lg:text-sm font-medium text-gray-400 mb-1 lg:mb-2">Contraseña</label>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required
                      className="w-full px-3 py-2 lg:px-4 lg:py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] outline-none pr-9 lg:pr-12 text-sm lg:text-base" placeholder="••••••••" />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-2.5 lg:right-4 top-2 lg:top-3.5 text-gray-400 hover:text-white">
                        {showPassword ? (
                          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                        ) : (
                          <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        )}
                      </button>
                  </div>
                </div>
              </>
            )}

            <div className="flex items-center justify-between pt-1 lg:pt-2">
              <label className="flex items-center gap-1.5 lg:gap-2 cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded border-gray-600 bg-gray-800 accent-[#dca54c]" />
                <span className="text-[0.70rem] lg:text-sm text-gray-400">Mantener sesión</span>
              </label>
              {isLogin && <a href="#" className="text-[0.70rem] lg:text-sm text-[#dca54c] hover:underline">¿Olvidaste tu contraseña?</a>}
            </div>

            <button type="submit" className="w-full py-2 lg:py-3.5 px-4 bg-[#dca54c] hover:bg-[#c59340] text-[#0b1320] text-sm lg:text-base font-bold rounded-lg transition mt-1 lg:mt-4">
              {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </button>
          </form>

          <div className="mt-4 lg:mt-8 flex items-center justify-between">
            <span className="border-b border-gray-700 w-1/4"></span>
            <span className="text-[0.60rem] lg:text-xs text-center text-gray-500 uppercase tracking-wider">O continuar con</span>
            <span className="border-b border-gray-700 w-1/4"></span>
          </div>

          <button type="button" className="mt-3 lg:mt-6 w-full flex items-center justify-center py-2 lg:py-3 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm lg:text-base font-medium rounded-lg transition gap-2 lg:gap-3">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-4 h-4 lg:w-5 lg:h-5" />
            {isLogin ? "Iniciar con Google" : "Registrarse con Google"}
          </button>

          <p className="mt-4 lg:mt-8 text-center text-[0.75rem] lg:text-sm text-gray-400">
            {isLogin ? "¿Aún no tienes cuenta? " : "¿Ya tienes una cuenta? "}
            <button onClick={() => { setIsLogin(!isLogin); setPassword(""); setConfirmPassword(""); }} className="text-[#dca54c] hover:underline font-semibold">
              {isLogin ? "Regístrate aquí" : "Inicia sesión"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}