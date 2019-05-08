import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { TimelinePageComponent } from './timeline-page/timeline-page.component';
import { StatisticPageComponent } from './statistic-page/statistic-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { NavComponent } from './nav/nav.component';
import { NewTaskFormComponent } from './new-task-form/new-task-form.component';
import { NewActivityFormComponent } from './new-activity-form/new-activity-form.component';
import { TasksPageComponent } from './tasks-page/tasks-page.component';
import { TaskComponent } from './task/task.component';
import { ActivityComponent } from './activity/activity.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimelinePageComponent,
    StatisticPageComponent,
    TaskPageComponent,
    NavComponent,
    NewTaskFormComponent,
    NewActivityFormComponent,
    TasksPageComponent,
    TaskComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
