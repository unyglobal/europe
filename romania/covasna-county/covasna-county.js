// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"covasna-county","repository":"europe","path":"romania/covasna-county","depth":2,"parent":"romania","children":["sfantu-gheorghe","targu-secuiesc"]});
export const childModules = Object.freeze({"sfantu-gheorghe":"./sfantu-gheorghe/sfantu-gheorghe.js","targu-secuiesc":"./targu-secuiesc/targu-secuiesc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
