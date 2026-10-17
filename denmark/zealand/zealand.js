// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zealand","repository":"europe","path":"denmark/zealand","depth":2,"parent":"denmark","children":["greve","holb-k","k-ge","kalundborg","klinteby-frihed","n-stved","nyk-bing-falster","ringsted","roskilde","slagelse","solr-d-strand","vordingborg"]});
export const childModules = Object.freeze({"greve":"./greve/greve.js","holb-k":"./holb-k/holb-k.js","k-ge":"./k-ge/k-ge.js","kalundborg":"./kalundborg/kalundborg.js","klinteby-frihed":"./klinteby-frihed/klinteby-frihed.js","n-stved":"./n-stved/n-stved.js","nyk-bing-falster":"./nyk-bing-falster/nyk-bing-falster.js","ringsted":"./ringsted/ringsted.js","roskilde":"./roskilde/roskilde.js","slagelse":"./slagelse/slagelse.js","solr-d-strand":"./solr-d-strand/solr-d-strand.js","vordingborg":"./vordingborg/vordingborg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
