import PropTypes from "prop-types" //Importação do pacote PropTypes para especificação da tipagem das props.
import React from "react" //Importação do pacote React para executar a aplicação.
import plusIcon from "../../img/plus-icon.svg" //Importação do arquivo de imagem para ser renderizado no botão deste componente.
import Tarefa from "../Tarefa/Tarefa" //Importação do componente Tarefa para este componente.
import "./listaDeTarefas.css" //Importação do arquivo css para estilizar o componente.

//Criação e exportação padrão do componente de função ListaDeTarefa e desestruturação dos atributos da props que deverão ser recebidos por este componente React.
export default function ListaDeTarefas({
	titulo,
	estado,
	acoes,
	listaDeTarefas,
	atualizacao,
	deletarTarefas,
}) {
	//criação da função local adicionarTarefa
	const adicionarTarefa = () => {
		acoes("Nova Tarefa", estado) //Criação do texto que deverá aparecer como título, logo após a criação da tarefa e do parâmetro estado da tarefa.
	}

	//Retorno do componente Lista de Tarefas com a manipulação dos componentes recebidos.
	return (
		//div contendo seletor classe listaDeTarefas para estilização.
		<div className='listaDeTarefas'>
			{/* Div exibindo o conteúdo do atributo da prop titulo com seletor classe titulo.*/}
			<div className='titulo'>{titulo}</div>
			{/* Div exibindo o conteúdo do atributo da prop conteudo com seletor classe conteudo*/}
			<div className='conteudo'>
				{/*Renderização do componente Tarefa com os parâmetros e funcoes recebidos na prop deste componente.*/}
				{listaDeTarefas.map((tarefa) => {
					return (
						<Tarefa
							key={tarefa.id}
							id={tarefa.id}
							titulo={tarefa.titulo}
							estado={tarefa.estado}
							atualizacao={atualizacao}
							deletarTarefas={deletarTarefas}
						/>
					)
				})}

				{/* Quando a lista estiver vazia, será renderizada uma div com o texto Lista Vazia                 */}
				{listaDeTarefas.length === 0 ? (
					<div className='vazio'>Lista Vazia</div>
				) : (
					false
				)}
				{/* Botão que ao ser acionado executa a função adicionarTarefa. */}

				{/* Criação de um botão para adicionar tarefas com seletor classe botao */}
				<button
					className='botao'
					onClick={adicionarTarefa} //Execução da funcão adicionar tarefas em caso de clique.
				>
					{/* Criação de imagem de icone para adicionar Tarefas */}
					<img
						src={plusIcon}
						alt='Botão Adicionar Tarefas'
					/>
					Adicionar tarefa
				</button>
			</div>
		</div>
	)
}

//Especificação do tipo das atribuições das props recebidas pelo componente ListaDeTarefas.
ListaDeTarefas.propTypes = {
	titulo: PropTypes.string.isRequired,
	acoes: PropTypes.func.isRequired,
	tarefas: PropTypes.array,
}
