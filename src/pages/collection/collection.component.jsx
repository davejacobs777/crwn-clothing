import React from 'react';

import './collection.styles.scss';
import {connect} from "react-redux";
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    console.log(collection);
    return (

    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className="items">
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
        </div>
    </div>);
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});
// ownProps is the component's props (the component passed into connect)

export default connect(mapStateToProps)(CollectionPage);

// match {isExact: true, params: {collectionId: "hats"}, path: "/shop/:collectionId", url: "/shop/hats"}
