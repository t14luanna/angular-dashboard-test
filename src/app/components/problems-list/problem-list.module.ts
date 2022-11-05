import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProblemListComponent } from 'src/app/components/problems-list/problem-list.component';
import { ProblemService } from 'src/app/components/problems-list/problem.service';

@NgModule({
  declarations: [ProblemListComponent],
  imports: [CommonModule],
  providers: [ProblemService],
  exports: [ProblemListComponent],
})
export class ProblemListModule {}
