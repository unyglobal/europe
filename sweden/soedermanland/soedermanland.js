// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soedermanland","repository":"europe","path":"sweden/soedermanland","depth":2,"parent":"sweden","children":["eskilstuna","katrineholm","nykoping"]});
export const childModules = Object.freeze({"eskilstuna":"./eskilstuna/eskilstuna.js","katrineholm":"./katrineholm/katrineholm.js","nykoping":"./nykoping/nykoping.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
