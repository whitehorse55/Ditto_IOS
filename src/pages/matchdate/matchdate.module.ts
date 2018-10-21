import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchdatePage } from './matchdate';

@NgModule({
  declarations: [
    MatchdatePage,
  ],
  imports: [
    IonicPageModule.forChild(MatchdatePage),
  ],
})
export class MatchdatePageModule {}
