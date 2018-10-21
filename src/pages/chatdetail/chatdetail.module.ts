import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatdetailPage } from './chatdetail';

@NgModule({
  declarations: [
    ChatdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatdetailPage),
  ],
})
export class ChatdetailPageModule {}
