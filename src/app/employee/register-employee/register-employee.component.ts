import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent {
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createRegisterForm();
    //Es el método que inicia después del constructor
  }

  //Declarando el formulario de Angular
  registerForm = new FormGroup({
    name: new FormControl(''),
    docnumber: new FormControl(''),
    startdate: new FormControl(''),
    position: new FormControl(''),
    salary: new FormControl('')
  });


  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      docnumber: ['',[Validators.required]],
      startdate:  ['',[Validators.required]],
      position:  ['',[Validators.required]],
      salary:  ['',[Validators.required]]
      //[Validators.required] Valida que cada input sea obligatorio
    });
  }

  onSave() {
    this.authService.registerEmployee(this.registerForm.value).subscribe(result => {
      this.registerForm.reset();
      alert("Usuario creado exitosamente")
    });
  }

}
