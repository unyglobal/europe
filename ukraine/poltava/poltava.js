// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poltava","repository":"europe","path":"ukraine/poltava","depth":2,"parent":"ukraine","children":["avtozavodskyi","hadyach","horishni-plavni","kremenchuk","kryukiv","lubny","molodizhne","myrhorod","nahirna-chastyna","rakivka","shevchenko"]});
export const childModules = Object.freeze({"avtozavodskyi":"./avtozavodskyi/avtozavodskyi.js","hadyach":"./hadyach/hadyach.js","horishni-plavni":"./horishni-plavni/horishni-plavni.js","kremenchuk":"./kremenchuk/kremenchuk.js","kryukiv":"./kryukiv/kryukiv.js","lubny":"./lubny/lubny.js","molodizhne":"./molodizhne/molodizhne.js","myrhorod":"./myrhorod/myrhorod.js","nahirna-chastyna":"./nahirna-chastyna/nahirna-chastyna.js","rakivka":"./rakivka/rakivka.js","shevchenko":"./shevchenko/shevchenko.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
