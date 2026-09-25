// Generates the brushy alpha masks in src/assets/redesign/masks.
// usage: node scripts/generate-brush-mask.cjs out.png WIDTH HEIGHT left|top SEED EDGE FEATHER
// e.g.   node scripts/generate-brush-mask.cjs src/assets/redesign/masks/brush-edge-left.png 600 460 left 3 0.17 0.2
const fs=require('fs'),zlib=require('zlib');
const [out,W,H,edge,seedArg]=[process.argv[2],+process.argv[3],+process.argv[4],process.argv[5],+process.argv[6]||1];
let seed=seedArg*9973;const rnd=()=>(seed=(seed*16807)%2147483647)/2147483647;
// 1D value noise
const mk1=(n)=>{const a=[];for(let i=0;i<=n;i++)a.push(rnd()*2-1);return t=>{t=Math.max(0,Math.min(0.99999,t))*n;const i=t|0,f=t-i,s=f*f*(3-2*f);return a[i]*(1-s)+a[i+1]*s;};};
// 2D value noise grid
const mk2=(nx,ny)=>{const g=[];for(let j=0;j<=ny;j++){g.push([]);for(let i=0;i<=nx;i++)g[j].push(rnd()*2-1);}return (u,v)=>{u=Math.max(0,Math.min(0.99999,u))*nx;v=Math.max(0,Math.min(0.99999,v))*ny;const i=u|0,j=v|0,fu=u-i,fv=v-j,su=fu*fu*(3-2*fu),sv=fv*fv*(3-2*fv);const a=g[j][i]*(1-su)+g[j][i+1]*su,b=g[j+1][i]*(1-su)+g[j+1][i+1]*su;return a*(1-sv)+b*sv;};};
const L=edge==='left'?W:H, A=edge==='left'?H:W; // L = axis across the edge, A = along the edge
const e1=mk1(4),e2=mk1(13);
const blotch=mk2(9,12),mid=mk2(26,34),fine=mk2(140,180),grain=mk2(420,520);
const EDGE=+(process.argv[7]||0.2), FEATHER=+(process.argv[8]||0.22);
// a few soft, elongated dry-brush strokes crossing the edge
const strokes=[];for(let k=0;k<9;k++)strokes.push({c:0.05+rnd()*0.9,w:0.012+rnd()*0.035,start:-0.02+rnd()*0.12,a:0.35+rnd()*0.45,tilt:(rnd()-0.5)*0.25});
const px=Buffer.alloc(W*H*2);
for(let y=0;y<H;y++)for(let x=0;x<W;x++){
  const u=(edge==='left'?x:y)/L, v=(edge==='left'?y:x)/A;
  const e=EDGE+0.06*e1(v)+0.025*e2(v);
  let a=(u-e)/FEATHER+0.5;
  a+=0.45*blotch(u,v)+0.3*mid(u,v)+0.22*fine(u,v);
  const zone=Math.max(0,1-Math.abs(u-e)/(FEATHER*1.4));
  a+=0.35*grain(u,v)*zone;
  for(const st of strokes){const vc=st.c+st.tilt*(u-e);const d=Math.abs(v-vc)/st.w;if(d<1&&u>e+st.start-0.18&&u<e+0.1){const t=Math.min(1,(u-(e+st.start-0.18))/0.12);const dry=0.55+0.45*fine(u*2.3,v*0.6);a=Math.max(a,st.a*(1-d*d)*t*dry);}}
  a=Math.max(0,Math.min(1,a));a=a*a*(3-2*a);
  const i=(y*W+x)*2;px[i]=0;px[i+1]=Math.round(a*255);
}
const raw=Buffer.alloc((W*2+1)*H);for(let y=0;y<H;y++){raw[y*(W*2+1)]=0;px.copy(raw,y*(W*2+1)+1,y*W*2,(y+1)*W*2);}
const crcT=[];for(let n=0;n<256;n++){let c=n;for(let k=0;k<8;k++)c=c&1?0xedb88320^(c>>>1):c>>>1;crcT[n]=c>>>0;}
const crc=b=>{let c=0xffffffff;for(const x of b)c=crcT[(c^x)&255]^(c>>>8);return (c^0xffffffff)>>>0;};
const chunk=(t,d)=>{const l=Buffer.alloc(4);l.writeUInt32BE(d.length);const td=Buffer.concat([Buffer.from(t),d]);const c=Buffer.alloc(4);c.writeUInt32BE(crc(td));return Buffer.concat([l,td,c]);};
const ih=Buffer.alloc(13);ih.writeUInt32BE(W,0);ih.writeUInt32BE(H,4);ih[8]=8;ih[9]=4;
fs.writeFileSync(out,Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ih),chunk('IDAT',zlib.deflateSync(raw,{level:9})),chunk('IEND',Buffer.alloc(0))]));
console.log(out,fs.statSync(out).size);
