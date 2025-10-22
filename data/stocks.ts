import type { Assumptions } from '../types';

import BRACBANK from './stocks/BRACBANK';
import SQURPHARMA from './stocks/SQURPHARMA';
import BERGERPBL from './stocks/BERGERPBL';
import SINGERBD from './stocks/SINGERBD';
import LINDEBD from './stocks/LINDEBD';
import MARICO from './stocks/MARICO';
import GP from './stocks/GP';
import ROBI from './stocks/ROBI';
import RENATA from './stocks/RENATA';
import LHB from './stocks/LHB';
import CITYBANK from './stocks/CITYBANK';
import SPCL from './stocks/SPCL';
import DOREENPWR from './stocks/DOREENPWR';

export const stockData: { [key: string]: Assumptions } = {
    'BRACBANK': BRACBANK,
    'SQURPHARMA': SQURPHARMA,
    'BERGERPBL': BERGERPBL,
    'SINGERBD': SINGERBD,
    'LINDEBD': LINDEBD,
    'MARICO': MARICO,
    'GP': GP,
    'ROBI': ROBI,
    'RENATA': RENATA,
    'LHB': LHB,
    'CITYBANK': CITYBANK,
    'SPCL': SPCL,
    'DOREENPWR': DOREENPWR,
};
