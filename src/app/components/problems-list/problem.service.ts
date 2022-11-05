import { Injectable } from '@angular/core';
import { Problem } from 'src/app/components/problems-list/models/problem';
import { FIRST_PAGES, SECOND_PAGES } from 'src/app/mock-pages';
import { PageModel, PAGE_PROBLEM_TYPES } from 'src/app/models/pages';

// declare at Module level because this service only use for this module
@Injectable()
export class ProblemService {
  public firstPageList: PageModel[] = [];
  public secondPageList: PageModel[] = [];

  public initService() {
    // load all pages data
    // will replace with API invoke later
    this.firstPageList = FIRST_PAGES.filter((page) => page.type !== undefined);
    this.secondPageList = SECOND_PAGES.filter(
      (page) => page.type !== undefined
    );
  }

  public getProblemListByType(
    type: PAGE_PROBLEM_TYPES,
    first: PageModel[] = this.firstPageList,
    second: PageModel[] = this.secondPageList
  ): Problem {
    return {
      firstCrawl: first.filter((page) => page.type === type),
      secondCrawl: second.filter((page) => page.type === type),
    };
  }

  public getProblemNoIndexList(
    first: PageModel[],
    second: PageModel[]
  ): Problem {
    return {
      firstCrawl: first.filter((page) => !page.indexes.length),
      secondCrawl: second.filter((page) => !page.indexes.length),
    };
  }

  public getProblemOutsideSitemapIndexList(
    first: PageModel[],
    second: PageModel[]
  ): Problem {
    return {
      firstCrawl: first.filter((page) => !page.sitemap),
      secondCrawl: second.filter((page) => !page.sitemap),
    };
  }
}
