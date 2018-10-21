import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChattingPage } from './chatting';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChattingPage,
  ],
  imports: [
    IonicPageModule.forChild(ChattingPage),
    ComponentsModule
  ],
})
export class ChattingPageModule {}
