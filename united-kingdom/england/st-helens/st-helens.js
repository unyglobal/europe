// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"st-helens","repository":"europe","path":"united-kingdom/england/st-helens","depth":3,"parent":"united-kingdom/england","children":["green-bank","pocket-nook"]});
export const childModules = Object.freeze({"green-bank":"./green-bank/green-bank.js","pocket-nook":"./pocket-nook/pocket-nook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
