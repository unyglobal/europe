// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"limassol","repository":"europe","path":"cyprus/limassol","depth":2,"parent":"cyprus","children":["germasogeia","kato-polemidia"]});
export const childModules = Object.freeze({"germasogeia":"./germasogeia/germasogeia.js","kato-polemidia":"./kato-polemidia/kato-polemidia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
