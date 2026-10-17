// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zabaykalskiy-transbaikal-kray","repository":"europe","path":"russia/zabaykalskiy-transbaikal-kray","depth":2,"parent":"russia","children":["aginskoye","borzya","chita","krasnokamensk","nerchinsk","petrovsk-zabaykal-skiy"]});
export const childModules = Object.freeze({"aginskoye":"./aginskoye/aginskoye.js","borzya":"./borzya/borzya.js","chita":"./chita/chita.js","krasnokamensk":"./krasnokamensk/krasnokamensk.js","nerchinsk":"./nerchinsk/nerchinsk.js","petrovsk-zabaykal-skiy":"./petrovsk-zabaykal-skiy/petrovsk-zabaykal-skiy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
