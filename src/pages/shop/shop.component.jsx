import React from 'react';
import {Route} from 'react-router-dom';
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
);
// ShopPage is rendered by a route in App.js and a Route automatically passes match, location, and history

export default ShopPage;

// match {isExact: true, params: {}, path: "/shop", url: "/shop"}
