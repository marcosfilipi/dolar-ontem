import { Component, OnInit } from '@angular/core';
import { DolarService } from './dollar.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cotacao = '';
  url2 = `https://economia.awesomeapi.com.br/json/last/USD-BRL`;
  url3 = `https://economia.awesomeapi.com.br/json/daily/USD-BRL/2`;
  cotacaoOntem = '';
  seguraDolar = 0;
  seguraDolarOntem = 0;
  async ngOnInit() {
    this.getDolar();

    this.getDolarOntem();
  }
  price: any | null = null;
  formattedPrice: string | null = null;
  constructor(private http: HttpClient, private dolarService: DolarService) {}

  formatCurrencyValue(value: any) {
    // Converte o valor para string
    let stringValue = String(value || '');

    // Remove todos os caracteres não numéricos, exceto a vírgula (se houver)
    let numericValue = stringValue.replace(/[^0-9,]/g, '');

    // Remove todas as vírgulas, exceto a última
    let decimalSeparatorIndex = numericValue.lastIndexOf(',');
    let integerPart = numericValue
      .slice(0, decimalSeparatorIndex)
      .replace(/,/g, '');
    let decimalPart = numericValue
      .slice(decimalSeparatorIndex + 1)
      .replace(/,/g, '');
    let formattedValue = `${integerPart},${decimalPart}`;

    // Formata o valor com a máscara desejada (R$ 0,00)
    this.formattedPrice = `R$ ${formattedValue}`;
  }
  parseCurrencyValue(value: string): number {
    if (!value) {
      return 0;
    }
    const parsedValue = parseFloat(
      value.replace(/[^\d.,]/g, '').replace(',', '.')
    );
    return parseFloat((parsedValue * 10).toFixed(2));
  }
  getDolar() {
    this.http.get<any>(this.url2).subscribe((response:any) => {
      this.seguraDolar = parseFloat(response.USDBRL.bid);
      // console.log(this.cotacao.toFixed(2)); //imprime o valor da moeda
    });
  }
  getDolarOntem() {
    this.http.get<any>(this.url3).subscribe((response:any) => {
      this.seguraDolarOntem = parseFloat(response[1].bid);

      // console.log(response[1].bid);
      // console.log(this.cotacaoOntem.toFixed(2));
    });
  }
  converter() {
    this.cotacao = (this.price * this.seguraDolar).toFixed(2)
    this.cotacaoOntem = (this.price * this.seguraDolarOntem).toFixed(2)
  }
}
