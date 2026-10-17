// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-greece","repository":"europe","path":"greece/central-greece","depth":2,"parent":"greece","children":["chalkida","lamia","livadeia","thivai"]});
export const childModules = Object.freeze({"chalkida":"./chalkida/chalkida.js","lamia":"./lamia/lamia.js","livadeia":"./livadeia/livadeia.js","thivai":"./thivai/thivai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
