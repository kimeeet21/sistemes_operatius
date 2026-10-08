function alterna(b){b.closest('.finestra').classList.toggle('tancada')}
(function(){var r=document.getElementById('rellotge');function h(){r.textContent=new Date().toLocaleTimeString('ca',{hour:'2-digit',minute:'2-digit'})}h();setInterval(h,30000)})();
