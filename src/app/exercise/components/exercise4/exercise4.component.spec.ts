import { HttpClient } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppHttpService } from 'src/app/services/app-http.service';

import { Exercise4Component } from './exercise4.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe('Exercise4Component', () => {
  let component: Exercise4Component;
  let fixture: ComponentFixture<Exercise4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exercise4Component],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercise4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Testing http request', () => {

  let service: AppHttpService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AppHttpService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('It post data response from server', () => {
    console.log('starting test...')
    let submitting = true;
    let forData = { foo: 'bar', url: 'http://localhost/api/question/1' };
    service.post(forData).subscribe(resp => {
      submitting = false;
      forData = resp;
      expect(resp).toEqual({
        message: 'success'
      })
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `http://abc.com/api/update`,
    });

    req.flush({ message: 'success' });

  })

})


