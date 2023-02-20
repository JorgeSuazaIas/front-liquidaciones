import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee.model';
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
    employeeName: new FormControl(''),
    employeeDocNumber: new FormControl(''),
    employeeStartDate: new FormControl(''),
    employeeProfession: new FormControl(''),
    employeeSalary: new FormControl('')
  });


  createRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      employeeName: ['',[Validators.required]],
      employeeDocNumber: ['',[Validators.required]],
      employeeStartDate:  ['',[Validators.required]],
      employeeProfession:  ['',[Validators.required]],
      employeeSalary:  ['',[Validators.required]]
      //[Validators.required] Valida que cada input sea obligatorio
    });
  }

  onSave() {
    console.log(this.registerForm.value)
    this.authService.registerEmployee(this.registerForm.value as Employee).subscribe(result => {
      this.registerForm.reset();
      alert("Usuario creado exitosamente")
    });
  }



}
