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
    alert(isLogin 
      ? "¡Simulando inicio de sesión exitoso!" 
      : "¡Simulando registro! Te enviaríamos un correo de verificación a " + email);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1320] text-gray-200">
      
      {/* Botón de regreso */}
      <div className="p-6">
        <Link href="/" className="text-sm text-gray-400 hover:text-[#dca54c] flex items-center gap-2 transition">
          <span>←</span> Volver al inicio
        </Link>
      </div>

      {/* Contenedor Principal */}
      <div className="flex-1 flex items-center justify-center px-4 pb-12">
        <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-2xl p-8 border border-gray-800">
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? "Bienvenido de vuelta" : "Crea tu cuenta en NOVA"}
            </h2>
            <p className="text-sm text-gray-400">
              {isLogin ? "Ingresa tus datos para continuar" : "Únete para reservar las mejores propiedades"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* CAMPOS EXCLUSIVOS DE REGISTRO */}
            {!isLogin && (
              <>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-400 mb-1">Nombre</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c] outline-none" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-medium text-gray-400 mb-1">Apellidos</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required
                      className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c] outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-1">Número de Teléfono</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c] outline-none" 
                    placeholder="Ej. 33 1234 5678" />
                </div>
              </>
            )}

            {/* CORREO (Para ambos) */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Correo Electrónico</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c] outline-none" 
                placeholder="tu@correo.com" />
            </div>

            {/* CONTRASEÑA */}
            <div>
              <label className="block text-xs font-medium text-gray-400 mb-1">Contraseña</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} required
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c] outline-none pr-10" 
                  placeholder="••••••••" 
                />
                {/* Botón del Ojito */}
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-gray-400 hover:text-white">
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  )}
                </button>
              </div>

              {/* Validadores visuales (Solo en Registro) */}
              {!isLogin && password.length > 0 && (
                <div className="mt-2 text-[0.65rem] flex flex-col gap-1">
                  <span className={hasUpperCase ? "text-green-400" : "text-gray-500"}>
                    {hasUpperCase ? "✓" : "○"} Al menos una letra mayúscula
                  </span>
                  <span className={hasSpecialChar ? "text-green-400" : "text-gray-500"}>
                    {hasSpecialChar ? "✓" : "○"} Al menos un carácter especial (!@#$%)
                  </span>
                  <span className={password.length >= 8 ? "text-green-400" : "text-gray-500"}>
                    {password.length >= 8 ? "✓" : "○"} Mínimo 8 caracteres
                  </span>
                </div>
              )}
            </div>

            {/* CONFIRMAR CONTRASEÑA (Solo en Registro) */}
            {!isLogin && (
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1">Confirmar Contraseña</label>
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)} required
                  className={`w-full px-4 py-2.5 rounded-lg bg-gray-800 border focus:outline-none pr-10 ${
                    confirmPassword.length > 0 && !passwordsMatch 
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'border-gray-700 focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c]'
                  }`} 
                  placeholder="••••••••" 
                />
                {confirmPassword.length > 0 && !passwordsMatch && (
                  <p className="text-red-500 text-[0.65rem] mt-1">Las contraseñas no coinciden.</p>
                )}
              </div>
            )}

            {/* CHECKBOX: MANTENER SESIÓN */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-600 text-[#dca54c] focus:ring-[#dca54c] bg-gray-800 accent-[#dca54c]" 
                />
                <span className="text-xs text-gray-400">Mantener sesión iniciada</span>
              </label>

              {isLogin && (
                <a href="#" className="text-xs text-[#dca54c] hover:underline">¿Olvidaste tu contraseña?</a>
              )}
            </div>

            {/* BOTÓN PRINCIPAL */}
            <button
              type="submit"
              className="w-full py-3 px-4 bg-[#dca54c] hover:bg-[#c59340] text-[#0b1320] font-bold rounded-lg transition duration-200 mt-2"
            >
              {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
            </button>
          </form>

          {/* SEPARADOR */}
          <div className="mt-8 flex items-center justify-between">
            <span className="border-b border-gray-700 w-1/4"></span>
            <span className="text-[0.65rem] text-center text-gray-500 uppercase tracking-wider">O continuar con</span>
            <span className="border-b border-gray-700 w-1/4"></span>
          </div>

          {/* BOTÓN DE GOOGLE (Diseño formal) */}
          <button
            type="button"
            className="mt-6 w-full flex items-center justify-center py-2.5 px-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-medium rounded-lg transition duration-200 gap-3"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            {isLogin ? "Iniciar sesión con Google" : "Registrarse con Google"}
          </button>

          {/* SWITCHER LOGIN / REGISTRO */}
          <p className="mt-8 text-center text-sm text-gray-400">
            {isLogin ? "¿Aún no tienes cuenta en NOVA? " : "¿Ya tienes una cuenta? "}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                // Limpiar contraseñas al cambiar de pantalla
                setPassword("");
                setConfirmPassword("");
              }}
              className="text-[#dca54c] hover:underline font-semibold"
            >
              {isLogin ? "Regístrate aquí" : "Inicia sesión"}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}