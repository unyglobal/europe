// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"podlasie","repository":"europe","path":"poland/podlasie","depth":2,"parent":"poland","children":["apy","augustow","bia-ystok","bielsk-podlaski","grajewo","hajnowka","omza","siemiatycze","soko-ka","suwa-ki","zambrow"]});
export const childModules = Object.freeze({"apy":"./apy/apy.js","augustow":"./augustow/augustow.js","bia-ystok":"./bia-ystok/bia-ystok.js","bielsk-podlaski":"./bielsk-podlaski/bielsk-podlaski.js","grajewo":"./grajewo/grajewo.js","hajnowka":"./hajnowka/hajnowka.js","omza":"./omza/omza.js","siemiatycze":"./siemiatycze/siemiatycze.js","soko-ka":"./soko-ka/soko-ka.js","suwa-ki":"./suwa-ki/suwa-ki.js","zambrow":"./zambrow/zambrow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
