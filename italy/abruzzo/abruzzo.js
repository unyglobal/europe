// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abruzzo","repository":"europe","path":"italy/abruzzo","depth":2,"parent":"italy","children":["avezzano","chieti","chieti-scalo","francavilla-al-mare","giulianova","l-aquila","lanciano","montesilvano","pescara","roseto-degli-abruzzi","san-salvo","sulmona","teramo","vasto"]});
export const childModules = Object.freeze({"avezzano":"./avezzano/avezzano.js","chieti":"./chieti/chieti.js","chieti-scalo":"./chieti-scalo/chieti-scalo.js","francavilla-al-mare":"./francavilla-al-mare/francavilla-al-mare.js","giulianova":"./giulianova/giulianova.js","l-aquila":"./l-aquila/l-aquila.js","lanciano":"./lanciano/lanciano.js","montesilvano":"./montesilvano/montesilvano.js","pescara":"./pescara/pescara.js","roseto-degli-abruzzi":"./roseto-degli-abruzzi/roseto-degli-abruzzi.js","san-salvo":"./san-salvo/san-salvo.js","sulmona":"./sulmona/sulmona.js","teramo":"./teramo/teramo.js","vasto":"./vasto/vasto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
