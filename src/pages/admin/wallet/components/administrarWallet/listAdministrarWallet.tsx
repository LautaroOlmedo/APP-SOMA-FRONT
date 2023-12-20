import React from 'react'
import style from './index.module.css'
import { BsArrowsMove } from 'react-icons/bs'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface Card {
	id: number;
	name: string;
	date: string;
	image: string;
}
function ListAdministrarWallet({ card }: { card: Card }) {

	const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: card.id })


	const stylesForCard = {
		transform:CSS.Transform.toString(transform),
		transition
	}
	return (
		<div style={stylesForCard} className={style.cardsContainer}>
			<div className={style.card} key={card.id} ref={setNodeRef} {...attributes} {...listeners}>
				<div className={style.cardDetails}>
					<img src={card.image} alt={`${card.name} logo`} className={style.cardImage} />
					<div className={style.cardInfo}>
						<span>{card.name}</span>
						<span style={{ marginLeft: "25px" }}>Creado {card.date}</span>
					</div>
				</div>
				<div className={style.iconOuterContainer}>
					<div className={style.iconContainer}>

						<BsArrowsMove style={{ fontSize: "40px" }} />

					</div>
				</div>
			</div>
		</div>
	)
}

export default ListAdministrarWallet
