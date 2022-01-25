import { Component, OnInit } from '@angular/core';
import { ReplaceSpacePipe } from '@shared/pipes/replace-space.pipe';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  value = 'Hola mundo'

  constructor(private replaceSpace:ReplaceSpacePipe) { }

  ngOnInit(): void { //TODO Lugar ideal para llamar Apis, cambiar datos, ...
    this.value = this.replaceSpace.transform(this.value, ' separador ');
  }

}
