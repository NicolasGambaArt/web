/* ============================================================
   modal.js — Ventanas emergentes de proyecto
   Diseño basado en el sistema Stitch · Estética brutalista
   ============================================================ */

'use strict';

/* ─── DATOS DE PROYECTOS ──────────────────────────────────── */
const PROYECTOS = {

  'obra-inquebrantables': {
    titulo: 'Gira Inquebrantables — Filarmónica Joven de Colombia',
    subtitulo: null,
    colectivo: 'Metanoia Colectivo',
    imagen: 'imagenes/home/main/Inquebrantables_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Inquebrantables_main.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5530.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5544.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5547.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5671.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5842-Enhanced-NR.webp', tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5847.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5875.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/inquebrantables/_DSF5982.webp',          tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2024'],
      [
      'Artistas','Colectivo Metanoia: Nicolás Gamba, Julián Angarita, Sergio Mantilla / Filarmónica Joven de Colombia / Dir. Lina González-Granados / Fund. Bolívar Davivienda'],
      [
      'Medio','Performance multimedia · Live Vj set · Videomapping · Instalación multimedia'],
      [
      'Técnica','Proyección gran formato, animación 2D/3D, modelado 3D, fotogrametría, pointcloud, TouchDesigner, sensores Kinect'],
      [
      'Lugar','Auditorio León de Greiff (Bogotá), Teatro Metropolitano (Medellín), Teatro los Fundadores (Manizales), Teatro Santander (Bucaramanga), Teatro Santiago Londoño (Pereira), Teatro Municipal Enrique Buenaventura (Cali)']],
    descripcion: `Gira Inquebrantables es una obra interdisciplinar multimedia concebida por el colectivo Metanoia — conformado por los artistas colombianos Nicolás Gamba, Julián Angarita y Sergio Mantilla — en colaboración con la Filarmónica Joven de Colombia como propuesta visual para la 2024, producida en alianza con la Fundación Bolívar Davivienda. La gira reunió a más de 91 músicos bajo la dirección de Lina González-Granados, directora residente de la Ópera de Los Ángeles, en la interpretación de la Sinfonía N.° 2 de Rachmaninov en algunos de los principales teatros del país.

El marco conceptual de la obra parte de la dualidad simbólica entre luz y oscuridad — entendidas no como opuestos irreconciliables sino como fuerzas que se complementan y generan. Tomando como punto de partida la crisis creativa que vivió Rachmaninov tras el fracaso de su Primera Sinfonía en 1897 y su posterior renacer a través de la psicoterapia, la obra propone un recorrido visual estructurado en cuatro movimientos: Caída, Chispa, Mente y Metanoia — el momento de transformación profunda en el que el ser humano logra reconciliarse con su propia sombra, en el sentido jungiano del término.

Técnicamente, la instalación integró video mapping interactivo proyectado sobre telas chifón suspendidas, una instalación de 20 tubos de luz LED programados en TouchDesigner, y composiciones visuales generadas a partir de modelado 3D, fotogrametría, pointcloud y animación, con un componente reactivo que capturaba en tiempo real los gestos de la directora de orquesta mediante sensores Kinect — haciendo del movimiento corporal un gesto pictórico.`
  },

  'obra-ascii': {
    titulo: 'ASCII Sound Experience + Ebra',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Julián Angarita',
    imagen: 'imagenes/home/main/ASCII_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/ASCII_main.webp',                        tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0006.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0007.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0008.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0009.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0011.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0012.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0013.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0014.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/ascii/IMG-20250826-WA0015.webp',         tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2025 – Presente'],
      [
      'Artistas','Nicolás Gamba, Julián Angarita'],
      [
      'Medio','Live Vj set (Fulldome) · Performance multimedia · Videomapping interactivo'],
      [
      'Técnica','Programación generativa, traducción de frecuencias sonoras, fulldome 360°, geometría sagrada'],
      [
      'Lugar','Planetario de Bogotá']],
    descripcion: `ASCII Sound Experience es una obra de inmersión total diseñada para el domo del Planetario de Bogotá, que funciona como un puente entre la tecnología digital de vanguardia y la sabiduría ancestral del budismo Nyingma. Inspirada en las enseñanzas del Bardo Thodol (El Libro Tibetano de los Muertos), la experiencia propone un viaje fenomenológico a través de los seis bardos o estados de transición de la conciencia: bardo de la vida (Kye-ne), del sueño (Milam), de la meditación (Samten), de la muerte (Chikhai), de la realidad(Chonyid) y del devenir o renacimiento (Sidpa).

La pieza utiliza el espacio del domo como un contenedor ritual donde la música neoclásica electroacústica guía al espectador desde la solidez de la realidad cotidiana hacia la fragmentación y posterior integración en el campo vibratorio de la luz pura. Es una exploración sobre la impermanencia y la naturaleza fractal de la mente, transformando el entorno astronómico en un espacio de introspección espiritual.

Nicolás Gamba y Julián Angarita son los artistas y desarrolladores del ecosistema visual de la obra. Mediante programación generativa, traducción de frecuencias sonoras y la mística oriental en atmósferas de psicodelia orgánica y geometría sagrada, utilizando la tecnología Fulldome no solo como un soporte de proyección, sino como un vehículo fenomenológico para expandir la percepción de los asistentes.`
  },

  'obra-zarigueya': {
    titulo: 'Zarigüeya — Festival Estéreo Picnic',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Julián Angarita',
    imagen: 'imagenes/home/main/Zarigueya_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Zarigueya_main.webp',                   tipo: 'img' },
      { src: 'imagenes/proyectos/zarigueya/IMG-20260331-WA0050.webp',    tipo: 'img' },
      { src: 'imagenes/proyectos/zarigueya/VID_20260331_151049_web.mp4', tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2026'],
      [
      'Artistas','Nicolás Gamba, Julián Angarita / Zarigüeya (artista musical)'],
      [
      'Medio','Live Vj set · Performance multimedia · Videomapping interactivo'],
      [
      'Técnica','Dibujo digital en vivo, video mapping'],
      [
      'Lugar','Festival Estéreo Picnic — Parque Simón Bolívar, Bogotá']],
    descripcion: `La propuesta visual para Zarigüeya en el Festival Estéreo Picnic 2026 se concibió como un diálogo orgánico entre la tradición sonora y la herramienta digital. El concepto giró en torno a la identidad musical de la artista, quien fusiona elementos de la música campesina colombiana, como la carranga, con una sensibilidad contemporánea de cantautora.

Para acompañar esta narrativa, se implementó una estación de trabajo que permitió la creación de dibujo digital en vivo sobre el escenario.`
  },

  'obra-muerte-viva': {
    titulo: 'Muerte Viva — Exposición individual',
    subtitulo: null,
    colectivo: 'Nicolás Gamba',
    imagen: 'imagenes/home/main/MuerteViva_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/MuerteViva_main.webp',                                          tipo: 'img' },
      { src: 'imagenes/proyectos/muerte-viva/Corrige_el_encuadre,_202603302325.webp',            tipo: 'img' },
      { src: 'imagenes/proyectos/muerte-viva/corrige_la_perspectiva,_202603302319.webp',         tipo: 'img' },
      { src: 'imagenes/proyectos/muerte-viva/elimina_el_aire_202603302302.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/muerte-viva/VID-20251118-WA0008_web.mp4',                       tipo: 'video' },
      { src: 'imagenes/proyectos/muerte-viva/espiritu_ (test02 )_1_web.mp4',                     tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2025'],
      [
      'Artistas','Nicolás Gamba'],
      [
      'Medio','Instalación multimedia · Dibujo'],
      [
      'Técnica','Ojo-escucha, videoarte, fotografía de objetos etnográficos'],
      [
      'Lugar','Mont, Barcelona']],
    descripcion: `Muerte Viva es un ejercicio de resistencia estética y política frente a la lógica moderna/colonial que despoja al objeto de su contexto, función y agencia para convertirlo en mercancía estática de exhibición. La exposición propone una inversión de la mirada: el objeto deja de ser un elemento pasivo para convertirse en un sujeto que interpela al espectador, un espíritu vivo.

La muestra se articula en torno a dos ejes principales:

Los dibujos Ojo-escucha representan una investigación personal del artista, quien, inmerso en diálogos con sabedores indígenas y plantas sagradas del territorio colombiano, exploró prácticas tradicionales alrededor de la palabra y la escucha. Reconociendo su posición como citadino Bogotano en la que creció ajeno a estás culturas y evidenciando el fuerte rechazo que reciben en el contexto urbano, el artista se interesó por crear formas personales que le permitieran abrir el diálogo intercultural. Así, desarrolló una técnica de dibujo-escucha en la que cada trazo y cada punto parten de la aleatoriedad y de la acción simultánea de escucha presente a su contexto y a la palabra de las personas con las que el artista se cruzó en los diferentes entornos que habitó durante el proceso de cada pieza. Dando como resultado una manifestación visual de la tensión complementaría entre individuo y colectivo conformada por un ojo/espíritu que observa de vuelta.

La pieza audiovisual Muerte Viva parte del reconocer que el objeto dentro del museo ha sido despojado de su contexto, función y agencia. En la lógica moderna/colonial, se convierte en algo estático, no replicable, cuyo valor radica en su exhibición y posesión. Exhibir es ejercer poder; en este sentido, el museo se presenta como depositario del saber, del orden y de la verdad. El objeto inmovilizado legitima una narrativa donde el Occidente moderno observa, clasifica y domina, y donde el capitalismo da paso a una mercantilización del símbolo y de la experiencia bajo la ilusión de poseer un fragmento del otro, un pedazo de lo exótico, sin realmente pertenecer a su historia.

En contraste, las imágenes de ojos, extraídas de esculturas o máscaras, restituyen la agencia perdida del objeto. El objeto mira de vuelta, invirtiendo la dirección del poder visual. El espectador ya no es quien observa pasivamente, sino quien es interpelado por la mirada del otro. Mientras el objeto en el museo representa la fijación del poder occidental —clasificar, poseer, exhibir—, los ojos actúan como actantes dinámicos que rompen esa pasividad al restituir el estatuto ontológico del objeto, vuelven a ser sujeto. Allí surge la pregunta central: ¿quién mira a quién? ¿Soy yo quien observa al otro, o el otro quien me observa a mí, desnudando mi papel en este entramado de poder, deseo y consumo?

La pieza consta de un ejercicio de registro fotográfico de las múltiples representaciones del ojo a lo largo de la historia, a partir de objetos de diferentes culturas exhibidos en varios de los museos más reconocidos a nivel global. En colaboración con la agrupación músical El Nudo, se desarrolló una pieza sonora influenciada con los sonidos de los pueblos de la selva colombiana partiendo de la relación entre la muerte y los espíritus del mundo que viven a través de ella.`
  },

  'obra-pimpina': {
    titulo: 'Pimpina Video Station',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Santiago Sánchez',
    imagen: 'imagenes/home/main/PimpinaVT_main.mp4',
    tipo: 'video',
    imagenes: [
      { src: 'imagenes/home/main/PimpinaVT_main.mp4',                                    tipo: 'video' },
      { src: 'imagenes/proyectos/pimpina/PimpinaVS_TS.webp',                             tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/_MG_3597.webp',                                 tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/_MG_3620-01.webp',                              tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/_MG_3653-03.webp',                              tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/_MG_3814.webp',                                 tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/M2U01158.MPG.00_02_26_20.Still001.webp',        tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/SELEC.00_23_12_08.Still002.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/TS foto 2.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/3.webp',                                        tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/Calero v1.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/Chumbambico.webp',                              tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/El Nube v1.webp',                               tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/Gusanin v1.webp',                               tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/Laica v1.webp',                                 tipo: 'img' },
      { src: 'imagenes/proyectos/pimpina/Opening_web.mp4',                               tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2019 – 2023'],
      [
      'Artistas','Nicolás Gamba, Santiago Sánchez'],
      [
      'Medio','Performance transmedia · Canal de comunicación · Gestión cultural'],
      [
      'Técnica','Video performance, redes sociales, máscaras'],
      [
      'Lugar','Web']],
    descripcion: `Pimpina Video Station es un performance multimedia sobre la idea de construir un canal de comunicación y plataforma audiovisual alternativa como respuesta a las dinámicas elitistas y coloniales en que se concibe el arte en Colombia — un mercado que históricamente ha operado desde circuitos cerrados de clase y lógicas coloniales donde solo ciertas formas de legitimación cultural tienen lugar. Creado por Nicolás Gamba y Santiago Sánchez, el canal estaba constituido por una serie de programas-performance de entrevistas, minidocumentales y sketches distribuidos en redes sociales, que ponían en el centro a artistas de diferentes disciplinas, nichos y contextos sociales, económicos y culturales.

Pimpina no proponía una estética fija ni una identidad estable — al contrario, su identidad era deliberadamente inestable, capaz de vestirse de los diferentes mundos que habitaba y de escuchar sin imponer una forma. Este principio se materializó en su componente performativo más visible: los presentadores y entrevistadores eran personajes construidos con máscaras de papel maché, figuras que encarnaban la posibilidad de habitar múltiples mundos simultáneamente y de circular entre escenas sin pertenecer a ninguna en exclusiva. La máscara como gesto político y poético — no como ocultamiento, sino como estrategia de presencia múltiple en una ciudad de estímulos, influencias y contradicciones superpuestas.`
  },

  'obra-sigit': {
    titulo: 'SIGIT',
    subtitulo: null,
    colectivo: 'Universidad de los Andes · Facultad de Medicina',
    imagen: 'imagenes/home/main/SIGIT_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/SIGIT_main.webp',                   tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto4.webp',                  tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto7.webp',                  tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto15.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto16.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto17.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto25.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto30.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto43.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto44.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto55.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto62.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/sigit/Foto63.webp',                 tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2021 – Presente'],
      [
      'Artistas','SIGIT (Sistemas de salud enfocado en infancias, género, interculturalidad y trópico)'],
      [
      'Medio','Investigación · Trabajo comunitario · Gestión cultural'],
      [
      'Técnica','Estrategias artístico-culturales, divulgación científica, divulgación pensamiento indígena']],
    descripcion: `SIGIT (Sistemas de salud enfocado en infancia, género, interculturalidad y trópico) es una línea de investigación de la Facultad de Medicina de la Universidad de los Andes. El grupo opera desde un modelo de determinantes sociales y desarrollo humano sostenible, trabajando en colaboración directa con comunidades locales, gobiernos y organizaciones para generar conocimiento aplicado e intervenciones efectivas en salud pública.

Nicolás Gamba integra el equipo interdisciplinario (compuesto por médicos, antropólogos, biólogos y comunicadores) en calidad de artista e investigador. Su participación se concentra en el diseño de estrategias artístico-culturales para el fortalecimiento del diálogo intercultural y la divulgación científica, médica y de los saberes ancestrales de los pueblos.`
  },

  'obra-monolito': {
    titulo: 'Monolito',
    subtitulo: null,
    colectivo: 'Nicolás Gamba · Julián Angarita · Mario Carrascal · Sara Vera · Paula Andrade',
    imagen: 'imagenes/home/main/Monolito_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Monolito_main.webp',                              tipo: 'img' },
      { src: 'imagenes/proyectos/monolito/Screenshot 2026-03-31 155524.webp',      tipo: 'img' },
      { src: 'imagenes/proyectos/monolito/Screenshot 2026-03-31 155604.webp',      tipo: 'img' },
      { src: 'imagenes/proyectos/monolito/Screenshot 2026-03-31 155638.webp',      tipo: 'img' },
      { src: 'imagenes/proyectos/monolito/Screenshot 2026-03-31 155712.webp',      tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2018'],
      [
      'Artistas','Nicolás Gamba, Julián Angarita, Mario Carrascal, Sara Vera, Paula Andrade'],
      [
      'Medio','Instalación audiovisual · Videoinstalación'],
      [
      'Reconocimientos','2.° lugar · Salón Séneca 2018'],
      [
      'Duración','2 minutos'],
      [
      'Lugar','Salón Séneca, Universidad de los Andes, Bogotá']],
    descripcion: `Monolito es una instalación audiovisual que surge del interés por los rituales indígenas del territorio colombiano y su relación espiritual con las plantas alucinógenas como presencias sagradas — carne de los dioses. A través de la proyección de video, la pieza busca aproximarse a esa zona de umbral donde lo cotidiano y lo espiritual se tocan: el momento en que una planta deja de ser materia para convertirse en mediadora entre mundos.

La obra no pretende representar ni documentar los rituales, sino construir una experiencia que evoque su lógica interna — la del tiempo suspendido, la visión expandida, el cuerpo como territorio de encuentro entre lo humano y lo no-humano. Monolito fue reconocida con el segundo lugar del Salón Séneca 2018.`
  },

  'obra-severo': {
    titulo: 'Severo Cochobiz',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Santiago Sánchez',
    imagen: 'imagenes/home/main/SeveroCochobiz_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/SeveroCochobiz_main.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/severo/_MG_5320.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/severo/_MG_5367.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/severo/_MG_5400.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/severo/_MG_5418.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/severo/_MG_5497.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/severo/Tortas-Recovered.webp',                        tipo: 'img' },
      { src: 'imagenes/proyectos/severo/2Madre.webp',                                  tipo: 'img' },
      { src: 'imagenes/proyectos/severo/3mascara.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/severo/9Rupestre.webp',                               tipo: 'img' },
      { src: 'imagenes/proyectos/severo/ELOjo2.webp',                                  tipo: 'img' },
      { src: 'imagenes/proyectos/severo/BE completa.webp',                             tipo: 'img' },
      { src: 'imagenes/proyectos/severo/Personajes fondos v3.webp',                    tipo: 'img' },
      { src: 'imagenes/proyectos/severo/Diosniño 08.webp',                             tipo: 'img' },
      { src: 'imagenes/proyectos/severo/TextureBackground v1 IG (0;00;10;20).webp',    tipo: 'img' },
      { src: 'imagenes/proyectos/severo/4OgroDemon_web.mp4',                           tipo: 'video' },
      { src: 'imagenes/proyectos/severo/Torta giratoria_web.mp4',                      tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2019 – 2021'],
      [
      'Artistas','Nicolás Gamba, Santiago Sánchez'],
      [
      'Medio','Performance transmedia · Emprendimiento artistico · Gestión cultural'],
      [
      'Técnica','Performance, programa de cocina, colaboraciones, máscaras']],
    descripcion: `Severo Cochoviz se articula como una crítica viva a las estructuras económicas que condicionan la producción del artista contemporáneo en Bogotá. El proyecto toma la forma de un emprendimiento real de pastelería para explorar la tensión entre el valor estético y el valor de mercado, situando el dinero y la subsistencia en el centro de la acción artística.

La obra opera en múltiples dimensiones: desde un programa de cocina donde los intérpretes, protegidos por máscaras, ejecutan las recetas como un acto ritual y mediático, hasta la venta física de las piezas (tortas) como objetos de consumo. El proyecto funcionó además como una plataforma colaborativa, donde las decoraciones de los productos servían de soporte para exhibir y comercializar diseños de diferentes artistas locales, democratizando el acceso al arte a través de un canal comercial cotidiano.

Severo Cochoviz no solo parodia las dinámicas del emprendimiento, sino que las habita para evidenciar la dificultad de construir una carrera sostenible en el sur global. Al adoptar las formas del capitalismo para mover arte, la propuesta desafía los circuitos tradicionales de galería, planteando que, ante la precariedad, el artista debe mutar, camuflarse y convertir la transacción económica en su propio manifiesto performático.`
  },

  'obra-ebra': {
    titulo: 'Ebra Colectivo',
    subtitulo: null,
    colectivo: 'Nicolás Gamba · Carlos Rincón · Yazmín Cortés',
    imagen: 'imagenes/home/main/Ebra_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Ebra_main.webp',                                     tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/DSC_0467-Mejorado-NR.webp',                     tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/DSC_0508-Mejorado-NR-3.webp',                   tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/_DSC5190.webp',                                  tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/_DSC5218.webp',                                  tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/_DSC5276.webp',                                  tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/_DSC5303.webp',                                  tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/FedeM Monarca ClickClack-15.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/FedeM Monarca ClickClack-46.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/FedeM Monarca ClickClack-69.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/ebra/FedeM Monarca ClickClack-125.webp',             tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2023 – Presente'],
      [
      'Artistas','Nicolás Gamba, Carlos Rincón, Yazmín Cortés'],
      [
      'Medio','Gestión cultural · Plataforma de experimentación artística · Curaduría'],
      [
      'Técnica','Gestión interdisciplinar, eventos, mambeaderos, curaduría']],
    descripcion: `Ebra es un colectivo de gestión cultural enfocado en la creación de espacios de encuentro, exposición, creación y diálogo que fortalezcan las relaciones interculturales e interdisciplinarias del territorio bogotano. Ebra teje nuevos vínculos entre la identidad fragmentada de una ciudad cuyas voces gritan, pero no siempre se escuchan. Músicos, artistas visuales, artistas escénicos, realizadores audiovisuales, diseñadores, performers, gestores culturales y creadores de distintas tradiciones y territorios se juntan para reconocerse y para crear.

Desde la acción colectiva, Ebra propone un modelo de trabajo donde disciplinas, escenas y culturas diversas convergen alrededor de un eje curatorial compartido. Sus experiencias ponen en diálogo lo ancestral y lo contemporáneo, lo análogo y lo digital, lo urbano y lo territorial — entendiendo el encuentro interdisciplinar e intercultural no como suma de partes, sino como generación de nuevos tejidos culturales que ninguna voz podría construir sola.

El colectivo se ha materializado a través de una variedad de experiencias interdisciplinares entre las cuales se encuentran: Anómala — su primer encuentro — Lanzamiento del primer Albúm de Thaissa, el evento articuló propuestas sonoras, visuales, performativas y de diseño local alrededor del diálogo entre disciplinas. El Abrazo, exploración de la música popular de Abya Yala como ritual de reconocimiento territorial, ha tenido ya tres ediciones, consolidándose como el encuentro de mayor continuidad del colectivo. Los Mambeaderos son círculos de palabra convocados y dirigidos por sabedores y sabedoras indígenas, espacios de escucha, pensamiento colectivo y conexión con el conocimiento ancestral. El lanzamiento de Manto de Armadura de Maffliora — primer sencillo del disco Nuestra Señora de los Naranjos—, una velada íntima que reunió música en vivo, arte y comunidad. Una grieta del mundo cantó fue el evento de lanzamiento del disco homónimo de Caritasucia en una jornada interdisciplinar que integró música en vivo, exposiciones, feria de emprendimientos y bandas invitadas.`
  },

  'obra-abrazo': {
    titulo: 'El Abrazo',
    subtitulo: null,
    colectivo: 'Ebra · Andrés Guerrero',
    imagen: 'imagenes/home/main/abarzo_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/abarzo_main.webp',                                tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/DSC_0099.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/DSC_0101.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/DSC_0119.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/DSC_0162.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/DSC_0198-Mejorado-NR.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/DSC_0254-Mejorado-NR.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/IMG_20251216_140914.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/IMG_20251216_143128.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/IMG_20251216_150145.webp',                 tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/IMG_2292.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/IMG_2310.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/IMG_2320.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/abrazo/VID_20251216_224710_web.mp4',              tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2024 – Presente (3 ediciones)'],
      [
      'Artistas','Ebra, Andrés Guerrero'],
      [
      'Medio','Gestión cultural · Investigación intercultural'],
      [
      'Lugar','Bogotá, Colombia (diversos espacios culturales y urbanos)']],
    descripcion: `El Abrazo surge como una plataforma de encuentro interdisciplinar diseñada para ritualizar el espacio urbano y reconectar con las raíces del territorio. El proyecto se enfoca en la divulgación de las músicas y saberes de Abya Yala, entendiendo el arte no solo como espectáculo, sino como un vehículo de fortalecimiento para el tejido social que habitamos.

La experiencia se estructura a través de diversos pilares que incluyen expresiones musicales, artísticas y culinarias, pero encuentra su corazón en los Mambeaderos: círculos de palabra dirigidos por sabedores y sabedoras indígenas. Estos espacios pedagógicos permiten la circulación de conocimientos ancestrales y el reconocimiento mutuo entre la comunidad urbana y las comunidades originarias.

Con tres ediciones concluidas, El Abrazo ha logrado establecerse como un lugar de resistencia cultural donde la ciudad se abre al diálogo con los saberes indígenas. Es una invitación a habitar el territorio desde el reconocimiento de nuestra identidad compartida y el respeto por las pedagogías de la tierra.`
  },

  'obra-el-nudo': {
    titulo: 'El Nudo',
    subtitulo: null,
    colectivo: 'El Nudo',
    imagen: 'imagenes/home/main/ElNudo_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/ElNudo_main.webp',                                         tipo: 'img' },
      { src: 'imagenes/proyectos/el-nudo/DibujoColectivo_1_3000.webp',                      tipo: 'img' },
      { src: 'imagenes/proyectos/el-nudo/Mapa_2000.webp',                                   tipo: 'img' },
      { src: 'imagenes/proyectos/el-nudo/Screenshot 2026-03-31 111412.webp',                tipo: 'img' },
      { src: 'imagenes/proyectos/el-nudo/WhatsApp Image 2025-10-14 at 6.46.52 PM.webp',    tipo: 'img' },
      { src: 'imagenes/proyectos/el-nudo/DSC_8149_web.mp4',                                 tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2025 – Presente'],
      [
      'Artistas','Nicolás Gamba, Juan Manuel Cárdenas, Adrián Alemañy, Pedro Ocampo / Yeiner Arwagingumu, Hermes Izquierdo (músicos arhuacos) / Nicolás Gamba'],
      [
      'Medio','Performance multimedia · Investigación sonora'],
      [
      'Técnica','Investigación-creación, música tradicional, mambeadero, diálogo intercultural']],
    descripcion: `El Nudo es un colectivo de investigación, creación y experimentación sonora en torno a músicas tradicionales de Colombia y Latinoamérica, dirigido y producido por Juan Manuel Cárdenas y Adrián Alemañy. El proyecto surge de una inquietud metodológica: ¿cómo componer músicas propias sin apropiarse ni extraer de tradiciones a las que no se pertenece? Esta pregunta, lejos de bloquear el proceso, lo orienta — porque en el fondo la pregunta por la metodología era también una pregunta por la identidad.

El proceso se inició con la investigación de la música de la flauta charu de la Sierra Nevada, bajo la tutoría del maestro Juan Ignacio Arbaiza, y se articuló a partir del diálogo directo con portadores de esa tradición: los músicos arhuacos Yeiner Arwagingumu y Hermes Izquierdo acompañaron la construcción de una postura ética frente a la interculturalidad. La estructura del primer álbum se construyó sobre la espiral de chiminigagua — matriz kogui para ordenar el pensamiento — y se grabó sin ensayo previo, dando lugar a la intuición sobre la razón como decisión estética coherente con todo el proceso.

Su trayectoria incluye el proyecto de investigación-creación que dio origen al primer álbum El Nudo (2024), los encuentros para la celebración del solsticio de invierno (2024) y de verano (2025), y el Semillero de investigación de la Biblioteca Nacional de Colombia (2026). Nicolás Gamba integra el colectivo como artista visual e investigador.`
  },

  'obra-era-sonera': {
    titulo: 'EraSonera — Homenaje a Teto Ocampo',
    subtitulo: null,
    colectivo: 'Nicolás Gamba',
    imagen: 'imagenes/home/main/EraSonera_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/EraSonera_main.webp',                             tipo: 'img' },
      { src: 'imagenes/proyectos/era-sonera/IMG_20231125_161934.webp',             tipo: 'img' },
      { src: 'imagenes/proyectos/era-sonera/IMG_20231125_225921.webp',             tipo: 'img' },
      { src: 'imagenes/proyectos/era-sonera/VID_20231125_155724_web.mp4',          tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2023'],
      [
      'Artistas','Nicolás Gamba (artista invitado) / Mucho Indio / Hombre de Barro'],
      [
      'Medio','Live Vj set · Performance multimedia · Videomapping interactivo'],
      [
      'Técnica','TouchDesigner, visuales generativas reactivas al sonido, videomapping'],
      [
      'Lugar','Teatro Colón, Bogotá']],
    descripcion: `En el marco del concierto homenaje EraSonera y el mapping conmemorativo en el Centro Nacional de las Artes Delia Zapata Olivella, Nicolás Gamba participó como artista invitado responsable del componente visual interactivo. Su labor se centró en la creación de un ecosistema digital que sirviera como puente entre la raíz ancestral y la vanguardia tecnológica, conceptos fundamentales en la obra de Ernesto Teto Ocampo.

Utilizando TouchDesigner, implementó un sistema de visuales generativas que interactivas en tiempo real a las frecuencias de agrupaciones como Mucho Indio y Hombre de Barro. El diseño visual exploró la estética paleofuturista, transformando la iconografía del hombre jaguar y la música de gaitas y guitarras en texturas orgánicas, fractales y partículas en constante evolución.`
  },

  'obra-mundos-digitales': {
    titulo: 'Mundos Digitales — IDARTES',
    subtitulo: null,
    colectivo: 'IDARTES · Nicolás Gamba',
    imagen: 'imagenes/home/main/MundosDigitales_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/MundosDigitales_main.webp',                           tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/patio-3D.webp',                      tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 003411.webp',  tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 003526.webp',  tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 111603.webp',  tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 111730.webp',  tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 111905.webp',  tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 112026.webp',  tipo: 'img' },
      { src: 'imagenes/proyectos/mundos-digitales/Screenshot 2026-03-30 113103.webp',  tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2024 – 2025'],
      [
      'Artistas','Nicolás Gamba'],
      [
      'Medio','Arte digital · 3D Art · Desarrollo Web'],
      [
      'Técnica','Modelado 3D, texturizado'],
      [
      'Cliente','IDARTES'],
      [
      'Lugar','Web']],
    descripcion: `Mundos Digitales es un ecosistema digital interactivo que propone una nueva forma de habitar la relación entre arte y tecnología. Desarrollado por el Instituto Distrital de las Artes – IDARTES, el proyecto está dirigido a la infancia, la juventud y sus familias. Se estructura como una plataforma en la que los usuarios no solo consumen contenidos, sino que exploran, experimentan y crean activamente dentro de entornos digitales diseñados como experiencias sensibles y pedagógicas.

Conceptualmente, Mundos Digitales se sitúa en un cruce entre lo artístico, lo pedagógico y lo tecnológico, entendiendo lo digital como un espacio vivo donde se configuran nuevas formas de percepción, aprendizaje y creación. La plataforma se concibe como un territorio expandido en el que convergen múltiples lenguajes: modelado 3D, animación, sonido, interacción y narrativa digital.

El rol de Nicolás en el proyecto se centró en el diseño y desarrollo de piezas gráficas y modelado 3D orientadas a la construcción de experiencias interactivas. Su trabajo abordó la creación de assets optimizados para implementación en tiempo real, articulando procesos entre Blender, fotogrametría, inteligencia artificial, stop motion y animación tradicional.`
  },

  'obra-mascara': {
    titulo: 'Máscara',
    subtitulo: null,
    colectivo: 'Nicolás Gamba',
    imagen: 'imagenes/home/main/Mascara_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Mascara_main.webp',                                            tipo: 'img' },
      { src: 'imagenes/proyectos/mascara/Screen Shot 2017-10-17 at 9.09.34 AM.webp',           tipo: 'img' },
      { src: 'imagenes/proyectos/mascara/Screen Shot 2017-10-17 at 9.10.09 AM.webp',           tipo: 'img' },
      { src: 'imagenes/proyectos/mascara/Screen Shot 2017-10-17 at 9.11.09 AM.webp',           tipo: 'img' },
      { src: 'imagenes/proyectos/mascara/Screen Shot 2017-10-17 at 9.17.25 AM.webp',           tipo: 'img' },
      { src: 'imagenes/proyectos/mascara/Screen Shot 2017-10-17 at 9.18.07 AM.webp',           tipo: 'img' },
      { src: 'imagenes/proyectos/mascara/frame 5.webp',                                         tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2019'],
      [
      'Artistas','Nicolás Gamba'],
      [
      'Medio','Videoarte · Cortometraje experimental'],
      [
      'Duración','19:25 min'],
      [
      'Reconocimiento','Tesis Meritoria Uniandes / Otto de Greiff / Muestra MAC']],
    descripcion: `Máscara es un proyecto audiovisual que nace de la investigación sobre las fronteras y tensiones estéticas experimentadas por el artista durante su formación profesional. La obra articula dos perspectivas del video que suelen presentarse como opuestas: la narrativa cinematográfica y la experimentación propia del videoarte.

A través del empleo de ambas estéticas, el proyecto establece un paralelismo entre el concepto de identidad del sociólogo Erving Goffman y las decisiones formales de un artista. Goffman propone la "máscara" para metaforizar la naturaleza fluida con la que cada individuo adapta su identidad dependiendo del grupo social con el que interactúa. De igual manera, Máscara evidencia cómo el artista/cineasta transmuta su forma de expresión dependiendo del contexto institucional o profesional donde se ubique.

La obra funciona como un ejercicio de autorreflexión sobre la representación y el rol del autor en el arte contemporáneo. Reconocida con Tesis Meritoria por la Universidad de los Andes y expuesta en el MAC (Museo de Arte Contemporáneo de Bogotá) y en los premios Otto de Greiff.`
  },

  'obra-canal': {
    titulo: 'Canal',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Isabella Londoño',
    imagen: 'imagenes/home/main/canal_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/canal_main.webp',                                      tipo: 'img' },
      { src: 'imagenes/proyectos/canal/Screenshot 2026-03-31 164434.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/canal/Screenshot 2026-03-31 164727.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/canal/Screenshot 2026-03-31 164754.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/canal/Screenshot 2026-03-31 164926.webp',              tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2017'],
      [
      'Artistas','Nicolás Gamba, Isabella Londoño'],
      [
      'Medio','Cortometraje de ficción'],
      [
      'Duración','15:24 min'],
      [
      'Lugar','Universidad de los Andes, Bogotá']],
    descripcion: `Canal es un cortometraje experimental que se sumerge en las fronteras del surrealismo para narrar una persecución interna. La trama se centra en una presencia sombría que se manifiesta a través del ruido blanco de las pantallas, operando como una extensión de los temores y la fragmentación de la psique de la protagonista.

La obra utiliza la interferencia mediática como un recurso narrativo y estético, donde lo tecnológico y lo onírico se funden para crear un entorno de extrañamiento. El uso de los dispositivos electrónicos como portales de una entidad acechante permite reflexionar sobre la relación entre la imagen técnica y el subconsciente, situando al espectador en un espacio de incertidumbre constante.

Nicolás Gamba coescribió el guión y codirigió la pieza. Su trabajo se enfocó en la narrativa y en la construcción de elementos visuales que articularan la estética del video con la carga psicológica del relato.`
  },

  'obra-homun': {
    titulo: 'Homun',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Isabella Londoño',
    imagen: 'imagenes/home/main/Homun_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Homun_main.webp',                                      tipo: 'img' },
      { src: 'imagenes/proyectos/homun/Screenshot 2026-03-31 165013.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/homun/Screenshot 2026-03-31 165221.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/homun/Screenshot 2026-03-31 165402.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/homun/Screenshot 2026-03-31 165619.webp',              tipo: 'img' },
      { src: 'imagenes/proyectos/homun/Screenshot 2026-03-31 165652.webp',              tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2017'],
      [
      'Artistas','Nicolás Gamba, Isabella Londoño'],
      [
      'Medio','Animación · Ilustración tradicional · Cortometraje Stop motion'],
      [
      'Duración','Aprox. 3 min']],
    descripcion: `Homun es un cortometraje escrito y dirigido por Nicolás Gamba. Se trata de una exploración infantil alrededor de la crítica a la autoridad y a la imposición de una naturaleza predeterminada. El cortometraje narra la insurrección de un homúnculo — un sistema que hibrida lógicas biológicas con estructuras robóticas — frente al control laboratorial de su creador.

La obra plantea que la autoridad no solo reside en la vigilancia física, sino en la definición misma de las capacidades y leyes naturales que el científico intenta grabar en el código del homúnculo. El ejercicio de la duda emerge como el origen de la libertad: la desobediencia como acto fundacional de la autodeterminación de cualquier ente —artificial o no.`
  },

  'obra-confinamiento': {
    titulo: 'Confinamiento Expandido',
    subtitulo: null,
    colectivo: 'Nicolás Gamba · Julián Angarita · Mario Carrascal · Andrés Sereno',
    imagen: 'imagenes/home/main/Confinamiento_Expandido_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Confinamiento_Expandido_main.webp',                            tipo: 'img' },
      { src: 'imagenes/proyectos/confinamiento/Screenshot 2026-03-31 135537.webp',             tipo: 'img' },
      { src: 'imagenes/proyectos/confinamiento/Screenshot 2026-03-31 135715.webp',             tipo: 'img' },
      { src: 'imagenes/proyectos/confinamiento/Screenshot 2026-03-31 135925.webp',             tipo: 'img' },
      { src: 'imagenes/proyectos/confinamiento/Screenshot 2026-03-31 140130.webp',             tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2020'],
      [
      'Artistas','Nicolás Gamba, Julián Angarita, Mario Carrascal, Andrés Sereno'],
      [
      'Medio','Arte digital · Net art · 3D Art · Realidad Virtual'],
      [
      'Técnica','Desarrollo web, VR, 3D Art'],
      [
      'Lugar','Galería Espacio Alterno - Web']],
    descripcion: `Confinamiento Expandido surge como una respuesta artística a la experiencia colectiva del aislamiento, utilizando la virtualidad como un campo de liberación frente a las fronteras físicas del hogar. La obra se presenta inicialmente como el modelo de una casa genérica de paredes rígidas — un contenedor de la cotidianidad —. Sin embargo, este espacio doméstico esconde tras sus objetos y muros tres dimensiones sonoras y visuales que expanden la percepción del usuario.

A través de un recorrido interactivo por diferentes texturas, colores y paisajes sonoros, la pieza aborda los ejes emocionales y psicológicos del confinamiento, transformando la arquitectura estática en una experiencia de exploración humana sin límites. Es una reflexión sobre cómo la mente y la creatividad logran permear las barreras de lo privado para habitar espacios infinitos, incluso en medio de la restricción.

Nicolás Gamba trabajó en la conceptualización y diseño técnico de los espacios virtuales, construyendo la arquitectura digital que permite el tránsito entre la casa física y las dimensiones expandidas e integrando los recorridos visuales con la narrativa sonora.`
  },

  'obra-espiritu-balanta': {
    titulo: 'Espíritu Balanta y Estrellas de Timbiquí',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Isabella Londoño',
    imagen: 'imagenes/home/main/EspirituBalanta_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/EspirituBalanta_main.webp',                                    tipo: 'img' },
      { src: 'imagenes/proyectos/espiritu-balanta/Screenshot 2026-03-31 160053.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/espiritu-balanta/Screenshot 2026-03-31 160129.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/espiritu-balanta/Screenshot 2026-03-31 160201.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/espiritu-balanta/Screenshot 2026-03-31 160226.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/espiritu-balanta/Screenshot 2026-03-31 160253.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/espiritu-balanta/Screenshot 2026-03-31 160326.webp',          tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2019'],
      [
      'Artistas','Nicolás Gamba, Isabella Londoño'],
      [
      'Medio','Producción audiovisual · Videoclip'],
      [
      'Técnica','Registro documental'],
      [
      'Cliente','Jugamusic']],
    descripcion: `Espíritu Balanta y Estrellas de Timbiquí es un componente audiovisual integral — entre videoclip y corto documental — desarrollado bajo la dirección de la agencia Jugamusic. El proyecto se aleja del registro convencional para presentar imágenes fascinadas de momentos de vida cultural, cotidiana y espiritual, profundamente conectadas con la humanidad y el territorio caucano.

Presentado originalmente en el Teatro Colón de Bogotá, el audiovisual funciona como un tejido visual que acompaña la sonoridad de la marimba y los cantos tradicionales. La obra es también un documento de memoria que honra el legado de sabedores como don Adriano Alegría, celebrando los sonidos de libertad que definen la identidad del Pacífico colombiano.

Nicolás Gamba trabajó en la dirección audiovisual compartida y el diseño visual del proyecto, integrando la dirección de arte con una propuesta cinematográfica que celebra tanto lo místico como lo terrenal de esta comunidad.`
  },

  'obra-postporno': {
    titulo: 'Muestra de Cine Erótico de Bogotá',
    subtitulo: null,
    colectivo: 'Nicolás Gamba',
    imagen: 'imagenes/home/main/MCEP_main.webp',
    tipo: 'img',
    ficha: [
      [
      'Año','2024'],
      [
      'Artistas','Nicolás Gamba'],
      [
      'Medio','Ilustración digital · Diseño gráfico'],
      [
      'Cliente','Muestra de Cine Posporno Bogotá']],
    descripcion: `La ilustración para la 4ta. Muestra de Cine Erótico y Posporno de Bogotá se concibió como un ejercicio visual para desmarcarse de las estéticas convencionales del erotismo comercial. El concepto central gira en torno al posporno como herramienta política y artística que busca subvertir las dinámicas de poder y representación del cuerpo.

La pieza visual utiliza una paleta vibrante y texturas granulares para retratar la intersección entre la sensibilidad humana y los dispositivos digitales, sugiriendo nuevas formas de afectividad y deseo mediadas por la pantalla. A través de un enfoque de género crítico, el cartel funciona no solo como pieza informativa para la feria y los talleres del festival, sino como una declaración estética sobre la diversidad, la autonomía corporal y la exploración de placeres disidentes en la cultura contemporánea bogotana.`
  },

  'obra-zihita': {
    titulo: 'Zihita — Aurora',
    subtitulo: null,
    colectivo: 'Nicolás Gamba',
    imagen: 'imagenes/home/main/Aurora_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Aurora_main.webp',                                    tipo: 'img' },
      { src: 'imagenes/proyectos/zihita/Aurora SSSsss gris-azul.webp',                tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2024'],
      [
      'Artistas','Nicolás Gamba'],
      [
      'Medio','Ilustración digital · Modelado 3D'],
      [
      'Cliente','Zihita']],
    descripcion: `Para el lanzamiento del EP Aurora (que incluye los tracks Aurora y Manzana) del artista bogotano Zihita, diseñé una propuesta visual fundamentada en la intersección entre la geometría sagrada, el budismo y el entorno urbano contemporáneo.

El concepto central se desplaza desde un acto aparentemente simple — como comer una manzana — hacia una revelación de la estructura fractal de la realidad y del "Akasha" o campo vibratorio donde la materia se disuelve en energía.

A través de una estética que fusiona lo ácido y lo orgánico, el proyecto visualiza la espiral de Fibonacci y los patrones de geometría sagrada presentes en el caos de la ciudad. El objetivo fue crear una pieza que no solo acompañe la música de Zihita — una mezcla de psicodelia, trip-hop y ritmos tropicales —, sino que funcionara como un portal visual hacia la comprensión de que "como es arriba, es abajo": transformando un momento cotidiano en una experiencia de despertar y conexión universal.`
  },

  'obra-jacana': {
    titulo: 'Jacana Danza en el Pantano',
    subtitulo: null,
    colectivo: 'Nicolás Gamba · Isabella Londoño',
    imagen: 'imagenes/home/main/Jacana_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/Jacana_main.webp',                   tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/DSC00520.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/DSC00537.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/DSC00573.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/DSC00585.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/DSC00589.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/DSC00593.webp',               tipo: 'img' },
      { src: 'imagenes/proyectos/jacana/IMG_4300.webp',               tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2021'],
      [
      'Artistas','Nicolás Gamba, Isabella Londoño'],
      [
      'Medio','Videoarte · Performance · Videodanza'],
      [
      'Técnica','Video registro en medio natural, música improvisada'],
      [
      'Lugar','PNN. Chingaza']],
    descripcion: `Jacana Danza en el Pantano es una pieza que habita la frontera entre el sueño y la vigilia. El proyecto tiene su origen en un poema homónimo de Nicolás Gamba, escrito bajo la técnica de escritura automática inmediatamente después de un sueño profundo. En el texto, la aparición de un espíritu en forma de ave africana — la Jacana — detona una serie de reflexiones íntimas sobre las máscaras sociales, el amor y el estado presente del ser.

El performance, realizado en colaboración con Isabella Londoño, traslada esta narrativa al ecosistema del Parque Nacional Natural Chingaza. A través de una máscara y el uso de body painting, el artista encarna al espíritu del ave para iniciar una danza meditativa en medio de la naturaleza y el frío extremo. La acción no busca la representación dramática, sino la contemplación absoluta: un ejercicio de despojo frente al entorno que funciona como espejo para la confrontación interna.

La pieza se completa con un componente sonoro de carácter intuitivo. La música fue creada mediante una sesión de improvisación, donde el instinto y el azar guiaron la composición, logrando una atmósfera que refuerza el carácter surrealista del ritual. Jacana es, en esencia, una obra sobre el abandono de la identidad social y la búsqueda de una libertad salvaje en el silencio de las montañas.`
  },

  'obra-juana-briela': {
    titulo: 'Juana Aguirre y Briela Ojeda',
    subtitulo: null,
    colectivo: 'Nicolás Gamba',
    imagen: 'imagenes/home/main/JuanaBriela_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/JuanaBriela_main.webp',                          tipo: 'img' },
      { src: 'imagenes/proyectos/juana-briela/IMG_20260328_211002.webp',          tipo: 'img' },
      { src: 'imagenes/proyectos/juana-briela/MVIMG_20260328_173035.webp',        tipo: 'img' },
    ],
    ficha: [
      [
      'Año','2026'],
      [
      'Medio','Producción audiovisual']],
    descripcion: `Producción visual para la presentación de Juana Aguirre y Briela Ojeda. (Información en construcción)`
  },

  'obra-soul-room': {
    titulo: 'Soul Room',
    subtitulo: null,
    colectivo: 'Nicolás Gamba · Julián Angarita · Mario Carrascal · Jorge Álvarez',
    imagen: 'imagenes/home/main/SoulRoom_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/SoulRoom_main.webp',                   tipo: 'img' },
      { src: 'imagenes/proyectos/soul-room/SoulRoom_web.mp4',           tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2022'],
      [
      'Medio','Arte digital · 3D Art']],
    descripcion: `Proyecto de arte digital interactivo sobre un espacio metafísico. Video disponible próximamente. (Información en construcción)`
  },

  'obra-thaissa': {
    titulo: 'Thaissa — Concierto de lanzamiento Los tres golpes de El Kalbo ',
    subtitulo: null,
    colectivo: 'Nicolás Gamba & Julián Angarita',
    imagen: 'imagenes/home/main/ThaissaKalvo_main.webp',
    tipo: 'img',
    imagenes: [
      { src: 'imagenes/home/main/ThaissaKalvo_main.webp',                          tipo: 'img' },
      { src: 'imagenes/proyectos/thaissa/VID_20240806_223115_web.mp4',             tipo: 'video' },
    ],
    ficha: [
      [
      'Año','2024'],
      [
      'Artistas','Nicolás Gamba, Julián Angarita'],
      [
      'Medio','Live Vj set · Performance multimedia · Videomapping interactivo'],
      [
      'Cliente','Thaissa / El Kalvo'],
      [
      'Lugar','Teatro Libre de Bogotá']],
    descripcion: `Propuesta de video mapping e identidad visual para el lanzamiento musical de Thaissa en el Teatro Libre de Bogotá, en el marco del lanzamiento 

La experiencia integró arte digital interactivo y nuevos medios para acompañar la presentación del proyecto, construyendo un espacio visual que dialogara con la sonoridad de la artista.`
  },

};

