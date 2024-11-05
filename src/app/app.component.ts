import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputComponent } from "./components/input.component";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    InputComponent, 
    FormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-input-config';
  form: FormGroup;
  fb = inject(FormBuilder);

  constructor() {
    this.form = this.fb.group({
      name: new FormControl({value: null, disabled: false}, Validators.required)
    })
  }

  print() {
    console.log(this.form);
  }
}
