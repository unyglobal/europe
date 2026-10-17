// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gaevleborg","repository":"europe","path":"sweden/gaevleborg","depth":2,"parent":"sweden","children":["gavle","hudiksvall","sandviken"]});
export const childModules = Object.freeze({"gavle":"./gavle/gavle.js","hudiksvall":"./hudiksvall/hudiksvall.js","sandviken":"./sandviken/sandviken.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
