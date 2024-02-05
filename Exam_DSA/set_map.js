/* ------------------------------- Set-method ------------------------------ */

const set = new Set();

set.add(55);
set.add(99);
set.add(30);
set.add(77);
set.add(90);
set.delete(99);

set.forEach((ele) => {
    console.log(ele);
})

console.log(set);



/* ------------------------------- map-method ------------------------------- */

const map = new Map();

map.set('name', 'vibhuti');
map.set('city', 'surat');
map.set('std', 'fullStack');

console.log(map.get('name'));

map.delete('std');

map.forEach((ele, key) => {
    console.log(`${key} : ${ele}`);
})