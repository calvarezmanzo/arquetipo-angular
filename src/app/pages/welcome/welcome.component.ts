import { Component, OnInit } from '@angular/core';
import { CodigoAlfaServiceService } from 'src/app/services/codigo-alfa-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  persons:any[] = [];

  constructor(
    private service: CodigoAlfaServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getPersonas().subscribe(
      (data) => {
        this.persons = data.personas;
      },(error)=>{
        console.error(error);
      }
    )
    
  }
  newPerson():void{
    this.router.navigate(['/registry-person'])
  }
}
