const { useState, useMemo, useEffect } = React;

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
      { q: "¿Quién fue el primer hombre creado por Dios?", options: ["Adán", "Set", "Caín"], correct: 0, chapter: "2", verse: "7", verseText: "Formó, pues, Jehová Dios al hombre del polvo de la tierra, y alentó en su nariz soplo de vida; y fue el hombre en alma viviente." },
      { q: "¿Cómo se llamaba la esposa de Abraham?", options: ["Rebeca", "Sara", "Raquel"], correct: 1, chapter: "17", verse: "15", verseText: "Dijo también Dios a Abraham: A Sarai tu mujer no la llamarás Sarai, mas Sara será su nombre." },
      { q: "¿En cuántos días creó Dios el mundo, según el relato de Génesis?", options: ["7", "40", "6"], correct: 2, chapter: "2", verse: "2", verseText: "Y acabó Dios en el día séptimo la obra que hizo; y reposó el día séptimo de toda la obra que había hecho." },
      { q: "¿Qué construyó Noé por instrucción de Dios?", options: ["Un arca", "Un templo", "Una torre"], correct: 0, chapter: "6", verse: "14", verseText: "Hazte un arca de madera de Gofer; harás aposentos en el arca y la embetunarás con brea por dentro y por fuera." },
      { q: "¿Quién mató a su hermano Abel?", options: ["Set", "Caín", "Lot"], correct: 1, chapter: "4", verse: "8", verseText: "...y aconteció que estando ellos en el campo, Caín se levantó contra su hermano Abel, y le mató." },
      { q: "¿Cómo se llama la torre que los hombres intentaron construir hasta el cielo?", options: ["Sinaí", "Babel", "Siloé"], correct: 1, chapter: "11", verse: "9", verseText: "Por esto fue llamado el nombre de ella Babel, porque allí confundió Jehová el lenguaje de toda la tierra." },
      { q: "¿Cuál era el nombre del hijo que Abraham estuvo dispuesto a sacrificar?", options: ["Ismael", "Jacob", "Isaac"], correct: 2, chapter: "22", verse: "2", verseText: "Y dijo: Toma ahora tu hijo, tu único, Isaac, a quien amas, y vete a tierra de Moriah, y ofrécele allí en holocausto." },
      { q: "¿Qué le pasó a la esposa de Lot al mirar atrás hacia Sodoma?", options: ["Se convirtió en estatua de sal", "Se quedó ciega", "Murió ahogada"], correct: 0, chapter: "19", verse: "26", verseText: "Entonces la mujer de Lot miró atrás, a espaldas de él, y se volvió estatua de sal." },
    ],
  },
  {
    id: "exodo",
    name: "Éxodo",
    testament: "Antiguo Testamento",
    letter: "É",
    questions: [
      { q: "¿Quién guió al pueblo de Israel fuera de Egipto?", options: ["Aarón", "Josué", "Moisés"], correct: 2, chapter: "3", verse: "10", verseText: "Ven por tanto ahora, y te enviaré a Faraón, para que saques a mi pueblo, los hijos de Israel, de Egipto." },
      { q: "¿Cuántas plagas envió Dios sobre Egipto?", options: ["10", "7", "12"], correct: 0, chapter: "12", verse: "29", verseText: "Y aconteció que a la medianoche Jehová hirió a todo primogénito en la tierra de Egipto, desde el primogénito de Faraón... hasta el primogénito del cautivo." },
      { q: "¿Qué mar se abrió para que los israelitas escaparan del ejército egipcio?", options: ["Mar Muerto", "Mar Rojo", "Mar de Galilea"], correct: 1, chapter: "14", verse: "21", verseText: "Y extendió Moisés su mano sobre el mar, e hizo Jehová que el mar se retirase por recio viento oriental toda aquella noche; y volvió el mar en seco, y las aguas quedaron divididas." },
      { q: "¿En qué monte recibió Moisés los Diez Mandamientos?", options: ["Sinaí", "Nebo", "Carmelo"], correct: 0, chapter: "31", verse: "18", verseText: "Y dio a Moisés, como acabó de hablar con él en el monte de Sinaí, dos tablas del testimonio, tablas de piedra escritas con el dedo de Dios." },
      { q: "¿Qué alimento enviaba Dios cada mañana a los israelitas en el desierto?", options: ["Codornices", "Maná", "Miel"], correct: 1, chapter: "16", verse: "15", verseText: "...Y se decían el uno al otro: ¿Qué es esto? porque no sabían qué era. Entonces Moisés les dijo: Es el pan que Jehová os da para comer." },
      { q: "¿Quién era el hermano de Moisés que hablaba por él ante el Faraón?", options: ["Caleb", "Coré", "Aarón"], correct: 2, chapter: "4", verse: "14", verseText: "...¿No conozco yo que hablará él muy bien? Y he aquí también, él te sale a recibir, y en viéndote, se alegrará en su corazón. Aarón, tu hermano, levita, hablará por ti." },
      { q: "¿Qué hizo Moisés para sacar agua de una roca en el desierto?", options: ["La golpeó con su vara", "La rompió con las manos", "Oró toda la noche"], correct: 0, chapter: "17", verse: "6", verseText: "He aquí que yo estoy delante de ti allí sobre la peña en Horeb; y herirás la peña, y saldrán de ella aguas, y beberá el pueblo." },
      { q: "¿Dónde fue encontrado el bebé Moisés?", options: ["En un templo", "En el río Nilo, en una cesta", "En el desierto"], correct: 1, chapter: "2", verse: "5", verseText: "Y descendió la hija de Faraón a lavarse al río... y vio la cestilla en los juncos, y envió una criada suya a tomarla." },
    ],
  },
  {
    id: "salmos",
    name: "Salmos",
    testament: "Antiguo Testamento",
    letter: "S",
    questions: [
      { q: "¿Quién es tradicionalmente considerado el autor de la mayoría de los Salmos?", options: ["Salomón", "David", "Moisés"], correct: 1, chapter: "72", verse: "20", verseText: "Acábanse las oraciones de David, hijo de Isaí." },
      { q: "¿Cómo comienza el Salmo 23?", options: ["\"En el principio...\"", "\"Bienaventurado el varón...\"", "\"El Señor es mi pastor...\""], correct: 2, chapter: "23", verse: "1", verseText: "Jehová es mi pastor; nada me faltará." },
      { q: "¿Cuál es el salmo más largo de toda la Biblia?", options: ["Salmo 150", "Salmo 119", "Salmo 23"], correct: 1, chapter: "119", verse: "1", verseText: "Bienaventurados los perfectos de camino, los que andan en la ley de Jehová." },
      { q: "¿Cuántos salmos hay en total en el libro?", options: ["150", "100", "200"], correct: 0, chapter: "150", verse: "6", verseText: "Todo lo que respira alabe a JAH. Aleluya." },
      { q: "¿Qué salmo es conocido popularmente como el \"Salmo del pastor\"?", options: ["Salmo 91", "Salmo 100", "Salmo 23"], correct: 2, chapter: "23", verse: "1", verseText: "Jehová es mi pastor; nada me faltará." },
      { q: "¿Qué instrumento de cuerda se menciona con frecuencia en los Salmos para alabar a Dios?", options: ["El arpa", "La trompeta", "El tambor"], correct: 0, chapter: "33", verse: "2", verseText: "Aclamad a Jehová con arpa; cantadle con salterio y decacordio." },
      { q: "¿Qué palabra hebrea aparece muchas veces en los Salmos, usada como pausa o interludio musical?", options: ["Amén", "Selah", "Aleluya"], correct: 1, chapter: "3", verse: "4", verseText: "Con mi voz clamé a Jehová, y él me respondió desde el monte de su santidad. Selah." },
      { q: "¿Qué palabra final de alabanza, que significa \"alaben al Señor\", aparece en varios salmos?", options: ["Hosanna", "Aleluya", "Maranatha"], correct: 1, chapter: "150", verse: "1", verseText: "Alabad a JAH. Alabad a Dios en su santuario; alabadle en la extensión de su fortaleza." },
    ],
  },
  {
    id: "mateo",
    name: "Mateo",
    testament: "Nuevo Testamento",
    letter: "M",
    questions: [
      { q: "¿En qué ciudad nació Jesús, según el evangelio de Mateo?", options: ["Nazaret", "Belén", "Jerusalén"], correct: 1, chapter: "2", verse: "1", verseText: "Y como fue nacido Jesús en Belén de Judea en días del rey Herodes, he aquí unos magos vinieron del oriente a Jerusalén." },
      { q: "¿Quiénes visitaron al niño Jesús guiados por una estrella?", options: ["Los magos de oriente", "Los pastores", "Los ángeles"], correct: 0, chapter: "2", verse: "2", verseText: "Diciendo: ¿Dónde está el Rey de los Judíos, que ha nacido? porque su estrella hemos visto en el oriente, y venimos a adorarle." },
      { q: "¿Quién bautizó a Jesús en el río Jordán?", options: ["Pedro", "Juan el Bautista", "Andrés"], correct: 1, chapter: "3", verse: "13", verseText: "Entonces Jesús vino de Galilea a Juan al Jordán, para ser bautizado de él." },
      { q: "¿Cuántos días ayunó Jesús en el desierto antes de ser tentado?", options: ["7", "40", "12"], correct: 1, chapter: "4", verse: "2", verseText: "Y habiendo ayunado cuarenta días y cuarenta noches, después tuvo hambre." },
      { q: "¿Cómo se llama el discurso de Jesús que incluye las Bienaventuranzas?", options: ["El Sermón del Monte", "La Parábola del Sembrador", "El Sermón del Lago"], correct: 0, chapter: "5", verse: "1", verseText: "Y viendo las gentes, subió al monte; y sentándose, se llegaron a él sus discípulos." },
      { q: "¿Cuántos apóstoles eligió Jesús?", options: ["10", "70", "12"], correct: 2, chapter: "10", verse: "1", verseText: "Entonces llamando a sus doce discípulos, les dio potestad contra los espíritus inmundos, para que los echasen fuera, y sanasen toda enfermedad y toda dolencia." },
      { q: "¿Quién traicionó a Jesús por treinta monedas de plata?", options: ["Judas Iscariote", "Pedro", "Tomás"], correct: 0, chapter: "26", verse: "15", verseText: "Y les dijo: ¿Qué me queréis dar, y yo os lo entregaré? Y ellos le señalaron treinta piezas de plata." },
      { q: "¿Quién negó tres veces conocer a Jesús la noche de su arresto?", options: ["Juan", "Pedro", "Santiago"], correct: 1, chapter: "26", verse: "74", verseText: "Entonces comenzó él a hacer imprecaciones, y á jurar, diciendo: No conozco al hombre. Y el gallo cantó luego." },
    ],
  },
  {
    id: "juan",
    name: "Juan",
    testament: "Nuevo Testamento",
    letter: "J",
    questions: [
      { q: "¿Cuál fue el primer milagro de Jesús, según el evangelio de Juan?", options: ["Multiplicar los panes", "Convertir el agua en vino", "Caminar sobre el agua"], correct: 1, chapter: "2", verse: "11", verseText: "Este principio de señales hizo Jesús en Caná de Galilea, y manifestó su gloria; y sus discípulos creyeron en él." },
      { q: "¿Cómo comienza el evangelio de Juan?", options: ["\"El Señor es mi pastor...\"", "\"Bienaventurados los pobres...\"", "\"En el principio era el Verbo...\""], correct: 2, chapter: "1", verse: "1", verseText: "En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios." },
      { q: "¿A quién resucitó Jesús después de cuatro días en la tumba?", options: ["Jairo", "Lázaro", "Esteban"], correct: 1, chapter: "11", verse: "43", verseText: "Y habiendo dicho esto, clamó a gran voz: Lázaro, ven fuera." },
      { q: "¿Qué discípulo dudó de la resurrección de Jesús hasta tocar sus heridas?", options: ["Felipe", "Bartolomé", "Tomás"], correct: 2, chapter: "20", verse: "28", verseText: "Entonces Tomás respondió, y le dijo: ¡Señor mío, y Dios mío!" },
      { q: "¿Con quién conversó Jesús junto a un pozo en Samaria?", options: ["Una viuda", "Una mujer samaritana", "Una recaudadora de impuestos"], correct: 1, chapter: "4", verse: "7", verseText: "Vino una mujer de Samaria a sacar agua: y Jesús le dice: Dame de beber." },
      { q: "¿A qué discípulo se le identifica tradicionalmente como \"a quien Jesús amaba\" y autor de este evangelio?", options: ["Marcos", "Lucas", "Juan"], correct: 2, chapter: "21", verse: "24", verseText: "Este es aquel discípulo que da testimonio de estas cosas, y escribió estas cosas; y sabemos que su testimonio es verdadero." },
      { q: "¿Qué hizo Jesús con unos pocos panes y peces para alimentar a una multitud?", options: ["Los multiplicó", "Los compró", "Los pescó de nuevo"], correct: 0, chapter: "6", verse: "11", verseText: "Y tomó Jesús aquellos panes, y habiendo dado gracias, repartió a los discípulos, y los discípulos a los que estaban recostados: asimismo de los peces, cuanto querían." },
      { q: "¿Qué le dijo Jesús a Marta antes de resucitar a Lázaro?", options: ["\"Sígueme\"", "\"Yo soy la resurrección y la vida\"", "\"El reino de los cielos se ha acercado\""], correct: 1, chapter: "11", verse: "25", verseText: "Le dice Jesús: Yo soy la resurrección y la vida: el que cree en mí, aunque esté muerto, vivirá." },
    ],
  },
  {
    id: "hechos",
    name: "Hechos",
    testament: "Nuevo Testamento",
    letter: "H",
    questions: [
      { q: "¿Qué recibieron los apóstoles el día de Pentecostés?", options: ["El Espíritu Santo", "Las tablas de la ley", "El maná"], correct: 0, chapter: "2", verse: "4", verseText: "Y fueron todos llenos del Espíritu Santo, y comenzaron a hablar en otras lenguas, como el Espíritu les daba que hablasen." },
      { q: "¿Quién fue apedreado y se convirtió en el primer mártir cristiano?", options: ["Felipe", "Bernabé", "Esteban"], correct: 2, chapter: "7", verse: "59", verseText: "Y apedrearon a Esteban, invocando él y diciendo: Señor Jesús, recibe mi espíritu." },
      { q: "¿Cómo se llamaba el apóstol Pablo antes de su conversión?", options: ["Simón", "Saulo", "Ananías"], correct: 1, chapter: "13", verse: "9", verseText: "Entonces Saulo, que también es Pablo, lleno de Espíritu Santo, poniendo en él los ojos..." },
      { q: "¿En qué camino tuvo Saulo su encuentro con Jesús resucitado?", options: ["El camino a Emaús", "El camino a Damasco", "El camino a Jericó"], correct: 1, chapter: "9", verse: "3", verseText: "Y yendo por el camino, aconteció que llegando cerca de Damasco, súbitamente le cercó un resplandor de luz del cielo." },
      { q: "¿Quién ayudó a Saulo a recuperar la vista después de quedar ciego?", options: ["Bernabé", "Timoteo", "Ananías"], correct: 2, chapter: "9", verse: "17", verseText: "Y Ananías fue, y entró en la casa, y poniendo sobre él las manos, dijo: Saulo hermano, el Señor Jesús... me ha enviado para que recibas la vista." },
      { q: "¿Quién acompañó a Pablo en varios de sus viajes misioneros?", options: ["Pedro", "Bernabé", "Santiago"], correct: 1, chapter: "13", verse: "2", verseText: "...Apartadme a Bernabé y a Saulo para la obra para la cual los he llamado." },
      { q: "¿En qué ciudad se llamó por primera vez \"cristianos\" a los discípulos?", options: ["Jerusalén", "Roma", "Antioquía"], correct: 2, chapter: "11", verse: "26", verseText: "...Y los discípulos fueron llamados cristianos primeramente en Antioquía." },
      { q: "¿Qué ocurrió cuando un ángel liberó a Pedro de la cárcel?", options: ["Lo escondieron en un barco", "Las cadenas cayeron y las puertas se abrieron solas", "Se volvió invisible"], correct: 1, chapter: "12", verse: "7", verseText: "...y una luz resplandeció en la cárcel; e hiriendo a Pedro en el lado, le despertó... y las cadenas se le cayeron de las manos." },
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

const LETTERS = ["A", "B", "C"];
const CUSTOM_BOOK_ID = "personalizado";
const LIBRARY_STORAGE_KEY = "duelo-biblico:biblioteca";

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

function orderQuestions(questions, mode) {
  if (mode === "numeric") return orderByNumeric(questions);
  if (mode === "alternating") return orderAlternating(questions);
  return shuffle(questions);
}

// Formatea segundos como "45s", "2m" o "2m 30s" para tiempos largos (hasta 5 min)
function formatDuration(seconds) {
  if (seconds < 60) return `${seconds}s`;
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return s === 0 ? `${m} min` : `${m}m ${s}s`;
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
  const [screen, setScreen] = useState("setup");
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

  // Cargar la biblioteca guardada (preguntas base + propias, con cualquier edición previa)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const result = await window.storage.get(LIBRARY_STORAGE_KEY, false);
        if (!cancelled && result?.value) {
          const parsed = JSON.parse(result.value);
          if (Array.isArray(parsed) && parsed.length > 0) setLibrary(normalizeLibrary(parsed));
        }
      } catch (e) {
        // primera vez que se abre la app: se usa la biblioteca base por defecto
      } finally {
        if (!cancelled) setLibraryLoaded(true);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  async function persistLibrary(next) {
    setLibrary(next);
    try {
      await window.storage.set(LIBRARY_STORAGE_KEY, JSON.stringify(next), false);
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

  const playableBooks = useMemo(() => library.filter((b) => b.questions.length > 0), [library]);
  const book = useMemo(() => library.find((b) => b.id === bookId), [library, bookId]);
  const customCount = library.find((b) => b.id === CUSTOM_BOOK_ID)?.questions.length || 0;
  const currentQ = questions[qIndex];
  const teamName = (n) => (n === 1 ? team1Name || "Equipo 1" : team2Name || "Equipo 2");
  const teamColor = (n) => (n === 1 ? team1Color : team2Color);
  const teamIcon = (n) => TEAM_ICONS.find((icon) => icon.id === (n === 1 ? team1Icon : team2Icon)) || TEAM_ICONS[0];

  function goToBookSelect() {
    if (!team1Name.trim() || !team2Name.trim()) return;
    setScreen("book");
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
    setQuestions(shuffle(chosen.questions));
    setQIndex(0);
    setTurn(1);
    setScores({ 1: 0, 2: 0 });
    setSelected(null);
    setShowFeedback(false);
    setScreen("game");
  }

  function handleAnswer(idx) {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
    if (idx === currentQ.correct) {
      setScores((s) => ({ ...s, [turn]: s[turn] + 1 }));
    }
  }

  function nextQuestion() {
    if (qIndex + 1 < questions.length) {
      setQIndex((i) => i + 1);
      setTurn((t) => (t === 1 ? 2 : 1));
      setSelected(null);
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

      {screen === "setup" && (
        <SetupScreen
          team1Name={team1Name} setTeam1Name={setTeam1Name}
          team2Name={team2Name} setTeam2Name={setTeam2Name}
          team1Color={team1Color} setTeam1Color={setTeam1Color} team1Icon={team1Icon} setTeam1Icon={setTeam1Icon}
          team2Color={team2Color} setTeam2Color={setTeam2Color} team2Icon={team2Icon} setTeam2Icon={setTeam2Icon}
          customCount={customCount}
          onManage={() => openManage("setup")}
          onSettings={() => openSettings("setup")}
          onNext={goToBookSelect}
        />
      )}

      {screen === "book" && (
        <BookSelectScreen
          team1Name={teamName(1)} team2Name={teamName(2)}
          team1Color={team1Color} team2Color={team2Color}
          books={library}
          onSelect={startGame}
          onManage={() => openManage("book")}
        />
      )}

      {screen === "manage" && (
        <ManageQuestionsScreen
          library={library}
          onAddQuestion={addQuestionToBook}
          onUpdateQuestion={updateQuestionInBook}
          onDeleteQuestion={deleteQuestionFromBook}
          saveError={librarySaveError}
          loaded={libraryLoaded}
          onBack={() => setScreen(screenBeforeManage)}
        />
      )}

      {screen === "settings" && (
        <SettingsScreen
          difficultyTimers={difficultyTimers} setDifficultyTimer={setDifficultyTimer}
          feedbackDisplaySeconds={feedbackDisplaySeconds} setFeedbackDisplaySeconds={setFeedbackDisplaySeconds}
          verseDisplaySeconds={verseDisplaySeconds} setVerseDisplaySeconds={setVerseDisplaySeconds}
          backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
          narrationEnabled={narrationEnabled} setNarrationEnabled={setNarrationEnabled}
          onBack={() => setScreen(screenBeforeManage)}
        />
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
          difficultyTimers={difficultyTimers}
          feedbackDisplaySeconds={feedbackDisplaySeconds}
          verseDisplaySeconds={verseDisplaySeconds}
          narrationEnabled={narrationEnabled}
          onAnswer={handleAnswer}
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
          book={book}
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
function SetupScreen({ team1Name, setTeam1Name, team2Name, setTeam2Name, team1Color, setTeam1Color, team1Icon, setTeam1Icon, team2Color, setTeam2Color, team2Icon, setTeam2Icon, customCount, onManage, onSettings, onNext }) {
  const canContinue = team1Name.trim() && team2Name.trim();
  return (
    <div style={styles.container} className="fade-in">
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <RoseWindow size={100} colorA={team1Color} colorB={team2Color} />
        <h1 className="font-display" style={styles.h1}>Debate Bíblico</h1>
        <p className="font-body" style={styles.subtitle}>Dos equipos. Un libro de la Escritura. Que gane el que más conoce.</p>
      </header>

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
          Elegir libro bíblico <ChevronRight size={18} style={{ marginLeft: 6, verticalAlign: "-3px" }} />
        </button>

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
      </div>
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
function SettingsScreen({ difficultyTimers, setDifficultyTimer, feedbackDisplaySeconds, setFeedbackDisplaySeconds, verseDisplaySeconds, setVerseDisplaySeconds, backgroundColor, setBackgroundColor, narrationEnabled, setNarrationEnabled, onBack }) {
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
              <span className="font-display" style={{ color: "#F5EFE0", fontSize: 18 }}>{difficultyTimers[d.level]}s</span>
            </div>
            <input
              className="gold-range"
              type="range"
              min={5}
              max={60}
              step={5}
              value={difficultyTimers[d.level]}
              onChange={(e) => setDifficultyTimer(d.level, Number(e.target.value))}
              aria-label={`Segundos por pregunta de dificultad ${d.label}`}
            />
            <div className="font-ui" style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "#8FA0B8", marginTop: 4 }}>
              <span>5s</span><span>60s</span>
            </div>
          </div>
        ))}
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
    </div>
  );
}

/* ---------------------------------------------------------
   PANTALLA 2: Elegir libro
--------------------------------------------------------- */
function BookSelectScreen({ team1Name, team2Name, team1Color, team2Color, books, onSelect, onManage }) {
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
    </div>
  );
}


/* ---------------------------------------------------------
   PANTALLA: Preguntas (crear, editar, borrar — de cualquier libro)
--------------------------------------------------------- */
function ManageQuestionsScreen({ library, onAddQuestion, onUpdateQuestion, onDeleteQuestion, saveError, loaded, onBack }) {
  const [selectedBookId, setSelectedBookId] = useState(library[0]?.id);
  const [qText, setQText] = useState("");
  const [opts, setOpts] = useState(["", "", ""]);
  const [correct, setCorrect] = useState(0);
  const [chapter, setChapter] = useState("");
  const [verse, setVerse] = useState("");
  const [verseText, setVerseText] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const [formError, setFormError] = useState("");
  const [editState, setEditState] = useState(null); // { index, qText, opts, correct, chapter, verse, verseText, difficulty }

  const selectedBook = library.find((b) => b.id === selectedBookId) || library[0];
  const canAdd = qText.trim() && opts.every((o) => o.trim()) && chapter.trim() && verse.trim() && verseText.trim();

  function updateOpt(i, val) {
    setOpts((prev) => prev.map((o, idx) => (idx === i ? val : o)));
  }

  function resetForm() {
    setQText("");
    setOpts(["", "", ""]);
    setCorrect(0);
    setChapter("");
    setVerse("");
    setVerseText("");
    setDifficulty(1);
    setFormError("");
  }

  function addQuestion() {
    if (!canAdd) {
      setFormError("Completa la pregunta, las 3 opciones, el capítulo, el versículo y su texto antes de agregar.");
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
                        </div>
                      ))}
                    </div>
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
                <div key={i} style={{ ...styles.card, maxWidth: "none", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div>
                    <div className="font-ui" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 11.5, color: "#8FA0B8" }}>#{q.id}</span>
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
function GameScreen({ book, qIndex, total, currentQ, turn, teamName, teamColor, teamIcon, scores, selected, showFeedback, difficultyTimers, feedbackDisplaySeconds, verseDisplaySeconds, narrationEnabled, onAnswer, onNext }) {
  const activeColor = teamColor(turn);
  const timerSeconds = difficultyTimers[currentQ?.difficulty] ?? difficultyTimers[1] ?? 20;
  const [timeLeft, setTimeLeft] = useState(timerSeconds);
  const [verseVisible, setVerseVisible] = useState(false);
  const [verseSecondsLeft, setVerseSecondsLeft] = useState(verseDisplaySeconds);

  // Reinicia el reloj cada vez que cambia la pregunta
  useEffect(() => {
    setTimeLeft(timerSeconds);
  }, [qIndex, timerSeconds]);

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

  const timedOut = showFeedback && selected === -1;

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
    <div style={styles.container} className="fade-in">
      {/* Marcador */}
      <div style={styles.scoreBar}>
        <ScorePill name={teamName(1)} icon={teamIcon(1)} color={teamColor(1)} score={scores[1]} active={turn === 1} align="left" />
        <div className="font-ui" style={{ textAlign: "center", color: "#B8A98A", fontSize: "clamp(10px, 2.8vw, 12.5px)", flex: "0 1 auto", minWidth: 0, padding: "0 4px" }}>
          <div style={{ color: "#B8892B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{book?.name}</div>
          <div style={{ whiteSpace: "nowrap" }}>Pregunta {qIndex + 1} de {total}</div>
        </div>
        <ScorePill name={teamName(2)} icon={teamIcon(2)} color={teamColor(2)} score={scores[2]} active={turn === 2} align="right" />
      </div>

      {/* Barra de progreso */}
      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: `${((qIndex) / total) * 100}%` }} />
      </div>

      {/* Turno + temporizador */}
      <div key={qIndex} className="fade-in" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, margin: "24px 0 16px", textAlign: "center" }}>
        <div className="font-ui" style={{ fontSize: 16, color: "#F5EFE0" }}>
          Turno de <span style={{ color: activeColor, fontWeight: 700 }}>{teamName(turn)}</span>
        </div>
        <TimerRing secondsLeft={timeLeft} totalSeconds={timerSeconds} size={116} />
      </div>

      {/* Tarjeta de pregunta */}
      <div key={"q" + qIndex} className="fade-in" style={{ ...styles.questionCard, borderColor: activeColor }}>
        {(currentQ.chapter || currentQ.verse) && (
          <div className="font-ui" style={{ fontSize: 12.5, color: "#B8892B", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
            {book?.name} {currentQ.chapter}{currentQ.chapter && currentQ.verse ? ":" : ""}{currentQ.verse}
          </div>
        )}
        <p className="font-body" style={styles.questionText}>{currentQ.q}</p>

        {timedOut && (
          <div className="font-ui" style={{ marginTop: 10, color: "#C0405A", fontSize: 13.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            ⏱ Tiempo agotado — sin punto para {teamName(turn)}
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
          {currentQ.options.map((opt, idx) => {
            const isCorrect = idx === currentQ.correct;
            const isSelected = idx === selected;
            let bg = "#1F3454";
            let border = "#3A5578";
            if (showFeedback) {
              if (isCorrect) { bg = "#1F6F5C"; border = "#1F6F5C"; }
              else if (isSelected) { bg = "#8B2E3F"; border = "#8B2E3F"; }
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
                  padding: "14px 18px", borderRadius: 10, background: bg, border: `1.5px solid ${border}`,
                  color: "#F5EFE0", fontSize: 17, textAlign: "left", cursor: showFeedback ? "default" : "pointer",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span
                    className="font-display"
                    style={{
                      display: "flex", alignItems: "center", justifyContent: "center",
                      width: 30, height: 30, borderRadius: 7, flex: "0 0 auto",
                      background: "rgba(184,137,43,0.18)", border: "1.5px solid #B8892B",
                      color: "#D4AF5A", fontSize: 15, fontWeight: 700,
                    }}
                  >
                    {LETTERS[idx]}
                  </span>
                  <span>{opt}</span>
                </span>
                {showFeedback && isCorrect && <Check size={20} color="#F5EFE0" />}
                {showFeedback && isSelected && !isCorrect && <X size={20} color="#F5EFE0" />}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="font-display fade-in" style={{ marginTop: 20, textAlign: "center", color: selected === currentQ.correct ? "#63C7A7" : "#F08A9D", fontSize: 22, letterSpacing: "0.1em" }}>
            {selected === currentQ.correct ? "Correcto" : "Incorrecto"}
          </div>
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
  );
}

function ScorePill({ name, icon, color, score, active, align }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: "clamp(8px, 2.5vw, 14px)", minWidth: 0,
      flexDirection: align === "right" ? "row-reverse" : "row",
      opacity: active ? 1 : 0.55, transition: "opacity 0.2s ease",
    }}>
      <div style={{
        width: "clamp(48px, 15vw, 68px)", height: "clamp(48px, 15vw, 68px)", borderRadius: "50%", background: color,
        display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto",
        fontFamily: "'Cinzel', serif", fontWeight: 700, color: "#F5EFE0", fontSize: "clamp(20px, 6vw, 29px)",
        boxShadow: active ? `0 0 0 3px #16233D, 0 0 0 5px ${color}` : "none",
      }}>
        {score}
      </div>
      <div className="font-ui" style={{ fontSize: "clamp(17px, 5.5vw, 24px)", color: "#F5EFE0", fontWeight: 700, lineHeight: 1.15, maxWidth: "clamp(70px, 30vw, 150px)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        <span aria-hidden="true">{icon.symbol} </span>{name}<span style={{ display: "block", color: "#B8892B", fontSize: "0.55em", fontWeight: 700, marginTop: 2 }}>Puntos: {score}</span>
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
function ResultsScreen({ winner, teamName, teamColor, scores, total, book, onRematch, onNewTeams }) {
  return (
    <div style={{ ...styles.container, textAlign: "center" }} className="fade-in">
      {winner !== "empate" && (
        <Confetti colors={[teamColor(winner), "#B8892B", "#F5EFE0", teamColor(winner === 1 ? 2 : 1)]} />
      )}
      <RoseWindow size={110} colorA={teamColor(1)} colorB={teamColor(2)} />

      {winner === "empate" ? (
        <>
          <h1 className="font-display" style={styles.h1}>¡Empate!</h1>
          <p className="font-body" style={styles.subtitle}>Ambos equipos demostraron conocer bien {book?.name}.</p>
        </>
      ) : (
        <>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 4 }}>
            <Crown size={34} color={teamColor(winner)} />
          </div>
          <h1 className="font-display" style={{ ...styles.h1, color: teamColor(winner) }}>{teamName(winner)} gana</h1>
          <p className="font-body" style={styles.subtitle}>Con el mejor dominio del libro de {book?.name}.</p>
        </>
      )}

      <div style={styles.resultsRow}>
        <ResultCard name={teamName(1)} color={teamColor(1)} score={scores[1]} total={total} />
        <ResultCard name={teamName(2)} color={teamColor(2)} score={scores[2]} total={total} />
      </div>

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

function ResultCard({ name, color, score, total }) {
  return (
    <div style={{ ...styles.card, borderColor: color, minWidth: 160 }}>
      <div className="font-ui" style={{ fontSize: 13, color, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{name}</div>
      <div className="font-display" style={{ fontSize: 40, color: "#F5EFE0" }}>{score}<span style={{ fontSize: 18, color: "#8FA0B8" }}>/{total}</span></div>
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
  scoreBar: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: "clamp(4px, 2vw, 10px)" },
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

const rootEl = document.getElementById("root");
ReactDOM.createRoot(rootEl).render(<App />);
