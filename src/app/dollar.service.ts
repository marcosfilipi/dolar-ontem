import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DolarService {
  url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao=`;
  url2 = `https://economia.awesomeapi.com.br/json/last/USD-BRL`;
  url3 = `https://economia.awesomeapi.com.br/json/daily/USD-BRL/2`;
  constructor(private http: HttpClient) {}

  getDolar(year: number, month: number, day: number) {
    const dateFormatted = `${year}-${month}-${day}`;
    const url = `${this.url}'${dateFormatted}'&$top=100&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao`;

    return this.http.get<any>(url).pipe(
      map((response) => {
        return response.value[0]; // Retorna o primeiro item do array 'value'
      })
    );
  }

  getDolarOntem() {
    return this.http.get<any>(this.url3).pipe(
      map((response) => {
        if (response && response.USDBRL.bid[1]) {
          return response.USDBRL.bid[1];
        } else {
          throw new Error('Cotação de ontem não encontrada');
        }
      })
    );
  }
}
