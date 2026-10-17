// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harghita-county","repository":"europe","path":"romania/harghita-county","depth":2,"parent":"romania","children":["gheorgheni","miercurea-ciuc","odorheiu-secuiesc"]});
export const childModules = Object.freeze({"gheorgheni":"./gheorgheni/gheorgheni.js","miercurea-ciuc":"./miercurea-ciuc/miercurea-ciuc.js","odorheiu-secuiesc":"./odorheiu-secuiesc/odorheiu-secuiesc.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
