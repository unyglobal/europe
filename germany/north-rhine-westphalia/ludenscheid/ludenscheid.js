// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ludenscheid","repository":"europe","path":"germany/north-rhine-westphalia/ludenscheid","depth":3,"parent":"germany/north-rhine-westphalia","children":["grunewald"]});
export const childModules = Object.freeze({"grunewald":"./grunewald/grunewald.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
