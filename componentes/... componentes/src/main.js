import { ourButton } from './src/components/OurButton/OurButton';
import './style.css';


const app = document.querySelector("#app")

app.innerHTML = `
${ourButton("Este es el texto elegido para el boton","#9a9aff")}
${ourButton("Login","#ffaaaa","highlight")}
<ol>
  <li>Otros</li>
  <li>Contenido</li>
</ol>
${ourButton("Otro texto!")}
`
