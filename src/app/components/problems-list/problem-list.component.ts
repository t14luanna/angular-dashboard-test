import { Component, OnInit } from '@angular/core';
import { Problem } from 'src/app/components/problems-list/models/problem';
import { ProblemService } from 'src/app/components/problems-list/problem.service';
import { PAGE_PROBLEM_TYPES } from 'src/app/models/pages';

interface ProblemDisplay extends Problem {
  isExpanded: boolean;
}

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.scss'],
})
export class ProblemListComponent implements OnInit {
  public problemsTechnical?: ProblemDisplay;
  public problemsSemantic?: ProblemDisplay;

  constructor(private problemService: ProblemService) {}

  ngOnInit(): void {
    this.problemService.initService();

    // init problems technical
    this.problemsTechnical = {
      ...this.problemService.getProblemListByType(PAGE_PROBLEM_TYPES.TECHNICAL),
      isExpanded: false,
    };

    if (!!this.problemsTechnical) {
      this.problemsTechnical.title = 'Problemes techniques';
      this.problemsTechnical.type = PAGE_PROBLEM_TYPES.TECHNICAL;
      this.problemsTechnical.subProblems = [];
      this.problemsTechnical.subProblems.push({
        ...this.problemService.getProblemNoIndexList(
          this.problemsTechnical.firstCrawl,
          this.problemsTechnical.secondCrawl
        ),
        title: 'Pages non indexes',
      });
      this.problemsTechnical.subProblems.push({
        ...this.problemService.getProblemOutsideSitemapIndexList(
          this.problemsTechnical.firstCrawl,
          this.problemsTechnical.secondCrawl
        ),
        title: 'Pages hors sitemap',
      });
    }

    // init problem sematic
    this.problemsSemantic = {
      ...this.problemService.getProblemListByType(PAGE_PROBLEM_TYPES.SEMANTIC),
      isExpanded: false,
    };

    if (!!this.problemsSemantic) {
      this.problemsSemantic.title = 'Problemes semantiques';
      this.problemsSemantic.type = PAGE_PROBLEM_TYPES.SEMANTIC;
      this.problemsSemantic.subProblems = [];
      this.problemsSemantic.subProblems.push({
        ...this.problemService.getProblemNoIndexList(
          this.problemsSemantic.firstCrawl,
          this.problemsSemantic.secondCrawl
        ),
        title: 'Pages non indexes',
      });
      this.problemsSemantic.subProblems.push({
        ...this.problemService.getProblemOutsideSitemapIndexList(
          this.problemsSemantic.firstCrawl,
          this.problemsSemantic.secondCrawl
        ),
        title: 'Pages hors sitemap',
      });
    }
  }

  public toggle(problem: ProblemDisplay) {
    problem.isExpanded = !problem.isExpanded;
  }
}
