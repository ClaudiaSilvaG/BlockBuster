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

  public getPeliculas(limite:number=20,offset:number=0, orderBy:string=""){
    var params= new HttpParams();
    params=params.set("limit",limite.toString());
    params=params.set("offset",offset.toString());
    params=params.set("orderBy",orderBy.toString())
    return this.httpClient.get("https://desarrollo.codemaker.cl/api/peliculas.php",{params:params});
  }
  public getPeliculasById(id:string){
    var params= new HttpParams();
    params=params.set("id",id);
    params=params.set("limit",1);
    return this.httpClient.get("https://desarrollo.codemaker.cl/api/peliculas.php",{params:params});
  }
}
