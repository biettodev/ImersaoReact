import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import PageDefault from '../../../components/FormField'

function CadastroVideo(){
	const valoresIniciais = {
		nome: 'Nome da Categoria',
		descricao: 'Descrição',
		cor: '#000'
		
	}
	
	const [ categorias, setCategorias ] = useState()
	
	const [ values, setValues ] = useState(valoresIniciais)
	
	function setValue(chave, valor){
		setValues({
			...values,
			[chave]: valor
		})
	}
	
	function handleChange(infosDoEvento){
		const { getAttribute, value } = infosDoEvento.target
		setValue(
			getAttribute('name'), 
			value
		)
	}
	
	useEffect(() => => {
		const URL = 'http://localhost:8080/categorias'
		fetch(URL)
			.then(async (respostaDoServidor) => {
				const resposta = await respostaDoServidor.json()
				setCategorias([
					...responsta
				])
			})
		
		// setTimeOut(() => {
			// setCategorias([
				// ...categorias,
			// ])
		// })
	}) 
	
	return (
		<PageDefault>
			<h1>Cadastro de Categoria</h1>
			<form onSubmit={ function handleSubmit(infosDoEvento){
				infosDoEvento.preventDefault()
				setCategorias([
					...categorias,
					values
				])
				
				setValues(valoresIniciais)
			}}>
				
				<FormField
					label="Nome da Categoria"
					name="nome"
					type="text"
					value={values.nome}
					onChange={handleChange}
				/>
				
				<FormField
					label="Descrição"
					name="descricao"
					type="text"
					value={values.descricao}
					onChange={handleChange}
				/>
				
				<FormField
					label="Cor:"
					name="cor"
					type="color"
					value={values.cor}
					onChange={handleChange}
				/>
				
				<button>
					Cadastrar
				</button>
			</form>
			
			{categorias.length === 0 && (
				<div>
					Loading...
				</div>
			)}
			
			<ul>
				{categorias.map((categoria, indice) => {
					return (
						<li key={`${categoria}${indice}`}>
							{categoria}
						</li>
					)
				})}
			</ul>
			
			<Link to="/">
				Ir para Home
			</Link>
		</PageDefault>
	)
}

export default CadastroVideo