// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-bromwich","repository":"europe","path":"united-kingdom/england/west-bromwich","depth":3,"parent":"united-kingdom/england","children":["guns-village","lambert-s-end","lyndon","mayer-s-green"]});
export const childModules = Object.freeze({"guns-village":"./guns-village/guns-village.js","lambert-s-end":"./lambert-s-end/lambert-s-end.js","lyndon":"./lyndon/lyndon.js","mayer-s-green":"./mayer-s-green/mayer-s-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
