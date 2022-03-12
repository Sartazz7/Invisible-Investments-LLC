import React from 'react'
import { MDBContainer, MDBIframe } from 'mdbreact'
import { Container } from 'react-bootstrap'

const Frame = () => {
	return (
		<Container className='text-center mt-5'>
			<MDBIframe src='sartaj_file.html' />
		</Container>
	)
}

export default Frame
