// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karcag","repository":"europe","path":"hungary/jasz-nagykun-szolnok/karcag","depth":3,"parent":"hungary/jasz-nagykun-szolnok","children":["aranyos","halas","kisfoldek","kisvenkert","kunlapos"]});
export const childModules = Object.freeze({"aranyos":"./aranyos/aranyos.js","halas":"./halas/halas.js","kisfoldek":"./kisfoldek/kisfoldek.js","kisvenkert":"./kisvenkert/kisvenkert.js","kunlapos":"./kunlapos/kunlapos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
