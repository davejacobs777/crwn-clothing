import {createStructuredSelector} from "reselect";
import {selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import {compose} from "redux";
import connect from "react-redux/es/connect/connect";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPageWithProps from "./collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps), //2
    WithSpinner //1
)(CollectionPageWithProps);

export default CollectionsPageContainer;
