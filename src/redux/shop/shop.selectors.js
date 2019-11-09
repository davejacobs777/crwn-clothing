import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) // return an array from an object
);
// Object.keys() - it gets all the keys of an object (argument object)
// and returns the keys as values in an array
// const testObject = { a: 1, b: 2, c: 3 }
// Object.keys(testObject)
// ["a", "b", "c"]
// ["hats", "jackets", "mens", "sneakers", "womens"] => [{...}, {...}, {...}]


// curried function
export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections[collectionUrlParam]
    );
