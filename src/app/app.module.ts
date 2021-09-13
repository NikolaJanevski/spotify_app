import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './header/history.componen';
import { LibraryButtonsComponent } from './header/library-buttons.component';
import { TopBarComponent } from './header/topbar.component';
import { UserDropdownComponent } from './header/user-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HistoryComponent,
    LibraryButtonsComponent,
    UserDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
