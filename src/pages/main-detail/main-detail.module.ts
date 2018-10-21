import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainDetailPage } from './main-detail';
import { ComponentsModule } from '../../components/components.module';
import { Ionic2RatingModule } from 'ionic2-rating';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    MainDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MainDetailPage),
    ComponentsModule,
    Ionic2RatingModule,
    PipesModule
  ],
})
export class MainDetailPageModule {}
