// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mogilev","repository":"europe","path":"belarus/mogilev","depth":2,"parent":"belarus","children":["bobruysk","bykhov","horki","krychaw","mahilyow","osipovichi"]});
export const childModules = Object.freeze({"bobruysk":"./bobruysk/bobruysk.js","bykhov":"./bykhov/bykhov.js","horki":"./horki/horki.js","krychaw":"./krychaw/krychaw.js","mahilyow":"./mahilyow/mahilyow.js","osipovichi":"./osipovichi/osipovichi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
