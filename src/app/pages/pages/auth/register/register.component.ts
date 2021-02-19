import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import icVisibility from '@iconify/icons-ic/twotone-visibility';
import icVisibilityOff from '@iconify/icons-ic/twotone-visibility-off';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'vex-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    fadeInUp400ms
  ]
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  inputType = 'password';
  visible = false;

  icVisibility = icVisibility;
  icVisibilityOff = icVisibilityOff;

  constructor(private router: Router,
              private fb: FormBuilder,
              private cd: ChangeDetectorRef,
              private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required],
    });
  }

  send() {
    /* this.router.navigate(['/']);*/
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {

      return;
    }
    else
    {
      // Initialize Params Object
      const myFormData = new FormData();
      const headers = new HttpHeaders();
      // Begin assigning parameters
      myFormData.append('name', this.form.value.name);
      myFormData.append('email', this.form.value.email);
      myFormData.append('password', this.form.value.password);
      return this.http.post('http://localhost/mypage.php/'
          , myFormData).subscribe((res: Response) => {
        console.log('User Registration has been done.');



      });
    }
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
}
