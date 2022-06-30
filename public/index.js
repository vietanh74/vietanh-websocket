var vietanhWebsocket;(()=>{var e={431:function(e,t,r){var n;!function(i){"use strict";var o,s=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,u=Math.ceil,c=Math.floor,l="[BigNumber Error] ",f=l+"Number primitive has more than 15 significant digits: ",a=1e14,h=14,p=9007199254740991,g=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],d=1e7,v=1e9;function b(e){var t=0|e;return e>0||e===t?t:t-1}function y(e){for(var t,r,n=1,i=e.length,o=e[0]+"";n<i;){for(t=e[n++]+"",r=h-t.length;r--;t="0"+t);o+=t}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function w(e,t){var r,n,i=e.c,o=t.c,s=e.s,u=t.s,c=e.e,l=t.e;if(!s||!u)return null;if(r=i&&!i[0],n=o&&!o[0],r||n)return r?n?0:-u:s;if(s!=u)return s;if(r=s<0,n=c==l,!i||!o)return n?0:!i^r?1:-1;if(!n)return c>l^r?1:-1;for(u=(c=i.length)<(l=o.length)?c:l,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^r?1:-1;return c==l?0:c>l^r?1:-1}function m(e,t,r,n){if(e<t||e>r||e!==c(e))throw Error(l+(n||"Argument")+("number"==typeof e?e<t||e>r?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function A(e){var t=e.c.length-1;return b(e.e/h)==t&&e.c[t]%2!=0}function S(e,t){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(t<0?"e":"e+")+t}function O(e,t,r){var n,i;if(t<0){for(i=r+".";++t;i+=r);e=i+e}else if(++t>(n=e.length)){for(i=r,t-=n;--t;i+=r);e+=i}else t<n&&(e=e.slice(0,t)+"."+e.slice(t));return e}o=function e(t){var r,n,i,o,E,N,B,I,x,j,P=q.prototype={constructor:q,toString:null,valueOf:null},C=new q(1),_=20,R=4,L=-7,M=21,T=-1e7,U=1e7,D=!1,F=1,k=0,$={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},G="0123456789abcdefghijklmnopqrstuvwxyz",H=!0;function q(e,t){var r,o,u,l,a,g,d,v,b=this;if(!(b instanceof q))return new q(e,t);if(null==t){if(e&&!0===e._isBigNumber)return b.s=e.s,void(!e.c||e.e>U?b.c=b.e=null:e.e<T?b.c=[b.e=0]:(b.e=e.e,b.c=e.c.slice()));if((g="number"==typeof e)&&0*e==0){if(b.s=1/e<0?(e=-e,-1):1,e===~~e){for(l=0,a=e;a>=10;a/=10,l++);return void(l>U?b.c=b.e=null:(b.e=l,b.c=[e]))}v=String(e)}else{if(!s.test(v=String(e)))return i(b,v,g);b.s=45==v.charCodeAt(0)?(v=v.slice(1),-1):1}(l=v.indexOf("."))>-1&&(v=v.replace(".","")),(a=v.search(/e/i))>0?(l<0&&(l=a),l+=+v.slice(a+1),v=v.substring(0,a)):l<0&&(l=v.length)}else{if(m(t,2,G.length,"Base"),10==t&&H)return W(b=new q(e),_+b.e+1,R);if(v=String(e),g="number"==typeof e){if(0*e!=0)return i(b,v,g,t);if(b.s=1/e<0?(v=v.slice(1),-1):1,q.DEBUG&&v.replace(/^0\.0*|\./,"").length>15)throw Error(f+e)}else b.s=45===v.charCodeAt(0)?(v=v.slice(1),-1):1;for(r=G.slice(0,t),l=a=0,d=v.length;a<d;a++)if(r.indexOf(o=v.charAt(a))<0){if("."==o){if(a>l){l=d;continue}}else if(!u&&(v==v.toUpperCase()&&(v=v.toLowerCase())||v==v.toLowerCase()&&(v=v.toUpperCase()))){u=!0,a=-1,l=0;continue}return i(b,String(e),g,t)}g=!1,(l=(v=n(v,t,10,b.s)).indexOf("."))>-1?v=v.replace(".",""):l=v.length}for(a=0;48===v.charCodeAt(a);a++);for(d=v.length;48===v.charCodeAt(--d););if(v=v.slice(a,++d)){if(d-=a,g&&q.DEBUG&&d>15&&(e>p||e!==c(e)))throw Error(f+b.s*e);if((l=l-a-1)>U)b.c=b.e=null;else if(l<T)b.c=[b.e=0];else{if(b.e=l,b.c=[],a=(l+1)%h,l<0&&(a+=h),a<d){for(a&&b.c.push(+v.slice(0,a)),d-=h;a<d;)b.c.push(+v.slice(a,a+=h));a=h-(v=v.slice(a)).length}else a-=d;for(;a--;v+="0");b.c.push(+v)}}else b.c=[b.e=0]}function z(e,t,r,n){var i,o,s,u,c;if(null==r?r=R:m(r,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==t)c=y(e.c),c=1==n||2==n&&(s<=L||s>=M)?S(c,s):O(c,s,"0");else if(o=(e=W(new q(e),t,r)).e,u=(c=y(e.c)).length,1==n||2==n&&(t<=o||o<=L)){for(;u<t;c+="0",u++);c=S(c,o)}else if(t-=s,c=O(c,o,"0"),o+1>u){if(--t>0)for(c+=".";t--;c+="0");}else if((t+=o-u)>0)for(o+1==u&&(c+=".");t--;c+="0");return e.s<0&&i?"-"+c:c}function Q(e,t){for(var r,n=1,i=new q(e[0]);n<e.length;n++){if(!(r=new q(e[n])).s){i=r;break}t.call(i,r)&&(i=r)}return i}function V(e,t,r){for(var n=1,i=t.length;!t[--i];t.pop());for(i=t[0];i>=10;i/=10,n++);return(r=n+r*h-1)>U?e.c=e.e=null:r<T?e.c=[e.e=0]:(e.e=r,e.c=t),e}function W(e,t,r,n){var i,o,s,l,f,p,d,v=e.c,b=g;if(v){e:{for(i=1,l=v[0];l>=10;l/=10,i++);if((o=t-i)<0)o+=h,s=t,d=(f=v[p=0])/b[i-s-1]%10|0;else if((p=u((o+1)/h))>=v.length){if(!n)break e;for(;v.length<=p;v.push(0));f=d=0,i=1,s=(o%=h)-h+1}else{for(f=l=v[p],i=1;l>=10;l/=10,i++);d=(s=(o%=h)-h+i)<0?0:f/b[i-s-1]%10|0}if(n=n||t<0||null!=v[p+1]||(s<0?f:f%b[i-s-1]),n=r<4?(d||n)&&(0==r||r==(e.s<0?3:2)):d>5||5==d&&(4==r||n||6==r&&(o>0?s>0?f/b[i-s]:0:v[p-1])%10&1||r==(e.s<0?8:7)),t<1||!v[0])return v.length=0,n?(t-=e.e+1,v[0]=b[(h-t%h)%h],e.e=-t||0):v[0]=e.e=0,e;if(0==o?(v.length=p,l=1,p--):(v.length=p+1,l=b[h-o],v[p]=s>0?c(f/b[i-s]%b[s])*l:0),n)for(;;){if(0==p){for(o=1,s=v[0];s>=10;s/=10,o++);for(s=v[0]+=l,l=1;s>=10;s/=10,l++);o!=l&&(e.e++,v[0]==a&&(v[0]=1));break}if(v[p]+=l,v[p]!=a)break;v[p--]=0,l=1}for(o=v.length;0===v[--o];v.pop());}e.e>U?e.c=e.e=null:e.e<T&&(e.c=[e.e=0])}return e}function J(e){var t,r=e.e;return null===r?e.toString():(t=y(e.c),t=r<=L||r>=M?S(t,r):O(t,r,"0"),e.s<0?"-"+t:t)}return q.clone=e,q.ROUND_UP=0,q.ROUND_DOWN=1,q.ROUND_CEIL=2,q.ROUND_FLOOR=3,q.ROUND_HALF_UP=4,q.ROUND_HALF_DOWN=5,q.ROUND_HALF_EVEN=6,q.ROUND_HALF_CEIL=7,q.ROUND_HALF_FLOOR=8,q.EUCLID=9,q.config=q.set=function(e){var t,r;if(null!=e){if("object"!=typeof e)throw Error(l+"Object expected: "+e);if(e.hasOwnProperty(t="DECIMAL_PLACES")&&(m(r=e[t],0,v,t),_=r),e.hasOwnProperty(t="ROUNDING_MODE")&&(m(r=e[t],0,8,t),R=r),e.hasOwnProperty(t="EXPONENTIAL_AT")&&((r=e[t])&&r.pop?(m(r[0],-v,0,t),m(r[1],0,v,t),L=r[0],M=r[1]):(m(r,-v,v,t),L=-(M=r<0?-r:r))),e.hasOwnProperty(t="RANGE"))if((r=e[t])&&r.pop)m(r[0],-v,-1,t),m(r[1],1,v,t),T=r[0],U=r[1];else{if(m(r,-v,v,t),!r)throw Error(l+t+" cannot be zero: "+r);T=-(U=r<0?-r:r)}if(e.hasOwnProperty(t="CRYPTO")){if((r=e[t])!==!!r)throw Error(l+t+" not true or false: "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw D=!r,Error(l+"crypto unavailable");D=r}else D=r}if(e.hasOwnProperty(t="MODULO_MODE")&&(m(r=e[t],0,9,t),F=r),e.hasOwnProperty(t="POW_PRECISION")&&(m(r=e[t],0,v,t),k=r),e.hasOwnProperty(t="FORMAT")){if("object"!=typeof(r=e[t]))throw Error(l+t+" not an object: "+r);$=r}if(e.hasOwnProperty(t="ALPHABET")){if("string"!=typeof(r=e[t])||/^.?$|[+\-.\s]|(.).*\1/.test(r))throw Error(l+t+" invalid: "+r);H="0123456789"==r.slice(0,10),G=r}}return{DECIMAL_PLACES:_,ROUNDING_MODE:R,EXPONENTIAL_AT:[L,M],RANGE:[T,U],CRYPTO:D,MODULO_MODE:F,POW_PRECISION:k,FORMAT:$,ALPHABET:G}},q.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!q.DEBUG)return!0;var t,r,n=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(n)){if((1===o||-1===o)&&i>=-v&&i<=v&&i===c(i)){if(0===n[0]){if(0===i&&1===n.length)return!0;break e}if((t=(i+1)%h)<1&&(t+=h),String(n[0]).length==t){for(t=0;t<n.length;t++)if((r=n[t])<0||r>=a||r!==c(r))break e;if(0!==r)return!0}}}else if(null===n&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(l+"Invalid BigNumber: "+e)},q.maximum=q.max=function(){return Q(arguments,P.lt)},q.minimum=q.min=function(){return Q(arguments,P.gt)},q.random=(o=9007199254740992,E=Math.random()*o&2097151?function(){return c(Math.random()*o)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)},function(e){var t,r,n,i,o,s=0,f=[],a=new q(C);if(null==e?e=_:m(e,0,v),i=u(e/h),D)if(crypto.getRandomValues){for(t=crypto.getRandomValues(new Uint32Array(i*=2));s<i;)(o=131072*t[s]+(t[s+1]>>>11))>=9e15?(r=crypto.getRandomValues(new Uint32Array(2)),t[s]=r[0],t[s+1]=r[1]):(f.push(o%1e14),s+=2);s=i/2}else{if(!crypto.randomBytes)throw D=!1,Error(l+"crypto unavailable");for(t=crypto.randomBytes(i*=7);s<i;)(o=281474976710656*(31&t[s])+1099511627776*t[s+1]+4294967296*t[s+2]+16777216*t[s+3]+(t[s+4]<<16)+(t[s+5]<<8)+t[s+6])>=9e15?crypto.randomBytes(7).copy(t,s):(f.push(o%1e14),s+=7);s=i/7}if(!D)for(;s<i;)(o=E())<9e15&&(f[s++]=o%1e14);for(i=f[--s],e%=h,i&&e&&(o=g[h-e],f[s]=c(i/o)*o);0===f[s];f.pop(),s--);if(s<0)f=[n=0];else{for(n=-1;0===f[0];f.splice(0,1),n-=h);for(s=1,o=f[0];o>=10;o/=10,s++);s<h&&(n-=h-s)}return a.e=n,a.c=f,a}),q.sum=function(){for(var e=1,t=arguments,r=new q(t[0]);e<t.length;)r=r.plus(t[e++]);return r},n=function(){var e="0123456789";function t(e,t,r,n){for(var i,o,s=[0],u=0,c=e.length;u<c;){for(o=s.length;o--;s[o]*=t);for(s[0]+=n.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>r-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/r|0,s[i]%=r)}return s.reverse()}return function(n,i,o,s,u){var c,l,f,a,h,p,g,d,v=n.indexOf("."),b=_,w=R;for(v>=0&&(a=k,k=0,n=n.replace(".",""),p=(d=new q(i)).pow(n.length-v),k=a,d.c=t(O(y(p.c),p.e,"0"),10,o,e),d.e=d.c.length),f=a=(g=t(n,i,o,u?(c=G,e):(c=e,G))).length;0==g[--a];g.pop());if(!g[0])return c.charAt(0);if(v<0?--f:(p.c=g,p.e=f,p.s=s,g=(p=r(p,d,b,w,o)).c,h=p.r,f=p.e),v=g[l=f+b+1],a=o/2,h=h||l<0||null!=g[l+1],h=w<4?(null!=v||h)&&(0==w||w==(p.s<0?3:2)):v>a||v==a&&(4==w||h||6==w&&1&g[l-1]||w==(p.s<0?8:7)),l<1||!g[0])n=h?O(c.charAt(1),-b,c.charAt(0)):c.charAt(0);else{if(g.length=l,h)for(--o;++g[--l]>o;)g[l]=0,l||(++f,g=[1].concat(g));for(a=g.length;!g[--a];);for(v=0,n="";v<=a;n+=c.charAt(g[v++]));n=O(n,f,c.charAt(0))}return n}}(),r=function(){function e(e,t,r){var n,i,o,s,u=0,c=e.length,l=t%d,f=t/d|0;for(e=e.slice();c--;)u=((i=l*(o=e[c]%d)+(n=f*o+(s=e[c]/d|0)*l)%d*d+u)/r|0)+(n/d|0)+f*s,e[c]=i%r;return u&&(e=[u].concat(e)),e}function t(e,t,r,n){var i,o;if(r!=n)o=r>n?1:-1;else for(i=o=0;i<r;i++)if(e[i]!=t[i]){o=e[i]>t[i]?1:-1;break}return o}function r(e,t,r,n){for(var i=0;r--;)e[r]-=i,i=e[r]<t[r]?1:0,e[r]=i*n+e[r]-t[r];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(n,i,o,s,u){var l,f,p,g,d,v,y,w,m,A,S,O,E,N,B,I,x,j=n.s==i.s?1:-1,P=n.c,C=i.c;if(!(P&&P[0]&&C&&C[0]))return new q(n.s&&i.s&&(P?!C||P[0]!=C[0]:C)?P&&0==P[0]||!C?0*j:j/0:NaN);for(m=(w=new q(j)).c=[],j=o+(f=n.e-i.e)+1,u||(u=a,f=b(n.e/h)-b(i.e/h),j=j/h|0),p=0;C[p]==(P[p]||0);p++);if(C[p]>(P[p]||0)&&f--,j<0)m.push(1),g=!0;else{for(N=P.length,I=C.length,p=0,j+=2,(d=c(u/(C[0]+1)))>1&&(C=e(C,d,u),P=e(P,d,u),I=C.length,N=P.length),E=I,S=(A=P.slice(0,I)).length;S<I;A[S++]=0);x=C.slice(),x=[0].concat(x),B=C[0],C[1]>=u/2&&B++;do{if(d=0,(l=t(C,A,I,S))<0){if(O=A[0],I!=S&&(O=O*u+(A[1]||0)),(d=c(O/B))>1)for(d>=u&&(d=u-1),y=(v=e(C,d,u)).length,S=A.length;1==t(v,A,y,S);)d--,r(v,I<y?x:C,y,u),y=v.length,l=1;else 0==d&&(l=d=1),y=(v=C.slice()).length;if(y<S&&(v=[0].concat(v)),r(A,v,S,u),S=A.length,-1==l)for(;t(C,A,I,S)<1;)d++,r(A,I<S?x:C,S,u),S=A.length}else 0===l&&(d++,A=[0]);m[p++]=d,A[0]?A[S++]=P[E]||0:(A=[P[E]],S=1)}while((E++<N||null!=A[0])&&j--);g=null!=A[0],m[0]||m.splice(0,1)}if(u==a){for(p=1,j=m[0];j>=10;j/=10,p++);W(w,o+(w.e=p+f*h-1)+1,s,g)}else w.e=f,w.r=+g;return w}}(),N=/^(-?)0([xbo])(?=\w[\w.]*$)/i,B=/^([^.]+)\.$/,I=/^\.([^.]+)$/,x=/^-?(Infinity|NaN)$/,j=/^\s*\+(?=[\w.])|^\s+|\s+$/g,i=function(e,t,r,n){var i,o=r?t:t.replace(j,"");if(x.test(o))e.s=isNaN(o)?null:o<0?-1:1;else{if(!r&&(o=o.replace(N,(function(e,t,r){return i="x"==(r=r.toLowerCase())?16:"b"==r?2:8,n&&n!=i?e:t})),n&&(i=n,o=o.replace(B,"$1").replace(I,"0.$1")),t!=o))return new q(o,i);if(q.DEBUG)throw Error(l+"Not a"+(n?" base "+n:"")+" number: "+t);e.s=null}e.c=e.e=null},P.absoluteValue=P.abs=function(){var e=new q(this);return e.s<0&&(e.s=1),e},P.comparedTo=function(e,t){return w(this,new q(e,t))},P.decimalPlaces=P.dp=function(e,t){var r,n,i,o=this;if(null!=e)return m(e,0,v),null==t?t=R:m(t,0,8),W(new q(o),e+o.e+1,t);if(!(r=o.c))return null;if(n=((i=r.length-1)-b(this.e/h))*h,i=r[i])for(;i%10==0;i/=10,n--);return n<0&&(n=0),n},P.dividedBy=P.div=function(e,t){return r(this,new q(e,t),_,R)},P.dividedToIntegerBy=P.idiv=function(e,t){return r(this,new q(e,t),0,1)},P.exponentiatedBy=P.pow=function(e,t){var r,n,i,o,s,f,a,p,g=this;if((e=new q(e)).c&&!e.isInteger())throw Error(l+"Exponent not an integer: "+J(e));if(null!=t&&(t=new q(t)),s=e.e>14,!g.c||!g.c[0]||1==g.c[0]&&!g.e&&1==g.c.length||!e.c||!e.c[0])return p=new q(Math.pow(+J(g),s?2-A(e):+J(e))),t?p.mod(t):p;if(f=e.s<0,t){if(t.c?!t.c[0]:!t.s)return new q(NaN);(n=!f&&g.isInteger()&&t.isInteger())&&(g=g.mod(t))}else{if(e.e>9&&(g.e>0||g.e<-1||(0==g.e?g.c[0]>1||s&&g.c[1]>=24e7:g.c[0]<8e13||s&&g.c[0]<=9999975e7)))return o=g.s<0&&A(e)?-0:0,g.e>-1&&(o=1/o),new q(f?1/o:o);k&&(o=u(k/h+2))}for(s?(r=new q(.5),f&&(e.s=1),a=A(e)):a=(i=Math.abs(+J(e)))%2,p=new q(C);;){if(a){if(!(p=p.times(g)).c)break;o?p.c.length>o&&(p.c.length=o):n&&(p=p.mod(t))}if(i){if(0===(i=c(i/2)))break;a=i%2}else if(W(e=e.times(r),e.e+1,1),e.e>14)a=A(e);else{if(0==(i=+J(e)))break;a=i%2}g=g.times(g),o?g.c&&g.c.length>o&&(g.c.length=o):n&&(g=g.mod(t))}return n?p:(f&&(p=C.div(p)),t?p.mod(t):o?W(p,k,R,void 0):p)},P.integerValue=function(e){var t=new q(this);return null==e?e=R:m(e,0,8),W(t,t.e+1,e)},P.isEqualTo=P.eq=function(e,t){return 0===w(this,new q(e,t))},P.isFinite=function(){return!!this.c},P.isGreaterThan=P.gt=function(e,t){return w(this,new q(e,t))>0},P.isGreaterThanOrEqualTo=P.gte=function(e,t){return 1===(t=w(this,new q(e,t)))||0===t},P.isInteger=function(){return!!this.c&&b(this.e/h)>this.c.length-2},P.isLessThan=P.lt=function(e,t){return w(this,new q(e,t))<0},P.isLessThanOrEqualTo=P.lte=function(e,t){return-1===(t=w(this,new q(e,t)))||0===t},P.isNaN=function(){return!this.s},P.isNegative=function(){return this.s<0},P.isPositive=function(){return this.s>0},P.isZero=function(){return!!this.c&&0==this.c[0]},P.minus=function(e,t){var r,n,i,o,s=this,u=s.s;if(t=(e=new q(e,t)).s,!u||!t)return new q(NaN);if(u!=t)return e.s=-t,s.plus(e);var c=s.e/h,l=e.e/h,f=s.c,p=e.c;if(!c||!l){if(!f||!p)return f?(e.s=-t,e):new q(p?s:NaN);if(!f[0]||!p[0])return p[0]?(e.s=-t,e):new q(f[0]?s:3==R?-0:0)}if(c=b(c),l=b(l),f=f.slice(),u=c-l){for((o=u<0)?(u=-u,i=f):(l=c,i=p),i.reverse(),t=u;t--;i.push(0));i.reverse()}else for(n=(o=(u=f.length)<(t=p.length))?u:t,u=t=0;t<n;t++)if(f[t]!=p[t]){o=f[t]<p[t];break}if(o&&(i=f,f=p,p=i,e.s=-e.s),(t=(n=p.length)-(r=f.length))>0)for(;t--;f[r++]=0);for(t=a-1;n>u;){if(f[--n]<p[n]){for(r=n;r&&!f[--r];f[r]=t);--f[r],f[n]+=a}f[n]-=p[n]}for(;0==f[0];f.splice(0,1),--l);return f[0]?V(e,f,l):(e.s=3==R?-1:1,e.c=[e.e=0],e)},P.modulo=P.mod=function(e,t){var n,i,o=this;return e=new q(e,t),!o.c||!e.s||e.c&&!e.c[0]?new q(NaN):!e.c||o.c&&!o.c[0]?new q(o):(9==F?(i=e.s,e.s=1,n=r(o,e,0,3),e.s=i,n.s*=i):n=r(o,e,0,F),(e=o.minus(n.times(e))).c[0]||1!=F||(e.s=o.s),e)},P.multipliedBy=P.times=function(e,t){var r,n,i,o,s,u,c,l,f,p,g,v,y,w,m,A=this,S=A.c,O=(e=new q(e,t)).c;if(!(S&&O&&S[0]&&O[0]))return!A.s||!e.s||S&&!S[0]&&!O||O&&!O[0]&&!S?e.c=e.e=e.s=null:(e.s*=A.s,S&&O?(e.c=[0],e.e=0):e.c=e.e=null),e;for(n=b(A.e/h)+b(e.e/h),e.s*=A.s,(c=S.length)<(p=O.length)&&(y=S,S=O,O=y,i=c,c=p,p=i),i=c+p,y=[];i--;y.push(0));for(w=a,m=d,i=p;--i>=0;){for(r=0,g=O[i]%m,v=O[i]/m|0,o=i+(s=c);o>i;)r=((l=g*(l=S[--s]%m)+(u=v*l+(f=S[s]/m|0)*g)%m*m+y[o]+r)/w|0)+(u/m|0)+v*f,y[o--]=l%w;y[o]=r}return r?++n:y.splice(0,1),V(e,y,n)},P.negated=function(){var e=new q(this);return e.s=-e.s||null,e},P.plus=function(e,t){var r,n=this,i=n.s;if(t=(e=new q(e,t)).s,!i||!t)return new q(NaN);if(i!=t)return e.s=-t,n.minus(e);var o=n.e/h,s=e.e/h,u=n.c,c=e.c;if(!o||!s){if(!u||!c)return new q(i/0);if(!u[0]||!c[0])return c[0]?e:new q(u[0]?n:0*i)}if(o=b(o),s=b(s),u=u.slice(),i=o-s){for(i>0?(s=o,r=c):(i=-i,r=u),r.reverse();i--;r.push(0));r.reverse()}for((i=u.length)-(t=c.length)<0&&(r=c,c=u,u=r,t=i),i=0;t;)i=(u[--t]=u[t]+c[t]+i)/a|0,u[t]=a===u[t]?0:u[t]%a;return i&&(u=[i].concat(u),++s),V(e,u,s)},P.precision=P.sd=function(e,t){var r,n,i,o=this;if(null!=e&&e!==!!e)return m(e,1,v),null==t?t=R:m(t,0,8),W(new q(o),e,t);if(!(r=o.c))return null;if(n=(i=r.length-1)*h+1,i=r[i]){for(;i%10==0;i/=10,n--);for(i=r[0];i>=10;i/=10,n++);}return e&&o.e+1>n&&(n=o.e+1),n},P.shiftedBy=function(e){return m(e,-9007199254740991,p),this.times("1e"+e)},P.squareRoot=P.sqrt=function(){var e,t,n,i,o,s=this,u=s.c,c=s.s,l=s.e,f=_+4,a=new q("0.5");if(1!==c||!u||!u[0])return new q(!c||c<0&&(!u||u[0])?NaN:u?s:1/0);if(0==(c=Math.sqrt(+J(s)))||c==1/0?(((t=y(u)).length+l)%2==0&&(t+="0"),c=Math.sqrt(+t),l=b((l+1)/2)-(l<0||l%2),n=new q(t=c==1/0?"5e"+l:(t=c.toExponential()).slice(0,t.indexOf("e")+1)+l)):n=new q(c+""),n.c[0])for((c=(l=n.e)+f)<3&&(c=0);;)if(o=n,n=a.times(o.plus(r(s,o,f,1))),y(o.c).slice(0,c)===(t=y(n.c)).slice(0,c)){if(n.e<l&&--c,"9999"!=(t=t.slice(c-3,c+1))&&(i||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(W(n,n.e+_+2,1),e=!n.times(n).eq(s));break}if(!i&&(W(o,o.e+_+2,0),o.times(o).eq(s))){n=o;break}f+=4,c+=4,i=1}return W(n,n.e+_+1,R,e)},P.toExponential=function(e,t){return null!=e&&(m(e,0,v),e++),z(this,e,t,1)},P.toFixed=function(e,t){return null!=e&&(m(e,0,v),e=e+this.e+1),z(this,e,t)},P.toFormat=function(e,t,r){var n,i=this;if(null==r)null!=e&&t&&"object"==typeof t?(r=t,t=null):e&&"object"==typeof e?(r=e,e=t=null):r=$;else if("object"!=typeof r)throw Error(l+"Argument not an object: "+r);if(n=i.toFixed(e,t),i.c){var o,s=n.split("."),u=+r.groupSize,c=+r.secondaryGroupSize,f=r.groupSeparator||"",a=s[0],h=s[1],p=i.s<0,g=p?a.slice(1):a,d=g.length;if(c&&(o=u,u=c,c=o,d-=o),u>0&&d>0){for(o=d%u||u,a=g.substr(0,o);o<d;o+=u)a+=f+g.substr(o,u);c>0&&(a+=f+g.slice(o)),p&&(a="-"+a)}n=h?a+(r.decimalSeparator||"")+((c=+r.fractionGroupSize)?h.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(r.fractionGroupSeparator||"")):h):a}return(r.prefix||"")+n+(r.suffix||"")},P.toFraction=function(e){var t,n,i,o,s,u,c,f,a,p,d,v,b=this,w=b.c;if(null!=e&&(!(c=new q(e)).isInteger()&&(c.c||1!==c.s)||c.lt(C)))throw Error(l+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+J(c));if(!w)return new q(b);for(t=new q(C),a=n=new q(C),i=f=new q(C),v=y(w),s=t.e=v.length-b.e-1,t.c[0]=g[(u=s%h)<0?h+u:u],e=!e||c.comparedTo(t)>0?s>0?t:a:c,u=U,U=1/0,c=new q(v),f.c[0]=0;p=r(c,t,0,1),1!=(o=n.plus(p.times(i))).comparedTo(e);)n=i,i=o,a=f.plus(p.times(o=a)),f=o,t=c.minus(p.times(o=t)),c=o;return o=r(e.minus(n),i,0,1),f=f.plus(o.times(a)),n=n.plus(o.times(i)),f.s=a.s=b.s,d=r(a,i,s*=2,R).minus(b).abs().comparedTo(r(f,n,s,R).minus(b).abs())<1?[a,i]:[f,n],U=u,d},P.toNumber=function(){return+J(this)},P.toPrecision=function(e,t){return null!=e&&m(e,1,v),z(this,e,t,2)},P.toString=function(e){var t,r=this,i=r.s,o=r.e;return null===o?i?(t="Infinity",i<0&&(t="-"+t)):t="NaN":(null==e?t=o<=L||o>=M?S(y(r.c),o):O(y(r.c),o,"0"):10===e&&H?t=O(y((r=W(new q(r),_+o+1,R)).c),r.e,"0"):(m(e,2,G.length,"Base"),t=n(O(y(r.c),o,"0"),10,e,i,!0)),i<0&&r.c[0]&&(t="-"+t)),t},P.valueOf=P.toJSON=function(){return J(this)},P._isBigNumber=!0,null!=t&&q.set(t),q}(),o.default=o.BigNumber=o,void 0===(n=function(){return o}.call(t,r,t,e))||(e.exports=n)}()},400:(e,t,r)=>{var n=r(123).stringify,i=r(813);e.exports=function(e){return{parse:i(e),stringify:n}},e.exports.parse=i(),e.exports.stringify=n},813:(e,t,r)=>{var n=null;const i=/(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])/,o=/(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)/;e.exports=function(e){"use strict";var t={strict:!1,storeAsString:!1,alwaysParseAsBig:!1,useNativeBigInt:!1,protoAction:"error",constructorAction:"error"};if(null!=e){if(!0===e.strict&&(t.strict=!0),!0===e.storeAsString&&(t.storeAsString=!0),t.alwaysParseAsBig=!0===e.alwaysParseAsBig&&e.alwaysParseAsBig,t.useNativeBigInt=!0===e.useNativeBigInt&&e.useNativeBigInt,void 0!==e.constructorAction){if("error"!==e.constructorAction&&"ignore"!==e.constructorAction&&"preserve"!==e.constructorAction)throw new Error(`Incorrect value for constructorAction option, must be "error", "ignore" or undefined but passed ${e.constructorAction}`);t.constructorAction=e.constructorAction}if(void 0!==e.protoAction){if("error"!==e.protoAction&&"ignore"!==e.protoAction&&"preserve"!==e.protoAction)throw new Error(`Incorrect value for protoAction option, must be "error", "ignore" or undefined but passed ${e.protoAction}`);t.protoAction=e.protoAction}}var s,u,c,l,f={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},a=function(e){throw{name:"SyntaxError",message:e,at:s,text:c}},h=function(e){return e&&e!==u&&a("Expected '"+e+"' instead of '"+u+"'"),u=c.charAt(s),s+=1,u},p=function(){var e,i="";for("-"===u&&(i="-",h("-"));u>="0"&&u<="9";)i+=u,h();if("."===u)for(i+=".";h()&&u>="0"&&u<="9";)i+=u;if("e"===u||"E"===u)for(i+=u,h(),"-"!==u&&"+"!==u||(i+=u,h());u>="0"&&u<="9";)i+=u,h();if(e=+i,isFinite(e))return null==n&&(n=r(431)),i.length>15?t.storeAsString?i:t.useNativeBigInt?BigInt(i):new n(i):t.alwaysParseAsBig?t.useNativeBigInt?BigInt(e):new n(e):e;a("Bad number")},g=function(){var e,t,r,n="";if('"'===u)for(var i=s;h();){if('"'===u)return s-1>i&&(n+=c.substring(i,s-1)),h(),n;if("\\"===u){if(s-1>i&&(n+=c.substring(i,s-1)),h(),"u"===u){for(r=0,t=0;t<4&&(e=parseInt(h(),16),isFinite(e));t+=1)r=16*r+e;n+=String.fromCharCode(r)}else{if("string"!=typeof f[u])break;n+=f[u]}i=s}}a("Bad string")},d=function(){for(;u&&u<=" ";)h()};return l=function(){switch(d(),u){case"{":return function(){var e,r=Object.create(null);if("{"===u){if(h("{"),d(),"}"===u)return h("}"),r;for(;u;){if(e=g(),d(),h(":"),!0===t.strict&&Object.hasOwnProperty.call(r,e)&&a('Duplicate key "'+e+'"'),!0===i.test(e)?"error"===t.protoAction?a("Object contains forbidden prototype property"):"ignore"===t.protoAction?l():r[e]=l():!0===o.test(e)?"error"===t.constructorAction?a("Object contains forbidden constructor property"):"ignore"===t.constructorAction?l():r[e]=l():r[e]=l(),d(),"}"===u)return h("}"),r;h(","),d()}}a("Bad object")}();case"[":return function(){var e=[];if("["===u){if(h("["),d(),"]"===u)return h("]"),e;for(;u;){if(e.push(l()),d(),"]"===u)return h("]"),e;h(","),d()}}a("Bad array")}();case'"':return g();case"-":return p();default:return u>="0"&&u<="9"?p():function(){switch(u){case"t":return h("t"),h("r"),h("u"),h("e"),!0;case"f":return h("f"),h("a"),h("l"),h("s"),h("e"),!1;case"n":return h("n"),h("u"),h("l"),h("l"),null}a("Unexpected '"+u+"'")}()}},function(e,t){var r;return c=e+"",s=0,u=" ",r=l(),d(),u&&a("Syntax error"),"function"==typeof t?function e(r,n){var i,o=r[n];return o&&"object"==typeof o&&Object.keys(o).forEach((function(t){void 0!==(i=e(o,t))?o[t]=i:delete o[t]})),t.call(r,n,o)}({"":r},""):r}}},123:(e,t,r)=>{var n=r(431),i=e.exports;!function(){"use strict";var e,t,r,o=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function u(e){return o.lastIndex=0,o.test(e)?'"'+e.replace(o,(function(e){var t=s[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+e+'"'}function c(i,o){var s,l,f,a,h,p=e,g=o[i],d=null!=g&&(g instanceof n||n.isBigNumber(g));switch(g&&"object"==typeof g&&"function"==typeof g.toJSON&&(g=g.toJSON(i)),"function"==typeof r&&(g=r.call(o,i,g)),typeof g){case"string":return d?g:u(g);case"number":return isFinite(g)?String(g):"null";case"boolean":case"null":case"bigint":return String(g);case"object":if(!g)return"null";if(e+=t,h=[],"[object Array]"===Object.prototype.toString.apply(g)){for(a=g.length,s=0;s<a;s+=1)h[s]=c(s,g)||"null";return f=0===h.length?"[]":e?"[\n"+e+h.join(",\n"+e)+"\n"+p+"]":"["+h.join(",")+"]",e=p,f}if(r&&"object"==typeof r)for(a=r.length,s=0;s<a;s+=1)"string"==typeof r[s]&&(f=c(l=r[s],g))&&h.push(u(l)+(e?": ":":")+f);else Object.keys(g).forEach((function(t){var r=c(t,g);r&&h.push(u(t)+(e?": ":":")+r)}));return f=0===h.length?"{}":e?"{\n"+e+h.join(",\n"+e)+"\n"+p+"}":"{"+h.join(",")+"}",e=p,f}}"function"!=typeof i.stringify&&(i.stringify=function(n,i,o){var s;if(e="",t="","number"==typeof o)for(s=0;s<o;s+=1)t+=" ";else"string"==typeof o&&(t=o);if(r=i,i&&"function"!=typeof i&&("object"!=typeof i||"number"!=typeof i.length))throw new Error("JSON.stringify");return c("",{"":n})})}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";r.r(n),r.d(n,{SocketClient:()=>y,filterMessage:()=>A});const e="object"==typeof global&&global&&global.Object===Object&&global;var t="object"==typeof self&&self&&self.Object===Object&&self;const i=(e||t||Function("return this")()).Symbol,o=Array.isArray;var s=Object.prototype,u=s.hasOwnProperty,c=s.toString,l=i?i.toStringTag:void 0;var f=Object.prototype.toString;var a=i?i.toStringTag:void 0;const h=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?function(e){var t=u.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(e){}var i=c.call(e);return n&&(t?e[l]=r:delete e[l]),i}(e):function(e){return f.call(e)}(e)};var p=i?i.prototype:void 0,g=p?p.toString:void 0;const d=function e(t){if("string"==typeof t)return t;if(o(t))return function(e,t){for(var r=-1,n=null==e?0:e.length,i=Array(n);++r<n;)i[r]=t(e[r],r,e);return i}(t,e)+"";if(function(e){return"symbol"==typeof e||function(e){return null!=e&&"object"==typeof e}(e)&&"[object Symbol]"==h(e)}(t))return g?g.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r},v=function(e){return null==e?"":d(e)},b="55";class y{client=null;missedHeartbeats=0;heartBeatInterval=null;pollRetryConnection=null;presentSubs=[];failedSubQueue=[];options={url:"",wsKey:"",autoConnect:!1,maxMissedHeartbeats:3,autoConnectAfter:1e3};constructor(e){this.options=e}init(){return this.client&&3!==this.client.readyState||(this.client=new WebSocket(this.options.url),this.client.onopen=e=>{this.processQueue(),this.onPing()},this.client.onmessage=e=>{v(e.data)!==b?this.options.onMessageCallback&&this.options.onMessageCallback(e):this.missedHeartbeats=0},this.options.autoConnect&&this.client.addEventListener("close",this.retryConnection)),this.client}retryConnection(){setTimeout((()=>{this.pollRetryConnection=setInterval((()=>{this.init().onopen=()=>{console.log("Success retry connection"),this.onPing(),clearInterval(this.pollRetryConnection);const e=[...this.presentSubs];this.presentSubs=[],e.forEach((e=>{this.sendSubEvent(e)}))}}),this.options.autoConnectAfter)}),1e3)}onPing(){this.heartBeatInterval&&clearInterval(this.heartBeatInterval),this.heartBeatInterval=null,this.client.send(b),this.missedHeartbeats=0,this.heartBeatInterval=setInterval((()=>{if(this.missedHeartbeats++,this.missedHeartbeats>=this.options.maxMissedHeartbeats)return console.log("Too many missed heartbeats."),clearInterval(this.heartBeatInterval),this.heartBeatInterval=null,void this.client.close();this.client.send(b)}),1e4)}processQueue(){this.failedSubQueue.forEach((e=>{"sub"===e.name&&this.sendSubEvent(e.value),"unsub"===e.name&&this.sendUnSubEvent(e.value)})),this.failedSubQueue=[]}sendSubEvent=e=>{1===this.client?.readyState?this.presentSubs.includes(e)?this.client.send(`${this.options.wsKey}|sub|${e}`):1===this.client?.readyState&&(this.client.send(`${this.options.wsKey}|sub|${e}`),this.presentSubs.push(e)):this.failedSubQueue.push({name:"sub",value:e})};sendUnSubEvent=e=>{if(1===this.client?.readyState){if(1===this.client?.readyState){const t=this.presentSubs.indexOf(e);t>-1&&(this.presentSubs.splice(t,1),this.client.send(`${this.options.wsKey}|unsub|${e}`))}}else this.failedSubQueue.push({name:"unsub",value:e})};on(e,t){this.client.addEventListener(e,t)}off(e,t){this.client.removeEventListener(e,t)}close(){this.presentSubs=[],this.failedSubQueue=[],clearInterval(this.heartBeatInterval),clearInterval(this.pollRetryConnection),this.options.autoConnect&&this.client.removeEventListener("close",this.retryConnection),this.client&&this.client.close()}}var w=r(400),m=r.n(w);const A=(e,t)=>{const r=e.data;let n={event:""};if(v(e.data)!==b){try{n=r?m()({storeAsString:!0}).parse(r):{}}catch(e){}if(r)return t?t.includes(n.event)?n:void 0:n}}})(),vietanhWebsocket=n})();