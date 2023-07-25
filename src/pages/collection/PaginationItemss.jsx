import React from 'react'
import Item from '../../components/Item'
const PaginationItemss = ({ itemsData }) => {
    return (
        <div className='prod-data'>
            {itemsData.map((item) => {   
            return (<Item key={item.id}
            id={item.id} name={item.title} 
            image={item.images[0]} price={item.price} />)}
            )}
        </div>
    )
}

export default PaginationItemss