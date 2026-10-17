// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ternopil","repository":"europe","path":"ukraine/ternopil","depth":2,"parent":"ukraine","children":["berezhany","chortkiv","kremenets"]});
export const childModules = Object.freeze({"berezhany":"./berezhany/berezhany.js","chortkiv":"./chortkiv/chortkiv.js","kremenets":"./kremenets/kremenets.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
