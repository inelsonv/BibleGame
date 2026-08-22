const { useState, useMemo, useEffect, useRef } = React;

/* ---------------------------------------------------------
   ÍCONOS (SVG propios, sin dependencias externas)
--------------------------------------------------------- */
function Icon({ children, size = 20, color = "currentColor", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
      {children}
    </svg>
  );
}
const BookOpen = (p) => <Icon {...p}><path d="M2 5c2-1.5 5-2 8-1v14c-3-1-6-.5-8 1V5Z" /><path d="M22 5c-2-1.5-5-2-8-1v14c3-1 6-.5 8 1V5Z" /></Icon>;
const Users = (p) => <Icon {...p}><circle cx="9" cy="8" r="3.2" /><path d="M2.5 19c0-3.3 2.9-5.5 6.5-5.5s6.5 2.2 6.5 5.5" /><circle cx="17" cy="9" r="2.6" /><path d="M15 13.6c2.9.3 5 2.2 5 5.4" /></Icon>;
const Swords = (p) => <Icon {...p}><path d="M4 20 18 6" /><path d="M14 2h6v6" /><path d="M20 4 4 20" /><path d="M10 22H4v-6" /></Icon>;
const Crown = (p) => <Icon {...p}><path d="M3 8l4 4 5-7 5 7 4-4-2 10H5L3 8Z" /><path d="M5 20h14" /></Icon>;
const Check = (p) => <Icon {...p}><path d="M4 12l5 5L20 6" /></Icon>;
const X = (p) => <Icon {...p}><path d="M5 5l14 14" /><path d="M19 5 5 19" /></Icon>;
const RotateCcw = (p) => <Icon {...p}><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v5h5" /></Icon>;
const ChevronRight = (p) => <Icon {...p}><path d="M9 5l7 7-7 7" /></Icon>;
const Sparkles = (p) => <Icon {...p}><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" /><path d="M5 17l.8 2.2L8 20l-2.2.8L5 23l-.8-2.2L2 20l2.2-.8L5 17Z" /></Icon>;
const Timer = (p) => <Icon {...p}><circle cx="12" cy="13" r="8" /><path d="M12 9v4l3 2" /><path d="M9 2h6" /></Icon>;
const Plus = (p) => <Icon {...p}><path d="M12 5v14" /><path d="M5 12h14" /></Icon>;
const Trash2 = (p) => <Icon {...p}><path d="M4 7h16" /><path d="M9 7V4h6v3" /><path d="M6 7l1 13h10l1-13" /><path d="M10 11v6" /><path d="M14 11v6" /></Icon>;
const ArrowLeft = (p) => <Icon {...p}><path d="M19 12H5" /><path d="M11 18l-6-6 6-6" /></Icon>;
const PenLine = (p) => <Icon {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z" /></Icon>;
const Settings = (p) => <Icon {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.2a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.2a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.2a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.2a1.7 1.7 0 0 0-1.6 1Z" /></Icon>;
const GripVertical = (p) => <Icon {...p}><circle cx="9" cy="6" r="1.3" fill="currentColor" stroke="none" /><circle cx="9" cy="12" r="1.3" fill="currentColor" stroke="none" /><circle cx="9" cy="18" r="1.3" fill="currentColor" stroke="none" /><circle cx="15" cy="6" r="1.3" fill="currentColor" stroke="none" /><circle cx="15" cy="12" r="1.3" fill="currentColor" stroke="none" /><circle cx="15" cy="18" r="1.3" fill="currentColor" stroke="none" /></Icon>;
const ListOrdered = (p) => <Icon {...p}><path d="M10 6h11" /><path d="M10 12h11" /><path d="M10 18h11" /><path d="M4 6h1V4H4" /><path d="M4 10h2" /><path d="M4 14a1 1 0 1 1 1-1c0 .6-1 1-1 2h2" /></Icon>;
const BarChart3 = (p) => <Icon {...p}><path d="M3 3v18h18" /><path d="M7 16v-4" /><path d="M12 16V8" /><path d="M17 16v-7" /></Icon>;
const Maximize = (p) => <Icon {...p}><path d="M8 3H3v5" /><path d="M16 3h5v5" /><path d="M21 16v5h-5" /><path d="M3 16v5h5" /></Icon>;
const Minimize = (p) => <Icon {...p}><path d="M8 3v5H3" /><path d="M16 3v5h5" /><path d="M21 16h-5v5" /><path d="M3 16h5v5" /></Icon>;
const Smartphone = (p) => <Icon {...p}><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></Icon>;
const Copy = (p) => <Icon {...p}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></Icon>;
const Wifi = (p) => <Icon {...p}><path d="M5 13a10 10 0 0 1 14 0" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M2 9a15 15 0 0 1 20 0" /><circle cx="12" cy="20" r="1" fill="currentColor" stroke="none" /></Icon>;
const Share2 = (p) => <Icon {...p}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 3.9" /><path d="M15.4 6.6L8.6 10.5" /></Icon>;
const Download = (p) => <Icon {...p}><path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M5 21h14" /></Icon>;
const Camera = (p) => <Icon {...p}><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" /><circle cx="12" cy="13" r="3.5" /></Icon>;
// Íconos de marca (usan sus colores propios en vez de currentColor, por eso no reusan <Icon>)
const InstagramIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="igGrad" x1="0" y1="24" x2="24" y2="0">
        <stop offset="0%" stopColor="#FED576" /><stop offset="26%" stopColor="#F47133" />
        <stop offset="61%" stopColor="#BC3081" /><stop offset="100%" stopColor="#4C63D2" />
      </linearGradient>
    </defs>
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="url(#igGrad)" />
    <circle cx="12" cy="12" r="4.6" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="17.3" cy="6.7" r="1.15" fill="#fff" />
  </svg>
);
const FacebookIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="#1877F2" />
    <path d="M14.5 8.5h1.9V5.7h-2.1c-2.1 0-3.4 1.3-3.4 3.5v1.6H8.7v2.8h2.2v6.7h2.9v-6.7h2.1l.4-2.8h-2.5V9.6c0-.7.3-1.1 1.2-1.1z" fill="#fff" />
  </svg>
);
const TikTokIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <rect x="2.5" y="2.5" width="19" height="19" rx="6" fill="#111" />
    <path d="M15.8 6.2c.4 1.4 1.4 2.4 2.9 2.6v2.1c-1 .1-2-.2-2.9-.8v4.6c0 2.4-2 4.3-4.4 4.3s-4.4-1.9-4.4-4.3 2-4.3 4.4-4.3c.2 0 .5 0 .7.1v2.2a2.2 2.2 0 1 0 1.6 2.1V4.6h2.1v1.6z" fill="#fff" />
  </svg>
);
const Lock = (p) => <Icon {...p}><rect x="4" y="10" width="16" height="10" rx="2" /><path d="M7 10V7a5 5 0 0 1 10 0v3" /></Icon>;
const GoogleIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M23.49 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.55-5.17 3.55-8.82z" />
    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.93-2.9l-3.87-3c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.94H1.29v3.1A11.99 11.99 0 0 0 12 24z" />
    <path fill="#FBBC05" d="M5.29 14.31A7.2 7.2 0 0 1 4.91 12c0-.8.14-1.58.38-2.31v-3.1H1.29A11.99 11.99 0 0 0 0 12c0 1.94.46 3.77 1.29 5.41l4-3.1z" />
    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.59l4 3.1C6.23 6.86 8.88 4.75 12 4.75z" />
  </svg>
);

/* ---------------------------------------------------------
   DATOS: banco de preguntas por libro bíblico
--------------------------------------------------------- */
const BOOKS = [
  {
    id: "genesis",
    name: "Génesis",
    testament: "Antiguo Testamento",
    letter: "G",
    questions: [
      { q: "¿Quién fue el primer hombre creado por Dios?", options: ["Adán", "Set", "Caín", "Noé"], correct: 0, chapter: "2", verse: "7", verseText: "Formó, pues, Jehová Dios al hombre del polvo de la tierra, y alentó en su nariz soplo de vida; y fue el hombre en alma viviente." },
      { q: "¿Cómo se llamaba la esposa de Abraham?", options: ["Rebeca", "Sara", "Raquel", "Lea"], correct: 1, chapter: "17", verse: "15", verseText: "Dijo también Dios a Abraham: A Sarai tu mujer no la llamarás Sarai, mas Sara será su nombre." },
      { q: "¿En cuántos días creó Dios el mundo, según el relato de Génesis?", options: ["7", "40", "6", "8"], correct: 2, chapter: "2", verse: "2", verseText: "Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo de toda la obra que había hecho." },
      { q: "¿Qué construyó Noé por instrucción de Dios?", options: ["Un arca", "Un templo", "Una torre", "Un altar"], correct: 0, chapter: "6", verse: "14", verseText: "Hazte un arca de madera de Gofer; harás aposentos en el arca y la embetunarás con brea por dentro y por fuera." },
      { q: "¿Quién mató a su hermano Abel?", options: ["Set", "Caín", "Lot", "Esaú"], correct: 1, chapter: "4", verse: "8", verseText: "...y aconteció que estando ellos en el campo, Caín se levantó contra su hermano Abel, y le mató." },
      { q: "¿Cómo se llama la torre que los hombres intentaron construir hasta el cielo?", options: ["Sinaí", "Babel", "Siloé", "Ararat"], correct: 1, chapter: "11", verse: "9", verseText: "Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra." },
      { q: "¿Cuál era el nombre del hijo que Abraham estuvo dispuesto a sacrificar?", options: ["Ismael", "Jacob", "Isaac", "Esaú"], correct: 2, chapter: "22", verse: "2", verseText: "Y dijo: Toma ahora tu hijo, tu único, Isaac, a quien amas, y vete a tierra de Moriah, y ofrécele allí en holocausto." },
      { q: "¿Qué le pasó a la esposa de Lot al mirar atrás hacia Sodoma?", options: ["Se convirtió en estatua de sal", "Se quedó ciega", "Murió ahogada", "Murió de sed"], correct: 0, chapter: "19", verse: "26", verseText: "Entonces la mujer de Lot miró atrás, a espaldas de él, y se volvió estatua de sal." },
    ],
  },
  {
    id: "exodo",
    name: "Éxodo",
    testament: "Antiguo Testamento",
    letter: "É",
    questions: [
      { q: "¿Quién guió al pueblo de Israel fuera de Egipto?", options: ["Aarón", "Josué", "Moisés", "Caleb"], correct: 2, chapter: "3", verse: "10", verseText: "Ven por tanto ahora, y te enviaré a Faraón, para que saques a mi pueblo, los hijos de Israel, de Egipto." },
      { q: "¿Cuántas plagas envió Dios sobre Egipto?", options: ["10", "7", "12", "9"], correct: 0, chapter: "12", verse: "29", verseText: "Y aconteció que a la medianoche Jehová hirió a todo primogénito en la tierra de Egipto, desde el primogénito de Faraón... hasta el primogénito del cautivo." },
      { q: "¿Qué mar se abrió para que los israelitas escaparan del ejército egipcio?", options: ["Mar Muerto", "Mar Rojo", "Mar de Galilea", "Mar Mediterráneo"], correct: 1, chapter: "14", verse: "21", verseText: "Y extendió Moisés su mano sobre el mar, e hizo Jehová que el mar se retirase por recio viento oriental toda aquella noche; y volvió el mar en seco, y las aguas quedaron divididas." },
      { q: "¿En qué monte recibió Moisés los Diez Mandamientos?", options: ["Sinaí", "Nebo", "Carmelo", "Sion"], correct: 0, chapter: "31", verse: "18", verseText: "Y dio a Moisés, como acabó de hablar con él en el monte de Sinaí, dos tablas del testimonio, tablas de piedra escritas con el dedo de Dios." },
      { q: "¿Qué alimento enviaba Dios cada mañana a los israelitas en el desierto?", options: ["Codornices", "Maná", "Miel", "Pan de cebada"], correct: 1, chapter: "16", verse: "15", verseText: "...Y se decían el uno al otro: ¿Qué es esto? porque no sabían qué era. Entonces Moisés les dijo: Es el pan que Jehová os da para comer." },
      { q: "¿Quién era el hermano de Moisés que hablaba por él ante el Faraón?", options: ["Caleb", "Coré", "Aarón", "Josué"], correct: 2, chapter: "4", verse: "14", verseText: "...¿No conozco yo que hablará él muy bien? Y he aquí también, él te sale a recibir, y en viéndote, se alegrará en su corazón. Aarón, tu hermano, levita, hablará por ti." },
      { q: "¿Qué hizo Moisés para sacar agua de una roca en el desierto?", options: ["La golpeó con su vara", "La rompió con las manos", "Oró toda la noche", "La partió con una espada"], correct: 0, chapter: "17", verse: "6", verseText: "He aquí que yo estoy delante de ti allí sobre la peña en Horeb; y herirás la peña, y saldrán de ella aguas, y beberá el pueblo." },
      { q: "¿Dónde fue encontrado el bebé Moisés?", options: ["En un templo", "En el río Nilo, en una cesta", "En el desierto", "En el palacio de Faraón"], correct: 1, chapter: "2", verse: "5", verseText: "Y descendió la hija de Faraón a lavarse al río... y vio la cestilla en los juncos, y envió una criada suya a tomarla." },
    ],
  },
  {
    id: "salmos",
    name: "Salmos",
    testament: "Antiguo Testamento",
    letter: "S",
    questions: [
      { q: "¿Quién es tradicionalmente considerado el autor de la mayoría de los Salmos?", options: ["Salomón", "David", "Moisés", "Asaf"], correct: 1, chapter: "72", verse: "20", verseText: "Acábanse las oraciones de David, hijo de Isaí." },
      { q: "¿Cómo comienza el Salmo 23?", options: ["\"En el principio...\"", "\"Bienaventurado el varón...\"", "\"El Señor es mi pastor...\"", "\"Alabad a Jehová...\""], correct: 2, chapter: "23", verse: "1", verseText: "Jehová es mi pastor; nada me faltará." },
      { q: "¿Cuál es el salmo más largo de toda la Biblia?", options: ["Salmo 150", "Salmo 119", "Salmo 23", "Salmo 100"], correct: 1, chapter: "119", verse: "1", verseText: "Bienaventurados los perfectos de camino, los que andan en la ley de Jehová." },
      { q: "¿Cuántos salmos hay en total en el libro?", options: ["150", "100", "200", "120"], correct: 0, chapter: "150", verse: "6", verseText: "Todo lo que respira alabe a JAH. Aleluya." },
      { q: "¿Qué salmo es conocido popularmente como el \"Salmo del pastor\"?", options: ["Salmo 91", "Salmo 100", "Salmo 23", "Salmo 119"], correct: 2, chapter: "23", verse: "1", verseText: "Jehová es mi pastor; nada me faltará." },
      { q: "¿Qué instrumento de cuerda se menciona con frecuencia en los Salmos para alabar a Dios?", options: ["El arpa", "La trompeta", "El tambor", "El pandero"], correct: 0, chapter: "33", verse: "2", verseText: "Aclamad a Jehová con arpa; cantadle con salterio y decacordio." },
      { q: "¿Qué palabra hebrea aparece muchas veces en los Salmos, usada como pausa o interludio musical?", options: ["Amén", "Selah", "Aleluya", "Hosanna"], correct: 1, chapter: "3", verse: "4", verseText: "Con mi voz clamé a Jehová, y él me respondió desde el monte de su santidad. Selah." },
      { q: "¿Qué palabra final de alabanza, que significa \"alaben al Señor\", aparece en varios salmos?", options: ["Hosanna", "Aleluya", "Maranatha", "Selah"], correct: 1, chapter: "150", verse: "1", verseText: "Alabad a JAH. Alabad a Dios en su santuario; alabadle en la extensión de su fortaleza." },
    ],
  },
  {
    id: "mateo",
    name: "Mateo",
    testament: "Nuevo Testamento",
    letter: "M",
    questions: [
      { q: "¿En qué ciudad nació Jesús, según el evangelio de Mateo?", options: ["Nazaret", "Belén", "Jerusalén", "Capernaum"], correct: 1, chapter: "2", verse: "1", verseText: "Y como fue nacido Jesús en Belén de Judea en días del rey Herodes, he aquí unos magos vinieron del oriente a Jerusalén." },
      { q: "¿Quiénes visitaron al niño Jesús guiados por una estrella?", options: ["Los magos de oriente", "Los pastores", "Los ángeles", "Los sacerdotes del templo"], correct: 0, chapter: "2", verse: "2", verseText: "Diciendo: ¿Dónde está el Rey de los Judíos, que ha nacido? porque su estrella hemos visto en el oriente, y venimos a adorarle." },
      { q: "¿Quién bautizó a Jesús en el río Jordán?", options: ["Pedro", "Juan el Bautista", "Andrés", "Felipe"], correct: 1, chapter: "3", verse: "13", verseText: "Entonces Jesús vino de Galilea a Juan al Jordán, para ser bautizado de él." },
      { q: "¿Cuántos días ayunó Jesús en el desierto antes de ser tentado?", options: ["7", "40", "12", "3"], correct: 1, chapter: "4", verse: "2", verseText: "Y habiendo ayunado cuarenta días y cuarenta noches, después tuvo hambre." },
      { q: "¿Cómo se llama el discurso de Jesús que incluye las Bienaventuranzas?", options: ["El Sermón del Monte", "La Parábola del Sembrador", "El Sermón del Lago", "El Discurso del Templo"], correct: 0, chapter: "5", verse: "1", verseText: "Y viendo las gentes, subió al monte; y sentándose, se llegaron a él sus discípulos." },
      { q: "¿Cuántos apóstoles eligió Jesús?", options: ["10", "70", "12", "11"], correct: 2, chapter: "10", verse: "1", verseText: "Entonces llamando a sus doce discípulos, les dio potestad contra los espíritus inmundos, para que los echasen fuera, y sanasen toda enfermedad y toda dolencia." },
      { q: "¿Quién traicionó a Jesús por treinta monedas de plata?", options: ["Judas Iscariote", "Pedro", "Tomás", "Simón el zelote"], correct: 0, chapter: "26", verse: "15", verseText: "Y les dijo: ¿Qué me queréis dar, y yo os lo entregaré? Y ellos le señalaron treinta piezas de plata." },
      { q: "¿Quién negó tres veces conocer a Jesús la noche de su arresto?", options: ["Juan", "Pedro", "Santiago", "Andrés"], correct: 1, chapter: "26", verse: "74", verseText: "Entonces comenzó él a hacer imprecaciones, y á jurar, diciendo: No conozco al hombre. Y el gallo cantó luego." },
    ],
  },
  {
    id: "juan",
    name: "Juan",
    testament: "Nuevo Testamento",
    letter: "J",
    questions: [
      { q: "¿Cuál fue el primer milagro de Jesús, según el evangelio de Juan?", options: ["Multiplicar los panes", "Convertir el agua en vino", "Caminar sobre el agua", "Sanar a un ciego"], correct: 1, chapter: "2", verse: "11", verseText: "Este principio de señales hizo Jesús en Caná de Galilea, y manifestó su gloria; y sus discípulos creyeron en él." },
      { q: "¿Cómo comienza el evangelio de Juan?", options: ["\"El Señor es mi pastor...\"", "\"Bienaventurados los pobres...\"", "\"En el principio era el Verbo...\"", "\"Al principio creó Dios los cielos...\""], correct: 2, chapter: "1", verse: "1", verseText: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios." },
      { q: "¿A quién resucitó Jesús después de cuatro días en la tumba?", options: ["Jairo", "Lázaro", "Esteban", "El hijo de la viuda de Naín"], correct: 1, chapter: "11", verse: "43", verseText: "Y habiendo dicho esto, clamó a gran voz: Lázaro, ven fuera." },
      { q: "¿Qué discípulo dudó de la resurrección de Jesús hasta tocar sus heridas?", options: ["Felipe", "Bartolomé", "Tomás", "Andrés"], correct: 2, chapter: "20", verse: "28", verseText: "Entonces Tomás respondió, y le dijo: ¡Señor mío, y Dios mío!" },
      { q: "¿Con quién conversó Jesús junto a un pozo en Samaria?", options: ["Una viuda", "Una mujer samaritana", "Una recaudadora de impuestos", "María Magdalena"], correct: 1, chapter: "4", verse: "7", verseText: "Vino una mujer de Samaria a sacar agua: y Jesús le dice: Dame de beber." },
      { q: "¿A qué discípulo se le identifica tradicionalmente como \"a quien Jesús amaba\" y autor de este evangelio?", options: ["Marcos", "Lucas", "Juan", "Mateo"], correct: 2, chapter: "21", verse: "24", verseText: "Este es aquel discípulo que da testimonio de estas cosas, y escribió estas cosas; y sabemos que su testimonio es verdadero." },
      { q: "¿Qué hizo Jesús con unos pocos panes y peces para alimentar a una multitud?", options: ["Los multiplicó", "Los compró", "Los pescó de nuevo", "Los bendijo y desaparecieron"], correct: 0, chapter: "6", verse: "11", verseText: "Y tomó Jesús aquellos panes, y habiendo dado gracias, repartió a los discípulos, y los discípulos a los que estaban recostados: asimismo de los peces, cuanto querían." },
      { q: "¿Qué le dijo Jesús a Marta antes de resucitar a Lázaro?", options: ["\"Sígueme\"", "\"Yo soy la resurrección y la vida\"", "\"El reino de los cielos se ha acercado\"", "\"Vosotros sois la luz del mundo\""], correct: 1, chapter: "11", verse: "25", verseText: "Le dice Jesús: Yo soy la resurrección y la vida: el que cree en mí, aunque esté muerto, vivirá." },
    ],
  },
  {
    id: "hechos",
    name: "Hechos",
    testament: "Nuevo Testamento",
    letter: "H",
    questions: [
      { q: "¿Qué recibieron los apóstoles el día de Pentecostés?", options: ["El Espíritu Santo", "Las tablas de la ley", "El maná", "La ley de Moisés"], correct: 0, chapter: "2", verse: "4", verseText: "Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, como el Espíritu les daba que hablasen." },
      { q: "¿Quién fue apedreado y se convirtió en el primer mártir cristiano?", options: ["Felipe", "Bernabé", "Esteban", "Santiago"], correct: 2, chapter: "7", verse: "59", verseText: "Y apedrearon a Esteban, invocando él y diciendo: Señor Jesús, recibe mi espíritu." },
      { q: "¿Cómo se llamaba el apóstol Pablo antes de su conversión?", options: ["Simón", "Saulo", "Ananías", "Silas"], correct: 1, chapter: "13", verse: "9", verseText: "Entonces Saulo, que también es Pablo, lleno de Espíritu Santo, poniendo en él los ojos..." },
      { q: "¿En qué camino tuvo Saulo su encuentro con Jesús resucitado?", options: ["El camino a Emaús", "El camino a Damasco", "El camino a Jericó", "El camino a Cesarea"], correct: 1, chapter: "9", verse: "3", verseText: "Y yendo por el camino, aconteció que llegando cerca de Damasco, súbitamente le cercó un resplandor de luz del cielo." },
      { q: "¿Quién ayudó a Saulo a recuperar la vista después de quedar ciego?", options: ["Bernabé", "Timoteo", "Ananías", "Silas"], correct: 2, chapter: "9", verse: "17", verseText: "Y Ananías fue, y entró en la casa, y poniendo sobre él las manos, dijo: Saulo hermano, el Señor Jesús... me ha enviado para que recibas la vista." },
      { q: "¿Quién acompañó a Pablo en varios de sus viajes misioneros?", options: ["Pedro", "Bernabé", "Santiago", "Juan Marcos"], correct: 1, chapter: "13", verse: "2", verseText: "...Apartadme a Bernabé y a Saulo para la obra para la cual los he llamado." },
      { q: "¿En qué ciudad se llamó por primera vez \"cristianos\" a los discípulos?", options: ["Jerusalén", "Roma", "Antioquía", "Éfeso"], correct: 2, chapter: "11", verse: "26", verseText: "...Y los discípulos fueron llamados cristianos primeramente en Antioquía." },
      { q: "¿Qué ocurrió cuando un ángel liberó a Pedro de la cárcel?", options: ["Lo escondieron en un barco", "Las cadenas cayeron y las puertas se abrieron solas", "Se volvió invisible", "Lo llevaron dormido fuera de la ciudad"], correct: 1, chapter: "12", verse: "7", verseText: "...y una luz resplandeció en la cárcel; e hiriendo a Pedro en el lado, le despertó... y las cadenas se le cayeron de las manos." },
    ],
  },
];

const TEAM_COLORS = [
  { hex: "#8B2E3F", name: "Rubí" },
  { hex: "#1F6F5C", name: "Esmeralda" },
  { hex: "#2B5F8A", name: "Zafiro" },
  { hex: "#8A5A2B", name: "Bronce" },
  { hex: "#5B3A70", name: "Amatista" },
  { hex: "#B8892B", name: "Oro" },
];

const TEAM_ICONS = [
  { id: "shield", label: "Escudo", symbol: "\u{1F6E1}\uFE0F" }, { id: "dove", label: "Paloma", symbol: "\u{1F54A}" },
  { id: "crown", label: "Corona", symbol: "\u{1F451}" }, { id: "star", label: "Estrella", symbol: "\u2B50" },
  { id: "fire", label: "Llama", symbol: "\u{1F525}" }, { id: "lion", label: "Leon", symbol: "\u{1F981}" },
];
const BIBLE_BOOKS = [
  ["genesis","Genesis","Antiguo Testamento"],["exodo","Exodo","Antiguo Testamento"],["levitico","Levitico","Antiguo Testamento"],["numeros","Numeros","Antiguo Testamento"],["deuteronomio","Deuteronomio","Antiguo Testamento"],["josue","Josue","Antiguo Testamento"],["jueces","Jueces","Antiguo Testamento"],["rut","Rut","Antiguo Testamento"],["1-samuel","1 Samuel","Antiguo Testamento"],["2-samuel","2 Samuel","Antiguo Testamento"],["1-reyes","1 Reyes","Antiguo Testamento"],["2-reyes","2 Reyes","Antiguo Testamento"],["1-cronicas","1 Cronicas","Antiguo Testamento"],["2-cronicas","2 Cronicas","Antiguo Testamento"],["esdras","Esdras","Antiguo Testamento"],["nehemias","Nehemias","Antiguo Testamento"],["ester","Ester","Antiguo Testamento"],["job","Job","Antiguo Testamento"],["salmos","Salmos","Antiguo Testamento"],["proverbios","Proverbios","Antiguo Testamento"],["eclesiastes","Eclesiastes","Antiguo Testamento"],["cantares","Cantares","Antiguo Testamento"],["isaias","Isaias","Antiguo Testamento"],["jeremias","Jeremias","Antiguo Testamento"],["lamentaciones","Lamentaciones","Antiguo Testamento"],["ezequiel","Ezequiel","Antiguo Testamento"],["daniel","Daniel","Antiguo Testamento"],["oseas","Oseas","Antiguo Testamento"],["joel","Joel","Antiguo Testamento"],["amos","Amos","Antiguo Testamento"],["abdias","Abdias","Antiguo Testamento"],["jonas","Jonas","Antiguo Testamento"],["miqueas","Miqueas","Antiguo Testamento"],["nahum","Nahum","Antiguo Testamento"],["habacuc","Habacuc","Antiguo Testamento"],["sofonias","Sofonias","Antiguo Testamento"],["hageo","Hageo","Antiguo Testamento"],["zacarias","Zacarias","Antiguo Testamento"],["malaquias","Malaquias","Antiguo Testamento"],
  ["mateo","Mateo","Nuevo Testamento"],["marcos","Marcos","Nuevo Testamento"],["lucas","Lucas","Nuevo Testamento"],["juan","Juan","Nuevo Testamento"],["hechos","Hechos","Nuevo Testamento"],["romanos","Romanos","Nuevo Testamento"],["1-corintios","1 Corintios","Nuevo Testamento"],["2-corintios","2 Corintios","Nuevo Testamento"],["galatas","Galatas","Nuevo Testamento"],["efesios","Efesios","Nuevo Testamento"],["filipenses","Filipenses","Nuevo Testamento"],["colosenses","Colosenses","Nuevo Testamento"],["1-tesalonicenses","1 Tesalonicenses","Nuevo Testamento"],["2-tesalonicenses","2 Tesalonicenses","Nuevo Testamento"],["1-timoteo","1 Timoteo","Nuevo Testamento"],["2-timoteo","2 Timoteo","Nuevo Testamento"],["tito","Tito","Nuevo Testamento"],["filemon","Filemon","Nuevo Testamento"],["hebreos","Hebreos","Nuevo Testamento"],["santiago","Santiago","Nuevo Testamento"],["1-pedro","1 Pedro","Nuevo Testamento"],["2-pedro","2 Pedro","Nuevo Testamento"],["1-juan","1 Juan","Nuevo Testamento"],["2-juan","2 Juan","Nuevo Testamento"],["3-juan","3 Juan","Nuevo Testamento"],["judas","Judas","Nuevo Testamento"],["apocalipsis","Apocalipsis","Nuevo Testamento"],
];

const LETTERS = ["A", "B", "C", "D"];
const CUSTOM_BOOK_ID = "personalizado";
const LIBRARY_STORAGE_KEY = "duelo-biblico:biblioteca"; // clave de respaldo local (solo si Firebase no está disponible)

// ---- Firebase: banco de preguntas compartido entre todos los dispositivos ----
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBej5YWGnP_z7zOQ-R4LLxC3Eenv2R-CRQ",
  authDomain: "biblegame-229e6.firebaseapp.com",
  projectId: "biblegame-229e6",
  storageBucket: "biblegame-229e6.firebasestorage.app",
  messagingSenderId: "735706165506",
  appId: "1:735706165506:web:96dabcce7e8d7dba73d21b",
};
const FIRESTORE_COLLECTION = "biblegame";
const FIRESTORE_DOC = "library";
const USERS_COLLECTION = "users";

