/**
 * Created by reza on 1/25/17.
 */

import {createSelector} from 'reselect';
import {reshapeNewsData, filterNewsBySearchTerm} from '../util/dataTransformations';

const newsSelector = state => state.news;

const reshapeNewsSelector = createSelector(
    [newsSelector],
    reshapeNewsData
);

export const allNewsSelector = createSelector(
    [reshapeNewsSelector],
    newsItem => newsItem
);

const searchTermSelector = state => state.searchTerm;

const caseInsensitiveSearchTermSelector = createSelector(
    searchTermSelector,
    searchTermSelector => searchTermSelector.toLocaleLowerCase()
);

export const searchNewsSelector = createSelector(
    [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
    filterNewsBySearchTerm
);