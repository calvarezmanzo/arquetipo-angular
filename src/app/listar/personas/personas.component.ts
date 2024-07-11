import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'; // Ajusta la ruta según la ubicación real de tu servicio
import { Observable } from 'rxjs';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas!: any[]; // Define el arreglo para almacenar las personas

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getListPersona().subscribe(
      (data) => {
        this.personas = data["personas"]; // Asigna los datos obtenidos del servicio a la variable personas
      },
      (error) => {
        console.error('Error al obtener la lista de personas:', error);
        // Manejo de errores aquí
      }
    );
  }
}