// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malmo","repository":"europe","path":"sweden/skane/malmo","depth":3,"parent":"sweden/skane","children":["gamla-staden","rorsjostaden","sodra-forstaden","sodra-innerstaden","vastra-innerstaden"]});
export const childModules = Object.freeze({"gamla-staden":"./gamla-staden/gamla-staden.js","rorsjostaden":"./rorsjostaden/rorsjostaden.js","sodra-forstaden":"./sodra-forstaden/sodra-forstaden.js","sodra-innerstaden":"./sodra-innerstaden/sodra-innerstaden.js","vastra-innerstaden":"./vastra-innerstaden/vastra-innerstaden.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
