import { Component, Input, OnInit } from '@angular/core';
import { agendamentoDTO } from 'src/Models/AgendamentoDTO';
import { AgendarService } from '../agendar.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {

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
