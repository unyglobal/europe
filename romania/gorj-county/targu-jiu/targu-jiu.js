// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"targu-jiu","repository":"europe","path":"romania/gorj-county/targu-jiu","depth":3,"parent":"romania/gorj-county","children":["mahalaua-botorogi","romanesti","ulari"]});
export const childModules = Object.freeze({"mahalaua-botorogi":"./mahalaua-botorogi/mahalaua-botorogi.js","romanesti":"./romanesti/romanesti.js","ulari":"./ulari/ulari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
