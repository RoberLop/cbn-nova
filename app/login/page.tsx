"use client";

import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  // Estas funciones están listas para conectarse a Supabase cuando Marco regrese
  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Intentando entrar con:", email, password);
    alert("¡Interfaz lista! Falta conectar Supabase para que funcione de verdad.");
  };

  const handleGoogleLogin = async () => {
    console.log("Intentando entrar con Google");
    alert("¡Botón de Google listo! Esperando a configurar Supabase.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1320] px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-800">
        
        {/* Título */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {isLogin ? "Bienvenido a CBN NOVA" : "Crea tu cuenta"}
          </h2>
          <p className="text-gray-400">
            {isLogin ? "Inicia sesión para continuar" : "Regístrate para reservar propiedades"}
          </p>
        </div>

        {/* Formulario de Correo y Contraseña */}
        <form onSubmit={handleEmailAuth} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Correo Electrónico
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c]"
              placeholder="tu@correo.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-[#dca54c] focus:ring-1 focus:ring-[#dca54c]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#dca54c] hover:bg-[#c59340] text-[#0b1320] font-bold rounded-lg transition duration-200"
          >
            {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
          </button>
        </form>

        {/* Separador */}
        <div className="mt-6 flex items-center justify-between">
          <span className="border-b border-gray-700 w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-center text-gray-400 uppercase">O continúa con</span>
          <span className="border-b border-gray-700 w-1/5 lg:w-1/4"></span>
        </div>

        {/* Botón de Google */}
        <button
          onClick={handleGoogleLogin}
          className="mt-6 w-full flex items-center justify-center py-3 px-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition duration-200"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google" 
            className="w-5 h-5 mr-2" 
          />
          Google
        </button>

        {/* Cambiar entre Login y Registro */}
        <p className="mt-8 text-center text-sm text-gray-400">
          {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#dca54c] hover:underline font-semibold"
          >
            {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
          </button>
        </p>

      </div>
    </div>
  );
}