
import {Observable, Observer, Subscription, interval} from 'rxjs';
import {map} from 'rxjs/operators';


// data stream with hello world pulse every second

// const helloObservable : Observable<string> =  Observable.create(
//     (observer : Observer<string>) => {
//         console.log('observable is active');
//         let counter = 0;
//         const intervalId = setInterval(() => {
//             counter++;
//             observer.next('hello world');
//             if (counter > 5) {
//                 // closing the data stream
//                 observer.complete();
//                 // observer.error(new Error('something happened'));
//             }
//         }, 1000);

//         return function() {
//             clearInterval(intervalId);
//         }
//     }
// );

const helloObservable : Observable<string> = interval(1000).pipe(
    map((index: number) => `hello world ${index}`)
)

const sub : Subscription = helloObservable.subscribe(
    (msg) => console.log(msg),
    (err) => console.log(err),
    () => console.log('data stream is closed')  
)

const sub2 : Subscription = helloObservable.subscribe(
    (msg) => console.log(msg),
    (err) => console.log(err),
    () => console.log('data stream is closed')  
)

setTimeout(() => {
    sub.unsubscribe();
    sub2.unsubscribe();
    
}, 3000);





// Promise VS Observable

// promise:
// pending -> resolved
// pending -> rejected

// Observable
// cold
// activated - can issue infinite amount pulses
// closed -> error, complete

// Promise VS Observable
// Observable is lazy promise is not lazy

// Promise VS Observalbe

// In observable async function is running for each listener, duplicated for every listener

// Promise VS Observable

// Observable is cancelable
// Promise not