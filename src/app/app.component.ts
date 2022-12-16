import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // of(2, 4, 6, 8)
    //   .subscribe(item => console.log(typeof item))

    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`tapped number is ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if(item === 0) {
            throw new Error('ZERO was found!!');
          }
          return item
        }),
        take(3)
      ).subscribe({
        next: (item) => console.log(`resulting item .. ${item}`),
        error: (err) => console.error(`error occured ${err}`),
        complete: () => console.log('complete'),
      });  
      // from(["hi", "hello", "hey"])
      // .subscribe({
      //   next: (item) => console.log(`resulting item .. ${item}`),
      //   error: (err) => console.error(`error occured ${err}`),
      //   complete: () => console.log('complete'),
      // });  
      // of("hi", "hello", "hey")
      // .subscribe({
      //   next: (...item) => console.log(`${item}`)
      //   // error: (err) => console.error(`error occured ${err}`),
      //   // complete: () => console.log('complete'),
      // });  
  }
}
