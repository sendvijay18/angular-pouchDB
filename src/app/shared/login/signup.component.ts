import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Router } from '@angular/router';
import { MyNotesProvider } from '../../services/my-notes/my-notes';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  dataLoading: boolean = false;
  brokenNetwork = false;
  savedChanges = false;

  constructor(private _backendService: BackendService, private _router: Router, private database: MyNotesProvider) {
  }
  ngOnInit() {
  }
  routeLoginPage() {
    this._router.navigate(['/login']);
  }

  onSubmit(formData) {
    // this.dataLoading = true;
    // this._backendService.createUser(formData);
    this.database.addNote(formData); 
  }
}