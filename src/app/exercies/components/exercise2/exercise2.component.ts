import { Component, OnInit } from '@angular/core';
import { AppHttpService } from 'src/app/services/app-http.service';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css']
})
export class Exercise2Component implements OnInit {

  notificationText: string;

  scheduleForDelete = [{
    id: 1,
    name: 'record one'
  }, {
    id: 2,
    name: 'record two'
  }]

  scheduleForUpdate = [{
    id: 11,
    name: 'record one update'
  }, {
    id: 22,
    name: 'record two Update'
  }]

  constructor(private httpService: AppHttpService,
    protected readonly http: HttpClient) {
    this.notificationText = '';
  }

  ngOnInit(): void {

    // First time service approach will be used
    this.handleViaService();

    // un comment this to process them using Promise approach.
    // this.handleViaPromiseApproach();
  }

  /**
   * This method use the service approach and process the items (delete and update.)
   */

  handleViaService() {
    this.notificationText = 'Going to Process all delete using service...';
    let del_array = this.scheduleForDelete.map(item => {
      return this.httpService.delete(item.id)
    });

    forkJoin([...del_array]).subscribe(result => {
      console.log('Result called... ', result);
      this.notificationText = 'Delete requested processed no going to process update request.'
    })

    let update_array = this.scheduleForUpdate.map(item => {
      return this.httpService.update(item)
    });

    forkJoin([...update_array]).subscribe(result => {
      console.log('updated record result', result)
      this.notificationText = 'All records also updated using service approach.'
    })

  }

  /**
   * This method use the promise approach and process all the items.
   * We will take all promises and then process them using Promise.all and get 
   * the values.
   */
  handleViaPromiseApproach() {
    const URL = 'http://abc.com/api/update';
    this.notificationText = 'Going to Process all delete using service...';
    let del_array = this.scheduleForDelete.map(item => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item);
        }, 100);
      });
    });

    Promise.all(del_array).then(values => {
      console.log("All delete items done...", values)
      this.notificationText = 'Delete requested processed no going to process update request.'
    })
  }

}
