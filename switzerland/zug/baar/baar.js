// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baar","repository":"europe","path":"switzerland/zug/baar","depth":3,"parent":"switzerland/zug","children":["dorf","himmelrich","langass","muligass","neugass","oberdorf","schutzengel"]});
export const childModules = Object.freeze({"dorf":"./dorf/dorf.js","himmelrich":"./himmelrich/himmelrich.js","langass":"./langass/langass.js","muligass":"./muligass/muligass.js","neugass":"./neugass/neugass.js","oberdorf":"./oberdorf/oberdorf.js","schutzengel":"./schutzengel/schutzengel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
