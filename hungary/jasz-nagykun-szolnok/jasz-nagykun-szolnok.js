// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jasz-nagykun-szolnok","repository":"europe","path":"hungary/jasz-nagykun-szolnok","depth":2,"parent":"hungary","children":["jaszbereny","karcag","mezotur","szolnok","torokszentmiklos"]});
export const childModules = Object.freeze({"jaszbereny":"./jaszbereny/jaszbereny.js","karcag":"./karcag/karcag.js","mezotur":"./mezotur/mezotur.js","szolnok":"./szolnok/szolnok.js","torokszentmiklos":"./torokszentmiklos/torokszentmiklos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
