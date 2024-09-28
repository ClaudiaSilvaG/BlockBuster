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

  public getPeliculas(limit: number = 15, offset: number = 0, orderBy: string = "") {
    var params = new HttpParams();
    params = params.set("limit", limit.toString());
    params = params.set("offset", offset.toString());
    params = params.set("orderBy", orderBy.toString());
    return this.httpClient.get("https://lightgrey-owl-901213.hostingersite.com/api/get_peliculas.php", { params: params });

  }
  public getPeliculaById(id: string) {
    var params = new HttpParams();
    params = params.set("id", id);
    return this.httpClient.get("https://lightgrey-owl-901213.hostingersite.com/api/get_pelicula.php", { params: params });
  }
}
