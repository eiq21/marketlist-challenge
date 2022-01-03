import { Item } from './types';
const MOCK: Item[] = [
  {
    id: 1,
    text: 'texto 01',
  },
  {
    id: 2,
    text: 'texto 02',
  },
  {
    id: 3,
    text: 'texto 03',
  },
  {
    id: 4,
    text: 'texto 04',
  },
];

export default {
  list: (): Promise<Item[]> => Promise.resolve(MOCK),
  create: (text: string): Promise<Item> => Promise.resolve({ id: +new Date(), text }),
  remove: (id: number): Promise<number> => Promise.resolve(id),
};
