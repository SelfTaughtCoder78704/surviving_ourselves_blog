import{S as Ke,i as Qe,s as Ye,k as n,a as T,q as m,l as i,m as f,c as $,r as p,h as a,D as ue,n as s,b as R,E as e,B as ie,J as lt,e as Fe,K as re,f as W,t as ae,d as Ue,L as Se,w as Ze,x as xe,y as et,z as tt,g as We}from"../../chunks/index-89f9461d.js";function Ge(c,t,r){const o=c.slice();return o[6]=t[r],o}function Xe(c){let t,r=c[6].crime+"",o,_,h=c[6].count+"",l;return{c(){t=n("li"),o=m(r),_=m(": "),l=m(h),this.h()},l(g){t=i(g,"LI",{class:!0});var b=f(t);o=p(b,r),_=p(b,": "),l=p(b,h),b.forEach(a),this.h()},h(){s(t,"class","svelte-1qc2lib")},m(g,b){R(g,t,b),e(t,o),e(t,_),e(t,l)},p:ie,d(g){g&&a(t)}}}function at(c){let t,r,o,_,h,l,g,b,A,v,q,J,I,G,X,B,L,O,P,w,D=c[2],y=[];for(let k=0;k<D.length;k+=1)y[k]=Xe(Ge(c,D,k));return{c(){t=n("div"),r=n("img"),_=T(),h=n("div"),l=n("h2"),g=m(c[0]),b=T(),A=n("p"),v=m("Age: "),q=m(c[1]),J=T(),I=n("p"),G=m("Crime Stats:"),X=T(),B=n("ul");for(let k=0;k<y.length;k+=1)y[k].c();L=T(),O=n("p"),P=m("Time Served: "),w=m(c[4]),this.h()},l(k){t=i(k,"DIV",{class:!0});var V=f(t);r=i(V,"IMG",{src:!0,alt:!0,class:!0}),_=$(V),h=i(V,"DIV",{class:!0});var d=f(h);l=i(d,"H2",{class:!0});var C=f(l);g=p(C,c[0]),C.forEach(a),b=$(d),A=i(d,"P",{class:!0});var z=f(A);v=p(z,"Age: "),q=p(z,c[1]),z.forEach(a),J=$(d),I=i(d,"P",{class:!0});var te=f(I);G=p(te,"Crime Stats:"),te.forEach(a),X=$(d),B=i(d,"UL",{class:!0});var H=f(B);for(let Q=0;Q<y.length;Q+=1)y[Q].l(H);H.forEach(a),L=$(d),O=i(d,"P",{class:!0});var K=f(O);P=p(K,"Time Served: "),w=p(K,c[4]),K.forEach(a),d.forEach(a),V.forEach(a),this.h()},h(){ue(r.src,o=c[3])||s(r,"src",o),s(r,"alt",c[0]+" mugshot"),s(r,"class","svelte-1qc2lib"),s(l,"class","svelte-1qc2lib"),s(A,"class","svelte-1qc2lib"),s(I,"class","svelte-1qc2lib"),s(B,"class","svelte-1qc2lib"),s(O,"class","svelte-1qc2lib"),s(h,"class","content svelte-1qc2lib"),s(t,"class","brother-card svelte-1qc2lib")},m(k,V){R(k,t,V),e(t,r),e(t,_),e(t,h),e(h,l),e(l,g),e(h,b),e(h,A),e(A,v),e(A,q),e(h,J),e(h,I),e(I,G),e(h,X),e(h,B);for(let d=0;d<y.length;d+=1)y[d].m(B,null);e(h,L),e(h,O),e(O,P),e(O,w)},p(k,[V]){if(V&4){D=k[2];let d;for(d=0;d<D.length;d+=1){const C=Ge(k,D,d);y[d]?y[d].p(C,V):(y[d]=Xe(C),y[d].c(),y[d].m(B,null))}for(;d<y.length;d+=1)y[d].d(1);y.length=D.length}},i:ie,o:ie,d(k){k&&a(t),lt(y,k)}}}function rt(c,t,r){let{brother:o}=t;const{name:_,age:h,crimeStats:l,image:g,timeServed:b}=o;return c.$$set=A=>{"brother"in A&&r(5,o=A.brother)},[_,h,l,g,b,o]}class st extends Ke{constructor(t){super(),Qe(this,t,rt,at,Ye,{brother:5})}}function Le(c){let t,r,o,_,h,l,g,b,A;return l=new st({props:{brother:c[2]}}),{c(){t=n("div"),r=n("div"),o=n("button"),_=m("X"),h=T(),Ze(l.$$.fragment),this.h()},l(v){t=i(v,"DIV",{class:!0});var q=f(t);r=i(q,"DIV",{class:!0});var J=f(r);o=i(J,"BUTTON",{class:!0});var I=f(o);_=p(I,"X"),I.forEach(a),J.forEach(a),h=$(q),xe(l.$$.fragment,q),q.forEach(a),this.h()},h(){s(o,"class","svelte-jw1qtd"),s(r,"class","closeModal svelte-jw1qtd"),s(t,"class","modal svelte-jw1qtd")},m(v,q){R(v,t,q),e(t,r),e(r,o),e(o,_),e(t,h),et(l,t,null),g=!0,b||(A=[re(o,"click",c[4]),re(t,"click",c[4])],b=!0)},p:ie,i(v){g||(W(l.$$.fragment,v),g=!0)},o(v){ae(l.$$.fragment,v),g=!1},d(v){v&&a(t),tt(l),b=!1,Se(A)}}}function ze(c){let t,r,o,_,h,l,g,b,A;return l=new st({props:{brother:c[3]}}),{c(){t=n("div"),r=n("div"),o=n("button"),_=m("X"),h=T(),Ze(l.$$.fragment),this.h()},l(v){t=i(v,"DIV",{class:!0});var q=f(t);r=i(q,"DIV",{class:!0});var J=f(r);o=i(J,"BUTTON",{class:!0});var I=f(o);_=p(I,"X"),I.forEach(a),J.forEach(a),h=$(q),xe(l.$$.fragment,q),q.forEach(a),this.h()},h(){s(o,"class","svelte-jw1qtd"),s(r,"class","closeModal svelte-jw1qtd"),s(t,"class","modal svelte-jw1qtd")},m(v,q){R(v,t,q),e(t,r),e(r,o),e(o,_),e(t,h),et(l,t,null),g=!0,b||(A=[re(o,"click",c[5]),re(t,"click",c[5])],b=!0)},p:ie,i(v){g||(W(l.$$.fragment,v),g=!0)},o(v){ae(l.$$.fragment,v),g=!1},d(v){v&&a(t),tt(l),b=!1,Se(A)}}}function nt(c){let t,r,o,_,h,l,g,b,A,v,q,J,I,G,X,B,L,O,P,w,D,y,k,V,d,C,z,te,H,K,Q,Y,M,Te,fe,de,Z,F,$e,ve,ge,me,pe,x,ne,_e,be,we,ye,ee,ke,oe,se,le,ce,qe,Be,E=c[0]&&Le(c),j=c[1]&&ze(c);return{c(){t=n("div"),r=n("img"),_=T(),h=n("div"),l=n("div"),g=n("h1"),b=m(`"Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two
        Brothers on the Run in 2000s Austin"`),A=T(),v=n("h2"),q=m("Written by an AI - Directed by a Human"),J=T(),I=n("p"),G=m("Read the first chapter now."),X=T(),B=n("a"),L=m("Chapter 1: The Night It All Began"),O=T(),P=n("main"),w=n("p"),D=n("span"),y=n("span"),k=m("J"),V=m("oin us"),d=m(` as we take
    you on a journey through the gritty streets of
    `),C=n("a"),z=m("Austin"),te=m(`
    in the 2000s,
    `),H=n("span"),K=m("in a work of fiction"),Q=m(`. Follow the story of
    two half-brothers,
    `),Y=n("span"),M=n("img"),fe=m(" Alex"),de=m(`
    and
    `),Z=n("span"),F=n("img"),ve=m(" Jake."),ge=T(),me=n("br"),pe=T(),x=n("span"),ne=n("i"),_e=m("Surviving Ourselves"),be=m(". Directed by a human and using AI,"),we=m(` the story follows the brothers, as they navigate the challenges of living on
    the run and being homeless after serving time in juvenile prison. They struggle
    to make ends meet, often resorting to selling drugs and trading for a place to
    sleep. The brothers will be faced with difficult decisions, unexpected allies,
    and the constant threat of being caught by the law. Our blog offers a raw and
    intimate look at life on the margins, the resilience it takes to survive, and
    the tension of being constantly on the run. Join us as we uncover the harsh realities
    of life on the streets and the human spirit's ability to endure.`),ye=T(),ee=n("a"),ke=m("Chapter 1: The Night It All Began"),oe=T(),E&&E.c(),se=T(),j&&j.c(),le=Fe(),this.h()},l(u){t=i(u,"DIV",{class:!0});var S=f(t);r=i(S,"IMG",{src:!0,alt:!0,class:!0}),_=$(S),h=i(S,"DIV",{class:!0});var Ne=f(h);l=i(Ne,"DIV",{class:!0});var U=f(l);g=i(U,"H1",{class:!0});var De=f(g);b=p(De,`"Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two
        Brothers on the Run in 2000s Austin"`),De.forEach(a),A=$(U),v=i(U,"H2",{class:!0});var Je=f(v);q=p(Je,"Written by an AI - Directed by a Human"),Je.forEach(a),J=$(U),I=i(U,"P",{class:!0});var Pe=f(I);G=p(Pe,"Read the first chapter now."),Pe.forEach(a),X=$(U),B=i(U,"A",{class:!0,href:!0});var Ve=f(B);L=p(Ve,"Chapter 1: The Night It All Began"),Ve.forEach(a),U.forEach(a),Ne.forEach(a),S.forEach(a),O=$(u),P=i(u,"MAIN",{class:!0});var he=f(P);w=i(he,"P",{class:!0});var N=f(w);D=i(N,"SPAN",{class:!0});var Ae=f(D);y=i(Ae,"SPAN",{class:!0});var Ce=f(y);k=p(Ce,"J"),Ce.forEach(a),V=p(Ae,"oin us"),Ae.forEach(a),d=p(N,` as we take
    you on a journey through the gritty streets of
    `),C=i(N,"A",{href:!0,class:!0});var Oe=f(C);z=p(Oe,"Austin"),Oe.forEach(a),te=p(N,`
    in the 2000s,
    `),H=i(N,"SPAN",{class:!0});var Re=f(H);K=p(Re,"in a work of fiction"),Re.forEach(a),Q=p(N,`. Follow the story of
    two half-brothers,
    `),Y=i(N,"SPAN",{class:!0});var Ee=f(Y);M=i(Ee,"IMG",{src:!0,alt:!0,class:!0}),fe=p(Ee," Alex"),Ee.forEach(a),de=p(N,`
    and
    `),Z=i(N,"SPAN",{class:!0});var je=f(Z);F=i(je,"IMG",{src:!0,alt:!0,class:!0}),ve=p(je," Jake."),je.forEach(a),ge=$(N),me=i(N,"BR",{}),pe=$(N),x=i(N,"SPAN",{class:!0});var Ie=f(x);ne=i(Ie,"I",{});var He=f(ne);_e=p(He,"Surviving Ourselves"),He.forEach(a),be=p(Ie,". Directed by a human and using AI,"),Ie.forEach(a),we=p(N,` the story follows the brothers, as they navigate the challenges of living on
    the run and being homeless after serving time in juvenile prison. They struggle
    to make ends meet, often resorting to selling drugs and trading for a place to
    sleep. The brothers will be faced with difficult decisions, unexpected allies,
    and the constant threat of being caught by the law. Our blog offers a raw and
    intimate look at life on the margins, the resilience it takes to survive, and
    the tension of being constantly on the run. Join us as we uncover the harsh realities
    of life on the streets and the human spirit's ability to endure.`),N.forEach(a),ye=$(he),ee=i(he,"A",{class:!0,href:!0});var Me=f(ee);ke=p(Me,"Chapter 1: The Night It All Began"),Me.forEach(a),he.forEach(a),oe=$(u),E&&E.l(u),se=$(u),j&&j.l(u),le=Fe(),this.h()},h(){ue(r.src,o="/chapter_1.png")||s(r,"src",o),s(r,"alt","Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two Brothers on the Run in 2000s Austin cover art"),s(r,"class","svelte-jw1qtd"),s(g,"class","svelte-jw1qtd"),s(v,"class","svelte-jw1qtd"),s(I,"class","svelte-jw1qtd"),s(B,"class","button svelte-jw1qtd"),s(B,"href","/blog/chapter-1-the-night-it-all-began"),s(l,"class","overlay-content svelte-jw1qtd"),s(h,"class","overlay svelte-jw1qtd"),s(t,"class","top svelte-jw1qtd"),s(y,"class","giant svelte-jw1qtd"),s(D,"class","big-story svelte-jw1qtd"),s(C,"href","https://en.wikipedia.org/wiki/Austin,_Texas"),s(C,"class","svelte-jw1qtd"),s(H,"class","big-story svelte-jw1qtd"),ue(M.src,Te="/lighter.png")||s(M,"src",Te),s(M,"alt","Alex's Icon"),s(M,"class","svelte-jw1qtd"),s(Y,"class","icon big-story svelte-jw1qtd"),ue(F.src,$e="/darker.png")||s(F,"src",$e),s(F,"alt","Jake's Icon"),s(F,"class","svelte-jw1qtd"),s(Z,"class","icon big-story svelte-jw1qtd"),s(x,"class","big-story svelte-jw1qtd"),s(w,"class","svelte-jw1qtd"),s(ee,"class","button svelte-jw1qtd"),s(ee,"href","/blog/chapter-1-the-night-it-all-began"),s(P,"class","svelte-jw1qtd")},m(u,S){R(u,t,S),e(t,r),e(t,_),e(t,h),e(h,l),e(l,g),e(g,b),e(l,A),e(l,v),e(v,q),e(l,J),e(l,I),e(I,G),e(l,X),e(l,B),e(B,L),R(u,O,S),R(u,P,S),e(P,w),e(w,D),e(D,y),e(y,k),e(D,V),e(w,d),e(w,C),e(C,z),e(w,te),e(w,H),e(H,K),e(w,Q),e(w,Y),e(Y,M),e(Y,fe),e(w,de),e(w,Z),e(Z,F),e(Z,ve),e(w,ge),e(w,me),e(w,pe),e(w,x),e(x,ne),e(ne,_e),e(x,be),e(w,we),e(P,ye),e(P,ee),e(ee,ke),R(u,oe,S),E&&E.m(u,S),R(u,se,S),j&&j.m(u,S),R(u,le,S),ce=!0,qe||(Be=[re(M,"click",c[4]),re(F,"click",c[5])],qe=!0)},p(u,[S]){u[0]?E?(E.p(u,S),S&1&&W(E,1)):(E=Le(u),E.c(),W(E,1),E.m(se.parentNode,se)):E&&(We(),ae(E,1,1,()=>{E=null}),Ue()),u[1]?j?(j.p(u,S),S&2&&W(j,1)):(j=ze(u),j.c(),W(j,1),j.m(le.parentNode,le)):j&&(We(),ae(j,1,1,()=>{j=null}),Ue())},i(u){ce||(W(E),W(j),ce=!0)},o(u){ae(E),ae(j),ce=!1},d(u){u&&a(t),u&&a(O),u&&a(P),u&&a(oe),E&&E.d(u),u&&a(se),j&&j.d(u),u&&a(le),qe=!1,Se(Be)}}}function it(c,t,r){let o=!1,_=!1;return[o,_,{name:"Alex",age:16,crimeStats:[{crime:"Assault",count:3},{crime:"Burglary",count:2},{crime:"Theft",count:1},{crime:"Unauthorized Use of a Motor Vehicle",count:1}],image:"/lighter.png",timeServed:"18 months"},{name:"Jake",age:16,crimeStats:[{crime:"Assault",count:2},{crime:"Burglary",count:1},{crime:"Theft",count:1}],image:"/darker.png",timeServed:"1 year"},()=>{r(0,o=!o)},()=>{r(1,_=!_)}]}class ct extends Ke{constructor(t){super(),Qe(this,t,it,nt,Ye,{})}}export{ct as default};
