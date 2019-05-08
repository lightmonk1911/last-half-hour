import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  { path: 'timeline', component: TimelinePageComponent },
  { path: 'statistic', component: StatisticPageComponent },
  { path: 'tasks', component: TasksPageComponent },
  { path: 'task/:id', component: TaskPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
