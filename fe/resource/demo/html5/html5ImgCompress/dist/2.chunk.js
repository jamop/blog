webpackJsonp([2],{2:function(t,e){function a(t){function e(t){for(var e=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],a=0;64>a;a++){var r=k((e[a]*t+50)/100);1>r?r=1:r>255&&(r=255),A[F[a]]=r}for(var n=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],i=0;64>i;i++){var o=k((n[i]*t+50)/100);1>o?o=1:o>255&&(o=255),U[F[i]]=o}for(var c=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],h=0,s=0;8>s;s++)for(var f=0;8>f;f++)R[h]=1/(A[F[h]]*c[s]*c[f]*8),M[h]=1/(U[F[h]]*c[s]*c[f]*8),h++}function a(t,e){for(var a=0,r=0,n=new Array,i=1;16>=i;i++){for(var o=1;o<=t[i];o++)n[e[r]]=[],n[e[r]][0]=a,n[e[r]][1]=i,r++,a++;a*=2}return n}function r(){b=a(q,B),y=a(Q,G),L=a(z,_),x=a(K,V)}function n(){for(var t=1,e=2,a=1;15>=a;a++){for(var r=t;e>r;r++)j[32767+r]=a,E[32767+r]=[],E[32767+r][1]=a,E[32767+r][0]=r;for(var n=-(e-1);-t>=n;n++)j[32767+n]=a,E[32767+n]=[],E[32767+n][1]=a,E[32767+n][0]=e-1+n;t<<=1,e<<=1}}function i(){for(var t=0;256>t;t++)N[t]=19595*t,N[t+256>>0]=38470*t,N[t+512>>0]=7471*t+32768,N[t+768>>0]=-11059*t,N[t+1024>>0]=-21709*t,N[t+1280>>0]=32768*t+8421375,N[t+1536>>0]=-27439*t,N[t+1792>>0]=-5329*t}function o(t){for(var e=t[0],a=t[1]-1;a>=0;)e&1<<a&&(H|=1<<W),a--,W--,0>W&&(255==H?(c(255),c(0)):c(H),W=7,H=0)}function c(t){C.push(J[t])}function h(t){c(t>>8&255),c(255&t)}function s(t,e){var a,r,n,i,o,c,h,s,f,u=0;const d=8,l=64;for(f=0;d>f;++f){a=t[u],r=t[u+1],n=t[u+2],i=t[u+3],o=t[u+4],c=t[u+5],h=t[u+6],s=t[u+7];var g=a+s,v=a-s,w=r+h,m=r-h,p=n+c,b=n-c,y=i+o,L=i-o,x=g+y,I=g-y,k=w+p,A=w-p;t[u]=x+k,t[u+4]=x-k;var U=.707106781*(A+I);t[u+2]=I+U,t[u+6]=I-U,x=L+b,k=b+m,A=m+v;var R=.382683433*(x-A),M=.5411961*x+R,E=1.306562965*A+R,j=.707106781*k,D=v+j,C=v-j;t[u+5]=C+M,t[u+3]=C-M,t[u+1]=D+E,t[u+7]=D-E,u+=8}for(u=0,f=0;d>f;++f){a=t[u],r=t[u+8],n=t[u+16],i=t[u+24],o=t[u+32],c=t[u+40],h=t[u+48],s=t[u+56];var H=a+s,W=a-s,T=r+h,P=r-h,S=n+c,J=n-c,N=i+o,F=i-o,q=H+N,B=H-N,z=T+S,_=T-S;t[u]=q+z,t[u+32]=q-z;var Q=.707106781*(_+B);t[u+16]=B+Q,t[u+48]=B-Q,q=F+J,z=J+P,_=P+W;var G=.382683433*(q-_),K=.5411961*q+G,V=1.306562965*_+G,X=.707106781*z,Y=W+X,Z=W-X;t[u+40]=Z+K,t[u+24]=Z-K,t[u+8]=Y+V,t[u+56]=Y-V,u++}var $;for(f=0;l>f;++f)$=t[f]*e[f],O[f]=$>0?$+.5|0:$-.5|0;return O}function f(){h(65504),h(16),c(74),c(70),c(73),c(70),c(0),c(1),c(1),c(0),h(1),h(1),c(0),c(0)}function u(t,e){h(65472),h(17),c(8),h(e),h(t),c(3),c(1),c(17),c(0),c(2),c(17),c(1),c(3),c(17),c(1)}function d(){h(65499),h(132),c(0);for(var t=0;64>t;t++)c(A[t]);c(1);for(var e=0;64>e;e++)c(U[e])}function l(){h(65476),h(418),c(0);for(var t=0;16>t;t++)c(q[t+1]);for(var e=0;11>=e;e++)c(B[e]);c(16);for(var a=0;16>a;a++)c(z[a+1]);for(var r=0;161>=r;r++)c(_[r]);c(1);for(var n=0;16>n;n++)c(Q[n+1]);for(var i=0;11>=i;i++)c(G[i]);c(17);for(var o=0;16>o;o++)c(K[o+1]);for(var s=0;161>=s;s++)c(V[s])}function g(){h(65498),h(12),c(3),c(1),c(0),c(2),c(17),c(3),c(17),c(0),c(63),c(0)}function v(t,e,a,r,n){var i,c=n[0],h=n[240];const f=16,u=63,d=64;for(var l=s(t,e),g=0;d>g;++g)D[F[g]]=l[g];var v=D[0]-a;a=D[0],0==v?o(r[0]):(i=32767+v,o(r[j[i]]),o(E[i]));for(var w=63;w>0&&0==D[w];w--);if(0==w)return o(c),a;for(var m,p=1;w>=p;){for(var b=p;0==D[p]&&w>=p;++p);var y=p-b;if(y>=f){m=y>>4;for(var L=1;m>=L;++L)o(h);y=15&y}i=32767+D[p],o(n[(y<<4)+j[i]]),o(E[i]),p++}return w!=u&&o(c),a}function w(){for(var t=String.fromCharCode,e=0;256>e;e++)J[e]=t(e)}function m(t){if(0>=t&&(t=1),t>100&&(t=100),I!=t){var a=0;a=50>t?Math.floor(5e3/t):Math.floor(200-2*t),e(a),I=t,console.log("Quality set to: "+t+"%")}}function p(){var e=(new Date).getTime();t||(t=50),w(),r(),n(),i(),m(t);var a=(new Date).getTime()-e;console.log("Initialization "+a+"ms")}var b,y,L,x,I,k=(Math.round,Math.floor),A=new Array(64),U=new Array(64),R=new Array(64),M=new Array(64),E=new Array(65535),j=new Array(65535),O=new Array(64),D=new Array(64),C=[],H=0,W=7,T=new Array(64),P=new Array(64),S=new Array(64),J=new Array(256),N=new Array(2048),F=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],q=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],B=[0,1,2,3,4,5,6,7,8,9,10,11],z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],_=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],Q=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],G=[0,1,2,3,4,5,6,7,8,9,10,11],K=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],V=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(t,e,a){var r=(new Date).getTime();e&&m(e),C=new Array,H=0,W=7,h(65496),f(),d(),u(t.width,t.height),l(),g();var n=0,i=0,c=0;H=0,W=7,this.encode.displayName="_encode_";for(var s,w,p,I,k,A,U,E,j,O=t.data,D=t.width,J=t.height,F=4*D,q=0;J>q;){for(s=0;F>s;){for(k=F*q+s,A=k,U=-1,E=0,j=0;64>j;j++)E=j>>3,U=4*(7&j),A=k+E*F+U,q+E>=J&&(A-=F*(q+1+E-J)),s+U>=F&&(A-=s+U-F+4),w=O[A++],p=O[A++],I=O[A++],T[j]=(N[w]+N[p+256>>0]+N[I+512>>0]>>16)-128,P[j]=(N[w+768>>0]+N[p+1024>>0]+N[I+1280>>0]>>16)-128,S[j]=(N[w+1280>>0]+N[p+1536>>0]+N[I+1792>>0]>>16)-128;n=v(T,R,n,b,L),i=v(P,M,i,y,x),c=v(S,M,c,y,x),s+=32}q+=8}if(W>=0){var B=[];B[1]=W+1,B[0]=(1<<W+1)-1,o(B)}if(h(65497),a){for(var z=C.length,_=new Uint8Array(z),Q=0;z>Q;Q++)_[Q]=C[Q].charCodeAt();C=[];var G=(new Date).getTime()-r;return console.log("Encoding time: "+G+"ms"),_}var K="data:image/jpeg;base64,"+btoa(C.join(""));C=[];var G=(new Date).getTime()-r;return console.log("Encoding time: "+G+"ms"),K},p()}t.exports=a}});