let obj1 = {
    "a": "Crazy",
    "b": "Engine",
    "c": "Bros"
}
let obj2 = {
    "a": "Amazing",
    "b": "Foods",
    "c": "Limited"
}
let obj3 = {
    "a": "Fire",
    "b": "Garments",
    "c": "Store"
}
let obj = {
    "a": "",
    "b": "",
    "c": "",
}
let rand1 = Math.random();
let rand2 = Math.random();
let rand3 = Math.random();
if (rand1 < 0.33) {
    obj["a"] = obj1["a"];



}
else if (rand1 > 0.33 && rand1 < 0.66) {
    obj["a"] = obj2["a"];
}
else {
    obj["a"] = obj3["a"];
}
if (rand2 < 0.33) {
    obj["b"] = obj3["b"];


}
else if (rand2 > 0.33 && rand2 < 0.66) {

    obj["b"] = obj2["b"];

}
else {

    obj["b"] = obj1["b"];

}
if (rand3 < 0.33) {

    obj["c"] = obj2["c"];


}
else if (rand3 > 0.33 && rand3 < 0.66) {

    obj["c"] = obj3["c"];
}
else {

    obj["c"] = obj1["c"];
}
function Gen() {
    return obj["a"] + obj["b"] + obj["c"];
}
console.log(Gen())