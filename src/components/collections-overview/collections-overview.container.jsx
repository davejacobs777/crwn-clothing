import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";
import CollectionsOverview from './collections-overview.component';
import {connect} from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps), //2
    WithSpinner //1
)(CollectionsOverview);

export default CollectionsOverviewContainer;
