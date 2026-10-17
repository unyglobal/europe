// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oosterhout","repository":"europe","path":"netherlands/north-brabant/oosterhout","depth":3,"parent":"netherlands/north-brabant","children":["slotjes","strijen"]});
export const childModules = Object.freeze({"slotjes":"./slotjes/slotjes.js","strijen":"./strijen/strijen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
