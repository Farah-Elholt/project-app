import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { dmPage } from './dm.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { dmPageRoutingModule } from './dm-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    dmPageRoutingModule
  ],
  declarations: [dmPage]
})
export class dmPageModule {}
