// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"voronezh-oblast","repository":"europe","path":"russia/voronezh-oblast","depth":2,"parent":"russia","children":["anna","bobrov","boguchar","borisoglebsk","buturlinovka","gribanovskiy","kalach","liski","novaya-usman","novovoronezh","ostrogozhsk","povorino","pridonskoy","semiluki","voronezh"]});
export const childModules = Object.freeze({"anna":"./anna/anna.js","bobrov":"./bobrov/bobrov.js","boguchar":"./boguchar/boguchar.js","borisoglebsk":"./borisoglebsk/borisoglebsk.js","buturlinovka":"./buturlinovka/buturlinovka.js","gribanovskiy":"./gribanovskiy/gribanovskiy.js","kalach":"./kalach/kalach.js","liski":"./liski/liski.js","novaya-usman":"./novaya-usman/novaya-usman.js","novovoronezh":"./novovoronezh/novovoronezh.js","ostrogozhsk":"./ostrogozhsk/ostrogozhsk.js","povorino":"./povorino/povorino.js","pridonskoy":"./pridonskoy/pridonskoy.js","semiluki":"./semiluki/semiluki.js","voronezh":"./voronezh/voronezh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
