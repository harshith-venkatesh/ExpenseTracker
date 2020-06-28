import { Component, OnInit } from "@angular/core";
import { BudgetItem } from "src/shared/models/budget.model";
import { UpdateEvent } from "../budget-item-list/budget-item-list.component";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  totalBudget: number = 0;
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() {}

  ngOnInit() {}
  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    const index = this.budgetItems.indexOf(item);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= item.amount;
  }

  updateItem(updateItem: UpdateEvent) {
    //replace item with updated value
    this.budgetItems[this.budgetItems.indexOf(updateItem.old)] = updateItem.new;
    this.totalBudget -= updateItem.old.amount;
    this.totalBudget += updateItem.new.amount;
  }
}
