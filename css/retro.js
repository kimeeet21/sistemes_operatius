function alterna(b){b.closest('.finestra').classList.toggle('tancada')}
(function(){var r=document.getElementById('rellotge');if(r){var h=function(){r.textContent=new Date().toLocaleTimeString('ca',{hour:'2-digit',minute:'2-digit'})};h();setInterval(h,30000)}})();
/* Galeria automàtica: carrega nom-1, nom-2, nom-3... (png, jpg, jpeg o webp) fins que no n'hi hagi més */
document.querySelectorAll('.galeria').forEach(function(g){
  var base=g.dataset.base,exts=['png','jpg','jpeg','webp'],peus=(g.dataset.peus||'').split('|');
  function prova(i,k){
    if(k>=exts.length){if(i===1)g.innerHTML='<figure class="buit" data-fitxer="'+g.dataset.fitxer+'"></figure>';return}
    var url=base+i+'.'+exts[k],im=new Image();
    im.onload=function(){
      var a=document.createElement('a');a.href=url;a.target='_blank';im.alt='Captura '+i;a.appendChild(im);
      var f=document.createElement('figure'),c=document.createElement('figcaption');c.textContent=(peus[i-1]&&peus[i-1].length)?'Fig. '+i+' – '+peus[i-1]:'Captura '+i;
      f.appendChild(a);f.appendChild(c);g.appendChild(f);prova(i+1,0)};
    im.onerror=function(){prova(i,k+1)};
    im.src=url}
  prova(1,0)});
