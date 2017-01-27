/**
 * Created by reza on 1/25/17.
 */

import {createSelector} from 'reselect';
import {reshapeNewsData, filterNewsBySearchTerm} from '../util/dataTransformations';

const newsSelector = state => state.news;
const bookmarksSelector = state => state.bookmarks;

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

export const bookmarkedNewsSelector = createSelector(
    [allNewsSelector, bookmarksSelector],
    (newsItem, bookmarks) => newsItem.filter(newsItem =>
    bookmarks.indexOf(newsItem.url) > -1)
);