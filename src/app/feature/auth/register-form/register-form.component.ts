import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../core/util/AppBaseComponent";
import {ErrorsForm} from "../../../core/util/ErrorsForm";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent extends AppBaseComponent {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@"
        + "[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$")]],
      numberCellphone: ['', [Validators.required, Validators.max(10)]],
      password: ['', Validators.required],
      againPassword: ['', Validators.required],
      nuevoCampo: ['', Validators.required]
    })
  }

  public register(): void {
    //this.registerForm.controls['firstName'].setValue(this.registerForm.controls['firstName'].value);
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      alert("Hay errores en el formulario")
    }

    console.log(this.getAllErrorsForm(this.registerForm));
  }


  /**
   * Retorna mensaje de error de un campo del formulario
   * @param field
   */
  public getErrorForm(field: string): string {
    let message: string;

    const required: Array<String> = ["firstName", "lastName", "email", "numberCellphone", "password", "againPassword"];
    const formatEmail: Array<String> = ["email"]
    const onlyNumber: Array<String> = ["numberCellphone"]

    if (this.isTouchedField(this.registerForm, field)) {

      if (required.includes(field) && this.registerForm.get(field).hasError('required')){
        message = ErrorsForm.REQUIRED;
      } else if (formatEmail.includes(field) && this.registerForm.get(field).hasError('pattern')) {
        message = ErrorsForm.EMAIL_FORMAT;
      } else if (onlyNumber.includes(field) && this.registerForm.get(field).hasError('max')) {
        message = "Solo puede tener maximo 10 caracteres"
      }
    }

    return message;
  }



}
