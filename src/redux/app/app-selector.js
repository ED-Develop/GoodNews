import {createSelector} from 'reselect';
import {findRegionLocale} from "../../helpers/utils";

const getRegion = (state) => {
    return state.app.region;
};

export const getLocale = createSelector(getRegion, region => {
    return findRegionLocale(region);
});
