import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget.model";

import { EditItemModelComponent } from "../edit-item-model/edit-item-model.component";
import { MatDialog } from "@angular/material";
export interface UpdateEvent {
  old: BudgetItem;
  new: BudgetItem;
}
@Component({
  selector: "app-budget-item-list",
  templateUrl: "./budget-item-list.component.html",
  styleUrls: ["./budget-item-list.component.scss"],
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();
  @Output() update: EventEmitter<UpdateEvent> = new EventEmitter<UpdateEvent>();
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }
  onCardClicked(item: BudgetItem) {
    //show edit mode
    const dialogRef = this.dialog.open(EditItemModelComponent, {
      width: "60%",
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.update.emit({
          old: item,
          new: result,
        });
      }
    });
  }
}
