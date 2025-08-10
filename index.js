#!/usr/bin/env node

import chalk from "chalk";
import readline from "readline";

// --- Detecção de Idioma ---
function getSystemLanguage() {
  const lang =
    process.env.LANG || process.env.LANGUAGE || process.env.LC_ALL || "en_US";

  if (lang.startsWith("pt")) return "pt";
  if (lang.startsWith("es")) return "es";
  return "en"; // padrão inglês
}

// --- Biblioteca de Citações Multilíngue ---
const quotes = {
  pt: [
    // 20 Citações Originais
    "O cristianismo, se for falso, não tem importância. Se for verdade, tem importância infinita. A única coisa que não pode ser é moderadamente importante.",
    "As dificuldades preparam pessoas comuns para destinos extraordinários.",
    "A amizade nasce no momento em que uma pessoa diz para outra: 'O quê! Você também? Pensei que eu era o único.'",
    "Você nunca terá uma xícara de chá grande o suficiente ou um livro longo o suficiente para me agradar.",
    "A tarefa do educador moderno não é derrubar florestas, mas irrigar desertos.",
    "Somos o que acreditamos ser.",
    "Amar é ser vulnerável. Ame qualquer coisa e seu coração irá certamente ser espremido e possivelmente partido.",
    "A educação sem valores, por mais útil que seja, parece fazer do homem um demônio mais inteligente.",
    "A coragem não é simplesmente uma das virtudes, mas a forma que cada virtude assume quando está sendo testada.",
    "Se você está no caminho errado, voltar atrás significa progresso.",
    "O orgulho não tem prazer em ter algo, mas apenas em ter mais que o próximo.",
    "A experiência é uma professora cruel, mas você aprende. Meu Deus! Como você aprende!",
    "Nós lemos para saber que não estamos sozinhos.",
    "A verdadeira humildade não é pensar menos de si mesmo, mas pensar menos em si mesmo.",
    "A alegria é um assunto levado a sério no Céu.",
    "O fracasso faz parte da vida. Se você não fracassa, você não aprende. Se você não aprende, você não muda.",
    "A fé é a arte de se apegar às coisas que sua razão já aceitou, apesar das mudanças de humor.",
    "Não perca tempo se preocupando se você 'ama' o seu vizinho: aja como se o amasse.",
    "A amizade é desnecessária, como a filosofia, como a arte... Não tem valor de sobrevivência; em vez disso, é uma daquelas coisas que dão valor à sobrevivência.",
    "Você não pode voltar atrás e mudar o começo, mas pode começar onde está e mudar o final.",
    // 21 Novas Citações Adicionadas
    "Deus sussurra em nossos prazeres, fala em nossa consciência, mas grita em nossos sofrimentos: esse é seu megafone para despertar um mundo surdo.",
    "Se encontrarmos em nós um desejo que nenhuma experiência neste mundo pode satisfazer, a explicação mais provável é que fomos feitos para outro mundo.",
    "Ao ler a grande literatura, eu me torno mil homens e, mesmo assim, continuo a ser eu mesmo.",
    "A gratidão olha para o passado e o amor para o presente; o medo, a avareza, a luxúria e a ambição olham para a frente.",
    "Certamente você realizará o propósito de Deus, não importa como esteja agindo, mas faz diferença se você serve como Judas ou como João.",

    "Um livro infantil que só pode ser apreciado por crianças não é um bom livro infantil.",
    "Deus nos permite experimentar os pontos baixos da vida a fim de nos ensinar lições que não poderíamos aprender de nenhuma outra maneira.",
    "Caçoamos da honra, e nos chocamos ao encontrar traidores entre nós.",
    "Para que o amor seja uma bênção, ele deve se dirigir ao único Amado que nunca morrerá.",
    "O menor ato de bondade hoje é a captura de um ponto estratégico a partir do qual, meses depois, você poderá seguir para vitórias que nunca sonhou.",
    "Quando o mundo inteiro corre em direção a um precipício, aquele que vai na direção oposta parece ter perdido a razão.",
    "Nós nunca descobrimos a força do mal dentro de nós enquanto não tentarmos lutar contra ele.",
    "O Filho de Deus se tornou homem para permitir aos homens se tornarem filhos de Deus.",
    "Nós nos sentamos diante da arte para que algo aconteça conosco, não para fazer algo com ela. A primeira exigência é a rendição.",
    "Nenhuma quantidade de quedas vai realmente nos destruir se continuarmos nos levantando.",
    "Eu acho que se Deus nos perdoa, nós devemos perdoar a nós mesmos. Caso contrário, é como nos colocarmos como um tribunal superior a Ele.",
    "O presente é o ponto em que o tempo toca a eternidade.",
    "Um homem não pode diminuir a glória de Deus, recusando-se a adorá-Lo, assim como um louco não pode apagar o sol rabiscando a palavra 'escuridão' na parede de sua cela.",
    "A única atitude fatal é se dar por satisfeito com qualquer coisa que não a perfeição.",
    "Não é da sua conta ter sucesso, mas sim fazer o que é certo; quando você fizer isso, o resto estará com Deus.",
    "O perdão é um belo conceito até você ter algo para perdoar.",
  ],

  en: [
    // 20 Original Quotes
    "Christianity, if false, is of no importance, and if true, of infinite importance. The only thing it cannot be is moderately important.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Friendship is born at that moment when one person says to another, 'What! You too? I thought I was the only one.'",
    "You can never get a cup of tea large enough or a book long enough to suit me.",
    "The task of the modern educator is not to cut down jungles, but to irrigate deserts.",
    "We are what we believe we are.",
    "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken.",
    "Education without values, as useful as it is, seems rather to make man a more clever devil.",
    "Courage is not simply one of the virtues, but the form of every virtue at the testing point.",
    "If you are on the wrong road, progress means doing an about-turn and walking back to the right road.",
    "Pride gets no pleasure out of having something, only out of having more of it than the next man.",
    "Experience is a brutal teacher, but you learn. My God, do you learn.",
    "We read to know we're not alone.",
    "True humility is not thinking less of yourself; it is thinking of yourself less.",
    "Joy is the serious business of Heaven.",
    "Failures are finger posts on the road to achievement.",
    "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    "Do not waste time bothering whether you 'love' your neighbor; act as if you did.",
    "Friendship is unnecessary, like philosophy, like art... It has no survival value; rather it is one of those things that give value to survival.",
    "You can't go back and change the beginning, but you can start where you are and change the ending.",
    // 21 New Quotes Added
    "God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains: it is His megaphone to rouse a deaf world.",
    "If we find in ourselves a desire which no experience in this world can satisfy, the most probable explanation is that we were made for another world.",
    "In reading great literature, I become a thousand men and yet remain myself.",
    "Gratitude looks to the past and love to the present; fear, avarice, lust, and ambition look ahead.",
    "You will certainly carry out God's purpose, however you act, but it makes a difference to you whether you serve like Judas or like John.",
    "A children's story that can only be enjoyed by children is not a good children's story at all.",
    "God allows us to experience the low points of life in order to teach us lessons that we could learn in no other way.",
    "We make men without chests and expect of them virtue and enterprise. We laugh at honour and are shocked to find traitors in our midst.",
    "For a love to be a blessing, it must be directed to the only Beloved who will never die.",
    "The smallest act of kindness today is the capture of a strategic point from which, months later, you may be able to go on to victories you never dreamed of.",
    "When the whole world is running towards a cliff, he who is running in the opposite direction appears to have lost his mind.",
    "We never find the strength of the evil impulse inside us until we try to fight it.",
    "The Son of God became a man to enable men to become sons of God.",
    "We sit down before art to have something done to us, not that we may do things with it. The first demand any work of art makes upon us is surrender.",
    "No amount of falls will really undo us if we keep on picking ourselves up.",
    "I think that if God forgives us we must forgive ourselves. Otherwise, it is almost like setting up ourselves as a higher tribunal than Him.",
    "The present is the point at which time touches eternity.",
    "A man can no more diminish God's glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word 'darkness' on the walls of his cell.",
    "The only fatal thing is to be content with anything less than perfection.",
    "It's not your business to succeed, but to do right; when you have done so, the rest lies with God.",
    "Forgiveness is a beautiful concept, until you have something to forgive.",
  ],

  es: [
    // 20 Citas Originales
    "El cristianismo, si es falso, no tiene importancia, y si es verdadero, es de importancia infinita. Lo único que no puede ser es moderadamente importante.",
    "Las dificultades a menudo preparan a las personas ordinarias para un destino extraordinario.",
    "La amistad nace en el momento en que una persona le dice a otra: '¡Qué! ¿Tú también? Pensé que era el único.'",
    "Nunca puedes conseguir una taza de té lo suficientemente grande o un libro lo suficientemente largo para satisfacerme.",
    "La tarea del educador moderno no es talar selvas, sino irrigar desiertos.",
    "Somos lo que creemos que somos.",
    "Amar es ser vulnerable. Ama cualquier cosa y tu corazón será retorcido y posiblemente roto.",
    "La educación sin valores, por útil que sea, parece hacer del hombre un demonio más inteligente.",
    "El coraje no es simplemente una de las virtudes, sino la forma de cada virtud en el momento de la prueba.",
    "Si estás en el camino equivocado, el progreso significa dar la vuelta y caminar de regreso al camino correcto.",
    "El orgullo no obtiene placer de tener algo, solo de tener más que el vecino.",
    "La experiencia es una maestra brutal, pero aprendes. Dios mío, cómo aprendes.",
    "Leemos para saber que no estamos solos.",
    "La verdadera humildad no es pensar menos de ti mismo; es pensar menos en ti mismo.",
    "La alegría es el asunto serio del Cielo.",
    "Los fracasos son señales en el camino hacia el logro.",
    "La fe es el arte de aferrarse a las cosas que tu razón ha aceptado una vez, a pesar de tus estados de ánimo cambiantes.",
    "No pierdas tiempo preocupándote si 'amas' a tu prójimo; actúa como si lo hicieras.",
    "La amistad es innecesaria, como la filosofía, como el arte... No tiene valor de supervivencia; más bien es una de esas cosas que dan valor a la supervivencia.",
    "No puedes volver atrás y cambiar el comienzo, pero puedes empezar donde estás y cambiar el final.",
    // 21 Nuevas Citas Añadidas
    "Dios nos susurra en nuestros placeres, habla en nuestra conciencia, pero grita en nuestros dolores: es su megáfono para despertar a un mundo sordo.",
    "Si encontramos en nosotros un deseo que ninguna experiencia en este mundo puede satisfacer, la explicación más probable es que fuimos hechos para otro mundo.",
    "Al leer la gran literatura, me convierto en mil hombres y, sin embargo, sigo siendo yo mismo.",
    "La gratitud mira al pasado y el amor al presente; el miedo, la avaricia, la lujuria y la ambición miran hacia adelante.",
    "Ciertamente llevarás a cabo el propósito de Dios, actúes como actúes, pero para ti hay una diferencia si sirves como Judas o como Juan.",
    "Una historia para niños que solo puede ser disfrutada por niños no es una buena historia para niños en absoluto.",
    "Dios nos permite experimentar los puntos bajos de la vida para enseñarnos lecciones que no podríamos aprender de ninguna otra manera.",
    "Creamos hombres sin pecho y esperamos de ellos virtud y arrojo. Nos reímos del honor y nos escandalizamos al encontrar traidores entre nosotros.",
    "Para que un amor sea una bendición, debe dirigirse al único Amado que nunca morirá.",
    "El acto de bondad más pequeño de hoy es la captura de un punto estratégico desde el cual, meses después, podrás avanzar hacia victorias que nunca soñaste.",
    "Cuando todo el mundo corre hacia un acantilado, el que corre en dirección contraria parece haber perdido el juicio.",
    "Nunca descubrimos la fuerza del impulso maligno dentro de nosotros hasta que intentamos combatirlo.",
    "El Hijo de Dios se hizo hombre para permitir que los hombres se convirtieran en hijos de Dios.",
    "Nos sentamos ante el arte para que se nos haga algo, no para que hagamos cosas con él. La primera exigencia que cualquier obra de arte nos hace es la rendición.",
    "Ninguna cantidad de caídas nos deshará realmente si seguimos levantándonos.",
    "Creo que si Dios nos perdona, debemos perdonarnos a nosotros mismos. De lo contrario, es casi como erigirnos en un tribunal superior a Él.",
    "El presente es el punto en el que el tiempo toca la eternidad.",
    "Un hombre no puede disminuir la gloria de Dios negándose a adorarlo, como tampoco un lunático puede apagar el sol garabateando la palabra 'oscuridad' en las paredes de su celda.",
    "Lo único fatal es contentarse con algo menos que la perfección.",
    "No es tu deber tener éxito, sino hacer lo correcto; cuando lo hayas hecho, el resto está en manos de Dios.",
    "El perdón es un concepto hermoso, hasta que tienes algo que perdonar.",
  ],
};

