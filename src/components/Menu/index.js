import React from 'react'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'
import './Menu.css'
import Button from '../Button'
// import ButtonLink from './componentes/ButtonLink'

function Menu(){
	return(
		<nav className="Menu">
			<Link to="/">
				<img src={Logo} alt="AluraFlex Logo"/>
			</Link>
			<Button as={Link} to="/cadastro/video" className="ButtonLink">
				Novo Vídeo
			</Button>
		</nav>
	)
}

export default Menu