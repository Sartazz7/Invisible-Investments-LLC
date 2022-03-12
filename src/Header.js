import React from 'react'
import { Navbar, Container, Card } from 'react-bootstrap'

const Header = () => {
	return (
		<header>
			<Navbar bg='primary' variant='dark'>
				<Container>
					<Navbar.Brand href='#home' className='m-auto'>
						Invisible Investments
					</Navbar.Brand>
				</Container>
			</Navbar>
			<Container>
				<Card className='m-auto mt-5'>
					<Card.Body>
						<Card.Text>
							Nam nec elit mollis, mollis est nec, efficitur
							justo. Nulla facilisi. Mauris ac elementum nibh. Nam
							sed consequat lectus. Nam at vulputate purus.
							Suspendisse suscipit nisl ac mauris pellentesque, ac
							fringilla massa semper. Duis volutpat risus eu nisl
							mattis volutpat. Praesent efficitur, libero at
							malesuada suscipit, lacus urna condimentum lectus,
							sit amet blandit justo ligula eu turpis. Fusce nec
							erat mauris. Pellentesque habitant morbi tristique
							senectus et netus et malesuada fames ac turpis
							egestas.
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</header>
	)
}

export default Header
