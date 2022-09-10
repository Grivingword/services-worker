import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/_core/_services/app.layout.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .p-password input {
      width: 100% !important;
      padding: 1rem;
    }

    :host ::ng-deep .pi-eye {
      transform: scale(1.6);
      color: var(--primary-color) !important;
    }

    :host ::ng-deep .pi-eye-slash {
      transform: scale(1.6);
      color: var(--primary-color) !important;
    }
  `]
})
export class LoginComponent implements OnInit{
  fromGroup: FormGroup | any;
  typePassword: string;
  iconPassword: string;
  booleanPassword: boolean | undefined;

  constructor(
    public layoutService: LayoutService,
    private $formBuilder: FormBuilder,
  ) {
    this.iconPassword = 'pi-eye';
    this.typePassword = 'password';
  }

  ngOnInit(): void {
    this.fromGroup = this.$formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
    this.form['password'].setValue('')
  }

  get form() {return this.fromGroup.controls; }

  onSubmit(){
    console.log(this.fromGroup.value)
  }

  changeModePassword() {
    this.booleanPassword = !this.booleanPassword;
    if (this.booleanPassword) {
      this.iconPassword = 'pi-eye-slash';
      this.typePassword = 'text';
    } else {
      this.iconPassword = 'pi-eye';
      this.typePassword = 'password';
    }
  }

}