let firestoreDb = null;
let firebaseAuth = null;
try {
  if (typeof firebase !== "undefined") {
    firebase.initializeApp(FIREBASE_CONFIG);
    firestoreDb = firebase.firestore();
    firebaseAuth = firebase.auth();
  }
} catch (e) {
  // Firebase no se pudo inicializar (bloqueado, sin internet, etc.): se usará localStorage como respaldo
  firestoreDb = null;
  firebaseAuth = null;
}

// Abreviaturas usadas por la fuente de texto bíblico (Reina-Valera, dominio
// público), en el MISMO orden canónico que BIBLE_BOOKS, para poder mapear
// cada libro de la app con su libro correspondiente en el texto fuente.
const BIBLE_API_ABBREVS = [
  "gn", "ex", "lv", "nm", "dt", "js", "jud", "rt", "1sm", "2sm", "1kgs", "2kgs", "1ch", "2ch", "ezr", "ne", "et", "job", "ps", "prv", "ec", "so", "is", "jr", "lm", "ez", "dn", "ho", "jl", "am", "ob", "jn", "mi", "na", "hk", "zp", "hg", "zc", "ml",
  "mt", "mk", "lk", "jo", "act", "rm", "1co", "2co", "gl", "eph", "ph", "cl", "1ts", "2ts", "1tm", "2tm", "tt", "phm", "hb", "jm", "1pe", "2pe", "1jo", "2jo", "3jo", "jd", "re",
];
const BIBLE_TEXT_SOURCE_URL = "https://raw.githubusercontent.com/thiagobodruk/bible/master/json/es_rvr.json";
const bookIdToBibleAbbrev = new Map(BIBLE_BOOKS.map(([id], i) => [id, BIBLE_API_ABBREVS[i]]));

// ---- Modo remoto (pantalla grande + celulares como control) ----
const REMOTE_PEER_PREFIX = "duelo-biblico-";
function generateRoomCode() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // sin caracteres ambiguos (0/O, 1/I)
  let code = "";
  for (let i = 0; i < 4; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}
function getJoinParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("join");
    const team = params.get("team");
    if (code && (team === "1" || team === "2")) {
      return { code: code.toUpperCase(), team: Number(team) };
    }
  } catch { /* sin acceso a la URL (SSR, etc.) */ }
  return null;
}
function buildJoinUrl(code, team) {
  const url = new URL(window.location.href);
  url.search = "";
  url.searchParams.set("join", code);
  url.searchParams.set("team", String(team));
  return url.toString();
}

let bibleTextPromise = null;
// Descarga (una sola vez por sesión) el texto completo de la Biblia Reina-Valera
// desde una fuente pública, y lo deja en caché en memoria para búsquedas rápidas.
function loadBibleText() {
  if (!bibleTextPromise) {
    bibleTextPromise = fetch(BIBLE_TEXT_SOURCE_URL)
      .then((r) => {
        if (!r.ok) throw new Error("No se pudo descargar el texto bíblico.");
        return r.text();
      })
      .then((raw) => JSON.parse(raw.replace(/^\uFEFF/, "")))
      .catch((err) => {
        bibleTextPromise = null; // permite reintentar en el próximo llamado
        throw err;
      });
  }
  return bibleTextPromise;
}

// Convierte "16", "16-18" o "16,18" en la lista de números de versículo [16,17,18] / [16,18]
function parseVerseNumbers(str) {
  return String(str || "")
    .split(",")
    .flatMap((chunk) => {
      const range = chunk.trim().match(/^(\d+)\s*-\s*(\d+)$/);
      if (range) {
        const start = parseInt(range[1], 10), end = parseInt(range[2], 10);
        const nums = [];
        for (let n = start; n <= Math.min(end, start + 40); n++) nums.push(n);
        return nums;
      }
      const n = parseInt(chunk.trim(), 10);
      return Number.isFinite(n) ? [n] : [];
    });
}

// Busca el texto de un capítulo/versículo (o rango) de un libro dentro del
// texto bíblico ya descargado. Lanza un error descriptivo si no lo encuentra.
function findVerseText(bibleData, bookId, chapterStr, verseStr) {
  const abbrev = bookIdToBibleAbbrev.get(bookId);
  if (!abbrev) throw new Error("Este libro no tiene una fuente bíblica asociada.");
  const book = bibleData.find((b) => b.abbrev === abbrev);
  if (!book) throw new Error("No se encontró el libro en el texto bíblico.");
  const chapterNum = parseInt(chapterStr, 10);
  const chapterArr = book.chapters[chapterNum - 1];
  if (!Number.isFinite(chapterNum) || !chapterArr) throw new Error(`El capítulo ${chapterStr || "?"} no existe en este libro.`);
  const verseNums = parseVerseNumbers(verseStr);
  if (verseNums.length === 0) throw new Error("Escribe un número de versículo válido (ej. 16 o 16-18).");
  const texts = verseNums.map((n) => chapterArr[n - 1]);
  if (texts.some((t) => !t)) throw new Error(`El versículo ${verseStr} no existe en ese capítulo.`);
  return texts.join(" ");
}

// Niveles de dificultad de cada pregunta
const DIFFICULTIES = [
  { level: 1, label: "Fácil", color: "#1F6F5C" },
  { level: 2, label: "Intermedio", color: "#B8892B" },
  { level: 3, label: "Difícil", color: "#8B2E3F" },
];
function difficultyInfo(level) {
  return DIFFICULTIES.find((d) => d.level === level) || DIFFICULTIES[0];
}

// Asegura que cada pregunta tenga un "id" único y correlativo DENTRO DE SU LIBRO
// (por ejemplo, la primera pregunta de "Hechos" es la #1 de Hechos) y un nivel
// de "difficulty" (1-3). Las preguntas que ya tienen id conservan su número;
// solo se numeran las que todavía no lo tienen, continuando donde se quedó
// la numeración de ese mismo libro.
function ensureQuestionMeta(library) {
  return library.map((b) => {
    let nextId = 1;
    b.questions.forEach((q) => {
      if (typeof q.id === "number" && q.id >= nextId) nextId = q.id + 1;
    });
    return {
      ...b,
      questions: b.questions.map((q) => {
        const withId = typeof q.id === "number" ? q : { ...q, id: nextId++ };
        return typeof withId.difficulty === "number" ? withId : { ...withId, difficulty: 1 };
      }),
    };
  });
}

// Calcula el próximo id disponible (número siguiente) dentro de un libro específico
function nextQuestionId(library, bookId) {
  const book = library.find((b) => b.id === bookId);
  if (!book) return 1;
  return book.questions.reduce((max, q) => Math.max(max, q.id || 0), 0) + 1;
}

function seedLibrary() {
  const baseById = new Map(BOOKS.map((b) => [b.id, b]));
  return ensureQuestionMeta([
    ...BIBLE_BOOKS.map(([id, name, testament]) => {
      const base = baseById.get(id);
      return base ? { ...base, questions: base.questions.map((q) => ({ ...q, options: [...q.options] })) } : { id, name, testament, letter: name.slice(0, 1), questions: [] };
    }),
    { id: CUSTOM_BOOK_ID, name: "Mis preguntas", testament: "Personalizado", letter: "+", questions: [] },
  ]);
}
function normalizeLibrary(savedLibrary) {
  const savedById = new Map(savedLibrary.map((book) => [book.id, book]));
  const merged = seedLibrary().map((base) => {
    const saved = savedById.get(base.id);
    return saved ? { ...base, ...saved, questions: Array.isArray(saved.questions) ? saved.questions : base.questions } : base;
  });
  return ensureQuestionMeta(merged);
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Modos disponibles para el orden en que aparecen las preguntas durante la partida
const QUESTION_ORDER_MODES = [
  { id: "random", label: "Al azar", description: "Las preguntas salen en un orden aleatorio distinto cada partida." },
  { id: "numeric", label: "Orden numérico", description: "Las preguntas aparecen en el orden de su número (ID)." },
  { id: "alternating", label: "Alternada", description: "Alterna entre la primera y la última pregunta disponible (1, última, 2, penúltima…)." },
];

function orderByNumeric(questions) {
  return [...questions].sort((a, b) => (a.id || 0) - (b.id || 0));
}

function orderAlternating(questions) {
  const sorted = orderByNumeric(questions);
  const result = [];
  let left = 0, right = sorted.length - 1;
  let takeFromLeft = true;
  while (left <= right) {
    if (takeFromLeft) {
      result.push(sorted[left]);
      left++;
    } else {
      result.push(sorted[right]);
      right--;
    }
    takeFromLeft = !takeFromLeft;
  }
  return result;
}

function orderQuestions(questions, mode, basis) {
  const applyMode = (list) => {
    if (mode === "numeric") return orderByNumeric(list);
    if (mode === "alternating") return orderAlternating(list);
    return shuffle(list);
  };
  if (basis === "difficulty") {
    return [1, 2, 3].flatMap((lvl) => applyMode(questions.filter((q) => (q.difficulty || 1) === lvl)));
  }
  return applyMode(questions);
}

// Formatea segundos como "45s", "2m" o "2m 30s" para tiempos largos (hasta 5 min)
function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s === 0 ? `${m} min` : `${m}m ${s}s`;
}

// ---- Sonidos de respuesta (sintetizados, sin archivos externos) ----
let sharedAudioCtx = null;
function getAudioContext() {
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    if (!sharedAudioCtx) sharedAudioCtx = new Ctx();
    if (sharedAudioCtx.state === "suspended") sharedAudioCtx.resume().catch(() => {});
    return sharedAudioCtx;
  } catch {
    return null;
  }
}
function playTone(ctx, freq, startTime, duration, type, peakGain) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(peakGain, startTime + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
  osc.connect(gain).connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.03);
}
function playCorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, 587.33, now, 0.16, "sine", 0.22); // Re5
  playTone(ctx, 880.0, now + 0.13, 0.26, "sine", 0.22); // La5
}
function playIncorrectSound() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const now = ctx.currentTime;
  playTone(ctx, 196.0, now, 0.26, "sawtooth", 0.16); // Sol3
  playTone(ctx, 146.83, now + 0.13, 0.32, "sawtooth", 0.18); // Re3 (más grave: "fallo")
}

// Formato seguro para las partes importantes del texto bíblico.
// **texto** = negrita, ==texto== = resaltado, **==texto==** = ambos.
function FormattedVerse({ text }) {
  const parts = String(text || "").split(/(\*\*==.+?==\*\*|==\*\*.+?\*\*==|\*\*.+?\*\*|==.+?==)/g);
  return parts.map((part, index) => {
    const both = (part.startsWith("**==") && part.endsWith("==**")) || (part.startsWith("==**") && part.endsWith("**=="));
    const bold = both || (part.startsWith("**") && part.endsWith("**"));
    const highlight = both || (part.startsWith("==") && part.endsWith("=="));
    const content = both ? part.replace(/^\*\*==|==\*\*$|^==\*\*|\*\*==$/g, "") : bold ? part.slice(2, -2) : highlight ? part.slice(2, -2) : part;
    return <span key={index} style={{ fontWeight: bold ? 700 : "inherit", background: highlight ? "rgba(212,175,90,0.42)" : "transparent", color: highlight ? "#FFF4CA" : "inherit", borderRadius: highlight ? 3 : 0, padding: highlight ? "0 3px" : 0 }}>{content}</span>;
  });
}

/* ---------------------------------------------------------
   ROSETÓN decorativo (elemento distintivo)
--------------------------------------------------------- */
function RoseWindow({ size = 120, colorA = "#8B2E3F", colorB = "#1F6F5C" }) {
  const petals = 8;
  const items = Array.from({ length: petals });
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ display: "block" }}>
      <circle cx="100" cy="100" r="96" fill="none" stroke="#B8892B" strokeWidth="2" opacity="0.6" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="#B8892B" strokeWidth="1" opacity="0.4" />
      {items.map((_, i) => {
        const angle = (360 / petals) * i;
        const color = i % 2 === 0 ? colorA : colorB;
        return (
          <g key={i} transform={`rotate(${angle} 100 100)`}>
            <path d="M100,100 L100,14 A18,18 0 0 1 118,32 Z" fill={color} opacity="0.85" />
            <line x1="100" y1="100" x2="100" y2="18" stroke="#B8892B" strokeWidth="1" opacity="0.5" />
          </g>
        );
      })}
      <circle cx="100" cy="100" r="22" fill="#16233D" stroke="#B8892B" strokeWidth="2" />
      <circle cx="100" cy="100" r="14" fill="#B8892B" opacity="0.9" />
    </svg>
  );
}

