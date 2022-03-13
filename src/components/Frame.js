import React, { useState } from 'react'
import { MDBContainer, MDBIframe } from 'mdbreact'
import { ToggleButton } from 'react-bootstrap'

const Frame = () => {
	const [checked, setChecked] = useState(true)

	return (
		<>
			<MDBContainer
				className='text-center mt-5 mb-5'
				style={{ height: '600px' }}
			>
				<ToggleButton
					className='mb-2'
					id='toggle-check'
					type='checkbox'
					variant='outline-primary'
					checked={checked}
					value='1'
					onChange={(e) => setChecked(e.currentTarget.checked)}
				>
					Show Page
				</ToggleButton>
				{checked && <MDBIframe src='./sartaj.html' />}
			</MDBContainer>
		</>
	)
}

export default Frame
