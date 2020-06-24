import { connect } from "react-redux";
import { createStructoredSelector } from "reselect";
import { compose } from "redux";

import {
  selectIsCollectionFetching,
  selectCollectionFetching,
} from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructoredSelector({
  isLoading: selectCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
