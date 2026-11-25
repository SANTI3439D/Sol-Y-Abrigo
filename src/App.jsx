import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Gift,
  Heart,
  MapPin,
  Menu,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Utensils,
  X,
} from "lucide-react";

const BRAND_NAME = "Sol & Abrigo";

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
      {/* TOPBAR */}
      <header className="topbar">
        <div className="container topbar-inner">
          <a href="#inicio" className="brand">
            <span className="brand-badge" aria-hidden="true">
              <Sun size={18} />
            </span>
            <span>{BRAND_NAME}</span>
          </a>

          <nav className="topbar-nav" aria-label="Navegación principal">
            <a href="#modelo">El propósito</a>
            <a href="#labor-nocturna">Labor nocturna</a>
            <a href="#manifiesto">Nuestro compromiso</a>
            <a href="#como-ayuda">Cómo funciona la ayuda</a>
          </nav>

          <div className="topbar-actions">
            <button
              type="button"
              className="mobile-menu-btn"
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
              El propósito 50/50
            </a>
            <a href="#labor-nocturna" onClick={() => setMobileOpen(false)}>
              Labor nocturna
            </a>
            <a href="#manifiesto" onClick={() => setMobileOpen(false)}>
              Nuestro compromiso
            </a>
            <a href="#como-ayuda" onClick={() => setMobileOpen(false)}>
              Cómo funciona la ayuda
            </a>
          </div>
        )}
      </header>

      <main>
        {/* HERO CENTRADO + PUENTE VISUAL */}
        <section id="inicio" className="hero-centered">
          <div className="container">
            <div className="hero-text-center reveal">
              <span className="pill-kicker">
                <Sparkles size={15} />
                Organización social · Desayunos sorpresa con propósito
              </span>
              <h1 className="hero-headline">
                Detalles que celebran la vida en la mañana,{" "}
                <em>cenas que abrigan</em> la calle en la noche.
              </h1>
              <p className="hero-subcopy">
                En <strong>{BRAND_NAME}</strong> elaboramos desayunos sorpresa
                y detalles para fechas especiales con un fin claro: destinar{" "}
                <strong>la mitad de todas las ganancias</strong> a preparar y
                entregar alimento caliente a habitantes de calle.
              </p>

              <div className="hero-buttons">
                <a href="#labor-nocturna" className="btn btn-coral">
                  Conocer nuestra labor nocturna
                  <ArrowRight size={17} />
                </a>
                <a href="#modelo" className="btn btn-indigo-outline">
                  El modelo 50/50
                </a>
              </div>
            </div>

            {/* Puente visual: El detalle de regalo vs La cena caliente */}
            <div className="bridge-grid">
              <div className="bridge-card reveal">
                <img
                  src="https://images.unsplash.com/photo-1764385827253-3d0a5eb813fe?auto=format&fit=crop&w=1200&q=80"
                  alt="Caja de regalo sorpresa con moño dorado para celebraciones"
                />
                <div className="bridge-caption">
                  <span className="bridge-badge bridge-badge--coral">
                    <Gift size={13} />
                    En la mañana · El detalle sorpresa
                  </span>
                  <h3>Cumpleaños, aniversarios y fechas especiales</h3>
                  <p>
                    Cada desayuno sorpresa personalizado financia de forma
                    directa nuestra cocina solidaria.
                  </p>
                </div>
              </div>

              <div className="bridge-card reveal delay-1">
                <img
                  src="https://images.unsplash.com/photo-1761936763596-4bcb3c7a22e7?auto=format&fit=crop&w=1200&q=80"
                  alt="Plato caliente de comida recién preparada para entregar en la noche"
                />
                <div className="bridge-caption">
                  <span className="bridge-badge bridge-badge--gold">
                    <Moon size={13} />
                    En la noche · La misión real
                  </span>
                  <h3>50% de las ganancias convertidas en cenas</h3>
                  <p>
                    Salimos al caer la noche a compartir comida recién hecha,
                    bebida caliente y trato humano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LÍNEA DE TIEMPO 50/50 */}
        <section id="modelo" className="section section-ice">
          <div className="container">
            <div className="section-title-block reveal">
              <span className="section-label">
                <Sun size={14} />
                Cómo sostenemos la causa
              </span>
              <h2 className="section-h2">
                Un puente directo entre quien regala un detalle y quien cena en
                la calle.
              </h2>
              <p className="section-p">
                En lugar de depender únicamente de colectas ocasionales, creamos
                un modelo autosostenible donde el cariño de una celebración
                sostiene de forma constante las rutas de la noche.
              </p>
            </div>

            <div className="timeline-flow">
              <article className="timeline-node reveal">
                <div className="node-circle">01</div>
                <h3>Alguien encarga un desayuno sorpresa</h3>
                <p>
                  Una persona elige enviar un detalle con globos, tarjeta y
                  dedicatoria especial para sorprender a alguien que ama en la
                  mañana.
                </p>
              </article>

              <article className="timeline-node reveal delay-1">
                <div className="node-circle node-circle--coral">50%</div>
                <h3>Destinamos la mitad de la ganancia</h3>
                <p>
                  De manera fija, la mitad del beneficio se separa para comprar
                  granos, proteína, verduras, panela y empaques térmicos.
                </p>
              </article>

              <article className="timeline-node reveal delay-2">
                <div className="node-circle node-circle--gold">
                  <Moon size={20} />
                </div>
                <h3>Preparamos y repartimos en la noche</h3>
                <p>
                  Cocinamos al caer la tarde y recorremos distintos puntos de la
                  ciudad entregando alimento caliente y compañía respetuosa.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ZONA NOCTURNA (EL CORAZÓN DE LA PÁGINA) */}
        <section id="labor-nocturna" className="night-indigo">
          <div className="container">
            <div className="section-title-block reveal">
              <span className="section-label">
                <Moon size={14} />
                Nuestra razón de existir
              </span>
              <h2 className="section-h2">
                Visibilizar la noche con dignidad, nunca como espectáculo.
              </h2>
              <p className="section-p">
                Cuando la ciudad baja las persianas, salimos a caminar los
                andenes y puentes. Creemos que nadie debería sentirse invisible
                ni cenar sobras frías.
              </p>
            </div>

            {/* EDITAR: Cifras fijas de impacto */}
            <div className="impact-numbers">
              <div className="impact-box reveal">
                <div className="impact-big">3.450+</div>
                <p>Cenas calientes entregadas en mano durante la noche</p>
              </div>
              <div className="impact-box reveal delay-1">
                <div className="impact-big">168</div>
                <p>Rutas nocturnas realizadas en días de lluvia o frío</p>
              </div>
              <div className="impact-box reveal delay-2">
                <div className="impact-big">50%</div>
                <p>De las ganancias de cada detalle destinado a la cocina</p>
              </div>
              <div className="impact-box reveal delay-2">
                <div className="impact-big">14</div>
                <p>Sectores acompañados con presencia constante</p>
              </div>
            </div>

            {/* Crónica destacada con foto + 2 crónicas debajo */}
            {/* EDITAR: Historias reales de la organización */}
            <article className="featured-chronicle reveal">
              <div className="featured-chronicle-img">
                <img
                  src="https://images.unsplash.com/photo-1634213672726-ce9c6acb91c2?auto=format&fit=crop&w=1200&q=80"
                  alt="Sopa caliente y pan servidos con cuidado"
                />
              </div>
              <div className="featured-chronicle-body">
                <span className="zone-tag">
                  <MapPin size={14} />
                  Crónica destacada · Ruta Centro (9:30 p.m.)
                </span>
                <h3>El termo de aguapanela y el nombre propio</h3>
                <p>
                  Aquella noche llovía fuerte cuando don Ernesto nos vio doblar
                  la esquina. No preguntó qué traíamos en las cajas; preguntó si
                  recordábamos cómo se llamaba. Entendimos entonces que el
                  abrigo empieza llamando a cada persona por su nombre y
                  sentándonos a conversar cinco minutos sin prisa.
                </p>
                <span className="raciones-chip">
                  45 cenas calientes esa noche
                </span>
              </div>
            </article>

            <div className="two-chronicles">
              <article className="chronicle-card reveal">
                <div>
                  <span className="zone-tag">
                    <MapPin size={14} />
                    Ruta Terminal · 10:40 p.m.
                  </span>
                  <h4>Un cumpleaños de día que abrigó la madrugada</h4>
                  <p>
                    Un sábado entregamos seis detalles sorpresa de aniversario y
                    cumpleaños por la mañana. La mitad de esas ganancias llenó
                    dos ollas grandes de sancocho caliente y pan fresco para
                    quienes dormían cerca de los puentes.
                  </p>
                </div>
                <span className="raciones-chip">38 cenas + bebida caliente</span>
              </article>

              <article className="chronicle-card reveal delay-1">
                <div>
                  <span className="zone-tag">
                    <MapPin size={14} />
                    Cocina Solidaria · 7:15 p.m.
                  </span>
                  <h4>La regla de cocinar como para nuestra casa</h4>
                  <p>
                    Quien habita la calle suele recibir sobras frías. En{" "}
                    {BRAND_NAME} ningún plato sale hacia la ruta si nosotros
                    mismos no nos sentaríamos con gusto a cenarlo esa noche.
                  </p>
                </div>
                <span className="raciones-chip">60 raciones recién hechas</span>
              </article>
            </div>
          </div>
        </section>

        {/* MANIFIESTO Y COMPROMISO */}
        <section id="manifiesto" className="section">
          <div className="container manifesto-split">
            <div className="manifesto-letter reveal">
              <span className="section-label">
                <Heart size={14} />
                Por qué no somos una tienda más
              </span>
              <blockquote>
                “Creemos que la solidaridad no tiene que esperar a diciembre ni
                depender de la lástima. Un detalle que alegra a quien amas puede
                ser, esa misma noche, el plato caliente de alguien que nadie
                mira.”
              </blockquote>
              <p>
                Por eso esta página no busca mostrarte un catálogo comercial,
                sino abrirte la puerta a la historia real que sucede detrás de
                cada desayuno sorpresa que preparamos.
              </p>
            </div>

            <div className="principles-list">
              <div className="principle-item reveal">
                <span className="principle-icon">
                  <ShieldCheck size={20} />
                </span>
                <div>
                  <h3>Sin cámaras ni exposición invasiva</h3>
                  <p>
                    Protegemos la identidad y la dignidad de las personas
                    habitantes de calle. Ayudamos desde el respeto, no para
                    grabar contenido viral.
                  </p>
                </div>
              </div>

              <div className="principle-item reveal delay-1">
                <span className="principle-icon">
                  <Utensils size={20} />
                </span>
                <div>
                  <h3>Alimento fresco y balanceado</h3>
                  <p>
                    Cocinamos cada jornada con ingredientes del día, porciones
                    generosas y bebidas calientes que ayuden a sobrellevar el
                    frío nocturno.
                  </p>
                </div>
              </div>

              <div className="principle-item reveal delay-2">
                <span className="principle-icon">
                  <Check size={20} />
                </span>
                <div>
                  <h3>Transparencia del 50% en cada detalle</h3>
                  <p>
                    La mitad de las ganancias de nuestros detalles sorpresa se
                    destina de forma intacta a insumos, cocina y logística de
                    las salidas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CÓMO SE HACE POSIBLE (INFORMATIVO, SIN CONTACTO) */}
        <section id="como-ayuda" className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="support-banner reveal">
              <div className="support-banner-top">
                <span
                  className="section-label"
                  style={{ color: "#f4a926", marginBottom: 8 }}
                >
                  <Users size={14} />
                  Sostenibilidad comunitaria
                </span>
                <h2>Así se mantiene encendida la cocina cada noche</h2>
                <p>
                  Detrás de cada jornada nocturna hay una red de pequeños gestos
                  cotidianos que permiten que la olla no se apague.
                </p>
              </div>

              <div className="support-ways">
                <div className="way-box">
                  <h3>1. Detalles con propósito</h3>
                  <p>
                    Cada desayuno sorpresa de cumpleaños, grado o aniversario
                    aporta automáticamente la mitad de su ganancia neta al fondo
                    de cenas nocturnas.
                  </p>
                </div>

                <div className="way-box">
                  <h3>2. Aportes en insumos</h3>
                  <p>
                    Alimentos no perecederos como arroz, lentejas, fríjoles,
                    panela, chocolate y recipientes térmicos amplían el alcance
                    de cada recorrido.
                  </p>
                </div>

                <div className="way-box">
                  <h3>3. Manos voluntarias</h3>
                  <p>
                    Personas comprometidas dedican sus tardes a preparar los
                    alimentos desde cero y sus noches a compartirlos con respeto
                    en la ciudad.
                  </p>
                </div>
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
                <span className="brand-badge" aria-hidden="true">
                  <Sun size={18} />
                </span>
                <span>{BRAND_NAME}</span>
              </a>
              <p style={{ maxWidth: 420, marginTop: 12 }}>
                Iniciativa social dedicada a transformar desayunos sorpresa y
                detalles de regalo en alimento caliente y compañía digna para
                habitantes de calle en las noches.
              </p>
            </div>

            <div>
              <h4>Recorrido</h4>
              <ul>
                <li>
                  <a href="#modelo">Cómo funciona el 50/50</a>
                </li>
                <li>
                  <a href="#labor-nocturna">Labor nocturna y crónicas</a>
                </li>
                <li>
                  <a href="#manifiesto">Nuestro compromiso</a>
                </li>
                <li>
                  <a href="#como-ayuda">Cómo se sostiene la labor</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>{BRAND_NAME} · Organización social</span>
            <span>Detalles que celebran, cenas que abrigan</span>
          </div>
        </div>
      </footer>
    </>
  );
}
