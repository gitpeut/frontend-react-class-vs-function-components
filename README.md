# Opdrachtbeschrijving
In veel documentatie zul je voorbeelden tegenkomen met class components. Daarom is het goed om ook deze code te kunnen lezen, begrijpen, 
en omschrijven naar een functiecomponent met hooks. In onderstaand voorbeeld vindt je een class component met daarin een lichtknopje. 
De staat van het lichtknopje (`aan` of `uit`) wordt bijgehouden in de state. De tekst op de button wordt ook aangepast op basis van de state.

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightOn: true
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      isLightOn: !this.state.isLightOn,
    });
  }

  render() {
    return (
      <button
        type="button"
        onClick={this.handleClick}
      >
        {this.state.isLightOn ? 'AAN' : 'UIT'}
      </button>
    );
  }
}

export default App;
```

## Plan de campagne
1. Kopieer de code van bovenstaand voorbeeld en bekijk de code regel-voor-regel. Schrijf commentaar bij elke regel code, waarin je in jouw eigen woorden beschrijft wat deze regel doet.
2. Bekijk het hele document met jouw commentaar. Heb je voor jezelf helder wat er gebeurt? Zo ja, dan kun je beginnen met het maken van een functie-component.

Dit project is gemaakt met [Create React App](https://github.com/facebook/create-react-app).

## De applicatie starten
Als je het project gecloned hebt naar jouw lokale machine, installeer je eerst de node_modules door het volgende commando in de terminal te runnen:

`npm install`

Wanneer dit klaar is, kun je de applicatie starten met behulp van:

`npm start`

of gebruik de WebStorm knop (npm start). Open http://localhost:3000 om de pagina in de browser te bekijken. Schrijf jouw functie-component in `src/App.js`: elke keer als je een bestand opslaat, zullen de wijzigingen te zien zijn op de webpagina.