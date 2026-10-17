// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"the-marches","repository":"europe","path":"italy/the-marches","depth":2,"parent":"italy","children":["ancona","ascoli-piceno","civitanova-marche","fabriano","falconara-marittima","fano","fermo","jesi","macerata","osimo","pesaro","porto-san-giorgio","porto-sant-elpidio","san-benedetto-del-tronto","senigallia","tolentino"]});
export const childModules = Object.freeze({"ancona":"./ancona/ancona.js","ascoli-piceno":"./ascoli-piceno/ascoli-piceno.js","civitanova-marche":"./civitanova-marche/civitanova-marche.js","fabriano":"./fabriano/fabriano.js","falconara-marittima":"./falconara-marittima/falconara-marittima.js","fano":"./fano/fano.js","fermo":"./fermo/fermo.js","jesi":"./jesi/jesi.js","macerata":"./macerata/macerata.js","osimo":"./osimo/osimo.js","pesaro":"./pesaro/pesaro.js","porto-san-giorgio":"./porto-san-giorgio/porto-san-giorgio.js","porto-sant-elpidio":"./porto-sant-elpidio/porto-sant-elpidio.js","san-benedetto-del-tronto":"./san-benedetto-del-tronto/san-benedetto-del-tronto.js","senigallia":"./senigallia/senigallia.js","tolentino":"./tolentino/tolentino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