/* ─── ESTADO ──────────────────────────────────────────────── */
let currentImages    = [];
let currentImgIndex  = 0;
let currentObraId    = null;

/* ─── ETIQUETAS FICHA EN INGLÉS ───────────────────────────── */
const FICHA_LABELS_EN = {
  'Año':            'Year',
  'Artistas':       'Artists',
  'Artista':        'Artist',
  'Medio':          'Medium',
  'Técnica':        'Technique',
  'Colaboración':   'Collaboration',
  'Lugar':          'Location',
  'Duración':       'Duration',
  'Reconocimiento': 'Recognition',
  'Reconocimientos':'Awards',
  'Rol':            'Role',
  'Institución':    'Institution',
  'Ediciones':      'Editions',
  'Dirección':      'Direction',
  'Participación':  'Participation',
  'Cliente':        'Client',
};

/* ─── TEXTOS ESTÁTICOS DEL MODAL ──────────────────────────── */
const MODAL_LABELS = {
  es: { desc: 'Descripción', ficha: 'Ficha Técnica', scroll: 'Desplazar' },
  en: { desc: 'Description',  ficha: 'Technical Sheet', scroll: 'Scroll'  },
};

/* ─── DESCRIPCIONES EN INGLÉS ─────────────────────────────── */
const DESCRIPCIONES_EN = {
  'obra-inquebrantables': `Gira Inquebrantables is an interdisciplinary multimedia work conceived by the Metanoia collective — formed by Colombian artists Nicolás Gamba, Julián Angarita, and Sergio Mantilla — in collaboration with the Filarmónica Joven de Colombia, produced in partnership with the Fundación Bolívar Davivienda. The tour brought together more than 91 musicians under the direction of Lina González-Granados, resident director of the Los Angeles Opera, in a performance of Rachmaninov's Symphony No. 2 at some of the country's leading theaters.

The conceptual framework departs from the symbolic duality of light and darkness — understood not as irreconcilable opposites but as complementary and generative forces. Drawing on Rachmaninov's creative crisis after the failure of his First Symphony in 1897 and his subsequent rebirth through psychotherapy, the work proposes a visual journey structured in four movements: Fall, Spark, Mind, and Metanoia — the moment of profound transformation in which the human being reconciles with their own shadow, in the Jungian sense.

Technically, the installation integrated interactive video mapping projected onto suspended chiffon fabrics, an installation of 20 LED light tubes programmed in TouchDesigner, and visual compositions generated from 3D modeling, photogrammetry, point cloud, and animation. A reactive component captured in real time the gestures of the orchestra conductor through Kinect sensors — turning bodily movement into a pictorial gesture.`,

  'obra-ascii': `ASCII Sound Experience is a total immersion work designed for the dome of the Bogotá Planetarium, functioning as a bridge between cutting-edge digital technology and the ancestral wisdom of Nyingma Buddhism. Inspired by the teachings of the Bardo Thodol (The Tibetan Book of the Dead), the experience proposes a phenomenological journey through the six bardos or transitional states of consciousness: the living bardo (Kye-ne), the dream bardo (Milam), the meditation bardo (Samten), the death bardo (Chikhai), the reality bardo (Chonyid), and the becoming or rebirth bardo (Sidpa).

The piece uses the dome as a ritual container where neoclassical electroacoustic music guides the spectator from the solidity of everyday reality toward fragmentation and subsequent integration into the vibrational field of pure light. It is an exploration of impermanence and the fractal nature of mind, transforming the astronomical environment into a space for spiritual introspection.

Nicolás Gamba and Julián Angarita are the artists and developers of the work's visual ecosystem. Through generative programming, translation of sonic frequencies, and Eastern mysticism into atmospheres of organic psychedelia and sacred geometry, they used Fulldome technology not merely as a projection surface but as a phenomenological vehicle to expand the perception of the audience.`,

  'obra-zarigueya': `The visual proposal for Zarigüeya at the Estéreo Picnic Festival 2026 was conceived as an organic dialogue between sonic tradition and digital tools. The concept revolved around the musical identity of the artist, who fuses elements of Colombian rural music — such as carranga — with a contemporary singer-songwriter sensibility.

To accompany this narrative, a workstation was set up that allowed live digital drawing onstage.`,

  'obra-muerte-viva': `Muerte Viva is an exercise in aesthetic and political resistance against the modern/colonial logic that strips objects of their context, function, and agency to turn them into static exhibition commodities. The exhibition proposes an inversion of the gaze: the object ceases to be a passive element and becomes a subject that challenges the spectator — a living spirit.

The Ojo-escucha drawings represent the artist's personal investigation — immersed in dialogues with indigenous knowledge keepers and sacred plants of the Colombian territory — into traditional practices around the word and listening. Acknowledging his position as a Bogotá city dweller external to these cultures, the artist developed a drawing-listening technique in which each stroke emerges from randomness and the simultaneous act of present listening. The result is a visual manifestation of the complementary tension between individual and collective — an eye/spirit that gazes back.

The audiovisual piece departs from recognizing that the object inside the museum has been stripped of its context, function, and agency. Images of eyes extracted from sculptures or masks restore the lost agency of the object: the object gazes back, reversing the direction of visual power. The spectator is no longer a passive observer but is challenged by the gaze of the other. In collaboration with the musical group El Nudo, a sound piece was developed influenced by the sounds of the peoples of the Colombian jungle.`,

  'obra-pimpina': `Pimpina Video Station is a multimedia performance on the idea of building an alternative communication channel and audiovisual platform as a response to the elitist and colonial dynamics in which art is conceived in Colombia — a market that has historically operated from closed class circuits and colonial logics where only certain forms of cultural legitimation find a place.

Created by Nicolás Gamba and Santiago Sánchez, the channel was made up of a series of interview-performance shows, mini-documentaries, and sketches distributed on social media, centering artists from different disciplines, niches, and social, economic, and cultural contexts.

Pimpina proposed no fixed aesthetic nor a stable identity — its identity was deliberately unstable, capable of dressing itself in the different worlds it inhabited and listening without imposing a form. The hosts and interviewers were characters constructed with papier-mâché masks: figures that embodied the possibility of inhabiting multiple worlds simultaneously and circulating between scenes without belonging exclusively to any one. The mask as a political and poetic gesture — not as concealment, but as a strategy of multiple presence.`,

  'obra-sigit': `SIGIT (Health Systems, Childhood, Gender, Interculturality and Tropics) is a research line of the Faculty of Medicine at Universidad de los Andes. The group operates from a model of social determinants and sustainable human development, working in direct collaboration with local communities, governments, and organizations to generate applied knowledge and effective interventions in public health.

Nicolás Gamba joins the interdisciplinary team — composed of doctors, anthropologists, biologists, and communicators — as artist and researcher. His participation focuses on designing artistic-cultural strategies for strengthening intercultural dialogue and the dissemination of scientific, medical, and ancestral knowledge of indigenous peoples.`,

  'obra-monolito': `Monolito is an audiovisual installation that emerges from an interest in the indigenous rituals of Colombian territory and their spiritual relationship with hallucinogenic plants as sacred presences — flesh of the gods. Through video projection, the piece seeks to approach that threshold zone where the everyday and the spiritual touch: the moment when a plant ceases to be matter and becomes a mediator between worlds.

The work does not attempt to represent or document the rituals, but rather to construct an experience that evokes their internal logic — that of suspended time, expanded vision, the body as a territory of encounter between the human and the non-human.

Monolito was recognized with second place at the Salón Séneca 2018.`,

  'obra-severo': `Severo Cochobiz is articulated as a living critique of the economic structures that condition the production of the contemporary artist in Bogotá. The project takes the form of a real pastry enterprise to explore the tension between aesthetic value and market value, placing money and subsistence at the center of artistic action.

The work operates on multiple dimensions: from a cooking show where the performers, protected by masks, execute the recipes as a ritual and media act, to the physical sale of the pieces (cakes) as consumer objects. The project also functioned as a collaborative platform, where the decorations on the products served as a support for exhibiting and commercializing designs by different local artists, democratizing access to art through an everyday commercial channel.

Severo Cochobiz not only parodies the dynamics of entrepreneurship but inhabits them to expose the difficulty of building a sustainable career in the Global South. By adopting the forms of capitalism to move art, the proposal challenges traditional gallery circuits: faced with precariousness, the artist mutates, camouflages, and turns the economic transaction into their own performative manifesto.`,

  'obra-ebra': `Ebra is a cultural management collective focused on creating spaces for encounter, exhibition, creation, and dialogue that strengthen intercultural and interdisciplinary relationships in Bogotá's territory. Ebra weaves new bonds among the fragmented identity of a city whose voices shout, but are not always heard. Musicians, visual artists, performing artists, audiovisual filmmakers, designers, performers, cultural managers, and creators from different traditions and territories come together to recognize one another and to create.

Through collective action, Ebra proposes a working model where diverse disciplines, scenes, and cultures converge around a shared curatorial axis. Its experiences bring into dialogue the ancestral and the contemporary, the analog and the digital, the urban and the territorial — understanding encounter not as a sum of parts, but as the generation of new cultural webs that no single voice could build alone.

The collective has materialized through interdisciplinary experiences: Anómala (its first gathering), El Abrazo (three editions, dialogues of Abya Yala music), the Mambeaderos (circles of indigenous knowledge with indigenous knowledge keepers), the launch of Manto de Armadura by Maffliora, and Una grieta del mundo cantó — the album release event for Caritasucia.`,

  'obra-abrazo': `El Abrazo emerges as an interdisciplinary meeting platform designed to ritualize urban space and reconnect with the roots of the territory. The project focuses on the dissemination of the music and knowledge of Abya Yala, understanding art not only as spectacle but as a vehicle for strengthening the social fabric we inhabit.

The experience is structured through various pillars including musical, artistic, and culinary expressions, but finds its heart in the Mambeaderos: circles of the word led by indigenous knowledge keepers. These pedagogical spaces allow the circulation of ancestral knowledge and mutual recognition between the urban community and originary communities.

With three completed editions, El Abrazo has established itself as a space of cultural resistance where the city opens to dialogue with indigenous knowledge. It is an invitation to inhabit the territory through the recognition of our shared identity and respect for the pedagogies of the land.`,

  'obra-el-nudo': `El Nudo is a collective of research, creation, and sonic experimentation around traditional music from Colombia and Latin America, directed and produced by Juan Manuel Cárdenas and Adrián Alemañy. The project arises from a methodological concern: how to compose one's own music without appropriating or extracting from traditions to which one does not belong?

The process began with research into the charu flute music of the Sierra Nevada, under the guidance of maestro Juan Ignacio Arbaiza, and was articulated through direct dialogue with carriers of that tradition: Arhuaco musicians Yeiner Arwagingumu and Hermes Izquierdo accompanied the construction of an ethical stance toward interculturality. The structure of the first album was built on the spiral of chiminigagua — the Kogui matrix for ordering thought — and was recorded without prior rehearsal, giving precedence to intuition over reason as an aesthetic decision.

The collective's trajectory includes the research-creation project that gave rise to the first album El Nudo (2024), gatherings for the winter solstice (2024) and summer solstice (2025), and the Research Seedbed at the Biblioteca Nacional de Colombia (2026). Nicolás Gamba integrates the collective as visual artist and researcher.`,

  'obra-era-sonera': `During the EraSonera tribute concert and the commemorative mapping at the Centro Nacional de las Artes Delia Zapata Olivella, Nicolás Gamba participated as a guest artist responsible for the interactive visual component. His work focused on creating a digital ecosystem that served as a bridge between ancestral roots and technological vanguard — fundamental concepts in the work of Ernesto Teto Ocampo.

Using TouchDesigner, he implemented a system of generative visuals that interacted in real time with the frequencies of groups such as Mucho Indio and Hombre de Barro. The visual design explored a paleofuturist aesthetic, transforming the iconography of the jaguar man and the music of gaitas and guitars into organic textures, fractals, and particles in constant evolution.`,

  'obra-mundos-digitales': `Mundos Digitales is an interactive digital ecosystem that proposes a new way of inhabiting the relationship between art and technology. Developed by the Instituto Distrital de las Artes – IDARTES, the project is directed at children, youth, and their families. It is structured as a platform where users not only consume content but actively explore, experiment, and create within digital environments designed as sensitive and pedagogical experiences.

Conceptually, Mundos Digitales is situated at the intersection of art, pedagogy, and technology, understanding the digital as a living space where new forms of perception, learning, and creation are configured. The platform is conceived as an expanded territory where multiple languages converge: 3D modeling, animation, sound, interaction, and digital narrative.

Nicolás's role in the project focused on the design and development of graphic pieces and 3D modeling oriented toward the construction of interactive experiences. His work addressed the creation of assets optimized for real-time implementation, articulating processes between Blender, photogrammetry, artificial intelligence, stop motion, and traditional animation.`,

  'obra-mascara': `Máscara is an audiovisual project born from research into the aesthetic boundaries and tensions experienced by the artist during his professional formation. The work articulates two perspectives of video that are usually presented as opposites: cinematic narrative and the experimentation characteristic of video art.

Through the use of both aesthetics, the project establishes a parallel between the concept of identity proposed by sociologist Erving Goffman and the formal decisions of an artist. Goffman proposes the "mask" as a metaphor for the fluid nature with which each individual adapts their identity depending on the social group with which they interact. Similarly, Máscara reveals how the artist/filmmaker transmutes their form of expression depending on the institutional or professional context in which they are situated.

The work functions as an exercise in self-reflection on representation and the role of the author in contemporary art. Recognized with Tesis Meritoria by Universidad de los Andes and exhibited at the MAC (Museo de Arte Contemporáneo de Bogotá) and at the Otto de Greiff awards.`,

  'obra-canal': `Canal is an experimental short film that immerses itself in the borders of surrealism to narrate an internal pursuit. The story centers on a shadowy presence that manifests through the white noise of screens, operating as an extension of the protagonist's fears and fragmented psyche.

The work uses media interference as a narrative and aesthetic resource, where the technological and the oneiric merge to create an environment of estrangement. The use of electronic devices as portals for a lurking entity allows reflection on the relationship between the technical image and the subconscious, placing the spectator in a space of constant uncertainty.

Nicolás Gamba co-wrote the script and co-directed the piece. His work focused on the narrative and the construction of visual elements that articulated the video's aesthetic with the psychological weight of the story.`,

  'obra-homun': `Homun is a short film written and directed by Nicolás Gamba. It is a childlike exploration around the critique of authority and the imposition of a predetermined nature. The short film narrates the insurrection of a homunculus — a system that hybridizes biological logic with robotic structures — against the laboratory control of its creator.

The work proposes that authority does not reside only in physical surveillance but in the very definition of the capabilities and natural laws that the scientist attempts to inscribe into the homunculus's code. The exercise of doubt emerges as the origin of freedom: disobedience as the foundational act of the self-determination of any entity — artificial or not.`,

  'obra-confinamiento': `Confinamiento Expandido emerges as an artistic response to the collective experience of isolation, using virtuality as a field of liberation in the face of the physical borders of the home. The work initially presents itself as the model of a generic house with rigid walls — a container of everyday life. However, this domestic space hides behind its objects and walls three sonic and visual dimensions that expand the user's perception.

Through an interactive journey through different textures, colors, and soundscapes, the piece addresses the emotional and psychological axes of confinement, transforming static architecture into an experience of limitless human exploration. It is a reflection on how the mind and creativity manage to permeate the barriers of the private to inhabit infinite spaces, even amid restriction.

Nicolás Gamba worked on the conceptualization and technical design of the virtual spaces, building the digital architecture that allows transit between the physical house and the expanded dimensions, and integrating the visual journeys with the sonic narrative.`,

  'obra-espiritu-balanta': `Espíritu Balanta y Estrellas de Timbiquí is an integral audiovisual component — between music video and short documentary — developed under the direction of Jugamusic. The project moves away from conventional documentary to present fascinated images of moments of cultural, everyday, and spiritual life, deeply connected to humanity and territory.

Originally presented at the Teatro Colón in Bogotá, the audiovisual functions as a visual weave that accompanies the sonority of the marimba and traditional songs. The work is also a document of memory that honors the legacy of knowledge keepers such as don Adriano Alegría, celebrating the sounds of freedom that define the identity of the Colombian Pacific.

Nicolás Gamba worked on the co-direction and visual design of the project, integrating art direction with a cinematographic proposal that celebrates both the mystical and the earthly dimensions of this community.`,

  'obra-postporno': `The illustration for the 4th Muestra de Cine Erótico y Posporno de Bogotá was conceived as a visual exercise to distance itself from the conventional aesthetics of commercial eroticism. The central concept revolves around post-pornography as a political and artistic tool that seeks to subvert the power dynamics and representation of the body.

The visual piece uses a vibrant palette and granular textures to portray the intersection between human sensibility and digital devices, suggesting new forms of affectivity and desire mediated by the screen. Through a critical gender-focused approach, the poster functions not only as an informational piece for the festival's fair and workshops, but as an aesthetic statement on diversity, bodily autonomy, and the exploration of dissident pleasures in contemporary Bogotá culture.`,

  'obra-zihita': `For the launch of the EP Aurora (which includes the tracks Aurora and Manzana) by Bogotá-based artist Zihita, I developed a visual proposal grounded in the intersection between sacred geometry, Buddhism, and the contemporary urban environment.

The central concept shifts from an apparently simple act — eating an apple — toward a revelation of the fractal structure of reality and of the "Akasha" or vibrational field where matter dissolves into energy.

Through an aesthetic that fuses the acid with the organic, the project visualizes the Fibonacci spiral and sacred geometry patterns present in the chaos of the city. The goal was to create a piece that not only accompanies Zihita's music — a mix of psychedelia, trip-hop, and tropical rhythms — but that functions as a visual portal toward the understanding that "as above, so below": transforming an everyday moment into an experience of awakening and universal connection.`,

  'obra-jacana': `Jacana Danza en el Pantano is a piece that inhabits the border between dream and waking reality. The project originates from a homonymous poem by Nicolás Gamba, written using automatic writing immediately following a deep dream. In the text, the appearance of an avian spirit — the Jacana — triggers a series of intimate reflections on social masks, love, and the current state of being.

The performance, in collaboration with Isabella Londoño, transfers this narrative to the ecosystem of Chingaza National Natural Park. Through a mask and body painting, the artist embodies the bird's spirit to initiate a meditative dance amid extreme cold. The action seeks absolute contemplation rather than dramatic representation: an exercise of shedding off layers before the environment.

The piece is completed with an intuitive sonic component created through improvised sessions, reinforcing the surreal character of the ritual. Ultimately, Jacana explores the abandonment of social identity and the search for savage freedom in the silence of the mountains.`,

  'obra-juana-briela': `Visual production for the presentation of Juana Aguirre and Briela Ojeda. (Information under construction)`,

  'obra-soul-room': `Interactive digital art project about a metaphysical space. Video available soon. (Information under construction)`,

  'obra-thaissa': `Video mapping proposal and visual identity for Thaissa's musical launch at the Teatro Libre in Bogotá.

The experience integrated interactive digital art and new media to accompany the project presentation, building a visual space that engaged in dialogue with the artist's soundscapes.`,

};

