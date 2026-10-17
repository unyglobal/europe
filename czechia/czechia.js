// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"czechia","repository":"europe","path":"czechia","depth":1,"parent":"","children":["carlsbad-region","central-bohemia","hradec-kralove-region","liberec-region","moravian-silesian-region","olomouc-region","pardubice-region","plzen-region","prague","south-bohemian-region","south-moravian","usti-nad-labem-region","vysocina","zlin"]});
export const childModules = Object.freeze({"carlsbad-region":"./carlsbad-region/carlsbad-region.js","central-bohemia":"./central-bohemia/central-bohemia.js","hradec-kralove-region":"./hradec-kralove-region/hradec-kralove-region.js","liberec-region":"./liberec-region/liberec-region.js","moravian-silesian-region":"./moravian-silesian-region/moravian-silesian-region.js","olomouc-region":"./olomouc-region/olomouc-region.js","pardubice-region":"./pardubice-region/pardubice-region.js","plzen-region":"./plzen-region/plzen-region.js","prague":"./prague/prague.js","south-bohemian-region":"./south-bohemian-region/south-bohemian-region.js","south-moravian":"./south-moravian/south-moravian.js","usti-nad-labem-region":"./usti-nad-labem-region/usti-nad-labem-region.js","vysocina":"./vysocina/vysocina.js","zlin":"./zlin/zlin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
