import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'
// import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
// import './Menu.css'
import Button from '../Button'
// import ButtonLink from './componentes/ButtonLink'
import styled from 'styled-components'

const Main = styled.main`
	background-color: var(--black);
	color: var(--white);
	display: flex;
	flex: 1;
	padding-top: 50px;
	padding-left: 5%;
	padding-right: 5%;
`


function PageDefault( { children } ){
	return(
		<div>
			<Menu />
				<Main>
					{children}
				</Main>
			<Footer />
		</div>
	)
}

export default PageDefault