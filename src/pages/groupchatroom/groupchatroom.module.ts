import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupchatroomPage } from './groupchatroom';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    GroupchatroomPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupchatroomPage),
    PipesModule
  ],
})
export class GroupchatroomPageModule {}
