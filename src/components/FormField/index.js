import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormFieldWrapper = styled.div`

`

const Label = styled.Label`

`

Label.Text = styled.span`

`

const Input = styled.input`

`

function FormField({ Label, name, type, value, onChange }){
	
	const fieldId = `id_${name}`
	const isTextArea = type === 'textarea'
	const tag = isTextArea ? 'textarea' : 'input'
	return(
		<formFiledWrapper>
			<Label
				htmlFor={fieldId}
			>
				<input
					as={tag}
					id={fieldId}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
				/>
				<Label.Text>
					{Label}:
				</Label.Text>
			</Label>
		</formFiledWrapper>
	)
}

FormField.defaultProps = {
	type: 'text'
}

FormField.PropTypes = {
	Label: PropTypes.string.isRequired, 
	name: PropTypes.string, 
	type: PropTypes.string, 
	value: PropTypes.string.isRequired, 
	onChange: PropTypes.func,
}

export default FormField