/* ---------------------------------------------------------
   TEMPORIZADOR (anillo regresivo)
--------------------------------------------------------- */
function TimerRing({ secondsLeft, totalSeconds, size = 60 }) {
  const pct = totalSeconds > 0 ? Math.max(0, secondsLeft / totalSeconds) : 0;
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - pct);
  const urgent = secondsLeft <= 5 && secondsLeft > 0;
  const color = urgent ? "#C0405A" : secondsLeft === 0 ? "#6B2836" : "#B8892B";
  const useClock = totalSeconds > 60;
  const displayText = useClock ? `${Math.floor(Math.max(0, secondsLeft) / 60)}:${String(Math.max(0, secondsLeft) % 60).padStart(2, "0")}` : secondsLeft;
  return (
    <div
      className={urgent ? "pulse" : ""}
      style={{ position: "relative", width: size, height: size, flex: "0 0 auto" }}
      role="timer"
      aria-live="polite"
      aria-label={`${secondsLeft} segundos restantes`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#243A5E" strokeWidth="5" />
        <circle
          cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="5"
          strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dashoffset 1s linear, stroke 0.3s ease" }}
        />
      </svg>
      <div
        className="font-display"
        style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color, fontSize: size * (useClock ? 0.24 : 0.32), fontWeight: 700 }}
      >
        {displayText}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   APP
