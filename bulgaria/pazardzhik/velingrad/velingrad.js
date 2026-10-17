// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"velingrad","repository":"europe","path":"bulgaria/pazardzhik/velingrad","depth":3,"parent":"bulgaria/pazardzhik","children":["ladzhene"]});
export const childModules = Object.freeze({"ladzhene":"./ladzhene/ladzhene.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
