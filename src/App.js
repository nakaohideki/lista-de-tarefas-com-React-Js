import React, { useState } from "react" //Importação da biblioteca React e do hook useState neste compnente.
import BarraDeNavegacao from "./components/BarraDeNavegacao/BarraDeNavegacao" //Importação do componente Barra de navegação.
import ListaDeTarefas from "./components/ListaDeTarefas/ListaDeTarefas" //Importação do componente ListaDeTarefas.
import "./styles.css" //Importação do caminho para estilização deste componente.

var numero = 0 //Variável para geração da chave unica id.
const gerarId = () => {
	//Função para gerar chave unica id.
	numero = numero + 1 //incremento da variável número
	return numero //Retorno do id gerado.
}

//Designação para disponibilidade global deste componente de função App
export default function App() {
	const [tarefas, setTarefas] = useState([]) //Criação do estado tarefas a ser monitorado com o hook useState ajustado para um array vazio como estado inicial.

	const adicionarTarefa = (titulo, estado) => {
		//Função para inclusão de novas tarefas no estado tarefas criado anteriormente.
		const novaTarefa = {
			//Criação do objeto com seus respectivos atributos para ser adicionado ao estado tarefas.
			id: gerarId(), //Atributo id criado com o valor obtido com a execução da função gerarId.
			titulo, //Criado atributo título com valor vazio.
			estado, //Criado atributo estado com valor vazio.
		}

		setTarefas((tarefasExistentes) => {
			//Chamada da função para ajustar o estado inicial tendo como parâmetro um objeto com as tarefas existentes.
			return [...tarefasExistentes, novaTarefa] //retorno da função incluindo a nova tarefa criada.
		})
	}
	//Criação da função responsável por atualizar tarefas que recebe o id, titulo e estado.
	const atualizarTarefas = (id, titulo, estado) => {
		//SetTarefas, ajusta o estado da constante Tarefas com uma função que percorre cada elemento do array de tarefas, retornando todas as outras tarefas mais
		//a tarefa atualizada.
		setTarefas((tarefasExistentes) => {
			return tarefasExistentes.map((tarefa) => {
				return tarefa.id === id ? { ...tarefa, titulo, estado } : tarefa
			})
		})
	}
	// Criação da função para deletar tarefas que com base no id executa a função setTarefas para ajustar o estado de Tarefas, onde são filtradas todas as tarefas e
	//retornadas as tarefas com id diferentes ao informado na função.
	const deletarTarefas = (id) => {
		setTarefas((tarefasExistentes) => {
			return tarefasExistentes.filter((tarefa) => tarefa.id !== id)
		})
	}

	return (
		//retorno do componente em Jsx
		<>
			{/* <div className='barraDeNavegacaoApp'></div> */}
			<div className='App'>
				{/* Renderização do componente NavBar */}
				<BarraDeNavegacao />
				{/*Renderizando os componentes ListaDeTarefas da aplicação. */}
				<div className='container'>
					<ListaDeTarefas
						titulo='Pendente' //Atributo titulo para envio do valor Pendente.
						acoes={adicionarTarefa} //Atributo acoes para envio da a função adicionarTarefa.
						listaDeTarefas={tarefas.filter(
							(tarefa) => tarefa.estado === "Pendente"
						)} //Atributo tarefas para envio do array tarefas.
						atualizacao={atualizarTarefas}
						//Atributo deletar tarefas para envio a função deletarTarefas
						deletarTarefas={deletarTarefas}
						//Atributo estado para envio do estado da tarefa.
						estado='Pendente'
					/>
				</div>
				<div className='container'>
					<ListaDeTarefas
						titulo='Em Execução' //Atributo titulo para envio do valor Pendente.
						acoes={adicionarTarefa} //Atributo acoes para envio da a função adicionarTarefa.
						listaDeTarefas={tarefas.filter(
							(tarefa) => tarefa.estado === "Em Execução"
						)} //Atributo tarefas para envio do array tarefas.
						atualizacao={atualizarTarefas}
						//Atributo deletar tarefas para envio a função deletarTarefas
						deletarTarefas={deletarTarefas}
						//Atributo estado para envio do estado da tarefa.
						estado='Em Execução'
					/>
				</div>
				<div className='container'>
					<ListaDeTarefas
						titulo='Concluídas' //Atributo titulo para envio do valor Pendente.
						acoes={adicionarTarefa} //Atributo acoes para envio da a função adicionarTarefa.
						listaDeTarefas={tarefas.filter(
							(tarefa) => tarefa.estado === "Concluídas"
						)} //Atributo tarefas para envio do array tarefas.
						atualizacao={atualizarTarefas}
						//Atributo deletar tarefas para envio a função deletarTarefas
						deletarTarefas={deletarTarefas}
						//Atributo estado para envio do estado da tarefa.
						estado='Concluídas'
					/>
				</div>
				{/* Créditos do desenvolvedor. */}
				<span className='creditos'>Performed by Hideki Nakao</span>
			</div>
		</>
	)
}
