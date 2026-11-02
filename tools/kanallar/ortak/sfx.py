import numpy as np, wave, sys, json
T=json.loads(sys.argv[1]); dums=json.loads(sys.argv[2]); out_path=sys.argv[3]; soft=float(sys.argv[4]) if len(sys.argv)>4 else 1.0
sr=44100; L=int((T[-1]+1)*sr); out=np.zeros(L); rng=np.random.default_rng(1)
def add(t,sig):
    i=max(0,int(t*sr)); n=min(len(sig),L-i); out[i:i+n]+=sig[:n]
def whoosh():
    n=int(0.28*sr); x=rng.standard_normal(n); x=np.convolve(x,np.ones(8)/8,'same')-np.convolve(x,np.ones(40)/40,'same')
    return x*np.minimum(np.linspace(0,1,n)/0.3,1)*np.linspace(1,0,n)**1.5*0.35*soft
def pop():
    n=int(0.08*sr); t=np.arange(n)/sr; return np.sin(2*np.pi*(900-3000*t)*t)*np.linspace(1,0,n)**2*0.3*soft
def dum():
    n=int(0.7*sr); t=np.arange(n)/sr; return np.sin(2*np.pi*(70-30*t)*t)*np.exp(-t*5)*0.7
for tt in T[1:-1]: add(tt-0.05,whoosh()); add(tt+0.12,pop())
for tt in dums: add(tt,dum())
d=(np.clip(out,-1,1)*32767*0.8).astype(np.int16)
w=wave.open(out_path,'wb'); w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr); w.writeframes(d.tobytes()); w.close()
