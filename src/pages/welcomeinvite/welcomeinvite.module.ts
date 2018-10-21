import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeinvitePage } from './welcomeinvite';
import { ComponentsModule } from './../../components/components.module';



@NgModule({
  declarations: [
    WelcomeinvitePage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeinvitePage),
    ComponentsModule
  ],
})
export class WelcomeinvitePageModule {}
