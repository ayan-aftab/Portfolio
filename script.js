(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))},cl=function(v,a,b){return Math.max(a,Math.min(b,v))};
/* background particles */
var bg=$('#bg'),h='';
for(var i=0;i<45;i++)h+='<i class="st" style="left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;--d:'+(2+Math.random()*5)+'s;animation-delay:-'+Math.random()*5+'s"></i>';
['{ }','</>','CSS','</','/>','#','( )','{}'].forEach(function(s,i){for(var k=0;k<2;k++)h+='<span class="sym" style="left:'+Math.random()*95+'%;font-size:'+(14+Math.random()*16)+'px;--d:'+(14+Math.random()*14)+'s;animation-delay:-'+Math.random()*20+'s">'+s.replace(/</g,'&lt;')+'</span>'});
bg.insertAdjacentHTML('beforeend',h);
/* wheels */
$$('.wh').forEach(function(g){var r=+g.dataset.r,s='<circle r="'+r+'" fill="#050508"/><circle r="'+r*.74+'" fill="#12121a" stroke="#9a9cc4" stroke-width="2"/><circle r="'+r*.52+'" fill="none" stroke="#e7222e" stroke-width="3"/><g class="sp"><circle r="'+r*.7+'" fill="none"/>';
 for(var a=0;a<5;a++)s+='<line x1="0" y1="0" x2="0" y2="'+(-r*.68)+'" stroke="#d6d6e6" stroke-width="'+r*.11+'" stroke-linecap="round" transform="rotate('+a*72+')"/>';
 g.innerHTML=s+'</g><circle r="'+r*.14+'" fill="#ff2a2a"/>'});
/* marquee */
var w=['HTML','CSS','3D Animations','Responsive','UI / UX','Figma','Clean Code'],m='';
w.forEach(function(x){m+='<span>'+x+'</span><span><em>✦</em></span>'});$('#mq').innerHTML=m+m+m+m;
/* scrub text */
var sc=$('#scrub'),words=[];
sc.dataset.t.split(' ').forEach(function(x){var s=document.createElement('span');s.textContent=x.replace(/\*/g,'')+' ';if(x.indexOf('*')>-1)s.className='hl';sc.appendChild(s);words.push(s)});
/* reveal, counters, rings */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;t.classList.add('in');
 $$('[data-n]',t).forEach(function(el){var n=+el.dataset.n,t0=performance.now();(function f(t){var p=cl((t-t0)/1500,0,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)});
 $$('[data-v]',t).forEach(function(p){p.style.setProperty('--v',p.dataset.v)});io.unobserve(t)})},{threshold:.2});
$$('.rv').forEach(function(el,i){el.style.transitionDelay=(i%4)*100+'ms';io.observe(el)});
/* scroll engine */
var bar=$('#bar'),work=$('#work'),tk=$('#tk'),cards=$$('.card'),dots=$$('#dots b'),tl=$('#tl'),fill=$('#fill'),busy=false,root=document.documentElement;
function up(){busy=false;var y=scrollY,H=innerHeight,max=root.scrollHeight-H;
 bar.style.transform='scaleX('+(max>0?y/max:0)+')';root.style.setProperty('--p',max>0?y/max:0);root.style.setProperty('--h',cl(y/H,0,1));var hp=cl(y/H,0,1),hx=$('#hx');hx.style.transform='translateY('+(-hp*140)+'px) scale('+(1-hp*.15)+')';hx.style.opacity=1-hp*1.2;
 $$('.ghost').forEach(function(g){var s=g.parentNode.getBoundingClientRect();g.style.transform='translateX('+((H-s.top)*.45*g.dataset.gx)+'px)'});
 $$('[data-sp]').forEach(function(e){var b=e.getBoundingClientRect(),o=(b.top+b.height/2-H/2);e.style.translate='0 '+(-o*e.dataset.sp)+'px'});
 var rd=$('#road'),cr=$('#cars').getBoundingClientRect(),cp=cl((H-cr.top)/(cr.height+H),0,1);$('.cs svg').style.translate=((cp-.5)*innerWidth*.45)+'px 0';$('#car').style.translate=(cp*(rd.clientWidth-70))+'px 0';
 $$('h2').forEach(function(e){var b=e.getBoundingClientRect(),c=1-Math.abs(b.top+b.height/2-H/2)/H;e.style.scale=(.82+.18*cl(c*1.4,0,1));e.style.transformOrigin='0 50%'});
 words.forEach(function(s){s.classList.toggle('on',s.getBoundingClientRect().top<H*.62)});
 var r=work.getBoundingClientRect(),p=cl(-r.top/(work.offsetHeight-H),0,1),dist=Math.max(0,tk.scrollWidth-innerWidth);
 tk.style.transform='translateX('+(-p*dist)+'px)';
 cards.forEach(function(c){var b=c.getBoundingClientRect(),d=cl(((b.left+b.width/2)-innerWidth/2)/innerWidth,-1,1);
  c.style.transform='rotateY('+(-d*28)+'deg) translateZ('+(-Math.abs(d)*110)+'px) scale('+(1-Math.abs(d)*.06)+')'});
 dots.forEach(function(d,i){d.style.width=cl(p*dots.length-i,0,1)*100+'%'});
 var tr=tl.getBoundingClientRect();fill.style.height=cl((H*.6-tr.top)/tr.height,0,1)*100+'%'}
function rq(){if(!busy){busy=true;requestAnimationFrame(up)}}
addEventListener('scroll',rq,{passive:true});addEventListener('resize',rq);up();
/* 3D tilt on hover + hero parallax */
$$('.tilt,.card').forEach(function(el){var base=el.classList.contains('card');
 el.addEventListener('pointermove',function(e){if(base)return;var b=el.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;el.style.transform='perspective(700px) rotateY('+x*18+'deg) rotateX('+(-y*18)+'deg) translateZ(10px)'});
 el.addEventListener('pointerleave',function(){if(!base)el.style.transform=''})});
var pw=$('#pw');
/* contact form: 1) Web3Forms -> straight to email  2) Netlify Forms  3) mail app fallback */
var WEB3KEY='YOUR_WEB3FORMS_ACCESS_KEY'; // free key from web3forms.com (enter ayanayanaftab777@gmail.com)
var f=$('#cf'),ms=$('#msg'),sb=$('#sb');
f.addEventListener('submit',function(e){e.preventDefault();if(f.bot.value)return;
 var d=new FormData(f),done=function(){sb.disabled=false;sb.textContent='Send message →'},
 ok=function(){ms.className='ok';ms.textContent='Thanks '+d.get('name')+'! Your message was sent. I’ll reply soon.';f.reset();done()};
 sb.disabled=true;sb.textContent='Sending…';ms.className='';ms.textContent='';
 var mail=function(){var s=encodeURIComponent('[Portfolio] '+(d.get('subject')||'Message from '+d.get('name')));
  var b=encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'));
  location.href='mailto:ayanayanaftab777@gmail.com?subject='+s+'&body='+b;ms.className='ok';ms.textContent='Your email app should open with the message ready. Just press send.';done()};
 var net=function(){fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(d).toString()}).then(function(r){if(!r.ok)throw 0;ok()}).catch(mail)};
 if(WEB3KEY.indexOf('YOUR_')!==0){
  fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({access_key:WEB3KEY,name:d.get('name'),email:d.get('email'),subject:d.get('subject')||'New portfolio message from '+d.get('name'),message:d.get('message'),botcheck:''})})
  .then(function(r){return r.json()}).then(function(j){if(j.success)ok();else net()}).catch(net)
 }else net()});
})();