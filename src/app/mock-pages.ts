import { PageModel, PAGE_PROBLEM_TYPES } from 'src/app/models/pages';

export const FIRST_PAGES: PageModel[] = [
  {
    indexes: [1, 2],
    sitemap: 'test',
  },
  {
    indexes: [],
    sitemap: 'test 2',
    type: PAGE_PROBLEM_TYPES.SEMANTIC,
  },
  {
    indexes: [1, 2],
    type: PAGE_PROBLEM_TYPES.TECHNICAL,
  },
];

export const SECOND_PAGES: PageModel[] = [
  {
    indexes: [1, 2],
    sitemap: 'test',
    type: PAGE_PROBLEM_TYPES.TECHNICAL,
  },
  {
    indexes: [],
    sitemap: 'test 2',
    type: PAGE_PROBLEM_TYPES.TECHNICAL,
  },
  {
    indexes: [],
    type: PAGE_PROBLEM_TYPES.SEMANTIC,
  },
  {
    indexes: [],
    type: PAGE_PROBLEM_TYPES.TECHNICAL,
  },
  {
    indexes: [],
    type: PAGE_PROBLEM_TYPES.SEMANTIC,
  },
];