// --- Textos da Interface Multilíngue ---
const ui = {
  pt: {
    title: "💭 Sabedoria de C.S. Lewis",
    author: "— C.S. Lewis",
    askAnother: "Deseja outra pérola de sabedoria? (s/n) ",
    goodbye: "\nAté a próxima! Que a sabedoria te acompanhe.",
  },
  en: {
    title: "💭 C.S. Lewis Wisdom",
    author: "— C.S. Lewis",
    askAnother: "Would you like another pearl of wisdom? (y/n) ",
    goodbye: "\nUntil next time! May wisdom be with you.",
  },
  es: {
    title: "💭 Sabiduría de C.S. Lewis",
    author: "— C.S. Lewis",
    askAnother: "¿Te gustaría otra perla de sabiduría? (s/n) ",
    goodbye: "\n¡Hasta la próxima! Que la sabiduría te acompañe.",
  },
};

// --- Constantes de Configuração Visual ---
const BOX_WIDTH = 80;

// --- Funções Auxiliares ---

/**
 * Quebra um texto em múltiplas linhas com base em uma largura máxima.
 * @param {string} text - O texto a ser quebrado.
 * @param {number} maxWidth - A largura máxima de cada linha.
 * @returns {string[]} Um array de linhas.
 */
function wordWrap(text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let currentLine = "";

  words.forEach((word) => {
    // Verifica se adicionar a palavra ultrapassará o limite
    const testLine = currentLine ? currentLine + " " + word : word;

    if (testLine.length > maxWidth && currentLine) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = testLine;
    }
  });

  if (currentLine.trim()) {
    lines.push(currentLine.trim());
  }

  return lines;
}

