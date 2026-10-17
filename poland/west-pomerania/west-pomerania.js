// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-pomerania","repository":"europe","path":"poland/west-pomerania","depth":2,"parent":"poland","children":["bia-ogard","choszczno","drzetowo-grabowo","goleniow","gryfice","gryfino","ko-obrzeg","koszalin","nowogard","police","stargard","swidwin","swierczewo","swinoujscie","szczecin","szczecinek","wa-cz"]});
export const childModules = Object.freeze({"bia-ogard":"./bia-ogard/bia-ogard.js","choszczno":"./choszczno/choszczno.js","drzetowo-grabowo":"./drzetowo-grabowo/drzetowo-grabowo.js","goleniow":"./goleniow/goleniow.js","gryfice":"./gryfice/gryfice.js","gryfino":"./gryfino/gryfino.js","ko-obrzeg":"./ko-obrzeg/ko-obrzeg.js","koszalin":"./koszalin/koszalin.js","nowogard":"./nowogard/nowogard.js","police":"./police/police.js","stargard":"./stargard/stargard.js","swidwin":"./swidwin/swidwin.js","swierczewo":"./swierczewo/swierczewo.js","swinoujscie":"./swinoujscie/swinoujscie.js","szczecin":"./szczecin/szczecin.js","szczecinek":"./szczecinek/szczecinek.js","wa-cz":"./wa-cz/wa-cz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