/* ─── HELPER: IDIOMA ACTIVO ───────────────────────────────── */
function getLang() {
  var btns = document.querySelectorAll('.lang-btn.active');
  for (var i = 0; i < btns.length; i++) {
    if (!btns[i].closest('#modal-overlay')) return btns[i].getAttribute('data-lang');
  }
  if (btns.length > 0) return btns[0].getAttribute('data-lang');
  return 'es';
}

/* ─── RENDER DESCRIPCIÓN Y FICHA (bilingüe) ───────────────── */
function renderDescripcionYFicha(obraId, data) {
  var lang   = getLang();
  var labels = MODAL_LABELS[lang] || MODAL_LABELS.es;

  /* Etiqueta sección descripción */
  var descLabel = document.querySelector('#modal-desc-section .modal-label');
  if (descLabel) descLabel.textContent = labels.desc;

  /* Etiqueta ficha técnica */
  var fichaHeading = document.querySelector('.modal-ficha-heading');
  if (fichaHeading) fichaHeading.textContent = labels.ficha;

  /* Scroll hint */
  var scrollSpan = document.querySelector('#modal-scroll-hint span');
  if (scrollSpan) scrollSpan.textContent = labels.scroll;

  /* Párrafos de descripción */
  var descEl  = document.getElementById('modal-descripcion');
  descEl.innerHTML = '';
  var texto   = (lang === 'en' && DESCRIPCIONES_EN[obraId]) ? DESCRIPCIONES_EN[obraId] : data.descripcion;
  var parrafos = typeof texto === 'string' ? texto.split('\n\n') : (texto || []);
  parrafos.forEach(function (p) {
    var t = (p || '').trim();
    if (!t) return;
    var el = document.createElement('p');
    el.className   = 'modal-desc-p';
    el.textContent = t;
    descEl.appendChild(el);
  });

  /* Ficha técnica con etiquetas traducidas */
  var fichaEl = document.getElementById('modal-ficha');
  fichaEl.innerHTML = '';
  (data.ficha || []).forEach(function (par) {
    var dt = document.createElement('dt');
    dt.textContent = (lang === 'en' && FICHA_LABELS_EN[par[0]]) ? FICHA_LABELS_EN[par[0]] : par[0];
    var dd = document.createElement('dd');
    dd.textContent = par[1];
    fichaEl.appendChild(dt);
    fichaEl.appendChild(dd);
  });
}

