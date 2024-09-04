import { Component, Input } from "@angular/core";

interface Country {
  name: string;
  code: string;
}

@Component({
  selector: "app-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.scss"],
})
export class SelectComponent {
  countries: Country[] = [
    { name: "United States", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "United Kingdom", code: "GB" },
    { name: "Germany", code: "DE" },
    { name: "Brazil", code: "BRL" },
    // Adicione mais países aqui conforme necessário
  ];

  selectedCountry: string = "";

  @Input() labelText: string = "Converter de:";
  @Input() choices: any[] = [];
  dolar: number = 0;
  reais: number = 0;
}
