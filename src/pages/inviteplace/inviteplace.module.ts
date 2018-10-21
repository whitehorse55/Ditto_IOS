import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { InviteplacePage } from './inviteplace';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InviteplacePage,
  ],
  imports: [
    IonicPageModule.forChild(InviteplacePage),
    IonicModule,
    PipesModule,
    ComponentsModule
  ],
})
export class InviteplacePageModule {}