--------------------------------------------------------- */
function App() {
  const [screen, setScreen] = useState("landing");
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");
  const [team1Color, setTeam1Color] = useState(TEAM_COLORS[0].hex);
  const [team2Color, setTeam2Color] = useState(TEAM_COLORS[1].hex);
  const [team1Icon, setTeam1Icon] = useState(TEAM_ICONS[0].id);
  const [team2Icon, setTeam2Icon] = useState(TEAM_ICONS[1].id);
  const [backgroundColor, setBackgroundColor] = useState("#0F1A2E");
  const [narrationEnabled, setNarrationEnabled] = useState(false);
  const [difficultyTimers, setDifficultyTimers] = useState({ 1: 20, 2: 20, 3: 20 });
  function setDifficultyTimer(level, seconds) {
    setDifficultyTimers((prev) => ({ ...prev, [level]: seconds }));
  }
  const [orderBasis, setOrderBasis] = useState("sequence"); // "sequence" | "difficulty"
  const [questionOrder, setQuestionOrder] = useState("random"); // "random" | "numeric" | "alternating"
  const [answerMode, setAnswerMode] = useState("turns"); // "turns" | "both"
  const [bothAnswers, setBothAnswers] = useState({ 1: null, 2: null });
  const [feedbackDisplaySeconds, setFeedbackDisplaySeconds] = useState(3);
  const [verseDisplaySeconds, setVerseDisplaySeconds] = useState(5);
  const [bookId, setBookId] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [qIndex, setQIndex] = useState(0);
  const [turn, setTurn] = useState(1);
  const [scores, setScores] = useState({ 1: 0, 2: 0 });
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const [library, setLibrary] = useState(() => seedLibrary());
  const [libraryLoaded, setLibraryLoaded] = useState(false);
  const [librarySaveError, setLibrarySaveError] = useState(false);
  const [screenBeforeManage, setScreenBeforeManage] = useState("setup");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // ---- Cuenta de usuario (Google, vía Firebase Authentication) ----
  const [currentUser, setCurrentUser] = useState(null); // { uid, name, email, photoURL } | null
  const [userRole, setUserRole] = useState(null); // "admin" | "user" | null (null = no ha iniciado sesión)
  const [authLoading, setAuthLoading] = useState(Boolean(firebaseAuth));
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (!firebaseAuth) { setAuthLoading(false); return; }
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(null);
        setUserRole(null);
        setAuthLoading(false);
        return;
      }
      setCurrentUser({ uid: user.uid, name: user.displayName || "Usuario", email: user.email, photoURL: user.photoURL });
      if (!firestoreDb) { setUserRole("user"); setAuthLoading(false); return; }
      const userRef = firestoreDb.collection(USERS_COLLECTION).doc(user.uid);
      userRef.get().then((snap) => {
        if (snap.exists) {
          setUserRole(snap.data().role || "user");
        } else {
          // primera vez que esta persona inicia sesión: se crea su perfil con rol "user" por defecto
          const profile = {
            name: user.displayName || "Usuario",
            email: user.email || "",
            photoURL: user.photoURL || "",
            role: "user",
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          };
          userRef.set(profile).catch(() => {});
          setUserRole("user");
        }
      }).catch(() => setUserRole("user"))
        .finally(() => setAuthLoading(false));
    });
    return unsubscribe;
  }, []);

  function signInWithGoogle() {
    if (!firebaseAuth) {
      setAuthError("El inicio de sesión no está disponible en este momento.");
      return;
    }
    setAuthError("");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithPopup(provider).catch((err) => {
      setAuthError("No se pudo iniciar sesión. Intenta de nuevo.");
    });
  }

  function signOutUser() {
    if (firebaseAuth) firebaseAuth.signOut();
  }

  const isAdmin = userRole === "admin";

  // Si el usuario inicia sesión mientras está en la pantalla de login (pidiéndola
  // para poder jugar), lo llevamos automáticamente a configurar los equipos.
  useEffect(() => {
    if (screen === "login" && currentUser) setScreen("setup");
  }, [screen, currentUser]);

  // ---- Panel de administradores: solo se carga la lista de usuarios
  // registrados cuando quien tiene la sesión abierta es admin. ----
  const [allUsers, setAllUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);
  useEffect(() => {
    if (!isAdmin || !firestoreDb) { setAllUsers([]); setUsersLoaded(false); return; }
    const unsubscribe = firestoreDb.collection(USERS_COLLECTION).onSnapshot(
      (snap) => {
        const users = snap.docs.map((doc) => ({ uid: doc.id, ...doc.data() }));
        users.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
        setAllUsers(users);
        setUsersLoaded(true);
      },
      () => setUsersLoaded(true)
    );
    return unsubscribe;
  }, [isAdmin]);

  function setUserRoleByUid(uid, role) {
    if (!firestoreDb) return;
    firestoreDb.collection(USERS_COLLECTION).doc(uid).update({ role }).catch(() => {});
  }

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }

  // ---- Modo remoto: la pantalla actual hace de "anfitrión" y cada equipo
  // responde desde su propio celular, conectado por WebRTC (PeerJS). ----
  const [remoteMode, setRemoteMode] = useState("local"); // "local" | "host"
  const [roomCode, setRoomCode] = useState(null);
  const [remoteStatus, setRemoteStatus] = useState({ 1: "disconnected", 2: "disconnected" }); // disconnected | connected
  const [teamPhotos, setTeamPhotos] = useState({ 1: null, 2: null });
  const [remoteError, setRemoteError] = useState("");
  const peerRef = useRef(null);
  const connectionsRef = useRef({ 1: null, 2: null });
  const remoteHandleAnswerRef = useRef(() => {});

  function sendToTeam(team, payload) {
    const conn = connectionsRef.current[team];
    if (conn && conn.open) {
      try { conn.send(payload); } catch { /* la conexión pudo cerrarse justo antes de enviar */ }
    }
  }
  function broadcastToTeams(payload) {
    sendToTeam(1, payload);
    sendToTeam(2, payload);
  }

  function wireConnection(conn) {
    conn.on("open", () => {
      const team = conn.metadata && conn.metadata.team === 2 ? 2 : 1;
      connectionsRef.current[team] = conn;
      setRemoteStatus((prev) => ({ ...prev, [team]: "connected" }));
      conn.on("data", (msg) => {
        if (msg && msg.type === "answer" && typeof msg.index === "number") {
          remoteHandleAnswerRef.current(team, msg.index);
        }
        if (msg && msg.type === "photo" && typeof msg.dataUrl === "string") {
          setTeamPhotos((prev) => ({ ...prev, [team]: msg.dataUrl }));
        }
      });
      conn.on("close", () => {
        connectionsRef.current[team] = null;
        setRemoteStatus((prev) => ({ ...prev, [team]: "disconnected" }));
      });
    });
  }

  function startHosting(attemptsLeft = 5) {
    if (typeof Peer === "undefined") {
      setRemoteError("No se pudo cargar el módulo de conexión remota. Verifica tu conexión a internet.");
      return;
    }
    setRemoteError("");
    const code = generateRoomCode();
    const peer = new Peer(REMOTE_PEER_PREFIX + code);
    peerRef.current = peer;
    peer.on("open", () => setRoomCode(code));
    peer.on("connection", wireConnection);
    peer.on("error", (err) => {
      if (err && err.type === "unavailable-id" && attemptsLeft > 0) {
        peer.destroy();
        startHosting(attemptsLeft - 1);
      } else {
        setRemoteError("No se pudo iniciar el modo remoto. Revisa tu conexión a internet e intenta de nuevo.");
      }
    });
  }

  function stopHosting() {
    connectionsRef.current = { 1: null, 2: null };
    setRemoteStatus({ 1: "disconnected", 2: "disconnected" });
    setTeamPhotos({ 1: null, 2: null });
    setRoomCode(null);
    if (peerRef.current) {
      peerRef.current.destroy();
      peerRef.current = null;
    }
  }

  useEffect(() => () => stopHosting(), []); // limpiar la conexión al desmontar la app

  // Cargar y mantener sincronizada la biblioteca COMPARTIDA entre todos los
  // dispositivos, usando Firebase Firestore en tiempo real. Si Firebase no
  // está disponible (sin internet, bloqueado, etc.), se usa localStorage
  // como respaldo local (solo en ese navegador).
  useEffect(() => {
    function loadFromLocalStorage() {
      try {
        const raw = localStorage.getItem(LIBRARY_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed) && parsed.length > 0) setLibrary(normalizeLibrary(parsed));
        }
      } catch (e) {
        // primera vez que se abre la app, o el navegador bloquea el almacenamiento: se usa la biblioteca base
      } finally {
        setLibraryLoaded(true);
      }
    }

    if (firestoreDb) {
      const docRef = firestoreDb.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOC);
      const unsubscribe = docRef.onSnapshot(
        (snap) => {
          const data = snap.data();
          if (snap.exists && Array.isArray(data?.books) && data.books.length > 0) {
            setLibrary(normalizeLibrary(data.books));
          } else {
            // Primera vez que se usa la base de datos: se siembra con la biblioteca base
            const seeded = seedLibrary();
            docRef.set({ books: seeded, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }).catch(() => {});
            setLibrary(seeded);
          }
          setLibraryLoaded(true);
        },
        () => loadFromLocalStorage() // error de conexión/permisos: se cae al respaldo local
      );
      return unsubscribe;
    }
    loadFromLocalStorage();
  }, []);

  function persistLibrary(next) {
    setLibrary(next);
    if (firestoreDb) {
      firestoreDb.collection(FIRESTORE_COLLECTION).doc(FIRESTORE_DOC)
        .set({ books: next, updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
        .then(() => setLibrarySaveError(false))
        .catch(() => setLibrarySaveError(true));
      return;
    }
    try {
      localStorage.setItem(LIBRARY_STORAGE_KEY, JSON.stringify(next));
      setLibrarySaveError(false);
    } catch (e) {
      setLibrarySaveError(true);
    }
  }

  function addQuestionToBook(targetBookId, question) {
    const id = nextQuestionId(library, targetBookId);
    persistLibrary(library.map((b) => (b.id === targetBookId ? { ...b, questions: [...b.questions, { ...question, id }] } : b)));
  }

  function updateQuestionInBook(targetBookId, qIdx, updatedQuestion) {
    persistLibrary(
      library.map((b) =>
        b.id === targetBookId
          ? { ...b, questions: b.questions.map((q, i) => (i === qIdx ? updatedQuestion : q)) }
          : b
      )
    );
  }

  function deleteQuestionFromBook(targetBookId, qIdx) {
    persistLibrary(
      library.map((b) => (b.id === targetBookId ? { ...b, questions: b.questions.filter((_, i) => i !== qIdx) } : b))
    );
  }

  // Recibe el nuevo orden completo de preguntas de un libro (ya reordenado por
  // arrastre o al asignar una nueva posición) y renumera los id 1..N para que
  // reflejen su nueva posición.
  function reorderQuestionsInBook(targetBookId, orderedQuestions) {
    persistLibrary(
      library.map((b) =>
        b.id === targetBookId ? { ...b, questions: orderedQuestions.map((q, i) => ({ ...q, id: i + 1 })) } : b
      )
    );
  }

  const playableBooks = useMemo(() => library.filter((b) => b.questions.length > 0), [library]);
  const book = useMemo(() => library.find((b) => b.id === bookId), [library, bookId]);
  const customCount = library.find((b) => b.id === CUSTOM_BOOK_ID)?.questions.length || 0;
  const currentQ = questions[qIndex];
  const teamName = (n) => (n === 1 ? team1Name || "Equipo 1" : team2Name || "Equipo 2");
  const teamColor = (n) => (n === 1 ? team1Color : team2Color);
  const teamIcon = (n) => TEAM_ICONS.find((icon) => icon.id === (n === 1 ? team1Icon : team2Icon)) || TEAM_ICONS[0];

  function goToBookSelect() {
    if (!team1Name.trim() || !team2Name.trim()) return;
    if (remoteMode === "host") {
      startHosting();
      setScreen("remote-host");
    } else {
      setScreen("book");
    }
  }

  function openManage(fromScreen) {
    setScreenBeforeManage(fromScreen);
    setScreen("manage");
  }

  function openSettings(fromScreen) {
    setScreenBeforeManage(fromScreen);
    setScreen("settings");
  }

  function startGame(id) {
    const chosen = library.find((b) => b.id === id);
    if (!chosen || chosen.questions.length === 0) return;
    setBookId(id);
    setQuestions(orderQuestions(chosen.questions, questionOrder, orderBasis));
    setQIndex(0);
    setTurn(1);
    setScores({ 1: 0, 2: 0 });
    setSelected(null);
    setBothAnswers({ 1: null, 2: null });
    setShowFeedback(false);
    setScreen("game");
  }

  // Transmite el estado de la pregunta actual a ambos celulares conectados
  // cada vez que algo relevante cambia (nueva pregunta, turno, respuesta...).
  useEffect(() => {
    if (remoteMode !== "host" || screen !== "game" || !currentQ) return;
    const timerSeconds = difficultyTimers[currentQ.difficulty] ?? difficultyTimers[1] ?? 20;
    broadcastToTeams({
      type: "question",
      bookName: book?.name,
      qIndex, total: questions.length,
      turn, difficulty: currentQ.difficulty, timerSeconds,
      options: currentQ.options,
      answerMode,
      bothAnswers,
      showFeedback, selected, correctIndex: showFeedback ? currentQ.correct : null,
      scores, teamNames: { 1: teamName(1), 2: teamName(2) },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteMode, screen, qIndex, turn, showFeedback, selected, scores, answerMode, bothAnswers]);

  // Avisa a los celulares cuando termina el duelo, con el resultado final.
  useEffect(() => {
    if (remoteMode !== "host" || screen !== "results") return;
    broadcastToTeams({
      type: "results",
      scores, teamNames: { 1: teamName(1), 2: teamName(2) },
      winner: scores[1] === scores[2] ? "empate" : scores[1] > scores[2] ? 1 : 2,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteMode, screen]);

  // Registra la respuesta de un equipo. Funciona para los dos modos:
  // - "turns" (por defecto): solo el equipo con el turno puede responder.
  // - "both": ambos equipos responden la MISMA pregunta y suman puntos por
  //   separado. En pantalla local, "turn" indica a quién le toca tocar ahora
  //   (primero un equipo, luego el otro); en modo remoto cada celular puede
  //   responder de forma independiente, sin esperar turno.
  function handleAnswerForTeam(team, idx) {
    if (showFeedback) return;

    if (answerMode === "both") {
      setBothAnswers((prev) => {
        if (prev[team] !== null) return prev; // este equipo ya respondió esta pregunta
        const updated = { ...prev, [team]: idx };
        const bothDone = updated[1] !== null && updated[2] !== null;
        if (bothDone) {
          setShowFeedback(true);
          setScores((s) => {
            const next = { ...s };
            if (updated[1] === currentQ.correct) next[1] += 1;
            if (updated[2] === currentQ.correct) next[2] += 1;
            return next;
          });
          const anyCorrect = updated[1] === currentQ.correct || updated[2] === currentQ.correct;
          if (anyCorrect) playCorrectSound(); else playIncorrectSound();
        } else {
          setTurn(team === 1 ? 2 : 1); // le toca al otro equipo, con temporizador fresco
        }
        return updated;
      });
      return;
    }

    if (team !== turn) return;
    setSelected(idx);
    setShowFeedback(true);
    if (idx === currentQ.correct) {
      setScores((s) => ({ ...s, [turn]: s[turn] + 1 }));
      playCorrectSound();
    } else {
      playIncorrectSound();
    }
  }

  // Mantiene siempre disponible, para los mensajes que lleguen por WebRTC
  // desde los celulares, una versión actualizada de handleAnswerForTeam.
  remoteHandleAnswerRef.current = (team, idx) => {
    if (screen === "game") handleAnswerForTeam(team, idx);
  };

  function nextQuestion() {
    if (qIndex + 1 < questions.length) {
      setQIndex((i) => i + 1);
      setTurn((t) => (t === 1 ? 2 : 1));
      setSelected(null);
      setBothAnswers({ 1: null, 2: null });
      setShowFeedback(false);
    } else {
      setScreen("results");
    }
  }

  function playAgain() {
    setScreen("setup");
    setTeam1Name("");
    setTeam2Name("");
    setBookId(null);
    setQuestions([]);
    stopHosting();
    setRemoteMode("local");
  }

  function rematchSameTeams() {
    setBookId(null);
    setScreen("book");
  }

  const winner =
    scores[1] === scores[2] ? "empate" : scores[1] > scores[2] ? 1 : 2;

  return (
    <div style={{ ...styles.page, background: backgroundColor }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .font-display { font-family: 'Cinzel', serif; letter-spacing: 0.02em; }
        .font-body { font-family: 'Crimson Pro', serif; }
        .font-ui { font-family: 'Inter', sans-serif; }
        .fade-in { animation: fadeIn 0.5s ease both; }
        @keyframes fadeIn { from { opacity:0; transform: translateY(8px);} to {opacity:1; transform:translateY(0);} }
        .opt-btn { transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease; }
        .opt-btn:hover:not(:disabled) { transform: translateY(-2px); }
        .opt-btn:focus-visible { outline: 3px solid #B8892B; outline-offset: 2px; }
        input:focus-visible, button:focus-visible { outline: 3px solid #B8892B; outline-offset: 2px; }
        @media (prefers-reduced-motion: reduce) { .fade-in, .opt-btn, .pulse { animation: none !important; transition: none !important; } }
        ::selection { background: #B8892B; color: #16233D; }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.08); } }
        .pulse { animation: pulse 0.8s ease-in-out infinite; }
        .confetti-piece { position: absolute; top: -12px; animation-name: confetti-fall; animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94); animation-fill-mode: forwards; }
        @keyframes confetti-fall {
          0% { transform: translate(0, -10px) rotate(0deg); opacity: 1; }
          100% { transform: translate(var(--drift), 105vh) rotate(var(--rotate)); opacity: 0.85; }
        }
        @media (prefers-reduced-motion: reduce) { .confetti-piece { display: none; } }
        .verse-toast-overlay { animation: verseOverlay 5s ease forwards; }
        @keyframes verseOverlay {
          0% { opacity: 0; }
          6% { opacity: 1; }
          85% { opacity: 1; }
          100% { opacity: 0; }
        }
        .verse-toast-card { animation: verseCard 5s ease forwards; }
        @keyframes verseCard {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.94); }
          6% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          85% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.97); }
        }
        @media (prefers-reduced-motion: reduce) {
          .verse-toast-overlay, .verse-toast-card { animation: none !important; opacity: 1 !important; }
          .verse-toast-card { transform: translate(-50%, -50%) !important; }
        }
        input[type="range"].gold-range { -webkit-appearance: none; appearance: none; width: 100%; height: 4px; background: #3A5578; border-radius: 4px; outline: none; }
        input[type="range"].gold-range::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: #B8892B; border: 2px solid #F5EFE0; cursor: pointer; margin-top: -1px; }
        input[type="range"].gold-range::-moz-range-thumb { width: 20px; height: 20px; border-radius: 50%; background: #B8892B; border: 2px solid #F5EFE0; cursor: pointer; }
      `}</style>

      {!isFullscreen && (
        <button
          type="button"
          onClick={toggleFullscreen}
          aria-label="Ver en pantalla completa"
          title="Ver en pantalla completa"
          style={{
            position: "fixed", top: "clamp(10px, 3vw, 16px)", right: "clamp(10px, 3vw, 16px)", zIndex: 60,
            width: 42, height: 42, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(15,26,46,0.8)", border: "1.5px solid #3A5578", color: "#D9A93B",
            cursor: "pointer", backdropFilter: "blur(4px)",
          }}
        >
          <Maximize size={19} />
        </button>
      )}

      {screen === "landing" && (
        <LandingScreen onStart={() => setScreen(currentUser ? "setup" : "login")} />
      )}

      {screen === "login" && (
        <LoginScreen
          authLoading={authLoading} currentUser={currentUser} authError={authError}
          onSignIn={signInWithGoogle}
          onBack={() => setScreen("landing")}
        />
      )}

      {screen === "setup" && (
        <SetupScreen
          team1Name={team1Name} setTeam1Name={setTeam1Name}
          team2Name={team2Name} setTeam2Name={setTeam2Name}
          team1Color={team1Color} setTeam1Color={setTeam1Color} team1Icon={team1Icon} setTeam1Icon={setTeam1Icon}
          team2Color={team2Color} setTeam2Color={setTeam2Color} team2Icon={team2Icon} setTeam2Icon={setTeam2Icon}
          customCount={customCount}
          remoteMode={remoteMode} setRemoteMode={setRemoteMode}
          currentUser={currentUser} userRole={userRole} authLoading={authLoading}
          onSignIn={signInWithGoogle} onSignOut={signOutUser}
          onManage={() => openManage("setup")}
          onSettings={() => openSettings("setup")}
          onNext={goToBookSelect}
        />
      )}

      {screen === "remote-host" && (
        <RemoteHostScreen
          roomCode={roomCode}
          remoteStatus={remoteStatus}
          teamPhotos={teamPhotos}
          remoteError={remoteError}
          team1Name={teamName(1)} team2Name={teamName(2)}
          team1Color={team1Color} team2Color={team2Color}
          onContinue={() => setScreen("book")}
          onBack={() => { stopHosting(); setRemoteMode("local"); setScreen("setup"); }}
        />
      )}

      {screen === "book" && (
        <BookSelectScreen
          team1Name={teamName(1)} team2Name={teamName(2)}
          team1Color={team1Color} team2Color={team2Color}
          books={library}
          userRole={userRole}
          onSelect={startGame}
          onManage={() => openManage("book")}
        />
      )}

      {screen === "manage" && (
        isAdmin ? (
          <ManageQuestionsScreen
            library={library}
            onAddQuestion={addQuestionToBook}
            onUpdateQuestion={updateQuestionInBook}
            onDeleteQuestion={deleteQuestionFromBook}
            onReorderQuestions={reorderQuestionsInBook}
            saveError={librarySaveError}
            loaded={libraryLoaded}
            onBack={() => setScreen(screenBeforeManage)}
          />
        ) : (
          <AdminGateScreen
            title="Gestionar preguntas"
            reason="Solo los administradores pueden agregar, editar o borrar preguntas."
            authLoading={authLoading} currentUser={currentUser} userRole={userRole} authError={authError}
            onSignIn={signInWithGoogle} onSignOut={signOutUser}
            onBack={() => setScreen(screenBeforeManage)}
          />
        )
      )}

      {screen === "settings" && (
        isAdmin ? (
          <SettingsScreen
            difficultyTimers={difficultyTimers} setDifficultyTimer={setDifficultyTimer}
            orderBasis={orderBasis} setOrderBasis={setOrderBasis}
            questionOrder={questionOrder} setQuestionOrder={setQuestionOrder}
            answerMode={answerMode} setAnswerMode={setAnswerMode}
            feedbackDisplaySeconds={feedbackDisplaySeconds} setFeedbackDisplaySeconds={setFeedbackDisplaySeconds}
            verseDisplaySeconds={verseDisplaySeconds} setVerseDisplaySeconds={setVerseDisplaySeconds}
            backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
            narrationEnabled={narrationEnabled} setNarrationEnabled={setNarrationEnabled}
            allUsers={allUsers} usersLoaded={usersLoaded} currentUser={currentUser} onSetUserRole={setUserRoleByUid}
            onBack={() => setScreen(screenBeforeManage)}
          />
        ) : (
          <AdminGateScreen
            title="Configuración"
            reason="Solo los administradores pueden cambiar la configuración del duelo."
            authLoading={authLoading} currentUser={currentUser} userRole={userRole} authError={authError}
            onSignIn={signInWithGoogle} onSignOut={signOutUser}
            onBack={() => setScreen(screenBeforeManage)}
          />
        )
      )}

      {screen === "game" && currentQ && (
        <GameScreen
          book={book}
          qIndex={qIndex}
          total={questions.length}
          currentQ={currentQ}
          turn={turn}
          teamName={teamName}
          teamColor={teamColor}
          teamIcon={teamIcon}
          scores={scores}
          selected={selected}
          showFeedback={showFeedback}
          answerMode={answerMode}
          bothAnswers={bothAnswers}
          difficultyTimers={difficultyTimers}
          feedbackDisplaySeconds={feedbackDisplaySeconds}
          verseDisplaySeconds={verseDisplaySeconds}
          narrationEnabled={narrationEnabled}
          remoteMode={remoteMode}
          remoteStatus={remoteStatus}
          teamPhotos={teamPhotos}
          onAnswer={(idx) => handleAnswerForTeam(turn, idx)}
          onNext={nextQuestion}
        />
      )}

      {screen === "results" && (
        <ResultsScreen
          winner={winner}
          teamName={teamName}
          teamColor={teamColor}
          teamIcon={teamIcon}
          scores={scores}
          total={questions.length}
          answerMode={answerMode}
          book={book}
          teamPhotos={remoteMode === "host" ? teamPhotos : null}
          onRematch={rematchSameTeams}
          onNewTeams={playAgain}
        />
      )}
    </div>
  );
}

/* ---------------------------------------------------------
   PANTALLA 1: Configurar equipos
--------------------------------------------------------- */
function LandingScreen({ onStart }) {
  const steps = [
    { title: "Elige un libro bíblico", text: "Génesis, Éxodo, Salmos, Mateo, Juan, Hechos y más — o crea tus propias preguntas." },
    { title: "Forma dos equipos", text: "Ponles nombre, color e ícono. Cada uno responde por turnos, o ambos a la vez, tú decides." },
    { title: "Responde antes de que se acabe el tiempo", text: "Cada pregunta trae su versículo, con opción de búsqueda automática del texto bíblico." },
    { title: "Corona a un campeón", text: "Al final, el equipo con más aciertos recibe su trofeo — con estadísticas y listo para compartir." },
  ];
  const features = [
    { icon: Smartphone, label: "Modo remoto", text: "La pantalla grande muestra las preguntas; cada equipo responde desde su propio celular escaneando un QR." },
    { icon: BookOpen, label: "Texto bíblico automático", text: "Escribe el capítulo y versículo, y la app busca el texto por ti." },
    { icon: BarChart3, label: "Dificultad configurable", text: "Fácil, intermedio o difícil, con su propio tiempo de respuesta." },
    { icon: Share2, label: "Comparte el resultado", text: "Genera una imagen lista para Instagram, Facebook o TikTok al terminar el duelo." },
  ];
  return (
    <div style={styles.container} className="fade-in">
      <header style={{ textAlign: "center", marginBottom: 36 }}>
        <RoseWindow size={110} colorA="#8B2E3F" colorB="#1F6F5C" />
        <h1 className="font-display" style={styles.h1}>Debate Bíblico</h1>
        <p className="font-body" style={{ ...styles.subtitle, maxWidth: 480, margin: "0 auto" }}>
          Un juego de preguntas y respuestas por equipos, pensado para grupos, iglesias y familias que quieren
          poner a prueba (¡y celebrar!) cuánto conocen las Escrituras.
        </p>
        <button
          className="font-ui"
          style={{ ...styles.primaryBtn, marginTop: 26 }}
          onClick={onStart}
        >
          Comenzar <ChevronRight size={18} style={{ marginLeft: 6, verticalAlign: "-3px" }} />
        </button>
      </header>

      <div className="font-ui" style={{ textAlign: "center", color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 16 }}>
        Cómo se juega
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 560, margin: "0 auto 40px" }}>
        {steps.map((s, i) => (
          <div key={i} style={{ ...styles.card, maxWidth: "none", display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div className="font-display" style={{
              width: 34, height: 34, borderRadius: "50%", flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center",
              background: "rgba(184,137,43,0.16)", border: "1.5px solid #B8892B", color: "#D9A93B", fontWeight: 700, fontSize: 15,
            }}>
              {i + 1}
            </div>
            <div>
              <div className="font-ui" style={{ color: "#F5EFE0", fontWeight: 700, fontSize: 14.5, marginBottom: 3 }}>{s.title}</div>
              <div className="font-ui" style={{ color: "#8FA0B8", fontSize: 13 }}>{s.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="font-ui" style={{ textAlign: "center", color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, marginBottom: 16 }}>
        Funciones destacadas
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, maxWidth: 720, margin: "0 auto 40px" }}>
        {features.map((f, i) => {
          const FeatureIcon = f.icon;
          return (
            <div key={i} style={{ ...styles.card, maxWidth: "none" }}>
              <FeatureIcon size={22} color="#D9A93B" />
              <div className="font-ui" style={{ color: "#F5EFE0", fontWeight: 700, fontSize: 14, marginTop: 10, marginBottom: 4 }}>{f.label}</div>
              <div className="font-ui" style={{ color: "#8FA0B8", fontSize: 12.5, lineHeight: 1.5 }}>{f.text}</div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", paddingBottom: 10 }}>
        <button
          className="font-ui"
          style={styles.primaryBtn}
          onClick={onStart}
        >
          Comenzar <ChevronRight size={18} style={{ marginLeft: 6, verticalAlign: "-3px" }} />
        </button>
      </div>
    </div>
  );
}

function SetupScreen({ team1Name, setTeam1Name, team2Name, setTeam2Name, team1Color, setTeam1Color, team1Icon, setTeam1Icon, team2Color, setTeam2Color, team2Icon, setTeam2Icon, customCount, remoteMode, setRemoteMode, currentUser, userRole, authLoading, onSignIn, onSignOut, onManage, onSettings, onNext }) {
  const canContinue = team1Name.trim() && team2Name.trim();
  return (
    <div style={styles.container} className="fade-in">
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
        {!authLoading && (
          currentUser ? (
            <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12 }}>
              {currentUser.photoURL && (
                <img src={currentUser.photoURL} alt={currentUser.name} style={{ width: 24, height: 24, borderRadius: "50%" }} />
              )}
              <span style={{ color: "#B8A98A" }}>
                {currentUser.name}{userRole === "admin" && <span style={{ color: "#D9A93B", fontWeight: 700 }}> · admin</span>}
              </span>
              <button
                type="button" onClick={onSignOut}
                style={{ background: "none", border: "none", color: "#8FA0B8", textDecoration: "underline", cursor: "pointer", fontSize: 11.5 }}
              >
                Cerrar sesión
              </button>
            </div>
          ) : (
            <button
              type="button" className="font-ui"
              onClick={onSignIn}
              style={{
                display: "flex", alignItems: "center", gap: 7, padding: "5px 12px", borderRadius: 20, cursor: "pointer",
                background: "rgba(255,255,255,0.04)", border: "1.5px solid #3A5578", color: "#B8A98A", fontSize: 12,
              }}
            >
              <GoogleIcon size={14} /> Iniciar sesión
            </button>
          )
        )}
      </div>

      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <RoseWindow size={100} colorA={team1Color} colorB={team2Color} />
        <h1 className="font-display" style={styles.h1}>Debate Bíblico</h1>
        <p className="font-body" style={styles.subtitle}>Dos equipos. Un libro de la Escritura. Que gane el que más conoce.</p>
      </header>

      <div style={{ ...styles.card, maxWidth: 420, margin: "0 auto 24px" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
          <Smartphone size={16} /> ¿Cómo van a responder los equipos?
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            type="button" className="font-ui"
            onClick={() => setRemoteMode("local")}
            aria-pressed={remoteMode === "local"}
            style={{
              flex: 1, padding: "10px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700,
              background: remoteMode === "local" ? "#B8892B" : "rgba(255,255,255,0.04)",
              color: remoteMode === "local" ? "#0F1A2E" : "#B8A98A",
              border: remoteMode === "local" ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
            }}
          >
            En esta pantalla
          </button>
          <button
            type="button" className="font-ui"
            onClick={() => setRemoteMode("host")}
            aria-pressed={remoteMode === "host"}
            style={{
              flex: 1, padding: "10px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700,
              background: remoteMode === "host" ? "#B8892B" : "rgba(255,255,255,0.04)",
              color: remoteMode === "host" ? "#0F1A2E" : "#B8A98A",
              border: remoteMode === "host" ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
            }}
          >
            Cada equipo desde su celular
          </button>
        </div>
        {remoteMode === "host" && (
          <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 10 }}>
            Esta pantalla mostrará la pregunta y el versículo; cada equipo tocará su respuesta desde su propio teléfono.
          </div>
        )}
      </div>

      <div style={styles.teamGrid}>
        <TeamCard
          label="Equipo 1"
          name={team1Name}
          setName={setTeam1Name}
          color={team1Color}
          setColor={setTeam1Color}
          icon={team1Icon}
          setIcon={setTeam1Icon}
        />
        <div style={styles.vsWrap} className="font-display" aria-hidden="true">
          <Swords size={28} color="#B8892B" />
        </div>
        <TeamCard
          label="Equipo 2"
          name={team2Name}
          setName={setTeam2Name}
          color={team2Color}
          setColor={setTeam2Color}
          icon={team2Icon}
          setIcon={setTeam2Icon}
        />
      </div>

      <div style={{ textAlign: "center" }}>
        <button
          className="font-ui"
          style={{ ...styles.primaryBtn, opacity: canContinue ? 1 : 0.45, cursor: canContinue ? "pointer" : "not-allowed", marginTop: 28 }}
          onClick={onNext}
          disabled={!canContinue}
        >
          {remoteMode === "host" ? "Conectar celulares" : "Elegir libro bíblico"} <ChevronRight size={18} style={{ marginLeft: 6, verticalAlign: "-3px" }} />
        </button>

        {userRole === "admin" && (
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 16 }}>
            <button
              className="font-ui"
              onClick={onManage}
              style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 13.5, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              <PenLine size={14} />
              {customCount > 0 ? `Editar mis preguntas (${customCount})` : "Agregar mis propias preguntas"}
            </button>

            <button
              className="font-ui"
              onClick={onSettings}
              style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 13.5, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              <Settings size={14} />
              Configuración
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function QRCodeBox({ value, size = 128 }) {
  const containerRef = useRef(null);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof QRCode === "undefined") {
      setReady(false);
      return;
    }
    containerRef.current.innerHTML = ""; // limpiar el QR anterior antes de dibujar el nuevo
    // eslint-disable-next-line no-new
    new QRCode(containerRef.current, {
      text: value,
      width: size,
      height: size,
      colorDark: "#0F1A2E",
      colorLight: "#F5EFE0",
      correctLevel: QRCode.CorrectLevel.M,
    });
  }, [value, size]);

  if (!ready) return null;
  return (
    <div
      ref={containerRef}
      style={{ display: "inline-flex", borderRadius: 10, overflow: "hidden", lineHeight: 0, padding: 6, background: "#F5EFE0" }}
    />
  );
}

function RemoteHostScreen({ roomCode, remoteStatus, teamPhotos, remoteError, team1Name, team2Name, team1Color, team2Color, onContinue, onBack }) {
  const [copiedTeam, setCopiedTeam] = useState(null);

  function copyLink(team) {
    if (!roomCode) return;
    const url = buildJoinUrl(roomCode, team);
    navigator.clipboard?.writeText(url).then(() => {
      setCopiedTeam(team);
      setTimeout(() => setCopiedTeam((prev) => (prev === team ? null : prev)), 2000);
    }).catch(() => {});
  }

  const bothConnected = remoteStatus[1] === "connected" && remoteStatus[2] === "connected";

  return (
    <div style={styles.container} className="fade-in">
      <button
        className="font-ui"
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 14, cursor: "pointer", marginBottom: 18 }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <header style={{ textAlign: "center", marginBottom: 24 }}>
        <Smartphone size={40} color="#B8892B" />
        <h1 className="font-display" style={{ ...styles.h1, marginTop: 10 }}>Conecta los celulares</h1>
        <p className="font-body" style={styles.subtitle}>
          Envía a cada equipo el enlace de abajo (o que lo escriban en su navegador). Esta pantalla mostrará las preguntas y el versículo.
        </p>
      </header>

      {remoteError && (
        <div className="font-ui" style={{ ...styles.card, maxWidth: 480, margin: "0 auto 20px", borderColor: "#8B2E3F", color: "#E88", fontSize: 13.5, textAlign: "center" }}>
          {remoteError}
        </div>
      )}

      {!roomCode && !remoteError && (
        <p className="font-ui" style={{ textAlign: "center", color: "#8FA0B8" }}>Preparando la sala…</p>
      )}

      {roomCode && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          {[1, 2].map((team) => {
            const name = team === 1 ? team1Name : team2Name;
            const color = team === 1 ? team1Color : team2Color;
            const connected = remoteStatus[team] === "connected";
            const url = buildJoinUrl(roomCode, team);
            return (
              <div key={team} style={{ ...styles.card, maxWidth: 300, flex: "1 1 260px", textAlign: "center" }}>
                <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 700, color: "#F5EFE0", fontSize: 17, marginBottom: 4 }}>
                  <span style={{ width: 11, height: 11, borderRadius: "50%", background: color, display: "inline-block" }} />
                  {name}
                </div>
                <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontSize: 12.5, fontWeight: 700, color: connected ? "#4CA98D" : "#B8A98A", marginBottom: 14 }}>
                  <Wifi size={14} /> {connected ? "Conectado" : "Esperando…"}
                </div>

                {teamPhotos && teamPhotos[team] && (
                  <img
                    src={teamPhotos[team]}
                    alt={`Foto del equipo ${name}`}
                    style={{ width: 64, height: 64, borderRadius: "50%", objectFit: "cover", border: `2px solid ${color}`, margin: "0 auto 14px" }}
                  />
                )}

                <div style={{ display: "flex", justifyContent: "center", marginBottom: 14 }}>
                  <QRCodeBox value={url} size={220} />
                </div>
                <div className="font-ui" style={{ fontSize: 12, color: "#8FA0B8", marginBottom: 10 }}>
                  Escanea este código con la cámara del celular
                </div>

                <div className="font-ui" style={{
                  overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                  background: "#0F1A2E", border: "1.5px solid #3A5578", borderRadius: 7, padding: "8px 10px", fontSize: 12.5, color: "#B8A98A", marginBottom: 10,
                }}>
                  {url}
                </div>
                <button
                  type="button" className="font-ui"
                  onClick={() => copyLink(team)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: "9px 12px", borderRadius: 7, cursor: "pointer",
                    background: copiedTeam === team ? "#4CA98D" : "rgba(184,137,43,0.14)",
                    border: `1.5px solid ${copiedTeam === team ? "#4CA98D" : "#B8892B"}`,
                    color: copiedTeam === team ? "#0F1A2E" : "#D9A93B", fontSize: 12.5, fontWeight: 700,
                  }}
                >
                  <Copy size={13} /> {copiedTeam === team ? "¡Copiado!" : "Copiar enlace"}
                </button>
              </div>
            );
          })}
          </div>

          <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", textAlign: "center", marginTop: 4 }}>
            Código de sala: <span style={{ color: "#D9A93B", fontWeight: 700, letterSpacing: "0.1em" }}>{roomCode}</span>
          </div>

          <button
            className="font-ui"
            style={{ ...styles.primaryBtn, marginTop: 10 }}
            onClick={onContinue}
          >
            {bothConnected ? "Continuar" : "Continuar de todos modos"} <ChevronRight size={18} style={{ marginLeft: 6, verticalAlign: "-3px" }} />
          </button>
          {!bothConnected && (
            <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", textAlign: "center" }}>
              Los equipos que no se conecten podrán responder aquí mismo, en esta pantalla, como respaldo.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function TeamCard({ label, name, setName, color, setColor, icon, setIcon }) {
  return (
    <div style={{ ...styles.card, borderColor: color }}>
      <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
        <Users size={16} /> {label}
      </div>
      <input
        className="font-body"
        style={{ ...styles.input, borderColor: color }}
        placeholder="Nombre del equipo"
        value={name}
        maxLength={24}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="font-ui" style={{ fontSize: 12, color: "#B8A98A", marginTop: 14, marginBottom: 8 }}>Color del equipo</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {TEAM_COLORS.map((c) => (
          <button
            key={c.hex}
            aria-label={c.name}
            onClick={() => setColor(c.hex)}
            style={{
              width: 34, height: 34, borderRadius: "50%", background: c.hex, cursor: "pointer",
              border: color === c.hex ? "3px solid #F5EFE0" : "3px solid transparent",
              boxShadow: color === c.hex ? `0 0 0 2px ${c.hex}` : "none",
            }}
          />
        ))}
      </div>
      <div className="font-ui" style={{ fontSize: 12, color: "#B8A98A", marginTop: 14, marginBottom: 8 }}>Icono del equipo</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {TEAM_ICONS.map((item) => <button key={item.id} type="button" title={item.label} aria-label={item.label} onClick={() => setIcon(item.id)} style={{ width: 34, height: 34, borderRadius: 8, background: "#1F3454", color: "#F5EFE0", fontSize: 18, cursor: "pointer", border: icon === item.id ? `2px solid ${color}` : "2px solid transparent" }}>{item.symbol}</button>)}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PANTALLA: Configuración
--------------------------------------------------------- */
function SettingsScreen({ difficultyTimers, setDifficultyTimer, orderBasis, setOrderBasis, questionOrder, setQuestionOrder, answerMode, setAnswerMode, feedbackDisplaySeconds, setFeedbackDisplaySeconds, verseDisplaySeconds, setVerseDisplaySeconds, backgroundColor, setBackgroundColor, narrationEnabled, setNarrationEnabled, allUsers, usersLoaded, currentUser, onSetUserRole, onBack }) {
  return (
    <div style={styles.container} className="fade-in">
      <button
        className="font-ui"
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 14, cursor: "pointer", marginBottom: 18 }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <header style={{ textAlign: "center", marginBottom: 28 }}>
        <h1 className="font-display" style={styles.h1}>Configuración</h1>
        <p className="font-body" style={styles.subtitle}>Ajusta los tiempos del duelo antes de empezar.</p>
      </header>

      <div style={{ ...styles.card, maxWidth: 420, margin: "0 auto" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 16 }}>
          <Timer size={16} /> Tiempo por pregunta según dificultad
        </div>
        {DIFFICULTIES.map((d, i) => (
          <div key={d.level} style={{ marginTop: i > 0 ? 20 : 0 }}>
            <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ color: d.color, fontSize: 13, fontWeight: 700 }}>{d.label}</span>
              <span className="font-display" style={{ color: "#F5EFE0", fontSize: 18 }}>{formatDuration(difficultyTimers[d.level])}</span>
            </div>
            <input
              className="gold-range"
              type="range"
              min={5}
              max={300}
              step={5}
              value={difficultyTimers[d.level]}
              onChange={(e) => setDifficultyTimer(d.level, Number(e.target.value))}
              aria-label={`Segundos por pregunta de dificultad ${d.label}`}
            />
            <div className="font-ui" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8FA0B8", marginTop: 4 }}>
              <span>5s</span><span>5 min</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
          <ListOrdered size={16} /> Orden de las preguntas en el duelo
        </div>
        <div className="font-ui" style={{ fontSize: 12, color: "#8FA0B8", marginBottom: 10 }}>¿En qué se basa el orden?</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
          <button
            type="button" className="font-ui"
            onClick={() => setOrderBasis("sequence")}
            aria-pressed={orderBasis === "sequence"}
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "10px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700,
              background: orderBasis === "sequence" ? "#B8892B" : "rgba(255,255,255,0.04)",
              color: orderBasis === "sequence" ? "#0F1A2E" : "#B8A98A",
              border: orderBasis === "sequence" ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
            }}
          >
            <ListOrdered size={14} /> Orden de preguntas
          </button>
          <button
            type="button" className="font-ui"
            onClick={() => setOrderBasis("difficulty")}
            aria-pressed={orderBasis === "difficulty"}
            style={{
              flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              padding: "10px 8px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700,
              background: orderBasis === "difficulty" ? "#B8892B" : "rgba(255,255,255,0.04)",
              color: orderBasis === "difficulty" ? "#0F1A2E" : "#B8A98A",
              border: orderBasis === "difficulty" ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
            }}
          >
            <BarChart3 size={14} /> Nivel de dificultad
          </button>
        </div>
        {orderBasis === "difficulty" && (
          <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: -10, marginBottom: 16 }}>
            Las preguntas se presentarán agrupadas de Fácil → Intermedio → Difícil.
          </div>
        )}

        <div className="font-ui" style={{ fontSize: 12, color: "#8FA0B8", marginBottom: 10 }}>
          {orderBasis === "difficulty" ? "¿Cómo ordenar dentro de cada nivel?" : "¿Cómo ordenar las preguntas?"}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {QUESTION_ORDER_MODES.map((m) => (
            <button
              key={m.id} type="button" className="font-ui"
              onClick={() => setQuestionOrder(m.id)}
              aria-pressed={questionOrder === m.id}
              style={{
                textAlign: "left", padding: "10px 12px", borderRadius: 8, cursor: "pointer",
                background: questionOrder === m.id ? "rgba(184,137,43,0.16)" : "rgba(255,255,255,0.03)",
                border: questionOrder === m.id ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
              }}
            >
              <div style={{ fontSize: 13.5, fontWeight: 700, color: questionOrder === m.id ? "#B8892B" : "#F5EFE0" }}>{m.label}</div>
              <div style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 2 }}>{m.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
          <Swords size={16} /> Modo de respuesta
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <button
            type="button" className="font-ui"
            onClick={() => setAnswerMode("turns")}
            aria-pressed={answerMode === "turns"}
            style={{
              textAlign: "left", padding: "10px 12px", borderRadius: 8, cursor: "pointer",
              background: answerMode === "turns" ? "rgba(184,137,43,0.16)" : "rgba(255,255,255,0.03)",
              border: answerMode === "turns" ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
            }}
          >
            <div style={{ fontSize: 13.5, fontWeight: 700, color: answerMode === "turns" ? "#B8892B" : "#F5EFE0" }}>Por turnos (clásico)</div>
            <div style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 2 }}>Cada pregunta la responde un solo equipo, alternando.</div>
          </button>
          <button
            type="button" className="font-ui"
            onClick={() => setAnswerMode("both")}
            aria-pressed={answerMode === "both"}
            style={{
              textAlign: "left", padding: "10px 12px", borderRadius: 8, cursor: "pointer",
              background: answerMode === "both" ? "rgba(184,137,43,0.16)" : "rgba(255,255,255,0.03)",
              border: answerMode === "both" ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
            }}
          >
            <div style={{ fontSize: 13.5, fontWeight: 700, color: answerMode === "both" ? "#B8892B" : "#F5EFE0" }}>Ambos equipos responden</div>
            <div style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 2 }}>
              Las mismas preguntas para los dos equipos: cada uno suma su propio punto si acierta (en pantalla local, primero responde uno y luego el otro; en modo remoto, cada celular responde de forma independiente).
            </div>
          </button>
        </div>
      </div>

      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <Check size={16} /> Tiempo para ver la respuesta
          </span>
          <span className="font-display" style={{ color: "#F5EFE0", fontSize: 20 }}>{feedbackDisplaySeconds}s</span>
        </div>
        <input
          className="gold-range"
          type="range"
          min={1}
          max={15}
          step={1}
          value={feedbackDisplaySeconds}
          onChange={(e) => setFeedbackDisplaySeconds(Number(e.target.value))}
          aria-label="Segundos para mostrar si la respuesta fue correcta o incorrecta"
        />
        <div className="font-ui" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8FA0B8", marginTop: 6 }}>
          <span>1s</span><span>15s</span>
        </div>
        <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 8 }}>
          El versículo aparecerá después de este tiempo.
        </div>
      </div>

      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <BookOpen size={16} /> Duración del versículo
          </span>
          <span className="font-display" style={{ color: "#F5EFE0", fontSize: 20 }}>{verseDisplaySeconds}s</span>
        </div>
        <input
          className="gold-range"
          type="range"
          min={2}
          max={15}
          step={1}
          value={verseDisplaySeconds}
          onChange={(e) => setVerseDisplaySeconds(Number(e.target.value))}
          aria-label="Segundos para mostrar el texto del versículo"
        />
        <div className="font-ui" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8FA0B8", marginTop: 6 }}>
          <span>2s</span><span>15s</span>
        </div>
        <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 8 }}>
          Cuánto tiempo se muestra en pantalla el versículo al responder.
        </div>
      </div>
      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <div className="font-ui" style={{ color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Fondo de la aplicacion</div>
        <input type="color" value={backgroundColor} onChange={(e) => setBackgroundColor(e.target.value)} aria-label="Color de fondo" style={{ width: "100%", height: 42, cursor: "pointer" }} />
      </div>
      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <label className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, color: "#F5EFE0", cursor: "pointer" }}>
          <span><span style={{ color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 13 }}>Narrar preguntas y respuestas</span><br /><span style={{ color: "#8FA0B8", fontSize: 11.5 }}>Usa la voz en espanol mas natural disponible en el navegador.</span></span>
          <input type="checkbox" checked={narrationEnabled} onChange={(e) => setNarrationEnabled(e.target.checked)} style={{ width: 20, height: 20 }} />
        </label>
      </div>

      <div style={{ ...styles.card, maxWidth: 420, margin: "16px auto 0" }}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
          <Lock size={16} /> Administradores
        </div>
        <p className="font-ui" style={{ fontSize: 12, color: "#8FA0B8", marginBottom: 14 }}>
          Los administradores pueden editar preguntas y cambiar esta configuración. Aquí puedes dar o quitar ese permiso a cualquier persona que ya haya iniciado sesión al menos una vez.
        </p>
        {!usersLoaded ? (
          <p className="font-ui" style={{ fontSize: 12.5, color: "#8FA0B8" }}>Cargando usuarios…</p>
        ) : allUsers.length === 0 ? (
          <p className="font-ui" style={{ fontSize: 12.5, color: "#8FA0B8" }}>Todavía no hay usuarios registrados.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {allUsers.map((u) => {
              const isSelf = currentUser && u.uid === currentUser.uid;
              const isUserAdmin = u.role === "admin";
              return (
                <div key={u.uid} className="font-ui" style={{
                  display: "flex", alignItems: "center", gap: 10, padding: "8px 10px", borderRadius: 8,
                  background: "rgba(255,255,255,0.03)", border: "1.5px solid #3A5578",
                }}>
                  {u.photoURL && <img src={u.photoURL} alt={u.name} style={{ width: 28, height: 28, borderRadius: "50%", flex: "0 0 auto" }} />}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "#F5EFE0", fontSize: 12.5, fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {u.name || "Sin nombre"} {isSelf && <span style={{ color: "#8FA0B8", fontWeight: 400 }}>(tú)</span>}
                    </div>
                    <div style={{ color: "#8FA0B8", fontSize: 11, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{u.email}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSetUserRole(u.uid, isUserAdmin ? "user" : "admin")}
                    disabled={isSelf}
                    title={isSelf ? "No puedes cambiar tu propio rol desde aquí" : undefined}
                    style={{
                      flex: "0 0 auto", padding: "5px 11px", borderRadius: 20, fontSize: 11, fontWeight: 700,
                      cursor: isSelf ? "not-allowed" : "pointer", opacity: isSelf ? 0.5 : 1,
                      background: isUserAdmin ? "rgba(184,137,43,0.16)" : "rgba(255,255,255,0.04)",
                      border: isUserAdmin ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
                      color: isUserAdmin ? "#D9A93B" : "#B8A98A",
                    }}
                  >
                    {isUserAdmin ? "★ Admin" : "Hacer admin"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PANTALLA 2: Elegir libro
--------------------------------------------------------- */
function BookSelectScreen({ team1Name, team2Name, team1Color, team2Color, books, userRole, onSelect, onManage }) {
  return (
    <div style={styles.container} className="fade-in">
      <header style={{ textAlign: "center", marginBottom: 8 }}>
        <div className="font-ui" style={{ color: "#B8892B", fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
          <span style={{ color: team1Color, fontWeight: 700 }}>{team1Name}</span> &nbsp;vs&nbsp; <span style={{ color: team2Color, fontWeight: 700 }}>{team2Name}</span>
        </div>
        <h1 className="font-display" style={styles.h1}>Elige el libro del duelo</h1>
        <p className="font-body" style={styles.subtitle}>Todas las preguntas de esta ronda saldrán de ese libro.</p>
      </header>

      <div style={styles.bookGrid}>
        {books.map((b) => {
          const isCustom = b.id === CUSTOM_BOOK_ID;
          return (
            <button key={b.id} className="opt-btn" disabled={b.questions.length === 0} title={b.questions.length === 0 ? "Agrega preguntas a este libro antes de iniciar" : "Iniciar debate con este libro"} style={{ ...styles.bookCard, borderColor: isCustom ? "#B8892B" : "#3A5578", opacity: b.questions.length === 0 ? 0.58 : 1, cursor: b.questions.length === 0 ? "not-allowed" : "pointer" }} onClick={() => onSelect(b.id)}>
              <div style={styles.bookDropcap} className="font-display">{b.letter}</div>
              <div style={{ textAlign: "left" }}>
                <div className="font-display" style={{ fontSize: 19, color: "#F5EFE0" }}>{b.name}</div>
                <div className="font-ui" style={{ fontSize: 11.5, color: "#B8A98A", marginTop: 2 }}>{b.testament}</div>
                <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 6 }}>{b.questions.length > 0 ? `${b.questions.length} preguntas` : "Sin preguntas - agrega algunas para jugar"}</div>
              </div>
              <BookOpen size={18} color="#B8892B" style={{ marginLeft: "auto", alignSelf: "center" }} />
            </button>
          );
        })}
      </div>

      {userRole === "admin" && (
        <div style={{ textAlign: "center" }}>
          <button
            className="font-ui"
            onClick={onManage}
            style={{ display: "flex", alignItems: "center", gap: 6, margin: "22px auto 0", background: "none", border: "none", color: "#B8A98A", fontSize: 13.5, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "3px" }}
          >
            <PenLine size={14} />
            Agregar o editar mis preguntas
          </button>
        </div>
      )}
    </div>
  );
}


/* ---------------------------------------------------------
   PANTALLA: Preguntas (crear, editar, borrar — de cualquier libro)
--------------------------------------------------------- */
function LoginScreen({ authLoading, currentUser, authError, onSignIn, onBack }) {
  return (
    <div style={styles.container} className="fade-in">
      <button
        className="font-ui"
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 14, cursor: "pointer", marginBottom: 18 }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <div style={{ ...styles.card, maxWidth: 420, margin: "40px auto 0", textAlign: "center" }}>
        <RoseWindow size={70} colorA="#8B2E3F" colorB="#1F6F5C" />
        <h2 className="font-display" style={{ fontSize: 22, color: "#F5EFE0", margin: "10px 0 8px" }}>Inicia sesión para jugar</h2>
        <p className="font-ui" style={{ color: "#8FA0B8", fontSize: 13.5, marginBottom: 22 }}>
          Para empezar una partida necesitas una cuenta. Usa tu cuenta de Google — es rápido y no necesitas crear otra contraseña.
        </p>

        {authLoading ? (
          <p className="font-ui" style={{ color: "#8FA0B8", fontSize: 13 }}>Verificando tu sesión…</p>
        ) : currentUser ? (
          <p className="font-ui" style={{ color: "#4CA98D", fontSize: 13.5, fontWeight: 700 }}>¡Sesión iniciada! Entrando…</p>
        ) : (
          <button
            type="button" className="font-ui"
            onClick={onSignIn}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "11px 22px", borderRadius: 10, cursor: "pointer",
              background: "#F5EFE0", border: "1.5px solid #F5EFE0", color: "#16233D", fontSize: 14.5, fontWeight: 700,
            }}
          >
            <GoogleIcon size={19} /> Continuar con Google
          </button>
        )}
        {authError && (
          <p className="font-ui" style={{ color: "#C0405A", fontSize: 12.5, marginTop: 14 }}>{authError}</p>
        )}
      </div>
    </div>
  );
}

function AdminGateScreen({ title, reason, authLoading, currentUser, userRole, authError, onSignIn, onSignOut, onBack }) {
  return (
    <div style={styles.container} className="fade-in">
      <button
        className="font-ui"
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 14, cursor: "pointer", marginBottom: 18 }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <div style={{ ...styles.card, maxWidth: 420, margin: "40px auto 0", textAlign: "center" }}>
        <Lock size={32} color="#B8892B" style={{ margin: "0 auto 14px" }} />
        <h2 className="font-display" style={{ fontSize: 22, color: "#F5EFE0", margin: "0 0 8px" }}>{title}</h2>
        <p className="font-ui" style={{ color: "#8FA0B8", fontSize: 13.5, marginBottom: 22 }}>{reason}</p>

        {authLoading ? (
          <p className="font-ui" style={{ color: "#8FA0B8", fontSize: 13 }}>Verificando tu sesión…</p>
        ) : !currentUser ? (
          <button
            type="button" className="font-ui"
            onClick={onSignIn}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 20px", borderRadius: 10, cursor: "pointer",
              background: "#F5EFE0", border: "1.5px solid #F5EFE0", color: "#16233D", fontSize: 14, fontWeight: 700,
            }}
          >
            <GoogleIcon size={18} /> Iniciar sesión con Google
          </button>
        ) : (
          <>
            <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 14 }}>
              {currentUser.photoURL && (
                <img src={currentUser.photoURL} alt={currentUser.name} style={{ width: 32, height: 32, borderRadius: "50%" }} />
              )}
              <div style={{ textAlign: "left" }}>
                <div style={{ color: "#F5EFE0", fontSize: 13.5, fontWeight: 700 }}>{currentUser.name}</div>
                <div style={{ color: "#8FA0B8", fontSize: 11.5 }}>{currentUser.email}</div>
              </div>
            </div>
            <p className="font-ui" style={{ color: "#C0405A", fontSize: 13, marginBottom: 14 }}>
              Tu cuenta no tiene permisos de administrador (rol actual: {userRole || "usuario"}).
            </p>
            <button
              type="button" className="font-ui"
              onClick={onSignOut}
              style={{
                padding: "8px 16px", borderRadius: 8, cursor: "pointer",
                background: "rgba(255,255,255,0.04)", border: "1.5px solid #3A5578", color: "#B8A98A", fontSize: 12.5, fontWeight: 700,
              }}
            >
              Probar con otra cuenta
            </button>
          </>
        )}
        {authError && (
          <p className="font-ui" style={{ color: "#C0405A", fontSize: 12.5, marginTop: 14 }}>{authError}</p>
        )}
      </div>
    </div>
  );
}

function ManageQuestionsScreen({ library, onAddQuestion, onUpdateQuestion, onDeleteQuestion, onReorderQuestions, saveError, loaded, onBack }) {
  const [selectedBookId, setSelectedBookId] = useState(library[0]?.id);
  const [qText, setQText] = useState("");
  const [opts, setOpts] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState(0);
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [verseText, setVerseText] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [formError, setFormError] = useState("");
  const [editState, setEditState] = useState(null); // { index, qText, opts, correct, chapter, verse, verseText, difficulty }
  const [dragIndex, setDragIndex] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [positionDrafts, setPositionDrafts] = useState({}); // { [questionId]: "texto que se está escribiendo" }
  const [verseLookup, setVerseLookup] = useState({ status: "idle", message: "" }); // status: idle | loading | success | error

  const selectedBook = library.find((b) => b.id === selectedBookId) || library[0];
  const canAdd = qText.trim() && opts.every((o) => o.trim()) && chapter.trim() && verse.trim() && verseText.trim();

  function moveQuestion(fromIndex, toIndex) {
    if (fromIndex === toIndex || fromIndex == null || toIndex == null) return;
    const list = [...selectedBook.questions];
    const clampedTo = Math.max(0, Math.min(list.length - 1, toIndex));
    const [moved] = list.splice(fromIndex, 1);
    list.splice(clampedTo, 0, moved);
    onReorderQuestions(selectedBook.id, list);
  }

  function handleDrop(targetIndex) {
    if (dragIndex !== null) moveQuestion(dragIndex, targetIndex);
    setDragIndex(null);
    setDragOverIndex(null);
  }

  function commitPosition(index, q) {
    const raw = positionDrafts[q.id];
    if (raw === undefined) return;
    const target = parseInt(raw, 10);
    setPositionDrafts((prev) => { const next = { ...prev }; delete next[q.id]; return next; });
    if (!Number.isFinite(target)) return;
    moveQuestion(index, target - 1);
  }

  const canLookupVerse = selectedBook && bookIdToBibleAbbrev.has(selectedBook.id);

  // Busca el texto del capítulo/versículo indicados y lo coloca en la casilla
  // correspondiente (formulario de "Nueva pregunta" o el de edición inline).
  async function lookupVerse(chapterVal, verseVal, applyText) {
    if (!canLookupVerse) return;
    if (!chapterVal.trim() || !verseVal.trim()) {
      setVerseLookup({ status: "error", message: "Escribe primero el capítulo y el versículo." });
      return;
    }
    setVerseLookup({ status: "loading", message: "Buscando el texto…" });
    try {
      const bibleData = await loadBibleText();
      const text = findVerseText(bibleData, selectedBook.id, chapterVal, verseVal);
      applyText(text);
      setVerseLookup({ status: "success", message: "Texto encontrado y colocado abajo." });
    } catch (err) {
      setVerseLookup({ status: "error", message: err.message || "No se pudo encontrar el texto. Escríbelo manualmente." });
    }
  }

  function updateOpt(i, val) {
    setOpts((prev) => prev.map((o, idx) => (idx === i ? val : o)));
  }

  function resetForm() {
    setQText("");
    setOpts(["", "", "", ""]);
    setCorrect(0);
    setChapter("");
    setVerse("");
    setVerseText("");
    setDifficulty(1);
    setFormError("");
    setVerseLookup({ status: "idle", message: "" });
  }

  function addQuestion() {
    if (!canAdd) {
      setFormError(`Completa la pregunta, las ${opts.length} opciones, el capítulo, el versículo y su texto antes de agregar.`);
      return;
    }
    onAddQuestion(selectedBook.id, {
      q: qText.trim(),
      options: opts.map((o) => o.trim()),
      correct,
      chapter: chapter.trim(),
      verse: verse.trim(),
      verseText: verseText.trim(),
      difficulty,
    });
    resetForm();
  }

  function startEdit(i, q) {
    setEditState({ index: i, id: q.id, qText: q.q, opts: [...q.options], correct: q.correct, chapter: q.chapter || "", verse: q.verse || "", verseText: q.verseText || "", difficulty: q.difficulty || 1 });
  }

  function updateEditOpt(i, val) {
    setEditState((prev) => ({ ...prev, opts: prev.opts.map((o, idx) => (idx === i ? val : o)) }));
  }

  function addFourthOptionEdit() {
    setEditState((prev) => (prev.opts.length >= 4 ? prev : { ...prev, opts: [...prev.opts, ""] }));
  }

  function removeFourthOptionEdit() {
    setEditState((prev) => {
      if (prev.opts.length <= 3) return prev;
      return { ...prev, opts: prev.opts.slice(0, 3), correct: prev.correct === 3 ? 0 : prev.correct };
    });
  }

  function saveEdit() {
    if (!editState.qText.trim() || !editState.opts.every((o) => o.trim()) || !editState.chapter.trim() || !editState.verse.trim() || !editState.verseText.trim()) return;
    onUpdateQuestion(selectedBook.id, editState.index, {
      id: editState.id,
      q: editState.qText.trim(),
      options: editState.opts.map((o) => o.trim()),
      correct: editState.correct,
      chapter: editState.chapter.trim(),
      verse: editState.verse.trim(),
      verseText: editState.verseText.trim(),
      difficulty: editState.difficulty,
    });
    setEditState(null);
  }

  function deleteQuestion(i) {
    onDeleteQuestion(selectedBook.id, i);
    if (editState?.index === i) setEditState(null);
  }

  return (
    <div style={styles.container} className="fade-in">
      <button
        className="font-ui"
        onClick={onBack}
        style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#B8A98A", fontSize: 14, cursor: "pointer", marginBottom: 18 }}
      >
        <ArrowLeft size={16} /> Volver
      </button>

      <header style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 className="font-display" style={styles.h1}>Preguntas</h1>
        <p className="font-body" style={styles.subtitle}>
          Agrega preguntas nuevas a cualquier libro, o edita y borra las que ya existen. Todo se guarda automáticamente.
        </p>
        <div className="font-ui" style={{
          display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, padding: "4px 12px", borderRadius: 20,
          fontSize: 11.5, fontWeight: 700,
          background: firestoreDb ? "rgba(76,169,141,0.14)" : "rgba(184,137,43,0.14)",
          border: `1.5px solid ${firestoreDb ? "#4CA98D" : "#B8892B"}`,
          color: firestoreDb ? "#4CA98D" : "#D9A93B",
        }}>
          <Wifi size={12} />
          {firestoreDb ? "Sincronizado — visible en todos los dispositivos" : "Solo en este navegador (Firebase no disponible)"}
        </div>
      </header>

      {/* Selector de libro */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 22, justifyContent: "center" }}>
        {library.map((b) => (
          <button
            key={b.id}
            className="font-ui"
            onClick={() => { setSelectedBookId(b.id); setEditState(null); }}
            style={{
              padding: "7px 14px", borderRadius: 20, cursor: "pointer", fontSize: 13.5,
              background: selectedBookId === b.id ? "#B8892B" : "transparent",
              color: selectedBookId === b.id ? "#16233D" : "#F5EFE0",
              border: selectedBookId === b.id ? "1.5px solid #B8892B" : "1.5px solid #3A5578",
              fontWeight: selectedBookId === b.id ? 700 : 500,
            }}
          >
            {b.name} · {b.questions.length}
          </button>
        ))}
      </div>

      {/* Formulario para agregar */}
      <div style={styles.questionCard}>
        <div className="font-ui" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14, flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Nueva pregunta</span>
          <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12.5, color: "#8FA0B8" }}>Libro:</span>
            <select
              className="font-ui"
              value={selectedBookId}
              onChange={(e) => { setSelectedBookId(e.target.value); setEditState(null); }}
              style={{ background: "#0F1A2E", color: "#F5EFE0", border: "1.5px solid #3A5578", borderRadius: 7, padding: "6px 10px", fontSize: 16, maxWidth: "100%" }}
            >
              {library.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </span>
        </div>

        <label className="font-ui" style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Pregunta</label>
        <textarea
          className="font-body"
          value={qText}
          onChange={(e) => setQText(e.target.value)}
          placeholder="Escribe la pregunta…"
          rows={2}
          style={{ ...styles.input, marginTop: 8, resize: "vertical", fontFamily: "inherit" }}
        />

        <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
          <div style={{ flex: 1 }}>
            <label className="font-ui" style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Capítulo</label>
            <input
              className="font-body"
              style={{ ...styles.input, marginTop: 8 }}
              placeholder="Ej. 3"
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="font-ui" style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Versículo</label>
            <input
              className="font-body"
              style={{ ...styles.input, marginTop: 8 }}
              placeholder="Ej. 16 o 16-17"
              value={verse}
              onChange={(e) => setVerse(e.target.value)}
            />
          </div>
        </div>

        {canLookupVerse && (
          <div style={{ marginTop: 10 }}>
            <button
              type="button"
              className="font-ui"
              onClick={() => lookupVerse(chapter, verse, setVerseText)}
              disabled={verseLookup.status === "loading"}
              style={{
                display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", borderRadius: 8,
                background: "rgba(184,137,43,0.14)", border: "1.5px solid #B8892B", color: "#D9A93B",
                fontSize: 13, fontWeight: 700, cursor: verseLookup.status === "loading" ? "wait" : "pointer",
              }}
            >
              <BookOpen size={14} /> {verseLookup.status === "loading" ? "Buscando…" : "Buscar texto en la Biblia"}
            </button>
            {verseLookup.status !== "idle" && (
              <div className="font-ui" style={{ fontSize: 11.5, marginTop: 6, color: verseLookup.status === "error" ? "#C0405A" : verseLookup.status === "success" ? "#4CA98D" : "#8FA0B8" }}>
                {verseLookup.message}
              </div>
            )}
          </div>
        )}

        <label className="font-ui" style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 14, display: "block" }}>Texto del versículo</label>
        <textarea
          className="font-body"
          value={verseText}
          onChange={(e) => setVerseText(e.target.value)}
          placeholder="Escribe aquí el texto bíblico tal como aparece en la Escritura…"
          rows={2}
          style={{ ...styles.input, marginTop: 8, resize: "vertical", fontFamily: "inherit", fontStyle: "italic" }}
        />
        <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 6 }}>
          Formato: <b>**texto**</b> para negrita, <b>==texto==</b> para resaltar y <b>**==texto==**</b> para ambos.
        </div>
        {verseText && <p className="font-body" style={{ color: "#F5EFE0", fontSize: 16, fontStyle: "italic", margin: "10px 0 0" }}>Vista previa: <FormattedVerse text={verseText} /></p>}

        <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
          {opts.map((o, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <button
                type="button"
                onClick={() => setCorrect(i)}
                aria-pressed={correct === i}
                aria-label={`Marcar ${LETTERS[i]} como correcta`}
                className="font-display"
                style={{
                  width: 34, height: 34, borderRadius: 8, flex: "0 0 auto", cursor: "pointer",
                  background: correct === i ? "#1F6F5C" : "rgba(184,137,43,0.15)",
                  border: correct === i ? "1.5px solid #1F6F5C" : "1.5px solid #B8892B",
                  color: correct === i ? "#F5EFE0" : "#D4AF5A", fontSize: 15, fontWeight: 700,
                }}
              >
                {LETTERS[i]}
              </button>
              <input
                className="font-body"
                style={{ ...styles.input, borderColor: correct === i ? "#1F6F5C" : "#3A5578" }}
                placeholder={`Opción ${LETTERS[i]}`}
                value={o}
                onChange={(e) => updateOpt(i, e.target.value)}
              />
            </div>
          ))}
        </div>
        <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 8 }}>
          Toca la letra de la opción correcta.
        </div>

        <label className="font-ui" style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 18, display: "block" }}>Dificultad</label>
        <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
          {DIFFICULTIES.map((d) => (
            <button
              key={d.level}
              type="button"
              className="font-ui"
              onClick={() => setDifficulty(d.level)}
              aria-pressed={difficulty === d.level}
              style={{
                flex: 1, padding: "8px 10px", borderRadius: 8, cursor: "pointer", fontSize: 13.5, fontWeight: 700,
                background: difficulty === d.level ? d.color : "rgba(255,255,255,0.04)",
                color: difficulty === d.level ? "#F5EFE0" : "#B8A98A",
                border: difficulty === d.level ? `1.5px solid ${d.color}` : "1.5px solid #3A5578",
              }}
            >
              {d.label}
            </button>
          ))}
        </div>

        {formError && (
          <div className="font-ui" style={{ marginTop: 12, color: "#C0405A", fontSize: 13 }}>{formError}</div>
        )}
        {saveError && (
          <div className="font-ui" style={{ marginTop: 12, color: "#C0405A", fontSize: 13 }}>
            No se pudo guardar. Revisa tu conexión e intenta de nuevo.
          </div>
        )}

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button className="font-ui" style={{ ...styles.primaryBtn, opacity: canAdd ? 1 : 0.45, cursor: canAdd ? "pointer" : "not-allowed" }} onClick={addQuestion}>
            <Plus size={18} style={{ marginRight: 6, verticalAlign: "-3px" }} />
            Agregar a {selectedBook.name}
          </button>
        </div>
      </div>

      {/* Lista de preguntas del libro seleccionado */}
      <div style={{ marginTop: 30 }}>
        <div className="font-ui" style={{ fontSize: 13, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
          {selectedBook.name} ({selectedBook.questions.length})
        </div>

        {!loaded ? (
          <p className="font-body" style={{ color: "#8FA0B8" }}>Cargando…</p>
        ) : selectedBook.questions.length === 0 ? (
          <p className="font-body" style={{ color: "#8FA0B8" }}>Este libro todavía no tiene preguntas.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {selectedBook.questions.map((q, i) => {
              const isEditing = editState?.index === i;
              if (isEditing) {
                return (
                  <div key={i} style={{ ...styles.questionCard, padding: "18px 18px" }}>
                    <textarea
                      className="font-body"
                      value={editState.qText}
                      onChange={(e) => setEditState((prev) => ({ ...prev, qText: e.target.value }))}
                      rows={2}
                      style={{ ...styles.input, resize: "vertical", fontFamily: "inherit" }}
                    />
                    <div style={{ display: "flex", gap: 12, marginTop: 10 }}>
                      <div style={{ flex: 1 }}>
                        <label className="font-ui" style={{ fontSize: 11, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Capítulo</label>
                        <input
                          className="font-body"
                          style={{ ...styles.input, marginTop: 6 }}
                          placeholder="Ej. 3"
                          value={editState.chapter}
                          onChange={(e) => setEditState((prev) => ({ ...prev, chapter: e.target.value }))}
                        />
                      </div>
                      <div style={{ flex: 1 }}>
                        <label className="font-ui" style={{ fontSize: 11, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.06em" }}>Versículo</label>
                        <input
                          className="font-body"
                          style={{ ...styles.input, marginTop: 6 }}
                          placeholder="Ej. 16"
                          value={editState.verse}
                          onChange={(e) => setEditState((prev) => ({ ...prev, verse: e.target.value }))}
                        />
                      </div>
                    </div>
                    {canLookupVerse && (
                      <div style={{ marginTop: 8 }}>
                        <button
                          type="button"
                          className="font-ui"
                          onClick={() => lookupVerse(editState.chapter, editState.verse, (text) => setEditState((prev) => ({ ...prev, verseText: text })))}
                          disabled={verseLookup.status === "loading"}
                          style={{
                            display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 7,
                            background: "rgba(184,137,43,0.14)", border: "1.5px solid #B8892B", color: "#D9A93B",
                            fontSize: 12, fontWeight: 700, cursor: verseLookup.status === "loading" ? "wait" : "pointer",
                          }}
                        >
                          <BookOpen size={13} /> {verseLookup.status === "loading" ? "Buscando…" : "Buscar texto en la Biblia"}
                        </button>
                        {verseLookup.status !== "idle" && (
                          <div className="font-ui" style={{ fontSize: 11, marginTop: 5, color: verseLookup.status === "error" ? "#C0405A" : verseLookup.status === "success" ? "#4CA98D" : "#8FA0B8" }}>
                            {verseLookup.message}
                          </div>
                        )}
                      </div>
                    )}
                    <label className="font-ui" style={{ fontSize: 11, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 10, display: "block" }}>Texto del versículo</label>
                    <textarea
                      className="font-body"
                      value={editState.verseText}
                      onChange={(e) => setEditState((prev) => ({ ...prev, verseText: e.target.value }))}
                      rows={2}
                      style={{ ...styles.input, marginTop: 6, resize: "vertical", fontFamily: "inherit", fontStyle: "italic" }}
                    />
                    <div className="font-ui" style={{ fontSize: 11, color: "#8FA0B8", marginTop: 5 }}>
                      Usa **texto** (negrita), ==texto== (resaltado) o **==texto==** (ambos).
                    </div>
                    <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                      {editState.opts.map((o, idx) => (
                        <div key={idx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <button
                            type="button"
                            onClick={() => setEditState((prev) => ({ ...prev, correct: idx }))}
                            aria-pressed={editState.correct === idx}
                            className="font-display"
                            style={{
                              width: 34, height: 34, borderRadius: 7, flex: "0 0 auto", cursor: "pointer",
                              background: editState.correct === idx ? "#1F6F5C" : "rgba(184,137,43,0.15)",
                              border: editState.correct === idx ? "1.5px solid #1F6F5C" : "1.5px solid #B8892B",
                              color: editState.correct === idx ? "#F5EFE0" : "#D4AF5A", fontSize: 13.5, fontWeight: 700,
                            }}
                          >
                            {LETTERS[idx]}
                          </button>
                          <input
                            className="font-body"
                            style={{ ...styles.input, borderColor: editState.correct === idx ? "#1F6F5C" : "#3A5578" }}
                            value={o}
                            onChange={(e) => updateEditOpt(idx, e.target.value)}
                          />
                          {idx === 3 && (
                            <button
                              type="button"
                              className="font-ui"
                              onClick={removeFourthOptionEdit}
                              aria-label="Quitar opción D"
                              style={{ flex: "0 0 auto", background: "none", border: "none", color: "#8FA0B8", cursor: "pointer", padding: 4 }}
                            >
                              <X size={15} />
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                    {editState.opts.length < 4 && (
                      <button
                        type="button"
                        className="font-ui"
                        onClick={addFourthOptionEdit}
                        style={{
                          display: "flex", alignItems: "center", gap: 6, marginTop: 8, padding: "5px 10px", borderRadius: 6, cursor: "pointer",
                          background: "rgba(184,137,43,0.1)", border: "1.5px dashed #B8892B", color: "#D9A93B", fontSize: 11.5, fontWeight: 700,
                        }}
                      >
                        + Agregar opción D
                      </button>
                    )}
                    <label className="font-ui" style={{ fontSize: 11, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 12, display: "block" }}>Dificultad</label>
                    <div style={{ display: "flex", gap: 8, marginTop: 6 }}>
                      {DIFFICULTIES.map((d) => (
                        <button
                          key={d.level}
                          type="button"
                          className="font-ui"
                          onClick={() => setEditState((prev) => ({ ...prev, difficulty: d.level }))}
                          aria-pressed={editState.difficulty === d.level}
                          style={{
                            flex: 1, padding: "7px 10px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 700,
                            background: editState.difficulty === d.level ? d.color : "rgba(255,255,255,0.04)",
                            color: editState.difficulty === d.level ? "#F5EFE0" : "#B8A98A",
                            border: editState.difficulty === d.level ? `1.5px solid ${d.color}` : "1.5px solid #3A5578",
                          }}
                        >
                          {d.label}
                        </button>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: 10, justifyContent: "flex-end", marginTop: 14 }}>
                      <button className="font-ui" style={styles.secondaryBtn} onClick={() => setEditState(null)}>Cancelar</button>
                      <button className="font-ui" style={styles.primaryBtn} onClick={saveEdit}>Guardar cambios</button>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  draggable
                  onDragStart={() => setDragIndex(i)}
                  onDragOver={(e) => { e.preventDefault(); setDragOverIndex(i); }}
                  onDragLeave={() => setDragOverIndex((prev) => (prev === i ? null : prev))}
                  onDrop={(e) => { e.preventDefault(); handleDrop(i); }}
                  onDragEnd={() => { setDragIndex(null); setDragOverIndex(null); }}
                  style={{
                    ...styles.card, maxWidth: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12,
                    opacity: dragIndex === i ? 0.4 : 1,
                    outline: dragOverIndex === i && dragIndex !== null && dragIndex !== i ? "2px dashed #B8892B" : "none",
                    outlineOffset: 2,
                  }}
                >
                  <div
                    className="font-ui"
                    title="Arrastra para reordenar"
                    aria-label="Arrastra para reordenar esta pregunta"
                    style={{ cursor: "grab", color: "#8FA0B8", flex: "0 0 auto", paddingTop: 2, touchAction: "none" }}
                  >
                    <GripVertical size={18} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 11.5, color: "#8FA0B8" }}>Posición</span>
                      <input
                        type="number"
                        min={1}
                        max={selectedBook.questions.length}
                        className="font-ui"
                        value={positionDrafts[q.id] ?? q.id}
                        onChange={(e) => setPositionDrafts((prev) => ({ ...prev, [q.id]: e.target.value }))}
                        onBlur={() => commitPosition(i, q)}
                        onKeyDown={(e) => { if (e.key === "Enter") { e.currentTarget.blur(); } }}
                        aria-label={`Posición de la pregunta ${q.id} de ${selectedBook.name}`}
                        style={{
                          width: 52, background: "#0F1A2E", color: "#F5EFE0", border: "1.5px solid #3A5578",
                          borderRadius: 6, padding: "2px 6px", fontSize: 12.5, textAlign: "center",
                        }}
                      />
                      <span style={{ fontSize: 11.5, color: "#8FA0B8" }}>de {selectedBook.questions.length}</span>
                      <span style={{
                        fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 10,
                        color: difficultyInfo(q.difficulty).color, border: `1px solid ${difficultyInfo(q.difficulty).color}`,
                      }}>
                        {difficultyInfo(q.difficulty).label}
                      </span>
                    </div>
                    <p className="font-body" style={{ color: "#F5EFE0", fontSize: 16, margin: 0 }}>{q.q}</p>
                    {(q.chapter || q.verse) && (
                      <div className="font-ui" style={{ fontSize: 11.5, color: "#8FA0B8", marginTop: 4 }}>
                        {selectedBook.name} {q.chapter}{q.chapter && q.verse ? ":" : ""}{q.verse}
                      </div>
                    )}
                    {q.verseText && (
                      <p className="font-body" style={{ color: "#B8A98A", fontSize: 13.5, fontStyle: "italic", margin: "6px 0 0" }}>"<FormattedVerse text={q.verseText} />"</p>
                    )}
                    <div className="font-ui" style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 8, fontSize: 12.5 }}>
                      {q.options.map((o, idx) => (
                        <span
                          key={idx}
                          style={{
                            padding: "3px 9px", borderRadius: 6,
                            background: idx === q.correct ? "rgba(31,111,92,0.25)" : "rgba(255,255,255,0.04)",
                            color: idx === q.correct ? "#4CA98D" : "#B8A98A",
                            border: idx === q.correct ? "1px solid #1F6F5C" : "1px solid #3A5578",
                          }}
                        >
                          {LETTERS[idx]}: {o}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 4, flex: "0 0 auto" }}>
                    <button
                      aria-label="Editar pregunta"
                      onClick={() => startEdit(i, q)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#B8892B", padding: 4 }}
                    >
                      <PenLine size={16} />
                    </button>
                    <button
                      aria-label="Eliminar pregunta"
                      onClick={() => deleteQuestion(i)}
                      style={{ background: "none", border: "none", cursor: "pointer", color: "#8FA0B8", padding: 4 }}
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   PANTALLA 3: Juego
--------------------------------------------------------- */
function GameScreen({ book, qIndex, total, currentQ, turn, teamName, teamColor, teamIcon, scores, selected, showFeedback, answerMode, bothAnswers, difficultyTimers, feedbackDisplaySeconds, verseDisplaySeconds, narrationEnabled, remoteMode, remoteStatus, teamPhotos, onAnswer, onNext }) {
  const activeColor = teamColor(turn);
  const timerSeconds = difficultyTimers[currentQ?.difficulty] ?? difficultyTimers[1] ?? 20;
  const [timeLeft, setTimeLeft] = useState(timerSeconds);
  const [verseVisible, setVerseVisible] = useState(false);
  const [verseSecondsLeft, setVerseSecondsLeft] = useState(verseDisplaySeconds);

  // Reinicia el reloj cada vez que cambia la pregunta, o cuando le toca
  // responder al segundo equipo en el modo "ambos equipos" (mismo qIndex).
  useEffect(() => {
    setTimeLeft(timerSeconds);
  }, [qIndex, turn, timerSeconds]);

  // Cuenta regresiva
  useEffect(() => {
    if (showFeedback) return;
    if (timeLeft <= 0) {
      onAnswer(-1); // se acabó el tiempo: cuenta como sin respuesta
      return;
    }
    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(id);
  }, [timeLeft, showFeedback]);

  // Primero muestra el resultado y luego, tras el intervalo configurado, el versículo.
  useEffect(() => {
    if (showFeedback && currentQ?.verseText) {
      setVerseVisible(false);
      const showTimer = setTimeout(() => {
        setVerseSecondsLeft(verseDisplaySeconds);
        setVerseVisible(true);
      }, feedbackDisplaySeconds * 1000);
      const hideTimer = setTimeout(() => setVerseVisible(false), (feedbackDisplaySeconds + verseDisplaySeconds) * 1000);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
    setVerseVisible(false);
  }, [showFeedback, qIndex, currentQ, feedbackDisplaySeconds, verseDisplaySeconds]);

  useEffect(() => {
    if (!verseVisible || verseSecondsLeft <= 0) return;
    const id = setTimeout(() => setVerseSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [verseVisible, verseSecondsLeft]);

  const timedOut = answerMode === "both"
    ? showFeedback && (bothAnswers[1] === -1 || bothAnswers[2] === -1)
    : showFeedback && selected === -1;

  useEffect(() => {
    if (!narrationEnabled || !window.speechSynthesis || !currentQ) return;
    window.speechSynthesis.cancel();
    const voices = window.speechSynthesis.getVoices();
    const spanishVoice = voices.find((voice) => /^es(-|_)/i.test(voice.lang)) || voices.find((voice) => /spanish|espanol/i.test(voice.name));
    const utterance = new SpeechSynthesisUtterance(`Pregunta: ${currentQ.q}. Posibles respuestas: ${currentQ.options.map((option, index) => `${LETTERS[index]}: ${option}`).join('. ')}.`);
    utterance.lang = spanishVoice?.lang || "es-ES";
    utterance.voice = spanishVoice || null;
    utterance.rate = 0.92;
    window.speechSynthesis.speak(utterance);
    return () => window.speechSynthesis.cancel();
  }, [qIndex, narrationEnabled]);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={styles.container} className="fade-in">
        {/* Marcador */}
        <div style={styles.scoreBar}>
          <ScorePill name={teamName(1)} icon={teamIcon(1)} color={teamColor(1)} score={scores[1]} active={turn === 1} align="left" connected={remoteMode === "host" ? remoteStatus[1] === "connected" : null} photo={remoteMode === "host" ? teamPhotos?.[1] : null} />
          <div className="font-ui" style={{ textAlign: "center", color: "#B8A98A", fontSize: "clamp(10px, 2.6vw, 12.5px)", flex: "0 1 auto", minWidth: 0, padding: "6px 4px 0" }}>
            <div className="font-display" style={{ color: "#B8892B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "clamp(17px, 6vw, 26px)" }}>{book?.name}</div>
            <div style={{ marginTop: 2 }}>Pregunta {qIndex + 1} de {total}</div>
          </div>
          <ScorePill name={teamName(2)} icon={teamIcon(2)} color={teamColor(2)} score={scores[2]} active={turn === 2} align="right" connected={remoteMode === "host" ? remoteStatus[2] === "connected" : null} photo={remoteMode === "host" ? teamPhotos?.[2] : null} />
        </div>

        {/* Barra de progreso */}
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${((qIndex) / total) * 100}%` }} />
        </div>
      </div>

      {/* Pregunta en grande — usa todo el ancho de la pantalla, pensada para proyector */}
      <div key={"bigq" + qIndex} className="fade-in" style={{ width: "100%", maxWidth: "min(96vw, 1400px)", margin: "22px auto 6px", textAlign: "center", padding: "0 clamp(12px, 4vw, 40px)" }}>
        {(currentQ.chapter || currentQ.verse) && (
          <div className="font-ui" style={{ fontSize: "clamp(12px, 2.6vw, 16px)", color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, marginBottom: 10 }}>
            {book?.name} {currentQ.chapter}{currentQ.chapter && currentQ.verse ? ":" : ""}{currentQ.verse}
          </div>
        )}
        <p className="font-display" style={{ fontSize: "clamp(24px, 4.6vw, 48px)", color: "#F5EFE0", lineHeight: 1.3, fontWeight: 700, margin: 0, whiteSpace: "normal" }}>
          {currentQ.q}
        </p>
      </div>

      <div style={styles.container} className="fade-in">
        {/* Turno + temporizador */}
        <div key={qIndex + "-" + turn} className="fade-in" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, margin: "10px 0 16px", textAlign: "center" }}>
          <div className="font-ui" style={{ fontSize: 16, color: "#F5EFE0" }}>
            {answerMode === "both" ? (
              <>Le toca responder a <span style={{ color: activeColor, fontWeight: 700 }}>{teamName(turn)}</span></>
            ) : (
              <>Turno de <span style={{ color: activeColor, fontWeight: 700 }}>{teamName(turn)}</span></>
            )}
          </div>
          {answerMode === "both" && !showFeedback && (bothAnswers[1] !== null || bothAnswers[2] !== null) && (
            <div className="font-ui fade-in" style={{ fontSize: 12.5, color: "#4CA98D", fontWeight: 700 }}>
              ✔ {teamName(bothAnswers[1] !== null ? 1 : 2)} ya respondió
            </div>
          )}
          <TimerRing secondsLeft={timeLeft} totalSeconds={timerSeconds} size={116} />
        </div>
      </div>

      {/* Opciones de respuesta — ancho amplio y letra grande, pensadas para proyector */}
      <div style={{ width: "100%", maxWidth: "min(96vw, 1100px)", margin: "0 auto" }} className="fade-in">
        <div key={"q" + qIndex} className="fade-in" style={{ ...styles.questionCard, borderColor: activeColor }}>
          {timedOut && (
            <div className="font-ui" style={{ marginBottom: 10, color: "#C0405A", fontSize: 13.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {answerMode === "both"
                ? "⏱ Tiempo agotado para algún equipo — sin punto en ese caso"
                : `⏱ Tiempo agotado — sin punto para ${teamName(turn)}`}
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22 }}>
            {currentQ.options.map((opt, idx) => {
              const isCorrect = idx === currentQ.correct;
              const isSelected = idx === selected;
              const pickedByTeams = answerMode === "both" && showFeedback
                ? [1, 2].filter((t) => bothAnswers[t] === idx)
                : [];
              let bg = "#1F3454";
              let border = "#3A5578";
              if (showFeedback) {
                if (isCorrect) { bg = "#1F6F5C"; border = "#1F6F5C"; }
                else if (answerMode === "both") {
                  if (pickedByTeams.length > 0) { bg = "#1A2C48"; border = teamColor(pickedByTeams[0]); }
                } else if (isSelected) { bg = "#8B2E3F"; border = "#8B2E3F"; }
                else { bg = "#1A2C48"; border = "#2A3E5C"; }
              }
              return (
                <button
                  key={idx}
                  className="opt-btn font-body"
                  disabled={showFeedback}
                  onClick={() => onAnswer(idx)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "clamp(16px, 2.6vw, 26px) clamp(18px, 3vw, 30px)", borderRadius: 14, background: bg, border: `2px solid ${border}`,
                    color: "#F5EFE0", fontSize: "clamp(19px, 3vw, 32px)", textAlign: "left", cursor: showFeedback ? "default" : "pointer",
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "clamp(14px, 2vw, 22px)" }}>
                    <span
                      className="font-display"
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        width: "clamp(38px, 5vw, 56px)", height: "clamp(38px, 5vw, 56px)", borderRadius: 10, flex: "0 0 auto",
                        background: "rgba(184,137,43,0.18)", border: "1.5px solid #B8892B",
                        color: "#D4AF5A", fontSize: "clamp(17px, 2.2vw, 25px)", fontWeight: 700,
                      }}
                    >
                      {LETTERS[idx]}
                    </span>
                    <span>{opt}</span>
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {answerMode === "both" && pickedByTeams.map((t) => (
                      <span
                        key={t}
                        className="font-ui"
                        style={{
                          fontSize: 12, fontWeight: 700, padding: "3px 9px", borderRadius: 20, flex: "0 0 auto",
                          background: teamColor(t), color: "#F5EFE0", whiteSpace: "nowrap",
                        }}
                      >
                        {teamIcon(t).symbol} {teamName(t)}
                      </span>
                    ))}
                    {showFeedback && isCorrect && <Check size={28} color="#F5EFE0" />}
                    {showFeedback && answerMode !== "both" && isSelected && !isCorrect && <X size={28} color="#F5EFE0" />}
                  </span>
                </button>
              );
            })}
          </div>

          {showFeedback && (
            answerMode === "both" ? (
              <div className="font-ui fade-in" style={{ marginTop: 20, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
                {[1, 2].map((t) => (
                  <span key={t} className="font-display" style={{ color: bothAnswers[t] === currentQ.correct ? "#63C7A7" : "#F08A9D", fontSize: 18, fontWeight: 700 }}>
                    {teamName(t)}: {bothAnswers[t] === currentQ.correct ? "✔ Correcto" : "✘ Incorrecto"}
                  </span>
                ))}
              </div>
            ) : (
              <div className="font-display fade-in" style={{ marginTop: 20, textAlign: "center", color: selected === currentQ.correct ? "#63C7A7" : "#F08A9D", fontSize: 22, letterSpacing: "0.1em" }}>
                {selected === currentQ.correct ? "Correcto" : "Incorrecto"}
              </div>
            )
          )}
          {showFeedback && (
            <div style={{ marginTop: 22, textAlign: "center" }} className="fade-in">
              <button className="font-ui" style={styles.primaryBtn} onClick={onNext}>
                {qIndex + 1 < total ? "Siguiente pregunta" : "Ver resultados"}
                <ChevronRight size={18} style={{ marginLeft: 6, verticalAlign: "-3px" }} />
              </button>
            </div>
          )}
        </div>
      </div>

      <div style={styles.container} className="fade-in">
      {/* Mensaje emergente con el texto del versículo */}
      {verseVisible && currentQ.verseText && (
        <>
          <div key={"verse-overlay" + qIndex} className="verse-toast-overlay" style={{ ...styles.verseToastOverlay, animationDuration: `${verseDisplaySeconds}s` }} aria-hidden="true" />
          <div key={"verse-toast" + qIndex} className="verse-toast-card" style={{ ...styles.verseToast, animationDuration: `${verseDisplaySeconds}s` }} role="status" aria-live="polite">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TimerRing secondsLeft={verseSecondsLeft} totalSeconds={verseDisplaySeconds} size={40} />
            </div>
            <div className="font-display" style={{ fontSize: 20, color: "#D4AF5A", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 10, marginBottom: 16, textAlign: "center" }}>
              {book?.name} {currentQ.chapter}{currentQ.chapter && currentQ.verse ? ":" : ""}{currentQ.verse}
            </div>
            <p className="font-body" style={{ margin: 0, color: "#F5EFE0", fontSize: "clamp(20px, 4.2vw, 27px)", fontStyle: "italic", lineHeight: 1.5, textAlign: "center" }}>
              "<FormattedVerse text={currentQ.verseText} />"
            </p>
          </div>
        </>
      )}
      </div>
    </div>
  );
}

function ScorePill({ name, icon, color, score, active, align, connected, photo }) {
  const isRight = align === "right";
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: isRight ? "flex-end" : "flex-start",
      gap: 6, minWidth: 0, opacity: active ? 1 : 0.55, transition: "opacity 0.2s ease",
    }}>
      <div className="font-ui" style={{
        fontSize: "clamp(16px, 5vw, 23px)", color: "#F5EFE0", fontWeight: 800, lineHeight: 1.15,
        textAlign: isRight ? "right" : "left", maxWidth: "38vw", wordBreak: "break-word",
        display: "flex", alignItems: "center", gap: 6, flexDirection: isRight ? "row-reverse" : "row",
      }}>
        <span aria-hidden="true">{icon.symbol} {name}</span>
        {connected !== null && connected !== undefined && (
          <span
            title={connected ? "Celular conectado" : "Esperando el celular de este equipo"}
            style={{
              width: 9, height: 9, borderRadius: "50%", flex: "0 0 auto",
              background: connected ? "#4CA98D" : "#8B2E3F",
              boxShadow: connected ? "0 0 6px #4CA98D" : "none",
            }}
          />
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, flexDirection: isRight ? "row-reverse" : "row" }}>
        {photo && (
          <img
            src={photo}
            alt={`Foto de ${name}`}
            style={{
              width: "clamp(34px, 9vw, 44px)", height: "clamp(34px, 9vw, 44px)", borderRadius: "50%",
              objectFit: "cover", flex: "0 0 auto", border: `2px solid ${color}`,
            }}
          />
        )}
        <div style={{
          width: "clamp(48px, 14vw, 66px)", height: "clamp(48px, 14vw, 66px)", borderRadius: "50%", background: color,
          display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto",
          fontFamily: "'Cinzel', serif", fontWeight: 800, color: "#F5EFE0", fontSize: "clamp(20px, 6vw, 27px)",
          boxShadow: active ? `0 0 0 3px #16233D, 0 0 0 5px ${color}` : "none",
        }}>
          {score}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   CONFETI
--------------------------------------------------------- */
function Confetti({ colors, count = 70 }) {
  const pieces = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      duration: 2.6 + Math.random() * 1.8,
      size: 6 + Math.random() * 7,
      color: colors[i % colors.length],
      rotate: Math.random() * 360,
      drift: (Math.random() - 0.5) * 160,
      shape: Math.random() > 0.5 ? "50%" : "2px",
    }));
  }, [colors, count]);

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden", zIndex: 50 }} aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.6,
            background: p.color,
            borderRadius: p.shape,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
            "--rotate": `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------------------------------------------------------
   PANTALLA 4: Resultados
--------------------------------------------------------- */
function TrophyBadge({ winnerName, winnerColor, bookName }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "8px 0 26px" }}>
      <svg width="170" height="190" viewBox="0 0 170 190" style={{ filter: `drop-shadow(0 10px 22px ${winnerColor}66)` }}>
        <defs>
          <linearGradient id="trophyGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F6DE94" />
            <stop offset="45%" stopColor="#D9A93B" />
            <stop offset="100%" stopColor="#9C6B1E" />
          </linearGradient>
        </defs>
        <path d="M50 18h70v9c0 34-15 53-35 53s-35-19-35-53v-9z" fill="url(#trophyGold)" stroke="#7A4E12" strokeWidth="2" />
        <path d="M50 26C27 26 19 44 31 58c7 8 16 11 23 10" fill="none" stroke="url(#trophyGold)" strokeWidth="7" strokeLinecap="round" />
        <path d="M120 26c23 0 31 18 19 32-7 8-16 11-23 10" fill="none" stroke="url(#trophyGold)" strokeWidth="7" strokeLinecap="round" />
        <rect x="78" y="76" width="14" height="20" fill="url(#trophyGold)" />
        <path d="M56 96h58l-7 15H63z" fill="url(#trophyGold)" stroke="#7A4E12" strokeWidth="2" />
        <rect x="46" y="110" width="78" height="13" rx="3" fill="url(#trophyGold)" stroke="#7A4E12" strokeWidth="2" />
        <circle cx="85" cy="44" r="13" fill="none" stroke="#7A4E12" strokeWidth="2" opacity="0.5" />
        <path d="M85 36l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" fill="#7A4E12" opacity="0.6" />
      </svg>
      <div style={{
        marginTop: -6, background: "#16233D", border: `2px solid ${winnerColor}`, borderRadius: 10,
        padding: "14px 26px", minWidth: 220, boxShadow: `0 6px 18px ${winnerColor}33`,
      }}>
        <div className="font-display" style={{ color: winnerColor, fontSize: "clamp(20px, 5.5vw, 26px)", fontWeight: 700 }}>
          {winnerName}
        </div>
        <div className="font-ui" style={{ color: "#B8A98A", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6 }}>
          Campeón de
        </div>
        <div className="font-display" style={{ color: "#D9A93B", fontSize: "clamp(16px, 4.5vw, 20px)", fontWeight: 700, marginTop: 2 }}>
          {bookName}
        </div>
      </div>
    </div>
  );
}

function ShareResultCard({ winner, teamName, teamColor, scores, total, bookName, teamPhotos }) {
  const canvasRef = useRef(null);
  const [blob, setBlob] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [toast, setToast] = useState("");

  useEffect(() => {
    let cancelled = false;
    function drawWrapped(ctx, text, x, y, maxWidth, lineHeight) {
      const words = text.split(" ");
      let line = "";
      const lines = [];
      for (const word of words) {
        const test = line ? line + " " + word : word;
        if (ctx.measureText(test).width > maxWidth && line) { lines.push(line); line = word; }
        else line = test;
      }
      if (line) lines.push(line);
      const startY = y - ((lines.length - 1) * lineHeight) / 2;
      lines.forEach((l, i) => ctx.fillText(l, x, startY + i * lineHeight));
    }
    function loadImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
      });
    }
    async function draw() {
      try { await document.fonts?.ready; } catch { /* fuentes no disponibles: se usa la tipografía por defecto */ }
      const canvas = canvasRef.current;
      if (!canvas || cancelled) return;
      const W = 1080, H = 1350;
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext("2d");

      const photoImages = {};
      if (teamPhotos) {
        for (const t of [1, 2]) {
          if (teamPhotos[t]) {
            try { photoImages[t] = await loadImage(teamPhotos[t]); } catch { /* si la foto no carga, se omite sin romper la imagen */ }
          }
        }
      }
      if (cancelled) return;

      const bg = ctx.createRadialGradient(W / 2, 0, 100, W / 2, H, 1500);
      bg.addColorStop(0, "#1F3454"); bg.addColorStop(0.55, "#16233D"); bg.addColorStop(1, "#0A101C");
      ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
      ctx.strokeStyle = "rgba(184,137,43,0.55)"; ctx.lineWidth = 6;
      ctx.strokeRect(28, 28, W - 56, H - 56);

      ctx.textAlign = "center";
      ctx.fillStyle = "#B8892B";
      ctx.font = "700 32px Inter, sans-serif";
      ctx.fillText("DEBATE BÍBLICO", W / 2, 130);
      ctx.fillStyle = "#8FA0B8";
      ctx.font = "500 30px Inter, sans-serif";
      ctx.fillText(bookName || "", W / 2, 178);

      ctx.font = "700 60px Cinzel, serif";
      if (winner === "empate") {
        ctx.fillStyle = "#F5EFE0";
        ctx.fillText("¡EMPATE!", W / 2, 320);
      } else {
        ctx.fillStyle = teamColor(winner);
        drawWrapped(ctx, `${teamName(winner).toUpperCase()} GANA`, W / 2, 320, W - 160, 66);
      }

      const teamY = 560, gap = 340;
      [1, 2].forEach((t, i) => {
        const x = W / 2 + (i === 0 ? -gap / 2 : gap / 2);
        ctx.beginPath(); ctx.arc(x, teamY, 130, 0, Math.PI * 2);
        ctx.fillStyle = teamColor(t); ctx.fill();
        ctx.font = "700 92px Cinzel, serif"; ctx.fillStyle = "#F5EFE0";
        ctx.fillText(String(scores[t]), x, teamY + 32);
        ctx.font = "700 36px Inter, sans-serif"; ctx.fillStyle = "#F5EFE0";
        drawWrapped(ctx, teamName(t), x, teamY + 210, 300, 42);

        // Foto del equipo, como insignia circular perchada sobre el marcador
        if (photoImages[t]) {
          const r = 76, cx = x + 96, cy = teamY - 96;
          ctx.save();
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.closePath(); ctx.clip();
          ctx.drawImage(photoImages[t], cx - r, cy - r, r * 2, r * 2);
          ctx.restore();
          ctx.lineWidth = 6; ctx.strokeStyle = "#F5EFE0";
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();
        }
      });

      ctx.font = "500 28px Inter, sans-serif"; ctx.fillStyle = "#8FA0B8";
      ctx.fillText(`${total} preguntas respondidas`, W / 2, 900);
      ctx.font = "600 26px Inter, sans-serif"; ctx.fillStyle = "#D9A93B";
      ctx.fillText("⚔ Debate Bíblico", W / 2, H - 60);

      canvas.toBlob((b) => {
        if (cancelled || !b) return;
        setBlob(b);
        setImageUrl((prev) => { if (prev) URL.revokeObjectURL(prev); return URL.createObjectURL(b); });
      }, "image/png");
    }
    draw();
    return () => { cancelled = true; };
  }, [winner, scores, total, bookName, teamPhotos]);

  function downloadImage() {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "resultado-debate-biblico.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  const shareText = winner === "empate"
    ? `¡Empate en nuestro Debate Bíblico sobre ${bookName}! 🏆`
    : `¡${teamName(winner)} ganó el Debate Bíblico sobre ${bookName}! 🏆`;

  async function shareNative() {
    if (!blob) return;
    const file = new File([blob], "resultado-debate-biblico.png", { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: "Debate Bíblico", text: shareText });
        return;
      } catch { /* el usuario canceló el cuadro de compartir, o no se pudo: se ofrece la descarga */ }
    }
    downloadImage();
    setToast("Imagen descargada. Ábrela en la app para compartirla.");
    setTimeout(() => setToast(""), 3500);
  }

  function shareFacebook() {
    const url = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href) + "&quote=" + encodeURIComponent(shareText);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function shareAppOnly(label) {
    // Instagram y TikTok no ofrecen un enlace web para prellenar una imagen:
    // se descarga la imagen y se guía al usuario a compartirla desde la app.
    downloadImage();
    setToast(`Imagen descargada. Ábrela en ${label} para compartirla en tu historia o publicación.`);
    setTimeout(() => setToast(""), 4000);
  }

  return (
    <div style={{ ...styles.card, maxWidth: 420, margin: "28px auto 0" }}>
      <canvas ref={canvasRef} style={{ display: "none" }} aria-hidden="true" />
      <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, color: "#B8892B", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>
        <Share2 size={16} /> Comparte el resultado
      </div>

      {imageUrl && (
        <img src={imageUrl} alt="Imagen del resultado del duelo" style={{ width: "100%", borderRadius: 10, marginBottom: 14, border: "1.5px solid #3A5578" }} />
      )}

      <button
        type="button" className="font-ui"
        onClick={shareNative}
        disabled={!blob}
        style={{ ...styles.primaryBtn, width: "100%", opacity: blob ? 1 : 0.5, cursor: blob ? "pointer" : "wait", marginBottom: 10 }}
      >
        <Share2 size={16} style={{ marginRight: 8, verticalAlign: "-3px" }} />
        Compartir resultado
      </button>

      <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 10 }}>
        <button type="button" onClick={() => shareAppOnly("Instagram")} aria-label="Compartir en Instagram" title="Compartir en Instagram"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <InstagramIcon size={40} />
        </button>
        <button type="button" onClick={shareFacebook} aria-label="Compartir en Facebook" title="Compartir en Facebook"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <FacebookIcon size={40} />
        </button>
        <button type="button" onClick={() => shareAppOnly("TikTok")} aria-label="Compartir en TikTok" title="Compartir en TikTok"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <TikTokIcon size={40} />
        </button>
      </div>

      <button
        type="button" className="font-ui"
        onClick={downloadImage}
        disabled={!imageUrl}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
          padding: "9px 12px", borderRadius: 8, cursor: imageUrl ? "pointer" : "wait",
          background: "rgba(255,255,255,0.04)", border: "1.5px solid #3A5578", color: "#B8A98A", fontSize: 12.5, fontWeight: 700,
        }}
      >
        <Download size={14} /> Descargar imagen
      </button>

      {toast && (
        <div className="font-ui fade-in" style={{ marginTop: 10, fontSize: 11.5, color: "#8FA0B8", textAlign: "center" }}>{toast}</div>
      )}
    </div>
  );
}

function ResultsScreen({ winner, teamName, teamColor, scores, total, answerMode, book, teamPhotos, onRematch, onNewTeams }) {
  const answeredCount = (team) => (answerMode === "both" ? total : (team === 1 ? Math.ceil(total / 2) : Math.floor(total / 2)));
  const incorrectCount = (team) => Math.max(0, answeredCount(team) - scores[team]);

  return (
    <div style={{ ...styles.container, textAlign: "center" }} className="fade-in">
      {winner !== "empate" && (
        <Confetti colors={[teamColor(winner), "#B8892B", "#F5EFE0", teamColor(winner === 1 ? 2 : 1)]} />
      )}

      {winner === "empate" ? (
        <>
          <RoseWindow size={110} colorA={teamColor(1)} colorB={teamColor(2)} />
          <h1 className="font-display" style={styles.h1}>¡Empate!</h1>
          <p className="font-body" style={styles.subtitle}>Ambos equipos demostraron conocer bien {book?.name}.</p>
        </>
      ) : (
        <TrophyBadge winnerName={teamName(winner)} winnerColor={teamColor(winner)} bookName={book?.name} />
      )}

      <div style={styles.resultsRow}>
        <AnswerStatsCard name={teamName(1)} color={teamColor(1)} score={scores[1]} total={total} correct={scores[1]} incorrect={incorrectCount(1)} />
        <AnswerStatsCard name={teamName(2)} color={teamColor(2)} score={scores[2]} total={total} correct={scores[2]} incorrect={incorrectCount(2)} />
      </div>

      <ShareResultCard winner={winner} teamName={teamName} teamColor={teamColor} scores={scores} total={total} bookName={book?.name} teamPhotos={teamPhotos} />

      <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 32, flexWrap: "wrap" }}>
        <button className="font-ui" style={styles.primaryBtn} onClick={onRematch}>
          <Sparkles size={18} style={{ marginRight: 8, verticalAlign: "-3px" }} />
          Jugar otro libro
        </button>
        <button className="font-ui" style={styles.secondaryBtn} onClick={onNewTeams}>
          <RotateCcw size={16} style={{ marginRight: 8, verticalAlign: "-3px" }} />
          Nuevos equipos
        </button>
      </div>
    </div>
  );
}

function AnswerStatsCard({ name, color, score, total, correct, incorrect }) {
  return (
    <div style={{ ...styles.card, borderColor: color, minWidth: 170 }}>
      <div className="font-ui" style={{ fontSize: 13, color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{name}</div>
      <div className="font-display" style={{ fontSize: 40, color: "#F5EFE0" }}>{score}<span style={{ fontSize: 18, color: "#8FA0B8" }}>/{total}</span></div>
      <div className="font-ui" style={{ display: "flex", justifyContent: "center", gap: 16, marginTop: 12, fontSize: 13 }}>
        <span style={{ color: "#4CA98D", fontWeight: 700 }}>✔ {correct} correctas</span>
        <span style={{ color: "#C0405A", fontWeight: 700 }}>✘ {incorrect} incorrectas</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   ESTILOS
--------------------------------------------------------- */
const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    background: "radial-gradient(circle at 50% 0%, #1F3454 0%, #16233D 55%, #0F1A2E 100%)",
    padding: "clamp(20px, 6vw, 40px) clamp(12px, 4vw, 16px) clamp(32px, 8vw, 60px)",
    display: "flex",
    justifyContent: "center",
    overflowX: "hidden",
  },
  container: { width: "100%", maxWidth: 640 },
  h1: { fontSize: "clamp(24px, 6vw, 40px)", color: "#F5EFE0", margin: "14px 0 8px", fontWeight: 700 },
  subtitle: { color: "#B8A98A", fontSize: "clamp(14px, 3.6vw, 16px)", maxWidth: 440, margin: "0 auto" },
  teamGrid: { display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", justifyContent: "center" },
  vsWrap: { display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" },
  card: {
    background: "linear-gradient(180deg, #1A2C48 0%, #16233D 100%)",
    border: "1.5px solid #3A5578",
    borderRadius: 14,
    padding: "clamp(16px, 4.5vw, 20px) clamp(16px, 4.5vw, 22px)",
    flex: "1 1 240px",
    maxWidth: 260,
  },
  input: {
    width: "100%",
    background: "#0F1A2E",
    border: "1.5px solid #3A5578",
    borderRadius: 8,
    padding: "10px 12px",
    color: "#F5EFE0",
    fontSize: 16,
  },
  primaryBtn: {
    background: "linear-gradient(180deg, #D4AF5A 0%, #B8892B 100%)",
    color: "#16233D",
    border: "none",
    borderRadius: 10,
    padding: "clamp(11px, 3vw, 13px) clamp(18px, 5vw, 26px)",
    fontSize: "clamp(14px, 3.6vw, 15.5px)",
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.02em",
  },
  secondaryBtn: {
    background: "transparent",
    color: "#F5EFE0",
    border: "1.5px solid #3A5578",
    borderRadius: 10,
    padding: "clamp(11px, 3vw, 13px) clamp(18px, 5vw, 26px)",
    fontSize: "clamp(14px, 3.6vw, 15.5px)",
    fontWeight: 600,
    cursor: "pointer",
  },
  bookGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: 14, marginTop: 28 },
  bookCard: {
    display: "flex", alignItems: "center", gap: "clamp(10px, 3vw, 14px)", textAlign: "left",
    background: "linear-gradient(180deg, #1A2C48 0%, #16233D 100%)",
    border: "1.5px solid #3A5578", borderRadius: 12, padding: "clamp(12px, 3.5vw, 16px) clamp(14px, 3.5vw, 18px)", cursor: "pointer",
    width: "100%",
  },
  bookDropcap: {
    width: "clamp(38px, 10vw, 44px)", height: "clamp(38px, 10vw, 44px)", borderRadius: 8, background: "rgba(184,137,43,0.15)",
    border: "1.5px solid #B8892B", color: "#B8892B", fontSize: "clamp(18px, 5vw, 22px)",
    display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto",
  },
  scoreBar: { display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "clamp(6px, 2.5vw, 14px)" },
  progressTrack: { height: 4, background: "#243A5E", borderRadius: 4, marginTop: 16, overflow: "hidden" },
  progressFill: { height: "100%", background: "linear-gradient(90deg, #B8892B, #D4AF5A)", transition: "width 0.35s ease" },
  questionCard: {
    background: "linear-gradient(180deg, #1A2C48 0%, #16233D 100%)",
    border: "1.5px solid #3A5578", borderRadius: 16, padding: "clamp(18px, 5.5vw, 26px) clamp(14px, 4.5vw, 24px)",
  },
  questionText: { fontSize: "clamp(17px, 4.6vw, 22px)", color: "#F5EFE0", lineHeight: 1.4 },
  resultsRow: { display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 30 },
  tabRow: { display: "flex", gap: 8, justifyContent: "center", marginBottom: 22, flexWrap: "wrap" },
  tabBtn: {
    padding: "9px 18px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 600,
    background: "transparent", color: "#B8A98A", border: "1.5px solid #3A5578",
  },
  tabBtnActive: { background: "#B8892B", color: "#16233D", border: "1.5px solid #B8892B" },
  verseToast: {
    position: "fixed", left: "50%", top: "50%", transform: "translate(-50%, -50%)",
    width: "min(92vw, 620px)", maxHeight: "88vh", overflowY: "auto", zIndex: 60,
    background: "linear-gradient(180deg, #1A2C48 0%, #12203A 100%)",
    border: "2px solid #B8892B", borderRadius: 18, padding: "clamp(20px, 6vw, 34px) clamp(18px, 6vw, 36px)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.55)",
  },
  verseToastOverlay: {
    position: "fixed", inset: 0, zIndex: 55,
    background: "rgba(10,16,28,0.72)",
  },
};

function RemotePlayerApp({ code, team }) {
  const [status, setStatus] = useState("connecting"); // connecting | connected | error | closed
  const [errorMsg, setErrorMsg] = useState("");
  const [gameState, setGameState] = useState(null); // último mensaje recibido del anfitrión
  const [answeredForKey, setAnsweredForKey] = useState(null);
  const [teamPhoto, setTeamPhoto] = useState(null);
  const [photoStatus, setPhotoStatus] = useState("idle"); // idle | processing | sent
  const peerRef = useRef(null);
  const connRef = useRef(null);
  const fileInputRef = useRef(null);

  function handlePhotoFile(e) {
    const file = e.target.files && e.target.files[0];
    e.target.value = ""; // permite volver a elegir el mismo archivo si se repite la foto
    if (!file) return;
    setPhotoStatus("processing");
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.onload = () => {
        // Recorta a cuadrado y reduce el tamaño antes de enviarla por la conexión
        const SIZE = 320;
        const canvas = document.createElement("canvas");
        canvas.width = SIZE; canvas.height = SIZE;
        const ctx = canvas.getContext("2d");
        const side = Math.min(img.width, img.height);
        const sx = (img.width - side) / 2, sy = (img.height - side) / 2;
        ctx.drawImage(img, sx, sy, side, side, 0, 0, SIZE, SIZE);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.75);
        setTeamPhoto(dataUrl);
        setPhotoStatus("sent");
        if (connRef.current && connRef.current.open) {
          connRef.current.send({ type: "photo", dataUrl });
        }
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    if (typeof Peer === "undefined") {
      setStatus("error");
      setErrorMsg("No se pudo cargar el módulo de conexión. Verifica tu internet y recarga la página.");
      return;
    }
    const peer = new Peer();
    peerRef.current = peer;
    peer.on("open", () => {
      const conn = peer.connect(REMOTE_PEER_PREFIX + code, { metadata: { team }, reliable: true });
      connRef.current = conn;
      conn.on("open", () => setStatus("connected"));
      conn.on("data", (msg) => setGameState(msg));
      conn.on("close", () => setStatus("closed"));
      conn.on("error", () => {
        setStatus("error");
        setErrorMsg("Se perdió la conexión con la pantalla principal.");
      });
    });
    peer.on("error", () => {
      setStatus("error");
      setErrorMsg("No se pudo conectar. Verifica que el código sea correcto y que la pantalla principal siga abierta.");
    });
    return () => peer.destroy();
  }, [code, team]);

  const isQuestion = gameState && gameState.type === "question";
  const isBothMode = isQuestion && gameState.answerMode === "both";
  // En modo "ambos equipos", el celular siempre puede responder (no espera turno);
  // en modo "por turnos", solo cuando le corresponde a este equipo.
  const isMyTurn = isQuestion && (isBothMode || gameState.turn === team);
  // La clave de la pregunta no debe depender de "turn" en modo "ambos equipos"
  // (ya que ese campo cambia localmente en la pantalla principal entre un
  // equipo y otro dentro de la MISMA pregunta, y no debe reiniciar el estado
  // de "ya respondí" de este celular).
  const currentKey = isQuestion ? (isBothMode ? `both-${gameState.qIndex}` : `${gameState.qIndex}-${gameState.turn}`) : null;
  const hasAnswered = isQuestion && answeredForKey === currentKey;
  const myAnswerIndex = isBothMode ? gameState?.bothAnswers?.[team] ?? null : gameState?.selected ?? null;

  // Reproduce el sonido de correcto/incorrecto una sola vez cuando llega la
  // retroalimentación de esta pregunta (evita repetirlo si el mensaje se reenvía).
  const playedFeedbackKeyRef = useRef(null);
  useEffect(() => {
    if (!isMyTurn || !isQuestion || !gameState.showFeedback) return;
    if (playedFeedbackKeyRef.current === currentKey) return;
    playedFeedbackKeyRef.current = currentKey;
    if (myAnswerIndex === gameState.correctIndex) playCorrectSound();
    else playIncorrectSound();
  }, [isMyTurn, isQuestion, gameState?.showFeedback, currentKey]);

  const [localTimeLeft, setLocalTimeLeft] = useState(null);
  useEffect(() => {
    if (!isMyTurn || (isQuestion && gameState.showFeedback) || hasAnswered) {
      setLocalTimeLeft(null);
      return;
    }
    setLocalTimeLeft(gameState.timerSeconds);
    const interval = setInterval(() => setLocalTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentKey, isMyTurn, isQuestion && gameState.showFeedback, hasAnswered]);

  function submitAnswer(idx) {
    if (!connRef.current || !connRef.current.open || hasAnswered) return;
    connRef.current.send({ type: "answer", index: idx });
    setAnsweredForKey(currentKey);
  }

  const myName = gameState?.teamNames?.[team] || `Equipo ${team}`;

  return (
    <div style={{ ...styles.page, minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(16px, 5vw, 28px)" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .font-display { font-family: 'Cinzel', serif; letter-spacing: 0.02em; }
        .font-ui { font-family: 'Inter', sans-serif; }
        body { margin: 0; background: #0A101C; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 420, textAlign: "center" }}>
        {status === "connecting" && (
          <>
            <Wifi size={40} color="#B8892B" />
            <p className="font-ui" style={{ color: "#B8A98A", marginTop: 14, fontSize: 15 }}>Conectando con la pantalla principal…</p>
          </>
        )}

        {status === "error" && (
          <>
            <div style={{ color: "#C0405A", fontSize: 40 }}>⚠️</div>
            <p className="font-ui" style={{ color: "#F5EFE0", marginTop: 14, fontSize: 15 }}>{errorMsg}</p>
            <button className="font-ui" style={{ ...styles.primaryBtn, marginTop: 18 }} onClick={() => window.location.reload()}>
              Reintentar
            </button>
          </>
        )}

        {status === "closed" && (
          <>
            <p className="font-ui" style={{ color: "#F5EFE0", fontSize: 15 }}>La pantalla principal cerró la conexión.</p>
            <button className="font-ui" style={{ ...styles.primaryBtn, marginTop: 18 }} onClick={() => window.location.reload()}>
              Reconectar
            </button>
          </>
        )}

        {status === "connected" && !gameState && (
          <>
            <Wifi size={40} color="#4CA98D" />
            <p className="font-ui" style={{ color: "#F5EFE0", marginTop: 14, fontSize: 16, fontWeight: 700 }}>Conectado como {myName}</p>
            <p className="font-ui" style={{ color: "#8FA0B8", marginTop: 8, fontSize: 13.5 }}>Esperando que empiece el duelo…</p>

            <div style={{ marginTop: 26 }}>
              {teamPhoto ? (
                <img
                  src={teamPhoto}
                  alt="Foto del equipo"
                  style={{ width: 140, height: 140, borderRadius: "50%", objectFit: "cover", border: "3px solid #4CA98D", boxShadow: "0 0 0 3px #16233D" }}
                />
              ) : (
                <div style={{
                  width: 140, height: 140, borderRadius: "50%", margin: "0 auto",
                  background: "rgba(255,255,255,0.04)", border: "2px dashed #3A5578",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Camera size={34} color="#8FA0B8" />
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                capture="user"
                onChange={handlePhotoFile}
                style={{ display: "none" }}
              />
              <button
                type="button"
                className="font-ui"
                onClick={() => fileInputRef.current?.click()}
                disabled={photoStatus === "processing"}
                style={{
                  display: "flex", alignItems: "center", gap: 8, margin: "16px auto 0", padding: "10px 18px", borderRadius: 10,
                  background: "rgba(184,137,43,0.14)", border: "1.5px solid #B8892B", color: "#D9A93B",
                  fontSize: 14, fontWeight: 700, cursor: photoStatus === "processing" ? "wait" : "pointer",
                }}
              >
                <Camera size={16} />
                {photoStatus === "processing" ? "Procesando…" : teamPhoto ? "Tomar otra foto" : "Tomar foto del equipo"}
              </button>
              {photoStatus === "sent" && (
                <p className="font-ui fade-in" style={{ color: "#4CA98D", fontSize: 12, marginTop: 8 }}>✔ Foto enviada a la pantalla principal</p>
              )}
            </div>
          </>
        )}

        {status === "connected" && gameState?.type === "results" && (
          <>
            <h1 className="font-display" style={{ ...styles.h1, fontSize: "clamp(24px, 8vw, 32px)" }}>
              {gameState.winner === "empate" ? "¡Empate!" : `¡${gameState.teamNames[gameState.winner]} ganó!`}
            </h1>
            <div className="font-ui" style={{ marginTop: 18, display: "flex", justifyContent: "center", gap: 24 }}>
              {[1, 2].map((t) => (
                <div key={t}>
                  <div style={{ fontSize: 13, color: "#8FA0B8" }}>{gameState.teamNames[t]}</div>
                  <div className="font-display" style={{ fontSize: 30, color: "#D9A93B", fontWeight: 700 }}>{gameState.scores[t]}</div>
                </div>
              ))}
            </div>
            <p className="font-ui" style={{ color: "#8FA0B8", marginTop: 20, fontSize: 13 }}>Mira la pantalla principal para más detalles.</p>
          </>
        )}

        {status === "connected" && isQuestion && (
          <>
            <div className="font-ui" style={{ color: "#B8892B", fontSize: 12.5, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>
              {gameState.bookName} · Pregunta {gameState.qIndex + 1} de {gameState.total}
            </div>
            <div className="font-ui" style={{ marginTop: 4, marginBottom: 22, fontSize: 12, color: difficultyInfo(gameState.difficulty).color, fontWeight: 700 }}>
              {difficultyInfo(gameState.difficulty).label}
            </div>

            {!isMyTurn && (
              <div style={{ marginTop: 30 }}>
                <p className="font-ui" style={{ color: "#F5EFE0", fontSize: 17, fontWeight: 700 }}>
                  Turno de {gameState.teamNames[gameState.turn]}
                </p>
                <p className="font-ui" style={{ color: "#8FA0B8", marginTop: 8, fontSize: 13.5 }}>Espera tu turno, mira la pantalla principal.</p>
              </div>
            )}

            {isMyTurn && gameState.showFeedback && (
              <div style={{ marginTop: 30 }}>
                {myAnswerIndex === -1 ? (
                  <p className="font-display" style={{ color: "#C0405A", fontSize: 22, fontWeight: 700 }}>⏱ Se acabó el tiempo</p>
                ) : myAnswerIndex === gameState.correctIndex ? (
                  <p className="font-display" style={{ color: "#1F6F5C", fontSize: 24, fontWeight: 700 }}>¡Correcto! 🎉</p>
                ) : (
                  <p className="font-display" style={{ color: "#C0405A", fontSize: 24, fontWeight: 700 }}>Incorrecto</p>
                )}
                <p className="font-ui" style={{ color: "#8FA0B8", marginTop: 10, fontSize: 13 }}>Mira la pantalla principal para el versículo.</p>
              </div>
            )}

            {isMyTurn && !gameState.showFeedback && hasAnswered && (
              <div style={{ marginTop: 30 }}>
                <p className="font-ui" style={{ color: "#D9A93B", fontSize: 15, fontWeight: 700 }}>Respuesta enviada</p>
                <p className="font-ui" style={{ color: "#8FA0B8", marginTop: 8, fontSize: 13 }}>Esperando confirmación…</p>
              </div>
            )}

            {isMyTurn && !gameState.showFeedback && !hasAnswered && (
              <div>
                {localTimeLeft !== null && (
                  <div className="font-display" style={{ color: localTimeLeft <= 5 ? "#C0405A" : "#B8892B", fontSize: 20, fontWeight: 700, marginBottom: 14 }}>
                    {localTimeLeft}s
                  </div>
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {gameState.options.map((opt, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="font-ui"
                      onClick={() => submitAnswer(idx)}
                      style={{
                        display: "flex", alignItems: "center", gap: 12, textAlign: "left",
                        padding: "16px 16px", borderRadius: 12, cursor: "pointer",
                        background: "rgba(255,255,255,0.04)", border: "1.5px solid #3A5578", color: "#F5EFE0",
                        fontSize: 16, fontWeight: 600,
                      }}
                    >
                      <span className="font-display" style={{
                        width: 32, height: 32, borderRadius: 8, flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center",
                        background: "rgba(184,137,43,0.15)", border: "1.5px solid #B8892B", color: "#D4AF5A", fontSize: 14, fontWeight: 700,
                      }}>
                        {LETTERS[idx]}
                      </span>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const rootEl = document.getElementById("root");
const remoteJoinParams = getJoinParams();
ReactDOM.createRoot(rootEl).render(
  remoteJoinParams ? <RemotePlayerApp code={remoteJoinParams.code} team={remoteJoinParams.team} /> : <App />
);
