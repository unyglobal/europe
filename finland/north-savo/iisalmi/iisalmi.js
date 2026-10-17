// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iisalmi","repository":"europe","path":"finland/north-savo/iisalmi","depth":3,"parent":"finland/north-savo","children":["haukiniemi","kangas","rohmula"]});
export const childModules = Object.freeze({"haukiniemi":"./haukiniemi/haukiniemi.js","kangas":"./kangas/kangas.js","rohmula":"./rohmula/rohmula.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
