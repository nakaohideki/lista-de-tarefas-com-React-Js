import React from "react" //Importação do pacote React para executar a aplicação
import { createRoot } from "react-dom/client" //Importação do pacote de renderização dos objetos da aplicação
import App from "./App" //Importação do conteúdo do componente App, para renderizar toda a aplicação.

const container = document.getElementById("root") //atribuindo o elemento de Id root a rootElement
const root = createRoot(container) //createRoot (container!) if you use TypeScript criando local de renderização da aplicação.
root.render(<App tab='home' />) //Renderizando na tela o conteúdo de App no local criado.
