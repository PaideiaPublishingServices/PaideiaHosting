"use client"

import Link from "next/link"
import Image from "next/image"
import { Check, Palette, Layout, Sliders, Type, Lock, Smartphone } from "lucide-react"
import { useState } from "react"

export default function AcademicThemeOMPPage() {
  const [isLifetime, setIsLifetime] = useState(false)

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-green-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block bg-green-500/20 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20 mb-4">
              Nuevo lanzamiento 2025
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
              Academic Theme OMP
            </h1>
            <p className="max-w-[700px] text-gray-200 md:text-xl">
              El tema más completo y profesional para tu editorial universitaria en Open Monograph Press
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row mt-8">
              <Link
                href="#pricing"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Ver Planes y Precios
              </Link>
              <Link
                href="#features"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explorar Características
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¿Por qué elegir Academic Theme OMP?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Diseñado específicamente para editoriales universitarias con las características que realmente necesitas
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Layout className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Diseño Profesional</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Header amplio con gradiente, navegación centrada y diseño responsive optimizado para todos los
                dispositivos.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Palette className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Hero Banner Premium</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Banner principal con imagen de fondo, título, descripción y botones CTA completamente configurables.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Sliders className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Slider Avanzado</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Sistema de 3 slides con imagen, título, texto y botones. Navegación automática y controles intuitivos.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Smartphone className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Personalización Total</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Adapta completamente el tema a la identidad visual de tu institución con colores y tipografías
                personalizadas.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Type className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Tipografías Premium</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Inter, Source Serif Pro y Crimson Text. Fuentes profesionales optimizadas para contenido académico.
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white">
                <Lock className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">Sistema de Licencias</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Gestión profesional de licencias con activación simple, soporte técnico incluido y actualizaciones
                automáticas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vista Previa del Tema</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explora Academic Theme OMP en acción y descubre cómo puede transformar tu editorial
              </p>
            </div>
          </div>
          <div className="mt-12">
            <a
              href="https://demo.paideiastudio.com.ar/index.php/omp"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Image
                src="/placeholder.svg?height=600&width=1200"
                width={1200}
                height={600}
                alt="Academic Theme OMP Preview"
                className="rounded-lg object-cover w-full border shadow-lg hover:shadow-xl transition-shadow"
              />
            </a>
            <div className="text-center mt-6">
              <a
                href="https://demo.paideiastudio.com.ar/index.php/omp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Ver Demo en Vivo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Planes y Precios de Academic Theme OMP
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Elige el plan que mejor se adapte a las necesidades de tu editorial universitaria
              </p>
            </div>
          </div>

          {/* Toggle Annual/Lifetime */}
          <div className="flex justify-center items-center gap-4 my-12">
            <span className="text-sm font-medium text-gray-700">Facturación:</span>
            <button
              onClick={() => setIsLifetime(!isLifetime)}
              className="relative inline-flex h-11 w-44 items-center rounded-full bg-gray-200 transition-colors"
            >
              <span
                className={`inline-block h-9 w-20 transform rounded-full bg-white shadow-md transition-transform ${
                  isLifetime ? "translate-x-[86px]" : "translate-x-1"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-around px-3 text-xs font-medium">
                <span className={isLifetime ? "text-gray-500" : "text-green-600"}>Anual</span>
                <span className={isLifetime ? "text-green-600" : "text-gray-500"}>Lifetime</span>
              </div>
            </button>
          </div>

          {/* Annual Plans */}
          {!isLifetime && (
            <div className="mx-auto grid max-w-6xl items-start gap-6 py-12 md:grid-cols-3">
              {/* Individual Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:border-green-600">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Individual</h3>
                  <p className="text-gray-500 dark:text-gray-400">Perfecto para una editorial</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-green-600">$99</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">/año</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Renovación anual</p>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hero banner personalizable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Slider con 3 slides configurables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Footer de 3 columnas editables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Tipografías premium (3 opciones)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">1 sitio web / dominio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Actualizaciones incluidas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Soporte técnico prioritario</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Documentación completa</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Comprar Plan Anual
                </Link>
              </div>

              {/* Professional Plan - Featured */}
              <div className="flex flex-col rounded-lg border-2 border-green-600 bg-background p-6 shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                  Más Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Professional</h3>
                  <p className="text-gray-500 dark:text-gray-400">Para múltiples proyectos</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-green-600">$299</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">/año</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Ahorra con múltiples sitios</p>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Todo de plan Individual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Hasta 5 sitios web / dominios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Actualizaciones prioritarias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Soporte técnico premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Instalación asistida incluida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalización básica de código</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Documentación extendida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Descuentos en futuros plugins</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Comprar Plan Anual
                </Link>
              </div>

              {/* Institutional Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-lg hover:border-green-600">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Institutional</h3>
                  <p className="text-gray-500 dark:text-gray-400">Para grandes instituciones</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-green-600">$699</span>
                  <span className="ml-2 text-gray-500 dark:text-gray-400">/año</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Sitios ilimitados</p>
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Todo de plan Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sitios web ilimitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Soporte prioritario 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Instalación completa incluida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalización avanzada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Capacitación en línea para staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Actualizaciones inmediatas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Licencia institucional transferible</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Comprar Plan Anual
                </Link>
              </div>
            </div>
          )}

          {/* Lifetime Plan */}
          {isLifetime && (
            <div className="mx-auto max-w-2xl py-12">
              <div className="flex flex-col rounded-lg border-2 border-green-600 bg-background p-8 shadow-lg relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-green-600 px-3 py-1 text-xs font-medium text-white">
                  Pago Único
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-3xl font-bold">Lifetime</h3>
                  <p className="text-gray-500 dark:text-gray-400">Acceso de por vida, sin renovaciones</p>
                </div>
                <div className="mt-6 flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-green-600">$1,599</span>
                </div>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">Pago único, para siempre</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Todas las características premium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sitios web ilimitados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Sin renovación anual nunca más</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Actualizaciones de por vida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Soporte técnico permanente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Nuevas características gratis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Acceso a versiones beta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Personalización avanzada incluida</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Capacitación completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Máximo ahorro a largo plazo</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-md bg-green-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Comprar Lifetime
                </Link>
              </div>
            </div>
          )}

          {/* Comparison Table */}
          <div className="mt-16 rounded-lg border bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-center mb-8">Comparación Detallada de Características</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4">Característica</th>
                    <th className="text-center py-4 px-4">Individual</th>
                    <th className="text-center py-4 px-4">Professional</th>
                    <th className="text-center py-4 px-4">Institutional</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b">
                    <td className="py-3 px-4">Diseño moderno responsive</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Colores personalizables</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Hero banner premium</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Slider con 3 slides</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Footer 3 columnas</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Tipografías premium</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Número de sitios</td>
                    <td className="text-center py-3 px-4 text-gray-600">1</td>
                    <td className="text-center py-3 px-4 text-gray-600">5</td>
                    <td className="text-center py-3 px-4 text-gray-600">Ilimitado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Soporte técnico</td>
                    <td className="text-center py-3 px-4 text-gray-600">Prioritario</td>
                    <td className="text-center py-3 px-4 text-gray-600">Premium</td>
                    <td className="text-center py-3 px-4 text-gray-600">24/7</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Instalación asistida</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Personalización avanzada</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4 text-gray-600">Básica</td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Capacitación incluida</td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="text-gray-300">✗</span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Check className="h-5 w-5 text-green-600 inline" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-green-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                ¿Listo para transformar tu editorial?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Únete a las instituciones académicas que ya confían en Academic Theme OMP
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#pricing"
                className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 text-white px-8 text-sm font-medium shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Comprar Licencia Ahora
              </Link>
              <a
                href="https://docs.paideiastudio.net/AcademicTheme/AcademicTheme.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Ver Documentación
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
