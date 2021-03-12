import './App.css';
import Card from './Card';
import Movie from './Movie';
import Todo from './Todo';
import Collapsible from 'react-collapsible';

let movies = [
  {
    title: "A Beatiful Mind",
    year: "2002",
    producer: "Brian Grazer"
  },
  {
    title: "A Beatiful Mind",
    year: "Shawshank",
    producer: "Niki Marvin"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    producer: "Christopher Nolan"
  }
]

let todoList = [
  {
    check: "/img/check.png",
    listText: "Hit the gym",
    logo: "/img/gym.png"
  },
  {
    check: "/img/check.png",
    listText: "Pay bills",
    logo: "/img/bill.png"
  },
  {
    check: "/img/doing.png",
    listText: "Meet George",
    logo: "/img/dance.png"
  },
  {
    check: "/img/doing.png",
    listText: "Buy eggs",
    logo: "/img/eat.png"
  },
  {
    check: "/img/no.png",
    listText: "Read a book",
    logo: "/img/book.png"
  },
  {
    check: "/img/no.png",
    listText: "Organize office",
    logo: "/img/organize.png"
  }
]

let faq = [
  {
    question: "Für wen ist dieses Bootcamp?",
    answer:
      "Für alle Menschen die motiviert sind Neues zu lernen! Du solltest außerdem über 18 Jahre alt sein und bestenfalls eine Leidenschaft für den Bereich IT mitbringen.",
  },
  {
    question: "Welcher akademische Grad ist erforderlich?",
    answer:
      "Lange Rede, kurzer Sinn – Keiner. Wir sind auf der Suche nach wunderbaren Querdenkern*innen, die motiviert sind ein neues Leben zu starten.",
  },
  {
    question: "Ist Vorerfahrung im Bereich IT / Coding notwendig?",
    answer:
      "Nein. Alles was du brauchst ist Zeit, Motivation und den Willen eines Bill Gates. 😉 Du solltest aber in der Lage sein, Songs von Britney Spears zu verstehen und zu übersetzen, da alle Programmiersprachen auf Englisch basieren.",
  },
  {
    question: "Wie lange dauern die Bootcamps?",
    answer:
      "Das kommt ganz auf das Kursformat an. Der Vollzeit Kurs ist 22 Wochen lang (5 Monate) und der Teilzeitkurs streckt sich über 30 Wochen (7 Monate).",
  }
]

function App() {
  return (
    <div className="App">
      <section id="collapse">
        <Collapsible
          trigger={<div>{faq[0].question}<p class="plus">+</p></div>} triggerWhenOpen={<div>{faq[0].question}<p class="minus">-</p></div>}>
          <p>
            {faq[0].answer}
          </p>
        </Collapsible>
        <Collapsible trigger={<div>{faq[1].question}<p class="plus">+</p></div>} triggerWhenOpen={<div>{faq[1].question}<p class="minus">-</p></div>}>
          <p>
            {faq[1].answer}
          </p>
        </Collapsible>
        <Collapsible trigger={<div>{faq[2].question}<p class="plus">+</p></div>} triggerWhenOpen={<div>{faq[2].question}<p class="minus">-</p></div>}>
          <p>
            {faq[2].answer}
          </p>
        </Collapsible>
        <Collapsible trigger={<div>{faq[3].question}<p class="plus">+</p></div>} triggerWhenOpen={<div>{faq[3].question}<p class="minus">-</p></div>}>
          <p>
            {faq[3].answer}
          </p>
        </Collapsible>
      </section>
      <h1>SUPERSHOP</h1>
      <section id="section-cards">
        <Card img={'https://source.unsplash.com/random'} product={"cocooil"} price={"30$"} buttonText={"BUY NOW"} />
        <Card img={'https://source.unsplash.com/random?1'} product={"cocooil"} price={"30$"} buttonText={"BUY NOW"} />
        <Card img={'https://source.unsplash.com/random?2'} product={"cocooil"} price={"30$"} buttonText={"BUY NOW"} />
      </section>
      <div>
        <h1>To do List</h1>
        <ul id="todo-list">
          <Todo check={todoList[0].check} text={todoList[0].listText} logo={todoList[0].logo} />
          <Todo check={todoList[1].check} text={todoList[1].listText} logo={todoList[1].logo} />
          <Todo check={todoList[2].check} text={todoList[2].listText} logo={todoList[2].logo} />
          <Todo check={todoList[3].check} text={todoList[3].listText} logo={todoList[3].logo} />
          <Todo check={todoList[4].check} text={todoList[4].listText} logo={todoList[4].logo} />
          <Todo check={todoList[5].check} text={todoList[5].listText} logo={todoList[5].logo} />
        </ul>
      </div>
      <div className="movies">
        <Movie title={movies[0].title} year={movies[0].year} producer={movies[0].producer} />
        <Movie title={movies[1].title} year={movies[1].year} producer={movies[1].producer} />
        <Movie title={movies[2].title} year={movies[2].year} producer={movies[2].producer} />
      </div>
    </div>
  );
}

export default App;
