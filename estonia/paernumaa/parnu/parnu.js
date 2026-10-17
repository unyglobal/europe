// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parnu","repository":"europe","path":"estonia/paernumaa/parnu","depth":3,"parent":"estonia/paernumaa","children":["kesklinn","loosi","raama-linnaosa","ulejoe-linnaosa"]});
export const childModules = Object.freeze({"kesklinn":"./kesklinn/kesklinn.js","loosi":"./loosi/loosi.js","raama-linnaosa":"./raama-linnaosa/raama-linnaosa.js","ulejoe-linnaosa":"./ulejoe-linnaosa/ulejoe-linnaosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
