// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"stuttgart-feuerbach","repository":"europe","path":"germany/baden-wurttemberg/stuttgart-feuerbach","depth":3,"parent":"germany/baden-wurttemberg","children":["an-der-burg","feuerbach-mitte"]});
export const childModules = Object.freeze({"an-der-burg":"./an-der-burg/an-der-burg.js","feuerbach-mitte":"./feuerbach-mitte/feuerbach-mitte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
