// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castille-and-leon","repository":"europe","path":"spain/castille-and-leon","depth":2,"parent":"spain","children":["aranda-de-duero","avila","bejar","benavente","burgos","gamonal","laguna-de-duero","leon","medina-del-campo","miranda-de-ebro","palencia","ponferrada","san-andres-del-rabanedo","segovia","soria","valladolid","villaquilambre","zamora"]});
export const childModules = Object.freeze({"aranda-de-duero":"./aranda-de-duero/aranda-de-duero.js","avila":"./avila/avila.js","bejar":"./bejar/bejar.js","benavente":"./benavente/benavente.js","burgos":"./burgos/burgos.js","gamonal":"./gamonal/gamonal.js","laguna-de-duero":"./laguna-de-duero/laguna-de-duero.js","leon":"./leon/leon.js","medina-del-campo":"./medina-del-campo/medina-del-campo.js","miranda-de-ebro":"./miranda-de-ebro/miranda-de-ebro.js","palencia":"./palencia/palencia.js","ponferrada":"./ponferrada/ponferrada.js","san-andres-del-rabanedo":"./san-andres-del-rabanedo/san-andres-del-rabanedo.js","segovia":"./segovia/segovia.js","soria":"./soria/soria.js","valladolid":"./valladolid/valladolid.js","villaquilambre":"./villaquilambre/villaquilambre.js","zamora":"./zamora/zamora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
