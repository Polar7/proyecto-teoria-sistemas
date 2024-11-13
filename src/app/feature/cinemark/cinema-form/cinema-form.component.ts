import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../core/util/AppBaseComponent";
import Swal from "sweetalert2";

@Component({
  selector: 'app-cinema-form',
  templateUrl: './cinema-form.component.html',
  styleUrl: './cinema-form.component.css'
})
export class CinemaFormComponent extends AppBaseComponent {

  public cinemaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    super();

    this.cinemaForm = this.formBuilder.group({
      basicDataForm: this.formBuilder.group({
        typePerson: ['', Validators.required],
        name: ['', Validators.required],
        lastname: ['', Validators.required],
        typeDocument: ['', Validators.required],
        idDocument: ['', Validators.required],
        city: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required]
      }),
      paymentForm: this.formBuilder.group({
        numberCard: ['', Validators.required],
        namePerson: ['', Validators.required],
        dateExpiry: ['', Validators.required],
        cvv: ['', Validators.required],
        numberQuotes: ['', Validators.required],
      })
    });

  }

  public buyTickets(): void {
    if (!this.cinemaForm.valid) {
      this.cinemaForm.markAllAsTouched();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tienes errores en el formulario, revisa por favor!",
      });

      console.log(this.getAllErrorsForm(this.cinemaForm));
      return;
    }

    let formDataValue = this.cinemaForm.value;

    console.log("este es el form");
    console.log(formDataValue)

    let formBasicDataValue = formDataValue["basicDataForm"];
    let formPaymentValue = formDataValue["paymentForm"];

    let dtoJsonAEnviar = {
      ...formBasicDataValue,
      ...formPaymentValue,
    }

    console.log("json a enviar al backend")
    console.log(dtoJsonAEnviar);

    Swal.fire({
      icon: "success",
      title: "Compra exitosa",
      text: "Compra realizada correctamente!",
    });
  }


}
