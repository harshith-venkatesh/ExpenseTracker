import { Component, OnInit, Input, inject, Inject } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget.model";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-edit-item-model",
  templateUrl: "./edit-item-model.component.html",
  styleUrls: ["./edit-item-model.component.scss"],
})
export class EditItemModelComponent implements OnInit {
  // @Input() item: BudgetItem;
  constructor(
    public dialogRef: MatDialogRef<EditItemModelComponent>,
    @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) {}

  ngOnInit() {}

  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}
