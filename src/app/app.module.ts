import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { AddItemFormComponent } from "./add-item-form/add-item-form.component";
import { BudgetItemListComponent } from "./budget-item-list/budget-item-list.component";
import { BudgetItemCardComponent } from "./budget-item-list/budget-item-card/budget-item-card.component";
import { FormsModule } from "@angular/forms";
import { EditItemModelComponent } from "./edit-item-model/edit-item-model.component";
import { EditItemFormComponent } from "./edit-item-form/edit-item-form.component";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModelComponent,
    EditItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditItemModelComponent],
})
export class AppModule {}
