import { Component } from "@angular/core";

@Component({
  selector: "app-custom-select",
  templateUrl: "./custom-select.component.html",
  styleUrls: ["./custom-select.component.scss"],
})
export class CustomSelectComponent {
  selectedCountry: string | undefined;
  countries = [
    { code: "USD", name: "United States Dollar" },
    { code: "EUR", name: "Euro" },
    { code: "JPY", name: "Japanese Yen" },
    // Adicione mais países aqui conforme necessário
  ];
}
