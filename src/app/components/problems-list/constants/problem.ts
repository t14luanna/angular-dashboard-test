// cases that problem will have from Pages data
export enum PROBLEM_CASES {
  NO_INDEX,
  OUTSIDE_SITEMAP,
}

export const PROBLEMS_MAPPING_DATA = [
  {
    id: PROBLEM_CASES.NO_INDEX,
    title: 'Pages non indexes',
  },
  {
    id: PROBLEM_CASES.OUTSIDE_SITEMAP,
    title: 'Pages hors sitemap',
  },
];
