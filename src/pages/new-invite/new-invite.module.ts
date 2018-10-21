
import { PipesModule } from './../../pipes/pipes.module';
import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { NewInvitePage } from './new-invite';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewInvitePage,
  ],
  imports: [
    IonicPageModule.forChild(NewInvitePage),
    IonicModule,
    PipesModule,
    ComponentsModule
  ],
})
export class NewInvitePageModule {}
