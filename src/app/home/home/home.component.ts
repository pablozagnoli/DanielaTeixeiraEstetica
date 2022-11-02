import { Component, Input, OnInit } from '@angular/core';
import { AgendarService } from 'src/app/agendar/agendar.service';
import { agendamentoDTO } from 'src/Models/AgendamentoDTO';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private serve: AgendarService) { }


  @Input() AgendamentoDTO: agendamentoDTO = {
    nome: '',
    email: '',
    telefone: '',
    comentario: ''
  }

  ngOnInit(): void {
  }

  criarAgendamento(){
    this.serve.Agendar(this.AgendamentoDTO).subscribe();
  }

}
