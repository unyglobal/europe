// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"milanowek","repository":"europe","path":"poland/mazovia/milanowek","depth":3,"parent":"poland/mazovia","children":["grudow","osiedle-jedwabnik"]});
export const childModules = Object.freeze({"grudow":"./grudow/grudow.js","osiedle-jedwabnik":"./osiedle-jedwabnik/osiedle-jedwabnik.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
