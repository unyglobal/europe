// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-denmark","repository":"europe","path":"denmark/north-denmark","depth":2,"parent":"denmark","children":["aalborg","frederikshavn","hj-rring","n-rresundby"]});
export const childModules = Object.freeze({"aalborg":"./aalborg/aalborg.js","frederikshavn":"./frederikshavn/frederikshavn.js","hj-rring":"./hj-rring/hj-rring.js","n-rresundby":"./n-rresundby/n-rresundby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
