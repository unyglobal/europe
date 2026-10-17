// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-karelia","repository":"europe","path":"finland/south-karelia","depth":2,"parent":"finland","children":["imatra","lappeenranta"]});
export const childModules = Object.freeze({"imatra":"./imatra/imatra.js","lappeenranta":"./lappeenranta/lappeenranta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