/* ─── SINCRONIZAR BOTONES LANG EN MODAL ───────────────────── */
function sincronizarLangModal() {
  var lang = getLang();
  document.querySelectorAll('#modal-lang-selector .lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* ─── CREAR ESTRUCTURA HTML ───────────────────────────────── */
function crearModal() {
  const html = `
    <div id="modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">

      <button id="modal-close" aria-label="Cerrar">×</button>

      <div id="modal-lang-selector">
        <div class="lang-box brutalist-border">
          <button class="lang-btn" data-lang="es">ES</button>
          <button class="lang-btn" data-lang="en">EN</button>
        </div>
      </div>

      <section id="modal-hero">
        <button class="modal-arrow" id="modal-prev" aria-label="Imagen anterior">&#8249;</button>
        <img    id="modal-hero-img"   src="" alt="" />
        <video  id="modal-hero-video" autoplay loop muted playsinline style="display:none;width:100%;height:100%;object-fit:contain;"></video>
        <button class="modal-arrow" id="modal-next" aria-label="Imagen siguiente">&#8250;</button>
        <div id="modal-scroll-hint" aria-hidden="true">
          <span>Desplazar</span>
        </div>
      </section>

      <div id="modal-body">
        <div id="modal-left">
          <p id="modal-colectivo"></p>
          <header id="modal-header">
            <h1 id="modal-titulo"></h1>
            <h2 id="modal-subtitulo"></h2>
          </header>
          <section id="modal-desc-section">
            <h3 class="modal-label">Descripción</h3>
            <div id="modal-descripcion"></div>
          </section>
        </div>
        <aside id="modal-right">
          <h3 class="modal-ficha-heading">Ficha Técnica</h3>
          <dl id="modal-ficha"></dl>
        </aside>
      </div>

      <div id="modal-gallery">
        <div id="modal-thumbs"></div>
      </div>

    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}

/* ─── RENDER MEDIA EN HERO ────────────────────────────────── */
function renderMedia(index) {
  const media = currentImages[index];
  const img   = document.getElementById('modal-hero-img');
  const video = document.getElementById('modal-hero-video');

  if (media.tipo === 'video') {
    img.style.display   = 'none';
    video.style.display = '';
    video.src = media.src;
    video.load();
    video.play().catch(function(){});
  } else {
    video.style.display = 'none';
    video.pause();
    img.style.display = '';
    img.src = media.src;
    img.alt = media.alt || '';
  }
}

/* ─── ACTUALIZAR GALERÍA ──────────────────────────────────── */
function updateGallery(index) {
  currentImgIndex = index;
  const img = document.getElementById('modal-hero-img');
  img.style.opacity = '0';
  setTimeout(function () {
    renderMedia(index);
    img.style.opacity = '1';
  }, 200);
  document.querySelectorAll('.modal-thumb').forEach(function (btn, i) {
    btn.classList.toggle('active', i === index);
  });
}

/* ─── ABRIR MODAL ─────────────────────────────────────────── */
function abrirModal(obraId) {
  const data = PROYECTOS[obraId];
  if (!data) return;
  currentObraId = obraId;

  const overlay = document.getElementById('modal-overlay');

  /* Imágenes */
  currentImages   = data.imagenes || [{ src: data.imagen, tipo: data.tipo || 'img' }];
  currentImgIndex = 0;
  renderMedia(0);

  /* Colectivo */
  const colEl = document.getElementById('modal-colectivo');
  if (data.colectivo) {
    colEl.textContent    = data.colectivo;
    colEl.style.display  = '';
  } else {
    colEl.style.display = 'none';
  }

  /* Título */
  document.getElementById('modal-titulo').textContent = data.titulo;

  /* Subtítulo */
  const subEl = document.getElementById('modal-subtitulo');
  if (data.subtitulo) {
    subEl.textContent   = data.subtitulo;
    subEl.style.display = '';
  } else {
    subEl.style.display = 'none';
  }

  /* Descripción + ficha técnica (bilingüe) */
  renderDescripcionYFicha(obraId, data);
  sincronizarLangModal();

  /* Galería de miniaturas */
  const thumbsEl  = document.getElementById('modal-thumbs');
  const galleryEl = document.getElementById('modal-gallery');
  thumbsEl.innerHTML = '';
  if (currentImages.length > 1) {
    galleryEl.style.display = '';
    currentImages.forEach(function (img, i) {
      const btn       = document.createElement('button');
      btn.className   = 'modal-thumb' + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', 'Ver imagen ' + (i + 1));
      const imgEl     = document.createElement('img');
      imgEl.src       = img.src;
      imgEl.alt       = '';
      btn.appendChild(imgEl);
      btn.addEventListener('click', function () { updateGallery(i); });
      thumbsEl.appendChild(btn);
    });
  } else {
    galleryEl.style.display = 'none';
  }

  /* Flechas */
  const mostrarFlechas = currentImages.length > 1;
  document.getElementById('modal-prev').style.display = mostrarFlechas ? '' : 'none';
  document.getElementById('modal-next').style.display = mostrarFlechas ? '' : 'none';

  /* Scroll hint — resetear */
  const hint = document.getElementById('modal-scroll-hint');
  if (hint) hint.style.opacity = '1';

  /* Abrir */
  overlay.classList.add('is-open');
  overlay.setAttribute('aria-hidden', 'false');
  overlay.scrollTop = 0;
  document.body.classList.add('modal-open');
  document.getElementById('modal-close').focus();
}

/* ─── CERRAR MODAL ────────────────────────────────────────── */
function cerrarModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('is-open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  currentObraId = null;

  /* Pausar video si está activo */
  const video = document.getElementById('modal-hero-video');
  if (video) { video.pause(); video.src = ''; }
}

/* ─── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {

  crearModal();

  /* Botón cerrar */
  document.getElementById('modal-close').addEventListener('click', cerrarModal);

  /* Tecla Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') cerrarModal();
  });

  /* Flechas de galería */
  document.getElementById('modal-prev').addEventListener('click', function () {
    const idx = (currentImgIndex - 1 + currentImages.length) % currentImages.length;
    updateGallery(idx);
  });
  document.getElementById('modal-next').addEventListener('click', function () {
    const idx = (currentImgIndex + 1) % currentImages.length;
    updateGallery(idx);
  });

  /* Scroll hint desaparece al scrollear */
  document.getElementById('modal-overlay').addEventListener('scroll', function () {
    const hint = document.getElementById('modal-scroll-hint');
    if (hint) hint.style.opacity = '0';
  }, { once: true });

  /* Botones de idioma dentro del modal — delegan al botón nav equivalente */
  document.querySelectorAll('#modal-lang-selector .lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      var navBtns = document.querySelectorAll('.lang-btn[data-lang="' + lang + '"]');
      for (var i = 0; i < navBtns.length; i++) {
        if (!navBtns[i].closest('#modal-lang-selector')) {
          navBtns[i].click();
          break;
        }
      }
    });
  });

  /* Actualizar modal cuando cambia el idioma */
  document.addEventListener('langchange', function () {
    sincronizarLangModal();
    if (currentObraId) {
      var data = PROYECTOS[currentObraId];
      if (data) renderDescripcionYFicha(currentObraId, data);
    }
  });

  /* Click en el overlay de cada carta → abrir modal.
     Usamos mousedown+mouseup para detectar un tap sin movimiento,
     sin bloquear el drag (no hay stopPropagation en mousedown). */
  document.querySelectorAll('.obra-flotante').forEach(function (article) {
    const info = article.querySelector('.obra-info');
    if (!info) return;

    var tapX = 0, tapY = 0;

    info.addEventListener('mousedown', function (e) {
      tapX = e.clientX;
      tapY = e.clientY;
      /* Sin stopPropagation: el drag.js sigue funcionando */
    });

    info.addEventListener('mouseup', function (e) {
      var dx = Math.abs(e.clientX - tapX);
      var dy = Math.abs(e.clientY - tapY);
      if (dx < 6 && dy < 6) {
        abrirModal(article.id);
      }
    });

    /* Touch */
    info.addEventListener('touchstart', function (e) {
      var t = e.touches[0];
      tapX = t.clientX;
      tapY = t.clientY;
    }, { passive: true });

    info.addEventListener('touchend', function (e) {
      var t = e.changedTouches[0];
      var dx = Math.abs(t.clientX - tapX);
      var dy = Math.abs(t.clientY - tapY);
      if (dx < 12 && dy < 12) {
        abrirModal(article.id);
      }
    });
  });

});
