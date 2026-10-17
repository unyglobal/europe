// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plymouth","repository":"europe","path":"united-kingdom/england/plymouth","depth":3,"parent":"united-kingdom/england","children":["barbican","beaumont","millbay","pennycomequick","stonehouse","west-hoe"]});
export const childModules = Object.freeze({"barbican":"./barbican/barbican.js","beaumont":"./beaumont/beaumont.js","millbay":"./millbay/millbay.js","pennycomequick":"./pennycomequick/pennycomequick.js","stonehouse":"./stonehouse/stonehouse.js","west-hoe":"./west-hoe/west-hoe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
