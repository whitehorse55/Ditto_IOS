import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomegeoPage } from './welcomegeo';

@NgModule({
  declarations: [
    WelcomegeoPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomegeoPage),
  ],
})
export class WelcomegeoPageModule {}
