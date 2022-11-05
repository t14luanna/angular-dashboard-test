import { PageModel, PAGE_PROBLEM_TYPES } from 'src/app/models/pages';

export interface Problem {
  firstCrawl: PageModel[];
  secondCrawl: PageModel[];
  type?: PAGE_PROBLEM_TYPES;
  title?: string;
  subProblems?: Problem[];
}
