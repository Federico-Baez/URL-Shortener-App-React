import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinkShortenerFormik from '../pure/LinkShortenerFormik';
import { readLocalStorage, setLocalStorage } from '../../localStorage';
import ItemComponent from '../pure/Item';
import { Item } from '../../models/Item.class';


const ListContainer = () => {

    const defaultTask1 = new Item("https://twitter.com/home", "https://rel.ink/k3jyk");
    const defaultTask2 = new Item("https://www.youtube.com", "https://rel.ink/k8vio");

    const [items, setItems] = useState(() => readLocalStorage("URLs") || [defaultTask1, defaultTask2]);

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
