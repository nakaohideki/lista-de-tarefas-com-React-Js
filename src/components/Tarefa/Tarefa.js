import PropTypes from "prop-types" //Importação da biblioteca PropTypes neste compnente para especificação das props recebidas.
import React, { useState } from "react" //Importação da biblioteca React e do hook useState neste compnente.
import "./tarefa.css" //Importação do arquivo Tarefa.css responsável pela estilização deste componente.

//Criação e exportação padrão do componente de função Tarefa e declaração dos parâmetros dentro da props que deverão ser recebidos e manipulados por este componente
//, id, titulo, estado (Pendente, Em Execução, ou Concluída), função atualização para atualizar taferas e função deletarTarefas.

export default function Tarefa({ id, titulo, estado, atualizacao, deletarTarefas }) {
	const [emEdicao, setEmEdicao] = useState(false) //Criação do estado sendoEditado com a função setSendoEditado com estado inicial false.
	const [tituloEditavel, setTituloEditavel] = useState(titulo) //Criação do estado tituloEditavel com a função setTituloEditavel com estado inicial dentro de titulo.

	//Criação da função alterando estado para atualizar a tarefa em caso de alteração de seu estado.
	function alterandoEstado(escolha) {
		atualizacao(id, titulo, escolha.target.value)
	}

	return emEdicao ? ( //Retorno da função caso o estado emEdicao seja verdadeiro, retornando uma div com um input do tipo texto para edição do estado tituloEditavel.
		<div className='tarefa'>
			<input
				value={tituloEditavel} //Ajustado o valor padrão inicial do input como o conteúdo de tituloEditavel.
				onChange={(edicao) => {
					//Quando ocorrer a edição, o conteúdo de edicao é usado para editar o estado tituloEditavel e tambem a função de atualizao de tarefa é chamada.
					setTituloEditavel(edicao.target.value)
					atualizacao(id, edicao.target.value, estado)
				}}
				onKeyDown={(edicao) => {
					//Durante o processo de edição da variável edicao são checadas as teclas pressionadas pelo usuário. Caso a tecla pressionada
					// seja Enter e tituloEditavel estaja vazio, é executada a função deletarTarefas para o este id. Caso seja pressionado somente a tecla enter, mas
					//o tituloEditavel não esteja vazio, o estado emEdicao é modificado para falso, caso contrário permanece em verdadeiro.
					edicao.key === "Enter" && tituloEditavel.length === 0
						? deletarTarefas(id)
						: edicao.key === "Enter"
						? setEmEdicao(false)
						: setEmEdicao(true)
				}}
			/>
		</div>
	) : (
		//Exibição da tarefa estilizado com seletor de classe tarefa.
		<div className='tarefa'>
			<div
				//Caso o estado emEdicao seja falso, é exibida uma div exibindo o conteúdo do tituloEditavel.
				onClick={() => {
					//Caso ocorra um clique sobre a div, é executada uma função que muda o estado de emEdicao para verdadeiro.
					setEmEdicao(true)
				}}
			>
				{/* Exibição do conteúdo de titulo Editavel. */}
				{tituloEditavel}
			</div>
			{/* Utilizado o form select para que o usuário defina o estado de cada tarefa entre Pendente, Em Execução e Concluídas. Seu valor inicial exibido é o 
            estado em que a tarefa se encontra. Em caso de mudança, a função alterandoEstado é executada. */}
			<select
				onChange={alterandoEstado}
				value={estado}
			>
				<option value='Pendente'>Pendente</option>
				<option value='Em Execução'>Em Execução</option>
				<option value='Concluídas'>Concluídas</option>
			</select>
		</div>
	)
}

Tarefa.propTypes = {
	//Especificação do tipo das atribuições das props recebidas pelo componente Tarefa.
	id: PropTypes.number.isRequired,
	titulo: PropTypes.string.isRequired,
	estado: PropTypes.string.isRequired,
}
