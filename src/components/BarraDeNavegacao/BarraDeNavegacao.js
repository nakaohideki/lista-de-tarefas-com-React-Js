import React from "react" //Importacao do componente react para uso na aplicação.
import "./barraDeNavegacao.css" //Importação do arquivo responsável pela estilização deste componente.
export default function BarraDeNavegacao() {
	//Criação e exportação do tipo default do componente de função deste componente.
	return (
		// Atribuido seletor classe barraDeNavegacao
		<nav className='barraDeNavegacao'>
			<span>Lista de Tarefas</span>
		</nav>
	)
}
