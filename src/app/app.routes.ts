import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'watchlist',
    loadComponent: () => import('./page/watchlist/watchlist.page').then( m => m.WatchlistPage)
  },
  {
    path: 'series',
    loadComponent: () => import('./page/series/series.page').then( m => m.SeriesPage)
  },
  {
    path: 'peliculas',
    loadComponent: () => import('./page/peliculas/peliculas.page').then( m => m.PeliculasPage)
  },
  {
    path: 'categorias',
    loadComponent: () => import('./page/categorias/categorias.page').then( m => m.CategoriasPage)
  },

];
