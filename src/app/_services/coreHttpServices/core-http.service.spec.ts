import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { CoreHttpService } from './core-http.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';


describe('CoreHttpService', () => {
  let httpTestingController: HttpTestingController;
  let service: CoreHttpService;
  let httpMock: HttpTestingController;
  const apiBaseURL: string = environment.apiUrl;
  const snackMock = {
    open: () => {}
  };
  const matDialogRef = {
    afterClosed: () => {},
    close: () => {}
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [{
        provide: MatSnackBar,
        useValue: snackMock
      },
      { provide: MAT_DIALOG_DATA, useValue: {}},
        { provide: MatDialogRef, useValue: matDialogRef}]
    });
    httpTestingController = TestBed.get(HttpTestingController);

    service = TestBed.get(CoreHttpService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
