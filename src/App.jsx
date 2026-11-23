import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Coffee,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Quote,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Utensils,
  X,
} from "lucide-react";

/* EDITAR: Datos principales de contacto y marca */
const BRAND_NAME = "Miga & Luna";
const WHATSAPP_NUMBER = "573000000000"; // Número con código de país sin '+'
const INSTAGRAM_HANDLE = "@migayluna.org";
const CONTACT_EMAIL = "contacto@migayluna.org";

function whatsappLink(text) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="nav-inner">
          <a href="#inicio" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <Sun size={18} />
            </span>
            <span>{BRAND_NAME}</span>
          </a>

          <nav className="nav-links" aria-label="Navegación principal">
            <a href="#proposito">Nuestro propósito</a>
            <a href="#labor-nocturna">Labor nocturna</a>
            <a href="#desayunos">Desayunos</a>
            <a href="#sumarse">Cómo apoyar</a>
          </nav>

          <div className="nav-actions">
            <a
              href={whatsappLink(
                `Hola ${BRAND_NAME}, quiero conocer más o apoyar su labor nocturna.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-sm"
            >
              Apoyar la labor
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              className="mobile-toggle"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-drawer">
            <a href="#proposito" onClick={() => setMobileOpen(false)}>
              Nuestro propósito
            </a>
            <a href="#labor-nocturna" onClick={() => setMobileOpen(false)}>
              Labor nocturna
            </a>
            <a href="#desayunos" onClick={() => setMobileOpen(false)}>
              Desayunos con propósito
            </a>
            <a href="#sumarse" onClick={() => setMobileOpen(false)}>
              Cómo apoyar
            </a>
            <a
              href={whatsappLink(
                `Hola ${BRAND_NAME}, quiero apoyar su labor.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              onClick={() => setMobileOpen(false)}
            >
              Escribir por WhatsApp
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO EDITORIAL */}
        <section id="inicio" className="hero">
          <div className="hero-aura" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="reveal">
              <span className="hero-eyebrow">
                <Sparkles size={15} />
                Iniciativa benéfica · Desayunos con propósito
              </span>
              <h1 className="hero-title">
                Un detalle al <em>amanecer</em>, un plato caliente en la noche.
              </h1>
              <p className="hero-desc">
                Somos una organización social que elabora desayunos sorpresa
                artesanales para destinar{" "}
                <strong>el 50% de todas las ganancias</strong> a preparar y
                entregar alimento digno a personas habitantes de calle cada
                noche.
              </p>

              <div className="hero-actions">
                <a href="#labor-nocturna" className="btn btn-primary">
                  Conocer la labor nocturna
                  <ArrowRight size={18} />
                </a>
                <a href="#proposito" className="btn btn-secondary">
                  Cómo funciona el 50/50
                </a>
              </div>

              {/* EDITAR: Cifras fijas de resumen en portada */}
              <div className="hero-pillars">
                <div className="hero-pillar">
                  <strong>50%</strong>
                  <span>De cada ganancia directo a cocina nocturna</span>
                </div>
                <div className="hero-pillar">
                  <strong>+3.450</strong>
                  <span>Cenas calientes entregadas en calle</span>
                </div>
                <div className="hero-pillar">
                  <strong>168</strong>
                  <span>Rutas nocturnas realizadas con respeto</span>
                </div>
              </div>
            </div>

            <div className="hero-collage reveal delay-1">
              <div className="hero-photo-main">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                  alt="Pan artesanal recién horneado para nuestra labor solidaria"
                />
              </div>

              <div className="hero-photo-inset">
                <img
                  src="https://images.unsplash.com/photo-1623334044303-241021148842?w=800&auto=format&fit=crop&q=80"
                  alt="Croissants artesanales preparados en la mañana"
                />
              </div>

              <div className="hero-seal">
                <span className="hero-seal-kicker">
                  <Moon size={13} />
                  Compromiso fijo
                </span>
                <strong>Mitad y mitad</strong>
                <p>
                  Cada mañana financia ingredientes frescos y bebidas calientes
                  para la ruta de la noche.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FRANJA DE IDENTIDAD */}
        <div className="editorial-ribbon">
          <div className="container ribbon-list">
            <span className="ribbon-item">
              <span className="ribbon-dot" />
              No somos solo una tienda: somos un puente solidario
            </span>
            <span className="ribbon-item">
              <span className="ribbon-dot" />
              Comida caliente preparada desde cero
            </span>
            <span className="ribbon-item">
              <span className="ribbon-dot" />
              Acompañamiento humano y trato digno
            </span>
          </div>
        </div>

        {/* PROPÓSITO 50/50 + CONTRASTE 8 AM VS 9 PM */}
        <section id="proposito" className="section">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">
                <Sun size={15} />
                Cómo nace la ayuda
              </span>
              <h2 className="section-title">
                Tendemos una mesa en la mañana para poder tender otra en la
                calle al caer la noche.
              </h2>
              <p className="section-subtitle">
                Para no depender únicamente de colectas ocasionales, creamos un
                modelo autosostenible: el afecto de quien regala un desayuno
                sostiene de forma permanente nuestra cocina nocturna.
              </p>
            </div>

            <div className="steps-grid">
              <article className="step-card reveal">
                <div className="step-top">
                  <span className="step-icon">
                    <Coffee size={22} />
                  </span>
                  <span className="step-num">01</span>
                </div>
                <h3>Un regalo con sentido</h3>
                <p>
                  Alguien celebra una fecha especial encargando uno de nuestros
                  desayunos artesanales en la mañana.
                </p>
              </article>

              <article className="step-card reveal delay-1">
                <div className="step-top">
                  <span className="step-icon">
                    <Heart size={22} />
                  </span>
                  <span className="step-num">02</span>
                </div>
                <h3>La mitad se vuelve alimento</h3>
                <p>
                  Separamos el 50% de las ganancias obtenidas para comprar
                  proteína, granos, verduras frescas y empaques biodegradables.
                </p>
              </article>

              <article className="step-card reveal delay-2">
                <div className="step-top">
                  <span className="step-icon">
                    <Moon size={22} />
                  </span>
                  <span className="step-num">03</span>
                </div>
                <h3>Salimos cuando la ciudad duerme</h3>
                <p>
                  Cocinamos al caer la tarde y recorremos distintos sectores
                  entregando cenas calientes, bebida y conversación sincera.
                </p>
              </article>
            </div>

            {/* Díptico visual fijo 8:00 a.m. vs 9:00 p.m. */}
            <div className="diptych reveal">
              <div
                className="diptych-panel diptych-panel--morning"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=1200&h=800&q=80&auto=format&fit=crop")',
                }}
              >
                <div className="diptych-content">
                  <span className="diptych-time diptych-time--sun">
                    <Sun size={14} />
                    8:00 a.m. · El vehículo
                  </span>
                  <h3>Alguien sonríe al abrir su puerta</h3>
                  <p>
                    Cada caja matutina lleva una tarjeta explicando que ese
                    gesto de cariño acaba de financiar cenas calientes para esa
                    misma noche.
                  </p>
                </div>
              </div>

              <div
                className="diptych-panel diptych-panel--night"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1400&q=80")',
                }}
              >
                <div className="diptych-content">
                  <span className="diptych-time diptych-time--moon">
                    <Moon size={14} />
                    9:00 p.m. · La misión
                  </span>
                  <h3>Nadie cena frío en la calle</h3>
                  <p>
                    Preparamos raciones recién cocinadas, servidas a buena
                    temperatura y acompañadas de chocolate o aguapanela
                    caliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZONA NOCTURNA (EL CORAZÓN DEL PROYECTO) */}
        <section id="labor-nocturna" className="night-zone">
          <div className="night-glow" aria-hidden="true" />
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">
                <Moon size={15} />
                Nuestra labor nocturna
              </span>
              <h2 className="section-title">
                Visibilizar con dignidad a quienes habitan la calle.
              </h2>
              <p className="section-subtitle">
                Creemos que la ayuda no debe humillar ni exponerse como
                espectáculo. Por eso salimos sin cámaras invasivas, llamando a
                cada persona por su nombre y compartiendo alimento digno.
              </p>
            </div>

            {/* EDITAR: Cifras fijas de impacto */}
            <div className="stats-grid">
              <div className="stat-card reveal">
                <div className="stat-value">3.450+</div>
                <p className="stat-label">
                  Cenas calientes recién preparadas y entregadas en la noche
                </p>
              </div>
              <div className="stat-card reveal delay-1">
                <div className="stat-value">168</div>
                <p className="stat-label">
                  Jornadas nocturnas recorridas junto a voluntarios
                </p>
              </div>
              <div className="stat-card reveal delay-2">
                <div className="stat-value">50%</div>
                <p className="stat-label">
                  De las ganancias matutinas destinadas de forma fija a la causa
                </p>
              </div>
              <div className="stat-card reveal delay-2">
                <div className="stat-value">14</div>
                <p className="stat-label">
                  Sectores y corredores de la ciudad acompañados con constancia
                </p>
              </div>
            </div>

            {/* Crónicas fijas de la noche */}
            <div className="stories-heading reveal">
              <span className="eyebrow">
                <Quote size={14} />
                Crónicas de nuestras rutas
              </span>
              <h3>Lo que sucede cuando salimos a caminar la noche</h3>
            </div>

            <div className="stories-grid">
              {/* EDITAR: Puedes personalizar estas 3 historias reales */}
              <article className="story-card reveal">
                <div>
                  <span className="story-zone">
                    <MapPin size={14} />
                    Ruta Centro · 9:30 p.m.
                  </span>
                  <h4>El termo de aguapanela y el nombre propio</h4>
                  <p className="story-text">
                    Aquella noche llovía fuerte cuando don Ernesto nos vio doblar
                    la esquina. No preguntó qué traíamos; preguntó si
                    recordábamos su nombre. Desde entonces entendimos que la
                    mesa empieza mirando a los ojos y escuchando sin prisa.
                  </p>
                </div>
                <div className="story-footer">
                  <span>45 cenas entregadas</span>
                  <span>Trato digno</span>
                </div>
              </article>

              <article className="story-card reveal delay-1">
                <div>
                  <span className="story-zone">
                    <MapPin size={14} />
                    Ruta Terminal · 10:40 p.m.
                  </span>
                  <h4>Cumpleaños de día, abrigo de noche</h4>
                  <p className="story-text">
                    Un sábado entregamos seis desayunos de aniversario por la
                    mañana. Con la mitad de esas ganancias llenamos esa misma
                    tarde dos ollas grandes de sancocho caliente y pan fresco
                    para quienes dormían bajo los puentes.
                  </p>
                </div>
                <div className="story-footer">
                  <span>38 cenas + bebida</span>
                  <span>Cocina del día</span>
                </div>
              </article>

              <article className="story-card reveal delay-2">
                <div>
                  <span className="story-zone">
                    <MapPin size={14} />
                    Cocina Solidaria · 7:15 p.m.
                  </span>
                  <h4>Cocinar como para nuestra propia familia</h4>
                  <p className="story-text">
                    Quien vive en la calle suele recibir sobras o comida fría.
                    Nuestra regla es simple: ningún plato sale de nuestra
                    cocina si nosotros mismos no nos sentaríamos con gusto a
                    cenarlo esa noche.
                  </p>
                </div>
                <div className="story-footer">
                  <span>60 raciones frescas</span>
                  <span>Recién hecho</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* MANIFIESTO EDITORIAL */}
        <section className="manifesto-band">
          <div className="container manifesto-inner reveal">
            <Utensils size={26} color="#c45c2c" />
            <blockquote className="manifesto-quote">
              “Nadie debería dormirse con el estómago vacío mientras otros
              celebramos la vida; por eso convertimos cada celebración en un
              plato caliente compartido.”
            </blockquote>
            <span className="manifesto-caption">
              Manifiesto de {BRAND_NAME} · Solidaridad cotidiana
            </span>
          </div>
        </section>

        {/* DESAYUNOS QUE FINANCIAN LA MISIÓN (SOLO MUESTRA) */}
        <section id="desayunos" className="section">
          <div className="container">
            <div className="section-header section-header--center reveal">
              <span className="eyebrow">
                <Coffee size={15} />
                Cómo sostenemos la causa
              </span>
              <h2 className="section-title">
                Desayunos sorpresa que financian noches enteras
              </h2>
              <p className="section-subtitle">
                No somos una vitrina comercial tradicional: elaboramos estas
                cajas artesanales únicamente para dar vida a nuestra cocina
                nocturna. Cada opción muestra directamente su impacto.
              </p>
            </div>

            <div className="breakfast-grid">
              <article className="breakfast-card reveal">
                <div className="breakfast-media">
                  <img
                    src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
                    alt="Caja Amanecer"
                  />
                  <span className="impact-badge-pill">
                    <Moon size={13} />
                    Financia 3 cenas nocturnas
                  </span>
                </div>
                <div className="breakfast-body">
                  <h3>Caja Amanecer</h3>
                  <p>
                    Tostadas en masa madre, fruta de temporada, café especial y
                    tarjeta impresa contando a quién ayuda tu detalle en la
                    noche.
                  </p>
                  <div className="breakfast-tags">
                    <span className="tag-chip">Artesanal</span>
                    <span className="tag-chip">Con tarjeta de impacto</span>
                  </div>
                  <a
                    href={whatsappLink(
                      `Hola ${BRAND_NAME}, quiero apoyar su labor encargando la Caja Amanecer.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="breakfast-link"
                  >
                    <span>Apoyar con este desayuno</span>
                    <MessageCircle size={17} />
                  </a>
                </div>
              </article>

              <article className="breakfast-card reveal delay-1">
                <div className="breakfast-media">
                  <img
                    src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=900&q=80"
                    alt="Desayuno Raíz"
                  />
                  <span className="impact-badge-pill">
                    <Moon size={13} />
                    Financia 4 cenas + bebida
                  </span>
                </div>
                <div className="breakfast-body">
                  <h3>Desayuno Raíz</h3>
                  <p>
                    Desayuno completo preparado al alba, jugo natural prensado,
                    panadería de la casa y aporte directo para cuatro raciones
                    nocturnas.
                  </p>
                  <div className="breakfast-tags">
                    <span className="tag-chip">Hecho en casa</span>
                    <span className="tag-chip">50% a la noche</span>
                  </div>
                  <a
                    href={whatsappLink(
                      `Hola ${BRAND_NAME}, quiero apoyar su labor encargando el Desayuno Raíz.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="breakfast-link"
                  >
                    <span>Apoyar con este desayuno</span>
                    <MessageCircle size={17} />
                  </a>
                </div>
              </article>

              <article className="breakfast-card reveal delay-2">
                <div className="breakfast-media">
                  <img
                    src="https://images.unsplash.com/photo-1522322420883-600684d7f9f1?auto=format&fit=crop&w=900&q=80"
                    alt="Mesa Compartida"
                  />
                  <span className="impact-badge-pill">
                    <Moon size={13} />
                    Financia 6 cenas nocturnas
                  </span>
                </div>
                <div className="breakfast-body">
                  <h3>Mesa Compartida</h3>
                  <p>
                    Pensada para celebrar entre dos en la mañana mientras
                    multiplicas alimento recién hecho para seis personas en
                    situación de calle.
                  </p>
                  <div className="breakfast-tags">
                    <span className="tag-chip">Para compartir</span>
                    <span className="tag-chip">Mayor alcance</span>
                  </div>
                  <a
                    href={whatsappLink(
                      `Hola ${BRAND_NAME}, quiero apoyar su labor encargando la opción Mesa Compartida.`
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="breakfast-link"
                  >
                    <span>Apoyar con este desayuno</span>
                    <MessageCircle size={17} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CÓMO SUMARSE Y TRANSPARENCIA */}
        <section id="sumarse" className="section support-section">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">
                <ShieldCheck size={15} />
                Transparencia y participación
              </span>
              <h2 className="section-title">
                Muchas formas de ser parte de las rutas nocturnas.
              </h2>
            </div>

            <div className="support-grid">
              <article className="support-card reveal">
                <span className="support-icon">
                  <ShieldCheck size={22} />
                </span>
                <h3>50% garantizado a la calle</h3>
                <p>
                  La mitad de cada ganancia obtenida se invierte exclusivamente
                  en ingredientes frescos, bebidas calientes y empaques para
                  nuestras salidas.
                </p>
              </article>

              <article className="support-card reveal delay-1">
                <span className="support-icon">
                  <Users size={22} />
                </span>
                <h3>Voluntariado en cocina o ruta</h3>
                <p>
                  Puedes sumarte ayudando a empacar alimentos al caer la tarde o
                  acompañándonos a repartir en los recorridos nocturnos.
                </p>
              </article>

              <article className="support-card reveal delay-2">
                <span className="support-icon">
                  <Clock size={22} />
                </span>
                <h3>Presencia todo el año</h3>
                <p>
                  El hambre no espera fechas especiales. Mantenemos nuestras
                  jornadas de manera constante en temporadas de lluvia y frío.
                </p>
              </article>
            </div>

            <div className="cta-banner reveal">
              <div className="cta-banner-text">
                <h3>
                  ¿Quieres sumarte como voluntario, donar insumos o encargar un
                  desayuno con propósito?
                </h3>
                <p>
                  Escríbenos directamente. Nos encantará contarte cómo funciona
                  la organización y cuándo es nuestra próxima salida.
                </p>
              </div>
              <div className="cta-banner-actions">
                <a
                  href={whatsappLink(
                    `Hola ${BRAND_NAME}, quiero conocer cómo puedo apoyar su labor benéfica.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-night"
                >
                  <MessageCircle size={18} />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#inicio" className="brand">
                <span className="brand-mark" aria-hidden="true">
                  <Sun size={18} />
                </span>
                <span>{BRAND_NAME}</span>
              </a>
              <p style={{ maxWidth: 360, marginTop: 12 }}>
                Iniciativa social sin ánimo de lucro dedicada a transformar
                desayunos sorpresa en alimento caliente y digno para habitantes
                de calle durante las noches.
              </p>
            </div>

            <div>
              <h4>Secciones</h4>
              <ul>
                <li>
                  <a href="#proposito">Modelo 50/50</a>
                </li>
                <li>
                  <a href="#labor-nocturna">Labor nocturna</a>
                </li>
                <li>
                  <a href="#desayunos">Desayunos con propósito</a>
                </li>
                <li>
                  <a href="#sumarse">Cómo apoyar</a>
                </li>
              </ul>
            </div>

            <div>
              <h4>Contacto</h4>
              <ul>
                <li>Colombia</li>
                <li>{CONTACT_EMAIL}</li>
                <li>Instagram: {INSTAGRAM_HANDLE}</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>{BRAND_NAME} · Organización social</span>
            <span>Un detalle al amanecer, un abrigo en la noche</span>
          </div>
        </div>
      </footer>
    </>
  );
}
