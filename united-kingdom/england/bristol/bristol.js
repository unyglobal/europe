// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bristol","repository":"europe","path":"united-kingdom/england/bristol","depth":3,"parent":"united-kingdom/england","children":["canon-s-marsh","kingsdown","tyndall-s-park"]});
export const childModules = Object.freeze({"canon-s-marsh":"./canon-s-marsh/canon-s-marsh.js","kingsdown":"./kingsdown/kingsdown.js","tyndall-s-park":"./tyndall-s-park/tyndall-s-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
