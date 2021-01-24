import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ControlsComponent } from './controls/controls.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbButtonGroupModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { GameOFLifeService } from './conway.service';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbButtonGroupModule
  ],
  providers: [GameOFLifeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
