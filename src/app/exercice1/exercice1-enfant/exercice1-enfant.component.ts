import { Component, Input, OnInit, Output } from "@angular/core";
import { EventEmitter } from "events";

@Component({
  selector: "app-exercice1-enfant",
  templateUrl: "./exercice1-enfant.component.html",
  styleUrls: ["./exercice1-enfant.component.css"],
})
export class Exercice1EnfantComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() compteur2: number;

  @Output() modifCpt: EventEmitter<string> = new EventEmitter();

  public modifierCompteur(polarite: string) {
    this.modifCpt.emit(polarite);
  }
}
