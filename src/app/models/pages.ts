export enum PAGE_PROBLEM_TYPES {
  TECHNICAL,
  SEMANTIC,
}

export interface PageModel {
  indexes: any[];
  type?: PAGE_PROBLEM_TYPES;
  sitemap?: any;
}
