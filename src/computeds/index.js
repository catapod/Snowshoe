import reduce from 'lodash/reduce';
import {compute} from 'cerebral';
import {tags} from '../constants';

export const translationRate = compute(
    tags.translationRates,
    (rates) => reduce(rates, (sum, rate) => sum + rate.value, 0)
);