/**
 * Exibe uma citação aleatória formatada no console.
 */
function displayQuote() {
  // Limpa o console de forma mais efetiva
  process.stdout.write("\x1Bc");

  // Detecta o idioma do sistema
  const lang = getSystemLanguage();
  const currentQuotes = quotes[lang];
  const currentUI = ui[lang];

  // 1. Título simples e elegante
  const title = currentUI.title;
  console.log();
  console.log(
    chalk.cyan.bold(
      title.padStart(Math.floor((BOX_WIDTH - title.length) / 2) + title.length)
    )
  );
  console.log();

  // 2. Seleciona e formata a citação
  const randomIndex = Math.floor(Math.random() * currentQuotes.length);
  const quote = currentQuotes[randomIndex];

  // Calcula a largura para o texto
  const textWidth = BOX_WIDTH - 4; // margem de 2 espaços de cada lado
  const quoteLines = wordWrap(quote, textWidth);

  // 3. Imprime a citação sem bordas
  console.log();

  quoteLines.forEach((line, index) => {
    let displayLine = line;

    // Adiciona aspas apenas na primeira e última linha
    if (index === 0) {
      displayLine = '"' + line;
    }
    if (index === quoteLines.length - 1) {
      displayLine = displayLine + '"';
    }

    // Centraliza o texto
    const centeredLine = displayLine.padStart(
      Math.floor((BOX_WIDTH - displayLine.length) / 2) + displayLine.length
    );
    console.log(chalk.yellow.italic(centeredLine));
  });

  console.log();

  // Linha do autor centralizada
  const authorText = currentUI.author;
  const centeredAuthor = authorText.padStart(
    Math.floor((BOX_WIDTH - authorText.length) / 2) + authorText.length
  );
  console.log(chalk.green.bold(centeredAuthor));

  console.log();
}

// --- Lógica Principal e Interação com o Usuário ---

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Pergunta ao usuário se ele quer outra citação e age de acordo.
 */
function askForAnother() {
  const lang = getSystemLanguage();
  const currentUI = ui[lang];

  rl.question(chalk.white(currentUI.askAnother), (answer) => {
    const positiveAnswers = ["s", "y", "si", "sí"];
    if (positiveAnswers.includes(answer.toLowerCase())) {
      displayQuote();
      askForAnother();
    } else {
      console.log(chalk.cyan(currentUI.goodbye));
      rl.close();
    }
  });
}

/**
 * Função principal para iniciar o programa.
 */
function main() {
  displayQuote();
  askForAnother();
}

// Inicia a execução
main();
