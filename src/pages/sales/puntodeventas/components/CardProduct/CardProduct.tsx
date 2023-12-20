import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'

// Mock data para productos
const products = [
	{ id: 1, name: 'Zapatillas', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1556774687-0e2fdd0116c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Remeras' },
	{ id: 2, name: 'Pantalón azul', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1616736381029-c403eeda10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Pantalones' },
	{ id: 3, name: 'Pantalón azul', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1616736381029-c403eeda10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Pantalones' },
	{ id: 4, name: 'Pantalón azul', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1616736381029-c403eeda10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Pantalones' },
	{ id: 5, name: 'Pantalón azul', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1616736381029-c403eeda10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Pantalones' },
	{ id: 6, name: 'Pantalón azul', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1616736381029-c403eeda10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Pantalones' },
	{ id: 7, name: 'Pantalón azul', currency: "USD", description: "tremendo", price: 1200, image: "https://images.unsplash.com/photo-1616736381029-c403eeda10b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzODYwNTk2MQ&ixlib=rb-1.2.1&q=80&w=400", category: 'Pantalones' },
];

// Mock data para filtros
const filters = ['Remeras', 'Pantalones', 'Buzos', 'Accesorios', /* ...más filtros */];

// En tu componente CardProduct, puedes usar estos datos para mostrar los productos y los filtros
function CardProduct() {
	const [filterValue, setFilterValue] = useState('');

	const handleFilterChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setFilterValue(event.target.value);
	};

	// Filtrar los productos basados en el valor ingresado en el input
	const filteredProducts = products.filter(product =>
		product.name.toLowerCase().includes(filterValue.toLowerCase())
	);
	// Agrupar los productos en filas de máximo 5 productos cada una
	const rows = [];
	for (let i = 0; i < filteredProducts.length; i += 5) {
		rows.push(filteredProducts.slice(i, i + 5));
	}

	return (
		<>
			<Col sm={8} style={{ border: '1px solid black', marginRight: '10px', width: '100%' }}>
				<div>
					<input
						type="text"
						value={filterValue}
						onChange={handleFilterChange}
						placeholder="Filtrar por nombre..."
						className="form-control"
						style={{ width: '100%', marginBottom: '10px' }}
					/>

					<div style={{ display: 'flex', flexDirection: 'column' }}>
						{/* Mapear cada fila de productos */}
						{rows.map((row, index) => (
							<div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
								{row.map(product => (
									<Card key={product.id} style={{ width: '170px' }}>
										<Card.Img
											variant="top"
											src={product.image}
											style={{ height: '100px', width: '160px', objectFit: 'cover' }}
										/>
										<Card.Body>
											<Card.Title>{product.name}</Card.Title>
											<Card.Text>
												Precio: ${product.price.toFixed(2)}
											</Card.Text>
										</Card.Body>
									</Card>
								))}
							</div>
						))}
					</div>
				</div>
			</Col>

			
		</>

	);
}

export default CardProduct;