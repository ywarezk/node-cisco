"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
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
var helloObservable = rxjs_1.interval(1000).pipe(operators_1.map(function (index) { return "hello world " + index; }));
var sub = helloObservable.subscribe(function (msg) { return console.log(msg); }, function (err) { return console.log(err); }, function () { return console.log('data stream is closed'); });
var sub2 = helloObservable.subscribe(function (msg) { return console.log(msg); }, function (err) { return console.log(err); }, function () { return console.log('data stream is closed'); });
setTimeout(function () {
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
