import Observable from "./Observable.js";

function oba() {
    console.log("oba")
}
function obaa() {
    console.log("obaa")
}

Observable.subscribe(oba)
Observable.subscribe(obaa)

Observable.notifyAll("das");