// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"poulton-le-fylde","repository":"europe","path":"united-kingdom/england/poulton-le-fylde","depth":3,"parent":"united-kingdom/england","children":["hardhorn","hardhorn-village","high-cross"]});
export const childModules = Object.freeze({"hardhorn":"./hardhorn/hardhorn.js","hardhorn-village":"./hardhorn-village/hardhorn-village.js","high-cross":"./high-cross/high-cross.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
