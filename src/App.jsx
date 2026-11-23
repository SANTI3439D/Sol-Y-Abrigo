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
  ShieldCheck,
  Sun,
  Users,
  Utensils,
  X,
} from "lucide-react";

/* EDITAR: Datos principales de Sol & Abrigo */
const BRAND_NAME = "Sol & Abrigo";
const WHATSAPP_NUMBER = "573000000000"; // Número con código de país sin '+'
const INSTAGRAM_HANDLE = "@solyabrigo.org";
const CONTACT_EMAIL = "contacto@solyabrigo.org";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
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
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* MASTHEAD EDITORIAL */}
      <header className="masthead">
        <div className="container masthead-inner">
          <a href="#inicio" className="brand">
            <span className="brand-emblem" aria-hidden="true">
              <Sun size={18} />
            </span>
            <span>{BRAND_NAME}</span>
          </a>

          <nav className="masthead-nav" aria-label="Navegación principal">
            <a href="#modelo">El modelo 50/50</a>
            <a href="#nocturna">Labor nocturna</a>
            <a href="#desayunos">Desayunos</a>
            <a href="#sumarse">Cómo apoyar</a>
          </nav>

          <div className="masthead-actions">
            <a
              href={whatsappLink(
                `Hola ${BRAND_NAME}, quiero conocer más o apoyar su labor nocturna.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-forest btn-sm"
            >
              Apoyar la causa
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              className="mobile-btn"
              aria-label="Abrir menú"
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-panel">
            <a href="#modelo" onClick={() => setMobileOpen(false)}>
              El modelo 50/50
            </a>
            <a href="#nocturna" onClick={() => setMobileOpen(false)}>
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
                `Hola ${BRAND_NAME}, me gustaría apoyar su labor.`
              )}
              target="_blank"
              rel="noreferrer"
              className="btn btn-forest"
              onClick={() => setMobileOpen(false)}
            >
              Escribir por WhatsApp
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO ARQUITECTÓNICO */}
        <section id="inicio" className="hero">
          <div className="container hero-layout">
            <div className="hero-copy reveal">
              <span className="hero-tag">
                <Sun size={14} />
                Organización benéfica · Desayunos con sentido
              </span>
              <h1 className="hero-title">
                Regala un <em>sol</em> al despertar, comparte abrigo en la
                noche.
              </h1>
              <p className="hero-lead">
                En <strong>{BRAND_NAME}</strong> preparamos desayunos sorpresa
                artesanales con un único objetivo: destinar{" "}
                <strong>la mitad de todas nuestras ganancias</strong> a cocinar
                y entregar cenas calientes a personas habitantes de calle.
              </p>

              <div className="hero-cta-row">
                <a href="#nocturna" className="btn btn-forest">
                  Ver nuestra labor nocturna
                  <ArrowRight size={17} />
                </a>
                <a href="#modelo" className="btn btn-outline">
                  Cómo funciona el 50/50
                </a>
              </div>

              <div className="hero-note">
                <ShieldCheck size={18} color="#254d3e" />
                <span>
                  Proyecto social autosostenible · Alimento recién hecho y trato
                  digno en cada ruta nocturna.
                </span>
              </div>
            </div>

            {/* Bento derecho: Fotografía + Ficha Verde Bosque */}
            <div className="hero-bento reveal delay-1">
              <div className="hero-bento-media">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80"
                  alt="Pan artesanal recién horneado para sostener las rutas nocturnas"
                />
              </div>

              {/* EDITAR: Cifras principales de resumen */}
              <div className="hero-bento-ledger">
                <div className="ledger-item">
                  <div className="ledger-value">50%</div>
                  <div className="ledger-label">
                    De las ganancias va directo a cocina nocturna
                  </div>
                </div>
                <div className="ledger-item">
                  <div className="ledger-value">+3.450</div>
                  <div className="ledger-label">
                    Cenas calientes entregadas en calle
                  </div>
                </div>
                <div className="ledger-item">
                  <div className="ledger-value">168</div>
                  <div className="ledger-label">
                    Rutas nocturnas recorridas todo el año
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN 50/50 ASIMÉTRICA */}
        <section id="modelo" className="section">
          <div className="container split-mission">
            <div className="ratio-panel reveal">
              <span
                className="kicker"
                style={{ color: "#f7e9cd", marginBottom: 4 }}
              >
                <Heart size={14} />
                Nuestro motor social
              </span>
              <h3>Una balanza justa entre quien celebra y quien necesita.</h3>
              <p>
                No dependemos solo de donaciones esporádicas. Diseñamos un
                modelo donde cada detalle que regalas en la mañana sostiene de
                manera permanente los ingredientes y empaques de la noche.
              </p>

              <div className="ratio-bar-box">
                <div className="ratio-bar" aria-hidden="true">
                  <div className="ratio-half-morning" />
                  <div className="ratio-half-night" />
                </div>
                <div className="ratio-legend">
                  <span>
                    <span
                      className="legend-dot"
                      style={{ background: "#f7e9cd" }}
                    />
                    50% Sostenibilidad diaria
                  </span>
                  <span>
                    <span
                      className="legend-dot"
                      style={{ background: "#f0a840" }}
                    />
                    50% Alimento nocturno
                  </span>
                </div>
              </div>
            </div>

            <div className="reveal delay-1">
              <span className="kicker">
                <Coffee size={14} />
                Del amanecer a la calle
              </span>
              <h2 className="section-heading">
                Así viaja tu apoyo en un solo día.
              </h2>

              <div className="editorial-steps">
                <div className="editorial-step-row">
                  <span className="editorial-step-num">01</span>
                  <div>
                    <h4>Alguien regala un desayuno en la mañana</h4>
                    <p>
                      Una familia, pareja o empresa encarga una de nuestras
                      cajas artesanales para celebrar una fecha especial.
                    </p>
                  </div>
                </div>

                <div className="editorial-step-row">
                  <span className="editorial-step-num">02</span>
                  <div>
                    <h4>Apartamos el 50% de la ganancia neta</h4>
                    <p>
                      Ese fondo se destina íntegramente a comprar proteína,
                      granos, verduras frescas, panela y recipientes térmicos
                      para la jornada nocturna.
                    </p>
                  </div>
                </div>

                <div className="editorial-step-row">
                  <span className="editorial-step-num">03</span>
                  <div>
                    <h4>Cocinamos y salimos al caer la noche</h4>
                    <p>
                      Preparar comida fresca toma toda la tarde. Al anochecer
                      salimos a recorrer sectores clave entregando platos
                      calientes, bebida y escucha respetuosa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ZONA NOCTURNA (PROTAGONISTA) */}
        <section id="nocturna" className="hearth-zone">
          <div className="container">
            <div className="hearth-header reveal">
              <span className="kicker">
                <Moon size={15} />
                Cuando cae el sol
              </span>
              <h2 className="section-heading">
                Visibilizar a quienes habitan la calle con respeto y calor de
                hogar.
              </h2>
              <p className="section-desc">
                Salimos sin cámaras invasivas ni discursos asistencialistas.
                Creemos que un plato caliente servido con amabilidad devuelve
                parte de la dignidad que la indiferencia suele arrebatar.
              </p>
            </div>

            {/* EDITAR: Cifras de impacto en formato informe */}
            <div className="swiss-metrics reveal">
              <div className="swiss-metric-cell">
                <div className="swiss-metric-num">3.450+</div>
                <p className="swiss-metric-text">
                  Cenas calientes cocinadas desde cero y entregadas en mano
                </p>
              </div>
              <div className="swiss-metric-cell">
                <div className="swiss-metric-num">168</div>
                <p className="swiss-metric-text">
                  Jornadas nocturnas realizadas en lluvia o noches frías
                </p>
              </div>
              <div className="swiss-metric-cell">
                <div className="swiss-metric-num">14</div>
                <p className="swiss-metric-text">
                  Sectores de la ciudad acompañados semana tras semana
                </p>
              </div>
              <div className="swiss-metric-cell">
                <div className="swiss-metric-num">100%</div>
                <p className="swiss-metric-text">
                  Alimentos preparados el mismo día con ingredientes frescos
                </p>
              </div>
            </div>

            {/* Crónicas horizontales por zona y hora */}
            <div className="chronicles-title-row reveal">
              <div>
                <span className="kicker">
                  <Utensils size={14} />
                  Bitácora de rutas
                </span>
                <h3>Historias reales de nuestras salidas nocturnas</h3>
              </div>
            </div>

            <div className="chronicle-list">
              {/* EDITAR: Crónicas reales de la organización */}
              <article className="chronicle-row reveal">
                <div className="chronicle-meta">
                  <span className="chronicle-zone">
                    <MapPin size={14} />
                    Ruta Centro
                  </span>
                  <span className="chronicle-time">9:30 p.m. · Lluvia</span>
                </div>
                <div className="chronicle-body">
                  <h4>El termo de aguapanela y el nombre propio</h4>
                  <p>
                    Don Ernesto nos esperaba bajo el alero de una esquina. No
                    preguntó qué traíamos en las cajas; preguntó si recordábamos
                    cómo se llamaba. Esa noche aprendimos que acompañar empieza
                    mirando a los ojos y conversando sin afán.
                  </p>
                </div>
                <div className="chronicle-badge">45 cenas entregadas</div>
              </article>

              <article className="chronicle-row reveal delay-1">
                <div className="chronicle-meta">
                  <span className="chronicle-zone">
                    <MapPin size={14} />
                    Ruta Terminal
                  </span>
                  <span className="chronicle-time">10:40 p.m. · Sábado</span>
                </div>
                <div className="chronicle-body">
                  <h4>Celebraciones de día que abrigan la madrugada</h4>
                  <p>
                    Aquel sábado entregamos seis desayunos de cumpleaños en la
                    mañana. La mitad de esas ganancias llenó dos ollas enteras de
                    sancocho caliente y pan fresco para quienes pernoctaban
                    cerca de los puentes.
                  </p>
                </div>
                <div className="chronicle-badge">38 cenas + bebida</div>
              </article>

              <article className="chronicle-row reveal delay-2">
                <div className="chronicle-meta">
                  <span className="chronicle-zone">
                    <MapPin size={14} />
                    Cocina Solidaria
                  </span>
                  <span className="chronicle-time">7:15 p.m. · Preparación</span>
                </div>
                <div className="chronicle-body">
                  <h4>La regla de cocinar como para casa</h4>
                  <p>
                    Quien vive en la calle suele recibir sobras frías. En{" "}
                    {BRAND_NAME} ningún plato sale hacia la ruta si nosotros
                    mismos no nos sentaríamos con gusto a cenarlo esa noche.
                  </p>
                </div>
                <div className="chronicle-badge">60 raciones frescas</div>
              </article>
            </div>
          </div>
        </section>

        {/* MUESTRA DE DESAYUNOS EN TARJETAS HORIZONTALES */}
        <section id="desayunos" className="section">
          <div className="container">
            <div className="showcase-header reveal">
              <span className="kicker">
                <Sun size={14} />
                El vehículo que sostiene la labor
              </span>
              <h2 className="section-heading">
                Desayunos artesanales pensados para multiplicar cenas.
              </h2>
              <p className="section-desc">
                No funcionamos como un comercio tradicional: elaboramos estas
                opciones bajo encargo únicamente para financiar nuestra cocina de
                la noche.
              </p>
            </div>

            <div className="horizontal-cards">
              <article className="h-card reveal">
                <div className="h-card-media">
                  <img
                    src="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80"
                    alt="Desayuno Sol de Mañana"
                  />
                </div>
                <div className="h-card-content">
                  <div>
                    <div className="h-card-top">
                      <h3>Caja Sol de Mañana</h3>
                      <span className="impact-pill-green">
                        <Moon size={13} />
                        Financia 3 cenas nocturnas
                      </span>
                    </div>
                    <p>
                      Pan artesanal de masa madre, fruta fresca de temporada,
                      café de origen y tarjeta explicando el impacto solidario
                      que acaba de generar tu detalle.
                    </p>
                  </div>
                  <div className="h-card-footer">
                    <span className="h-card-detail">
                      Elaborado bajo encargo previo · 50% directo a ruta
                    </span>
                    <a
                      href={whatsappLink(
                        `Hola ${BRAND_NAME}, me gustaría apoyar su causa encargando la Caja Sol de Mañana.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Apoyar con esta opción
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
              </article>

              <article className="h-card reveal delay-1">
                <div className="h-card-media">
                  <img
                    src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?auto=format&fit=crop&w=900&q=80"
                    alt="Desayuno Raíz y Abrigo"
                  />
                </div>
                <div className="h-card-content">
                  <div>
                    <div className="h-card-top">
                      <h3>Desayuno Raíz y Abrigo</h3>
                      <span className="impact-pill-green">
                        <Moon size={13} />
                        Financia 4 cenas + bebida caliente
                      </span>
                    </div>
                    <p>
                      Desayuno completo preparado al amanecer, jugo natural
                      prensado y repostería casera. Su aporte cubre cuatro
                      raciones nocturnas con bebida caliente.
                    </p>
                  </div>
                  <div className="h-card-footer">
                    <span className="h-card-detail">
                      Ideal para cumpleaños o agradecimientos con propósito
                    </span>
                    <a
                      href={whatsappLink(
                        `Hola ${BRAND_NAME}, quiero apoyar su labor encargando el Desayuno Raíz y Abrigo.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Apoyar con esta opción
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
              </article>

              <article className="h-card reveal delay-2">
                <div className="h-card-media">
                  <img
                    src="https://images.unsplash.com/photo-1522322420883-600684d7f9f1?auto=format&fit=crop&w=900&q=80"
                    alt="Desayuno Doble Sol"
                  />
                </div>
                <div className="h-card-content">
                  <div>
                    <div className="h-card-top">
                      <h3>Mesa Doble Sol</h3>
                      <span className="impact-pill-green">
                        <Moon size={13} />
                        Financia 6 cenas nocturnas
                      </span>
                    </div>
                    <p>
                      Caja pensada para compartir entre dos en la mañana
                      mientras garantizas alimento recién cocinado para seis
                      personas en situación de calle.
                    </p>
                  </div>
                  <div className="h-card-footer">
                    <span className="h-card-detail">
                      Nuestra opción de mayor alcance social
                    </span>
                    <a
                      href={whatsappLink(
                        `Hola ${BRAND_NAME}, quiero apoyar su causa encargando la opción Mesa Doble Sol.`
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Apoyar con esta opción
                      <MessageCircle size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* CÓMO SUMARSE */}
        <section id="sumarse" className="section section--mist">
          <div className="container">
            <div className="reveal" style={{ maxWidth: 660 }}>
              <span className="kicker">
                <Users size={14} />
                Participación ciudadana
              </span>
              <h2 className="section-heading">
                Tres formas sencillas de hacer parte de {BRAND_NAME}.
              </h2>
              <p className="section-desc">
                Toda ayuda suma para que la cocina no se apague cuando llega la
                noche.
              </p>
            </div>

            <div className="join-grid">
              <article className="join-card reveal">
                <span className="join-icon">
                  <Coffee size={20} />
                </span>
                <h3>Regala con propósito</h3>
                <p>
                  Cuando tengas una fecha especial, elige un desayuno cuya
                  ganancia alimente directamente nuestras salidas nocturnas.
                </p>
              </article>

              <article className="join-card reveal delay-1">
                <span className="join-icon">
                  <Utensils size={20} />
                </span>
                <h3>Dona alimentos o empaques</h3>
                <p>
                  Recibimos aportes de arroz, granos, panela, proteína y
                  recipientes térmicos para ampliar la cobertura de cada ruta.
                </p>
              </article>

              <article className="join-card reveal delay-2">
                <span className="join-icon">
                  <Clock size={20} />
                </span>
                <h3>Camina en la ruta nocturna</h3>
                <p>
                  Súmate como voluntario ayudando en cocina al caer la tarde o
                  acompañándonos a repartir las cenas en la ciudad.
                </p>
              </article>
            </div>

            <div className="closing-band reveal">
              <div>
                <h3>¿Conversamos sobre la próxima ruta nocturna?</h3>
                <p>
                  Escríbenos directamente por WhatsApp para sumarte como
                  voluntario, donar insumos o encargar un desayuno con propósito.
                </p>
              </div>
              <a
                href={whatsappLink(
                  `Hola ${BRAND_NAME}, quiero conocer cómo sumarme o apoyar su labor.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ember"
              >
                <MessageCircle size={18} />
                Escribir por WhatsApp
              </a>
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
                <span className="brand-emblem" aria-hidden="true">
                  <Sun size={18} />
                </span>
                <span>{BRAND_NAME}</span>
              </a>
              <p style={{ maxWidth: 360, marginTop: 10 }}>
                Organización benéfica dedicada a transformar desayunos sorpresa
                en cenas calientes y compañía digna para habitantes de calle.
              </p>
            </div>

            <div>
              <h4>Explorar</h4>
              <ul>
                <li>
                  <a href="#modelo">El modelo 50/50</a>
                </li>
                <li>
                  <a href="#nocturna">Labor nocturna</a>
                </li>
                <li>
                  <a href="#desayunos">Desayunos con sentido</a>
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
            <span>{BRAND_NAME} · Labor social nocturna</span>
            <span>Un sol al despertar, un abrigo en la noche</span>
          </div>
        </div>
      </footer>
    </>
  );
}
