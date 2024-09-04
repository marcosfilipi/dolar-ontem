// date-picker.component.ts
import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { DolarService } from "src/app/services/dolar.service";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit {
  selectedDate: any = Date;
  cotacaoCompra: number | undefined;
  cotacaoVenda: number | undefined;
  dataHoraCotacao: string | undefined;
  // selectedOption!: string;

  constructor(
    @Inject(LOCALE_ID) private locale: string,
    private dolar: DolarService
  ) {}

  ngOnInit(): void {
    // Initialization for ES Users
    this.locale = "pt-BR";
  }

  teste(event: any) {
    let calendar = event.target.value._i;
    // console.log(event.target.value._i);
    this.dolar.getDolar(calendar.year, calendar.month, calendar.date).subscribe(
      (response) => {
        // this.cotacaoCompra = response.cotacaoCompra;
        // this.cotacaoVenda = response.cotacaoVenda;
        // this.dataHoraCotacao = response.dataHoraCotacao;
        console.log(response);
      },
      (error) => {
        console.error("Error fetching data:", error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }
}
