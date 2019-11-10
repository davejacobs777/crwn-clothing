import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

// const testObject = { a: 1, b: 2, c: 3 }
// Object.keys(testObject)
// ["a", "b", "c"]
// ["hats", "jackets", "mens", "sneakers", "womens"].map(...) => [{...}, {...}, {...}]


// curried function
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections ? collections[collectionUrlParam] : null
    );
