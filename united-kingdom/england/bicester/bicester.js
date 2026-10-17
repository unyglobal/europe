// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bicester","repository":"europe","path":"united-kingdom/england/bicester","depth":3,"parent":"united-kingdom/england","children":["bicester-village","highfield","king-s-end"]});
export const childModules = Object.freeze({"bicester-village":"./bicester-village/bicester-village.js","highfield":"./highfield/highfield.js","king-s-end":"./king-s-end/king-s-end.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
