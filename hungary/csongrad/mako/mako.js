// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mako","repository":"europe","path":"hungary/csongrad/mako","depth":3,"parent":"hungary/csongrad","children":["foldeaki-hatar-menti-tanyak","habtato","igasiugar","rakosiugar"]});
export const childModules = Object.freeze({"foldeaki-hatar-menti-tanyak":"./foldeaki-hatar-menti-tanyak/foldeaki-hatar-menti-tanyak.js","habtato":"./habtato/habtato.js","igasiugar":"./igasiugar/igasiugar.js","rakosiugar":"./rakosiugar/rakosiugar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
