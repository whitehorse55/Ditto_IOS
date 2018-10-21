import { SwingModule } from 'angular2-swing';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainPage } from './main';
import { ComponentsModule } from '../../components/components.module';
import { Ionic2RatingModule } from 'ionic2-rating';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MainPage
  ],
  imports: [
    SwingModule,
    IonicPageModule.forChild(MainPage),
    ComponentsModule,
    Ionic2RatingModule,
    PipesModule
  ],
})
export class MainPageModule {}
