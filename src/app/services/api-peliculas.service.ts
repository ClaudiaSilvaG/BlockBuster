import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiPeliculasService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  public getPeliculas(limite: number = 20) {
    var params = new HttpParams();
    params = params.set("limit", limite.toString());
    return this.httpClient.get("https://desarrollo.codemaker.cl/api/peliculas.php", { params: params });
  }

  public getPeliculasTendencia(limite: number = 20) {
    var params = new HttpParams();
    params = params.set("limit", limite.toString()).set("orderby", "puntuacion");
    return this.httpClient.get("https://desarrollo.codemaker.cl/api/peliculas.php", { params: params });
  }
}
