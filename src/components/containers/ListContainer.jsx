import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkShortenerFormik from '../pure/LinkShortenerFormik';
import { readLocalStorage, setLocalStorage } from '../../localStorage';
import ItemComponent from '../pure/Item';


const ListContainer = () => {

    const [items, setItems] = useState(() => readLocalStorage("URLs") || []);

    function addItem(item) {
        const tempItems = [...items];
        tempItems.push(item);
        setItems(tempItems);
        setLocalStorage("URLs", tempItems);
    }

    return (
        <div className='list-container'>
            <LinkShortenerFormik add={addItem} />
            <div className='list-items-container'>
                <ul>
                    {items.map((itemIteration, index) => {
                        return (<ItemComponent
                            key={index}
                            item={itemIteration}
                        >
                        </ItemComponent>)
                    })}
                </ul>
            </div>
        </div>
    );
};


ListContainer.propTypes = {

};


export default ListContainer;
