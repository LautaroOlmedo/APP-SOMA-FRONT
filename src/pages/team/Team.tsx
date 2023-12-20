import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import styles from "./team.module.css"
function Team() {
	const [filterValue, setFilterValue] = useState('');

	const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setFilterValue(event.target.value);
	};

	const cards = [
		{
			id: "1",
			firstname: "Tomas",
			lastname: "Gelvez",
			age: 24,
			image: "https://media.canva.com/1/image-resize/1/453_568_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wRXdOOC9NQUYwdnVwRXdOOC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN22eLyewgtM62KCK97VLdnOMc254Iknwo-p5vMAUnW1&exp=1701719088&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAJ3Cr_aRVIp-6ts0u7Hdh4HT7uOb2HvBxUqRjjMQnl7l",
			username: "tomigelvez",
			dni: "41966243",
			password: "contrasena123",
			role: "user",
			// brand: IBrand,
			// createdAt: string,
			// updatedAt: string,
		},
		{
			id: "2",
			firstname: "Enrique",
			lastname: "Gelvez",
			image: "https://media.canva.com/1/image-resize/1/453_568_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wRXdOOC9NQUYwdnVwRXdOOC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN22eLyewgtM62KCK97VLdnOMc254Iknwo-p5vMAUnW1&exp=1701719088&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAJ3Cr_aRVIp-6ts0u7Hdh4HT7uOb2HvBxUqRjjMQnl7l",
			age: 24,
			username: "tomigelvez",
			dni: "41966243",
			password: "contrasena123",
			role: "user",
			// brand: IBrand,
			// createdAt: string,
			// updatedAt: string,
		},
		{
			id: "3",
			firstname: "Nara",
			lastname: "Gelvez",
			age: 24,
			image: "https://media.canva.com/1/image-resize/1/453_568_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wRXdOOC9NQUYwdnVwRXdOOC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN22eLyewgtM62KCK97VLdnOMc254Iknwo-p5vMAUnW1&exp=1701719088&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAJ3Cr_aRVIp-6ts0u7Hdh4HT7uOb2HvBxUqRjjMQnl7l",
			username: "tomigelvez",
			dni: "41966243",
			password: "contrasena123",
			role: "user",
			// brand: IBrand,
			// createdAt: string,
			// updatedAt: string,
		},
		{
			id: "4",
			firstname: "Lautaro",
			lastname: "Gelvez",
			age: 24,
			image: "https://media.canva.com/1/image-resize/1/453_568_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wRXdOOC9NQUYwdnVwRXdOOC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN22eLyewgtM62KCK97VLdnOMc254Iknwo-p5vMAUnW1&exp=1701719088&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAJ3Cr_aRVIp-6ts0u7Hdh4HT7uOb2HvBxUqRjjMQnl7l",
			username: "tomigelvez",
			dni: "41966243",
			password: "contrasena123",
			role: "user",
			// brand: IBrand,
			// createdAt: string,
			// updatedAt: string,
		},
		{
			id: "5",
			firstname: "Leo",
			lastname: "Gelvez",
			age: 24,
			image: "https://media.canva.com/1/image-resize/1/453_568_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wRXdOOC9NQUYwdnVwRXdOOC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN22eLyewgtM62KCK97VLdnOMc254Iknwo-p5vMAUnW1&exp=1701719088&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAJ3Cr_aRVIp-6ts0u7Hdh4HT7uOb2HvBxUqRjjMQnl7l",
			username: "tomigelvez",
			dni: "41966243",
			password: "contrasena123",
			role: "user",
			// brand: IBrand,
			// createdAt: string,
			// updatedAt: string,
		},
		{
			id: "6",
			firstname: "Tomas",
			lastname: "Gelvez",
			age: 24,
			image: "https://media.canva.com/1/image-resize/1/453_568_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9wRXdOOC9NQUYwdnVwRXdOOC8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN22eLyewgtM62KCK97VLdnOMc254Iknwo-p5vMAUnW1&exp=1701719088&x-canva-quality=screen&csig=AAAAAAAAAAAAAAAAAAAAAJ3Cr_aRVIp-6ts0u7Hdh4HT7uOb2HvBxUqRjjMQnl7l",
			username: "tomigelvez",
			dni: "41966243",
			password: "contrasena123",
			role: "user",
			// brand: IBrand,
			// createdAt: string,
			// updatedAt: string,
		}
	]
	return (
		<>
			<div className={styles['filter-input']}>
				<input
					type="text"
					value={filterValue}
					onChange={handleFilterChange}
					placeholder="Filtrar por nombre..."
					style={{ width: '100%' }}
				/>
			</div>
			<Container className={styles['team-container']}>

				{cards
					.filter((card) =>
						card.firstname.toLowerCase().includes(filterValue.toLowerCase())
					)
					.map((card) => (
						<Card key={card.id} className={styles['team-card']}>
							<Card.Img variant="top" src={card.image} alt={card.firstname} className={styles['team-card-image']} />
							<Card.Body className={styles['team-card-body']}>
								<div>{`${card.firstname}`}</div>
								<div>
									{`${card.username}`}
								</div>
							</Card.Body>
						</Card>
					))}
			</Container>
		</>
	);
}

export default Team;