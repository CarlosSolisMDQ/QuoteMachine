function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      quotes: [],
      index: 0 });_defineProperty(this, "getRandomQuote",












    () => {
      const { quotes } = this.state;

      if (quotes.length > 0) {
        const index = Math.floor(Math.random() * quotes.length);
        this.setState({ index });
        //una mejora a esto sería que no pueda dar dos veces consecutivas el mismo indice.
      }
    });}componentDidMount() {//cosa de mandinga, despues de probar mil veces haciendo fetch a un json en mi cuenta de github empezó a funcionar solo despues de dar centenares de errores.   
    fetch("https://usuario9342.github.io/QuoteMachine/minedata/quotes.json").then(res => res.json()).then(res => {this.setState({ quotes: res.quotes }, this.getRandomQuote).catch(error => {console.log(error);});});}
  render() {

    const { quotes, index } = this.state;
    const quote = quotes[index];

    const tweetURL = "https://twitter.com/intent/tweet?text=";
    //no pude hacer funcionar esto, siempre lo bloquea twitter.

    return (
      React.createElement("div", { className: "wrapper d-flex justify-content-center align-items-center" },
      React.createElement("div", { className: "col-7 box rounded-lg box p-5" },
      React.createElement("div", { id: "quote-box" },

      quote && React.createElement("p", { id: "text" }, "\"", quote.quote, "\""),

      React.createElement("div", { class: "d-flex justify-content-end" },


      quote && React.createElement("div", { className: "mb-3" }, React.createElement("cite", { class: "", id: "author" }, "-", quote.author))),




      React.createElement("div", { class: "d-flex justify-content-between" },
      React.createElement("a", { className: "btn btn-primary", target: "_blank", href: "https://twitter.com/intent/tweet?text=", id: "tweet-quote" }, React.createElement("i", { className: "fa fa-twitter" }), " tweet"),
      React.createElement("button", { class: "btn btn-primary", id: "new-quote", onClick: this.getRandomQuote }, React.createElement("i", { className: "fa fa-chevron-right" }), " next quote"))))));





  }}





const app = document.querySelector("#root");
ReactDOM.render(React.createElement(App, { title: "Example Component" }), app);