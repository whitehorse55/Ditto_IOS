import { SwingModule } from 'angular2-swing';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlacesearchPage } from './placesearch';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    PlacesearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PlacesearchPage),
    ComponentsModule,
    Ionic2RatingModule,
    PipesModule,
    SwingModule
  ],
})
export class PlacesearchPageModule {}
