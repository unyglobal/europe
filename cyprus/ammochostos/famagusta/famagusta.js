// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"famagusta","repository":"europe","path":"cyprus/ammochostos/famagusta","depth":3,"parent":"cyprus/ammochostos","children":["dumlup-nar","famagusta-walled-city","karakol","nam-k-kemal"]});
export const childModules = Object.freeze({"dumlup-nar":"./dumlup-nar/dumlup-nar.js","famagusta-walled-city":"./famagusta-walled-city/famagusta-walled-city.js","karakol":"./karakol/karakol.js","nam-k-kemal":"./nam-k-kemal/nam-k-kemal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
