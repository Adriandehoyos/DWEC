Para los filtros como seria el heroes list html con filtros
<div class="container">
    <h1>Lista de Heroes</h1>

    <!-- FILTROS -->
    <div class="card p-3 mb-4">
        <h5>Filtros</h5>
        <div class="row">
            <!-- Filtro por nombre -->
            <div class="col-md-4">
                <label class="form-label">Buscar por nombre:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Escribe el nombre..."
                    [(ngModel)]="filtroNombre"
                    (input)="aplicarFiltros()">
            </div>

            <!-- Filtro por género -->
            <div class="col-md-4">
                <label class="form-label">Filtrar por género:</label>
                <select class="form-select" [(ngModel)]="filtroGenero" (change)="aplicarFiltros()">
                    <option value="">Todos</option>
                    <option value="Male">Masculino</option>
                    <option value="Female">Femenino</option>
                </select>
            </div>

            <!-- Filtro por alineamiento -->
            <div class="col-md-4">
                <label class="form-label">Filtrar por alineamiento:</label>
                <select class="form-select" [(ngModel)]="filtroAlignment" (change)="aplicarFiltros()">
                    <option value="">Todos</option>
                    <option value="good">Héroe</option>
                    <option value="bad">Villano</option>
                </select>
            </div>
        </div>

        <!-- Botón para limpiar filtros -->
        <div class="mt-3">
            <button class="btn btn-secondary" (click)="limpiarFiltros()">Limpiar filtros</button>
        </div>
    </div>

    <!-- LISTA DE HÉROES -->
    <div class="row row-cols-3 g-3">
        @for (hero of heroesFiltrados; track hero) {
            <div class="col">
                <app-hero-card [miHero]="hero"></app-hero-card>
            </div>
        }@empty {
            <h3>No hay héroes que coincidan con los filtros</h3>
        }
    </div>

    <!-- Paginación -->
    <div class="d-flex justify-content-center align-items-center gap-3 mt-4">
        <button
            class="btn btn-primary"
            (click)="previousPage()"
            [disabled]="currentpage === 0">
            Anterior
        </button>

        <span class="badge bg-secondary fs-5 px-3 py-2">
            Página {{ currentpage + 1}} de {{ totalpages }}
        </span>

        <button
            class="btn btn-primary"
            (click)="nextPage()"
            [disabled]="currentpage === totalpages - 1">
            Siguiente
        </button>
    </div>
</div>





Y el TS para los filtros entero


import { Component, inject } from '@angular/core';
import { Ihero } from '../../interfaces/ihero.interface';
import { HeroService } from '../../service/hero.service';
import { HeroCard } from '../../components/hero-card/hero-card';
import { ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ¡IMPORTANTE! Añadir este import

@Component({
  selector: 'app-hero-list',
  imports: [HeroCard, FormsModule], // ¡IMPORTANTE! Añadir FormsModule aquí
  templateUrl: './hero-list.html',
  styleUrl: './hero-list.css',
})
export class HeroList {

  heroesArray: Ihero[] = [];
  heroesFiltrados: Ihero[] = []; // Array que se mostrará después de filtrar
  heroService = inject(HeroService);
  currentpage: number = 0;
  totalpages: number = 3;
  private cdr = inject(ChangeDetectorRef);

  // Variables para los filtros
  filtroNombre: string = '';
  filtroGenero: string = '';
  filtroAlignment: string = '';

  ngOnInit(): void {
    this.loadCharacters(0);
  }

  loadCharacters(page: number): void {
    this.heroService.getAllHeroes(page).subscribe({
      next: (response) => {
        this.heroesArray = response.content;
        this.currentpage = response.number;
        this.totalpages = response.totalPages;
        this.aplicarFiltros(); // Aplicar filtros después de cargar
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al cargar personajes:', err);
      }
    });
  }

  // Método para aplicar los filtros
  aplicarFiltros(): void {
    this.heroesFiltrados = this.heroesArray.filter(hero => {
      // Filtro por nombre (si hay texto en el input)
      const cumpleNombre = !this.filtroNombre || 
        hero.heroname.toLowerCase().includes(this.filtroNombre.toLowerCase()) ||
        hero.fullname.toLowerCase().includes(this.filtroNombre.toLowerCase());

      // Filtro por género
      const cumpleGenero = !this.filtroGenero || hero.gender === this.filtroGenero;

      // Filtro por alineamiento
      const cumpleAlignment = !this.filtroAlignment || hero.alignment === this.filtroAlignment;

      // El héroe debe cumplir TODOS los filtros activos
      return cumpleNombre && cumpleGenero && cumpleAlignment;
    });
  }

  // Método para limpiar todos los filtros
  limpiarFiltros(): void {
    this.filtroNombre = '';
    this.filtroGenero = '';
    this.filtroAlignment = '';
    this.aplicarFiltros();
  }

  previousPage(): void {
    if (this.currentpage > 0) {
      this.loadCharacters(this.currentpage - 1);
    }
  }

  nextPage(): void {
    if (this.currentpage < this.totalpages - 1) {
      this.loadCharacters(this.currentpage + 1);
    }
  }
}




Para el filtro por superpoderes
<!-- Dentro de la sección de filtros -->
<div class="col-md-4">
    <label class="form-label">Poder mínimo:</label>
    <input 
        type="number" 
        class="form-control" 
        placeholder="Ej: 50"
        [(ngModel)]="filtroPower"
        (change)="filtrarPorPower()">
</div>




//en el ts esto


filtroPower: number = 0;

filtrarPorPower(): void {
  if (this.filtroPower > 0) {
    this.heroService.getHeroesByPower(this.filtroPower).subscribe({
      next: (heroes) => {
        this.heroesArray = heroes;
        this.aplicarFiltros();
      }
    });
  } else {
    this.loadCharacters(this.currentpage);
  }
}


//y en el service esto
// Método para buscar por power
getHeroesByPower(power: number): Observable<Ihero[]> {
  return this.httpClient.get<Ihero[]>(`${this.baseUrl}/power/${power}`);
}