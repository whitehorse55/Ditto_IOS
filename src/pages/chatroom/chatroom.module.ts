import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatroomPage } from './chatroom';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChatroomPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatroomPage),
    PipesModule
  ],
})
export class ChatroomPageModule {}
