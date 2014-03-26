// Kitware
// glMatrix v0.9.5
glMatrixArrayType=typeof Float32Array!="undefined"?Float32Array:typeof WebGLFloatArray!="undefined"?WebGLFloatArray:Array;var vec3={};vec3.create=function(a){var b=new glMatrixArrayType(3);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2]}return b};vec3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];return b};vec3.add=function(a,b,c){if(!c||a==c){a[0]+=b[0];a[1]+=b[1];a[2]+=b[2];return a}c[0]=a[0]+b[0];c[1]=a[1]+b[1];c[2]=a[2]+b[2];return c};
vec3.subtract=function(a,b,c){if(!c||a==c){a[0]-=b[0];a[1]-=b[1];a[2]-=b[2];return a}c[0]=a[0]-b[0];c[1]=a[1]-b[1];c[2]=a[2]-b[2];return c};vec3.negate=function(a,b){b||(b=a);b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];return b};vec3.scale=function(a,b,c){if(!c||a==c){a[0]*=b;a[1]*=b;a[2]*=b;return a}c[0]=a[0]*b;c[1]=a[1]*b;c[2]=a[2]*b;return c};
vec3.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=Math.sqrt(c*c+d*d+e*e);if(g){if(g==1){b[0]=c;b[1]=d;b[2]=e;return b}}else{b[0]=0;b[1]=0;b[2]=0;return b}g=1/g;b[0]=c*g;b[1]=d*g;b[2]=e*g;return b};vec3.cross=function(a,b,c){c||(c=a);var d=a[0],e=a[1];a=a[2];var g=b[0],f=b[1];b=b[2];c[0]=e*b-a*f;c[1]=a*g-d*b;c[2]=d*f-e*g;return c};vec3.length=function(a){var b=a[0],c=a[1];a=a[2];return Math.sqrt(b*b+c*c+a*a)};vec3.dot=function(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]};
vec3.direction=function(a,b,c){c||(c=a);var d=a[0]-b[0],e=a[1]-b[1];a=a[2]-b[2];b=Math.sqrt(d*d+e*e+a*a);if(!b){c[0]=0;c[1]=0;c[2]=0;return c}b=1/b;c[0]=d*b;c[1]=e*b;c[2]=a*b;return c};vec3.lerp=function(a,b,c,d){d||(d=a);d[0]=a[0]+c*(b[0]-a[0]);d[1]=a[1]+c*(b[1]-a[1]);d[2]=a[2]+c*(b[2]-a[2]);return d};vec3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+"]"};var mat3={};
mat3.create=function(a){var b=new glMatrixArrayType(9);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9]}return b};mat3.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return b};mat3.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=1;a[5]=0;a[6]=0;a[7]=0;a[8]=1;return a};
mat3.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[5];a[1]=a[3];a[2]=a[6];a[3]=c;a[5]=a[7];a[6]=d;a[7]=e;return a}b[0]=a[0];b[1]=a[3];b[2]=a[6];b[3]=a[1];b[4]=a[4];b[5]=a[7];b[6]=a[2];b[7]=a[5];b[8]=a[8];return b};mat3.toMat4=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=0;b[4]=a[3];b[5]=a[4];b[6]=a[5];b[7]=0;b[8]=a[6];b[9]=a[7];b[10]=a[8];b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat3.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+"]"};var mat4={};mat4.create=function(a){var b=new glMatrixArrayType(16);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15]}return b};
mat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return b};mat4.identity=function(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a};
mat4.transpose=function(a,b){if(!b||a==b){var c=a[1],d=a[2],e=a[3],g=a[6],f=a[7],h=a[11];a[1]=a[4];a[2]=a[8];a[3]=a[12];a[4]=c;a[6]=a[9];a[7]=a[13];a[8]=d;a[9]=g;a[11]=a[14];a[12]=e;a[13]=f;a[14]=h;return a}b[0]=a[0];b[1]=a[4];b[2]=a[8];b[3]=a[12];b[4]=a[1];b[5]=a[5];b[6]=a[9];b[7]=a[13];b[8]=a[2];b[9]=a[6];b[10]=a[10];b[11]=a[14];b[12]=a[3];b[13]=a[7];b[14]=a[11];b[15]=a[15];return b};
mat4.determinant=function(a){var b=a[0],c=a[1],d=a[2],e=a[3],g=a[4],f=a[5],h=a[6],i=a[7],j=a[8],k=a[9],l=a[10],o=a[11],m=a[12],n=a[13],p=a[14];a=a[15];return m*k*h*e-j*n*h*e-m*f*l*e+g*n*l*e+j*f*p*e-g*k*p*e-m*k*d*i+j*n*d*i+m*c*l*i-b*n*l*i-j*c*p*i+b*k*p*i+m*f*d*o-g*n*d*o-m*c*h*o+b*n*h*o+g*c*p*o-b*f*p*o-j*f*d*a+g*k*d*a+j*c*h*a-b*k*h*a-g*c*l*a+b*f*l*a};
mat4.inverse=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=a[4],h=a[5],i=a[6],j=a[7],k=a[8],l=a[9],o=a[10],m=a[11],n=a[12],p=a[13],r=a[14],s=a[15],A=c*h-d*f,B=c*i-e*f,t=c*j-g*f,u=d*i-e*h,v=d*j-g*h,w=e*j-g*i,x=k*p-l*n,y=k*r-o*n,z=k*s-m*n,C=l*r-o*p,D=l*s-m*p,E=o*s-m*r,q=1/(A*E-B*D+t*C+u*z-v*y+w*x);b[0]=(h*E-i*D+j*C)*q;b[1]=(-d*E+e*D-g*C)*q;b[2]=(p*w-r*v+s*u)*q;b[3]=(-l*w+o*v-m*u)*q;b[4]=(-f*E+i*z-j*y)*q;b[5]=(c*E-e*z+g*y)*q;b[6]=(-n*w+r*t-s*B)*q;b[7]=(k*w-o*t+m*B)*q;b[8]=(f*D-h*z+j*x)*q;
b[9]=(-c*D+d*z-g*x)*q;b[10]=(n*v-p*t+s*A)*q;b[11]=(-k*v+l*t-m*A)*q;b[12]=(-f*C+h*y-i*x)*q;b[13]=(c*C-d*y+e*x)*q;b[14]=(-n*u+p*B-r*A)*q;b[15]=(k*u-l*B+o*A)*q;return b};mat4.toRotationMat=function(a,b){b||(b=mat4.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};
mat4.toMat3=function(a,b){b||(b=mat3.create());b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[4];b[4]=a[5];b[5]=a[6];b[6]=a[8];b[7]=a[9];b[8]=a[10];return b};mat4.toInverseMat3=function(a,b){var c=a[0],d=a[1],e=a[2],g=a[4],f=a[5],h=a[6],i=a[8],j=a[9],k=a[10],l=k*f-h*j,o=-k*g+h*i,m=j*g-f*i,n=c*l+d*o+e*m;if(!n)return null;n=1/n;b||(b=mat3.create());b[0]=l*n;b[1]=(-k*d+e*j)*n;b[2]=(h*d-e*f)*n;b[3]=o*n;b[4]=(k*c-e*i)*n;b[5]=(-h*c+e*g)*n;b[6]=m*n;b[7]=(-j*c+d*i)*n;b[8]=(f*c-d*g)*n;return b};
mat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2],f=a[3],h=a[4],i=a[5],j=a[6],k=a[7],l=a[8],o=a[9],m=a[10],n=a[11],p=a[12],r=a[13],s=a[14];a=a[15];var A=b[0],B=b[1],t=b[2],u=b[3],v=b[4],w=b[5],x=b[6],y=b[7],z=b[8],C=b[9],D=b[10],E=b[11],q=b[12],F=b[13],G=b[14];b=b[15];c[0]=A*d+B*h+t*l+u*p;c[1]=A*e+B*i+t*o+u*r;c[2]=A*g+B*j+t*m+u*s;c[3]=A*f+B*k+t*n+u*a;c[4]=v*d+w*h+x*l+y*p;c[5]=v*e+w*i+x*o+y*r;c[6]=v*g+w*j+x*m+y*s;c[7]=v*f+w*k+x*n+y*a;c[8]=z*d+C*h+D*l+E*p;c[9]=z*e+C*i+D*o+E*r;c[10]=z*
g+C*j+D*m+E*s;c[11]=z*f+C*k+D*n+E*a;c[12]=q*d+F*h+G*l+b*p;c[13]=q*e+F*i+G*o+b*r;c[14]=q*g+F*j+G*m+b*s;c[15]=q*f+F*k+G*n+b*a;return c};mat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1];b=b[2];c[0]=a[0]*d+a[4]*e+a[8]*b+a[12];c[1]=a[1]*d+a[5]*e+a[9]*b+a[13];c[2]=a[2]*d+a[6]*e+a[10]*b+a[14];return c};
mat4.multiplyVec4=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=b[3];c[0]=a[0]*d+a[4]*e+a[8]*g+a[12]*b;c[1]=a[1]*d+a[5]*e+a[9]*g+a[13]*b;c[2]=a[2]*d+a[6]*e+a[10]*g+a[14]*b;c[3]=a[3]*d+a[7]*e+a[11]*g+a[15]*b;return c};
mat4.translate=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[12]=a[0]*d+a[4]*e+a[8]*b+a[12];a[13]=a[1]*d+a[5]*e+a[9]*b+a[13];a[14]=a[2]*d+a[6]*e+a[10]*b+a[14];a[15]=a[3]*d+a[7]*e+a[11]*b+a[15];return a}var g=a[0],f=a[1],h=a[2],i=a[3],j=a[4],k=a[5],l=a[6],o=a[7],m=a[8],n=a[9],p=a[10],r=a[11];c[0]=g;c[1]=f;c[2]=h;c[3]=i;c[4]=j;c[5]=k;c[6]=l;c[7]=o;c[8]=m;c[9]=n;c[10]=p;c[11]=r;c[12]=g*d+j*e+m*b+a[12];c[13]=f*d+k*e+n*b+a[13];c[14]=h*d+l*e+p*b+a[14];c[15]=i*d+o*e+r*b+a[15];return c};
mat4.scale=function(a,b,c){var d=b[0],e=b[1];b=b[2];if(!c||a==c){a[0]*=d;a[1]*=d;a[2]*=d;a[3]*=d;a[4]*=e;a[5]*=e;a[6]*=e;a[7]*=e;a[8]*=b;a[9]*=b;a[10]*=b;a[11]*=b;return a}c[0]=a[0]*d;c[1]=a[1]*d;c[2]=a[2]*d;c[3]=a[3]*d;c[4]=a[4]*e;c[5]=a[5]*e;c[6]=a[6]*e;c[7]=a[7]*e;c[8]=a[8]*b;c[9]=a[9]*b;c[10]=a[10]*b;c[11]=a[11]*b;c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15];return c};
mat4.rotate=function(a,b,c,d){var e=c[0],g=c[1];c=c[2];var f=Math.sqrt(e*e+g*g+c*c);if(!f)return null;if(f!=1){f=1/f;e*=f;g*=f;c*=f}var h=Math.sin(b),i=Math.cos(b),j=1-i;b=a[0];f=a[1];var k=a[2],l=a[3],o=a[4],m=a[5],n=a[6],p=a[7],r=a[8],s=a[9],A=a[10],B=a[11],t=e*e*j+i,u=g*e*j+c*h,v=c*e*j-g*h,w=e*g*j-c*h,x=g*g*j+i,y=c*g*j+e*h,z=e*c*j+g*h;e=g*c*j-e*h;g=c*c*j+i;if(d){if(a!=d){d[12]=a[12];d[13]=a[13];d[14]=a[14];d[15]=a[15]}}else d=a;d[0]=b*t+o*u+r*v;d[1]=f*t+m*u+s*v;d[2]=k*t+n*u+A*v;d[3]=l*t+p*u+B*
v;d[4]=b*w+o*x+r*y;d[5]=f*w+m*x+s*y;d[6]=k*w+n*x+A*y;d[7]=l*w+p*x+B*y;d[8]=b*z+o*e+r*g;d[9]=f*z+m*e+s*g;d[10]=k*z+n*e+A*g;d[11]=l*z+p*e+B*g;return d};mat4.rotateX=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[4],g=a[5],f=a[6],h=a[7],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[0]=a[0];c[1]=a[1];c[2]=a[2];c[3]=a[3];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[4]=e*b+i*d;c[5]=g*b+j*d;c[6]=f*b+k*d;c[7]=h*b+l*d;c[8]=e*-d+i*b;c[9]=g*-d+j*b;c[10]=f*-d+k*b;c[11]=h*-d+l*b;return c};
mat4.rotateY=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[8],j=a[9],k=a[10],l=a[11];if(c){if(a!=c){c[4]=a[4];c[5]=a[5];c[6]=a[6];c[7]=a[7];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*-d;c[1]=g*b+j*-d;c[2]=f*b+k*-d;c[3]=h*b+l*-d;c[8]=e*d+i*b;c[9]=g*d+j*b;c[10]=f*d+k*b;c[11]=h*d+l*b;return c};
mat4.rotateZ=function(a,b,c){var d=Math.sin(b);b=Math.cos(b);var e=a[0],g=a[1],f=a[2],h=a[3],i=a[4],j=a[5],k=a[6],l=a[7];if(c){if(a!=c){c[8]=a[8];c[9]=a[9];c[10]=a[10];c[11]=a[11];c[12]=a[12];c[13]=a[13];c[14]=a[14];c[15]=a[15]}}else c=a;c[0]=e*b+i*d;c[1]=g*b+j*d;c[2]=f*b+k*d;c[3]=h*b+l*d;c[4]=e*-d+i*b;c[5]=g*-d+j*b;c[6]=f*-d+k*b;c[7]=h*-d+l*b;return c};
mat4.frustum=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=e*2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=e*2/i;f[6]=0;f[7]=0;f[8]=(b+a)/h;f[9]=(d+c)/i;f[10]=-(g+e)/j;f[11]=-1;f[12]=0;f[13]=0;f[14]=-(g*e*2)/j;f[15]=0;return f};mat4.perspective=function(a,b,c,d,e){a=c*Math.tan(a*Math.PI/360);b=a*b;return mat4.frustum(-b,b,-a,a,c,d,e)};
mat4.ortho=function(a,b,c,d,e,g,f){f||(f=mat4.create());var h=b-a,i=d-c,j=g-e;f[0]=2/h;f[1]=0;f[2]=0;f[3]=0;f[4]=0;f[5]=2/i;f[6]=0;f[7]=0;f[8]=0;f[9]=0;f[10]=-2/j;f[11]=0;f[12]=-(a+b)/h;f[13]=-(d+c)/i;f[14]=-(g+e)/j;f[15]=1;return f};
mat4.lookAt=function(a,b,c,d){d||(d=mat4.create());var e=a[0],g=a[1];a=a[2];var f=c[0],h=c[1],i=c[2];c=b[1];var j=b[2];if(e==b[0]&&g==c&&a==j)return mat4.identity(d);var k,l,o,m;c=e-b[0];j=g-b[1];b=a-b[2];m=1/Math.sqrt(c*c+j*j+b*b);c*=m;j*=m;b*=m;k=h*b-i*j;i=i*c-f*b;f=f*j-h*c;if(m=Math.sqrt(k*k+i*i+f*f)){m=1/m;k*=m;i*=m;f*=m}else f=i=k=0;h=j*f-b*i;l=b*k-c*f;o=c*i-j*k;if(m=Math.sqrt(h*h+l*l+o*o)){m=1/m;h*=m;l*=m;o*=m}else o=l=h=0;d[0]=k;d[1]=h;d[2]=c;d[3]=0;d[4]=i;d[5]=l;d[6]=j;d[7]=0;d[8]=f;d[9]=
o;d[10]=b;d[11]=0;d[12]=-(k*e+i*g+f*a);d[13]=-(h*e+l*g+o*a);d[14]=-(c*e+j*g+b*a);d[15]=1;return d};mat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+", "+a[4]+", "+a[5]+", "+a[6]+", "+a[7]+", "+a[8]+", "+a[9]+", "+a[10]+", "+a[11]+", "+a[12]+", "+a[13]+", "+a[14]+", "+a[15]+"]"};quat4={};quat4.create=function(a){var b=new glMatrixArrayType(4);if(a){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3]}return b};quat4.set=function(a,b){b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];return b};
quat4.calculateW=function(a,b){var c=a[0],d=a[1],e=a[2];if(!b||a==b){a[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return a}b[0]=c;b[1]=d;b[2]=e;b[3]=-Math.sqrt(Math.abs(1-c*c-d*d-e*e));return b};quat4.inverse=function(a,b){if(!b||a==b){a[0]*=1;a[1]*=1;a[2]*=1;return a}b[0]=-a[0];b[1]=-a[1];b[2]=-a[2];b[3]=a[3];return b};quat4.length=function(a){var b=a[0],c=a[1],d=a[2];a=a[3];return Math.sqrt(b*b+c*c+d*d+a*a)};
quat4.normalize=function(a,b){b||(b=a);var c=a[0],d=a[1],e=a[2],g=a[3],f=Math.sqrt(c*c+d*d+e*e+g*g);if(f==0){b[0]=0;b[1]=0;b[2]=0;b[3]=0;return b}f=1/f;b[0]=c*f;b[1]=d*f;b[2]=e*f;b[3]=g*f;return b};quat4.multiply=function(a,b,c){c||(c=a);var d=a[0],e=a[1],g=a[2];a=a[3];var f=b[0],h=b[1],i=b[2];b=b[3];c[0]=d*b+a*f+e*i-g*h;c[1]=e*b+a*h+g*f-d*i;c[2]=g*b+a*i+d*h-e*f;c[3]=a*b-d*f-e*h-g*i;return c};
quat4.multiplyVec3=function(a,b,c){c||(c=b);var d=b[0],e=b[1],g=b[2];b=a[0];var f=a[1],h=a[2];a=a[3];var i=a*d+f*g-h*e,j=a*e+h*d-b*g,k=a*g+b*e-f*d;d=-b*d-f*e-h*g;c[0]=i*a+d*-b+j*-h-k*-f;c[1]=j*a+d*-f+k*-b-i*-h;c[2]=k*a+d*-h+i*-f-j*-b;return c};quat4.toMat3=function(a,b){b||(b=mat3.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=k+g;b[4]=1-(j+e);b[5]=d-f;b[6]=c-h;b[7]=d+f;b[8]=1-(j+l);return b};
quat4.toMat4=function(a,b){b||(b=mat4.create());var c=a[0],d=a[1],e=a[2],g=a[3],f=c+c,h=d+d,i=e+e,j=c*f,k=c*h;c=c*i;var l=d*h;d=d*i;e=e*i;f=g*f;h=g*h;g=g*i;b[0]=1-(l+e);b[1]=k-g;b[2]=c+h;b[3]=0;b[4]=k+g;b[5]=1-(j+e);b[6]=d-f;b[7]=0;b[8]=c-h;b[9]=d+f;b[10]=1-(j+l);b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return b};quat4.slerp=function(a,b,c,d){d||(d=a);var e=c;if(a[0]*b[0]+a[1]*b[1]+a[2]*b[2]+a[3]*b[3]<0)e=-1*c;d[0]=1-c*a[0]+e*b[0];d[1]=1-c*a[1]+e*b[1];d[2]=1-c*a[2]+e*b[2];d[3]=1-c*a[3]+e*b[3];return d};
quat4.str=function(a){return"["+a[0]+", "+a[1]+", "+a[2]+", "+a[3]+"]"};
/*
 * Copyright 2010, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


/**
 * @fileoverview This file contains functions every webgl program will need
 * a version of one way or another.
 *
 * Instead of setting up a context manually it is recommended to
 * use. This will check for success or failure. On failure it
 * will attempt to present an approriate message to the user.
 *
 *       gl = WebGLUtils.setupWebGL(canvas);
 *
 * For animated WebGL apps use of setTimeout or setInterval are
 * discouraged. It is recommended you structure your rendering
 * loop like this.
 *
 *       function render() {
 *         window.requestAnimFrame(render, canvas);
 *
 *         // do rendering
 *         ...
 *       }
 *       render();
 *
 * This will call your rendering function up to the refresh rate
 * of your display but will stop rendering if your app is not
 * visible.
 */

WebGLUtils = function() {

/**
 * Creates the HTLM for a failure message
 * @param {string} canvasContainerId id of container of th
 *        canvas.
 * @return {string} The html.
 */
var makeFailHTML = function(msg) {
  return '' +
    '<table style="background-color: #8CE; width: 100%; height: 100%;"><tr>' +
    '<td align="center">' +
    '<div style="display: table-cell; vertical-align: middle;">' +
    '<div style="">' + msg + '</div>' +
    '</div>' +
    '</td></tr></table>';
};

/**
 * Mesasge for getting a webgl browser
 * @type {string}
 */
var GET_A_WEBGL_BROWSER = '' +
  'This page requires a browser that supports WebGL.<br/>' +
  '<a href="http://get.webgl.org">Click here to upgrade your browser.</a>';

/**
 * Mesasge for need better hardware
 * @type {string}
 */
var OTHER_PROBLEM = '' +
  "It doesn't appear your computer can support WebGL.<br/>" +
  '<a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>';

/**
 * Creates a webgl context. If creation fails it will
 * change the contents of the container of the <canvas>
 * tag to an error message with the correct links for WebGL.
 * @param {Element} canvas. The canvas element to create a
 *     context from.
 * @param {WebGLContextCreationAttirbutes} opt_attribs Any
 *     creation attributes you want to pass in.
 * @param {function:(msg)} opt_onError An function to call
 *     if there is an error during creation.
 * @return {WebGLRenderingContext} The created context.
 */
var setupWebGL = function(canvas, opt_attribs, opt_onError) {
  function handleCreationError(msg) {
    var container = canvas.parentNode;
    if (container) {
      var str = window.WebGLRenderingContext ?
           OTHER_PROBLEM :
           GET_A_WEBGL_BROWSER;
      if (msg) {
        str += "<br/><br/>Status: " + msg;
      }
      container.innerHTML = makeFailHTML(str);
    }
  };

  opt_onError = opt_onError || handleCreationError;

  if (canvas.addEventListener) {
    canvas.addEventListener("webglcontextcreationerror", function(event) {
          opt_onError(event.statusMessage);
        }, false);
  }
  var context = create3DContext(canvas, opt_attribs);
  if (!context) {
    if (!window.WebGLRenderingContext) {
      opt_onError("");
    }
  }
  return context;
};

/**
 * Creates a webgl context.
 * @param {!Canvas} canvas The canvas tag to get context
 *     from. If one is not passed in one will be created.
 * @return {!WebGLContext} The created context.
 */
var create3DContext = function(canvas, opt_attribs) {
  var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
  var context = null;
  for (var ii = 0; ii < names.length; ++ii) {
    try {
      context = canvas.getContext(names[ii], opt_attribs);
    } catch(e) {}
    if (context) {
      break;
    }
  }
  return context;
}

return {
  create3DContext: create3DContext,
  setupWebGL: setupWebGL
};
}();

/**
 * Provides requestAnimationFrame in a cross browser way.
 */
window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         window.oRequestAnimationFrame ||
         window.msRequestAnimationFrame ||
         function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
           window.setTimeout(callback, 1000/60);
         };
})();// Utilities to manage cookies


function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

// Used wrongly in textWidget.js
// Stub it out until we fix this.
function ComparisonSaveAnnotations() {}



var START_RECORDING_MENU_ITEM;



//==============================================================================
// Create and manage the menu to edit dual views.




function ShowViewEditMenu(x, y) {
    // Viewers have independent annotation visibility (which could be annoying.
    var viewer = EVENT_MANAGER.CurrentViewer;
    if ( ! viewer) { return; }

    var color = "#A0A0A0";
    if (viewer.WidgetList.length > 0) {
      color = "#000000";
    }
 
    $('#viewEditMenu').css({'top': y-15, 'left':x-15}).show();
}

function InitViewEditMenus() {
    // Create the menu of edit options.
    $('<div>').appendTo('body').css({
        'background-color': 'white',
        'border-style': 'solid',
        'border-width': '1px',
        'border-radius': '5px',
        'position': 'absolute',
        'top' : '35px',
        'left' : '35px',
        'z-index': '2',
        'color': '#303030',
        'font-size': '20px'
    }).attr('id', 'viewEditMenu').hide()
      .mouseleave(function(){$(this).fadeOut();});
    
    var viewEditSelector = $('<ol>');
    viewEditSelector.appendTo('#viewEditMenu')
             .attr('id', 'viewEditSelector')
             .css({'width': '100%', 'list-style-type':'none'});
    $('<li>').appendTo(viewEditSelector)
             .text("Load View")
             .click(function(){ShowViewBrowser();});
    // Hack until we have some sort of scale.
    $('<li>').appendTo(viewEditSelector)
             .attr('id', 'dualViewCopyZoom')
             .text("Copy Zoom")
             .hide()
             .click(function(){CopyZoom();});
    $('<li>').appendTo(viewEditSelector)
             .text("Flip Horizontal")
             .click(function(){FlipHorizontal();});
    START_RECORDING_MENU_ITEM = $('<li>')
             .appendTo(viewEditSelector)
             .text("Start Recording")
             .click(function(){$('#viewEditMenu').hide(); RecordingStart();});


             
    // Create a selection list of sessions.   
    $('<div>').appendTo('body').css({
        'background-color': 'white',
        'border-style': 'solid',
        'border-width': '1px',
        'border-radius': '5px',
        'position': 'absolute',
        'top' : '35px',
        'left' : '35px',
        'width' : '500px',
        'height' : '700px',
        'overflow': 'auto',
        'z-index': '2',
        'color': '#303030',
        'font-size': '20px'
    }).attr('id', 'sessionMenu').hide()
        .mouseleave(function(){$(this).fadeOut();});
    $('<ul>').appendTo('#sessionMenu').attr('id', 'sessionMenuSelector');

    // Create a selector for views.   
    $('<div>').appendTo('body').css({
        'background-color': 'white',
        'border-style': 'solid',
        'border-width': '1px',
        'border-radius': '5px',
        'position': 'absolute',
        'top' : '135px',
        'left' : '135px',
        'width' : '500px',
        'height' : '700px',
        'overflow': 'auto',
        'z-index': '2',
        'color': '#303030',
        'font-size': '20px'
    }).attr('id', 'viewMenu').hide()
        .mouseleave(function(){$(this).fadeOut();});
    $('<ul>').appendTo('#viewMenu').attr('id', 'viewMenuSelector'); // <select> for drop down
}


function CopyZoom() {
  $('#viewEditMenu').hide();
  var viewer = EVENT_MANAGER.CurrentViewer;
  if ( ! viewer) { return; }

  var cam = viewer.GetCamera();
  var copyCam;
  if (viewer == VIEWER1) {
    var copyCam = VIEWER2.GetCamera();
  } else {
    var copyCam = VIEWER1.GetCamera();
  }
  
  viewer.AnimateCamera(cam.GetFocalPoint(), cam.Roll, copyCam.Height);
}


// Mirror image
function FlipHorizontal() {
    $('#viewEditMenu').hide();
    // When the circle button is pressed, create the widget.
    var viewer = EVENT_MANAGER.CurrentViewer;
    if ( ! viewer) { return; }

    var cam = viewer.GetCamera();
    viewer.ToggleMirror();
    viewer.SetCamera(cam.GetFocalPoint(), cam.GetRotation()+180.0, cam.Height);
    RecordState();
}


function SessionAdvance() {
// I do not have the session id and it is hard to get!
//    $.get(SESSIONS_URL+"?json=true&sessid="+$(obj).attr('sessid')+"&sessdb="+$(obj).attr('sessdb'),
//          function(data,status){
//            if (status == "success") {
//              ShowViewMenuAjax(data);
//            } else { alert("ajax failed."); }
//          });
}

function SessionAdvanceAjax() {
}






//==============================================================================
// Create and manage the menu to browse and select views.
// Until I get a tree browser (open / close, expand / collapse),
// Just show one session.

// When the menu first is shown, this gets set to remeber which viewer to change.
var ACTIVE_VIEWER;
var VIEW_BROWSER_INFO;

function ShowViewBrowser() {
  ACTIVE_VIEWER = EVENT_MANAGER.CurrentViewer;
  if ( ! ACTIVE_VIEWER) { return; }

  $('#viewBrowser').show();
}

function InitViewBrowser() {
    // A view browser (short cut menu) for the text input.
    $('<div>').appendTo('body').hide().css({
        'background-color': 'white',
        'opacity': '0.9',
        'border-radius': '5px',
        'position': 'absolute',
        'top' : '10%',
        'height' : '80%',
        'left' : '20%',
        'width': '60%',
        'z-index': '2',
        'text-align': 'left',
        'color': '#303030',
        'font-size': '20px',
        'overflow': 'scroll'
    }).attr('id', 'viewBrowser')
      .mouseleave(function () {$('#viewBrowser').hide();});
    
    ReloadViewBrowserInfo();
}

function ReloadViewBrowserInfo() {
  // Get the sessions this user has access to.
  $.get("./sessions?json=true",
          function(data,status){
            if (status == "success") {
              VIEW_BROWSER_INFO = data;
              // I might want to open a session to avoid an extra click.
              // I might want to sort the sessions to put the recent at the top.
              LoadViewBrowserGUI(data);
            } else { alert("ajax failed."); }
          });
}

function LoadViewBrowserGUI() {
  var data = VIEW_BROWSER_INFO;
  $('#viewBrowser').empty();
  groupList = $('<ul>').appendTo('#viewBrowser')

  for (i=0; i < data.sessions.length; ++i) {
    var group = data.sessions[i];
    var groupItem = $('<li>').appendTo(groupList).text(group.rule);
    var sessionList = $('<ul>').appendTo(groupItem)
    for (j=0; j < group.sessions.length; ++j) {
      var session = group.sessions[j];
      $('<li>').appendTo(sessionList)
          .text(session.label)
          .attr('db', session.sessdb).attr('sessid', session.sessid)
          .bind('click', function(){ViewBrowserSessionCallback(this);});
    }
  }
}

function ViewBrowserSessionCallback(obj) {
  // No closing yet.
  // Already open. disable iopening twice.
  $(obj).unbind('click');

  // We need the information in view, image and bookmark (startup_view) object.
  //window.location = "http://localhost:8080/webgl-viewer/comparison-option?db="+$(obj).attr('db')+"&viewid="+$(obj).attr('viewid');
  //$.get("http://localhost:8080/webgl-viewer/comparison-option?db="+$(obj).attr('db')+"&viewid="+$(obj).attr('viewid'),
  var db = $(obj).attr('db');
  var sess = $(obj).attr('sessid');
  $.get("./sessions?json=true"+"&sessdb="+$(obj).attr('db')+"&sessid="+$(obj).attr('sessid'),
        function(data,status){
          if (status == "success") {
            ViewBrowserAddSessionViews(data);
          } else { alert("ajax failed."); }
        });
}

function ViewBrowserAddSessionViews(sessionData) {
    var sessionItem = $("[sessid="+sessionData.sessid+"]");
    var viewList = $('<ul>').appendTo(sessionItem)
    for (var i = 0; i < sessionData.images.length; ++i) {
      var image = sessionData.images[i];
      var item = $('<li>').appendTo(viewList)
          // image.db did not work for ibriham stack (why?)
          .attr('db', sessionData.db)
          .attr('sessid', sessionData.sessid)
          .attr('viewid', image.view)
          .click(function(){ViewBrowserImageCallback(this);});
      $('<img>').appendTo(item)
          .attr('src', "tile?db="+image.db+"&img="+image.img+"&name=t.jpg")     // all images should have thumb.jpg
          .css({'height': '50px'});
      $('<span>').appendTo(item)
          .text(image.label);
      }
}
        
function ViewBrowserImageCallback(obj) {
  $('#viewBrowser').hide();
  
  // null implies the user wants an empty view.
  if (obj == null) {
    ACTIVE_VIEWER.SetCache(null);
    eventuallyRender();
    return;
  }
  
  var db = $(obj).attr('db');
  var viewid = $(obj).attr('viewid');

  $.ajax({
    type: "get",
    url: "/webgl-viewer/getview",
    data: {"sessid": $(obj).attr('sessid'),
           "viewid": $(obj).attr('viewid'),
           "db"  : $(obj).attr('db')},
    success: function(data,status) { ViewBrowserLoadImage(data);},
    error: function() { alert( "AJAX - error() : getview (browser)" ); },
  });  
}

/**
 * Load an image.
 * @param viewer. Main viewer object
 * @param viewData. Options
 * @param url Query url
 */
function LoadImage(viewer, viewData) {
  ACTIVE_VIEWER = viewer;
  var source = new Cache(viewData);
  ACTIVE_VIEWER.SetCache(source);     
  RecordState();
  eventuallyRender();  
  source.SetSource(viewData['url']);
  if(viewData['url'] instanceof Array) 
    {
    LOADING_MAXIMUM = viewData['url'].length * 4;
    }
  if(viewData['use_tms']) ACTIVE_VIEWER.GetCache().EnableTMSMode(true);
}

function ViewBrowserLoadImage(viewData) {
  // If we want to take origin and spacing into account, then we need to change tile geometry computation.
  var imgobj = viewData.ViewerRecords[0].Image;
  var source = new Cache(imgobj);

  ACTIVE_VIEWER.SetCache(source);
     
  RecordState();

  eventuallyRender();
}
// Create and repond to the dual / single view toggle button.

// How the window is deived between viewer1 and viewer1.
// Default: viewer1 uses all available space.
var VIEWER1_FRACTION = 1.0;
 
function InitDualViewWidget(container, imgPath) {
  if(typeof container == "undefined" && typeof imgPath == "undefined")
    {
    container = "body";
    imgPath = 'webgl-viewer/static';
    }
  if ( ! MOBILE_DEVICE) {
    // Todo: Make the button become more opaque when pressed.
    $('<img>').appendTo(container)
      .css({
        'opacity': '0.4',
        'position': 'absolute',
        'height': '20px',
        'width': '20x',
        'top' : '0px',
        'right' : '0%',
        'z-index': '1'})
    .attr('id', 'dualWidgetLeft')
    .attr('type','image')
    .attr('src',imgPath + '/dualArrowLeft2.png')
    .click(function(){ToggleDualView();});

    $('<img>').appendTo(container)
      .hide()
      .css({
        'opacity': '0.4',
        'position': 'absolute',
        'height': '20px',
        'width': '20px',
        'top' : '0px',
        'left' : '50%',
        'z-index': '1'})
    .attr('id', 'dualWidgetRight')
    .attr('type','image')
    .attr('src',imgPath + '/dualArrowRight2.png')
    .click(function(){ToggleDualView();});
    
    VIEWER1.AddGuiElement("#dualWidgetLeft", "Top", 0, "Right", 20);
    VIEWER1.AddGuiElement("#dualWidgetRight", "Top", 0, "Right", 0);    
  }
}

// Called programmatically. No animation.
function SetNumberOfViews(numViews) {
  DUAL_VIEW = (numViews > 1);

  if (DUAL_VIEW) {
    VIEWER1_FRACTION = 0.5;
  } else {
    VIEWER1_FRACTION = 1.0;
  }

  handleResize();    
  DualViewUpdateGui();
}


// It would be nice to animate the transition
// It would be nice to integrate all animation in a flexible utility.
var DUAL_ANIMATION_LAST_TIME;
var DUAL_ANIMATION_DURATION;
var DUAL_ANIMATION_TARGET;

function ToggleDualView() {
  DUAL_VIEW = ! DUAL_VIEW;
  
  if (DUAL_VIEW) {  
    DUAL_ANIMATION_CURRENT = 1.0;
    DUAL_ANIMATION_TARGET = 0.5;
    // Edit menu option to copy camera zoom between views.
    // I do not call update gui here because I want 
    // the buttons to appear at the end of the animation.
    $('#dualViewCopyZoom').show();
    // Animation takes care of switching the buttons
  } else {
    DUAL_ANIMATION_CURRENT = 0.5;
    DUAL_ANIMATION_TARGET = 1.0;
    DualViewUpdateGui();
  }

  RecordState();

  DUAL_ANIMATION_LAST_TIME = new Date().getTime();
  DUAL_ANIMATION_DURATION = 1000.0;
  AnimateViewToggle();
}

function DualViewUpdateGui() {
    // Now swap the buttons.
    if (DUAL_VIEW) {
      $('#dualWidgetLeft').hide();
      $('#dualWidgetRight').show();
      VIEWER2.ShowGuiElements();
      // Edit menu option to copy camera zoom between views.
      $('#dualViewCopyZoom').show();
    } else {
      $('#dualWidgetRight').hide();
      $('#dualViewCopyZoom').hide();
      VIEWER2.HideGuiElements();
      $('#dualWidgetLeft').show();
      // Edit menu option to copy camera zoom between views.
    }
}



function AnimateViewToggle() {
  var timeStep = new Date().getTime() - DUAL_ANIMATION_LAST_TIME;
  if (timeStep > DUAL_ANIMATION_DURATION) {
    // end the animation.
    VIEWER1_FRACTION = DUAL_ANIMATION_TARGET;
    handleResize();    
    DualViewUpdateGui();
    draw();
    return;
    }
  
  var k = timeStep / DUAL_ANIMATION_DURATION;
  
  // update
  DUAL_ANIMATION_DURATION *= (1.0-k);
  VIEWER1_FRACTION += (DUAL_ANIMATION_TARGET-VIEWER1_FRACTION) * k;

  handleResize();
  // 2d canvas does not draw without this.
  draw();
  requestAnimFrame(AnimateViewToggle);
}





// Annotation widget toggles annotation visibility and also shows the drawing tools.
// Each view will need its own widget.  
// I am less happy about this than the right click menu implementation.
// It would be nice to expand the drawing tools on hover, but
// the toggle for annotation visibiity naturally suggests
// the same state should show drawing tool palette.

// Todo:
// - Make an object out of it to support two views.
// - Change behavior of text widget to first drag an arrow when created.
// - eliminate polyLine verticies when they are dragged ontop of another vert.
//   or maybe the delete key.

function AnnotationWidget (viewer, container, imgPath) {
  if(typeof container == "undefined")
    {
    container = "body";
    }
  if(typeof imgPath == "undefined")
    {
    imgPath = "webgl-viewer/static";
    }
    
  var self = this; // trick to set methods in callbacks. 
  this.ImgPath = imgPath;
  this.Viewer = viewer;
  viewer.AnnotationWidget = this;

  if ( ! MOBILE_DEVICE) {
    // We need unique names for the HTML elements.
    this.Widget = $('<table>').appendTo(container)
      .css({
        'opacity': '0.6',
        'position': 'absolute',
        'height': '28px',
        'bottom' : '5px',
        'right' : '20px',
        'z-index': '1'});;

    viewer.AddGuiObject(this.Widget, "Bottom", 5, "Right", 260);

    var row = $('<tr>').appendTo(this.Widget)
    var cell = $('<td>').appendTo(row)
    this.VisibilityButton = $('<img>').appendTo(cell)
      .css({
        'opacity': '0.6',
        'border-radius': '5px'})
      .attr('type','image')
      .attr('src',imgPath+"/pencil3.png")
      .click(function(){self.ToggleVisibility();});
    
    this.ToolsTable = $('<td>').appendTo(row)
      .hide()
      .css({
        'opacity': '0.6',
        'width': '130',
        'border-radius': '5px'});

    $('<img>').appendTo(this.ToolsTable)
      .css({'height': '28px'})
      .attr('type','image')
      .attr('src',imgPath+"/Text.gif")
      .click(function(){self.NewText();});
    $('<img>').appendTo(this.ToolsTable)
      .css({'height': '28px'})
      .attr('type','image')
      .attr('src',imgPath+"/Circle.gif")
      .click(function(){self.NewCircle();});
    $('<img>').appendTo(this.ToolsTable)
      .css({'height': '28px'})
      .attr('type','image')
      .attr('src',imgPath+"/FreeForm.gif")
      .click(function(){self.NewPolyline();});
    $('<img>').appendTo(this.ToolsTable)
      .css({'height': '28px'})
      .attr('type','image')
      .attr('src',imgPath+"/Pencil-icon.jpg")
      .click(function(){self.NewPencil();});
    this.SaveButton = $('<img>').appendTo(this.ToolsTable)
      .css({'height': '28px'})
      .attr('type','image')
      .attr('src',"webgl-viewer/static/save.png")
      .click(function(){self.SaveBrownNote();});
  }
}


AnnotationWidget.prototype.SaveBrownNote = function() {
  NOTES_WIDGET.SaveBrownNote(); 
  this.SaveButton.hide();
  var button = this.SaveButton;
  setTimeout(function(){
               button.show();
             }, 1000); // one second
}

AnnotationWidget.prototype.SetVisibility = function(visibility) {
  if (this.Viewer.GetAnnotationVisibility() == visibility) {
    return;
  }
  if (this.VisibilityButton) {
    if (visibility == ANNOTATION_OFF) {
      this.VisibilityButton.attr('src',this.ImgPath+"/pencil3.png")    
      this.ToolsTable.fadeOut();
    } else if (visibility == ANNOTATION_NO_TEXT) {
      this.VisibilityButton.attr('src',this.ImgPath+"/pencil3Flip.png")
      this.ToolsTable.fadeIn();  
    } else {
      this.VisibilityButton.attr('src',this.ImgPath+"/pencil3Up.png")
    }
  }
  
  this.Viewer.SetAnnotationVisibility(visibility);

  eventuallyRender();    
}

AnnotationWidget.prototype.GetVisibility = function() {
  return this.Viewer.GetAnnotationVisibility();
}

AnnotationWidget.prototype.ToggleVisibility = function() {
  var vis = this.GetVisibility();
  if (vis == ANNOTATION_OFF) {
    vis = ANNOTATION_NO_TEXT;
  } else if (vis == ANNOTATION_NO_TEXT) {
    vis = ANNOTATION_ON;
  } else {
    vis = ANNOTATION_OFF;
  }
  this.SetVisibility( vis );
  RecordState();
}

// I would like to change the behavior of this.  
// First slide the arrow, then pop up the dialog to set text.
AnnotationWidget.prototype.NewText = function() {
  var widget = this.Viewer.ActiveWidget;
  if ( widget ) {
    widget.Deactivate();
  }
  this.SetVisibility(ANNOTATION_ON);
  var widget = new TextWidget(this.Viewer, "");
  // Set default color rom the last text widget setting.
  var hexcolor = document.getElementById("textcolor").value;
  widget.Shape.SetColor(hexcolor);
  widget.AnchorShape.SetFillColor(hexcolor);
  // Default value for anchor shape visibility
  widget.AnchorShape.Visibility = document.getElementById("TextMarker").value;
  this.Viewer.ActiveWidget = widget;

  // The dialog is used to set the initial text.
  widget.ShowPropertiesDialog();
}

// Probably want a singleton pencil.
AnnotationWidget.prototype.NewPencil = function() {
  var widget = this.Viewer.ActiveWidget;
  if ( widget && (widget instanceof PencilWidget)) {
    widget.Deactivate();
    return;
  }
  this.SetVisibility(ANNOTATION_ON);
  var widget = new PencilWidget(this.Viewer, true);
  this.Viewer.ActiveWidget = widget;
}

AnnotationWidget.prototype.NewPolyline = function() {
  var widget = this.Viewer.ActiveWidget;
  if ( widget ) {
    widget.Deactivate();
  }
  this.SetVisibility(ANNOTATION_ON);
  var widget = new PolylineWidget(this.Viewer, true);
  widget.Shape.SetOutlineColor(document.getElementById("polylinecolor").value);
  this.Viewer.ActiveWidget = widget;
}

AnnotationWidget.prototype.NewCircle = function() {
  var widget = this.Viewer.ActiveWidget;
  if ( widget ) {
    widget.Deactivate();
  }
  this.SetVisibility(ANNOTATION_ON);
  var widget = new CircleWidget(this.Viewer, true);
  widget.Shape.SetOutlineColor(document.getElementById("circlecolor").value);
  this.Viewer.ActiveWidget = widget;
}

// This "widget" implements undo and redo as well as saving states in the database for a recording of a session.
// I save the recording state as a cookie so that the user can change slides or even sessions.
// I am going to have a separate recording collection.
// Each recording will be a single object.
// They will be tagged with start time, end time, user ID and a name (autogenerated or entered by user).


// NOTES:
//I will have to think about this ...
//save state vs. save delta state.
//State is simple .... Supports undo better .... Start with this.

// Maybe students can link to the instructor recording session.  The could add notes which are added to the recording.

// It might be nice to know where the mouse is pointing at all times.  We need a pointing tool. That is many events though.  LATER....

// Design issue:
// Should I save the state at the end of a move or the beginning?  I chose end.  Although beginning is easier,
// I like just popping the last state off the TIME_LINE and pushing to the REDO_STACK


//------------------------------------------------------------------------------
// Records are now being used for notes.  Since page record may contain 
// information about current note, I am using ViewerRecord as a shared object.

function ViewerRecord () {
}

// I am still trying to figure out a good pattern for loading
// objects from mongo.  
// Cast to a ViewerObject by setting its prototype does not work on IE
ViewerRecord.prototype.Load = function(obj) {
  for (ivar in obj) {
    this[ivar] = obj[ivar];
  }
  
  if (this.Annotations) {
    for (var i = 0; i < this.Annotations.length; ++ i) {
      var a = this.Annotations[i];
      if (a && a.color) {
        a.color = ConvertColor(a.color);
      }
    }
  }
}


ViewerRecord.prototype.CopyViewer = function (viewer) {
  var cache = viewer.GetCache();
  if ( ! cache) { 
    this.Camera = null;
    this.AnnotationVisibility = false;
    this.Annotations = [];
    return;
  }
    
  this.Image = cache.Image;
  
  var cam = viewer.GetCamera();
  var cameraRecord = {};
  cameraRecord.FocalPoint = cam.GetFocalPoint();
  cameraRecord.Height = cam.GetHeight();
  cameraRecord.Roll = cam.GetRotation();
  this.Camera = cameraRecord;
  
  this.AnnotationVisibility = viewer.GetAnnotationVisibility();
  if (this.AnnotationVisibility) {
    this.Annotations = [];
    for (var i = 0; i < viewer.WidgetList.length; ++i) {
      this.Annotations.push(viewer.WidgetList[i].Serialize());
    }
  }
}

ViewerRecord.prototype.Apply = function (viewer) {
  // If a widget is active, then just inactivate it.
  // It would be nice to undo pencil strokes in the middle, but this feature will have to wait.
  if (viewer.ActiveWidget) {
    // Hackish way to deactivate.
    viewer.ActiveWidget.SetActive(false);
  }
  
  var cache = viewer.GetCache();
  if ( ! cache || this.Image._id != cache.Image._id) {
    var newCache = new Cache(this.Image);
    viewer.SetCache(newCache);
  }

  if (this.Camera != undefined) {
    var cameraRecord = this.Camera;
    viewer.SetCamera(cameraRecord.FocalPoint,
                     cameraRecord.Roll,
                     cameraRecord.Height);
  }
  
  if (this.AnnotationVisibility != undefined) {
    viewer.AnnotationWidget.SetVisibility(this.AnnotationVisibility);
  }
  if (this.Annotations != undefined) {
    // For now lets just do the easy thing and recreate all the annotations.
    viewer.WidgetList = [];
    viewer.ShapeList = [];
    for (var i = 0; i < this.Annotations.length; ++i) {
      viewer.LoadWidget(this.Annotations[i]);
    }
  }
}






// Pointer to 
var TIME_LINE = [];
var REDO_STACK = [];

var RECORDING = false;
var RECORDING_NAME;

var RECORDING_BUTTON;
var UNDO_BUTTON;
var REDO_BUTTON;

function InitRecorderWidget(container, imgPath) {

  if(typeof container == "undefined" && typeof imgPath == "undefined")
    {
    container = "body";
    imgPath = 'webgl-viewer/static';
    }
  // The recording button indicates that recording is in 
  // progress and also acts to stop recording.
  RECORD_BUTTON = $('<img>').appendTo(container)
    .css({
      'opacity': '0.5',
      'position': 'absolute',
      'height': '20px',
      'bottom' : '120px',
      'right' : '20px',
      'z-index': '1'})
    .attr('src',imgPath + '/stopRecording2.png')
    .hide()
    .click(RecordingStop);


  // Optional buttons.  Exposed for testing.
  // Undo (control z) and redo (control y) keys work,
  UNDO_BUTTON = $('<img>').appendTo(container)
    .css({
      'opacity': '0.5',
      'position': 'absolute',
      'height': '30px',
      'bottom' : '5px',
      'right' : '100px',
      'z-index': '1'})
    .attr('src',imgPath + '/undo.png')
    .hide()
    .click(function(){alert("undo");});
  REDO_BUTTON = $('<img>').appendTo(container).css({
      'opacity': '0.5',
      'position': 'absolute',
      'height': '30px',
      'bottom' : '5px',
      'right' : '70px',
      'z-index': '1'})
    .attr('src',imgPath + '/redo.png')
    .hide()
    .click(function(){alert("REDO");});

  RECORDING_NAME = getCookie("SlideAtlasRecording");
  if (RECORDING_NAME != undefined && RECORDING_NAME != "false") {
    RECORDING = true;
    RecordingUpdateGUI();
  }

  // We have to start with one state (since we are recording states at the end of a move).
  RecordState();
}

// Should we name a recording?
function RecordingUpdateGUI() {
  if (RECORDING) {
    START_RECORDING_MENU_ITEM.hide();
    RECORD_BUTTON.show();
  } else {
    START_RECORDING_MENU_ITEM.show();
    RECORD_BUTTON.hide();
  }
}

// Should we name a recording?
function RecordingStart() {
  if (RECORDING) { return; }
  RECORDING = true;
  // Generate a recording name as a placeholder.
  // User should be prompted for a name when recording stops.
  var d = new Date();
  RECORDING_NAME = "Bev" + d.getTime();
  setCookie("SlideAtlasRecording",RECORDING_NAME,1);
  RecordingUpdateGUI();
  // Create a new recording object in the database.
  RecordState();
}

function RecordingStop() {
  if ( ! RECORDING) { return; }
  RECORDING = false;
  setCookie("SlideAtlasRecording","false",1);
  RecordingUpdateGUI();
  
  // Prompt for a name and if the user want to keep the recording.
}

function NewPageRecord() {
  stateRecord = {};
  stateRecord.Viewers = [];
  var viewerRecord = new ViewerRecord();
  viewerRecord.CopyViewer(VIEWER1);
  stateRecord.Viewers.push(viewerRecord);
  if (DUAL_VIEW) {
    viewerRecord = new ViewerRecord();
    viewerRecord.CopyViewer(VIEWER2);
    stateRecord.Viewers.push(viewerRecord);
  }
  // Note state? Which note is current.
  // Placeholder. Notes are not ready yet.
  
  return stateRecord;
}



// Create a snapshot of the current state and push it on  the TIME_LINE stack.
function RecordState() {
  // Redo is an option after undo, until we save a new state.
  REDO_STACK = [];

  var pageRecord = NewPageRecord();
  var d = new Date();
  pageRecord.Time = d.getTime();
  //pageRecord.User = "bev"; // Place holder until I figure out user ids.
  TIME_LINE.push(pageRecord);
  
  if (RECORDING) {
    $.ajax({
      type: "post",
      url: "/webgl-viewer/record-save",
      data: {"record": JSON.stringify( pageRecord ),
             "name"  : RECORDING_NAME,
             "db"    : SESSION_DB,
             "date"  : d.getTime()},
      success: function(data,status){
         //alert(data + "\nStatus: " + status);
         },
      error: function() { alert( "AJAX - error()" ); },
      });
  }
}


// Move the state back in time.
function UndoState() {
  if (TIME_LINE.length > 1) {
    // We need at least 2 states to undo.  The last state gets removed,
    // the second to last get applied.
    var record = TIME_LINE.pop();
    REDO_STACK.push(record);

    // Get the new end state
    record = TIME_LINE[TIME_LINE.length-1];
    // Now change the page to the state at the end of the timeline.
    SetNumberOfViews(record.Viewers.length);
    record.Viewers[0].Apply(VIEWER1);
    if (record.Viewers.length > 1) {
      record.Viewers[1].Apply(VIEWER2);
    }
  }
}

// Move the state forward in time.
function RedoState() {
  if (REDO_STACK.length == 0) {
    return;
  }
  var record = REDO_STACK.pop();
  TIME_LINE.push(record);

  // Now change the page to the state at the end of the timeline.
  SetNumberOfViews(record.Viewers.length);
  record.Viewers[0].Apply(VIEWER1);
  if (record.Viewers.length > 1) {
    record.Viewers[1].Apply(VIEWER2);
  }
}





// RGB [Float, Float, Float] to #RRGGBB string
function ConvertColorToHex(color) {
  var hexDigits = "0123456789abcdef";
  var str = "#";
  for (var i = 0; i < 3; ++i) {
    var tmp = color[i];
    for (var j = 0; j < 2; ++j) {
      tmp *= 16.0;
      var digit = Math.floor(tmp);
      if (digit < 0) { digit = 0; } 
      if (digit > 15){ digit = 15;} 
      tmp = tmp - digit;
      str += hexDigits.charAt(digit);
    }
  }
  return str;
}


// 0-f hex digit to int
function HexDigitToInt(hex) {
  if (hex == '1') {
    return 1.0;
  } else if (hex == '2') {
    return 2.0;
  } else if (hex == '3') {
    return 3.0;
  } else if (hex == '4') {
    return 4.0;
  } else if (hex == '5') {
    return 5.0;
  } else if (hex == '6') {
    return 6.0;
  } else if (hex == '7') {
    return 7.0;
  } else if (hex == '8') {
    return 8.0;
  } else if (hex == '9') {
    return 9.0;
  } else if (hex == 'a' || hex == 'A') {
    return 10.0;
  } else if (hex == 'b' || hex == 'B') {
    return 11.0;
  } else if (hex == 'c' || hex == 'C') {
    return 12.0;
  } else if (hex == 'd' || hex == 'D') {
    return 13.0;
  } else if (hex == 'e' || hex == 'E') {
    return 14.0;
  } else if (hex == 'f' || hex == 'F') {
    return 15.0;
  }
  return 0.0;
}


// Not used at the moment.
// Make sure the color is an array of values 0->1
function ConvertColor(color) {
  // Deal with color names.
  if ( typeof(color)=='string' && color[0] != '#') {
    var colors = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
      "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
      "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
      "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
      "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
      "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
      "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
      "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
      "honeydew":"#f0fff0","hotpink":"#ff69b4",
      "indianred ":"#cd5c5c","indigo ":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
      "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
      "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
      "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
      "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
      "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
      "navajowhite":"#ffdead","navy":"#000080",
      "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
      "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
      "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
      "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
      "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
      "violet":"#ee82ee",
      "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
      "yellow":"#ffff00","yellowgreen":"#9acd32"};
    if (typeof colors[color.toLowerCase()] != 'undefined') {
        color = colors[color.toLowerCase()];
    } else {
        alert("Unknow color " + color);
    }
  }

  // Deal with color in hex format i.e. #0000ff
  if ( typeof(color)=='string' && color.length == 7 && color[0] == '#') {
    var floatColor = [];
    var idx = 1;
    for (var i = 0; i < 3; ++i) {
	    var val = ((16.0 * HexDigitToInt(color[idx++])) + HexDigitToInt(color[idx++])) / 255.0; 
	    floatColor.push(val);
    }
    return floatColor;
  }
  // No other formats for now.
  return color;
}

// This file contains some global variables and misc procedures to
// initials shaders and some buffers we need and to render.

var ROOT_DIV;

var SLICE = 1;

// globals (for now)
var imageProgram;
var textProgram;
var polyProgram;
var mvMatrix = mat4.create();
var pMatrix = mat4.create();
var squareOutlinePositionBuffer;
var squarePositionBuffer;
var tileVertexPositionBuffer;
var tileVertexTextureCoordBuffer;
var tileCellBuffer;

var MOBILE_DEVICE = false;
// Hack to get rid of white lines.
var I_PAD_FLAG = false;


function detectMobile() { 
  MOBILE_DEVICE = false;
  if ( navigator.userAgent.match(/Android/i)) {
   MOBILE_DEVICE = "Andriod";
  }
  if ( navigator.userAgent.match(/webOS/i)) {
   MOBILE_DEVICE = "webOS";
  } 
  if ( navigator.userAgent.match(/iPhone/i)) {
   MOBILE_DEVICE = "iPhone";
  }
  if ( navigator.userAgent.match(/iPad/i)) {
   MOBILE_DEVICE = "iPad";
   I_PAD_FLAG = true;
  }
  if ( navigator.userAgent.match(/iPod/i)) {
   MOBILE_DEVICE = "iPod";
  }
  if ( navigator.userAgent.match(/BlackBerry/i)) {
   MOBILE_DEVICE = "BlackBerry";
  }
  if ( navigator.userAgent.match(/Windows Phone/i)) {
   MOBILE_DEVICE = "Windows Phone";
  }
  if (MOBILE_DEVICE) {
    MAXIMUM_NUMBER_OF_TILES = 5000;
  }
}



// This global is used in every class that renders something.
// I can not test multiple canvases until I modularize the canvas
// and get rid of these globals.
// WebGL context
var GL;

function GetUser() {
  if (typeof(USER) != "undefined") {
    return USER;
  }
  if (typeof(ARGS) != "undefined") {
    return ARGS.User;
  }
  alert ("Could not find user");
  return "";
}
  

function GetViewId () {
  if (typeof(VIEW_ID) != "undefined") {
    return VIEW_ID;
  }
  if (typeof(ARGS) != "undefined") {
    return ARGS.Viewer1.viewid;
  }
  if ( ! NOTES_WIDGET && ! NOTES_WIDGET.RootNote) {
    return NOTES_WIDGET.RootNote._id;
  }
  alert ("Could not find view id");
  return "";
}

function GetSessionDatabase() {
  if (typeof(SESSION_DATABASE) != "undefined") {
    return SESSION_DATABASE;
  }
  if (typeof(ARGS) != "undefined") {
    return ARGS.Viewer1.db;
  }
  alert ("Could not find session database");
  return "";
}


// WebGL Initialization

function doesBrowserSupportWebGL(canvas) {
    try {
        //GL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        GL = canvas.getContext("webgl");
    } catch (e) {
    }
    if (!GL) {
        //alert("Could not initialise WebGL, sorry :-(");
        return false;
    }
   return true;
}



function initGL(container) {
  
  if(typeof container == "undefined")
    {
    CANVAS = $('<canvas>').appendTo('body').css({
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'top' : '0px',
          'left' : '0px',
          'z-index': '1'
      }); 
    }
  else
    {
    CANVAS = CANVAS = $('<canvas>').appendTo(container);
    }  

  GL = CANVAS[0].getContext("webgl") || CANVAS[0].getContext("experimental-webgl");
  
  // Defined in HTML
  initShaderPrograms();
  initOutlineBuffers();
  initImageTileBuffers();
  GL.clearColor(1.0, 1.0, 1.0, 1.0);
  GL.enable(GL.DEPTH_TEST);
}



function getShader(gl, id) {
    var shaderScript = document.getElementById(id);
    if (!shaderScript) {
        return null;
    }

    var str = "";
    var k = shaderScript.firstChild;
    while (k) {
        if (k.nodeType == 3) {
            str += k.textContent;
        }
        k = k.nextSibling;
    }

    var shader;
    if (shaderScript.type == "x-shader/x-fragment") {
        shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
        shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
        return null;
    }

    gl.shaderSource(shader, str);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
    }

    return shader;
}



function initShaderPrograms() {
    polyProgram = createProgram("shader-poly-fs", "shader-poly-vs");
    polyProgram.colorUniform = GL.getUniformLocation(polyProgram, "uColor");

    imageProgram = createProgram("shader-tile-fs", "shader-tile-vs");
    // Texture coordinate attribute and texture image uniform
    imageProgram.textureCoordAttribute
        = GL.getAttribLocation(imageProgram,"aTextureCoord");
    GL.enableVertexAttribArray(imageProgram.textureCoordAttribute);
    imageProgram.samplerUniform = GL.getUniformLocation(imageProgram, "uSampler");



    textProgram = createProgram("shader-text-fs", "shader-text-vs");
    textProgram.textureCoordAttribute
        = GL.getAttribLocation(textProgram, "aTextureCoord");
    GL.enableVertexAttribArray(textProgram.textureCoordAttribute);
    textProgram.samplerUniform
        = GL.getUniformLocation(textProgram, "uSampler");
    textProgram.colorUniform = GL.getUniformLocation(textProgram, "uColor");
}


function createProgram(fragmentShaderID, vertexShaderID) {
    var fragmentShader = getShader(GL, fragmentShaderID);
    var vertexShader = getShader(GL, vertexShaderID);

    var program = GL.createProgram();
    GL.attachShader(program, vertexShader);
    GL.attachShader(program, fragmentShader);
    GL.linkProgram(program);

    if (!GL.getProgramParameter(program, GL.LINK_STATUS)) {
        alert("Could not initialise shaders");
    }

    program.vertexPositionAttribute = GL.getAttribLocation(program, "aVertexPosition");
    GL.enableVertexAttribArray(program.vertexPositionAttribute);

    // Camera matrix
    program.pMatrixUniform = GL.getUniformLocation(program, "uPMatrix");
    // Model matrix
    program.mvMatrixUniform = GL.getUniformLocation(program, "uMVMatrix");

    return program;
}

function initOutlineBuffers() {
    // Outline Square
    vertices = [
        0.0,  0.0,  0.0,
        0.0,  1.0,  0.0,
        1.0, 1.0,  0.0,
        1.0, 0.0,  0.0,
        0.0, 0.0,  0.0];
    squareOutlinePositionBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, squareOutlinePositionBuffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertices), GL.STATIC_DRAW);
    squareOutlinePositionBuffer.itemSize = 3;
    squareOutlinePositionBuffer.numItems = 5;

    // Filled square
    squarePositionBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, squarePositionBuffer);
    vertices = [
        1.0,  1.0,  0.0,
        0.0,  1.0,  0.0,
        1.0,  0.0,  0.0,
        0.0,  0.0,  0.0
    ];
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertices), GL.STATIC_DRAW);
    squarePositionBuffer.itemSize = 3;
    squarePositionBuffer.numItems = 4;
}




//==============================================================================



function initImageTileBuffers() {
    var vertexPositionData = [];
    var textureCoordData = [];

    // Make 4 points
    textureCoordData.push(0.0);
    textureCoordData.push(0.0);
    vertexPositionData.push(0.0);
    vertexPositionData.push(0.0);
    vertexPositionData.push(0.0);

    textureCoordData.push(1.0);
    textureCoordData.push(0.0);
    vertexPositionData.push(1.0);
    vertexPositionData.push(0.0);
    vertexPositionData.push(0.0);

    textureCoordData.push(0.0);
    textureCoordData.push(1.0);
    vertexPositionData.push(0.0);
    vertexPositionData.push(1.0);
    vertexPositionData.push(0.0);

    textureCoordData.push(1.0);
    textureCoordData.push(1.0);
    vertexPositionData.push(1.0);
    vertexPositionData.push(1.0);
    vertexPositionData.push(0.0);

    // Now create the cell.
    var cellData = [];
    cellData.push(0);
    cellData.push(1);
    cellData.push(2);

    cellData.push(2);
    cellData.push(1);
    cellData.push(3);

    tileVertexTextureCoordBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, tileVertexTextureCoordBuffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(textureCoordData), GL.STATIC_DRAW);
    tileVertexTextureCoordBuffer.itemSize = 2;
    tileVertexTextureCoordBuffer.numItems = textureCoordData.length / 2;

    tileVertexPositionBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, tileVertexPositionBuffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertexPositionData), GL.STATIC_DRAW);
    tileVertexPositionBuffer.itemSize = 3;
    tileVertexPositionBuffer.numItems = vertexPositionData.length / 3;

    tileCellBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, tileCellBuffer);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
    tileCellBuffer.itemSize = 1;
    tileCellBuffer.numItems = cellData.length;
}




// Stuff for drawing
var RENDER_PENDING = false;
function eventuallyRender() {
    if (! RENDER_PENDING) {
      RENDER_PENDING = true;
      requestAnimFrame(tick);
    }
}

function tick() {
    RENDER_PENDING = false;
    draw();
}



// TODO:
// I still need to make the zoom buttons relative to the viewport
// Also the callback (zoom) cannot be hardcoded to VIEWER1!!!!!
function initView(viewport) {
  var viewer = new Viewer(viewport, null);
  EVENT_MANAGER.AddViewer(viewer);

  // Place the zoom in / out buttons.
  // Todo: Make the button become more opaque when pressed.
  // Associate with viewer (How???).
  // Place properly (div per viewer?) (viewer.SetViewport also places buttons).
  $('<img>').appendTo('body').css({
      'opacity': '0.4',
      'position': 'absolute',
      'height': '50px',
      'width': '50px',
      'bottom' : '55px',
      'right' : '5px',
      'z-index': '2'
  }).attr('class', 'viewer1').attr('type','image').attr('src',"/webgl-viewer/static/zoomin2.png").click(function(){
           VIEWER1.AnimateZoom(0.5);});
  $('<img>').appendTo('body').css({
      'opacity': '0.4',
      'position': 'absolute',
      'height': '50px',
      'width': '50px',
      'bottom' : '5px',
      'right' : '5px',
      'z-index': '2'
  }).attr('class', 'viewer1').attr('type','image').attr('src',"/webgl-viewer/static/zoomout2.png").click(function(){
           VIEWER1.AnimateZoom(2.0);});                
  return viewer;
}


//==============================================================================
// Alternative to webgl, HTML5 2d canvas

function initGC(container) {

  detectMobile();
  // Add a new canvas.
  if(typeof container == "undefined")
    {
    CANVAS = $('<div>').appendTo("body").css({
              'position': 'absolute',
              'width': '100%',
              'height': '100%',
              'top' : '0px',
              'left' : '0px',
              'z-index': '1'
          });
     
    }
  else
    {
    CANVAS = $(container);
    }    
}


var GC_STACK = [];
var GCT = [1,0,0,1,0,0];
function GC_save() {
  var tmp = [GCT[0], GCT[1], GCT[2], GCT[3], GCT[4], GCT[5]];
  GC_STACK.push(tmp);
}
function GC_restore() {
  var tmp = GC_STACK.pop();
  GCT = tmp;
  GC.setTransform(tmp[0],tmp[1],tmp[2],tmp[3],tmp[4],tmp[5]);  
}
function GC_setTransform(m00,m10,m01,m11,m02,m12) {
  GCT = [m00,m10,m01,m11,m02,m12];
  GC.setTransform(m00,m10,m01,m11,m02,m12);
}
function GC_transform(m00,m10,m01,m11,m02,m12) {
  var n00 = m00*GCT[0] + m10*GCT[2]; 
  var n10 = m00*GCT[1] + m10*GCT[3];
  var n01 = m01*GCT[0] + m11*GCT[2]; 
  var n11 = m01*GCT[1] + m11*GCT[3];
  var n02 = m02*GCT[0] + m12*GCT[2] + GCT[4]; 
  var n12 = m02*GCT[1] + m12*GCT[3] + GCT[5]; 

  GCT = [n00,n10,n01,n11,n02,n12];
  GC.setTransform(n00,n10,n01,n11,n02,n12);
}





//----------------------------------------------------------
// Log to trackdown iPad bug.  Console does not log until
// debugger is running.  Bug does not occur when debugger 
// is running.

LOGGING = false;
DEBUG_LOG = [];

function StartLogging (message) {
  if (LOGGING) return;
  LOGGING = true;
  //alert("Error: Check log");
}

function LogMessage (message) {
  if (LOGGING) {
    DEBUG_LOG.push(message);
  }
}





// Make this a singlton (effectively) for now.
// Two levels of caching and pruning.
// Image without an associated texture map.
// Texture maps (scarcer resource).



var TIME_STAMP = 0;
var NUMBER_OF_TILES = 0;
var NUMBER_OF_TEXTURES = 0;
var MAXIMUM_NUMBER_OF_TILES = 50000;
var MAXIMUM_NUMBER_OF_TEXTURES = 5000;
var PRUNE_TIME_TILES = 0;
var PRUNE_TIME_TEXTURES = 0;
var CACHES = [];

// Keep a queue of tiles to load so we can sort them as
// new requests come in.
var LOAD_QUEUE = [];
var LOADING_COUNT = 0;
var LOADING_MAXIMUM = 4;
var LOAD_TIMEOUT_ID = 0;

var LOAD_PROGRESS_MAX = 0;
var PROGRESS_BAR = null;

function InitProgressBar () {
  if (PROGRESS_BAR) { return;}
  PROGRESS_BAR = $("<div>")
   .appendTo('body')
   .css({"position":"absolute",
         "z-index" : "2",
         "bottom"     : "0px",
         "left"    : "0px",
         "height"  : "3px",
         "width"   : "50%",
         "background-color" : "#404060"});
}



function AdvanceTimeStamp() {
  ++TIME_STAMP;
}

function GetCurrentTime() {
  return TIME_STAMP;
}

// Prunning could be rethought to avoid so much depdency on the cache.
function Prune() {
  var prune = false;
  if (NUMBER_OF_TILES >= MAXIMUM_NUMBER_OF_TILES) {
    // Overflow may be possible after running for a while.
    if (PRUNE_TIME_TILES > TIME_STAMP) {
      PRUNE_TIME_TILES = 0;
    } 
    // Advance the prune threshold.
    PRUNE_TIME_TILES += 0.05 * (TIME_STAMP - PRUNE_TIME_TILES);
    prune = true;
  }
  
  if (NUMBER_OF_TEXTURES >= MAXIMUM_NUMBER_OF_TEXTURES) {
    // Overflow may be possible after running for a while.
    if (PRUNE_TIME_TEXTURES > TIME_STAMP) {
      PRUNE_TIME_TEXTURES = 0;
    } 
    // Advance the prune threshold.
    PRUNE_TIME_TEXTURES += 0.05 * (TIME_STAMP - PRUNE_TIME_TEXTURES);
    prune = true;
  }
  
  if (prune) {  
    for (i in CACHES) {
      cache = CACHES[i];
      cache.PruneTiles();
    }
  }
}


// We could chop off the lowest priority tiles if the queue gets too long.
function LoadQueueAdd(tile) {
  // Record that the tile is used (for prioritizing loading and pruning).
  // Mark all lower res tiles so they will be loaded inthe correct order.
  var tmp = tile;
  while (tmp && tmp.TimeStamp != TIME_STAMP) {
    tmp.TimeStamp = TIME_STAMP;
    tmp = tmp.Parent;
  }

  if (tile.LoadState != 0) { // == 2
    // This tiles is already in the load queue or loaded.
    return;
  }
  
  // Now I want progressive loading so I will not add tiles to the queue if their parents are not completely loaded.
  // I could add all parent and children to the que at the same time, but I have seen children rendered before parents
  // (levels are skipped in progresive updata).  So, lets try this.
  // Now that I am prioritizing the queue on the tiles time stamp and level,  the previous issues should be resolved.
  if (tile.Parent) {
    if (tile.Parent.LoadState == 0) {
      // Not loaded and not in the queue.
      return LoadQueueAdd(tile.Parent);
    }
    if (tile.Parent.LoadState == 1) {
      // Not loaded but in the queue
      return;
    }
  }
  
  // The tile's parent is loaded.  Add the tile to the load queue.
  
  tile.LoadState = 1;
  // Add the tile at the front of the queue.
  LOAD_QUEUE.push(tile);
  
  LoadQueueUpdate();
}

// Push the best tile to the end of the queue.
function PushBestToLast() {
  // Do a sort pass (pushing high priority items to the end.
  var t0 = LOAD_QUEUE[0];
  for (var i = 1; i < LOAD_QUEUE.length; ++i) {
    var t1 = LOAD_QUEUE[i];
    var swap = false;
    if (t1 != null) {
      if (t0 == null) { 
        swap = true; 
      } else if (t0.TimeStamp > t1.TimeStamp) { 
        swap = true; 
      } else if (t0.TimeStamp == t1.TimeStamp && t0.Level < t1.Level) { 
        swap = true;
      }
    }
    if (swap) {
      // Swap the pair.
      LOAD_QUEUE[i] = t0;
      LOAD_QUEUE[i-1] = t1;
    } else {
      t0 = t1;
    }
  }
}



// I need a way to remove tiles from the queue when they are deleted.
// I know this is inefficient.
function LoadQueueRemove(tile) {
  var length = LOAD_QUEUE.length;
  for (var i = 0; i < length; ++i) {
    if (LOAD_QUEUE[i] == tile) {
      tile.LoadState = 0; 
      LOAD_QUEUE[i] = null;
      return;
    }
  }
}


function LoadTimeout() {
  // 4 images requests are too slow.  Reset
  // I do not know which requests failed so I cannot mak another request.
  // TODO: Remember loading tiles (even if only for debugging).
  LOADING_COUNT = 0;
  LoadQueueUpdate();
}

// We will have some number of tiles loading at one time.
// Take the first N tiles from the queue and start loading them.
// Too many and we cannot abort loading.
// Too few and we will serialize loading.
function LoadQueueUpdate() {
  if (LOADING_COUNT < 0) {
    // Tiles must have arrived after timeout.
    LOADING_COUNT = 0;
  }
  while (LOADING_COUNT < LOADING_MAXIMUM && 
         LOAD_QUEUE.length > 0) {
    PushBestToLast();     
    var tile = LOAD_QUEUE.pop();
    // For debugging
    //this.PendingTiles.push(tile);
    if (tile != null) {
      tile.StartLoad(tile.Cache);
      tile.LoadState = 2; // Loading.
      ++LOADING_COUNT;
    }
  }

  // Observed bug: If 4 tile requests never return, loading stops.
  // Do a time out to clear this hang.
  if (LOAD_TIMEOUT_ID) {
    clearTimeout(LOAD_TIMEOUT_ID);
    LOAD_TIMEOUT_ID = 0;
  }
  if (LOADING_COUNT) {
    LOAD_TIMEOUT_ID = setTimeout(function(){LoadTimeout();}, 1000);
  }

  if (PROGRESS_BAR) {
    if (LOAD_PROGRESS_MAX < LOAD_QUEUE.length) {
      LOAD_PROGRESS_MAX = LOAD_QUEUE.length;
    }
    var width = (100 * LOAD_QUEUE.length / LOAD_PROGRESS_MAX).toFixed();
    width = width + "%";
    PROGRESS_BAR.css({"width" : width});
    // Reset maximum
    if (LOAD_QUEUE.length == 0) {
      LOAD_PROGRESS_MAX = 0;
    }
  }
}

// Issue: Tiles call this method when their image gets loaded.
// How does the tile know which cache it belongs too.
// Marks a tile as loaded so another can start.
function LoadQueueLoaded(tile) {
    --LOADING_COUNT;
    tile.LoadState = 3; // Loaded
    LoadQueueUpdate();
}

// This is called if their was a 404 image not found error.
function LoadQueueError(tile) {
  tile.LoadState = 4; // Error Loading
  --LOADING_COUNT;
  LoadQueueUpdate();
}

//==============================================================================
// Camera Object
function Camera (viewportWidth, viewportHeight) {
    // Better managmenet of layers and sub layers.
    // Assign a range of the z buffer  for the view to use exclusively.
    // The full range is -1->1.  -1 is in front.
    this.ZRange = [-1.0,1.0];
    this.Roll = 0;
    this.Matrix = mat4.create();
    this.ViewportWidth = viewportWidth;
    this.ViewportHeight = viewportHeight;
    this.Height = 256.0 * 64.0;
    this.FocalPoint = [128.0*64.0, 128.0*64.0, 10.0];
    this.ComputeMatrix();
    // for drawing the view bounds.
    this.Points = [];
    this.Buffer = null;
    this.CreateBuffer();
    this.Mirror = false;
}


Camera.prototype.SetViewport = function (viewport) {
  if (10*viewport[3] < viewport[2]) {
    alert("Unusual viewport " + viewport[3]);
    return;
  }
  this.ViewportWidth = viewport[2];
  this.ViewportHeight = viewport[3];
}



Camera.prototype.GetRotation = function () {
    return this.Roll * 180.0 / 3.1415926535;
}

Camera.prototype.GetFocalPoint = function () {
  // Copy to avoid bugs because arrays are shared.
  // These are nasty to find.
  return [this.FocalPoint[0],this.FocalPoint[1],this.FocalPoint[2]]; 
}

Camera.prototype.SetFocalPoint = function (x, y) {
  if (isNaN(x) || isNaN(y)) {
    console.log("iPad bug: Camera went crazy.");
    return;
  }
  this.FocalPoint[0] = x;
  this.FocalPoint[1] = y;
  // Ignore z on purpose.
}

// dx, dy are in view coordinates [-0.5,0.5].  
// The camera matrix converts world to view.
Camera.prototype.HandleTranslate = function (dx,dy) {
    // Convert view vector to world vector.
    // We could invert the matrix to get the transform, but this is easier for now.....
    var s = Math.sin(this.Roll);
    var c = Math.cos(this.Roll);
    var x = this.FocalPoint[0];
    var y = this.FocalPoint[1];
    var z = this.FocalPoint[2];
    var w = this.GetWidth();
    var h = this.GetHeight();
    
    if (this.Mirror) {
      dy = -dy;
    }
    
    // Scale to world.
    dx = dx * w;
    dy = dy * w;
    // Rotate
    var rx = dx*c + dy*s;
    var ry = dy*c - dx*s;

    this.Translate(rx,ry,0.0);
}

// x,y are in display coordiantes (origin at the center).  
// dx,dy are in the same coordinates system (scale).
// Scale does not matter because we only care about rotation.
Camera.prototype.HandleRoll = function (x,y, dx, dy) {
  // Avoid divide by zero / singularity
  if (x == 0 && y == 0) {
    return;
  }
  // Orthogonal (counter clockwise) dot dVect.
  var dRoll = -y*dx +x*dy;
  // Remove magnitude of location.
  // Scale by R to get correct angle.
  dRoll = dRoll / (x*x + y*y);
  if ( this.Mirror) {
    dRoll = -dRoll;
  }
  // Keep roll in radians.
  this.Roll += dRoll;
  
  this.ComputeMatrix();
}


Camera.prototype.Translate = function (dx,dy,dz) {
  if (isNaN(dx) || isNaN(dy) || isNaN(dz)) {
    console.log("iPad bug: Camera went crazy.");
    return;
  }
  this.FocalPoint[0] += dx;
  this.FocalPoint[1] += dy;
  this.FocalPoint[2] += dz;
  this.ComputeMatrix();
}


Camera.prototype.GetHeight = function () {
  return this.Height;
}


Camera.prototype.SetHeight = function (height) {
  if (isNaN(height)) {
    console.log("iPad bug: Camera went crazy.");
    return;
  }
  this.Height = height;
}


Camera.prototype.GetWidth = function () {
  return this.Height * this.ViewportWidth / this.ViewportHeight;
}

// Camera matrix transforms points into camera coordinate system 
// X:(-1->1)
// Y:(-1->1) (-1 is bottom)
// Z:(-1->1) (-1 is front)
Camera.prototype.ComputeMatrix = function () {
    var s = Math.sin(this.Roll);
    var c = Math.cos(this.Roll);
    var x = this.FocalPoint[0];
    var y = this.FocalPoint[1];
    var z = this.FocalPoint[2];
    var w = this.GetWidth();
    // var ht = this.GetHeight();  The iPad got this wrong?????
    var ht = this.Height;

    if (ht > 1000000) {
      StartLogging();
      LogMessage("First height is big " + this.height);
    }
    if (w < 0) { return; }

    if (this.Mirror) { ht = -ht; }
    
    mat4.identity(this.Matrix);

    this.Matrix[0] = c;
    this.Matrix[1] = s*w/ht;
    this.Matrix[4] =  -s;
    this.Matrix[5] =  c*w/ht;
    this.Matrix[10]=  (this.ZRange[1]-this.ZRange[0])*0.5;
    this.Matrix[12]= -c*x + s*y;
    this.Matrix[13]= (w/ht)*(-s*x - c*y);
    this.Matrix[14]=  -z + (this.ZRange[1]+this.ZRange[0])*0.25*w;
    this.Matrix[15]=  0.5*w;

  if (Math.abs(this.Matrix[5]) < 0.01 &&
      Math.abs(this.Matrix[4]) < 0.01) {
    StartLogging();
    LogMessage("m[4] " + this.Matrix[4]);
    LogMessage("m[5] " + this.Matrix[4]);
    LogMessage("c = " + c);
    LogMessage("w = " + w);
    LogMessage("ht = " + ht);
    LogMessage("height = " + this.Height);
  }
}

// TODO: ROOT_SPACING IS UNDEFINED.
// Reset is not bound to any event.
Camera.prototype.Reset = function () {
    // Compute the bounds
    var bounds = [];
    bounds[0] = bounds[2] = bounds[4] = 0.0;
    bounds[1] = TILE_DIMENSIONS[0] * ROOT_SPACING[0];
    bounds[3] = TILE_DIMENSIONS[1] * ROOT_SPACING[1];
    bounds[5] = NUMBER_OF_SECTIONS * ROOT_SPACING[2];

    this.SetFocalPoint((bounds[0] + bounds[1]) * 0.5,
                       (bounds[2] + bounds[3]) * 0.5);
    // We would need to set slice as well.
    //this.FocalPoint[2] = (bounds[4] + bounds[5]) * 0.5;
    this.SetHeight(bounds[3]-bounds[2]);
    this.ComputeMatrix();
}

// Currenly assumes parallel projection and display z range = [-1,1].
// Also no rotation!
// a.k.a. This method does not work.
Camera.prototype.DisplayToWorld = function (x,y,z) {
    var scale = this.Height / this.ViewportHeight;
    x = x - (0.5*this.ViewportWidth);
    y = y - (0.5*this.ViewportHeight);
    var worldPt = [];
    worldPt[0] = this.FocalPoint[0] + (x * scale);
    worldPt[1] = this.FocalPoint[1] + (y * scale);
    worldPt[2] = this.FocalPoint[2] + (z * this.Height * 0.5);

    return worldPt;
}

Camera.prototype.AddPoint = function (x, y, z) {
    this.Points.push(x);
    this.Points.push(y);
    this.Points.push(z);
}

Camera.prototype.CreateBuffer = function () {
  if (GL) {
    if (this.Buffer != null) {
      GL.deleteBuffer(this.Buffer);
    }
    this.Buffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, this.Buffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.Points), 
                  GL.STATIC_DRAW);
  }
}

// Getting rid of this.
Camera.prototype.UpdateBuffer = function() {
    this.Points = [];
    var cx = this.FocalPoint[0];
    var cy = this.FocalPoint[1];
    var rx = this.GetWidth() * 0.5;
    var ry = this.GetHeight() * 0.5;
    this.AddPoint(cx-rx, cy-ry);
    this.AddPoint(cx+rx, cy-ry);
    this.AddPoint(cx+rx, cy+ry);
    this.AddPoint(cx-rx, cy+ry);
    this.AddPoint(cx-rx, cy-ry);
    this.CreateBuffer();
}


// Camera is already set.
Camera.prototype.Draw = function (overview) {
  var overviewCam = overview.Camera;
  var viewport = overview.Viewport;

  var cx = this.FocalPoint[0];
  var cy = this.FocalPoint[1];
  var rx = this.GetWidth() * 0.5;
  var ry = this.GetHeight() * 0.5;

  // To handle rotation, I need to pass the center through
  // the overview camera matrix. Coordinate system is -1->1
  var newCx = (cx*overviewCam.Matrix[0] + cy*overviewCam.Matrix[4] 
                + overviewCam.Matrix[12]) / overviewCam.Matrix[15];
  var newCy = (cx*overviewCam.Matrix[1] + cy*overviewCam.Matrix[5] 
                + overviewCam.Matrix[13]) / overviewCam.Matrix[15];

  if (GL) {
    // I having trouble using the overview camera, so lets just compute
    // the position of the rectangle here.
    var ocx = overviewCam.FocalPoint[0];
    var ocy = overviewCam.FocalPoint[1];
    var orx = overviewCam.GetWidth() * 0.5;
    var ory = overviewCam.GetHeight() * 0.5;

    program = polyProgram;
    GL.useProgram(program);
    GL.uniform3f(program.colorUniform, 0.9, 0.0, 0.9);

    GL.viewport(viewport[0],viewport[1],viewport[2],viewport[3]);
    mat4.identity(pMatrix);
    GL.uniformMatrix4fv(program.pMatrixUniform, false, pMatrix);

    var viewFrontZ = overviewCam.ZRange[0]+0.001;

    mat4.identity(mvMatrix);
    //mvMatrix[12] = ((cx-rx)-ocx)/orx;
    //mvMatrix[13] = ((cy-ry)-ocy)/ory;
    mvMatrix[12] = newCx-(rx/orx);
    mvMatrix[13] = newCy-(ry/ory);
    mvMatrix[14] = viewFrontZ;
    mvMatrix[0] = 2*rx/orx;
    mvMatrix[5] = 2*ry/ory;

    GL.bindBuffer(GL.ARRAY_BUFFER, squareOutlinePositionBuffer);
    GL.vertexAttribPointer(program.vertexPositionAttribute, 
    			   squareOutlinePositionBuffer.itemSize, 
    			   GL.FLOAT, false, 0, 0);    
    GL.uniformMatrix4fv(program.mvMatrixUniform, false, mvMatrix);
    GL.drawArrays(GL.LINE_STRIP, 0, squareOutlinePositionBuffer.numItems);
  } else {
    // Transform focal point from -1->1 to viewport
    newCx = (1.0 + newCx) * viewport[2] * 0.5;
    newCy = (1.0 - newCy) * viewport[3] * 0.5;
    // Scale width and height from world to viewport.
    rx = rx * viewport[3] / overviewCam.GetHeight();
    ry = ry * viewport[3] / overviewCam.GetHeight();

    // The 2d canvas was left in world coordinates.
    var ctx = overview.Context2d;
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);
    if(typeof overview.Color != undefined)
      {
      ctx.strokeStyle=overview.Color;
      }
    else
      {
      ctx.strokeStyle="#4011E5";
      }
    ctx.strokeRect(newCx-rx,newCy-ry,2*rx,2*ry);
    ctx.restore();
  }
  
}






// I want to avoid adding a Cache instance variable.
// I need to create the temporary object to hold pointers
// to both the cache and the tile which we are waiting for
// the image to load.  The callback only gives a single reference.
function LoadTileCallback(tile,cache) {
    this.Tile = tile;
    this.Cache = cache;
}

// Cache is now saved in tile ivar.
LoadTileCallback.prototype.HandleLoadedImage = function () {
  LoadQueueLoaded(this.Tile);
}

// If we cannot load a tile, we need to inform the cache so it can start
// loading another tile.
LoadTileCallback.prototype.HandleErrorImage = function () {
    LoadQueueError(this.Tile);
}


function GetLoadImageFunction (callback) {
    return function () {callback.HandleLoadedImage();}
}
function GetErrorImageFunction (callback) {
    return function () {callback.HandleErrorImage();}
}


// Three stages to loading a tile: (texture map is created when the tile is rendered.
// 1: Create a tile object.
// 2: Initialize the texture.
// 3: onload is called indicating the image has been loaded.
function Tile(x, y, z, level, name, cache) {
  // This should be implicit.
  //this is just for debugging
  //this.Id = x + (y<<level)
  //
  this.Cache = cache;
  this.X = x;
  this.Y = y;
  this.Level = level;
  this.Children = [];
  this.Parent = null;
  this.LoadState = 0;
  this.Name = name;
  this.Texture = null;
  this.TimeStamp = TIME_STAMP;
  this.BranchTimeStamp = TIME_STAMP;
  
  this.Matrix = mat4.create();
  mat4.identity(this.Matrix);
  this.Matrix[14] = z * cache.RootSpacing[2] -(0.1 * this.Level);

  // Default path is to place shared geometry with the matrix.
  if ( ! cache.Warp) {
    // TODO: We should have a simple version of warp that creates this matrix for us.
    // Use shared buffers and place them with the matrix transformation.
    var xScale = cache.TileDimensions[0] * cache.RootSpacing[0] / (1 << this.Level);
    var yScale = cache.TileDimensions[1] * cache.RootSpacing[1] / (1 << this.Level);
    this.Matrix[0] = xScale;
    this.Matrix[5] = yScale;
    this.Matrix[12] = this.X * xScale;
    this.Matrix[13] = this.Y * yScale;
    this.Matrix[15] = 1.0;

    // These tiles share the same buffers.  Do not crop when there is no warp.
    this.VertexPositionBuffer = tileVertexPositionBuffer;
    this.VertexTextureCoordBuffer = tileVertexTextureCoordBuffer;
    this.CellBuffer = tileCellBuffer;
  } else {
    // Warp model.
    this.CreateWarpBuffer(cache.Warp);
  }
  
  ++NUMBER_OF_TILES;
};

Tile.prototype.destructor=function()
{
  --NUMBER_OF_TILES;
  this.DeleteTexture();
  delete this.Matrix;
  this.Matrix = null;
  if (this.Image) {
    delete this.Image;
    this.Image = 0;
  }
  for (var i = 0; i < 4; ++i) {
    if (this.Children[i] != null) {
        this.Children[i].destructor();
        this.Children[i] = null;
    }
  }
}

// This is for connectome stitching.  It uses texture mapping
// to dynamically warp images.  It only works with webGL.
Tile.prototype.CreateWarpBuffer = function (warp) {
  // Compute the tile bounds.
  var tileDimensions = this.Cache.TileDimensions;
  var rootSpacing = this.Cache.RootSpacing;
  var p = (1 << this.Level);
  var size = [rootSpacing[0]*tileDimensions[0]/p, rootSpacing[1]*tileDimensions[1]/p];
  var bds = [size[0]*this.X, size[0]*(this.X+1), 
             size[1]*this.Y, size[1]*(this.Y+1),
             this.Level, this.Level];

  // Tile geometry buffers.
  var vertexPositionData = [];
  var tCoordsData = [];
  var cellData = [];

  warp.CreateMeshFromBounds(bds, vertexPositionData, tCoordsData, cellData);

  this.VertexTextureCoordBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexTextureCoordBuffer);
  GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(tCoordsData), GL.STATIC_DRAW);
  this.VertexTextureCoordBuffer.itemSize = 2;
  this.VertexTextureCoordBuffer.numItems = tCoordsData.length / 2;
  
  this.VertexPositionBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
  GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertexPositionData), GL.STATIC_DRAW);
  this.VertexPositionBuffer.itemSize = 3;
  this.VertexPositionBuffer.numItems = vertexPositionData.length / 3;

  this.CellBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
  GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
  this.CellBuffer.itemSize = 1;
  this.CellBuffer.numItems = cellData.length;
}



// This starts the loading of the tile.
// Loading is asynchronous, so the tile will not
// immediately change its state.
Tile.prototype.StartLoad = function (cache) {
  if (this.LoadState >= 2) {
    return;
  }

  var imageSrc;
  if (cache.Image.type && cache.Image.type == "stack") {
    imageSrc = cache.GetSource() + this.Name + ".png";
  } else {
    imageSrc = cache.GetSource() + this.Name + ".jpg";
  }
  
  // Reusing the image caused problems.
  //if (this.Image == null) {
    this.Image = new Image();
    var callback = new LoadTileCallback(this, cache);
    this.Image.onload = GetLoadImageFunction(callback);
    this.Image.onerror = GetErrorImageFunction(callback);
  //}
  // This starts the loading.
  this.Image.src = imageSrc;
};


Tile.prototype.Draw = function (program, context) {
  // Load state 0 is: Not loaded and not scheduled to be loaded yet.
  // Load state 1 is: not loaded but in the load queue.
  if ( this.LoadState != 3) {
    // This should never happen.
    return;
  }

  if (GL) {
    if (this.Texture == null) {
      this.CreateTexture();
    }      
    // These are the same for every tile.
    // Vertex points (shifted by tiles matrix)
    context.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
    // Needed for outline ??? For some reason, DrawOutline did not work
    // without this call first.
    context.vertexAttribPointer(imageProgram.vertexPositionAttribute, 
                          this.VertexPositionBuffer.itemSize, 
                          GL.FLOAT, false, 0, 0);     // Texture coordinates
    context.bindBuffer(GL.ARRAY_BUFFER, this.VertexTextureCoordBuffer);
    context.vertexAttribPointer(imageProgram.textureCoordAttribute, 
                          this.VertexTextureCoordBuffer.itemSize, 
                          GL.FLOAT, false, 0, 0);
    // Cell Connectivity
    context.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);

      // Texture
    context.activeTexture(GL.TEXTURE0);
    context.bindTexture(GL.TEXTURE_2D, this.Texture);

    context.uniform1i(program.samplerUniform, 0);
    // Matrix that tranforms the vertex p
    context.uniformMatrix4fv(program.mvMatrixUniform, false, this.Matrix);

    context.drawElements(GL.TRIANGLES, this.CellBuffer.numItems, GL.UNSIGNED_SHORT, 0);
  } else {
    // It is harder to flip the y axis in 2d canvases because the image turns upside down too.
    // WebGL handles this by flipping the texture coordinates.  Here we have to
    // translate the tiles to the correct location.
    context.save(); // Save the state of the transform so we can restore for the next tile.
    
    // Map tile to world.
    // Matrix is world to 0-1.
    context.transform(this.Matrix[0], this.Matrix[1],
                      this.Matrix[4], this.Matrix[5],
                      this.Matrix[12], this.Matrix[13]);         


    // Flip the tile upside down, but leave it in the same place
    context.transform(1.0,0.0, 0.0,-1.0, 0.0, 1.0);

    // map pixels to Tile
    // assume tile is 256x256
    // Shift a half pixel (white line fix) Draw tile one pixel bigger.
    if (I_PAD_FLAG) {
      context.transform(1.0/256.0, 0.0, 0.0, 1.0/256.0, 0.0, 0.0);  
    } else {
      context.transform(1.0/255.5, 0.0, 0.0, 1.0/255.5, -0.25/255.0, -0.25/255.0);  
    }

    context.drawImage(this.Image,0,0);
    //context.strokeStyle="green"; // I need to find the method that converts RBG array to hex color
    //context.rect(0,0,256, 256); 
    //context.stroke();    
    
    if(this.Cache.DebugMode)
      {
      context.lineWidth=1;
      context.fillStyle="#000000";
      context.lineStyle="#000000";
      context.font="12px sans-serif";
      context.fillText(this.Name, this.Cache.TileDimensions[0]/2, this.Cache.TileDimensions[1]/2);
      }

    //  Transform to map (0->1, 0->1)
    context.restore();
  }
}

Tile.prototype.CreateTexture = function () {
  if (this.Texture != null) { return;}

  ++NUMBER_OF_TEXTURES; // To determine when to prune textures.
  this.Texture = GL.createTexture();
  var texture = this.Texture;
  //alert(tile);
  GL.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, true);
  GL.bindTexture(GL.TEXTURE_2D, texture);
  GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, this.Image);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_S, GL.CLAMP_TO_EDGE);
  GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_WRAP_T, GL.CLAMP_TO_EDGE);
  GL.bindTexture(GL.TEXTURE_2D, null);
}

Tile.prototype.DeleteTexture = function () {
  if (this.Texture) {
    --NUMBER_OF_TEXTURES; // To determine when to prune textures.
    GL.deleteTexture(this.Texture);
    this.Texture = null;
  }
}


// Source is the directory that contains the tile files.
function Cache(image) {
  // Look through existing caches and reuse one if possible
  for (var i = 0; i < CACHES.length; ++i) {
    if (CACHES[i].Image._id == image._id) {
      return CACHES[i];
    }
  }
  
  var sourceStr = "/tile?img="+image._id+"&db="+image.database+"&name=";
  
  this.Image = image;
  
  // See http://wiki.osgeo.org/wiki/Tile_Map_Service_Specification
  this.UseTMS = false;

  // For debugging
  //this.PendingTiles = [];
  this.Source = sourceStr;
  
  this.SourceIndex = 0;

  this.DebugMode = false;
  if(typeof image.debug != "undefined")
    {
    this.DebugMode = image.debug;
    }
  this.Warp = null;
  this.RootSpacing = [1<<(image.levels-1), 1<<(image.levels-1), 10.0];
  this.RootTiles = [];
  // Keep a global list for pruning tiles.
  CACHES.push(this);
  if (image.type && image.type == "stack") {
    this.NumberOfSections = image.dimensions[2];
    this.TileDimensions = [image.dimensions[0], image.dimensions[1]];
    var qTile;
    for (var slice = 1; slice <= this.NumberOfSections; ++slice) {
      qTile = this.GetTile(slice, 0, 0);
      LoadQueueAdd(qTile);
    }
  } else {
    this.TileDimensions = [256, 256];
    this.NumberOfSections = 1;
  }
}

Cache.prototype.destructor=function()
{
}


Cache.prototype.GetLeafSpacing = function() {
  return this.RootSpacing[0] / (1 << (this.Image.levels-1));
}

Cache.prototype.GetBounds = function() {
  if (this.Image && this.Image.bounds) {
    return this.Image.bounds;
  }
  return [0,10000,0,10000]
}

Cache.prototype.EnableTMSMode = function(value)
{
  this.UseTMS = value;
}


// This method converts a point in image coordinates to a point in world coordinates.
Cache.prototype.ImageToWorld = function(imagePt) {
  if (this.Warp) {
    return this.Warp.ImageToWorld(imagePt);
  }
  // Just shift by the origin.
  // Assume spacing is 1.
  // This should be a simple matrix version of warp.
  return [imagePt[0]+this.Origin[0], imagePt[1]+this.Origin[1]];
}

// This method converts a point in world coordinates to a point in cache-image coordinates.
Cache.prototype.WorldToImage = function(worldPt) {
  if (this.Warp) {
    return this.Warp.WorldToImage(worldPt);
  }
  // Just shift by the origin.
  // Assume spacing is 1.
  // TODO:
  // This should be a simple matrix version of warp.  
  return [worldPt[0]-this.Origin[0], worldPt[1]-this.Origin[1]];
}

Cache.prototype.SetSource = function(url)
{
  this.Source = url;
}

Cache.prototype.GetSource=function()
{
  if(this.Source instanceof Array) 
    {
    var index = this.SourceIndex;
    var maxIndex = this.Source.length;
    if(index == maxIndex-1)
      {
      this.SourceIndex = 0;
      }
    else
      {
      this.SourceIndex++;
      }
    return this.Source[index];
    } 
  else 
    {
    return this.Source
    }
}
  

Cache.prototype.LoadRoots = function () {
    var qTile;
    if ( this.Image.dimensions == undefined) {
	return;
    }
    for (var slice = 1; slice <= this.Image.dimensions[2]; ++slice) {
        qTile = this.GetTile(slice, 0, 0);
        LoadQueueAdd(qTile);
    }
    return;
    
    // Theses were for a demo (preload).
    for (var slice = 201; slice < 251; ++slice) {
        for (var j = 0; j < 4; ++j) {
            qTile = this.GetTile(slice, 1, j);
            LoadQueueAdd(qTile);
        }
    }
    for (var slice = 0; slice < 50; ++slice) {
        for (var j = 0; j < 4; ++j) {
            qTile = this.GetTile(slice, 1, j);
            LoadQueueAdd(qTile);
        }
        qTile = this.GetTile(slice, 5, 493);
        LoadQueueAdd(qTile);
        qTile = this.GetTile(slice, 5, 494);
        LoadQueueAdd(qTile);
        qTile = this.GetTile(slice, 5, 495);
        LoadQueueAdd(qTile);
        qTile = this.GetTile(slice, 5, 525);
        LoadQueueAdd(qTile);
        qTile = this.GetTile(slice, 5, 526);
        LoadQueueAdd(qTile);
        qTile = this.GetTile(slice, 5, 527);
        LoadQueueAdd(qTile);
    }       
}


// ------ I think this method really belongs in the view! -----------
// This could get expensive because it is called so often.
// Eventually I want a quick coverage test to exit early.
// iPad flag includes low resolution ancestors to get rid of white lines between tiles.
Cache.prototype.ChooseTiles = function(view, slice, tiles) {
  // I am prioritizing tiles in the queue by time stamp.
  // Loader sets the the tiles time stamp.
  // Time stamp only progresses after a whole render.
  AdvanceTimeStamp();

  // I am putting this here to avoid deleting tiles
  // in the rendering list.
  Prune();           

  // Pick a level to display.
  //var fast = document.getElementById("fast").checked;
  // Todo: fix this hack. (now a global variable gl).
  var canvasHeight = view.Viewport[3];
  var tmp = this.TileDimensions[1]*this.RootSpacing[1] / view.Camera.Height;
  //if (fast) {
  //  tmp = tmp * 0.5;
  //}
  tmp = tmp * canvasHeight / this.TileDimensions[1];
  var level = 0;
  while (tmp > 1.0) {
      ++level;
      tmp = tmp * 0.5;
  }

  // Compute the world bounds of camera view.
  var xMax = 0.0;
  var yMax = 0.0;
  var hw = view.Camera.GetWidth()*0.5;
  var hh = view.Camera.GetHeight()*0.5;
  var roll = view.Camera.Roll;
  var s = Math.sin(roll);
  var c = Math.cos(roll);
  var rx, ry;
  // Choose a camera corner and rotate. (Center of bounds in origin).
  rx = hw*c + hh*s;
  ry = hh*c - hw*s;
  // Expand bounds.
  if (xMax < rx)  { xMax = rx;}
  if (xMax < -rx) { xMax = -rx;}
  if (yMax < ry)  { yMax = ry;}
  if (yMax < -ry) { yMax = -ry;}
  // Now another corner (90 degrees away).
  rx = hw*c - hh*s;
  ry = -hh*c - hw*s;
  // Expand bounds.
  if (xMax < rx)  { xMax = rx;}
  if (xMax < -rx) { xMax = -rx;}
  if (yMax < ry)  { yMax = ry;}
  if (yMax < -ry) { yMax = -ry;}
  
  var bounds = [];
  bounds[0] = view.Camera.FocalPoint[0]-xMax;
  bounds[1] = view.Camera.FocalPoint[0]+xMax;
  bounds[2] = view.Camera.FocalPoint[1]-yMax;
  bounds[3] = view.Camera.FocalPoint[1]+yMax;

  // Adjust bounds to compensate for warping.
  if (this.Warp) {
    // If this is too slow (occurs every render) we can estimate.
    var iPt = this.WorldToImage([bounds[0], bounds[2]]);
    if ( ! iPt) { tiles.length = 0; return tiles;} 
    var iBounds = [iPt[0], iPt[0], iPt[1], iPt[1]];
    iPt = this.WorldToImage([bounds[1], bounds[2]]);
    if ( ! iPt) { tiles.length = 0; return tiles;} 
    if (iBounds[0] > iPt[0]) { iBounds[0] = iPt[0]; }
    if (iBounds[1] < iPt[0]) { iBounds[1] = iPt[0]; }
    if (iBounds[2] > iPt[1]) { iBounds[2] = iPt[1]; }
    if (iBounds[3] < iPt[1]) { iBounds[3] = iPt[1]; }
    iPt = this.WorldToImage([bounds[0], bounds[3]]);
    if ( ! iPt) { tiles.length = 0; return tiles;} 
    if (iBounds[0] > iPt[0]) { iBounds[0] = iPt[0]; }
    if (iBounds[1] < iPt[0]) { iBounds[1] = iPt[0]; }
    if (iBounds[2] > iPt[1]) { iBounds[2] = iPt[1]; }
    if (iBounds[3] < iPt[1]) { iBounds[3] = iPt[1]; }
    iPt = this.WorldToImage([bounds[1], bounds[3]]);
    if ( ! iPt) { tiles.length = 0; return tiles;} 
    if (iBounds[0] > iPt[0]) { iBounds[0] = iPt[0]; }
    if (iBounds[1] < iPt[0]) { iBounds[1] = iPt[0]; }
    if (iBounds[2] > iPt[1]) { iBounds[2] = iPt[1]; }
    if (iBounds[3] < iPt[1]) { iBounds[3] = iPt[1]; }
    bounds = iBounds;
  }
  
  // Logic for progressive rendering is in the loader:
  // Do not load a tile if its parent is not loaded.
  var tiles = [];
  var endLevel = level;
  // GetTile is inefficient and may be causing the ipad to render slowly.
  if (I_PAD_FLAG) {
    // Get rid of white line by rendering all ancestors.
    endLevel = 0;
  }
  for (var i = level; i >= endLevel; --i) {
    var tileIds = this.GetVisibleTileIds(i, bounds);
    var tile;
    for (var j = 0; j < tileIds.length; ++j) {
      tile = this.GetTile(slice, i, tileIds[j]);
      // If the tile is loaded or loading,
      // this does nothing.
      LoadQueueAdd(tile);
      tiles.push(tile);
    }
  }
  
  // Preload the next slice.
  //bounds[0] = bounds[1] = camera.FocalPoint[0];
  //bounds[2] = bounds[3] = camera.FocalPoint[1];
  //tileIds = this.GetVisibleTileIds(level, bounds);
  // There will be only one tile because the bounds
  // contains only the center point.
  //for (var i = 0; i < tileIds.length; ++i) {
  //    tile = this.GetTile(slice+1, level, tileIds[i]);
  //    LoadQueueAdd(tile);
  //}

  return tiles;
}

// Get ids of all visible tiles (including ones that have not been
// loaded yet.)
Cache.prototype.GetVisibleTileIds = function (level, bounds) {
    var id;
    var idList = [];
    var dim = 1 << level;
    var bds = [];
    bds[0] = Math.floor(bounds[0] * dim / (this.TileDimensions[0]*this.RootSpacing[0]));
    bds[1] = Math.ceil(bounds[1] * dim / (this.TileDimensions[0]*this.RootSpacing[0])) - 1.0;
    bds[2] = Math.floor(bounds[2] * dim / (this.TileDimensions[1]*this.RootSpacing[1]));
    bds[3] = Math.ceil(bounds[3] * dim / (this.TileDimensions[1]*this.RootSpacing[1])) - 1.0;
    if (bds[0] < 0) {bds[0] = 0;}
    if (bds[1] >= dim) {bds[1] = dim-1;}
    if (bds[2] < 0) {bds[2] = 0;}
    if (bds[3] >= dim) {bds[3] = dim-1;}
    for (var y = bds[2]; y <= bds[3]; ++y) {
      for (var x = bds[0]; x <= bds[1]; ++x) {
        id = x | (y << level);
        idList.push(id);
      }
    }
    return idList;
}

// I do not think this ever gets called.  No class calls this method.
Cache.prototype.GetTileIdContainingPoint = function (level, wPt) {
    var dim = 1 << level;
    var xIdx = Math.floor(wPt[0] * dim);
    var yIdx = Math.floor(wPt[1] * dim);
    if (xIdx < 0) {xIdx = 0;}
    if (xIdx >= dim) {xIdx = dim-1;}
    if (yIdx < 0) {yIdx = 0;}
    if (yIdx >= dim) {yIdx = dim-1;}
    var id = xIdx | (yIdx << level);
    return id;
}




// Set parent to be minimum of children.
Cache.prototype.UpdateBranchTimeStamp = function(tile) {
    var min = GetCurrentTime();
    if (tile.Children[0] != null) {
      if (tile.Children[0].BranchTimeStamp < min) {
        min = tile.Children[0].BranchTimeStamp;
      }
    }
    if (tile.Children[1] != null) {
      if (tile.Children[1].BranchTimeStamp < min) {
        min = tile.Children[1].BranchTimeStamp;
      }
    }
    if (tile.Children[2] != null) {
      if (tile.Children[2].BranchTimeStamp < min) {
        min = tile.Children[2].BranchTimeStamp;
      }
    }
    if (tile.Children[3] != null) {
      if (tile.Children[3].BranchTimeStamp < min) {
        min = tile.Children[3].BranchTimeStamp;
      }
    }
    if (min == GetCurrentTime()) { // no children
      min = tile.TimeStamp;
    }
    if (min != tile.BranchTimeStamp) {
      tile.BranchTimeStamp = min;
      if (tile.Parent != null) {
        this.UpdateBranchTimeStamp(tile.Parent);
      }
    }
}

Cache.prototype.GetTile = function(slice, level, id) {
  //Separate x and y.
  var dim = 1 << level;
  var x = id & (dim-1);
  var y = id >> level;
  if (this.RootTiles[slice] == null) {
    var tile;
    
    var name;
    if(this.UseTMS) name = "0_0_0";
    else if (this.Image.type && this.Image.type == "stack") {
      // name = slice + "/t";
      name = slice.toString();
    } else {
      name = "t";
    }
    
    tile = new Tile(0,0,slice, 0, name, this);
    this.RootTiles[slice] = tile;
  }
  return this.RecursiveGetTile(this.RootTiles[slice], level, x, y, slice);
}

// This creates the tile tree down to the tile (if necessary) and returns
// the tile requested.  The tiles objects created are not added to 
// the load queue here.
Cache.prototype.RecursiveGetTile = function(node, deltaDepth, x, y, z) {
  if (deltaDepth == 0) {
    return node;
  }
  --deltaDepth;
  var cx = (x>>deltaDepth)&1;
  var cy = (y>>deltaDepth)&1;
  var childIdx = cx+(2*cy);
  var child = node.Children[childIdx];
  if (child == null) {
    var childName = node.Name;
    if (childIdx == 0) {childName += "t";} 
    if (childIdx == 1) {childName += "s";} 
    if (childIdx == 2) {childName += "q";} 
    if (childIdx == 3) {childName += "r";} 
    
    if(this.UseTMS) childName = (node.Level+1)+"_"+(x>>deltaDepth)+"_"+(y>>deltaDepth);
    child = new Tile(x>>deltaDepth, y>>deltaDepth, z,
                     (node.Level + 1),
                     childName, this);
    // This is to fix a bug. Root.BranchTime larger
    // than all children BranchTimeStamps.  When
    // long branch is added, node never gets updated.
    if (node.Children[0] == null && node.Children[1] == null &&
        node.Children[2] == null && node.Children[3] == null) {
        node.BranchTimeStamp = GetCurrentTime();
    }

    node.Children[childIdx] = child;
    child.Parent = node;
  }
  return this.RecursiveGetTile(child, deltaDepth, x, y, z);
}




// Find the oldest tile, remove it from the tree and return it to be recycled.
// This also prunes texture maps.
// PRUNE_TIME_TILES and PRUNE_TIME_TEXTURES are compared with used time of tile.
Cache.prototype.PruneTiles = function()
{
  for (var i = 0; i < this.RootTiles.length; ++i) {
    var node = this.RootTiles[i];
    if (node != null) {
      if (node.BranchTimeStamp < PRUNE_TIME_TILES || node.BranchTimeStamp < PRUNE_TIME_TEXTURES) {
        this.RecursivePruneTiles(node);
      }
    }
  }
}

Cache.prototype.RecursivePruneTiles = function(node)
{
  var leaf = true;
    
  for (var i = 0; i < 4; ++i) {
    var child = node.Children[i];
    if (child != null) {
      leaf = false;
      if (child.BranchTimeStamp < PRUNE_TIME_TILES || 
          child.BranchTimeStamp < PRUNE_TIME_TEXTURES) {
        this.RecursivePruneTiles(child);
      }
    }
  }
  if (leaf && node.Parent != null) { // Roots have null parents.  Do not prune roots.
    if (node.BranchTimeStamp < PRUNE_TIME_TEXTURES) {
      node.DeleteTexture();
    }
    if (node.BranchTimeStamp < PRUNE_TIME_TILES) {
      if ( node.LoadState == 1) {
        LoadQueueRemove(node); 
      }
      var parent = node.Parent;
      // nodes will always have parents because we do not steal roots.
      if (parent.Children[0] == node) {
          parent.Children[0] = null;
      } else if (parent.Children[1] == node) {
          parent.Children[1] = null;
      } else if (parent.Children[2] == node) {
          parent.Children[2] = null;
      } else if (parent.Children[3] == node) {
          parent.Children[3] = null;
      }
      node.Parent = null;
      this.UpdateBranchTimeStamp(parent)
      node.destructor();
      delete node;
    }
  }
}




//==============================================================================
// Section Object
function Section () {
  // Warping to align this section with previous / next.
  // This is only a matrix transformation.
  this.Matrix = mat4.create();
  mat4.identity(this.Matrix);
  // The list of caches is really just a list of images in the montage.
  this.Caches = [];
  // For debugging stitching.
  this.Markers = [];
}

// For limiting interaction.
Section.prototype.GetBounds = function () { 
  var bounds = [0,10000,0,10000];

  for (var cIdx = 0; cIdx < this.Caches.length; ++cIdx) {
    var cache = this.Caches[cIdx];
    var bds = cache.GetBounds();
    if (cIdx == 0) {
      bounds = [bds[0], bds[1], bds[2], bds[3]];
    } else {
      if (bds[0] < bounds[0]) {
        bounds[0] = bds[0];
      }
      if (bds[1] > bounds[1]) {
        bounds[1] = bds[1];
      }
      if (bds[2] < bounds[2]) {
        bounds[2] = bds[2];
      }
      if (bds[3] < bounds[3]) {
        bounds[3] = bds[3];
      }
    }
  }    

  return bounds;
}

// Size of a pixel at the highest resolution.
Section.prototype.GetLeafSpacing = function () { 
  if ( ! this.LeafSpacing) {
    for (var cIdx = 0; cIdx < this.Caches.length; ++cIdx) {
      var cache = this.Caches[cIdx];
      var spacing = cache.GetLeafSpacing();
      if ( ! this.LeafSpacing || spacing < this.LeafSpacing) {
        this.LeafSpacing = spacing;
      }
    }
  }
  return this.LeafSpacing;
}


Section.prototype.LoadRoots = function () {
  for (var cIdx = 0; cIdx < this.Caches.length; ++cIdx) {
    var cache = this.Caches[cIdx];
    if (cache) {
      cache.LoadRoots();
    }
  }
}


Section.prototype.FindImage = function (imageCollectionName) {
  for (var i = 0; i < this.Caches.length; ++i) {
    var cache = this.Caches[i];
    if (cache.Image._id == imageCollectionName) {
      return cache;
    }
  }
  return null;
}


// I do not like passing in the whole view.
// Could we get away with just passing the camera?
// No, we need the viewport too.
// Could the viewport be part of the camera?
Section.prototype.Draw = function (view, context) {
  if (GL) {
    var program = imageProgram;
    context.useProgram(program);
    // Draw tiles.
    context.viewport(view.Viewport[0], view.Viewport[1], 
                view.Viewport[2], view.Viewport[3]);
    context.uniformMatrix4fv(program.pMatrixUniform, false, view.Camera.Matrix);
  } else {
    // The camera maps the world coordinate system to (-1->1, -1->1). 
    var h = 1.0 / view.Camera.Matrix[15];
    context.transform(view.Camera.Matrix[0]*h, view.Camera.Matrix[1]*h, 
                 view.Camera.Matrix[4]*h, view.Camera.Matrix[5]*h,
                 view.Camera.Matrix[12]*h, view.Camera.Matrix[13]*h);
  }
  
  for (var i = 0; i < this.Caches.length; ++i) {
    var cache = this.Caches[i];
    // Select the tiles to render first.
    this.Tiles = cache.ChooseTiles(view, SLICE, view.Tiles);  

    // For the 2d viewer, the order the tiles are drawn is very important.
    // Low-resolution tiles have to be drawn first.  Make a new sorted array.
    // The problem is that unloaded tiles fall back to rendering parents.
    // Make  copy (although we could just destroy the "Tiles" array which is not really used again).
    var tiles = this.Tiles.slice(0); 
    var loadedTiles = [];
    var j = 0;
    while (j < tiles.length) { // We add tiles in the loop so we need a while.
      if (tiles[j].LoadState == 3) {
        loadedTiles.push(tiles[j]);
      } else {
        if (tiles[j].LoadState < 3) {
          eventuallyRender();
        }
        if (tiles[j].Parent && ! I_PAD_FLAG) { // Queue up the parent.
          // Note: Parents might be added multiple times by different siblings.
          tiles.push(tiles[j].Parent);
        }
      }
      ++j;
    }
    
    // Reverse order to render low res tiles first.
    for (var j = tiles.length-1; j >= 0; --j) {
      tiles[j].Draw(program, context);
    }
  }
}


Section.prototype.LoadTilesInView = function (view) {
  for (var i = 0; i < this.Caches.length; ++i) {
    var cache = this.Caches[i];
    // Select the tiles to render first.
    // This also adds the tiles returned to the loading queue.
    this.Tiles = cache.ChooseTiles(view, SLICE, view.Tiles);  
  }
}

// The above will load the first ancestor not loaded and will stop.
// I need to pre load the actual high res tiles for connectome.
Section.prototype.LoadTilesInView2 = function (view) {
  for (var cIdx = 0; cIdx < this.Caches.length; ++cIdx) {
    var cache = this.Caches[cIdx];
    // Select the tiles to load (loading is a byproduct).
    var tiles = cache.ChooseTiles(view, SLICE);
    for (var i = 0; i < tiles.length; ++i) {
      tiles[i].LoadState = 1;
      // Add the tile at the front of the queue.
      LOAD_QUEUE.push(tiles[i]);
    }
  }
  LoadQueueUpdate();
}




// This load tiles in the view like draw but does not render them.
// I want to preload tiles in the next section.
Section.prototype.LoadTilesInView = function (view) {
  for (var cIdx = 0; cIdx < this.Caches.length; ++cIdx) {
    var cache = this.Caches[cIdx];
    // Select the tiles to load (loading is a byproduct).
    var tiles = cache.ChooseTiles(view, SLICE);
  }
}





//==============================================================================
// View Object
// Viewport (x_lowerleft, y_lowerleft, width, height)
// A view has its own camera and list of tiles to display.
// Views can share a cache for tiles.

// Cache is the source for the image tiles.
function View (viewport, layer) { // connectome: remove cache arg to constructor
  for (var i = 0; i < 4; ++i) {
    viewport[i] = Math.round(viewport[i]);
  }


  // connectome : default section so we cen set cache.
  this.Section = new Section;

  // connectome: remove Cache ivar.
  this.Viewport = viewport;
  this.Camera = new Camera(viewport[2], viewport[3]);
  this.Tiles = [];
  this.OutlineColor = [0,0.5,0]; 
  this.OutlineMatrix = mat4.create();
  this.OutlineCamMatrix = mat4.create();
  
  // 2d canvas
  if ( !GL) {
    
    // Add a new canvas.
    this.Canvas = $('<canvas>').appendTo(CANVAS).css({
        'position': 'absolute',
        'left' : viewport[0]+"px",
        'width': viewport[2]+"px",
        'bottom' : viewport[1]+"px",
        'height': viewport[3]+"px",
        'z-index': layer.toString(),
        'border-style': 'solid',
        'border-width': '1px'
    });
    
    this.Context2d = this.Canvas[0].getContext("2d");
  }
}


View.prototype.GetBounds = function() {
  return this.Section.GetBounds();
}
View.prototype.GetLeafSpacing = function() {
  return this.Section.GetLeafSpacing();
}


// connectome
View.prototype.AddCache = function(cache) {
  if ( ! cache) { return; }
  this.Section.Caches.push(cache);
}


View.prototype.SetCache = function(cache) {
  // connectome
  if ( ! cache) {
    this.Section.Caches = [];
  } else {
    this.Section.Caches = [cache];
  }
}

View.prototype.GetCache = function() {
  // connectome: This makes less sense with a section with many caches.
  // TODO: try to get rid of this
  return this.Section.Caches[0];
}

View.prototype.GetViewport = function() {
  return this.Viewport;
}

View.prototype.SetViewport = function(viewport) {
  for (var i = 0; i < 4; ++i) {
    viewport[i] = Math.round(viewport[i]);
  }
  if (this.Canvas) {
    if (viewport[2] < 3 || viewport[3] < 1) {
      this.Canvas.hide();
    } else {
      this.Canvas.show();
    }
    this.Canvas.css({
        'left' : viewport[0]+"px",
        'width': viewport[2]+"px",
        'bottom' : viewport[1]+"px",
        'height': viewport[3]+"px"
    });
    this.Canvas.attr("width", viewport[2].toString());
    this.Canvas.attr("height", viewport[3].toString());
  }
  
  this.Viewport = viewport;
  this.Camera.SetViewport(viewport);
}

// Note: Tile in the list may not be loaded yet.
View.prototype.DrawTiles = function () {
  if ( GL) {
    this.Section.Draw(this, GL);
  } else {
    this.Context2d.setTransform(1, 0, 0, 1, 0, 0);
    this.Context2d.clearRect(0,0,this.Viewport[2],this.Viewport[3]);
    // Clear the canvas to start drawing.
    this.Context2d.fillStyle="#ffffff";
    this.Context2d.fillRect(0,0,this.Viewport[2],this.Viewport[3]);
    this.Context2d.stroke();

    // Start with a transform that flips the y axis. 
    // This is an issue later because the images will be upside down.
    this.Context2d.setTransform(1, 0, 0, -1, 0, this.Viewport[3]);

    // Map (-1->1, -1->1) to the viewport.
    // Origin of the viewport does not matter because drawing is relative 
    // to this view's canvas.
    this.Context2d.transform(0.5*this.Viewport[2], 0.0,
                             0.0, 0.5*this.Viewport[3], 
                             0.5*this.Viewport[2],
                             0.5*this.Viewport[3]);

    this.Section.Draw(this, this.Context2d);
  }
}


View.prototype.DrawOutline = function(backgroundFlag) {
  if (GL) {
    program = polyProgram;
    GL.useProgram(program);
    GL.viewport(this.Viewport[0], this.Viewport[1], this.Viewport[2], this.Viewport[3]);

    // Draw a line around the viewport, so move (0,0),(1,1) to (-1,-1),(1,1)
    mat4.identity(this.OutlineCamMatrix);
    this.OutlineCamMatrix[0] = 2.0; // width x
    this.OutlineCamMatrix[5] = 2.0; // width y
    this.OutlineCamMatrix[10] = 0;
    this.OutlineCamMatrix[12] = -1.0;
    this.OutlineCamMatrix[13] = -1.0;
    var viewFrontZ = this.Camera.ZRange[0]+0.001; 
    var viewBackZ = this.Camera.ZRange[1]-0.001; 
    this.OutlineCamMatrix[14] = viewFrontZ; // front plane

    mat4.identity(this.OutlineMatrix);
    
    GL.uniformMatrix4fv(program.mvMatrixUniform, false, this.OutlineMatrix);

    if (backgroundFlag) {
      // White background fill
      this.OutlineCamMatrix[14] = viewBackZ; // back plane
      GL.uniformMatrix4fv(program.pMatrixUniform, false, this.OutlineCamMatrix);
      GL.uniform3f(program.colorUniform, 1.0, 1.0, 1.0);
      GL.bindBuffer(GL.ARRAY_BUFFER, squarePositionBuffer);
      GL.vertexAttribPointer(program.vertexPositionAttribute, 
                     squarePositionBuffer.itemSize, 
                     GL.FLOAT, false, 0, 0);
      GL.drawArrays(GL.TRIANGLE_STRIP, 0, squarePositionBuffer.numItems);
    }

    // outline
    this.OutlineCamMatrix[14] = viewFrontZ; // force in front
    GL.uniformMatrix4fv(program.pMatrixUniform, false, this.OutlineCamMatrix);
    GL.uniform3f(program.colorUniform, this.OutlineColor[0], this.OutlineColor[1], this.OutlineColor[2]);
    GL.bindBuffer(GL.ARRAY_BUFFER, squareOutlinePositionBuffer);
    GL.vertexAttribPointer(program.vertexPositionAttribute, 
                           squareOutlinePositionBuffer.itemSize, 
                           GL.FLOAT, false, 0, 0);
    GL.drawArrays(GL.LINE_STRIP, 0, squareOutlinePositionBuffer.numItems);
  }
}










//==============================================================================
// There is only one viewer that handles events.  It can forwad events
// to other objects as it see fit however.

// I am changing this to support three states of annotation visibility:
// None, Annotations, but no text, and all on.
var ANNOTATION_OFF = 0;
var ANNOTATION_NO_TEXT = 1;
var ANNOTATION_ON = 2;

var INTERACTION_NONE = 0;
var INTERACTION_DRAG = 1;
var INTERACTION_ROTATE = 2;
var INTERACTION_ZOOM = 3;

function Viewer (viewport, cache) {
  // Some of these could get transitioned to view or style ...
  // Left click option: Drag in main window, place in overview.
  this.OverViewEventFlag = false;
  
  this.EnableCursorChange = false;
  this.CurrentCursor = "default";

  // Interaction state:
  // What to do for mouse move or mouse up.
  this.InteractionState = INTERACTION_NONE;
  
  // Reverse mouse wheel zooming
  this.ReverseMouseWheel = false;
  
  this.AnimateLast;
  this.AnimateDuration = 0.0;
  this.TranslateTarget = [0.0,0.0];
  this.UpdateCallback = function(){};
  
  this.MainView = new View(viewport, 1);
  this.MainView.OutlineColor = [0,0,0];
  this.MainView.Camera.ZRange = [0,1];
  this.MainView.Camera.ComputeMatrix();
  
  var overViewport = [viewport[0] + viewport[2]*0.8, 
                      viewport[1] + viewport[3]*0.8,
                      viewport[2]*0.18, viewport[3]*0.18];

  this.OverView = new View(overViewport, 2);
  this.OverView.Camera.ZRange = [-1,0];
  this.OverView.Camera.FocalPoint = [13000.0, 11000.0, 10.0];
  this.OverView.Camera.Height = 22000.0;
  this.OverView.Camera.ComputeMatrix();
  
  this.ZoomTarget = this.MainView.Camera.GetHeight();
  this.RollTarget = this.MainView.Camera.Roll;

  this.AnnotationVisibility = ANNOTATION_OFF;
  this.AnnotationEditable = true;
  this.ShapeList = [];
  this.WidgetList = [];
  this.ActiveWidget = null;
  this.SelectedWidget = null;

  this.DoubleClickX = 0; 
  this.DoubleClickY = 0;

  this.GuiElements = [];
}

Viewer.prototype.SetCursorChange = function(v)
{
  this.EnableCursorChange = v;
}

Viewer.prototype.SetUpdateCallback = function(callback)
{
  this.UpdateCallback = callback;
}

// Canvas support only
Viewer.prototype.SetCursor = function(cssvalue)
{
  if(!this.EnableCursorChange)return;
  if(!GL && this.CurrentCursor != cssvalue)
    {
    this.MainView.Canvas.css('cursor', cssvalue);
    }
  this.CurrentCursor = cssvalue;
}

Viewer.prototype.GetAnnotationVisibility = function() {
  return this.AnnotationVisibility;
}
  
Viewer.prototype.SetAnnotationVisibility = function(vis) {
  this.AnnotationVisibility = vis;
}  

Viewer.prototype.GetAnnotationEditable = function() {
  return this.AnnotationEditable;
}
  
Viewer.prototype.SetAnnotationEditable = function(vis) {
  this.AnnotationEditable = vis;
}  


// connectome
// TODO:
// I do not like the global variable SECTIONS here.
// SECTIONS should be an object of ivar.
// The purpose of using an index arg is to preload
// tiles from the adjacent sections.
Viewer.prototype.SetSectionIndex = function(idx) {
  if (idx < 0 || idx >= SECTIONS.length) {
    return;
  }
  var section = SECTIONS[idx];
  if (section == null) {
    return;
  }
  if (idx > 0 && SECTIONS[idx-1]) {
    var s = SECTIONS[idx-1];
    s.LoadRoots();
    // Preload the views tiles in the previous section
    // TODO: Get ride of this hard coded global
    s.LoadTilesInView(VIEWER1.MainView);
  }
  section.LoadRoots();
  if (idx < SECTIONS.length-z1 && SECTIONS[idx+1]) {
    var s = SECTIONS[idx+1];
    s.LoadRoots();
    // Preload the views tiles in the next section
    // TODO: Get ride of this hard coded global
    s.LoadTilesInView(VIEWER1.MainView);
  }

  this.SetSection(section);
}

Viewer.prototype.SetSection = function(section) {
  if (section == null) {
    return;
  }
  this.MainView.Section = section;
  if (this.OverView) {
    this.OverView.Section = section;
    //this.ShapeList = section.Markers;
    var bounds = section.GetBounds();
    this.OverView.Camera.SetHeight(bounds[3]-bounds[2]);
    this.OverView.Camera.SetFocalPoint(0.5*(bounds[0]+bounds[1]),
                                       0.5*(bounds[2]+bounds[3]));
    this.OverView.Camera.ComputeMatrix();
  }
  eventuallyRender();
}


// Change the source / cache after a viewer has been created.
Viewer.prototype.SetCache = function(cache) {
  this.MainView.SetCache(cache);
  if (this.OverView) {
    this.OverView.SetCache(cache);
    if (cache) {
      var bds = cache.GetBounds();
      if (bds) {
        this.OverView.Camera.SetFocalPoint((bds[0] + bds[1]) / 2,
                                           (bds[2] + bds[3]) / 2);
        var height = (bds[3]-bds[2]);
        // See if the view is constrained by the width.
        var height2 = (bds[1]-bds[0]) * this.OverView.Viewport[3] / this.OverView.Viewport[2];
        if (height2 > height) {
          height = height2;
        }
        this.OverView.Camera.SetHeight(height);
        this.OverView.Camera.ComputeMatrix();
      }
    }
  }
}

Viewer.prototype.GetCache = function() {
  return this.MainView.GetCache();
}

Viewer.prototype.ShowGuiElements = function() {
  for (var i = 0; i < this.GuiElements.length; ++i) {
    var element = this.GuiElements[i];
    if ('Object' in element) {
      element.Object.show();
    } else if ('Id' in element) {
      $(element.Id).show();
    }
  }
}

Viewer.prototype.HideGuiElements = function() {
  for (var i = 0; i < this.GuiElements.length; ++i) {
    var element = this.GuiElements[i];
    if ('Object' in element) {
      element.Object.hide();
    } else if ('Id' in element) {
      $(element.Id).hide();
    }
  }
}

Viewer.prototype.AddGuiElement = function(idString, relativeX, x, relativeY, y) {
  var element = {};
  element.Id = idString;
  element[relativeX] = x;
  element[relativeY] = y;
  this.GuiElements.push(element);
}

Viewer.prototype.AddGuiObject = function(object, relativeX, x, relativeY, y) {
  var element = {};
  element.Object = object;
  element[relativeX] = x;
  element[relativeY] = y;
  this.GuiElements.push(element);
}


// I intend this method to get called when the window resizes.
Viewer.prototype.SetViewport = function(viewport) {

  // I am working on getting gui elements managed by the viewer.
  // Informal for now.
  for (var i = 0; i < this.GuiElements.length; ++i) {
    var element = this.GuiElements[i];
    var object;
    if ('Object' in element) {
      object = element.Object;
    } else if ('Id' in element) {
      object = $(element.Id);
    } else {
      continue;
    }

    // When the viewports are too small, large elements overlap ....
    // This stomps on the dual view arrow elementts visibility.
    // We would need out own visibility state ...
    //if (viewport[2] < 300 || viewport[3] < 300) {
    //  object.hide();
    //} else {
    //  object.show();
    //}
    
    if ('Bottom' in element) {
      var pos = element.Bottom.toString() + "px";
      object.css({
      'bottom' : pos});
    } else if ('Top' in element) {
      var pos = element.Top.toString() + "px";
      object.css({
      'bottom' : pos});
    }

    if ('Left' in element) {
      var pos = viewport[0] + element.Left; 
      pos = pos.toString() + "px";
      object.css({
      'left' : pos});
    } else if ('Right' in element) {
      var pos = viewport[0] + viewport[2] - element.Right; 
      pos = pos.toString() + "px";
      object.css({
      'left' : pos});
    }
  }

  this.MainView.SetViewport(viewport);
  if (this.OverView) {
    var overViewport = [viewport[0] + viewport[2]*0.8, 
                        viewport[1] + viewport[3]*0.8,
                        viewport[2]*0.18, viewport[3]*0.18];
    this.OverView.SetViewport(overViewport);
    this.OverView.Camera.ComputeMatrix();
  }
  this.MainView.Camera.ComputeMatrix();
}

Viewer.prototype.GetViewport = function() {
  return this.MainView.Viewport;
}

// To fix a bug in the perk and elmer uploader.
Viewer.prototype.ToggleMirror = function() {
  this.MainView.Camera.Mirror = ! this.MainView.Camera.Mirror;
  if (this.OverView) {
    this.OverView.Camera.Mirror = ! this.OverView.Camera.Mirror;
  }
}

// Same as set camera but use animation
Viewer.prototype.AnimateCamera = function(center, rotation, height) {

  this.ZoomTarget = height;
  // Compute traslate target to keep position in the same place.
  this.TranslateTarget[0] = center[0];
  this.TranslateTarget[1] = center[1];  
  this.RollTarget = rotation;

  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 200.0; // hard code 200 milliseconds
  eventuallyRender();
}

// This is used to set the default camera so the complexities 
// of the target and overview are hidden.
Viewer.prototype.SetCamera = function(center, rotation, height) {
  this.MainView.Camera.SetHeight(height);
  this.ZoomTarget = height;    

  this.MainView.Camera.SetFocalPoint(center[0], center[1]);
  this.TranslateTarget[0] = center[0];
  this.TranslateTarget[1] = center[1];
  
  rotation = rotation * 3.14159265359 / 180.0;
  this.MainView.Camera.Roll = rotation;
  this.RollTarget = rotation;
  if (this.OverView) {
    this.OverView.Camera.Roll = rotation;
    this.OverView.Camera.ComputeMatrix();
  }

  this.MainView.Camera.ComputeMatrix();
  eventuallyRender();
}

Viewer.prototype.GetCamera = function() {
    return this.MainView.Camera;
}

Viewer.prototype.GetSpacing = function() {
  var cam = this.GetCamera();
  var viewport = this.GetViewport();
  return cam.GetHeight() / viewport[3];
}

// I could merge zoom methods if position defaulted to focal point.
Viewer.prototype.AnimateDoubleClickZoom = function(factor, position) {
  this.ZoomTarget = this.MainView.Camera.GetHeight() * factor;
  if (this.ZoomTarget < 0.9 / (1 << 5)) {
    this.ZoomTarget = 0.9 / (1 << 5);
  }
  factor = this.ZoomTarget / this.MainView.Camera.GetHeight(); // Actual factor after limit.
  
  // Compute traslate target to keep position in the same place.
  this.TranslateTarget[0] = position[0] - factor * (position[0] - this.MainView.Camera.FocalPoint[0]);
  this.TranslateTarget[1] = position[1] - factor * (position[1] - this.MainView.Camera.FocalPoint[1]);
  
  this.RollTarget = this.MainView.Camera.Roll;

  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 200.0; // hard code 200 milliseconds
  eventuallyRender();
}

Viewer.prototype.AnimateZoom = function(factor) {
  this.ZoomTarget = this.MainView.Camera.GetHeight() * factor;
  if (this.ZoomTarget < 0.9 / (1 << 5)) {
    this.ZoomTarget = 0.9 / (1 << 5);
  }

  this.RollTarget = this.MainView.Camera.Roll;
  this.TranslateTarget[0] = this.MainView.Camera.FocalPoint[0];
  this.TranslateTarget[1] = this.MainView.Camera.FocalPoint[1];

  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 200.0; // hard code 200 milliseconds
  eventuallyRender();
}

Viewer.prototype.AnimateTranslate = function(dx, dy) {
  this.TranslateTarget[0] = this.MainView.Camera.FocalPoint[0] + dx;
  this.TranslateTarget[1] = this.MainView.Camera.FocalPoint[1] + dy;

  this.ZoomTarget = this.MainView.Camera.GetHeight();
  this.RollTarget = this.MainView.Camera.Roll;
  
  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 200.0; // hard code 200 milliseconds
  eventuallyRender();
}

Viewer.prototype.AnimateRoll = function(dRoll) {
  if(this.MainView.Camera.Roll > 2*Math.PI) this.MainView.Camera.Roll = this.MainView.Camera.Roll - 2*Math.PI;
  if(this.MainView.Camera.Roll < -2*Math.PI) this.MainView.Camera.Roll = this.MainView.Camera.Roll + 2*Math.PI;
    
  dRoll *= Math.PI / 180.0;
  this.RollTarget = this.MainView.Camera.Roll + dRoll;
 
  this.ZoomTarget = this.MainView.Camera.GetHeight();
  this.TranslateTarget[0] = this.MainView.Camera.FocalPoint[0];
  this.TranslateTarget[1] = this.MainView.Camera.FocalPoint[1];

  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 200.0; // hard code 200 milliseconds
  eventuallyRender();
}



Viewer.prototype.RemoveWidget = function(widget) {
  if (widget.Viewer == null) {
    return;
  }
  widget.Viewer = null;
  var idx = this.WidgetList.indexOf(widget);
  if(idx!=-1) { 
    this.WidgetList.splice(idx, 1); 
  }
}



// Load a widget from a json object (origin MongoDB).
Viewer.prototype.LoadWidget = function(obj) {
  switch(obj.type){
    case "pencil":
      var pencil = new PencilWidget(this, false);
      pencil.Load(obj);  
      break;
    case "arrow":
      var arrow = new ArrowWidget(this, false);
      arrow.Load(obj);  
      break;
    case "text":
      var text = new TextWidget(this, "");
      text.Load(obj);
      break;
    case "circle":
      var circle = new CircleWidget(this, false);
      circle.Load(obj);
      break;
    case "polyline":
      var pl = new PolylineWidget(this, false);
      pl.Load(obj);
      break;
    case "rectangle":    
      var rectangle = new RectangleWidget(this, false);
      rectangle.Load(obj);
      break;
  }
}

// I am doing a dance because I expect widget SetActive to call this,
// but this calls widget SetActive.
// The widget is the only object to call these methods.  
// A widget cannot call this if another widget is active.
// The widget deals with its own activation and deactivation.
Viewer.prototype.ActivateWidget = function(widget) {
  if (this.ActiveWidget == widget) {
    return;
  }
  this.ActiveWidget = widget;
}

Viewer.prototype.DeactivateWidget = function(widget) {
  if (this.ActiveWidget != widget || widget == null) {
    // Do nothing if the widget is not active.
    return;
  }
  this.ActiveWidget = null;
}

Viewer.prototype.SetSelectedWidget = function(widget) {
  this.SelectedWidget = widget;
}

Viewer.prototype.DegToRad = function(degrees) {
  return degrees * Math.PI / 180;
}


Viewer.prototype.Draw = function() {
  // connectome
  if ( ! this.MainView.Section) {
    return;
  }

  this.ConstrainCamera();
  // Should the camera have the viewport in them?
  // The do not currently hav a viewport.

  // Rendering text uses blending / transparency.
  if (GL) {
    GL.disable(GL.BLEND);
    GL.enable(GL.DEPTH_TEST);
  }
  
  this.MainView.DrawTiles();

  // This is only necessary for webgl, Canvas2d just uses a border.
  this.MainView.DrawOutline(false);
  if (this.OverView) {
    this.OverView.DrawTiles();
    this.OverView.DrawOutline(true);
  }
  if (this.AnnotationVisibility) {
    for(i=0; i<this.ShapeList.length; i++){
      this.ShapeList[i].Draw(this.MainView);
    }
    for(i in this.WidgetList){
      this.WidgetList[i].Draw(this.MainView, this.AnnotationVisibility);
    }

    
    if(this.SelectedWidget != null)
      {
      if(typeof this.SelectedWidget.GetSelectBounds != 'undefined')
        {
        var bounds = this.SelectedWidget.GetSelectBounds();
        var rectangle = new Polyline();
        
        var mainpt = [bounds[0][0] + 10, bounds[0][1] +10];
        var pt = [bounds[1][0] + 10, bounds[1][1] +10];
        rectangle.OutlineColor = [0.6, 0.6, 0.6];
        rectangle.FixedSize = false;
        rectangle.Points = [];
        rectangle.Points.push(mainpt);
        rectangle.Points.push([pt[0], mainpt[1]]);
        rectangle.Points.push([pt[0], pt[1]]);
        rectangle.Points.push([mainpt[0], pt[1]]);
        rectangle.Points.push(mainpt);   
        rectangle.Points.push([pt[0], mainpt[1]]);     
        rectangle.UpdateBuffers();
        rectangle.Draw(this.MainView)
        }
      }
  }

    // Draw a rectangle in the overview representing the camera's view.
  if (this.OverView) {
    this.MainView.Camera.Draw(this.OverView);
  }
}

// Makes the viewer clean to setup a new slide...
Viewer.prototype.Reset = function() {
  this.SetCache(null);
  this.WidgetList = [];
  this.ShapeList = [];
}

// A list of shapes to render in the viewer
Viewer.prototype.AddShape = function(shape) {
  this.ShapeList.push(shape);
}

Viewer.prototype.Animate = function() {
  if (this.AnimateDuration <= 0.0) {
    return;
  }
  var timeNow = new Date().getTime();
  if (timeNow >= (this.AnimateLast + this.AnimateDuration)) {
    // We have past the target. Just set the target values.
    this.MainView.Camera.SetHeight(this.ZoomTarget);
    this.MainView.Camera.Roll = this.RollTarget;
    if (this.OverView) {
      this.OverView.Camera.Roll = this.RollTarget;
    }
    this.MainView.Camera.SetFocalPoint(this.TranslateTarget[0],
                                       this.TranslateTarget[1]);

    // Save the state when the animation is finished.
    RecordState();
  } else {
    // Interpolate
    var currentHeight = this.MainView.Camera.GetHeight();
    var currentCenter = this.MainView.Camera.GetFocalPoint();
    var currentRoll   = this.MainView.Camera.Roll;
    this.MainView.Camera.SetHeight(
          currentHeight + (this.ZoomTarget-currentHeight)
            *(timeNow-this.AnimateLast)/this.AnimateDuration);
    this.MainView.Camera.Roll
      = currentRoll + (this.RollTarget-currentRoll)
            *(timeNow-this.AnimateLast)/this.AnimateDuration;
    if (this.OverView) {
      this.OverView.Camera.Roll = this.MainView.Camera.Roll;
    }
    this.MainView.Camera.SetFocalPoint(
        currentCenter[0] + (this.TranslateTarget[0]-currentCenter[0])
            *(timeNow-this.AnimateLast)/this.AnimateDuration,
        currentCenter[1] + (this.TranslateTarget[1]-currentCenter[1])
            *(timeNow-this.AnimateLast)/this.AnimateDuration);
    // We are not finished yet.
    // Schedule another render
    eventuallyRender();
  }
  this.MainView.Camera.ComputeMatrix();
  if (this.OverView) {
    this.OverView.Camera.ComputeMatrix();
  }
  this.AnimateDuration -= (timeNow-this.AnimateLast);
  this.AnimateLast = timeNow;
}    

Viewer.prototype.OverViewPlaceCamera = function(x, y) {
  if ( ! this.OverView) {
    return;
  }
  // Compute focal point from inverse overview camera.
  x = x/this.OverView.Viewport[2];
  y = y/this.OverView.Viewport[3];
  x = (x*2.0 - 1.0)*this.OverView.Camera.Matrix[15];
  y = (y*2.0 - 1.0)*this.OverView.Camera.Matrix[15];
  var m = this.OverView.Camera.Matrix;
  var det = m[0]*m[5] - m[1]*m[4];
  var xNew = (x*m[5]-y*m[4]+m[4]*m[13]-m[5]*m[12]) / det;
  var yNew = (y*m[0]-x*m[1]-m[0]*m[13]+m[1]*m[12]) / det;

  // Animate to get rid of jerky panning (overview to low resolution).
  this.TranslateTarget[0] = xNew;
  this.TranslateTarget[1] = yNew;
  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 100.0;
  eventuallyRender();
}


Viewer.prototype.HandleTouchStart = function(event) {
  this.MomentumX = 0.0;
  this.MomentumY = 0.0;
  this.MomentumRoll = 0.0;
  this.MomentumScale = 0.0;
  if (this.MomentumTimerId) {
    window.cancelAnimationFrame(this.MomentumTimerId)
    this.MomentumTimerId = 0;
  }

  // Four finger grab resets the view.
  if ( event.Touches.length >= 4) {
    var cam = this.GetCamera();
    var bds = this.MainView.Section.GetBounds();
    cam.SetFocalPoint( (bds[0]+bds[1])*0.5, (bds[2]+bds[3])*0.5);      
    cam.Roll = 0.0;
    cam.SetHeight(bds[3]-bds[2]);
    cam.ComputeMatrix();
    eventuallyRender();
    // Return value hides navigation widget  
    return true;           
  }
  
  // See if any widget became active.
  if (this.AnnotationVisibility && this.AnnotationEditable) {
    for (var touchIdx = 0; touchIdx < event.Touches.length; ++touchIdx) {
      event.MouseX = event.Touches[touchIdx][0];
      event.MouseY = event.Touches[touchIdx][1];
      this.ComputeMouseWorld(event);
      for (var i = 0; i < this.WidgetList.length; ++i) {
        if ( ! this.WidgetList[i].GetActive() && 
               this.WidgetList[i].CheckActive(event)) {
          this.ActivateWidget(this.WidgetList[i]);
          return true;
        }
      }
    }
  }    
  return false;
}

// Only one touch
Viewer.prototype.HandleTouchPan = function(event) {
  if (event.Touches.length != 1 || event.LastTouches.length != 1) {
    // Sanity check.
    return;
  }

  // Forward the events to the widget if one is active.
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleTouchPan(event);
    return;
  }
    
  // I see an odd intermittent camera matrix problem 
  // on the iPad that looks like a thread safety issue.
  if (this.MomentumTimerId) {
    window.cancelAnimationFrame(this.MomentumTimerId)
    this.MomentumTimerId = 0;
  }
  
  // Convert to world by inverting the camera matrix.
  // I could simplify and just process the vector.  
  w0 = this.ConvertPointViewerToWorld(event.LastMouseX, event.LastMouseY);
  w1 = this.ConvertPointViewerToWorld(    event.MouseX,     event.MouseY);
    
  // This is the new focal point.
  var dx = w1[0] - w0[0];
  var dy = w1[1] - w0[1];
  var dt = event.Time - event.LastTime;

  // Remember the last motion to implement momentum.
  var momentumX = dx/dt;
  var momentumY = dy/dt;

  this.MomentumX = (this.MomentumX + momentumX) * 0.5;
  this.MomentumY = (this.MomentumY + momentumY) * 0.5;
  this.MomentumRoll = 0.0;
  this.MomentumScale = 0.0;

  var cam = this.GetCamera();
  cam.Translate( -dx, -dy, 0);  
  cam.ComputeMatrix();  
  eventuallyRender();  
}

Viewer.prototype.HandleTouchRotate = function(event) {
  var numTouches = event.Touches.length;
  if (event.LastTouches.length != numTouches || numTouches  != 3) {
    // Sanity check.
    return;
  }

  // I see an odd intermittent camera matrix problem 
  // on the iPad that looks like a thread safety issue.
  if (this.MomentumTimerId) {
    window.cancelAnimationFrame(this.MomentumTimerId)
    this.MomentumTimerId = 0;
  }

  w0 = this.ConvertPointViewerToWorld(event.LastMouseX, event.LastMouseY);
  w1 = this.ConvertPointViewerToWorld(    event.MouseX,     event.MouseY);
  var dt = event.Time - event.LastTime;
    
  // Compute rotation.
  // Consider weighting rotation by vector length to avoid over contribution of short vectors.
  // We could also take the maximum.
  var x;
  var y;
  var a = 0;
  for (var i = 0; i < numTouches; ++i) {
    x = event.LastTouches[i][0] - event.LastMouseX;
    y = event.LastTouches[i][1] - event.LastMouseY;
    var a1  = Math.atan2(y,x);
    x = event.Touches[i][0] - event.MouseX;
    y = event.Touches[i][1] - event.MouseY;
    a1 = a1 - Math.atan2(y,x);
    if (a1 > Math.PI) { a1 = a1 - (2*Math.PI); }
    if (a1 < -Math.PI) { a1 = a1 + (2*Math.PI); }
    a += a1;
  }
  a = a / numTouches;
   
  // rotation and scale are around the mid point .....
  // we need to compute focal point height and roll (not just a matrix).
  // Focal point is the only difficult item.
  var cam = this.GetCamera();
  w0[0] = cam.FocalPoint[0] - w1[0];
  w0[1] = cam.FocalPoint[1] - w1[1];
  var c = Math.cos(a);
  var s = Math.sin(a);
  // This is the new focal point.
  x = w1[0] + (w0[0]*c - w0[1]*s);
  y = w1[1] + (w0[0]*s + w0[1]*c);

  // Remember the last motion to implement momentum.
  var momentumRoll = a/dt;

  this.MomentumX = 0.0;
  this.MomentumY = 0.0;
  this.MomentumRoll = (this.MomentumRoll + momentumRoll) * 0.5;
  this.MomentumScale = 0.0;

  cam.Roll = cam.Roll - a;
  cam.ComputeMatrix();  
  if (this.OverView) {
    var cam2 = this.OverView.Camera;
    cam2.Roll = cam.Roll;
    cam2.ComputeMatrix();  
  }
  eventuallyRender();  
}

Viewer.prototype.HandleTouchPinch = function(event) {
  var numTouches = event.Touches.length;
  if (event.LastTouches.length != numTouches || numTouches  != 2) {
    // Sanity check.
    return;
  }

  // I see an odd intermittent camera matrix problem 
  // on the iPad that looks like a thread safety issue.
  if (this.MomentumTimerId) {
    window.cancelAnimationFrame(this.MomentumTimerId)
    this.MomentumTimerId = 0;
  }

  w0 = this.ConvertPointViewerToWorld(event.LastMouseX, event.LastMouseY);
  w1 = this.ConvertPointViewerToWorld(    event.MouseX,     event.MouseY);
  var dt = event.Time - event.LastTime;
  // iPad / iPhone must have low precision time
  if (dt == 0) {
    return;
  }
  
  // Compute scale.
  // Consider weighting rotation by vector length to avoid over contribution of short vectors.
  // We could also take max.
  // This should rarely be an issue and could only happen with 3 or more touches.
  var scale = 1;
  var s0 = 0;
  var s1 = 0;
  for (var i = 0; i < numTouches; ++i) {
    x = event.LastTouches[i][0] - event.LastMouseX;
    y = event.LastTouches[i][1] - event.LastMouseY;
    s0 += Math.sqrt(x*x + y*y);
    x = event.Touches[i][0] - event.MouseX;
    y = event.Touches[i][1] - event.MouseY;
    s1 += Math.sqrt(x*x + y*y);
  }
  // This should not happen, but I am having trouble with NaN camera parameters.
  if (s0 < 2 || s1 < 2) {
    return;
  }
  scale = s1/ s0;


  // Forward the events to the widget if one is active.
  if (this.ActiveWidget != null) {
    event.PinchScale = scale;
    this.ActiveWidget.HandleTouchPinch(event);
    return;
  }


  
  // scale is around the mid point .....
  // we need to compute focal point height and roll (not just a matrix).
  // Focal point is the only difficult item.
  var cam = this.GetCamera();
  w0[0] = cam.FocalPoint[0] - w1[0];
  w0[1] = cam.FocalPoint[1] - w1[1];
  // This is the new focal point.
  var x = w1[0] + w0[0] / scale;
  var y = w1[1] + w0[1] / scale;

  // Remember the last motion to implement momentum.
  var momentumScale = (scale-1)/dt;

  this.MomentumX = 0.0;
  this.MomentumY = 0.0;
  this.MomentumRoll = 0.0;
  this.MomentumScale = (this.MomentumScale + momentumScale) * 0.5;

  cam.FocalPoint[0] = x;  
  cam.FocalPoint[1] = y;
  cam.SetHeight(cam.GetHeight() / scale);
  cam.ComputeMatrix();  
  eventuallyRender();  
}

Viewer.prototype.HandleTouchEnd = function(event) {
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleTouchEnd(event);
    return;
  }
  this.HandleMomentum(event);  
}

Viewer.prototype.HandleMomentum = function(event) {
  // I see an odd intermittent camera matrix problem 
  // on the iPad that looks like a thread safety issue.
  if (this.MomentumTimerId) {
    window.cancelAnimationFrame(this.MomentumTimerId)
    this.MomentumTimerId = 0;
  }

  var t = new Date().getTime();
  if (t - event.LastTime < 50) {
    var self = this;
    this.MomentumTimerId = requestAnimFrame(function () { self.HandleMomentum(event);});
    return;
  }

  // Integrate the momentum.
  event.LastTime = event.Time;
  event.Time = t;
  var dt = event.Time - event.LastTime;

  var k = 200.0;
  var decay = Math.exp(-dt/k);
  var integ = (-k * decay + k);
  
  var cam = this.MainView.Camera;
  cam.Translate(-(this.MomentumX * integ), -(this.MomentumY * integ), 0);
  cam.SetHeight(cam.Height / ((this.MomentumScale * integ) + 1));
  cam.Roll = cam.Roll - (this.MomentumRoll* integ);
  cam.ComputeMatrix();
  if (this.OverView) {
    var cam2 = this.OverView.Camera;
    cam2.Roll = cam.Roll;
    cam2.ComputeMatrix();  
  }
  // I think the problem with the ipad is thie asynchronous render.
  // Maybe two renders occur at the same time.
  //eventuallyRender();
  draw();  

  // Decay the momentum.
  this.MomentumX *= decay;
  this.MomentumY *= decay;
  this.MomentumScale *= decay;
  this.MomentumRoll *= decay; 

  if (Math.abs(this.MomentumX) < 0.01 && Math.abs(this.MomentumY) < 0.01 && 
      Math.abs(this.MomentumRoll) < 0.0002 && Math.abs(this.MomentumScale) < 0.00005) {
    // Change is small. Stop the motion.
    this.MomentumTimerId = 0;
    if (this.InteractionState != INTERACTION_NONE) {
      this.InteractionState = INTERACTION_NONE;
      RecordState();
    }
  } else {
    var self = this;
    this.MomentumTimerId = requestAnimFrame(function () { self.HandleMomentum(event);});
  }
}


Viewer.prototype.ConstrainCamera = function () {
  var bounds = this.MainView.GetBounds();
  if ( ! bounds) {
    // Cache has not been set.
    return;
  }
  var spacing = this.MainView.GetLeafSpacing();
  var viewport = this.MainView.GetViewport();
  var cam = this.MainView.Camera;

  var modified = false;
  if (cam.FocalPoint[0] < bounds[0]) {
    cam.SetFocalPoint(bounds[0], cam.FocalPoint[1]);
    modified = true;
  }
  if (cam.FocalPoint[0] > bounds[1]) {
    cam.SetFocalPoint(bounds[1], cam.FocalPoint[1]);
    modified = true;
  }
  if (cam.FocalPoint[1] < bounds[2]) {
    cam.SetFocalPoint(cam.FocalPoint[0], bounds[2]);
    modified = true;
  }
  if (cam.FocalPoint[1] > bounds[3]) {
    cam.SetFocalPoint(cam.FocalPoint[0], bounds[3]);
    modified = true;
  }
  if (cam.Height > 10*(bounds[3]-bounds[2])) {
    cam.Height = 10*(bounds[3]-bounds[2]);
    modified = true;
    this.ZoomTarget = cam.Height;
  }  
  if (cam.GetHeight() < viewport[3] * spacing * 0.5) {
    cam.SetHeight(viewport[3] * spacing * 0.5);
    modified = true;
    this.ZoomTarget = cam.Height;
  }
  if (modified) {
    cam.ComputeMatrix();
  }
}


Viewer.prototype.HandleMouseDown = function(event) {
  // Forward the events to the widget if one is active.
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleMouseDown(event);
    return;
  }
   
  // Are we in the overview or the main view?
  var x = event.MouseX;
  var y = event.MouseY;
  this.OverViewEventFlag = false;
  if (this.OverView) {
    if (x > this.OverView.Viewport[0] && y > this.OverView.Viewport[1] &&
        x < this.OverView.Viewport[0]+this.OverView.Viewport[2] &&
        y < this.OverView.Viewport[1]+this.OverView.Viewport[3]) {
      this.OverViewEventFlag = true;
      x = x - this.OverView.Viewport[0];
      y = y - this.OverView.Viewport[1];
      this.OverViewPlaceCamera(x-2, y);
      return;
    }
  }
  
  // Choose what interaction will be performed.
  if (event.SystemEvent.which == 1 ) {
    if (event.SystemEvent.ctrlKey) {
      this.InteractionState = INTERACTION_ROTATE;
    } else if (event.SystemEvent.altKey) {    
      this.InteractionState = INTERACTION_ZOOM;
    } else {
      this.InteractionState = INTERACTION_DRAG;
    }
  }
  if (event.SystemEvent.which == 2 ) {
    this.InteractionState = INTERACTION_ROTATE;
  }
}

Viewer.prototype.HandleDoubleClick = function(event) {
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleDoubleClick(event);
    return;
  }
  
  // Detect double click.
  mWorld = this.ConvertPointViewerToWorld(event.MouseX, event.MouseY);
  if (event.SystemEvent.which == 1) {
    this.AnimateDoubleClickZoom(0.5, mWorld);
    //this.AnimateZoom(0.5);
  } else if (event.SystemEvent.which == 3) {
    this.AnimateDoubleClickZoom(2.0, mWorld);
    //this.AnimateZoom(2.0);
  }
}

Viewer.prototype.HandleMouseUp = function(event) {

   this.ComputeMouseWorld(event);
  // Forward the events to the widget if one is active.
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleMouseUp(event);
    return;
  }

  if (this.InteractionState != INTERACTION_NONE) {
    this.InteractionState = INTERACTION_NONE;
    RecordState();
  }
  
  return;
}


Viewer.prototype.ComputeMouseWorld = function(event) {
  // Many shapes, widgets and interactors will need the mouse in world coodinates.
  var x = event.MouseX;
  var y = event.MouseY;
    
  var viewport = this.GetViewport();
  // Convert mouse to viewer coordinate system.
  // It would be nice to have this before this method.
  x = x - viewport[0];
  y = y - viewport[1];
  // Convert (x,y) to ???
  // Compute focal point from inverse overview camera.
  x = x/viewport[2];
  y = y/viewport[3];
  var cam = this.MainView.Camera;

  x = (x*2.0 - 1.0)*cam.Matrix[15];
  y = (y*2.0 - 1.0)*cam.Matrix[15];
  var m = cam.Matrix;
  var det = m[0]*m[5] - m[1]*m[4];
  event.MouseWorldX = (x*m[5]-y*m[4]+m[4]*m[13]-m[5]*m[12]) / det;
  event.MouseWorldY = (y*m[0]-x*m[1]-m[0]*m[13]+m[1]*m[12]) / det;
}

Viewer.prototype.HandleMouseMove = function(event) {
  this.ComputeMouseWorld(event);
  // Forward the events to the widget if one is active.
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleMouseMove(event);
    return;
  }
  
  // See if any widget became active.
  if (this.AnnotationVisibility && this.AnnotationEditable) {
    for (var i = 0; i < this.WidgetList.length; ++i) {
      if (this.WidgetList[i].CheckActive(event)) {
        this.ActivateWidget(this.WidgetList[i]);
        return;
      }
    }
  }
  
  this.SetCursor("default");
    
  if (event.MouseDown == false) {
    return;
  }
  
  var x = event.MouseX;
  var y = event.MouseY;

  if (this.OverViewEventFlag) {
    x = x - this.OverView.Viewport[0];
    y = y - this.OverView.Viewport[1];
    this.OverViewPlaceCamera(x-2, y);
    // Animation handles the render.
    return;
  }
    
  // Drag camera in main view.
  x = x - this.MainView.Viewport[0];
  y = y - this.MainView.Viewport[1];
  if (this.InteractionState == INTERACTION_ROTATE) {
    // Rotate
    // Origin in the center.
    // GLOBAL GL will use view's viewport instead.
    var cx = x - (this.MainView.Viewport[2]*0.5);
    var cy = y - (this.MainView.Viewport[3]*0.5);
    // GLOBAL views will go away when views handle this.
    this.MainView.Camera.HandleRoll(cx, cy, event.MouseDeltaX, event.MouseDeltaY);
    if (this.OverView) {
      this.OverView.Camera.HandleRoll(cx, cy, event.MouseDeltaX, event.MouseDeltaY);
    }
    this.RollTarget = this.MainView.Camera.Roll;
  } else if (this.InteractionState == INTERACTION_ZOOM) {
    var dy = event.MouseDeltaY / this.MainView.Viewport[2];
    this.MainView.Camera.SetHeight(this.MainView.Camera.GetHeight() 
                                    * (1.0 + (dy* 5.0)));
    this.ZoomTarget = this.MainView.Camera.GetHeight();
    this.MainView.Camera.ComputeMatrix();
  } else if (this.InteractionState == INTERACTION_DRAG) {
    // Translate
    // Convert to view [-0.5,0.5] coordinate system.
    // Note: the origin gets subtracted out in delta above.
    var dx = -event.MouseDeltaX / this.MainView.Viewport[2];
    var dy = -event.MouseDeltaY / this.MainView.Viewport[2];    
    this.MainView.Camera.HandleTranslate(dx, dy, 0.0);
  }
  eventuallyRender();
}

Viewer.prototype.HandleMouseWheel = function(event) {
  // Forward the events to the widget if one is active.
  if (this.ActiveWidget != null) {
    //this.ActiveWidget.HandleMouseDown(event);
    return;
  }

  // we want to acumilate the target, but not the duration.
  var wheelDelta = event.SystemEvent.wheelDelta;
  if(this.ReverseMouseWheel) wheelDelta = -wheelDelta;
  
  var spacing = this.MainView.GetLeafSpacing();
  var viewport = this.MainView.GetViewport();
  var cam = this.MainView.Camera;
  var bounds = this.MainView.GetBounds();
  
  var tmp = wheelDelta;
  while (tmp > 0) {
    this.ZoomTarget *= 1.1;
    tmp -= 120;
  }
  while (tmp < 0) {
    this.ZoomTarget /= 1.1;
    tmp += 120;
  }
  
  var mWorld = this.ConvertPointViewerToWorld(event.MouseX, event.MouseY);
  var newFocal = [];
  var deltaX = 0;
  var deltaY = 0;
  
  // Zoom in where the is
  if(wheelDelta < 0)
    {
    deltaX = (this.MainView.Camera.FocalPoint[0] - mWorld[0])/3;
    deltaY = (this.MainView.Camera.FocalPoint[1] - mWorld[1])/3;
    }
  newFocal[0] = this.MainView.Camera.FocalPoint[0] - deltaX;
  newFocal[1] = this.MainView.Camera.FocalPoint[1] - deltaY;

  // Compute traslate target to keep position in the same place.
  this.TranslateTarget[0] = newFocal[0];
  this.TranslateTarget[1] = newFocal[1];
  this.RollTarget = this.MainView.Camera.Roll;

  // Artificial limit (fixme).
  if (this.ZoomTarget < 0.9 / (1 << 5)) {
    this.ZoomTarget = 0.9 / (1 << 5);
  }

  this.AnimateLast = new Date().getTime();
  this.AnimateDuration = 200.0; // hard code 200 milliseconds
  eventuallyRender();    
}

Viewer.prototype.HandleKeyPress = function(keyCode, shift) {
  // Handle stack (page up  / down)
  var cache = this.GetCache();
  if (cache && cache.Image.type && cache.Image.type == "stack") {
    if (keyCode == 33) {
      SLICE = SLICE - 1;
      if (SLICE < 1) { SLICE = 1;}
      eventuallyRender();
    } else if (keyCode == 34) {
      SLICE = SLICE + 1;
      if (SLICE > cache.Image.dimensions[2]) { 
        SLICE = cache.Image.dimensions[2];
      }
      eventuallyRender();
    }    
  }
  
  // Handle connectome volume stuff.
  // TODO: integrate this with the 3d renal stack stuff.
  // connectome
  if (keyCode == 37) {
    // Left cursor key
    var idx = SECTIONS.indexOf(this.MainView.Section);
    if(idx > 0) {
      this.SetSection(idx-1);
    }
    eventuallyRender();
  } else if (keyCode == 39) {
    var idx = SECTIONS.indexOf(this.MainView.Section);
    if(idx >= 0 && idx < SECTIONS.length-1) {
      this.SetSection(idx+1);
    }
    eventuallyRender();
  }




  //----------------------
  if (this.ActiveWidget != null) {
    this.ActiveWidget.HandleKeyPress(keyCode, shift);
    return;
  }

  if (String.fromCharCode(keyCode) == 'R') {
    //this.MainView.Camera.Reset();
    this.MainView.Camera.ComputeMatrix();
    this.ZoomTarget = this.MainView.Camera.GetHeight();
    eventuallyRender();
  }

  if (keyCode == 38) {
    // Up cursor key
    this.ZoomTarget *= 2;
    this.TranslateTarget[0] = this.MainView.Camera.FocalPoint[0];
    this.TranslateTarget[1] = this.MainView.Camera.FocalPoint[1];
    this.AnimateLast = new Date().getTime();
    this.AnimateDuration = 200.0;
    eventuallyRender();
  } else if (keyCode == 40) {
    // Down cursor key
    if (this.ZoomTarget > 0.9 / (1 << 5)) {
      this.ZoomTarget *= 0.5;
      this.TranslateTarget[0] = this.MainView.Camera.FocalPoint[0];
      this.TranslateTarget[1] = this.MainView.Camera.FocalPoint[1];
      this.AnimateLast = new Date().getTime();
      this.AnimateDuration = 200.0;
      eventuallyRender();
    }
  }
}


// Get the current scale factor between pixels and world units.
Viewer.prototype.GetPixelsPerUnit = function() {
  // Determine the scale difference between the two coordinate systems.
  var viewport = this.GetViewport();
  var cam = this.MainView.Camera;
  var m = cam.Matrix;

  // Convert from world coordinate to view (-1->1);
  return 0.5*viewport[2] / (m[3] + m[15]); // m[3] for x, m[7] for height
}

// Covert a point from world coordiante system to viewer coordinate system (units pixels).
Viewer.prototype.ConvertPointWorldToViewer = function(x, y) {
  var viewport = this.GetViewport();
  var cam = this.MainView.Camera;
  var m = cam.Matrix;

  // Convert from world coordinate to view (-1->1);
  var h = (x*m[3] + y*m[7] + m[15]);
  var xNew = (x*m[0] + y*m[4] + m[12]) / h;
  var yNew = (x*m[1] + y*m[5] + m[13]) / h;
  // Convert from view to screen pixel coordinates.
  xNew = (xNew + 1.0)*0.5*viewport[2] + viewport[0];
  yNew = (yNew + 1.0)*0.5*viewport[3] + viewport[1];
    
  return [xNew, yNew];
}   


Viewer.prototype.ConvertPointViewerToWorld = function(x, y) {
  var viewport = this.GetViewport();
  var cam = this.MainView.Camera;

  // Convert from canvas/pixels to  coordinate system.
  // It would be nice to have this before this method.
  x = x - viewport[0];
  y = y - viewport[1];
  // Now we need to convert to world coordinate system
  
  // Compute focal point from inverse overview camera.
  x = x/viewport[2];
  y = y/viewport[3];
  x = (x*2.0 - 1.0)*cam.Matrix[15];
  y = (y*2.0 - 1.0)*cam.Matrix[15];
  var m = cam.Matrix;
  var det = m[0]*m[5] - m[1]*m[4];
  var xNew = (x*m[5]-y*m[4]+m[4]*m[13]-m[5]*m[12]) / det;
  var yNew = (y*m[0]-x*m[1]-m[0]*m[13]+m[1]*m[12]) / det;
  
  return [xNew, yNew];
}

// Where else should I put this?
function colorNameToHex(color)
{
    var colors = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo ":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colors[color.toLowerCase()] != 'undefined')
        return colors[color.toLowerCase()];

    return false;
}




//==============================================================================
// This widget will first be setup to define an arrow.
// Viewer will forward events to the arrow.
// TODO: I need to indicate that the base of the arrow has different active
// state than the rest.




// The arrow has just been created and is following the mouse.
// I have to differentiate from ARROW_WIDGET_DRAG because
// dragging while just created cannot be relative.  It places the tip on the mouse.
var ARROW_WIDGET_NEW = 0;
var ARROW_WIDGET_DRAG = 1; // The whole arrow is being dragged.
var ARROW_WIDGET_DRAG_TIP = 2;
var ARROW_WIDGET_DRAG_TAIL = 3;
var ARROW_WIDGET_WAITING = 4; // The normal (resting) state.
var ARROW_WIDGET_ACTIVE = 5; // Mouse is over the widget and it is receiving events.
var ARROW_WIDGET_PROPERTIES_DIALOG = 6; // Properties dialog is up


// We might get rid of the new flag by passing in a null viewer.
function ArrowWidget (viewer, newFlag) {
  if (viewer == null) {
    return null;
  }
  this.Viewer = viewer;
  this.IsTextActive = false;

  // Wait to create this until the first move event.
  this.Shape = new Arrow();
  this.Shape.Origin = [0,0];
  this.Shape.SetFillColor([0.0, 0.0, 0.0]);
  this.Shape.OutlineColor = [1.0, 1.0, 1.0];
  this.Shape.Length = 50;
  this.Shape.Width = 8;
  
  this.IsShapeUpdate = false;
  
  this.TextShape = false;
  this.DrawnCallback = function(widget){};
  
  // Note: If the user clicks before the mouse is in the
  // canvas, this will behave odd.
  this.TipPosition = [0,0];
  this.TipOffset = [0,0];

  if (viewer) {
    viewer.WidgetList.push(this);
    if (newFlag && viewer) {
      this.State = ARROW_WIDGET_NEW;
      this.Viewer.ActivateWidget(this);
      return;
    }
  }

  this.State = ARROW_WIDGET_WAITING;
}

ArrowWidget.prototype.Draw = function(view) {
    this.Shape.Draw(view);
    if(this.TextShape != false && this.TextShape.String != "")
      {
      this.UpdatetTextPosition();
      this.TextShape.Draw(view);  
      }
    else if(this.Viewer.AnnotationEditable)
      {
      this.SetText("Add Label", 12)
      this.TextShape.Color =  [0.6, 0.6, 0.6];
      this.UpdatetTextPosition(view);
      this.TextShape.Draw(view);
      this.TextShape = false;
      }
}

ArrowWidget.prototype.UpdatetTextPosition = function(view) {
  if(this.TextShape != false && this.TextShape.String != "")
    {
    this.TextShape.Position= this.Shape.Origin; 
    var theta = this.Shape.Orientation * 3.1415926536 / 180.0;
    var y = Math.sin( theta) * (this.Shape.PointBuffer[9]+4);
    var x = Math.cos( theta) * (this.Shape.PointBuffer[9]+4);    
    if(y < 0) y -= 5
    this.TextShape.Anchor = [-x,-y];
    }
}

ArrowWidget.prototype.GetSelectBounds = function() {
  var theta = this.Shape.Orientation * 3.1415926536 / 180.0;
  var y = Math.sin( theta) * (this.Shape.PointBuffer[9]);
  var x = Math.cos( theta) * (this.Shape.PointBuffer[9]);    
  x = this.Shape.Origin[0] + x/this.Viewer.GetPixelsPerUnit();
  y = this.Shape.Origin[1] + y/this.Viewer.GetPixelsPerUnit();
  var pt1 = [this.Shape.Origin[0], this.Shape.Origin[1]];
  var pt2 = [x, y];
  return [pt1,pt2];
}

ArrowWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

ArrowWidget.prototype.SetText = function(text, height) {
  this.TextShape = new Text();
  this.TextShape.String = text;  
  this.TextShape.Size = height;  
  this.TextShape.Color = this.Shape.FillColor;
  this.TextShape.Position= this.Shape.Origin; 
  this.TextShape.UpdateBuffers(); 
}


ArrowWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}

ArrowWidget.prototype.Serialize = function() {
  if(this.Shape === undefined) { 
    return null; 
  }

  var obj = new Object();
  obj.type = "arrow";
  obj.origin = this.Shape.Origin
  obj.fillcolor = this.Shape.FillColor;
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.length = this.Shape.Length;
  obj.width = this.Shape.Width;
  obj.orientation = this.Shape.Orientation;
  obj.fixedsize = this.Shape.FixedSize;
  obj.fixedorientation = this.Shape.FixedOrientation;
  
  obj.test = "";
  if(this.TextShape != false && this.TextShape.String != "")
    {
    obj.text = this.TextShape.String;
    }

  return obj;
}

// Load a widget from a json object (origin MongoDB).
ArrowWidget.prototype.Load = function(obj) {
  this.Shape.Origin = [parseFloat(obj.origin[0]), parseFloat(obj.origin[1])];
  this.Shape.FillColor = [parseFloat(obj.fillcolor[0]),parseFloat(obj.fillcolor[1]),parseFloat(obj.fillcolor[2])];
  this.Shape.OutlineColor = [parseFloat(obj.outlinecolor[0]),parseFloat(obj.outlinecolor[1]),parseFloat(obj.outlinecolor[2])];
  this.Shape.Length = parseFloat(obj.length);
  this.Shape.Width = parseFloat(obj.width);
  this.Shape.Orientation = parseFloat(obj.orientation);
 
  if (obj.fixedsize === undefined) {
    this.Shape.FixedSize = true;
  } else {
    this.Shape.FixedSize = (obj.fixedsize == "true");
  }
  
  if (obj.fixedorientation === undefined) {
    this.Shape.FixedOrientation = true;
  } else {
    this.Shape.FixedOrientation = (obj.fixedorientation == "true");
  }
  this.Shape.UpdateBuffers();
}

// When we toggle fixed size, we have to convert the length of the arrow
// between viewer and world.
ArrowWidget.prototype.SetFixedSize = function(fixedSizeFlag) {
  if (this.Shape.FixedSize == fixedSizeFlag) {
    return;
  }
  var pixelsPerUnit = this.Viewer.GetPixelsPerUnit();

  if (fixedSizeFlag) {
    // Convert length from world to viewer.
    this.Shape.Length *= pixelsPerUnit;
    this.Shape.Width *= pixelsPerUnit;
  } else {
    this.Shape.Length /= pixelsPerUnit;
    this.Shape.Width /= pixelsPerUnit;
  }
  this.Shape.FixedSize = fixedSizeFlag;
  this.Shape.UpdateBuffers();
  eventuallyRender();
}



ArrowWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

ArrowWidget.prototype.HandleMouseDown = function(event) {
  if (event.SystemEvent.which != 1)
    {
    return;
    }
  if (this.State == ARROW_WIDGET_NEW) {
    this.TipPosition = [event.MouseX, event.MouseY];
    this.State = ARROW_WIDGET_DRAG_TAIL;
  }
  if (this.State == ARROW_WIDGET_ACTIVE) {
    if (this.ActiveTail) {
      this.TipPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
      this.State = ARROW_WIDGET_DRAG_TAIL;
    } else {
      var tipPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
      this.TipOffset[0] = tipPosition[0] - event.MouseX;
      this.TipOffset[1] = tipPosition[1] - event.MouseY;
      this.State = ARROW_WIDGET_DRAG;
    }
  }
}

// returns false when it is finished doing its work.
ArrowWidget.prototype.HandleMouseUp = function(event) {
  if (this.State == ARROW_WIDGET_ACTIVE && event.SystemEvent.which == 3) {
    // Right mouse was pressed.
    // Pop up the properties dialog.
    // Which one should we popup?
    // Add a ShowProperties method to the widget. (With the magic of javascript). 
    this.State = ARROW_WIDGET_PROPERTIES_DIALOG;
    this.ShowPropertiesDialog();
  } else if (this.State != ARROW_WIDGET_PROPERTIES_DIALOG) {
    this.DrawnCallback(this);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    this.SetActive(false);
  }
}

ArrowWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;

  if (event.MouseDown == false && this.State == ARROW_WIDGET_ACTIVE) {
    this.CheckActive(event);
    return;
  }

  if (this.State == ARROW_WIDGET_NEW || this.State == ARROW_WIDGET_DRAG) {
    var viewport = this.Viewer.GetViewport();    
    this.Shape.Origin = this.Viewer.ConvertPointViewerToWorld(x+this.TipOffset[0], y+this.TipOffset[1]);
    eventuallyRender();
    this.IsShapeUpdate = true;
  }

  if (this.State == ARROW_WIDGET_DRAG_TAIL) { 
    var dx = x-this.TipPosition[0];
    var dy = y-this.TipPosition[1];
    if ( ! this.Shape.FixedSize) {
      var pixelsPerUnit = this.Viewer.GetPixelsPerUnit();
      dx /= pixelsPerUnit;
      dy /= pixelsPerUnit;
    }
    this.Shape.Length = Math.sqrt(dx*dx + dy*dy);
    this.Shape.Orientation = Math.atan2(dy, dx) * 180.0 / Math.PI;
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.IsShapeUpdate = true;
  }

  if (this.State == ARROW_WIDGET_WAITING) { 
    this.CheckActive(event);
  }
}

ArrowWidget.prototype.CheckActive = function(event) {
  var viewport = this.Viewer.GetViewport();
  var cam = this.Viewer.MainView.Camera;
  var m = cam.Matrix;
  // Compute tip point in screen coordinates.
  var x = this.Shape.Origin[0];
  var y = this.Shape.Origin[1];
  // Convert from world coordinate to view (-1->1);
  var h = (x*m[3] + y*m[7] + m[15]);
  var xNew = (x*m[0] + y*m[4] + m[12]) / h;
  var yNew = (x*m[1] + y*m[5] + m[13]) / h;
  // Convert from view to screen pixel coordinates.
  xNew = (xNew + 1.0)*0.5*viewport[2] + viewport[0];
  yNew = (yNew + 1.0)*0.5*viewport[3] + viewport[1];

  // Use this point as the origin.
  x = event.MouseX - xNew;
  y = event.MouseY - yNew;
  // Rotate so arrow lies along the x axis.
  var tmp = this.Shape.Orientation * Math.PI / 180.0;
  var ct = Math.cos(tmp);
  var st = Math.sin(tmp);
  xNew = x*ct + y*st;
  yNew = -x*st + y*ct;

  var length = this.Shape.Length;
  var halfWidth = this.Shape.Width / 2.0;
  if ( ! this.Shape.FixedSize) {
    var pixelsPerUnit = this.Viewer.GetPixelsPerUnit();
    length *= pixelsPerUnit;
    halfWidth *= pixelsPerUnit;
  }
  
  this.IsTextActive = false;
  
  var textOriginScreenPixelPosition;
  var tMouseX = null;
  var tMouseY = null;
  
  if(this.TextShape != false && this.TextShape.String != "")
    {
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.TextShape.Position[0],this.TextShape.Position[1]);
    
    tMouseX = (event.MouseX - textOriginScreenPixelPosition[0]) + this.TextShape.Anchor[0];  
    tMouseY = (event.MouseY - textOriginScreenPixelPosition[1]) + this.TextShape.Anchor[1];  
   
    if (tMouseX > this.TextShape.PixelBounds[0] && tMouseX < this.TextShape.PixelBounds[1] &&
      tMouseY > this.TextShape.PixelBounds[2] && tMouseY < this.TextShape.PixelBounds[3])
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    }
  else if(this.Viewer.AnnotationEditable)
    {      
    var theta = this.Shape.Orientation * 3.1415926536 / 180.0;
    var yAnchor = Math.sin( theta) * (this.Shape.PointBuffer[9]+4);
    var xAnchor  = Math.cos( theta) * (this.Shape.PointBuffer[9]+4);    
    if(yAnchor < 0) yAnchor -= 5
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
    tMouseX = (event.MouseX - textOriginScreenPixelPosition[0]  - xAnchor );  
    tMouseY = (event.MouseY - textOriginScreenPixelPosition[1] - yAnchor  - 6);  
    if(tMouseX > 0 && tMouseX < 70 && Math.abs(tMouseY) < 6)   
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    }
  

  this.ActiveTail = false;
  if (xNew > 0.0 && xNew < length && yNew > -halfWidth && yNew < halfWidth) {
    this.SetActive(true);
    // Save the position along the arrow to decide which drag behavior to use.
    if (xNew > length - halfWidth*4) 
      {
      this.ActiveTail = true;
      this.Viewer.SetCursor("col-resize");
      }
    else
      {
      this.Viewer.SetCursor("move");
      }
    return true;
  } else {
    this.Viewer.SetCursor("move");
    this.SetActive(false);
    return false;
  }
}

// We have three states this widget is active.
// First created and folloing the mouse (actually two, head or tail following). Color nbot active.
// Active because mouse is over the arrow.  Color of arrow set to active.
// Active because the properties dialog is up. (This is how dialog know which widget is being edited).
ArrowWidget.prototype.GetActive = function() {
  if (this.State == ARROW_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

ArrowWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = ARROW_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    if(this.TextShape != false) this.TextShape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.State = ARROW_WIDGET_WAITING;
    this.Shape.Active = false;
    if(this.TextShape != false) this.TextShape.Active = false;
    this.Viewer.DeactivateWidget(this);
    eventuallyRender();
  }
}

// Can we bind the dialog apply callback to an objects method?
var ARROW_WIDGET_DIALOG_SELF;
ArrowWidget.prototype.ShowPropertiesDialog = function () {
  //var fs = document.getElementById("ArrowFixedSize");
  //fs.checked = this.Shape.FixedSize;

  var color = document.getElementById("arrowcolor");
  color.value = ConvertColorToHex(this.Shape.FillColor);
  
  var lengthLabel = document.getElementById("ArrowLength");
  //if (fs.checked) {
  //  lengthLabel.innerHTML = "Length: " + (this.Shape.Length).toFixed(2) + " pixels";
  //} else {
  //  lengthLabel.innerHTML = "Length: " + (this.Shape.Length).toFixed(2) + " units";
  //}
  
  ARROW_WIDGET_DIALOG_SELF = this;
  $("#arrow-properties-dialog").dialog("open");
}    

// I need this because old schemes cannot use "Load"
ArrowWidget.prototype.SetColor = function (hexColor) {
  this.Shape.SetFillColor(hexColor);
  eventuallyRender();
}

function ArrowPropertyDialogApply() {
  var widget = ARROW_WIDGET_DIALOG_SELF;
  if ( ! widget) { 
    return; 
  }

  var hexcolor = document.getElementById("arrowcolor").value;
  //var fixedSizeFlag = document.getElementById("ArrowFixedSize").checked;
  widget.Shape.SetFillColor(hexcolor);
  if (widget != null) {
    widget.SetActive(false);
    //widget.SetFixedSize(fixedSizeFlag);
  }
  eventuallyRender();
}

function ArrowPropertyDialogCancel() {
  var widget = ARROW_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
  }
}

function ArrowPropertyDialogDelete() {
  var widget = ARROW_WIDGET_DIALOG_SELF;
  if (widget != null) {
    viewer.ActiveWidget = null;
    // We need to remove an item from a list.
    // shape list and widget list.
    widget.RemoveFromViewer();
    eventuallyRender();
  }
}






//==============================================================================
// Mouse down defined the center.
// Drag defines the radius.


// The circle has just been created and is following the mouse.
// I can probably merge  this state with drag. (mouse up vs down though)
var CIRCLE_WIDGET_NEW = 0;
var CIRCLE_WIDGET_DRAG = 1; // The whole arrow is being dragged.
var CIRCLE_WIDGET_DRAG_RADIUS = 2;
var CIRCLE_WIDGET_WAITING = 3; // The normal (resting) state.
var CIRCLE_WIDGET_ACTIVE = 4; // Mouse is over the widget and it is receiving events.
var CIRCLE_WIDGET_PROPERTIES_DIALOG = 5; // Properties dialog is up

function CircleWidget (viewer, newFlag) {
  this.Tolerance = 0.05;
  if (MOBILE_DEVICE) {
    this.Tolerance = 0.1;
  }

  if (viewer == null) {
    return;
  }
  this.Popup = new WidgetPopup(this);
  this.ShowPopup = true;
  this.Viewer = viewer;
  this.IsTextActive = false;
  this.IsShapeUpdate = false;
  this.MiddleCrossOffset = 100;
  var cam = viewer.MainView.Camera;
  var viewport = viewer.MainView.Viewport;
  this.Shape = new Circle();
  this.Shape.Origin = [0,0];
  this.Shape.OutlineColor = [0.0, 0.0, 0.0];
  this.Shape.Radius = 50*cam.Height/viewport[3];
  this.Shape.LineWidth =  5.0*cam.Height/viewport[3];
  this.Shape.FixedSize = false;
  
  this.TextShape = false;
  this.DrawnCallback = function(widget){};
  
  this.Viewer.WidgetList.push(this);

  // Note: If the user clicks before the mouse is in the
  // canvas, this will behave odd.

  if (newFlag) {
    this.State = CIRCLE_WIDGET_NEW;
    this.Viewer.ActivateWidget(this);
    return;
  }

  this.State = CIRCLE_WIDGET_WAITING;  
}

CircleWidget.prototype.Draw = function(view) {
   this.Shape.Draw(view);
   
   // draw cross middle if editable
   if(this.Viewer.AnnotationEditable && this.Shape.Radius > 200)
     { 
     var vertical = new Polyline();
     vertical.OutlineColor = [0.6, 0.6, 0.6];
     vertical.FixedSize = false;
     vertical.Points = [];
     vertical.Points.push([this.Shape.Origin[0] - this.MiddleCrossOffset, this.Shape.Origin[1]]);
     vertical.Points.push([this.Shape.Origin[0] + this.MiddleCrossOffset, this.Shape.Origin[1]]);
     vertical.UpdateBuffers();
     vertical.Draw(view)     
          
     var horizontal = new Polyline();     
     horizontal.OutlineColor = [0.6, 0.6, 0.6];     
     horizontal.FixedSize = false;
     horizontal.Points = [];
     horizontal.Points.push([this.Shape.Origin[0], this.Shape.Origin[1] - this.MiddleCrossOffset]);
     horizontal.Points.push([this.Shape.Origin[0], this.Shape.Origin[1] + this.MiddleCrossOffset]);
     horizontal.UpdateBuffers();
     horizontal.Draw(view)
     }
  if(this.TextShape != false && this.TextShape.String != "")
    {
    this.UpdatetTextPosition(view)
    this.TextShape.Draw(view);  
    }
  else if(this.Viewer.AnnotationEditable)
    {
    this.SetText("Add Label", 12)
    this.TextShape.Color =  [0.6, 0.6, 0.6];
    this.UpdatetTextPosition(view);
    this.TextShape.Draw(view);
    this.TextShape = false;
    }
}

CircleWidget.prototype.UpdatetTextPosition = function(view) {
  if(this.TextShape != false && this.TextShape.String != "")
    {
    this.TextShape.Position= this.Shape.Origin; 
    var offset = -5 - this.Viewer.GetPixelsPerUnit()*this.Shape.Radius;
    var scale = this.Viewer.MainView.Viewport[3] / this.Viewer.MainView.Camera.GetHeight();
    view.Context2d.font = this.TextShape.Size+'pt Calibri';
    var width = view.Context2d.measureText(this.TextShape.String).width;    
    this.TextShape.Anchor = [width/2, offset - (scale * this.Shape.LineWidth)/2];
    }
}

CircleWidget.prototype.GetSelectBounds = function() {
  var offset = this.Shape.Radius;
  var pt1 = [this.Shape.Origin[0]  - offset, this.Shape.Origin[1] + offset];
  var pt2 = [this.Shape.Origin[0] + offset, this.Shape.Origin[1]- offset];
  return [pt1,pt2];
}

CircleWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

CircleWidget.prototype.EnableWidgetPopup = function(enable) {
    this.ShowPopup = (enable == 1 || enable);
}

CircleWidget.prototype.SetText = function(text, height) {
  this.TextShape = new Text();
  this.TextShape.String = text;  
  this.TextShape.Size = height;  
  this.TextShape.Color = this.Shape.OutlineColor;
  this.TextShape.Position= this.Shape.Origin; 
  this.TextShape.UpdateBuffers(); 
}

// This needs to be put in the Viewer.
CircleWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}

CircleWidget.prototype.Serialize = function() {
  if(this.Shape === undefined){ return null; }
  var obj = new Object();
  obj.type = "circle";
  obj.origin = this.Shape.Origin;
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.radius = this.Shape.Radius;
  obj.linewidth = this.Shape.LineWidth;
  if(this.TextShape != false && this.TextShape.String != "")
    {
    obj.text = this.TextShape.String;
    }
  return obj;
}

// Load a widget from a json object (origin MongoDB).
CircleWidget.prototype.Load = function(obj) {
  this.Shape.Origin[0] = parseFloat(obj.origin[0]);
  this.Shape.Origin[1] = parseFloat(obj.origin[1]);
  this.Shape.OutlineColor[0] = parseFloat(obj.outlinecolor[0]);
  this.Shape.OutlineColor[1] = parseFloat(obj.outlinecolor[1]);
  this.Shape.OutlineColor[2] = parseFloat(obj.outlinecolor[2]);
  this.Shape.Radius = parseFloat(obj.radius);
  this.Shape.LineWidth = parseFloat(obj.linewidth);
  this.Shape.FixedSize = false;
  this.Shape.UpdateBuffers();
}
  
CircleWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

CircleWidget.prototype.HandleDoubleClick = function(event) {
}

CircleWidget.prototype.HandleMouseDown = function(event) {
  if (event.SystemEvent.which != 1)
    {
    return;
    }
  if (this.State == CIRCLE_WIDGET_NEW) {
    // We need the viewer position of the circle center to drag radius.
    this.OriginViewer = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);    
    this.State = CIRCLE_WIDGET_DRAG_RADIUS;
  }
  if (this.State == CIRCLE_WIDGET_ACTIVE) {
    // Determine behavior from active radius.
    if (this.NormalizedActiveDistance < 0.5) {
      this.Viewer.SetCursor("move");
      this.State = CIRCLE_WIDGET_DRAG;
    } else {
      this.OriginViewer = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1]);
      this.State = CIRCLE_WIDGET_DRAG_RADIUS;
    }
  }
}

// returns false when it is finished doing its work.
CircleWidget.prototype.HandleMouseUp = function(event) {
  if ( this.State == CIRCLE_WIDGET_DRAG ||  this.State == CIRCLE_WIDGET_DRAG_RADIUS) {
    this.DrawnCallback(this);
    this.SetActive(false);
    RecordState();
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
  }
}

CircleWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;

  if (event.MouseDown == false && this.State == CIRCLE_WIDGET_ACTIVE) {
    this.CheckActive(event);
    return;
  }
  
  if (this.State == CIRCLE_WIDGET_NEW || this.State == CIRCLE_WIDGET_DRAG) {
    this.Shape.Origin = this.Viewer.ConvertPointViewerToWorld(x, y);
    this.IsShapeUpdate = true;
    eventuallyRender();
  }
  
  if (this.State == CIRCLE_WIDGET_DRAG_RADIUS) {
    var viewport = this.Viewer.GetViewport();
    var cam = this.Viewer.MainView.Camera;
    var dx = x-this.OriginViewer[0];
    var dy = y-this.OriginViewer[1];
    // Change units from pixels to world.
    this.Shape.Radius = Math.sqrt(dx*dx + dy*dy) * cam.Height / viewport[3];
    this.Shape.UpdateBuffers();
    this.IsShapeUpdate = true;
    eventuallyRender();
  }
  
   if (this.State == CIRCLE_WIDGET_WAITING) { 
    this.CheckActive(event);
  } 
}


CircleWidget.prototype.HandleTouchPan = function(event) {
  w0 = this.Viewer.ConvertPointViewerToWorld(event.LastMouseX, event.LastMouseY);
  w1 = this.Viewer.ConvertPointViewerToWorld(    event.MouseX,     event.MouseY);
    
  // This is the translation.
  var dx = w1[0] - w0[0];
  var dy = w1[1] - w0[1];
  
  this.Shape.Origin[0] += dx;
  this.Shape.Origin[1] += dy;
  eventuallyRender();
}

CircleWidget.prototype.HandleTouchPinch = function(event) {  
  this.Shape.Radius *= event.PinchScale;
  this.Shape.UpdateBuffers();
  eventuallyRender();
}

CircleWidget.prototype.HandleTouchEnd = function(event) {
  this.SetActive(false);
}


CircleWidget.prototype.CheckActive = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  
  this.IsTextActive = false;
  
  // change dx and dy to vector from center of circle.
  if (this.FixedSize) {
    dx = event.MouseX - this.Shape.Origin[0];
    dy = event.MouseY - this.Shape.Origin[1];
  } else {
    dx = event.MouseWorldX - this.Shape.Origin[0];
    dy = event.MouseWorldY - this.Shape.Origin[1];
  }

  var d = Math.sqrt(dx*dx + dy*dy)/this.Shape.Radius;
  var active = false;
  var lineWidth = this.Shape.LineWidth / this.Shape.Radius;
  this.NormalizedActiveDistance = d;
  
  var textOriginScreenPixelPosition;
  var tMouseX = null;
  var tMouseY = null;
  
  if(this.TextShape != false && this.TextShape.String != "")
    {
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.TextShape.Position[0],this.TextShape.Position[1]);
    
    tMouseX = (x - textOriginScreenPixelPosition[0]) + this.TextShape.Anchor[0];  
    tMouseY = (y - textOriginScreenPixelPosition[1]) + this.TextShape.Anchor[1];  
   
    if(tMouseX > this.TextShape.PixelBounds[0] && tMouseX < this.TextShape.PixelBounds[1] &&
      tMouseY > this.TextShape.PixelBounds[2] && tMouseY < this.TextShape.PixelBounds[3])
      {
      this.Viewer.SetCursor("text");
      active = true;
      this.IsTextActive = true;
      }
    }
  else if(this.Viewer.AnnotationEditable)
    {
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Origin[0], this.Shape.Origin[1] + this.Shape.Radius);
    tMouseX = (x - textOriginScreenPixelPosition[0] );  
    tMouseY = (y - textOriginScreenPixelPosition[1] - 12);  
    if(Math.abs(tMouseX) < 35 && Math.abs(tMouseY) < 6)   
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    }
  
  if (this.Shape.FillColor == undefined) { // Circle 
    if ((d < (1.0+ this.Tolerance +lineWidth) && d > (1.0-this.Tolerance))) {
      var pt = this.Viewer.ConvertPointViewerToWorld(x, y);
      if(pt[1] > (this.Shape.Origin[1] + this.Shape.Radius*0.5) ||
        pt[1] < (this.Shape.Origin[1] - this.Shape.Radius*0.5))
        {
        this.Viewer.SetCursor("ns-resize");
        }
      else this.Viewer.SetCursor("ew-resize");
      active = true;
    }
    else if(d < (this.Tolerance+lineWidth))
      {
      this.Viewer.SetCursor("move");
      active = true;
      }
  } else { // Disk
    if (d < (1.0+this.Tolerance+lineWidth) && d > (this.Tolerance+lineWidth) || 
        d < lineWidth) {
	    active = true;
    }
  }
  
  this.SetActive(active);
  return active;
}

// Multiple active states.  Active state is a bit confusing.
CircleWidget.prototype.GetActive = function() {
  if (this.State == CIRCLE_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

CircleWidget.prototype.Deactivate = function() { 
  this.Popup.StartHideTimer(); 
  this.State = CIRCLE_WIDGET_WAITING;
  this.Shape.Active = false;
  if(this.TextShape != false) this.TextShape.Active = false;
  this.Viewer.DeactivateWidget(this);
  eventuallyRender();
}

// Setting to active always puts state into "active".
// It can move to other states and stay active.
CircleWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = CIRCLE_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    if(this.TextShape != false) this.TextShape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
    // Compute the location for the pop up and show it.
    var roll = this.Viewer.GetCamera().Roll;
    var x = this.Shape.Origin[0] + 0.8 * this.Shape.Radius * (Math.cos(roll) + Math.sin(roll));
    var y = this.Shape.Origin[1] + 0.8 * this.Shape.Radius * (Math.cos(roll) - Math.sin(roll));
    var pt = this.Viewer.ConvertPointWorldToViewer(x, y);
    if(this.ShowPopup) this.Popup.Show(pt[0],pt[1]);
  } else {
    this.Deactivate();
  }
  eventuallyRender();
}

// Can we bind the dialog apply callback to an objects method?
var CIRCLE_WIDGET_DIALOG_SELF;
CircleWidget.prototype.ShowPropertiesDialog = function () {
  var color = document.getElementById("circlecolor");
  color.value = ConvertColorToHex(this.Shape.OutlineColor);

  var lineWidth = document.getElementById("circlelinewidth");
  lineWidth.value = (this.Shape.LineWidth).toFixed(2);
  
  var areaLabel = document.getElementById("circlearea");
    areaLabel.innerHTML = "Area: " + (2.0*Math.PI*this.Shape.Radius*this.Shape.Radius).toFixed(2);
  if (this.Shape.FixedSize) {
    areaLabel.innerHTML += " pixels^2";
  } else {
    areaLabel.innerHTML += " units^2";
  }

  CIRCLE_WIDGET_DIALOG_SELF = this;
  $("#circle-properties-dialog").dialog("open");
}

function CirclePropertyDialogApply() {
  var widget = CIRCLE_WIDGET_DIALOG_SELF;
  if ( ! widget) { 
    return; 
  }
  var hexcolor = document.getElementById("circlecolor").value;
  widget.Shape.SetOutlineColor(hexcolor);
  var lineWidth = document.getElementById("circlelinewidth");
  widget.Shape.LineWidth = parseFloat(lineWidth.value);
  widget.Shape.UpdateBuffers();
  widget.SetActive(false);
  RecordState();
  eventuallyRender();
}

function CirclePropertyDialogCancel() {
  var widget = CIRCLE_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
    eventuallyRender();
  }
}

function CirclePropertyDialogDelete() {
  var widget = CIRCLE_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
    // We need to remove an item from a list.
    // shape list and widget list.
    widget.RemoveFromViewer();
    eventuallyRender();
    RecordState();
  }
}




//==============================================================================
// The new behavior.
// The widget gets created with a dialog and is in it's waiting state.
// It monitors mouse movements and decides when to become active.
// It becomes active when the mouse is over the center or edge.
// I think we should have a method other than handleMouseMove check this
// because we need to handle overlapping widgets.
// When active, the user can move the circle, or change the radius.
// I do not know what to do about line thickness yet.
// When active, we will respond to right clicks which bring up a menu.
// One item in the menu will be delete.

// I am adding an optional glyph/shape/arrow that displays the text location.

// TODO:  Dragging the arrow should not snap the tip to the mouse.

//==============================================================================



var TEXT_WIDGET_WAITING = 0;
var TEXT_WIDGET_ACTIVE = 1;
var TEXT_WIDGET_DRAG = 2; // Drag text with position
var TEXT_WIDGET_DRAG_TEXT = 3; // Drag text but leave the position the same.
var TEXT_WIDGET_PROPERTIES_DIALOG = 4;

function TextWidget (viewer, string) {
  if (viewer == null) {
    return null;
  }
  this.Viewer = viewer;
  // Text widgets are created with the dialog open (to set the string).
  this.State = TEXT_WIDGET_PROPERTIES_DIALOG;
  this.CursorLocation = 0; // REMOVE

  var cam = this.Viewer.MainView.Camera;

  this.Shape = new Text();
  this.Shape.String = string;
  this.Shape.UpdateBuffers(); // Needed to get the bounds.
  this.Shape.Color = [0.0, 0.0, 1.0];
  this.Shape.Anchor = [0.5*(this.Shape.PixelBounds[0]+this.Shape.PixelBounds[1]),
                      0.5*(this.Shape.PixelBounds[2]+this.Shape.PixelBounds[3])];

  // I would like to setup the ancoh in the middle of the screen,
  // And have the Anchor in the middle of the text.
  this.Shape.Position = [cam.FocalPoint[0], cam.FocalPoint[1]];
  
  // The anchor shape could be put into the text widget, but I might want a thumb tack anchor.
  this.AnchorShape = new Arrow();
  this.AnchorShape.Origin = this.Shape.Position; // note: both point to the same memory now.
  this.AnchorShape.Length = 50;
  this.AnchorShape.Width = 10;
  this.AnchorShape.UpdateBuffers();
  this.AnchorShape.Visibility = false;
  this.AnchorShape.Orientation = 45.0; // in degrees, counter clockwise, 0 is left
  this.AnchorShape.FillColor = [0,0,1];
  this.AnchorShape.OutlineColor = [1,1,0];
  this.AnchorShape.ZOffset = 0.2;
  this.AnchorShape.UpdateBuffers();

  viewer.WidgetList.push(this);
  this.ActiveReason = 1;
}

// Three state visibility so text can be hidden during calss questions.
TextWidget.prototype.Draw = function(view, visibility) {
  if (visibility != ANNOTATION_OFF) {
    this.AnchorShape.Draw(view);
  }
  if (visibility == ANNOTATION_ON) {
    this.Shape.Draw(view);
  }
}


TextWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}

TextWidget.prototype.Serialize = function() {
  if(this.Shape === undefined){ return null; }
  var obj = new Object();
  obj.type = "text";
  obj.color = this.Shape.Color;
  obj.size = this.Shape.Size;
  obj.offset = [-this.Shape.Anchor[0], -this.Shape.Anchor[1]];
  obj.position = this.Shape.Position;
  obj.string = this.Shape.String;
  obj.anchorVisibility = this.AnchorShape.Visibility;
  return obj;
}

// Load a widget from a json object (origin MongoDB).
TextWidget.prototype.Load = function(obj) {
  var string = obj.string;
  // Some empty strings got in my database.  I connot delete them from the gui.
  if (obj.string && obj.string == "") {
    this.RemoveFromViewer();
    return;
  }

  this.Shape.String = obj.string;
  var rgb = [parseFloat(obj.color[0]),
             parseFloat(obj.color[1]),
             parseFloat(obj.color[2])];
  this.Shape.Color = rgb;
  this.Shape.Size = parseFloat(obj.size);
  // I added offest and I have to deal with entries that do not have it.
  if (obj.offset) { // how to try / catch in javascript?
    this.SetTextOffset(parseFloat(obj.offset[0]), 
                       parseFloat(obj.offset[1]));
  }
  this.Shape.Position = [parseFloat(obj.position[0]),
                         parseFloat(obj.position[1]),
                         parseFloat(obj.position[2])];
  this.SetAnchorShapeVisibility(obj.anchorVisibility);
  this.AnchorShape.SetFillColor(rgb);
  this.AnchorShape.ChooseOutlineColor();
  
  this.Shape.UpdateBuffers();
  this.UpdateAnchorShape();
}

// When the arrow is visible, the text is offset from the position (tip of arrow).
TextWidget.prototype.SetTextOffset = function(x, y) {
  this.SavedShapeAnchor = [-x, -y];
  this.Shape.Anchor = this.SavedShapeAnchor;
  this.UpdateAnchorShape();
}


// When the arrow is visible, the text is offset from the position (tip of arrow).
TextWidget.prototype.SetPosition = function(x, y) {
  this.Shape.Position = [x, y];
  this.AnchorShape.Origin = this.Shape.Position;
}

// Anchor is in the middle of the bounds when the shape is not visible.
TextWidget.prototype.SetAnchorShapeVisibility = function(flag) {
  if (this.AnchorShape.Visibility == flag) {
    return;
  }
  if (flag) { // turn glyph on
    if (this.SavedShapeAnchor == undefined) {
      this.SavedShapeAnchor = [-30, 0];
      }
    this.Shape.Anchor = this.SavedShapeAnchor;
    this.AnchorShape.Visibility = true;
    this.AnchorShape.Origin = this.Shape.Position;
    this.UpdateAnchorShape();
  } else { // turn glyph off
    // save the old anchor incase glyph is turned back on.
    this.SavedShapeAnchor = [this.Shape.Anchor[0], this.Shape.Anchor[1]];
    // Put the new (invisible rotation point (anchor) in the middle bottom of the bounds.
    this.Shape.Anchor = [(this.Shape.PixelBounds[0]+this.Shape.PixelBounds[1])*0.5, this.Shape.PixelBounds[2]];
    this.AnchorShape.Visibility = false;
  }
  eventuallyRender();
}

// Change orientation and length of arrow based on the anchor location.
TextWidget.prototype.UpdateAnchorShape = function() {
  // Compute the middle of the text bounds.
  var xMid = 0.5 * (this.Shape.PixelBounds[0] + this.Shape.PixelBounds[1]); 
  var yMid = 0.5 * (this.Shape.PixelBounds[2] + this.Shape.PixelBounds[3]); 
  var xRad = 0.5 * (this.Shape.PixelBounds[1] - this.Shape.PixelBounds[0]); 
  var yRad = 0.5 * (this.Shape.PixelBounds[3] - this.Shape.PixelBounds[2]); 

  // Compute the angle of the arrow.
  var dx = this.Shape.Anchor[0]-xMid;
  var dy = this.Shape.Anchor[1]-yMid;
  this.AnchorShape.Orientation = 180.0 + Math.atan2(dy, dx) * 180.0 / Math.PI;
  // Compute the length of the arrow.
  var length = Math.sqrt(dx*dx + dy*dy);
  // Find the intersection of the vector and the bounding box.
  var min = length;
  if (dy != 0) {
    var d = Math.abs(length * yRad / dy);
    if (min > d) { min = d; }
  }
  if (dx != 0) {
    var d = Math.abs(length * xRad / dx);
    if (min > d) { min = d; }
  }
  length = length - min - 5;
  if (length < 5) { length = 5;}
  this.AnchorShape.Length = length;
  this.AnchorShape.UpdateBuffers();
}

TextWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

TextWidget.prototype.HandleDoubleClick = function(event) {
}

TextWidget.prototype.HandleMouseDown = function(event) {
  if (event.SystemEvent.which == 1) {
    if (this.State == TEXT_WIDGET_ACTIVE) {
      if (this.AnchorShape.Visibility && this.ActiveReason == 0) {
        this.State = TEXT_WIDGET_DRAG_TEXT;
      } else {
        this.State = TEXT_WIDGET_DRAG;
      }
      eventuallyRender();
    }
  }
}

// returns false when it is finished doing its work.
TextWidget.prototype.HandleMouseUp = function(event) {    
  if (event.SystemEvent.which == 1) {
    if (this.State == TEXT_WIDGET_DRAG ||
        this.State == TEXT_WIDGET_DRAG_TEXT) {
      RecordState();
    }
    this.State = TEXT_WIDGET_ACTIVE;
  }
  
  if (this.State == TEXT_WIDGET_ACTIVE && event.SystemEvent.which == 3) {
    // Right mouse was pressed.
    // Pop up the properties dialog.
    // Which one should we popup?
    // Add a ShowProperties method to the widget. (With the magic of javascript). 
    this.State = TEXT_WIDGET_PROPERTIES_DIALOG;
    this.ShowPropertiesDialog();
    }
}


// I need to convert mouse screen point to coordinates of text buffer
// to see if the mouse position is in the bounds of the text.
TextWidget.prototype.ScreenPixelToTextPixelPoint = function(x,y) {
  var textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.Shape.Position[0],this.Shape.Position[1]);
  x = (x - textOriginScreenPixelPosition[0]) + this.Shape.Anchor[0];  
  y = (y - textOriginScreenPixelPosition[1]) + this.Shape.Anchor[1];  

  return [x,y];
}

TextWidget.prototype.HandleMouseMove = function(event) {
  if (this.State == TEXT_WIDGET_DRAG) {
    w0 = this.Viewer.ConvertPointViewerToWorld(event.LastMouseX, event.LastMouseY);
    w1 = this.Viewer.ConvertPointViewerToWorld(    event.MouseX,     event.MouseY);
    // This is the translation.
    var dx = w1[0] - w0[0];
    var dy = w1[1] - w0[1];

    this.Shape.Position[0] += dx;
    this.Shape.Position[1] += dy;
    this.AnchorShape.Origin = this.Shape.Position;
    eventuallyRender();
    return true;
  }
  if (this.State == TEXT_WIDGET_DRAG_TEXT) { // Just the text not the anchor glyph
    this.Shape.Anchor[0] -= event.MouseDeltaX;
    this.Shape.Anchor[1] -= event.MouseDeltaY;
    this.UpdateAnchorShape();
    eventuallyRender();
    return true;
  }
  // We do not want to deactivate the widget while the properties dialog is showing.
  if (this.State != TEXT_WIDGET_PROPERTIES_DIALOG) {
    return this.CheckActive(event);
  }
  return true;
}





TextWidget.prototype.HandleTouchPan = function(event) {
  // We should probably have a handle touch start too.
  // Touch start calls CheckActive() ...
  if (this.State == TEXT_WIDGET_ACTIVE) {
    if (this.AnchorShape.Visibility && this.ActiveReason == 0) {
      this.State = TEXT_WIDGET_DRAG_TEXT;
    } else {
      this.State = TEXT_WIDGET_DRAG;
    }
  }
  event.MouseDeltaX = event.MouseX - event.LastMouseX;
  event.MouseDeltaY = event.MouseY - event.LastMouseY;
  this.HandleMouseMove(event);
}
TextWidget.prototype.HandleTouchPinch = function(event) {
}
TextWidget.prototype.HandleTouchEnd = function(event) {
  this.State = TEXT_WIDGET_ACTIVE;
  this.SetActive(false);
}






TextWidget.prototype.CheckActive = function(event) {
  var tMouse = this.ScreenPixelToTextPixelPoint(event.MouseX, event.MouseY);

  // First check anchor
  // thencheck to see if the point is no the bounds of the text.

  if (this.AnchorShape.Visibility && this.AnchorShape.PointInShape(tMouse[0]-this.Shape.Anchor[0], tMouse[1]-this.Shape.Anchor[1])) {
    this.ActiveReason = 1; // Hackish
    // Doulbe hack. // Does not get highlighted because widget already active.
    this.AnchorShape.Active = true; eventuallyRender();
    this.SetActive(true);
    return true;
  }
  if (tMouse[0] > this.Shape.PixelBounds[0] && tMouse[0] < this.Shape.PixelBounds[1] &&
      tMouse[1] > this.Shape.PixelBounds[2] && tMouse[1] < this.Shape.PixelBounds[3]) {
    this.ActiveReason = 0;
    this.SetActive(true);
    return true;
  }
  this.SetActive(false);
  return false;
}

TextWidget.prototype.GetActive = function() {
  if (this.State == TEXT_WIDGET_ACTIVE || this.State == TEXT_WIDGET_PROPERTIES_DIALOG) {
    return true;  
  }
  return false;
}

TextWidget.prototype.Deactivate = function() {
  this.State = TEXT_WIDGET_WAITING;
  this.Shape.Active = false;
  this.AnchorShape.Active = false;
  this.Viewer.DeactivateWidget(this);
  eventuallyRender();
}

TextWidget.prototype.SetActive = function(flag) {
  // Dialog state is tricky because the widget is still active.
  // SetActive is used to clear the dialog state.
  if (this.State == TEXT_WIDGET_PROPERTIES_DIALOG) {
    this.State == TEXT_WIDGET_ACTIVE;
  }
  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = TEXT_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    if (this.ActiveReason == 1) {
      this.AnchorShape.Active = true;
    }
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.Deactivate();
  }
}

// Can we bind the dialog apply callback to an objects method?
var TEXT_WIDGET_DIALOG_SELF;
TextWidget.prototype.ShowPropertiesDialog = function () {
  TEXT_WIDGET_DIALOG_SELF = this;
  var color = document.getElementById("textcolor");
  color.value = ConvertColorToHex(this.Shape.Color);

  var ta = document.getElementById("textwidgetcontent");
  ta.value = this.Shape.String;
  var tm = document.getElementById("TextMarker");
  tm.checked = this.AnchorShape.Visibility;
  $("#textwidgetcontent").keyup(function (e) { TextPropertyDialogApplyCheck();});
  
  // hack to suppress viewer key events.
  DIALOG_OPEN = true;
  // Can we bind the dialog apply callback to an objects method?
  TEXT_WIDGET_DIALOG_SELF = this;
  $("#text-properties-dialog").dialog("open");
}    

// Two returns in a row is the same as apply.
function TextPropertyDialogApplyCheck() {
  var string = document.getElementById("textwidgetcontent").value;
  if (string.length > 1 && string.slice(-2) == "\n\n") {
    TextPropertyDialogApply();
  }
}

function TextPropertyDialogApply() {
  var widget = TEXT_WIDGET_DIALOG_SELF;
  if ( ! widget) { 
    return; 
  }
  widget.SetActive(false);

  var string = document.getElementById("textwidgetcontent").value;
  // remove any trailing white space.
  string = string.trim();
  if (string == "") {
    alert("Empty String");
    return;
  }

  var hexcolor = document.getElementById("textcolor").value;
  var markerFlag = document.getElementById("TextMarker").checked;

  widget.Shape.String = string;
  widget.Shape.UpdateBuffers();
  widget.Shape.SetColor(hexcolor);
  widget.AnchorShape.SetFillColor(hexcolor);
  widget.AnchorShape.ChooseOutlineColor();
  widget.SetAnchorShapeVisibility(markerFlag);
  
  RecordState();
  
  eventuallyRender();
  
  $("#text-properties-dialog").dialog("close");
}

function TextPropertyDialogCancel() {
  var widget = TEXT_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
  }
}

function TextPropertyDialogDelete() {
  var widget = TEXT_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
    // We need to remove an item from a list.
    // shape list and widget list.
    widget.RemoveFromViewer();
    eventuallyRender();
    RecordState();
  }
}




//==============================================================================
// Mouse click places a point.
// A small circle will be used to shaow an active vertex.
// Widget starts with an active vertex (mouse up).
// Mouse down->up places the vertex and deactivates it.  A new deactive vertex is created.
// Mouse drag at this point drages an edge from the last vertex.


// Todo: Merge vertecies
// Properties dialog for a point (or list).

var POLYLINE_WIDGET_NEW = 0;
var POLYLINE_WIDGET_NEW_EDGE = 1;
var POLYLINE_WIDGET_WAITING = 2;
var POLYLINE_WIDGET_VERTEX_ACTIVE = 3;
var POLYLINE_WIDGET_MIDPOINT_ACTIVE = 4;
var POLYLINE_WIDGET_ACTIVE = 5;
var POLYLINE_WIDGET_PROPERTIES_DIALOG = 6;


function PolylineWidget (viewer, newFlag) {
  if (viewer === undefined) {
    return;
  }
  var cam = viewer.MainView.Camera;
  var viewport = viewer.MainView.Viewport;

  this.Viewer = viewer;
  // If the last point is the same as the first point, ClosedLoop is true.
  this.ClosedLoop = false;
  // Circle is to show an active vertex.
  this.Circle = new Circle();
  this.Circle.FillColor = [1.0, 1.0, 0.2];
  this.Circle.OutlineColor = [0.0,0.0,0.0];
  this.Circle.FixedSize = false;
  this.Circle.ZOffset = -0.05;

  this.Shape = new Polyline();
	this.Shape.OutlineColor = [0.0, 0.0, 0.0];
  this.Shape.FixedSize = false;

  this.Viewer.WidgetList.push(this);
  
  // Set line thickness   using viewer. (5 pixels).
  this.Shape.LineWidth = 5.0*cam.Height/viewport[3];
  this.Circle.Radius = this.Shape.LineWidth; 
  this.Circle.UpdateBuffers();
  
  if (newFlag) {
    this.State = POLYLINE_WIDGET_NEW;
    this.Shape.Active = true;
    this.ActiveVertex = -1;
    this.Viewer.ActivateWidget(this);
  } else {
    this.State = POLYLINE_WIDGET_WAITING;
    this.Circle.Visibility = false;
    this.ActiveVertex == -1;
  }
  this.ActiveMidpoint = -1;
  eventuallyRender();
}

PolylineWidget.prototype.Draw = function(view) {
    this.Shape.Draw(view);
    this.Circle.Draw(view);
}


PolylineWidget.prototype.Serialize = function() {
  if(this.Shape === undefined){ return null; }
  var obj = new Object();
  obj.type = "polyline";
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.linewidth = this.Shape.LineWidth;
  // Copy the points to avoid array reference bug.
  obj.points = [];
  for (var i = 0; i < this.Shape.Points.length; ++i) {
    obj.points.push([this.Shape.Points[i][0], this.Shape.Points[i][1]]);
  }
  
  obj.closedloop = this.ClosedLoop;
  return obj;
}

// Load a widget from a json object (origin MongoDB).
PolylineWidget.prototype.Load = function(obj) {
  this.Shape.OutlineColor[0] = parseFloat(obj.outlinecolor[0]);
  this.Shape.OutlineColor[1] = parseFloat(obj.outlinecolor[1]);
  this.Shape.OutlineColor[2] = parseFloat(obj.outlinecolor[2]);
  this.Shape.LineWidth = parseFloat(obj.linewidth);
  for(var n=0; n < obj.points.length; n++){
      this.Shape.Points[n] = [parseFloat(obj.points[n][0]),
                            parseFloat(obj.points[n][1])];
  }
  this.ClosedLoop = (obj.closedloop == "true");
  this.Shape.UpdateBuffers();
}



PolylineWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}


PolylineWidget.prototype.CityBlockDistance = function(p0, p1) {
  return Math.abs(p1[0]-p0[0]) + Math.abs(p1[1]-p0[1]);
}

PolylineWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

PolylineWidget.prototype.HandleDoubleClick = function(event) {
}

PolylineWidget.prototype.Deactivate = function() {
  this.State = POLYLINE_WIDGET_WAITING;
  this.Viewer.DeactivateWidget(this);
  this.Shape.Active = false;
  this.ActivateVertex(-1);
  eventuallyRender();
}

// Mouse down does nothing. Mouse up causes all state changes.
PolylineWidget.prototype.HandleMouseDown = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  if (this.State == POLYLINE_WIDGET_NEW) {
    this.Shape.Points.push(pt);
    this.Shape.Points.push([pt[0], pt[1]]); // avoid same reference.
    this.ActivateVertex(-1);
    this.State = POLYLINE_WIDGET_NEW_EDGE;
    eventuallyRender();
    return;
  }
  if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
    if (this.ActiveVertex >= 0) { // The user clicked on an active vertex.  End the line.
      if (this.ActiveVertex == 0) {
        this.ClosedLoop = true;
      } else {
        this.ClosedLoop = false;
        // Remove the last duplicate point.
        this.Shape.Points.pop();
      }
      this.Deactivate();
      RecordState();
      return;
    }
    this.Shape.Points.push(pt);
    this.Shape.UpdateBuffers();
    eventuallyRender();
    return;
  }

  if (this.State == POLYLINE_WIDGET_MIDPOINT_ACTIVE) {
    // Compute the midpoint.
    var x = 0.5 * (this.Shape.Points[this.ActiveMidpoint-1][0] + this.Shape.Points[this.ActiveMidpoint][0]);
    var y = 0.5 * (this.Shape.Points[this.ActiveMidpoint-1][1] + this.Shape.Points[this.ActiveMidpoint][1]);
    // Insert the midpoint in the loop.
    this.Shape.Points.splice(this.ActiveMidpoint,0,[x,y]);
    // Now set up dragging interaction on the new point.
    this.ActivateVertex(this.ActiveMidpoint);
    this.ActiveMidpoint = -1;
    this.State = POLYLINE_WIDGET_VERTEX_ACTIVE; // Activate vertex probably does this.
    }

  if (this.State == POLYLINE_WIDGET_ACTIVE) {
    this.LastMouseWorld = pt;
  }
}

// Returns false when it is finished doing its work.
PolylineWidget.prototype.HandleMouseUp = function(event) {
  // Logic to remove a vertex.  Drag it over a neighbor.
  //if (this.State  do this later.
  
  if (this.State == POLYLINE_WIDGET_ACTIVE && event.SystemEvent.which == 3) {
    // Right mouse was pressed.
    // Pop up the properties dialog.
    this.State = POLYLINE_WIDGET_PROPERTIES_DIALOG;
    this.ShowPropertiesDialog();
  }

  if (event.SystemEvent.which == 1) {
    if (this.State == POLYLINE_WIDGET_VERTEX_ACTIVE ||
        this.State == POLYLINE_WIDGET_ACTIVE) {
      // Dragging a vertex or the whole polyline.
      RecordState();
    }
  }

}


PolylineWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);

  if (this.State == POLYLINE_WIDGET_NEW) {
    this.Circle.Origin = pt;
    eventuallyRender();
    return;
  }
  if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
    var lastIdx = this.Shape.Points.length - 1;
    this.Shape.Points[lastIdx] = pt;
    this.Shape.UpdateBuffers();
    var idx = this.WhichVertexShouldBeActive(pt);
    // Only the first or last vertexes will stop the new line.
    this.ActivateVertex(idx);
    eventuallyRender();
    return;
  }
  if (this.State == POLYLINE_WIDGET_VERTEX_ACTIVE ||
      this.State == POLYLINE_WIDGET_MIDPOINT_ACTIVE ||
      this.State == POLYLINE_WIDGET_ACTIVE) {
    if (event.SystemEvent.which == 0) {
      // Turn off the active vertex if the mouse moves away.
      this.SetActive(this.CheckActive(event));
      return;
    }
    if (this.State == POLYLINE_WIDGET_ACTIVE && event.SystemEvent.which == 1) {
      //drag the whole widget.
      var dx = pt[0] - this.LastMouseWorld[0];
      var dy = pt[1] - this.LastMouseWorld[1];
      for (var i = 0; i < this.Shape.Points.length; ++i) {
        this.Shape.Points[i][0] += dx;
        this.Shape.Points[i][1] += dy;
      }
      this.LastMouseWorld = pt;
      this.Shape.UpdateBuffers();
      eventuallyRender();
      return;
    }
    if (this.State == POLYLINE_WIDGET_VERTEX_ACTIVE && event.SystemEvent.which == 1) {
      //drag the vertex
      var last = this.Shape.Points.length-1;
      if (this.ClosedLoop && (this.ActiveVertex == 0 || this.ActiveVertex == last)) {
        this.Shape.Points[0] = pt;
        this.Shape.Points[last] = [pt[0],pt[1]]; // Bug moving entire line with shared points incremented twice.
        }
      else
        {
        this.Shape.Points[this.ActiveVertex] = pt;
        }
      this.Circle.Origin = pt;
      this.Shape.UpdateBuffers();
      eventuallyRender();
    }
  }
}

// pt is mouse in world coordinates.
PolylineWidget.prototype.WhichVertexShouldBeActive = function(pt) {
  if (this.State == POLYLINE_WIDGET_NEW) {
    return -1;
  }
  var r2 = this.Circle.Radius * this.Circle.Radius;
  if (this.State == POLYLINE_WIDGET_NEW_EDGE) {
    var dx = pt[0] - this.Shape.Points[0][0];
    var dy = pt[1] - this.Shape.Points[0][1];
    var dist2 = dx*dx + dy*dy;
    if (dist2 < r2) { return 0; }
    var last = this.Shape.Points.length - 2;
    if (last >= 0 ) {
      var dx = pt[0] - this.Shape.Points[last][0];
      var dy = pt[1] - this.Shape.Points[last][1];
      var dist2 = dx*dx + dy*dy;
      if (dist2 < r2) { return last; }    
    }
    return -1;
  }

  if (this.State == POLYLINE_WIDGET_WAITING || this.State == POLYLINE_WIDGET_VERTEX_ACTIVE) {
    // Check all the vertecies.
    for (var i = 0; i < this.Shape.Points.length; ++i) {
      var dx = pt[0] - this.Shape.Points[i][0];
      var dy = pt[1] - this.Shape.Points[i][1];
      var dist2 = dx*dx + dy*dy;
      if (dist2 < r2) { 
        return i;
      }
    }
  }
  
  return -1;
}



PolylineWidget.prototype.HandleTouchPan = function(event) {
}
PolylineWidget.prototype.HandleTouchPinch = function(event) {
}
PolylineWidget.prototype.HandleTouchEnd = function(event) {
}


    
PolylineWidget.prototype.CheckActive = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);

  // First check if any verticies are active.
  var idx = this.WhichVertexShouldBeActive(pt);
  this.ActivateVertex(idx);
  if (idx != -1) {
    this.State = POLYLINE_WIDGET_VERTEX_ACTIVE;
    return true;
  }

  // Check for the mouse over a midpoint.
  var r2 = this.Circle.Radius * this.Circle.Radius;
  for (idx = 1; idx < this.Shape.Points.length; ++idx) {
    x = 0.5 *(this.Shape.Points[idx-1][0] + this.Shape.Points[idx][0]);
    y = 0.5 *(this.Shape.Points[idx-1][1] + this.Shape.Points[idx][1]);
    var dx = pt[0] - x;
    var dy = pt[1] - y;
    if ((dx*dx + dy*dy) <= r2) {
      this.Circle.Visibility = true;
      this.Circle.Origin = [x, y];
      this.State = POLYLINE_WIDGET_MIDPOINT_ACTIVE;
      this.Shape.Active = false;
      this.ActiveMidpoint = idx;
      return true;
      }
  }
  
  // Check for mouse touching an edge.
  for (var i = 1; i < this.Shape.Points.length; ++i) {
    if (this.Shape.IntersectPointLine(pt, this.Shape.Points[i-1], this.Shape.Points[i], this.Shape.LineWidth)) {
      this.State = POLYLINE_WIDGET_ACTIVE;
      this.Shape.Active = true;
      return true;
    }
  }
  
  return false;
}

// -1 => no active vertex.
PolylineWidget.prototype.ActivateVertex = function(vIdx) {
  if (vIdx >= this.Shape.Points.length) {
    // Index out of bounds.
    alert("PolylineWidget::ActivateVertex: index out of bounds");
    return;
  }
  if (vIdx < 0) {
    this.Circle.Visibility = false;
    eventuallyRender();
  } else {
    this.Circle.Visibility = true;
    this.Circle.Origin = this.Shape.Points[vIdx];
    eventuallyRender();
  }
  
  this.ActiveVertex = vIdx;
}

// Multiple active states.  Active state is a bit confusing.
// Only one state (WAITING) does not receive events from the viewer.
PolylineWidget.prototype.GetActive = function() {
  if (this.State == POLYLINE_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

// Active simply means that the widget is receiving events.
// This widget can activate verticies, the whole polyline, or a middle vertex.
PolylineWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = POLYLINE_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.Deactivate();
  }
}

// Can we bind the dialog apply callback to an objects method?
var POLYLINE_WIDGET_DIALOG_SELF;
PolylineWidget.prototype.ShowPropertiesDialog = function () {
  var color = document.getElementById("polylinecolor");
  color.value = ConvertColorToHex(this.Shape.OutlineColor);

  var lineWidth = document.getElementById("polylinewidth");
  lineWidth.value = (this.Shape.LineWidth).toFixed(2);

  POLYLINE_WIDGET_DIALOG_SELF = this;
  $("#polyline-properties-dialog").dialog("open");
}    

function PolylinePropertyDialogApply() {
  var widget = POLYLINE_WIDGET_DIALOG_SELF;
  if ( ! widget) { 
    return; 
  }
  var hexcolor = document.getElementById("polylinecolor").value;
  widget.Shape.SetOutlineColor(hexcolor);
  var lineWidth = document.getElementById("polylinewidth");
  widget.Shape.LineWidth = parseFloat(lineWidth.value);
  widget.Shape.UpdateBuffers();
  if (widget != null) {
    widget.SetActive(false);
  }
  RecordState();
  eventuallyRender();
}

function PolylinePropertyDialogCancel() {
  var widget = POLYLINE_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
  }
}

function PolylinePropertyDialogDelete() {
  var widget = POLYLINE_WIDGET_DIALOG_SELF;
  if (widget != null) {
    widget.SetActive(false);
    // We need to remove an item from a list.
    // shape list and widget list.
    widget.RemoveFromViewer();
    eventuallyRender();
    RecordState();
  }
}





//==============================================================================
// Temporary drawing with a pencil.  It goes away as soon as the camera changes.
// pencil icon (image as html) follows the cursor.
// Middle mouse button (or properties menu item) drops pencil.
// maybe option in properties menu to save the drawing permanently.

// TODO:
// Break lines when the mouse is repressed.
// Smooth / compress lines. (Mouse pixel jitter)
// Option for the drawing to disappear when the camera changes.
// Serialize and Load methods.
// Undo / Redo.
// Color (property window).




function PencilWidget (viewer, newFlag, showIcon, oneLineOnly) {
  if (viewer == null) {
    return;
  }
  if(typeof showIcon == "undefined") showIcon = true;
  if(typeof oneLineOnly == "undefined") oneLineOnly = false;
  this.Viewer = viewer;    
  this.Viewer.WidgetList.push(this);
  this.OutlineColor = [0.9, 1.0, 0.0];
  this.TextShape = false;
  this.OneLineOnly = oneLineOnly; // It means the widget is disable when mouse up
  this.DrawnCallback = function(widget){};
  
  this.Cursor = $('<img>').appendTo('body')
    .css({
      'position': 'absolute',
      'height': '28px',
      'z-index': '1'})
    .attr('type','image')
    .attr('src',"webgl-viewer/static/Pencil-icon.png");  
  this.Shapes = [];
  
  if ( ! newFlag || !showIcon) {
      this.Cursor.hide();
  }
  
  if(newFlag)
    {
    this.Viewer.SetCursor("crosshair");
    }
}


PencilWidget.prototype.Draw = function(view) {
  for (var i = 0; i < this.Shapes.length; ++i) {
    this.Shapes[i].Draw(view);
  }
}


PencilWidget.prototype.Serialize = function() {
  var obj = new Object();
  obj.type = "pencil";
  obj.shapes = [];
  for (var i = 0; i < this.Shapes.length; ++i) {
    var shape = this.Shapes[i];
    var points = [];
    for (var j = 0; j < shape.Points.length; ++j) {
      points.push([shape.Points[j][0], shape.Points[j][1]]);
    } 
    obj.shapes.push(points);
  }
  return obj;
}

PencilWidget.prototype.SetOutlineColor = function(c) {
  this.OutlineColor = ConvertColor(c);
  this.ApplyColor(this.OutlineColor);
}

PencilWidget.prototype.ApplyColor = function(color) {
  for (var i = 0; i < this.Shapes.length; ++i) 
    {
    this.Shapes[i].OutlineColor = color;    
    }
}


// Load a widget from a json object (origin MongoDB).
PencilWidget.prototype.Load = function(obj) {
  for(var n=0; n < obj.shapes.length; n++){
    var points = obj.shapes[n];
    var shape = new Polyline();
    shape.OutlineColor = this.OutlineColor
    shape.FixedSize = false;
    shape.LineWidth = 0;
    this.Shapes.push(shape);
    for (var m = 0; m < points.length; ++m) {
      shape.Points[m] = [points[m][0], points[m][1]];
    }
    shape.UpdateBuffers();
  }
}

PencilWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}


PencilWidget.prototype.Deactivate = function() {
  this.Cursor.hide();
  this.Viewer.DeactivateWidget(this);
}

PencilWidget.prototype.HandleMouseDown = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  
  if (event.SystemEvent.which == 1) {
    // Start drawing.
    var shape = new Polyline();
    shape.OutlineColor = [0.9, 1.0, 0.0];
    shape.FixedSize = false;
    shape.LineWidth = 0;
    this.Shapes.push(shape);

    var pt = this.Viewer.ConvertPointViewerToWorld(x,y);  
    shape.Points.push([pt[0], pt[1]]); // avoid same reference.
  }
}

PencilWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

PencilWidget.prototype.HandleMouseUp = function(event) {
  if (event.SystemEvent.which == 3) {
    // Right mouse was pressed.
    // Pop up the properties dialog.
    this.ShowPropertiesDialog();
  }
  // Middle mouse deactivates the widget.
  if (event.SystemEvent.which == 2) {
    // Middle mouse was pressed.
    this.Deactivate();
    this.DrawnCallback(this);
  }

  // A stroke has just been finished.
  if (event.SystemEvent.which == 1 && this.Shapes.length > 0) {
    var spacing = this.Viewer.GetSpacing();
    this.Decimate(this.Shapes[this.Shapes.length - 1], spacing);
    RecordState();
  }
  
  if(this.OneLineOnly){
    this.Deactivate();
    this.DrawnCallback(this);
  }
}

PencilWidget.prototype.HandleDoubleClick = function(event) {
  this.Deactivate();
}

PencilWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;

  // Move the pencil icon to follow the mouse.
  this.Cursor.css({'left': x, 'bottom': y});  
    
  if (event.MouseDown == true) {
    if (event.SystemEvent.which == 1) {
      var shape = this.Shapes[this.Shapes.length-1];
      var pt = this.Viewer.ConvertPointViewerToWorld(x,y);  
      shape.Points.push([pt[0], pt[1]]); // avoid same reference.
      shape.UpdateBuffers();
      eventuallyRender();
      return;
    }
  }
  
}


PencilWidget.prototype.HandleTouchPan = function(event) {
}
PencilWidget.prototype.HandleTouchPinch = function(event) {
}
PencilWidget.prototype.HandleTouchEnd = function(event) {
}


PencilWidget.prototype.CheckActive = function(event) {
}

PencilWidget.prototype.GetActive = function() {
  return false;  
}

// Setting to active always puts state into "active".
// It can move to other states and stay active.
PencilWidget.prototype.SetActive = function(flag) {  
  if (flag) {
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.Cursor.hide();
    this.Viewer.DeactivateWidget(this);
    eventuallyRender();
  }  
}

// Can we bind the dialog apply callback to an objects method?
PencilWidget.prototype.ShowPropertiesDialog = function () {
  //do this later.
}

function PencilPropertyDialogApply() {
}

function PencilPropertyDialogCancel() {
}

function PencilPropertyDialogDelete() {
}

// The real problem is aliasing.  Line is jagged with high frequency sampling artifacts.
// Pass in the spacing as a hint to get rid of aliasing.
PencilWidget.prototype.Decimate = function(shape, spacing) {
  // Keep looping over the line removing points until the line does not change.
  var modified = true;
  while (modified) {
    modified = false;
    var newPoints = [];
    newPoints.push(shape.Points[0]);
    // Window of four points.
    var i = 3;
    while (i < shape.Points.length) {
      var p0 = shape.Points[i];
      var p1 = shape.Points[i-1];
      var p2 = shape.Points[i-2];
      var p3 = shape.Points[i-3];
      // Compute the average of the center two.
      var cx = (p1[0] + p2[0]) * 0.5; 
      var cy = (p1[1] + p2[1]) * 0.5; 
      // Find the perendicular normal.
      var nx = (p0[1] - p3[1]);
      var ny = -(p0[0] - p3[0]);
      var mag = Math.sqrt(nx*nx + ny*ny);
      nx = nx / mag;
      ny = ny / mag;
      mag = Math.abs(nx*(cx-shape.Points[i-3][0]) + ny*(cy-shape.Points[i-3][1]));
      // Mag metric does not distinguish between line and a stroke that double backs on itself.
      // Make sure the two point being merged are between the outer points 0 and 3.
      var dir1 = (p0[0]-p1[0])*(p3[0]-p1[0]) + (p0[1]-p1[1])*(p3[1]-p1[1]);
      var dir2 = (p0[0]-p2[0])*(p3[0]-p2[0]) + (p0[1]-p2[1])*(p3[1]-p2[1]);
      if (mag < spacing && dir1 < 0.0 && dir2 < 0.0) { 
        // Replace the two points with their average.
        newPoints.push([cx, cy]);
        modified = true;
        // Skip the next point the window will have one old merged point,
        // but that is ok because it is just used as reference and not altered.
        i += 2;
      } else {
        //  No modification.  Just move the window one.
        newPoints.push(shape.Points[i-2]);    
        ++i;
      }
    }
    // Copy the remaing point / 2 points
    i = i-2;
    while (i < shape.Points.length) {
      newPoints.push(shape.Points[i]);
      ++i;
    }
    shape.Points = newPoints;
  }

  shape.UpdateBuffers();  
}



//==============================================================================
// A replacement for the right click option to get the properties menu.
// This could be multi touch friendly.


function WidgetPopup (widget) {
  this.Widget = widget;
  this.Visible = false;
  this.HideTimerId = 0;

  // buttons to replace right click.
  var self = this;
  this.ButtonDiv = 
    $('<div>').appendTo('body')
              .hide()
              .css({'position': 'absolute',
                    'z-index': '1'})
              .mouseenter(function() { self.CancelHideTimer(); })
              .mouseleave(function(){ self.StartHideTimer();});
  this.DeleteButton = $('<img>').appendTo(this.ButtonDiv)
      .css({'height': '20px'})
    .attr('src',"webgl-viewer/static/deleteSmall.png")
    .click(function(){self.DeleteCallback();});
  this.PropertiesButton = $('<img>').appendTo(this.ButtonDiv)
      .css({'height': '20px'})
    .attr('src',"webgl-viewer/static/Menu.jpg")
    .click(function(){self.PropertiesCallback();});  
}

WidgetPopup.prototype.DeleteCallback = function() {
  this.Widget.SetActive(false);
  this.Hide();
  // We need to remove an item from a list.
  // shape list and widget list.
  this.Widget.RemoveFromViewer();
  eventuallyRender();
  RecordState();
}

WidgetPopup.prototype.PropertiesCallback = function() {
  this.Hide();
  this.Widget.ShowPropertiesDialog();
}



//------------------------------------------------------------------------------
WidgetPopup.prototype.Show = function(x, y) {
  this.CancelHideTimer(); // Just in case: Show trumps previous hide.
  this.ButtonDiv.css({
                   'left'  : x+'px',
                   'bottom': y+'px'})
                .show();
}

// When some other event occurs, we want to hide the pop up quickly
WidgetPopup.prototype.Hide = function() {
  this.CancelHideTimer(); // Just in case: Show trumps previous hide.
  this.ButtonDiv.hide();
}

WidgetPopup.prototype.StartHideTimer = function() {
  if ( ! this.HideTimerId) {
    var self = this;
    this.HideTimerId = setTimeout(function(){self.HideTimerCallback();}, 800);
  }
}

WidgetPopup.prototype.CancelHideTimer = function() {
  if (this.HideTimerId) {
    clearTimeout(this.HideTimerId);
    this.HideTimerId = 0;
  }
}

WidgetPopup.prototype.HideTimerCallback = function() {
  this.ButtonDiv.hide();
  this.HideTimerId = 0;
}






// Notes can be nested (tree structure) to allow for student questions, comments or discussion.
// Sessions could be notes.
// Notes within the same level are ordered.
// Question answers can be sub notes.

// Students can save comments that are not seen by other students.
// A separate "Notes" collection is used.
// Notes keep an ID of their parent in the database.
// The recording API is used to save the state of viewers (ViewerRecord)
// Notes just add a tree structure on top of these states (with GUI).

// Right now we are loading the view and bookmarks as notes.
// Bookmarks have two notes: Question and a child answer.  
// I want to hide the answer in the question note (not show the answer in the GUI).
// My problem is that the answer note does not have enough information to draw
// the Question GUI.  It is buried in the iterator.  I could have a state
// internal to the question note, but this breaks the iterator pattern.
// I am backing out of using the Answer array, but I am not removing it from the code.

// TODO:
// Save order of user notes.
// Detect whether user has permission to save notes.
// Automatically save view changes into application note.
// Automatically save note text and title into application.
// Refresh button to reload the current note. (Reload from database.) (should I refresh children?).
// Link the Save button to store all application notes into database.
// Keep track of whether application notes have been modified.
// Warning pop-up message to save notes when navigating off page.


// Discussion:  We have a local (not saved to server) edit state (turned on by edit and off by cancel).
// Edit is turned off by advancing to the next note or adding a note.  This is confusing.
// Changes are automatically saved locally. Save button saves to server.  This is confusing.


// How about a global lock / unlock button (like quick). Edit -> Clone, Save, Cancel.
// hi (Gwenda)


// Time to make this an object to get rid of all these global variables.
function InitNotesWidget() {  
  NOTES_WIDGET = new NotesWidget();
  if (EDIT) {
    NOTES_WIDGET.EditCallback();  
  }
}


function NotesWidget() {
  var self = this;
  // For animating the display of the notes window (DIV).
  this.WidthFraction = 0.0;
  this.Visibilty = false;

  // Root of the note tree.
  this.RootNote;

  // Iterator is used to implement the next and previous note buttons.
  this.Iterator;
  // For clearing selected GUI setting.
  this.SelectedNote;
  
  // GUI elements
  this.Window;
  this.NoteTreeDiv;
  this.TitleEntry;
  this.TextEntry;
  this.NewButton;
  this.CloneButton;
  this.RandomButton;
  this.DeleteButton;
  this.SaveButton;
  this.EditButton;
  // We need this flag to record view and text into notes when advancing notes.
  this.EditActive = false;
  // We need this flag so cancel will get rid of a pending new note.
  // User can be editing an old note, or a new note.
  this.EditNew = false;
  // Have any notes been modified (and need to be saved to the database)?
  this.Modified = false;

  this.PopupMenuButton;
  this.PopupMenu;

  // It would be nice to animate the transition
  // It would be nice to integrate all animation in a flexible utility.
  this.AnimationLastTime;
  this.AnimationDuration;
  this.AnimationTarget;  

  
  if ( ! MOBILE_DEVICE) {
    this.OpenNoteWindowButton = $('<img>')
      .appendTo('body')
      .css({'position': 'absolute',
            'height': '20px',
            'width': '20px',
            'top' : '0px',
            'right' : '0%',
            'opacity': '0.6',
            'z-index': '3'})
      .attr('src',"webgl-viewer/static/dualArrowRight2.png")
      .click(function(){self.ToggleNotesWindow();});
    VIEWER1.AddGuiObject(this.OpenNoteWindowButton, "Top", 0, "Left", 0);

    this.CloseNoteWindowButton = $('<img>')
      .appendTo('body')
      .css({'position': 'absolute',
            'height': '20px',
            'width': '20x',
            'top' : '0px',
            'right' : '0%',
            'opacity': '0.6',
            'z-index': '3'})
      .hide()
      .attr('src',"webgl-viewer/static/dualArrowLeft2.png")
      .click(function(){self.ToggleNotesWindow();});
    VIEWER1.AddGuiObject(this.CloseNoteWindowButton, "Top", 0, "Left", -20);
  }
  
  this.Window = $('<div>').appendTo('body')
    .css({
      'background-color': 'white',
      'position': 'absolute',
      'top' : '0%',
      'left' : '0%',
      'height' : '100%',
      'width': '20%',
      'z-index': '2'})
    .hide()
    .attr('id', 'NoteWindow');


  this.NoteTreeDiv = $('<div>').appendTo(this.Window)
    .css({
      'position': 'absolute',
      'top' : '0%',
      'left' : '0%',
      'height' : '60%',
      'width': '100%',
      'overflow': 'auto',
      'text-align': 'left',
      'color': '#303030',
      'font-size': '18px'})
    .attr('id', 'NoteTree');
  
    
  // The next three elements are to handle the addition of comments.  Currently placeholders.
  // The top div wraps the text field and the submit button at the bottom of the widget.
  var noteDetailDiv = $('<div>').appendTo(this.Window)
    .css({'position': 'absolute',
          'width': '100%',
          'top': '60%',
          'height': '40%'});
  
  this.TitleEntry = $('<textarea>').appendTo(noteDetailDiv)
                                    .css({'position': 'absolute',
                                          'left': '3px',
                                          'right': '3px',
                                          'height': '20px',
                                          'border-style': 'solid',
                                          'background': '#ffffff',
                                          'resize': 'none'});                                                                                    
  this.TextEntry = $('<textarea>').appendTo(noteDetailDiv)
                                   .css({'position': 'absolute',
                                         'left': '3px',
                                         'right': '3px',
                                         'top': '26px',
                                         'bottom': '43px',
                                         'border-style': 'solid',
                                         'background': '#ffffff',
                                         'resize': 'none'});
  this.TitleEntry.attr('readonly', 'readonly');
  this.TextEntry.attr('readonly', 'readonly');

  var buttonWrapper = $('<div>').appendTo(noteDetailDiv)
                                       .css({'position': 'absolute',
                                             'width': '100%',
                                             'height': '40px',
                                             'bottom': '0px'});
  
  // Only visible when in edit mode.
  this.PopupMenuButton = $('<div>').appendTo(buttonWrapper)
                                .hide()
                                .css({'position': 'relative',
                                      'float': 'right',
                                      'margin': '5px'});
  this.EditButton = $('<button>').appendTo(buttonWrapper)
                                .text("Edit")
                                .css({'color' : '#278BFF',
                                      'font-size': '18px',
                                      'position': 'relative',
                                      'float': 'right',
                                      'margin': '5px'})
                                .click(function(){self.EditCallback();});
  this.NewButton = $('<button>').appendTo(buttonWrapper)
                                .hide()
                                .text("New")
                                .css({'color' : '#278BFF',
                                      'font-size': '18px',
                                      'position': 'relative',
                                      'float': 'right',
                                      'margin': '5px'})
                                .click(function(){self.NewCallback();});

  // For less used buttons that appear when mouse is over the pulldown button.
  // I would like to make a dynamic bar that puts extra buttons into the pulldown as it resizes.
  this.PopupMenu = $('<div>').appendTo(this.PopupMenuButton)
                       .css({'position': 'absolute',
                             'left': '0px',
                             'bottom': '0px',
                             'background-color': 'white',
                             'padding': '5px 5px 30px 5px',
                             'border-radius': '8px',
                             'border-style': 'solid',
                             'border-width':'1px'})
                       .hide()
                       .mouseleave(function(){
                          var self = $(this),
                          timeoutId = setTimeout(function(){NOTES_WIDGET.PopupMenu.fadeOut();}, 650);
                          //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
                          self.data('timeoutId', timeoutId);  })
                       .mouseenter(function(){
                          clearTimeout($(this).data('timeoutId')); });                       

  this.DeleteButton = $('<button>').appendTo(this.PopupMenu)
                                .hide()
                                .text("Delete")
                                .css({'color' : '#278BFF', 'width':'100%','font-size': '18px'})
                                .click(function(){self.DeleteCallback();});

  this.CloneButton = $('<button>').appendTo(this.PopupMenu)
                                .hide()
                                .text("Clone")
                                .css({'color' : '#278BFF', 'width':'100%','font-size': '18px'})
                                .click(function(){self.CloneCallback();});

  this.RandomButton = $('<button>').appendTo(this.PopupMenu)
                                .hide()
                                .text("Randomize")
                                .css({'color' : '#278BFF', 'width':'100%','font-size': '18px'})
                                .click(function(){self.RandomCallback();});

  this.SaveButton = $('<button>').appendTo(this.PopupMenu)
                                  .hide()
                                  .text("Save")
                                  .css({'color' : '#278BFF', 'width':'100%','font-size': '18px'})
                                  .click(function(){self.SaveCallback();});
                       
  var popupMenuButtonImage = $('<img>').appendTo(this.PopupMenuButton)
    .css({'height': '30px',
          'width': '30x',
          'opacity': '0.6'})
    .attr('src',"webgl-viewer/static/dropDown1.jpg")
    .mouseenter(function() {NOTES_WIDGET.PopupMenu.fadeIn(); });

  // This sets "this.RootNote" and "this.Iterator"
  this.LoadViewId(VIEW_ID);
  // Setup the iterator using the view as root.
  // Bookmarks (sub notes) are loaded next.
  this.Iterator = this.RootNote.NewIterator(); 
}

//------------------------------------------------------------------------------
// Iterator to perform depth first search through note tree.
// Collapsed branches (children not visible) are not traversed.
// This iterator is a bit over engineered.  I made it so we can subclasses
// that iterate over internal states.  However, internal states require
// notes so I made an array of answers (which are hidden).
function NoteIterator(note) {
  this.Note = note;
  this.IteratingAnswers = false;
  this.ChildIterator = null;
}

// Because of sorting, the child array gets reset on us.
// I need a dynamic way to get the Children or Answers array based on the state.
NoteIterator.prototype.GetChildArray = function() {
  if ( ! this.Note) {
    return [];
  }
  if (this.IteratingAnswers) {
    return this.Note.Answers;
  }
  return this.Note.Children;
}

// Because of sorting, I have to make the index dynamic
// and it cannot be stored as an ivar.
NoteIterator.prototype.GetChildIndex = function() {
  if (this.ChildIterator == null) {
    return -1;
  }
  return this.GetChildArray().indexOf( this.ChildIterator.Note );
}



NoteIterator.prototype.GetNote = function() {
  if (this.ChildIterator != null) { 
    return this.ChildIterator.GetNote();
  }
  return this.Note;
}

// Get the parent note of the current note.
// Notes do not keep a pointer to parents.
// The iterator has this information for active notes.
NoteIterator.prototype.GetParentNote = function() {
  if (this.ChildIterator == null) {
    // We are at the current note.  Let the caller supply the parent.
    return null;
  }

  var parent = this.ChildIterator.GetParentNote();
  if (parent == null) {
    // This level contains the parent.
    parent = this.Note;
  }

  return parent;
}


// We use this to see (peek) if next or previous should be disabled.
NoteIterator.prototype.IsStart = function() {
  if (this.ChildIterator == null) { 
    return true;
  }
  return false;
}


NoteIterator.prototype.IsEnd = function() {
  // Case note is active.
  if (this.ChildIterator == null) {
    // Always iterate through answers
    if (this.Note.Answers.length > 0) {
      return false;
    }
    if (this.Note.Children.length > 0 && this.Note.ChildrenVisibility) {
      return false;
    }
    return true;
  }

  // sub answer is active.
  var childIndex = this.GetChildIndex();
  if (this.IteratingAnswers) {
    if (this.Note.Children.length > 0 && this.Note.ChildrenVisibility) {
      // We have children which come after answers.
      return false;
    } 
    // No children.  Answer array is the last. Check is current is last answer.
    if (childIndex == this.GetChildArray().length - 1) {
      return this.ChildIterator.IsEnd();
    }
    // More answers after current.
    return false;
  }
  
  // sub child is active
  if (childIndex == this.GetChildArray().length - 1) {
    return this.ChildIterator.IsEnd();
  }
  return false;
}


// Parent note is traversed before children.
// Move forward one step.  Return the new note. At end the last note returned again. 
// IsEnd method used to detect terminal case.
NoteIterator.prototype.Next = function() {
  // Case 1:  Iterator is on its own node.
  if (this.ChildIterator == null) {
    // First check for answers
    if (this.Note.Answers.length > 0) {
      // Move to the first answer.
      this.IteratingAnswers = true;
      this.ChildIterator = this.GetChildArray()[0].NewIterator();
      return this.ChildIterator.GetNote();
    }
    // Next check for children notes
    if (this.Note.Children.length > 0 && this.Note.ChildrenVisibility) {
      // Move to the first child.
      this.IteratingAnswers = false;
      this.ChildIterator = this.GetChildArray()[0].NewIterator();
      return this.ChildIterator.GetNote();
    }
    // No answers or children: we are at the end.
    return this.Note;
  }

  // Try to advance the child iterator.
  if ( ! this.ChildIterator.IsEnd()) {
    return this.ChildIterator.Next();
  }

  // Child iterator is finished.  
  // Try to create a new iterator with the next child in the array.
  var childIndex = this.GetChildIndex();
  if (childIndex < this.GetChildArray().length-1) {
    this.ChildIterator = this.GetChildArray()[childIndex+1].NewIterator();
    return this.ChildIterator.GetNote();
  }
  
  // Move from answers to children
  if (this.IteratingAnswers && 
      this.Note.Children.length > 0 && 
      this.Note.ChildrenVisibility) {
    this.IteratingAnswers = false;
    this.ChildIterator = this.Note.Children[0].NewIterator();
    return this.ChildIterator.GetNote();
  }
  
  // We are at the end of the children array.
  return this.ChildIterator.GetNote();
}


// Move backward one step.  See "Next" method comments for description of tree traversal.
NoteIterator.prototype.Previous = function() {
  if (this.ChildIterator == null) {
    // At start.
    return this.Note;
  }
  if ( ! this.ChildIterator.IsStart()) {
    return this.ChildIterator.Previous();
  }

  // Move to the previous child.
  var childIndex = this.GetChildIndex() - 1;
  if (childIndex >= 0) {
    this.ChildIterator = this.GetChildArray()[childIndex].NewIterator();
    this.ChildIterator.ToEnd();
    return this.ChildIterator.GetNote();
  }
  
  // We are at the begining of an array.
  // If we are in the child array, try to move to the answer array
  if ( ! this.IteratingAnswers && this.Note.Answers.length > 0) {
    this.IteratingAnswers = true;
    var childIndex = this.GetChildArray().length -1;
    this.ChildIterator = this.GetChildArray()[childIndex].NewIterator();
    this.ChildIterator.ToEnd();
    return this.ChildIterator.GetNote();
  }

  // No more sub notes left.  Move to the root.
  this.ChildIterator = null;
  this.IteratingAnswers = false;
  return this.Note;
}    


// Move the iterator to the end. Used in Previous method.
NoteIterator.prototype.ToEnd = function() {
  if (this.Note.Children.length > 0 && this.Note.ChildrenVisibility) {
    this.ChildArray = this.Note.Children;
    var childIndex = this.ChildArray.length - 1;
    this.ChildIterator = this.ChildArray[childIndex].NewIterator();
    return this.ChildIterator.ToEnd();
  }
  if (this.Note.Answers.length > 0) {
    this.ChildArray = this.Note.Answers;
    var childIndex = this.ChildArray.length - 1;
    this.ChildIterator = this.ChildArray[childIndex].NewIterator();
    return this.ChildIterator.ToEnd();
  }
  // leaf note
  this.ChildArray = null;
  this.ChildIterator = null;
  return this.Note;
}



//------------------------------------------------------------------------------
// Note object (maybe will be used for views and sessions too).

// data is the object retrieved from mongo (with string ids)
// Right now we expect bookmarks, but it will be generalized later.
function Note (imgPath) {
  this.ImgPath = imgPath;
  this.User = GetUser(); // Reset by flask.
  var d = new Date();
  this.Date = d.getTime(); // Also reset later.
  this.Type = "Note";
  
  
  this.Title = "";
  this.Text = "";
  // Upto two for dual view.
  this.ViewerRecords = [];

  // Hidden children for questions.
  this.Answers = [];
  
  // Sub notes
  this.Children = [];
  this.ChildrenVisibility = true;

  // GUI elements.
  this.Div = $('<div>').attr({'class':'note'});

  this.Icon = $('<img>').css({'height': '20px',
                              'width': '20x',
                              'float':'left'})
                        .attr('src',this.ImgPath+"/dot.png")
                        .appendTo(this.Div);
  this.TitleDiv = $('<div>').css({'font-size': '18px',
                                 'margin-left':'20px',
                                 'color':'#379BFF'})
                           .text(this.Title)
                           .appendTo(this.Div);
  // The div should attached even if nothing is in it.
  // A child may appear and UpdateChildrenGui called.
  // If we could tell is was removed, UpdateChildGUI could append it.
  this.ChildrenDiv = $('<div>').css({'margin-left':'15px'})
                               .appendTo(this.Div);

}


Note.prototype.UserCanEdit = function() {
  return EDIT;
}


Note.prototype.RecordView = function() {
  this.ViewerRecords = [];
  //  Viewer1
  var viewerRecord = new ViewerRecord();
  viewerRecord.CopyViewer(VIEWER1);
  this.ViewerRecords.push(viewerRecord);
  // Viewer2
  if (DUAL_VIEW) {
    var viewerRecord = new ViewerRecord();
    viewerRecord.CopyViewer(VIEWER2);
    this.ViewerRecords.push(viewerRecord);
  }
}


Note.prototype.AddChild = function(childNote, first) {
  // Needed to get the order after a sort.
  childNote.Div.data("index", this.Children.length);

  if (first) {
    this.Children.splice(0, 0, childNote);
  } else {
    this.Children.push(childNote);
  }

  this.UpdateChildrenGUI();
}

Note.prototype.UpdateChildrenGUI = function() {
  // Callback trick
  var self = this;

  // Clear
  this.ChildrenDiv.empty();
  if (this.Children.length == 0) {
    this.Icon.attr('src',this.ImgPath+"/dot.png");
    return;
  }
  if (this.ChildrenVisibility == false) {
    this.Icon.attr('src',this.ImgPath+"/plus.png")
             .click(function() {self.Expand();});
    return;
  }
  
  // Redraw
  this.Icon.attr('src',this.ImgPath+"/minus.png")
           .click(function() {self.Collapse();});
  for (var i = 0; i < this.Children.length; ++i) {
    this.Children[i].DisplayGUI(this.ChildrenDiv);
  } 

  if (this.Children.length > 1 && this.UserCanEdit() && NOTES_WIDGET.EditActive) {
    // Make sure the indexes are set correctly.
    for (var i = 0; i < this.Children.length; ++i) {
      this.Children[i].Div.data("index", i);
    }
    this.ChildrenDiv.sortable({axis: "y",
                               containment: "parent",
                               update: function( event, ui ){self.ReorderChildren();}});
    // Indicate the children are sortable...
    this.ChildrenDiv.css({'border-left': '2px solid #00a0ff'});
  }
  
}

// So this is a real pain.  I need to get the order of the notes from
// the childrenDiv jquery element.
// I could use jQuery.data(div,"note",this) or store the index in an attribute.
Note.prototype.ReorderChildren = function() {
  var newChildren = [];
  var children = this.ChildrenDiv.children();
  for (var newIndex = 0; newIndex < children.length; ++newIndex) {
    var oldIndex = $(children[newIndex]).data('index');
    var note = this.Children[oldIndex];
    note.Div.data("index", newIndex);
    if (newIndex != oldIndex) {
      NOTES_WIDGET.NoteModified();
    }
    newChildren.push(note);
  }
 
  this.Children = newChildren;
}


Note.prototype.NewIterator = function() {
  return new NoteIterator(this);
}

Note.prototype.Contains = function(decendent) {
  for (var i = 0; i < this.Children.length; ++i) {
    var child = this.Children[i];
    if (child == decendent) {
      return true;
    }
    if (child.Contains(decendent)) {
      return true;
    }
  }
  return false;
}

// This should method should be split between Note and NotesWidget
Note.prototype.Select = function() {
  if (NOTES_WIDGET.Iterator.GetNote() != this) {
    // For when user selects a note from a list.
    // Find the note and set a new iterator
    // This is so the next and previous buttons will behave.
    var iter = NOTES_WIDGET.RootNote.NewIterator();
    while (iter.GetNote() != this) {
      if ( iter.IsEnd()) {
        alert("Could not find note.");
        return;
      }
      iter.Next();
    }
    NOTES_WIDGET.Iterator = iter;    
  }

  // Handle the note that is being unselected.
  // Clear the selected background of the deselected note.
  if (NOTES_WIDGET.SelectedNote) {
    NOTES_WIDGET.SelectedNote.TitleDiv.css({'background':'white'});
    if (NOTES_WIDGET.EditActive && NOTES_WIDGET.SelectedNote.UserCanEdit()) {
      NOTES_WIDGET.SelectedNote.RecordGUIChanges();
      NOTES_WIDGET.NoteModified();     
    }
  }
  
  NOTES_WIDGET.RandomButton.hide();
  if (this.UserCanEdit() && NOTES_WIDGET.EditActive) {
    NOTES_WIDGET.TitleEntry.removeAttr('readonly');
    NOTES_WIDGET.TitleEntry.css({'border-style': 'inset',
                          'background': '#f5f8ff'});
    NOTES_WIDGET.TextEntry.removeAttr('readonly');
    NOTES_WIDGET.TextEntry.css({'border-style': 'inset',
                         'background': '#f5f8ff'});
    NOTES_WIDGET.DeleteButton.show();  
    if (this.Children.length > 1 && this.ChildrenVisibility) {
      NOTES_WIDGET.RandomButton.show();
    }
  } else {
    NOTES_WIDGET.TitleEntry.attr('readonly', 'readonly');
    NOTES_WIDGET.TitleEntry.css({'border-style': 'solid',
                          'background': '#ffffff'});
    NOTES_WIDGET.TextEntry.attr('readonly', 'readonly');
    NOTES_WIDGET.TextEntry.css({'border-style': 'solid',
                         'background': '#ffffff'});
    NOTES_WIDGET.DeleteButton.hide();  
  }

  if (this == NOTES_WIDGET.RootNote){
    // We do not allow the user to delete the root note / slide.
    // We need a session editor to do that.
    NOTES_WIDGET.DeleteButton.hide();
    // Interesting:  TODO: If we clone the root, then a new slide is created.
    NOTES_WIDGET.CloneButton.hide();
  } else if (NOTES_WIDGET.EditActive) {
    NOTES_WIDGET.CloneButton.show();
  }
  
  NOTES_WIDGET.SelectedNote = this;
  // Indicate which note is selected.
  this.TitleDiv.css({'background':'#f0f0f0'});
  // Put the note into the details section.
  NOTES_WIDGET.TitleEntry.val(this.Title);
  NOTES_WIDGET.TextEntry.val(this.Text);
  
  if (NAVIGATION_WIDGET) {NAVIGATION_WIDGET.Update(); }

  this.DisplayView();
}


Note.prototype.RecordGUIChanges = function () {
  this.Title = NOTES_WIDGET.TitleEntry.val();
  this.TitleDiv.text(NOTES_WIDGET.SelectedNote.Title);
  this.Text = NOTES_WIDGET.TextEntry.val();
  this.RecordView();
}


// No clearing.  Just draw this notes GUI in a div.
Note.prototype.DisplayGUI = function(div) {
  // Put an icon to the left of the text.
  var self = this;
  this.Div.appendTo(div);

  var self = this;
  
  this.TitleDiv.text(this.Title);
  this.TitleDiv.click(function() {self.Select()});
  this.TitleDiv.hover(function(){self.TitleDiv.css({'text-decoration':'underline'});},
                     function(){self.TitleDiv.css({'text-decoration':'none'});});
                     
  this.UpdateChildrenGUI();
}



Note.prototype.Serialize = function(includeChildren) {
  var obj = {};
  obj.Type = this.Type;
  obj.User = this.User;
  obj.Date = this.Date;
  obj.ParentId = this.ParentId;
  obj.Title = this.Title;
  obj.HiddenTitle = this.HiddenTitle;
  obj.Text = this.Text;
  // We should probably serialize the ViewerRecords too.
  obj.ViewerRecords = this.ViewerRecords;

  //obj.Answers = [];
  //for (var i = 0; i < this.Answers.length; ++i) {
  //  obj.Answers.push(this.Answers[i].Serialize());
  //}

  if (includeChildren) {
    obj.Children = [];
    for (var i = 0; i < this.Children.length; ++i) {
      obj.Children.push(this.Children[i].Serialize(includeChildren));
    }
  }
  return obj;
}

// This method of loading is causing a pain.
// Children ...
Note.prototype.Load = function(obj){
  for (ivar in obj) {
    this[ivar] = obj[ivar];
  }
  this.TitleDiv.text(this.Title);
  //for (var i = 0; i < this.Answers.length; ++i) {
  //  var answerObj = this.Answers[i];
  //  this.Answers[i] = new Note();
  //  this.Answers[i].Load(answerObj);
  //}
  for (var i = 0; i < this.Children.length; ++i) {
    var childObj = this.Children[i];
    var childNote = new Note();
    childNote.Load(childObj);
    this.Children[i] = childNote;
    childNote.Div.data("index", i);
  }
  // Because we are not using add child.
  if (this.Children.length > 1 && this.UserCanEdit() && NOTES_WIDGET.EditActive) {
    var self = this;
    this.ChildrenDiv.sortable({axis: "y",
                               containment: "parent",
                               update: function( event, ui ){self.ReorderChildren();}});                               
  }

  for (var i = 0; i < this.ViewerRecords.length; ++i) {
    if (this.ViewerRecords[i]) {
      obj = this.ViewerRecords[i];
      // It would be nice to have a constructor that took an object.
      this.ViewerRecords[i] = new ViewerRecord();
      this.ViewerRecords[i].Load(obj);
    }
  }

  // Hack to fix timing (Load after select)
  if (this == NOTES_WIDGET.RootNote) {
    NOTES_WIDGET.DisplayRootNote();
  }
}


Note.prototype.LoadViewId = function(viewId) {
  var self = this;
  $.ajax({
    type: "get",
    url: "/webgl-viewer/getview",
    data: {"sessid": localStorage.sessionId,
           "viewid": viewId,
           "db"  : GetSessionDatabase()},
    success: function(data,status) { self.Load(data);},
    error: function() { alert( "AJAX - error() : getview" ); },
    });  
}

// Get any children notes (this note as parent)
// Authored by the current user.
// The notes will have no order.
// The server knows who the user is.
Note.prototype.RequestUserNotes = function() {
  var self = this;
  $.ajax({
    type: "get",
    url: "/webgl-viewer/getchildnotes",
    data: {"parentid": this.Id,
           "db"  : GetSessionDatabase()},
    success: function(data,status) { self.LoadUserNotes(data);},
    error: function() { alert( "AJAX - error() : getchildnotes" ); },
    });  
}


Note.prototype.LoadUserNotes = function(data) {
  for (var i = 0; i < data.Notes.length; ++i) {
    var noteData = data.Notes[i];
    var note = new Note();
    note.Load(noteData);
    this.Children.push(note);
    this.UpdateChildrenGUI();

    note.RequestUserNotes();
  }
}

Note.prototype.Collapse = function() {
  this.ChildrenVisibility = false;
  if (this.Contains(NOTES_WIDGET.SelectedNote)) {
    // Selected note should not be in collapsed branch.
    // Make the visible ancestor active.
    this.Select();
  }
  this.UpdateChildrenGUI();
  NAVIGATION_WIDGET.Update();
}

Note.prototype.Expand = function() {
  this.ChildrenVisibility = true;
  this.UpdateChildrenGUI();
  NAVIGATION_WIDGET.Update();
}

// Set the state of the WebGL viewer from this notes ViewerRecords.
Note.prototype.DisplayView = function() { 
  // Remove Annotations from the previous note.
  VIEWER1.Reset();
  VIEWER2.Reset();

  SetNumberOfViews(this.ViewerRecords.length);

  if (this.ViewerRecords.length > 0) {
    this.ViewerRecords[0].Apply(VIEWER1);
  }
  if (this.ViewerRecords.length > 1) {
    this.ViewerRecords[1].Apply(VIEWER2);
  } else {
    // Default source.
    VIEWER2.SetCache(VIEWER1.GetCache());
  }
}


NotesWidget.prototype.SaveUserNote = function() {
  // Create a new note.
  var childNote = new Note();
  var d = new Date();
  this.Date = d.getTime(); // Also reset later.

  childNote.Text = this.TextEntry.val();
  this.TextEntry.val("");
  childNote.ViewerRecords = [];
  //  Viewer1
  var viewerRecord = new ViewerRecord();
  viewerRecord.CopyViewer(VIEWER1);
  childNote.ViewerRecords.push(viewerRecord);
  // Viewer2
  if (DUAL_VIEW) {
    var viewerRecord = new ViewerRecord();
    viewerRecord.CopyViewer(VIEWER2);
    childNote.ViewerRecords.push(viewerRecord);
  }
  
  // Now add the note as the last child to the current note.
  parentNote = this.Iterator.GetNote();
  parentNote.Children.push(childNote);
  // ParentId is how we retrieve notes from the database.
  // It is the only tree structure saved.
  childNote.ParentId = parentNote.Id;
  // Expand the parent so that the new note is visible.
  parentNote.ChildrenVisible = true;

  // Save the note in the database for this specific user.
  // TODO: If author privileges, save note in the actual session / view.
  var bug = JSON.stringify( childNote );
  $.ajax({
    type: "post",
    url: "/webgl-viewer/saveusernote",
    data: {"note": JSON.stringify(childNote.Serialize(false)),
           "date": d.getTime()},
    success: function(data,status) { childNote.Id = data;},
    error: function() { alert( "AJAX - error() : saveusernote" ); },
    });  
  
  // Redraw the GUI. should we make the parent or the new child active?
  // If we choose the child, then we need to update the iterator,
  // which will also update the gui and viewers.
  NAVIGATION_WIDGET.NextNote();
}


NotesWidget.prototype.SaveBrownNote = function() {
  // Create a new note.
  var note = new Note();
  note.RecordGUIChanges();
  
  // The note will want to know its context
  parentNote = this.Iterator.GetNote();
  note.ParentId = parentNote.Id;

  // Save the note in the admin database for this specific user.
  $.ajax({
    type: "post",
    url: "/webgl-viewer/saveusernote",
    data: {"note": JSON.stringify(note.Serialize(false))},
    success: function(data,status) { note.Id = data;},
    error: function() { alert( "AJAX - error() : saveusernote" ); },
    });  
}





NotesWidget.prototype.NoteModified = function () {
  this.Modified = true;
}

NotesWidget.prototype.ToggleNotesWindow = function() {
  this.Visibilty = ! this.Visibilty;
  RecordState();

  if (this.Visibilty) {
    this.AnimationCurrent = this.WidthFraction;
    this.AnimationTarget = 0.2;
  } else {
    this.Window.hide();
    this.AnimationCurrent = this.WidthFraction;
    this.AnimationTarget = 0.0;
  }
  this.AnimationLastTime = new Date().getTime();
  this.AnimationDuration = 1000.0;
  this.AnimateNotesWindow();
}


// Add a user note to the currently selected notes children.
NotesWidget.prototype.NewCallback = function() {
  // Create a new note.
  var childNote = new Note();
  childNote.Title = "New Note";
  var d = new Date();
  childNote.Date = d.getTime(); // Temporary. Set for real by server.

  // Save the state of the viewers.
  childNote.ViewerRecords = [];
  //  Viewer1
  var viewerRecord = new ViewerRecord();
  viewerRecord.CopyViewer(VIEWER1);
  childNote.ViewerRecords.push(viewerRecord);
  // Viewer2
  if (DUAL_VIEW) {
    var viewerRecord = new ViewerRecord();
    viewerRecord.CopyViewer(VIEWER2);
    childNote.ViewerRecords.push(viewerRecord);
  }
  
  // Now add the note as the last child to the current note.
  parentNote = this.Iterator.GetNote();
  parentNote.AddChild(childNote, true);
  // ParentId is how we retrieve notes from the database.
  // It is the only tree structure saved.
  childNote.ParentId = parentNote.Id;
  // Expand the parent so that the new note is visible.
  parentNote.ChildrenVisibility = true;
  parentNote.UpdateChildrenGUI();
  
  childNote.Select();
}

// Randomize the order of the children
NotesWidget.prototype.RandomCallback = function() {
  var note = this.Iterator.GetNote();
  note.Children.sort(function(a,b){return Math.random() - 0.5;});
  note.UpdateChildrenGUI();
}

// Add a sibling note.
// Do not copy children (maybe in the future?)
NotesWidget.prototype.CloneCallback = function() {
  var parentNote = this.Iterator.GetParentNote();
  if ( ! parentNote) { return; }
  var note = this.Iterator.GetNote();
  var index = parentNote.Children.indexOf(note);
  if (index < 0) { return; }

  // Record any changes before we clone the note.
  note.RecordGUIChanges();
 
  // Create a new note.
  var newNote = new Note();
  newNote.Title = note.Title;
  var d = new Date();
  newNote.Date = d.getTime(); // Temporary. Set for real by server.

  this.TitleEntry.val(newNote.Title);
  this.TextEntry.val(newNote.Text);
  
  // Save the state of the viewers.
  newNote.ViewerRecords = [];
  //  Viewer1
  var viewerRecord = new ViewerRecord();
  viewerRecord.CopyViewer(VIEWER1);
  newNote.ViewerRecords.push(viewerRecord);
  // Viewer2
  if (DUAL_VIEW) {
    var viewerRecord = new ViewerRecord();
    viewerRecord.CopyViewer(VIEWER2);
    newNote.ViewerRecords.push(viewerRecord);
  }
  
  // Now insert the child after the current note.
  parentNote.Children.splice(index+1,0,newNote);
  // ParentId is how we retrieve notes from the database.
  // It is the only tree structure saved.
  newNote.ParentId = parentNote.Id;
  parentNote.UpdateChildrenGUI();
  
  newNote.Select();
}



// TODO: Activate and inactivate save button based on user owning note
// This callback is for both the edit and cancel behaviours.
NotesWidget.prototype.EditCallback = function() {
  if (MOBILE_DEVICE) { return; }

  this.EditActive = true;

  this.EditButton.hide();
  this.PopupMenuButton.show();  
  this.NewButton.show();
  this.SaveButton.show();
  // This handles making the note editable (including showing and hiding the delete button).
  if (this.SelectedNote) {
    this.SelectedNote.Select();
  }
  
  // This handles making children sortable.
  var iter = this.RootNote.NewIterator();
  do {
    var note = iter.GetNote();
    note.UpdateChildrenGUI();
    iter.Next();
  } while ( ! iter.IsEnd());

  window.onbeforeunload = function () {
    if (this.EditActive && this.SelectedNote.UserCanEdit()) {
      this.SelectedNote.RecordGUIChanges();
    }
    return "Some changes have not been saved to the database.";
  }  
}

// TODO: Activate and inactivate save button based on whether anything has changed.
NotesWidget.prototype.SaveCallback = function() {
  this.PopupMenu.hide();

  if (this.EditActive && this.SelectedNote.UserCanEdit()) {
    this.SelectedNote.RecordGUIChanges();
  }
  
  var d = new Date();
  
  // If user owns the root note, then upload all notes to the view.
  if (this.RootNote.UserCanEdit()) {
    // Save this users notes in the user specific collection.
    var noteObj = JSON.stringify(this.RootNote.Serialize(true));
    $.ajax({
      type: "post",
      url: "/webgl-viewer/saveviewnotes",
      data: {"note" : noteObj,
             "db"   : GetSessionDatabase(),
             "view" : GetViewId(),
             "date" : d.getTime()},
      success: function(data,status) {},
      error: function() { alert( "AJAX - error() : saveviewnotes" ); },
      });  
  } else {
    // Save just the users notes to the notes collection.    
    // Save all of the users notes in the database for this specific user.
    // Save this users notes in the user specific collection.
    var iter = this.RootNote.GetIterator();
    do {
      var note = iter.GetNote();
      if (note.UserCanEdit()) {
        $.ajax({
          type: "post",
          url: "/webgl-viewer/saveusernote",
          data: {"note": JSON.stringify(note.Serialize(false)),
                 "db"  : GetSessionDatabase(),
                 "date": d.getTime()},
          success: function(data,status) { note.Id = data;},
          error: function() { alert( "AJAX - error(): saveusernote" ); },
          });  
      }
    } while(iter.IsEnd());
  }
  
  window.onbeforeunload = null;
  this.Modified = false;
  this.EditActive = false;
  
  this.PopupMenuButton.hide();
  this.SaveButton.hide();
  this.CloneButton.hide();
  this.DeleteButton.hide();
  this.NewButton.hide();
  this.EditButton.show();
  this.SelectedNote.Select();
}

// TODO: Disable button when we are not the root note or we do not own the note.
NotesWidget.prototype.DeleteCallback = function() {
  this.PopupMenu.hide();

  this.NoteModified();
  
  var parent = this.Iterator.GetParentNote();
  if (parent == null) {
    return;
  }
  var note = this.Iterator.GetNote();
  
  // Move the current note off this note.
  // There is always a previous.
  NAVIGATION_WIDGET.PreviousNote();

  // Get rid of the note.
  var index = parent.Children.indexOf(note);
  parent.Children.splice(index, 1);

  // If this user does not own the lesson, 
  // then immediatley remove the note from the database.
  // Lesson autho will have to select save to change the database.
  /* Should we immediately change the database, or wait until the user selects save?
  $.ajax({
    type: "post",
    url: "/webgl-viewer/deleteusernote",
    data: {"id"  : note.Id,
           "db"  : GetSessionDatabase()},
    success: function(data,status) {},
    error: function() { alert( "AJAX - error()" ); },
    });  
  */
  
  // Redraw the GUI.
  parent.UpdateChildrenGUI();
}

NotesWidget.prototype.CheckForSave = function() {
  if (this.EditActive && this.SelectedNote.UserCanEdit()) {
    this.SelectedNote.RecordGUIChanges();
    this.NoteModified();
  }

  if (this.Modified) {
    var message = "Save changes in database?\n\nPress Cancel to discard changes.";
    if (confirm(message)) { SaveCallback(); }
  }
  return true;
}


NotesWidget.prototype.AnimateNotesWindow = function() {
  var timeStep = new Date().getTime() - this.AnimationLastTime;
  if (timeStep > this.AnimationDuration) {
    // end the animation.
    this.WidthFraction = this.AnimationTarget;
    handleResize();
    if (this.Visibilty) {
      this.CloseNoteWindowButton.show();
      this.OpenNoteWindowButton.hide();
      this.Window.fadeIn();
    } else {
      this.CloseNoteWindowButton.hide();
      this.OpenNoteWindowButton.show();
    }    
    draw();
    return;
  }
  
  var k = timeStep / this.AnimationDuration;
    
  // update
  this.AnimationDuration *= (1.0-k);
  this.WidthFraction += (this.AnimationTarget-this.WidthFraction) * k;
  
  handleResize();
  draw();
  var self = this;
  requestAnimFrame(function () {self.AnimateNotesWindow();});
}

// Called when a new slide/view is loaded.
NotesWidget.prototype.DisplayRootNote = function() {
  this.NoteTreeDiv.empty();
  this.RootNote.DisplayGUI(this.NoteTreeDiv);
  this.RootNote.Select();
}

NotesWidget.prototype.LoadViewId = function(viewId) {
  VIEW_ID = viewId;
  this.RootNote = new Note();
  if (typeof(viewId) != "undefined" && viewId != "") {
    this.RootNote.LoadViewId(viewId);
  }
  // Since loading the view is asynchronous,
  // the this.RootNote is not complete at this point.  
}


  
//==============================================================================
// Mouse down places a point. Mouse up places the oposite point
// Widget starts with an active vertex (mouse up).
// Mouse down->up places the vertex and deactivates it.  A new deactive vertex is created.
// Mouse drag at this point drages an edge from the last vertex.


// Todo: Merge vertecies
// Properties dialog for a point (or list).

var RECTANGLE_WIDGET_NEW = 0;
var RECTANGLE_WIDGET_NEW_FACE = 1;
var RECTANGLE_WIDGET_WAITING = 2;
var RECTANGLE_WIDGET_DRAG = 3;
var RECTANGLE_WIDGET_ACTIVE = 5;
var RECTANGLE_WIDGET_MOVETOP = 6;
var RECTANGLE_WIDGET_MOVERIGHT = 7;
var RECTANGLE_WIDGET_MOVEBOTTOM = 8;
var RECTANGLE_WIDGET_MOVELEFT = 9;


function RectangleWidget (viewer, newFlag) {
  if (viewer === undefined) {
    return;
  }
  var cam = viewer.MainView.Camera;
  var viewport = viewer.MainView.Viewport;

  this.Viewer = viewer;
  this.IsTextActive = false;
  this.CenterDragPoint = false;
  this.MoveStatus = 0;

  this.Shape = new Polyline();
	this.Shape.OutlineColor = [0.0, 0.0, 0.0];
  this.Shape.FixedSize = false;
  this.MiddleCrossOffset = 100;
  this.IsShapeUpdate = false;

  this.Shape.Points[0] = [-50*cam.Height/viewport[3], -50*cam.Height/viewport[3]];
  this.Shape.Points[1] = [0,0];
  this.Shape.Points[2] = [50*cam.Height/viewport[3], 50*cam.Height/viewport[3]];
  
  this.TextShape = false;
  
  this.DrawnCallback = function(widget){};

  this.Viewer.WidgetList.push(this);
  
  // Set line thickness   using viewer. (5 pixels).
  this.Shape.LineWidth = 5.0*cam.Height/viewport[3];
  
  if (newFlag) {
    this.State = RECTANGLE_WIDGET_NEW;
    this.Shape.Active = true;
    this.Viewer.ActivateWidget(this);
  } else {
    this.State = RECTANGLE_WIDGET_WAITING;
  }
  eventuallyRender();
}

RectangleWidget.prototype.Draw = function(view) {
  this.Shape.Draw(view);
  
  // draw cross middle if editable
  if(this.Viewer.AnnotationEditable)
    { 
    var vertical = new Polyline();
    var center = [0,0];
    center[0] = this.Shape.Points[0][0] - (this.Shape.Points[0][0] - this.Shape.Points[1][0])/2;
    center[1] = this.Shape.Points[0][1] - (this.Shape.Points[0][1] - this.Shape.Points[2][1])/2;
    
    vertical.OutlineColor = [0.6, 0.6, 0.6];
    vertical.FixedSize = false;
    vertical.Points = [];
    vertical.Points.push([center[0] - this.MiddleCrossOffset, center[1]]);
    vertical.Points.push([center[0] + this.MiddleCrossOffset, center[1]]);
    vertical.UpdateBuffers();
    vertical.Draw(view)     

    var horizontal = new Polyline();     
    horizontal.OutlineColor = [0.6, 0.6, 0.6];     
    horizontal.FixedSize = false;
    horizontal.Points = [];
    horizontal.Points.push([center[0], center[1] - this.MiddleCrossOffset]);
    horizontal.Points.push([center[0], center[1] + this.MiddleCrossOffset]);
    horizontal.UpdateBuffers();
    horizontal.Draw(view)
    }
  if(this.TextShape != false && this.TextShape.String != "")
    {
    this.UpdatetTextPosition(view);
    this.TextShape.Draw(view);  
    }
  else if(this.Viewer.AnnotationEditable)
    {
    this.SetText("Add Label", 12)
    this.TextShape.Color =  [0.6, 0.6, 0.6];
    this.UpdatetTextPosition(view);
    this.TextShape.Draw(view);
    this.TextShape = false;
    }
}

RectangleWidget.prototype.GetSelectBounds = function() {
  var offset = this.Shape.LineWidth;
  var pt1 = [this.Shape.Points[0][0] - offset, this.Shape.Points[0][1] - offset];
  var pt2 = [this.Shape.Points[2][0] + offset, this.Shape.Points[2][1] + offset];
  return [pt1,pt2];
}

RectangleWidget.prototype.SetDrawnCallback = function(callback) {
    this.DrawnCallback = callback;
}

RectangleWidget.prototype.SetText = function(text, height) {
  this.TextShape = new Text();
  this.TextShape.String = text;  
  this.TextShape.Size = height;  
  this.TextShape.Color = this.Shape.OutlineColor;
  this.TextShape.UpdateBuffers(); 
}

RectangleWidget.prototype.UpdatetTextPosition = function(view) {
  if(this.TextShape != false && this.TextShape.String != "")
    {    
    this.TextShape.Position[0] = this.Shape.Points[0][0] + (this.Shape.Points[2][0] - this.Shape.Points[0][0])/2; 
    this.TextShape.Position[1] = this.Shape.Points[2][1]; 
    var scale = this.Viewer.MainView.Viewport[3] / this.Viewer.MainView.Camera.GetHeight();
    view.Context2d.font = this.TextShape.Size+'pt Calibri';
    var width = view.Context2d.measureText(this.TextShape.String).width;    
    this.TextShape.Anchor = [width/2, -5 - (scale * this.Shape.LineWidth)/2];
    this.TextShape.UpdateBuffers();
    }
}

RectangleWidget.prototype.CheckActive = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  this.IsTextActive = false;
  
  var textOriginScreenPixelPosition;
  var tMouseX = null;
  var tMouseY = null;
  
  if(this.TextShape != false && this.TextShape.String != "")
    {
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(this.TextShape.Position[0],this.TextShape.Position[1]);

    tMouseX = (x - textOriginScreenPixelPosition[0]) + this.TextShape.Anchor[0];  
    tMouseY = (y - textOriginScreenPixelPosition[1]) + this.TextShape.Anchor[1];  
    if (tMouseX != null && tMouseX > this.TextShape.PixelBounds[0] && tMouseX < this.TextShape.PixelBounds[1] &&
    tMouseY > this.TextShape.PixelBounds[2] && tMouseY < this.TextShape.PixelBounds[3])
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    
    }
  else if(this.Viewer.AnnotationEditable)
    {
    var ptX = this.Shape.Points[0][0] + (this.Shape.Points[2][0] - this.Shape.Points[0][0])/2; 
    var ptY = this.Shape.Points[2][1]; 
    textOriginScreenPixelPosition = this.Viewer.ConvertPointWorldToViewer(ptX,ptY);

    tMouseX = (x - textOriginScreenPixelPosition[0]);  
    tMouseY = (y - textOriginScreenPixelPosition[1] - 12);  
    
    if(Math.abs(tMouseX) < 35 && Math.abs(tMouseY) < 6)   
      {
      this.SetActive(true);
      this.IsTextActive = true;
      this.Viewer.SetCursor("text");
      return true;
      }
    }
    
  var center = [0,0];
  center[0] = this.Shape.Points[0][0] - (this.Shape.Points[0][0] - this.Shape.Points[1][0])/2;
  center[1] = this.Shape.Points[0][1] - (this.Shape.Points[0][1] - this.Shape.Points[2][1])/2;
  if(center[0] + this.MiddleCrossOffset > pt[0] &&  center[0] - this.MiddleCrossOffset < pt[0] &&
     center[1] + this.MiddleCrossOffset > pt[1] &&  center[1] - this.MiddleCrossOffset < pt[1] )
     {
     this.Viewer.SetCursor("move");
     this.SetActive(true);
     this.MoveStatus = RECTANGLE_WIDGET_DRAG;
     return true;
     }

  // Check for mouse touching an edge.
  for (var i = 1; i < this.Shape.Points.length; ++i) {
    if (this.Shape.IntersectPointLine(pt, this.Shape.Points[i-1], this.Shape.Points[i], this.Shape.LineWidth)) {
     this.SetActive(true);
     if(this.Shape.Points[i-1][0] == this.Shape.Points[i][0])
       {
       if(this.Shape.Points[i-1][1] > this.Shape.Points[i][1])
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVELEFT;
         }
       else
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVERIGHT;
         }
       this.Viewer.SetCursor("ew-resize");
       }
     else
       {
       if(this.Shape.Points[i-1][0] > this.Shape.Points[i][0])
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVEBOTTOM;
         }
       else
         {
         this.MoveStatus = RECTANGLE_WIDGET_MOVETOP;
         }
       this.Viewer.SetCursor("ns-resize");
       }

     return true;
    }
  }
  this.SetActive(false);
  return false;
}


RectangleWidget.prototype.Serialize = function() {
  if(this.Shape === undefined){ return null; }
  var obj = new Object();
  obj.type = "rectangle";
  obj.outlinecolor = this.Shape.OutlineColor;
  obj.linewidth = this.Shape.LineWidth;
  obj.test = "";
  if(this.TextShape != false && this.TextShape.String != "")
    {
    obj.text = this.TextShape.String;
    }
  // Copy the points to avoid array reference bug.
  obj.points = [];
  for (var i = 0; i < this.Shape.Points.length; ++i) {
    obj.points.push([this.Shape.Points[i][0], this.Shape.Points[i][1]]);
  }
  
  obj.closedloop = this.ClosedLoop;
  return obj;
}

// Load a widget from a json object (origin MongoDB).
RectangleWidget.prototype.Load = function(obj) {
  this.Shape.OutlineColor[0] = parseFloat(obj.outlinecolor[0]);
  this.Shape.OutlineColor[1] = parseFloat(obj.outlinecolor[1]);
  this.Shape.OutlineColor[2] = parseFloat(obj.outlinecolor[2]);
  this.Shape.LineWidth = parseFloat(obj.linewidth);  
  this.CreatePointArray(obj.points[0], obj.points[2]); 
  this.ClosedLoop = (obj.closedloop == "true");
}

RectangleWidget.prototype.CreatePointArray = function(topLeft, bottomRight) {
  var newTopLeft = [0, 0];
  var newBottomRight = [0, 0];
  if(topLeft[0]  < bottomRight[0])
    {
    newTopLeft[0] = topLeft[0];
    newBottomRight[0] = bottomRight[0];
    }
  else
    {
    newTopLeft[0] = bottomRight[0];
    newBottomRight[0] = topLeft[0];
    }
  if(topLeft[1] < bottomRight[1])
    {
    newTopLeft[1] = topLeft[1];
    newBottomRight[1] = bottomRight[1];
    }
  else
    {
    newTopLeft[1] = bottomRight[1];
    newBottomRight[1] = topLeft[1];
    }
  this.Shape.Points = [];
  this.Shape.Points.push(newTopLeft);
  this.Shape.Points.push([newBottomRight[0], newTopLeft[1]]);
  this.Shape.Points.push([newBottomRight[0], newBottomRight[1]]);
  this.Shape.Points.push([newTopLeft[0], newBottomRight[1]]);
  this.Shape.Points.push(newTopLeft);    
  this.Shape.Points.push([newBottomRight[0], newTopLeft[1]]);
  this.Shape.UpdateBuffers();  
}


RectangleWidget.prototype.RemoveFromViewer = function() {
  if (this.Viewer == null) {
    return;
  }
  var idx = this.Viewer.WidgetList.indexOf(this);
  if(idx!=-1) { 
    this.Viewer.WidgetList.splice(idx, 1); 
  }
}



RectangleWidget.prototype.HandleKeyPress = function(keyCode, shift) {
}

RectangleWidget.prototype.HandleDoubleClick = function(event) {
}

RectangleWidget.prototype.Deactivate = function() {
  this.State = RECTANGLE_WIDGET_WAITING;
  this.Viewer.DeactivateWidget(this);
  this.Shape.Active = false;
  if(this.TextShape != false) this.TextShape.Active = false;
  eventuallyRender();
}

// Mouse down does nothing. Mouse up causes all state changes.
RectangleWidget.prototype.HandleMouseDown = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  
  if (this.State == RECTANGLE_WIDGET_NEW) {
    this.State = RECTANGLE_WIDGET_NEW_FACE;
    this.CenterDragPoint = pt;
    eventuallyRender();
    return;
  }

  if (this.State == RECTANGLE_WIDGET_ACTIVE) {
    this.LastMouseWorld = pt;
    this.State = this.MoveStatus;
  }
}

// Returns false when it is finished doing its work.
RectangleWidget.prototype.HandleMouseUp = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  if (this.State == RECTANGLE_WIDGET_NEW_FACE) {
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.SetActive(false);
    RecordState();
    this.DrawnCallback(this);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    return;
  }
  
  if(this.State == RECTANGLE_WIDGET_DRAG || this.State == RECTANGLE_WIDGET_MOVEBOTTOM ||
      this.State == RECTANGLE_WIDGET_MOVETOP ||
      this.State == RECTANGLE_WIDGET_MOVERIGHT ||
      this.State == RECTANGLE_WIDGET_MOVELEFT)
    {
    eventuallyRender();
    this.SetActive(false);
    if(this.IsShapeUpdate)this.Viewer.UpdateCallback(this);
    this.IsShapeUpdate = false;
    RecordState();
    }
}


RectangleWidget.prototype.HandleMouseMove = function(event) {
  var x = event.MouseX;
  var y = event.MouseY;
  var pt = this.Viewer.ConvertPointViewerToWorld(x,y);
  var topLeft;
  var bottomRight;
  
  

  if (this.State == RECTANGLE_WIDGET_NEW_FACE) {
    var center =  this.CenterDragPoint;
    var offset = [center[0] - pt[0], center[1] -pt[1]];  
    var topleft = [center[0] - offset[0], center[1] - offset[1]];
    var bottomright = [center[0] + offset[0], center[1] + offset[1]];
    this.CreatePointArray(topleft, bottomright);
   
    this.Shape.UpdateBuffers();
    eventuallyRender();
    this.IsShapeUpdate = true;
    return;
  } 
 else if(this.State == RECTANGLE_WIDGET_DRAG || this.State == RECTANGLE_WIDGET_NEW)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   
   var newTopLeft = [(topLeft[0] - bottomRight[0])/2 + pt[0],
                     -(bottomRight[1] - topLeft[1])/2 + pt[1]];
   var newBottomRight = [-(topLeft[0] - bottomRight[0])/2 + pt[0],
                     (bottomRight[1] - topLeft[1])/2 + pt[1]];
                   
   this.CreatePointArray(newTopLeft, newBottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVELEFT)
   {
   topLeft = this.Shape.Points[0];
   topLeft[0] = pt[0];
   bottomRight = this.Shape.Points[2];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVERIGHT)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   bottomRight[0] = pt[0];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVETOP)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   topLeft[1] = pt[1];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }
 else if(this.State == RECTANGLE_WIDGET_MOVEBOTTOM)
   {
   topLeft = this.Shape.Points[0];
   bottomRight = this.Shape.Points[2];
   bottomRight[1] = pt[1];
   this.CreatePointArray(topLeft, bottomRight);
   eventuallyRender();
   this.IsShapeUpdate = true;
   return;
   }

  
 if (this.State == RECTANGLE_WIDGET_ACTIVE) {
    this.CheckActive(event);
  }
}


RectangleWidget.prototype.HandleTouchPan = function(event) {
}
RectangleWidget.prototype.HandleTouchPinch = function(event) {
}
RectangleWidget.prototype.HandleTouchEnd = function(event) {
}

// Multiple active states.  Active state is a bit confusing.
// Only one state (WAITING) does not receive events from the viewer.
RectangleWidget.prototype.GetActive = function() {
  if (this.State == RECTANGLE_WIDGET_WAITING) {
    return false;  
  }
  return true;
}

// Active simply means that the widget is receiving events.
// This widget can activate verticies, the whole polyline, or a middle vertex.
RectangleWidget.prototype.SetActive = function(flag) {  
  if (flag == this.GetActive()) {
    return;
  }

  if (flag) {
    this.State = RECTANGLE_WIDGET_ACTIVE;  
    this.Shape.Active = true;
    if(this.TextShape != false) this.TextShape.Active = true;
    this.Viewer.ActivateWidget(this);
    eventuallyRender();
  } else {
    this.Deactivate();
  }
}

// TODO:
// make a shape superclass.


function Shape() {
  this.Orientation = 0.0; // in degrees, counter clockwise, 0 is left
  this.Origin = [10000,10000]; // Anchor in world coordinates.
  this.FixedSize = true;
  this.FixedOrientation = true;
  this.LineWidth = 0; // Line width has to be in same coordiantes as points.
  this.Visibility = true; // An easy way to turn off a shape (with removing it from the shapeList).
  this.Active = false;
  this.ActiveColor = [1.0, 1.0, 0.0];
  // Playing around with layering.  The anchor is being obscured by the text.
  this.ZOffset = 0.1;
  };

Shape.prototype.destructor=function() {
  // Get rid of the buffers?
}

Shape.prototype.Draw = function (view) {
  if ( ! this.Visibility) {
    return;
  }
  if (this.Matrix == undefined) {
    this.UpdateBuffers();
  }

  if (GL) {
    // Lets use the camera to change coordinate system to pixels.
    // TODO: Put this camera in the view or viewer to avoid creating one each render.
    var camMatrix = mat4.create();
    mat4.identity(camMatrix);
    if (this.FixedSize) {
      var viewFrontZ = view.Camera.ZRange[0]+0.01;
      // This camera matric changes pixel/ screen coordinate sytem to
      // view [-1,1],[-1,1],z
      camMatrix[0] = 2.0 / view.Viewport[2];
      camMatrix[12] = -1.0;
      camMatrix[5] = 2.0 / view.Viewport[3];
      camMatrix[13] = -1.0;
      camMatrix[14] = viewFrontZ; // In front of tiles in this view
    }

    // The actor matrix that rotates to orientation and shift (0,0) to origin.
    // Rotate based on ivar orientation.
    var theta = this.Orientation * 3.1415926536 / 180.0;
    this.Matrix[0] =  Math.cos(theta);
    this.Matrix[1] =  Math.sin(theta);
    this.Matrix[4] = -Math.sin(theta);
    this.Matrix[5] =  Math.cos(theta);
    // Place the origin of the shape.
    x = this.Origin[0];
    y = this.Origin[1];
    if (this.FixedSize) {
      // For fixed size, translation must be in view/pixel coordinates.
      // First transform the world to view.
      var m = view.Camera.Matrix;
      var x = (this.Origin[0]*m[0] + this.Origin[1]*m[4] + m[12])/m[15];
      var y = (this.Origin[0]*m[1] + this.Origin[1]*m[5] + m[13])/m[15];
      // convert view to pixels (view coordinate ssytem).
      x = view.Viewport[2]*(0.5*(x+1.0));
      y = view.Viewport[3]*(0.5*(y+1.0));
    }
    // Translate to place the origin.
    this.Matrix[12] = x;
    this.Matrix[13] = y;
    this.Matrix[14] = this.ZOffset;
    
    var program = polyProgram;

    GL.useProgram(program);
    GL.disable(GL.BLEND);
    GL.enable(GL.DEPTH_TEST);

    // This does not work.
    // I will need to make thick lines with polygons.
    //GL.lineWidth(5);

    // These are the same for every tile.
    // Vertex points (shifted by tiles matrix)
    GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
    // Needed for outline ??? For some reason, DrawOutline did not work
    // without this call first.
    GL.vertexAttribPointer(program.vertexPositionAttribute, 
                           this.VertexPositionBuffer.itemSize, 
                           GL.FLOAT, false, 0, 0);     // Texture coordinates
    // Local view.
    GL.viewport(view.Viewport[0], view.Viewport[1], 
                view.Viewport[2], view.Viewport[3]);

    GL.uniformMatrix4fv(program.mvMatrixUniform, false, this.Matrix);
    if (this.FixedSize) {
      GL.uniformMatrix4fv(program.pMatrixUniform, false, camMatrix);
    } else {
      // Use main views camera to convert world to view.
      GL.uniformMatrix4fv(program.pMatrixUniform, false, view.Camera.Matrix);
    }

    // Fill color
    if (this.FillColor != undefined) {
      if (this.Active) {
        GL.uniform3f(program.colorUniform, this.ActiveColor[0], 
                     this.ActiveColor[1], this.ActiveColor[2]);
      } else {
        GL.uniform3f(program.colorUniform, this.FillColor[0], 
                     this.FillColor[1], this.FillColor[2]);
      }
      // Cell Connectivity
      GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
        
      GL.drawElements(GL.TRIANGLES, this.CellBuffer.numItems, 
                      GL.UNSIGNED_SHORT,0);
    }

    if (this.OutlineColor != undefined) {
      if (this.Active) {
        GL.uniform3f(program.colorUniform, this.ActiveColor[0], 
                     this.ActiveColor[1], this.ActiveColor[2]);
      } else {
        GL.uniform3f(program.colorUniform, this.OutlineColor[0], 
                     this.OutlineColor[1], this.OutlineColor[2]);
      }

      if (this.LineWidth == 0) {
        if (this.WireFrame) {
          GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
          GL.drawElements(GL.LINE_LOOP, this.CellBuffer.numItems, 
                      GL.UNSIGNED_SHORT,0);
        } else {
          // Outline. This only works for polylines
          GL.drawArrays(GL.LINE_STRIP, 0, this.VertexPositionBuffer.numItems);
        }
      } else {
        // Cell Connectivity
        GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.LineCellBuffer);
        GL.drawElements(GL.TRIANGLES, this.LineCellBuffer.numItems, 
                        GL.UNSIGNED_SHORT,0);
      }
    }
  } else { // 2d Canvas -----------------------------------------------
    view.Context2d.save();
    // Flip y axis
    view.Context2d.setTransform(1,0,0,-1,0,view.Viewport[3]); 
    var theta = this.Orientation * 3.1415926536 / 180.0;
    this.Matrix[0] =  Math.cos(theta);
    this.Matrix[1] =  Math.sin(theta);
    this.Matrix[4] = -Math.sin(theta);
    this.Matrix[5] =  Math.cos(theta);
    // Place the origin of the shape.
    x = this.Origin[0];
    y = this.Origin[1];
    var scale = 1.0;
    if ( ! this.FixedSize) {
      // World need to be drawn in view coordinate system so the 
      scale = view.Viewport[3] / view.Camera.GetHeight();
    }
    // First transform the origin-world to view.
    var m = view.Camera.Matrix;
    var x = (this.Origin[0]*m[0] + this.Origin[1]*m[4] + m[12])/m[15];
    var y = (this.Origin[0]*m[1] + this.Origin[1]*m[5] + m[13])/m[15];
    // convert origin-view to pixels (view coordinate system).
    x = view.Viewport[2]*(0.5*(x+1.0));
    y = view.Viewport[3]*(0.5*(y+1.0));
    view.Context2d.transform(this.Matrix[0],this.Matrix[1],this.Matrix[4],this.Matrix[5],x,y);
    view.Context2d.beginPath();
    view.Context2d.moveTo(this.PointBuffer[0]*scale,this.PointBuffer[1]*scale);
    var i = 3;
    while ( i < this.PointBuffer.length ) {
      view.Context2d.lineTo(this.PointBuffer[i]*scale,this.PointBuffer[i+1]*scale);
      i += 3;
    }
      
    if (this.OutlineColor != undefined) {
      var width = this.LineWidth * scale;
      if (width == 0) {
        width = 1;
      }
      view.Context2d.lineWidth = width;
      if (this.Active) {
        view.Context2d.strokeStyle=ConvertColorToHex(this.ActiveColor);
      } else {
        view.Context2d.strokeStyle=ConvertColorToHex(this.OutlineColor);
      }
      view.Context2d.stroke();
    }
    
    if (this.FillColor != undefined) {
      if (this.Active) {
        view.Context2d.fillStyle=ConvertColorToHex(this.ActiveColor);
      } else {
        view.Context2d.fillStyle=ConvertColorToHex(this.FillColor);
      }
      view.Context2d.fill();
    }    
    view.Context2d.restore();
  }
}

// Invert the fill color.
Shape.prototype.ChooseOutlineColor = function () {
  if (this.FillColor) {
    this.OutlineColor = [1.0-this.FillColor[0],
                         1.0-this.FillColor[1],
                         1.0-this.FillColor[2]];

  }
}

Shape.prototype.SetOutlineColor = function (c) {
  this.OutlineColor = ConvertColor(c);
}

Shape.prototype.SetFillColor = function (c) {
  this.FillColor = ConvertColor(c);
}

Shape.prototype.HandleMouseMove = function(event, dx,dy) {
  // superclass does nothing
  return false;
}

//Shape.prototype.UpdateBuffers = function() {
    //    // The superclass does not implement this method.
//}

Shape.prototype.IntersectPointLine = function(pt, end0, end1, thickness) {
  // make end0 the origin.
  var x = pt[0] - end0[0];
  var y = pt[1] - end0[1];
  var vx = end1[0] - end0[0];
  var vy = end1[1] - end0[1];
  
  // Rotate so the edge lies on the x axis.
  var length = Math.sqrt(vx*vx + vy*vy); // Avoid atan2 ... with clever use of complex numbers.
  vx = vx/length;
  vy = -vy/length;
  var newX = (x*vx - y*vy);
  var newY = (x*vy + y*vx);
  
  if (newX >= 0.0 && newX <= length) {
    if (Math.abs(newY) < (thickness *0.5)) {
      return true;
    }
  return false;
  }
}
  
// cross hairs was created as an anchor for text.
// Just two lines that cross at a point.
// I am not goint to support line width, or fillColor.
// Shape seems to define lines in a loop, so I will create a loop for now.


function CrossHairs() {
  Shape.call(this);
  this.Length = 50; // Length of the crosing lines
  this.Width = 1; // Width of the cross hair lines.
  this.Origin = [10000,10000]; // position in world coordinates.
	this.FillColor    = [0,0,0]; 
	this.OutlineColor = [1,1,1]; 
};
CrossHairs.prototype = new Shape;

CrossHairs.prototype.destructor=function() {
  // Get rid of the buffers?
}

CrossHairs.prototype.UpdateBuffers = function() {
  var vertexPositionData = [];
  var cellData = [];
  var halfLength = (this.Length * 0.5) + 0.5;
  var halfWidth = (this.Width * 0.5) + 0.5;

  this.Matrix = mat4.create();
  mat4.identity(this.Matrix);

  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(0.0);

  vertexPositionData.push(-halfLength);
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(0.0);

  vertexPositionData.push(-halfLength);
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(0.0);

  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(halfLength);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(halfLength);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(halfLength);
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(halfLength);
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(halfWidth);
  vertexPositionData.push(-halfLength);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(-halfLength);
  vertexPositionData.push(0.0);
  
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(-halfWidth);
  vertexPositionData.push(0.0);

  cellData.push(1);
  cellData.push(2);
  cellData.push(7);
  
  cellData.push(1);
  cellData.push(7);
  cellData.push(8);
  
  cellData.push(4);
  cellData.push(5);
  cellData.push(10);
  
  cellData.push(4);
  cellData.push(10);
  cellData.push(11);
  
  this.VertexPositionBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
  GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertexPositionData), GL.STATIC_DRAW);
  this.VertexPositionBuffer.itemSize = 3;
  this.VertexPositionBuffer.numItems = vertexPositionData.length / 3;
  
  this.CellBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
  GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
  this.CellBuffer.itemSize = 1;
  this.CellBuffer.numItems = cellData.length;
}

function Arrow() {
    Shape.call(this);
    this.Width = 10; // width of the shaft and size of the head
    this.Length = 50; // Length of the arrow in pixels
    this.Orientation = 45.0; // in degrees, counter clockwise, 0 is left
    this.Origin = [10000,10000]; // Tip position in world coordinates.
    this.OutlineColor = [0,0,0];
    this.ZOffset = -0.1;
};
Arrow.prototype = new Shape;


Arrow.prototype.destructor=function() {
    // Get rid of the buffers?
}

// Point origin is anchor and units pixels.
Arrow.prototype.PointInShape = function(x, y) {
  // Rotate point so arrow lies along the x axis.
  var tmp = this.Orientation * Math.PI / 180.0;
  var ct = Math.cos(tmp);
  var st = Math.sin(tmp);
  xNew = x*ct + y*st;
  yNew = -x*st + y*ct;
  tmp = this.Width / 2.0;
  if (xNew > 0.0 && xNew < this.Length && yNew < tmp && yNew > -tmp) {
    return true;
  }
}


Arrow.prototype.UpdateBuffers = function() {
  this.PointBuffer = [];
  var cellData = [];
  var hw = this.Width * 0.5;
  var w2 = this.Width * 2.0;

  this.Matrix = mat4.create();
  mat4.identity(this.Matrix);

  this.PointBuffer.push(0.0);
  this.PointBuffer.push(0.0);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(w2);
  this.PointBuffer.push(this.Width);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(w2);
  this.PointBuffer.push(hw);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(this.Length);
  this.PointBuffer.push(hw);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(this.Length);
  this.PointBuffer.push(-hw);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(w2);
  this.PointBuffer.push(-hw);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(w2);
  this.PointBuffer.push(-this.Width);
  this.PointBuffer.push(0.0);

  this.PointBuffer.push(0.0);
  this.PointBuffer.push(0.0);
  this.PointBuffer.push(0.0);

  if (GL) {
    // Now create the triangles    
    cellData.push(0);
    cellData.push(1);
    cellData.push(2);
    
    cellData.push(0);
    cellData.push(2);
    cellData.push(5);
    
    cellData.push(0);
    cellData.push(5);
    cellData.push(6);
    
    cellData.push(2);
    cellData.push(3);
    cellData.push(4);
    
    cellData.push(2);
    cellData.push(4);
    cellData.push(5);

    this.VertexPositionBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.PointBuffer), GL.STATIC_DRAW);
    this.VertexPositionBuffer.itemSize = 3;
    this.VertexPositionBuffer.numItems = this.PointBuffer.length / 3;
    
    this.CellBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
    this.CellBuffer.itemSize = 1;
    this.CellBuffer.numItems = cellData.length;
  }
}



function Circle() {
  Shape.call(this);
  this.Radius = 10; // Radius in pixels
  this.Origin = [10000,10000]; // Center in world coordinates.
  this.OutlineColor = [0,0,0];
  this.PointBuffer = [];
};
Circle.prototype = new Shape;



Circle.prototype.destructor=function() {
    // Get rid of the buffers?
}

Circle.prototype.UpdateBuffers = function() {
  this.PointBuffer = [];
  var cellData = [];
  var lineCellData = [];
  var numEdges = Math.floor(this.Radius/2)+10;
  // NOTE: numEdges logic will not work in world coordinates.
  // Limit numEdges to 180 to mitigate this issue.
  if (numEdges > 50 || ! this.FixedSize ) {
    numEdges = 50;
  }

  this.Matrix = mat4.create();
  mat4.identity(this.Matrix);

  if  (GL) {
    if (this.LineWidth == 0) {
      for (var i = 0; i <= numEdges; ++i) {
        var theta = i*2*3.14159265359/numEdges;
        this.PointBuffer.push(this.Radius*Math.cos(theta));
        this.PointBuffer.push(this.Radius*Math.sin(theta));
        this.PointBuffer.push(0.0);
      }
    
      // Now create the triangles    
      // It would be nice to have a center point, 
      // but this would mess up the outline.
      for (var i = 2; i < numEdges; ++i) {
        cellData.push(0);
        cellData.push(i-1);
        cellData.push(i);
      }

      this.VertexPositionBuffer = GL.createBuffer();
      GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
      GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.PointBuffer), GL.STATIC_DRAW);
      this.VertexPositionBuffer.itemSize = 3;
      this.VertexPositionBuffer.numItems = this.PointBuffer.length / 3;
      
      this.CellBuffer = GL.createBuffer();
      GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
      GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
      this.CellBuffer.itemSize = 1;
      this.CellBuffer.numItems = cellData.length;
    } else {
      //var minRad = this.Radius - (this.LineWidth/2.0);
      //var maxRad = this.Radius + (this.LineWidth/2.0);
      var minRad = this.Radius;
      var maxRad = this.Radius + this.LineWidth;
      for (var i = 0; i <= numEdges; ++i) {
        var theta = i*2*3.14159265359/numEdges;
        this.PointBuffer.push(minRad*Math.cos(theta));
        this.PointBuffer.push(minRad*Math.sin(theta));
        this.PointBuffer.push(0.0);
        this.PointBuffer.push(maxRad*Math.cos(theta));
        this.PointBuffer.push(maxRad*Math.sin(theta));
        this.PointBuffer.push(0.0);
      }
      this.VertexPositionBuffer = GL.createBuffer();
      GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
      GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.PointBuffer), GL.STATIC_DRAW);
      this.VertexPositionBuffer.itemSize = 3;
      this.VertexPositionBuffer.numItems = this.PointBuffer.length / 3;

      // Now create the fill triangles    
      // It would be nice to have a center point, 
      // but this would mess up the outline.
      for (var i = 2; i < numEdges; ++i) {
        cellData.push(0);
        cellData.push((i-1)*2);
        cellData.push(i*2);
      }
      this.CellBuffer = GL.createBuffer();
      GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
      GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
      this.CellBuffer.itemSize = 1;
      this.CellBuffer.numItems = cellData.length;

      // Now the thick line
      for (var i = 0; i < numEdges; ++i) {
        lineCellData.push(0 + i*2);
        lineCellData.push(1 + i*2);
        lineCellData.push(2 + i*2);
        lineCellData.push(1 + i*2);
        lineCellData.push(3 + i*2);
        lineCellData.push(2 + i*2);
      }
      this.LineCellBuffer = GL.createBuffer();
      GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.LineCellBuffer);
      GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(lineCellData), GL.STATIC_DRAW);
      this.LineCellBuffer.itemSize = 1;
      this.LineCellBuffer.numItems = lineCellData.length;
    }
  } else {
    for (var i = 0; i <= numEdges; ++i) {
      var theta = i*2*3.14159265359/numEdges;
      this.PointBuffer.push(this.Radius*Math.cos(theta));
      this.PointBuffer.push(this.Radius*Math.sin(theta));
      this.PointBuffer.push(0.0);
    }
  }
}// Poly line

function Polyline() {
    Shape.call(this);
    this.Origin = [0.0,0.0]; // Center in world coordinates.
    this.Points = [];
};
Polyline.prototype = new Shape;


Polyline.prototype.destructor=function() {
    // Get rid of the buffers?
}

Polyline.prototype.UpdateBuffers = function() {
  this.PointBuffer = [];
  var cellData = [];
  var lineCellData = [];

  this.Matrix = mat4.create();
  mat4.identity(this.Matrix);

  if (this.LineWidth == 0 || !GL ) {
    for (var i = 0; i < this.Points.length; ++i) {
      this.PointBuffer.push(this.Points[i][0]);
      this.PointBuffer.push(this.Points[i][1]);
      this.PointBuffer.push(0.0);
    }
    // Not used for line width == 0.
    for (var i = 2; i < this.Points.length; ++i) {
      cellData.push(0);
      cellData.push(i-1);
      cellData.push(i);
    }
  } else {
    // Compute a list normals for middle points.
    var edgeNormals = [];
    var mag;
    var x;
    var y;
    var end = this.Points.length-1;
    // Compute the edge normals.
    for (var i = 0; i < end; ++i) {
      x = this.Points[i+1][0] - this.Points[i][0];
      y = this.Points[i+1][1] - this.Points[i][1];
      mag = Math.sqrt(x*x + y*y);
      edgeNormals.push([-y/mag,x/mag]);
    }

    if ( end > 0 ) {
      var half = this.LineWidth / 2.0;
      // 4 corners per point
      var dx = edgeNormals[0][0]*half;
      var dy = edgeNormals[0][1]*half;
      this.PointBuffer.push(this.Points[0][0] - dx);
      this.PointBuffer.push(this.Points[0][1] - dy);
      this.PointBuffer.push(0.0);
      this.PointBuffer.push(this.Points[0][0] + dx);
      this.PointBuffer.push(this.Points[0][1] + dy);
      this.PointBuffer.push(0.0);
      for (var i = 1; i < end; ++i) {
        this.PointBuffer.push(this.Points[i][0] - dx);
        this.PointBuffer.push(this.Points[i][1] - dy);
        this.PointBuffer.push(0.0);
        this.PointBuffer.push(this.Points[i][0] + dx);
        this.PointBuffer.push(this.Points[i][1] + dy);
        this.PointBuffer.push(0.0);
        dx = edgeNormals[i][0]*half;
        dy = edgeNormals[i][1]*half;
        this.PointBuffer.push(this.Points[i][0] - dx);
        this.PointBuffer.push(this.Points[i][1] - dy);
        this.PointBuffer.push(0.0);
        this.PointBuffer.push(this.Points[i][0] + dx);
        this.PointBuffer.push(this.Points[i][1] + dy);
        this.PointBuffer.push(0.0);
      }
      this.PointBuffer.push(this.Points[end][0] - dx);
      this.PointBuffer.push(this.Points[end][1] - dy);
      this.PointBuffer.push(0.0);
      this.PointBuffer.push(this.Points[end][0] + dx);
      this.PointBuffer.push(this.Points[end][1] + dy);
      this.PointBuffer.push(0.0);
    }
    // Generate the triangles for a thick line
    for (var i = 0; i < end; ++i) {
      lineCellData.push(0 + 4*i);
      lineCellData.push(1 + 4*i);
      lineCellData.push(3 + 4*i);
      lineCellData.push(0 + 4*i);
      lineCellData.push(3 + 4*i);
      lineCellData.push(2 + 4*i);
    }

    // Not used.
    for (var i = 2; i < this.Points.length; ++i) {
      cellData.push(0);
      cellData.push((2*i)-1);
      cellData.push(2*i);
    }
  }

  if (GL) {
    this.VertexPositionBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(this.PointBuffer), GL.STATIC_DRAW);
    this.VertexPositionBuffer.itemSize = 3;
    this.VertexPositionBuffer.numItems = this.PointBuffer.length / 3;

    this.CellBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
    this.CellBuffer.itemSize = 1;
    this.CellBuffer.numItems = cellData.length;

    if (this.LineWidth != 0) {
      this.LineCellBuffer = GL.createBuffer();
      GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.LineCellBuffer);
      GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(lineCellData), GL.STATIC_DRAW);
      this.LineCellBuffer.itemSize = 1;
      this.LineCellBuffer.numItems = lineCellData.length;
    }
  }
}
// TODO:
// Fix the webGL attributes not initialized properly warning.
// Multiple text object should share the same texture.
// Add symbols -=+[]{},.<>'";: .....



// I need an array to map ascii to my letter index.
// a = 97
var ASCII_LOOKUP =
    [[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //0
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //5
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //10
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //15
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //20
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //25
     [0,413,50,98],[0,413,50,98],[900,17,30,98],[791,119,28,95],[0,413,50,98], //30 32 = ' ' 33="!"
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //35
     [260,18,32,97],[292,18,32,97],[0,413,50,98],[0,413,50,98],[635,120,25,36], //40 40="(" 41=")" 44=','
     [783,17,37,57],[662,121,25,34],[687,121,46,96],[822,214,58,98],[881,214,50,98], //45 45="-" 46="." 47="/" 48 = 01
     [932,214,56,98],[0,114,53,98],[54,114,54,98],[109,114,54,98],[164,114,57,98], //50 = 23456
     [222,114,49,98],[272,114,57,98],[330,114,56,98],[554,18,25,76],[579,121,28,73], //55 = 789 (387 ') 58=":" 59=";"
     [0,413,50,98],[412,120,62,69],[0,413,50,98],[733,10,53,106],[0,413,50,98], //60 61 = "=" 63="?"
     [263,314,67,98],[331,314,55,98],[387,314,59,98],[447,314,66,98],[514,314,52,98], //65 = ABCDE
     [566,314,49,98],[616,314,67,98],[684,314,67,98],[752,314,24,98],[777,314,36,98], //70 = FGHIJ
     [814,314,58,98],[873,314,45,98],[919,314,88,98],[0,214,66,98],[69,214,72,98], //75 = KLMNO
     [142,214,54,98],[197,214,76,98],[274,214,53,98],[328,214,49,98],[378,214,55,98], //80 = PQRST
     [434,214,66,98],[501,214,63,98],[565,214,96,98],[662,214,55,98],[718,214,53,98], //85 = UVWXY
     [772,214,49,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //90 = Z
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[51,413,56,98],[108,413,50,98], //95 97 = abc
     [154,413,50,98],[210,413,50,98],[263,413,39,98],[301,413,50,98],[350,413,54,98], //100 = defgh
     [406,413,22,98],[427,413,34,98],[458,413,50,98],[508,413,24,98],[532,413,88,98], //105 = ijklm
     [619,413,57,98],[675,413,60,98],[734,413,57,98],[790,413,57,98],[847,413,40,98], //110 = nopqr
     [886,413,42,98],[925,413,41,98],[966,413,56,98],[0,314,49,98],[50,314,77,98], //115 = stuvw
     [127,314,48,98],[173,314,52,98],[224,314,42,98],[0,413,50,98],[0,413,50,98], //120 = xyz
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //125
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //130
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //135  
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //140
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //145
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //150
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //155
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //160
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //165
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //170
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //175
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //180
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //185
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //198
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //195
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //200
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //205
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //210
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //215
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //220
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //225
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //230
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //235
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //240
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //245
     [0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98],[0,413,50,98], //250
     [0,413,50,98]];


// All text object use the same texture map.
//var TEXT_TEXTURE;
//var TEXT_IMAGE;

function GetTextureLoadedFunction (text) {
  return function () {text.HandleLoadedTexture();}
}

function TextError () {
  alert("Could not load font");
}

function Text() {
  // All text objects sare the same texture map.
  //if (TEXT_TEXTURE == undefined ) {
  //}
  if (GL) {
    this.TextureLoaded = false;
    this.Texture = GL.createTexture();
    this.Image = new Image();
    this.Image.onload = GetTextureLoadedFunction(this); 
    //this.Image.onerror = TextError(); // Always fires for some reason.
    // This starts the loading.
    this.Image.src = IMAGE_PATH_URL +"letters.gif";
  }
  this.Color = [0.5, 1.0, 1.0];
  this.Size = 30; // Height in pixels
  // Position of the anchor in the world coordinate system.
  this.Position = [100,100];

  // The anchor point and position are the same point.
  // Position is in world coordinates.
  // Anchor is in pixel coordinates of text (buffers).  
  // In pixel(text) coordinate system
  this.Anchor = [0,0];
  this.Active = false;
  
  //this.String = "Hello World";
  //this.String = "0123456789";
  this.String = ",./<>?[]\{}|-=~!@#$%^&*()_+";

  this.PixelBounds = [0,0,0,0];
};

Text.prototype.destructor=function() {
  // Get rid of the buffers?
}

Text.prototype.HandleLoadedTexture = function() {
  if (GL) {
    var texture = this.Texture;
    GL.pixelStorei(GL.UNPACK_FLIP_Y_WEBGL, true);
    GL.bindTexture(GL.TEXTURE_2D, texture);
    GL.texImage2D(GL.TEXTURE_2D, 0, GL.RGBA, GL.RGBA, GL.UNSIGNED_BYTE, this.Image);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MAG_FILTER, GL.LINEAR);
    GL.texParameteri(GL.TEXTURE_2D, GL.TEXTURE_MIN_FILTER, GL.LINEAR_MIPMAP_NEAREST);
    GL.generateMipmap(GL.TEXTURE_2D); 
    GL.bindTexture(GL.TEXTURE_2D, null);
    this.TextureLoaded = true;
  }
  eventuallyRender();
}

Text.prototype.Draw = function (view) {
  // Place the anchor of the text.
  // First transform the world anchor to view.
  var m = view.Camera.Matrix;
  var x = (this.Position[0]*m[0] + this.Position[1]*m[4] + m[12])/m[15];
  var y = (this.Position[0]*m[1] + this.Position[1]*m[5] + m[13])/m[15];
  // convert view to pixels (view coordinate system).
  x = view.Viewport[2]*(0.5*(1.0+x));

  if (GL) {
    y = view.Viewport[3]*(0.5*(1.0+y));
    if (this.TextureLoaded == false) {
      return;
    }
    if (this.Matrix == undefined) {
      this.UpdateBuffers();
      this.Matrix = mat4.create();
      mat4.identity(this.Matrix);
    }
    var program = textProgram;
    GL.useProgram(program);

    //ZERO,ONE,SRC_COLOR,ONE_MINUS_SRC_COLOR,ONE_MINUS_DST_COLOR,
    //SRC_ALPHA,ONE_MINUS_SRC_ALPHA,
    //DST_ALPHA,ONE_MINUS_DST_ALHPA,GL_SRC_ALPHA_SATURATE
    //GL.blendFunc(GL.SRC_ALPHA, GL.ONE);
    GL.blendFunc(GL.SRC_ALPHA, GL.ONE_MINUS_SRC_ALPHA);
    GL.enable(GL.BLEND);
    //GL.disable(GL.DEPTH_TEST);

    // These are the same for every tile.
    // Vertex points (shifted by tiles matrix)
    GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
    // Needed for outline ??? For some reason, DrawOutline did not work
    // without this call first.
    GL.vertexAttribPointer(program.vertexPositionAttribute, 
                           this.VertexPositionBuffer.itemSize, 
                           GL.FLOAT, false, 0, 0);     // Texture coordinates
    GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexTextureCoordBuffer);
    GL.vertexAttribPointer(program.textureCoordAttribute, 
                           this.VertexTextureCoordBuffer.itemSize, 
                           GL.FLOAT, false, 0, 0);
    // Cell Connectivity
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
    
    // Color of text
    if (this.Active) {
      GL.uniform3f(program.colorUniform, 1.0, 1.0, 0.0);
    } else {
      GL.uniform3f(program.colorUniform, this.Color[0], this.Color[1], this.Color[2]);
    }
    // Draw characters.
    GL.viewport(view.Viewport[0], view.Viewport[1], 
                view.Viewport[2], view.Viewport[3]);

    var viewFrontZ = view.Camera.ZRange[0]+0.01; 
  
    // Lets use the camera to change coordinate system to pixels.
    // TODO: Put this camera in the view or viewer to avoid creating one each render.
    var camMatrix = mat4.create();
    mat4.identity(camMatrix);
    camMatrix[0] = 2.0 / view.Viewport[2];
    camMatrix[12] = -1.0;
    camMatrix[5] = 2.0 / view.Viewport[3];
    camMatrix[13] = -1.0;
    camMatrix[14] = viewFrontZ; // In front of everything (no depth buffer anyway).
    GL.uniformMatrix4fv(program.pMatrixUniform, false, camMatrix);

    // Translate the anchor to x,y
    this.Matrix[12] = x - this.Anchor[0];
    this.Matrix[13] = y - this.Anchor[1];
    GL.uniformMatrix4fv(program.mvMatrixUniform, false, this.Matrix);

    GL.activeTexture(GL.TEXTURE0);
    GL.bindTexture(GL.TEXTURE_2D, this.Texture);
    GL.uniform1i(program.samplerUniform, 0);

    GL.drawElements(GL.TRIANGLES, this.CellBuffer.numItems, GL.UNSIGNED_SHORT,0);
  } else {
    var strArray = this.String.split("\n");
    var width = 0;
    var height = this.Size * strArray.length;
    y = view.Viewport[3]*(0.5*(1.0-y));
    x = x - this.Anchor[0];
    y = y + this.Anchor[1];
    var ctx = view.Context2d;
    ctx.save();
    ctx.setTransform(1,0,0,1,0,0);
    ctx.font = this.Size+'pt Calibri';
    if (this.Active) {
      ctx.fillStyle = ConvertColorToHex([1.0,1.0,0.0]);
    } else {
      ctx.fillStyle = ConvertColorToHex(this.Color);
    }

    for (var i = 0; i < strArray.length; ++i) {
      var lineWidth = ctx.measureText(strArray[i]).width;
      if (lineWidth > width) { width = lineWidth; }      
      ctx.fillText(strArray[i], x, y + this.Size*i);
    }
    this.PixelBounds = [0, width, -height+this.Size, this.Size];
    ctx.restore();
  }
}


Text.prototype.UpdateBuffers = function() {
  if ( ! GL) { return; }
  // Create a textured quad for each letter.
  var vertexPositionData = [];
  var textureCoordData = [];
  var cellData = [];
  // 128 for power of 2, but 98 to top of characters.
  var top = 98.0 / 128.0; // Top texture coordinate value
  var charLeft = 0;
  var charBottom = 0;
  var ptId = 0;
  this.PixelBounds = [0,0,0,this.Size];

  for (var i = 0; i < this.String.length; ++i) {
    var idx = this.String.charCodeAt(i);
    if (idx == 10 || idx == 13) { // newline
      charLeft = 0;
      charBottom -= this.Size;
    } else {
      var port = ASCII_LOOKUP[idx];
      // Convert to texture coordinate values.
      var tLeft =   port[0] / 1024.0;
      var tRight = (port[0]+port[2]) / 1024.0;
      var tBottom = port[1] / 512.0;
      var tTop =   (port[1]+port[3]) / 512.0;
      // To place vertices
      var charRight = charLeft + port[2]*this.Size / 98.0;
      var charTop = charBottom + port[3]*this.Size / 98.0;
      
      // Accumulate bounds;
      if (this.PixelBounds[0] > charLeft)   {this.PixelBounds[0] = charLeft;}
      if (this.PixelBounds[1] < charRight)  {this.PixelBounds[1] = charRight;}
      if (this.PixelBounds[2] > charBottom) {this.PixelBounds[2] = charBottom;}
      if (this.PixelBounds[3] < charTop)    {this.PixelBounds[3] = charTop;}

      // Make 4 points, We could share points.
      textureCoordData.push(tLeft);
      textureCoordData.push(tBottom);
      vertexPositionData.push(charLeft);
      vertexPositionData.push(charBottom);
      vertexPositionData.push(0.0);
      
      textureCoordData.push(tRight);
      textureCoordData.push(tBottom);
      vertexPositionData.push(charRight);
      vertexPositionData.push(charBottom);
      vertexPositionData.push(0.0);
      
      textureCoordData.push(tLeft);
      textureCoordData.push(tTop);
      vertexPositionData.push(charLeft);
      vertexPositionData.push(charTop);
      vertexPositionData.push(0.0);
      
      textureCoordData.push(tRight);
      textureCoordData.push(tTop);
      vertexPositionData.push(charRight);
      vertexPositionData.push(charTop);
      vertexPositionData.push(0.0);
      
      charLeft = charRight;
      
      // Now create the cell.    
      cellData.push(0 + ptId);
      cellData.push(1 + ptId);
      cellData.push(2 + ptId);
      
      cellData.push(2 + ptId);
      cellData.push(1 + ptId);
      cellData.push(3 + ptId);
      ptId += 4;
    }
  }

  this.VertexTextureCoordBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexTextureCoordBuffer);
  GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(textureCoordData), GL.STATIC_DRAW);
  this.VertexTextureCoordBuffer.itemSize = 2;
  this.VertexTextureCoordBuffer.numItems = textureCoordData.length / 2;
  
  this.VertexPositionBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ARRAY_BUFFER, this.VertexPositionBuffer);
  GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertexPositionData), GL.STATIC_DRAW);
  this.VertexPositionBuffer.itemSize = 3;
  this.VertexPositionBuffer.numItems = vertexPositionData.length / 3;
  
  this.CellBuffer = GL.createBuffer();
  GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, this.CellBuffer);
  GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(cellData), GL.STATIC_DRAW);
  this.CellBuffer.itemSize = 1;
  this.CellBuffer.numItems = cellData.length;
}

Text.prototype.HandleMouseMove = function(event, dx,dy) {
  // convert the position to screen pixel coordinates.
  viewer = event.CurrentViewer;

  return false;
}

Text.prototype.SetColor = function (c) {
  this.Color = ConvertColor(c);
}



// Singleton instance delegates events to viewers based on their viewport.
// I assume that multiple threads will not access the manager.

// I need to implement 3d widgets.
// When we create a drawing item (arrow) the arrow will follow the mouse until
// the first mouse press which will set the tip position.
// If the mouse moves while the button is pressed, the tail of the arrow
// will follow the mouse position.  Button release will set the tail.

// I will wait for later to make 3d widget hot spots.

// I will make a new class to handle arrow events.
// Should the manager or the Viewer delegate?



// NOTE:  For this class events are passed in from outside.
// For all other classes, the event manager is an "event".



function EventManager (canvas) {
  this.Canvas = canvas[0];
  this.Viewers = [];
  this.CurrentViewer = null;
  this.ShiftKeyPressed = false;
  this.ControlKeyPressed = false;
  this.Key = '';
  this.MouseX = 0;
  this.MouseY = 0;
  this.LastMouseX = 0;
  this.LastMouseY = 0;
  this.MouseDown = false;
  this.SweepListeners = [];
  this.SelectedSweepListener = undefined;
  this.StartTouchTime = 0;
  
  if (MOBILE_DEVICE == 'Andriod') {
    var width = CANVAS.innerWidth();
    var height = CANVAS.innerHeight();
    var self = this;
    //this.FullScreenSweep = this.AddSweepListener(width*0.5, height*0.95,  0,1, "Full Screen", 
    //                                             function(sweep) {self.GoFullScreen();});
  }
}

EventManager.prototype.AddViewer = function(viewer) {
    this.Viewers.push(viewer);
}

EventManager.prototype.ChooseViewer = function() {
  this.CurrentViewer = null;
  for (var i = 0; i < this.Viewers.length; ++i) {
    var vport = this.Viewers[i].GetViewport();
    if (this.MouseX > vport[0] && this.MouseX < vport[0]+vport[2] &&
      this.MouseY > vport[1] && this.MouseY < vport[1]+vport[3]) {
      this.CurrentViewer = this.Viewers[i];
      return;
    }
  }
}

EventManager.prototype.SetMousePositionFromEvent = function(event) {
  this.SystemEvent = event;
  if (event.clientX && event.clientY) {
    // Translate to coordinate of canvas
    // There has to be a better what to get the offset of the canvas relative to the body (or screen even).
    // Here I loop through the parents accumilating the offset.
    var docObj = this.Canvas;
    var xOffset = docObj.offsetLeft;
    var yOffset = docObj.offsetTop;
    while (docObj.offsetParent != null) {
      docObj = docObj.offsetParent;
      xOffset += docObj.offsetLeft;
      yOffset += docObj.offsetTop;
      }
    // Scoll bars on html body element.
    var body = document.getElementsByTagName("body");
    xOffset -= body[0].scrollLeft;
    yOffset -= body[0].scrollTop;

    this.MouseX = event.clientX-xOffset;
    this.MouseY = CANVAS.innerHeight() - (event.clientY-yOffset);
  }
}


EventManager.prototype.HandleMouseDown = function(event) {
  this.LastMouseX = this.MouseX;
  this.LastMouseY = this.MouseY;

  this.SetMousePositionFromEvent(event);
  this.ChooseViewer();

  if (this.CurrentViewer) {
    event.preventDefault();
    //event.stopPropagation(); // does not work.  Right mouse still brings up browser menu.

    var date = new Date();
    var dTime = date.getTime() - this.MouseUpTime;
    if (dTime < 200.0) { // 200 milliseconds
      PENDING_SHOW_PROPERTIES_MENU = false;
      this.CurrentViewer.HandleDoubleClick(this);
      return;
    }

    this.MouseDown = true;
    this.CurrentViewer.HandleMouseDown(this);
  }
}


var PENDING_SHOW_PROPERTIES_MENU = false;
var SHOW_PROPERTIES_MOUSE_POSITION;
function ShowPendingPropertiesMenu() {
  if (PENDING_SHOW_PROPERTIES_MENU) {
    ShowPropertiesMenu(SHOW_PROPERTIES_MOUSE_POSITION[0], SHOW_PROPERTIES_MOUSE_POSITION[1]);
  }
}

EventManager.prototype.HandleMouseUp = function(event) {
  if ( ! this.MouseDown) {
    // This will occur if on double clicks (and probably if mouse down was outside canvas).
    return;
  }
  this.SetMousePositionFromEvent(event);
  this.MouseDown = false;

  this.ChooseViewer();
  if (this.CurrentViewer) {
    this.CurrentViewer.HandleMouseUp(this);
  }

  // Record time so we can detect double click.
  var date = new Date();
  this.MouseUpTime = date.getTime();

  // Should we let the viewer handle this?
  // Can it supress on double click?
  if (event.which == 3 && this.CurrentViewer.ActiveWidget == null) {
    // Wait to make sure this is not a double click.
    PENDING_SHOW_PROPERTIES_MENU = true;
    SHOW_PROPERTIES_MOUSE_POSITION = [event.clientX, event.clientY];
    setTimeout(function(){ShowPendingPropertiesMenu();},200);
  }
}

// Forward event to view.
EventManager.prototype.HandleMouseMove = function(event) {
  this.LastMouseX = this.MouseX;
  this.LastMouseY = this.MouseY;
  this.SetMousePositionFromEvent(event);
  this.MouseDeltaX = this.MouseX - this.LastMouseX;
  this.MouseDeltaY = this.MouseY - this.LastMouseY;

  this.ChooseViewer();
  if (this.CurrentViewer) {
    this.CurrentViewer.HandleMouseMove(this);
  }
}

EventManager.prototype.HandleMouseWheel = function(event) {
  this.SetMousePositionFromEvent(event);
  this.ChooseViewer();
  if (this.CurrentViewer) {
	  event.preventDefault();
    //event.stopPropagation(); // does not work.  Right mouse still brings up browser menu.
    this.CurrentViewer.HandleMouseWheel(this);
  }
}

//------------- Keys ---------------

EventManager.prototype.HandleKeyDown = function(event) {
  if (event.keyCode == 16) {
    // Shift key modifier.
    this.ShiftKeyPressed = true;
  }
  if (event.keyCode == 17) {
    // Control key modifier.
    this.ControlKeyPressed = true;
  }

  // Handle undo and redo (cntrl-z, cntrl-y)
  if (this.ControlKeyPressed && event.keyCode == 90) {
    // Function in recordWidget.
    UndoState();
  } else if (this.ControlKeyPressed && event.keyCode == 89) {
    // Function in recordWidget.
    RedoState();
  }
    
  this.ChooseViewer();
  if (this.CurrentViewer) {
    // All the keycodes seem to be Capitals.  Sent the shift modifier so we can compensate.
    this.CurrentViewer.HandleKeyPress(event.keyCode, this.ShiftKeyPressed);
  }
}

EventManager.prototype.HandleKeyUp = function(event) {
  if (event.keyCode == 16) {
    // Shift key modifier.
    this.ShiftKeyPressed = false;
  } else if (event.keyCode == 17) {
    // Control key modifier.
    this.ControlKeyPressed = false;
  }
}


//==============================================================================
// Touch events.

EventManager.prototype.IsFullScreen = function() {
  return (document.fullScreenElement && document.fullScreenElement !==  null) ||   
          (document.mozFullScreen || document.webkitIsFullScreen);
}


EventManager.prototype.GoFullScreen = function () {
  // Deactivate the listener
  if (this.FullScreenSweep) {
    this.FullScreenSweep.Active = false;
  }
  
  if (! this.IsFullScreen()) {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
  }
  handleResize();
  eventuallyRender();
}


EventManager.prototype.NextNote = function () {
  NextNoteCallback();
}
EventManager.prototype.PreviousNote = function () {
  PreviousNoteCallback();
}



function SweepListener () {
  this.Active = true;
  this.Location = [0,0];
  this.Direction = [1,0];
  this.Label = "Sweep Here";

  this.Arrow = $('<img>').appendTo('body')
                        .hide()
                        .css({
                          'position': 'absolute',
                          'width': '20px',
                          'z-index': '1',
                          'opacity': '0.8'})
                        .attr('src',"webgl-viewer/static/sweepArrowUp.png");

  this.Div = 
    $('<div>').appendTo('body')
              .hide()
              .text("sweep")
              .attr('id','TEST')
              .css({'opacity': '0.8',
                    'z-index': '1',
                    'position': 'absolute',
                    'color': '#90b0ff',
                    'background-color' : '#ffffff'
                    });
}

SweepListener.prototype.Hide = function() {
  this.Arrow.hide();
  this.Div.hide();
}
    
SweepListener.prototype.Show = function() {
  if ( ! this.Active) { 
    this.Hide(); 
    return; 
  }
  this.Arrow.show();
  this.Div.show();
}

SweepListener.prototype.Update = function() {
  this.Div.text(this.Label);
  var arrowWidth = this.Arrow.innerWidth();
  var arrowHeight = this.Arrow.innerWidth();
  var divWidth = this.Div.innerWidth();
  var divHeight = this.Div.innerHeight();
  
  var x = this.Location[0];
  var y = this.Location[1];
  if (this.Direction[0] == 1) {
    this.Arrow.attr('src',"webgl-viewer/static/sweepArrowRight.png")
              .css({'left': x+'px',
                    'bottom' : (y-arrowWidth/2)+'px'});
    // I cannot predict the location with rotated text.
    //this.Div.css({'transform' : 'rotate(90deg)',
    //              '-ms-transform' : 'rotate(90deg)',
    //              '-webkit-transform' : 'rotate(90deg)'});
    this.Div.css({'left': (x+(arrowWidth-divWidth)/2)+'px',
                  'bottom' : (y-divHeight-(arrowHeight/2))+'px'});
  } else if (this.Direction[0] == -1) {
    this.Arrow.attr('src',"webgl-viewer/static/sweepArrowLeft.png")
              .css({'left': (x-arrowWidth)+'px',
                    'bottom' : (y-arrowWidth/2)+'px'});
    this.Div.css({'left': (x+(-arrowWidth-divWidth)/2)+'px',
                  'bottom' : (y-divHeight-(arrowHeight/2))+'px'});
  } else if (this.Direction[1] == 1) {
    this.Arrow.attr('src',"webgl-viewer/static/sweepArrowUp.png")
              .css({'left': (x-arrowWidth/2)+'px',
                    'bottom' : y+'px'});
    this.Div.css({'left': (x-divWidth/2)+'px',
                  'bottom' : (y-divHeight)+'px'});
  } else if (this.Direction[1] == -1) {
    this.Arrow.attr('src',"webgl-viewer/static/sweepArrowDown.png");
    this.Arrow.attr('src',"webgl-viewer/static/sweepArrowUp.png")
              .css({'left': (x-arrowWidth/2)+'px',
                    'bottom' : (y-arrowHeight)+'px'});
    this.Div.css({'left': (x-divWidth)+'px',
                  'bottom' : y+'px'});
  }
}


// Configurable sweep events.
// Only horizontal and vertical sweep directions for now.
EventManager.prototype.AddSweepListener = function(x, y, dx, dy, label, callback) {
  var sweep = new SweepListener();
  sweep.Location = [x,y];
  sweep.Direction = [dx,dy];
  sweep.Label = label;
  sweep.Callback = callback;
  sweep.Update();
  this.SweepListeners.push(sweep);
  return sweep;
}

EventManager.prototype.DetectSweepEvent = function(dx,dy) {
  for (var i = 0; i < this.SweepListeners.length; ++i) {
    var sweep = this.SweepListeners[i];
    if (sweep.Active) {
      if (dx*sweep.Direction[0] + dy*sweep.Direction[1] > 0.5) {
        // The sweep is the correct direction.
        if ((this.MouseX-sweep.Location[0])*sweep.Direction[0] +
            (this.MouseY-sweep.Location[1])*sweep.Direction[1] >= 0.0) {
          if ((this.LastMouseX-sweep.Location[0])*sweep.Direction[0] +
              (this.LastMouseY-sweep.Location[1])*sweep.Direction[1] < 0.0) {
            this.SelectedSweepListener = sweep;
          }
        }
      }
    }
  }  
}

EventManager.prototype.ShowSweepListeners = function() {
  // User may have taken it out of fullscreen.
  if ( ! this.IsFullScreen() && this.FullScreenSweep) {
    this.FullScreenSweep.Active = true;
  }
  for (var i = 0; i < this.SweepListeners.length; ++i) {
    var sweep = this.SweepListeners[i];
    sweep.Show();
  }  
}

EventManager.prototype.HideSweepListeners = function() {
  this.SelectedSweepListener = undefined;
  for (var i = 0; i < this.SweepListeners.length; ++i) {
    var sweep = this.SweepListeners[i];
    sweep.Hide();
  }
}



// Save the previous touches and record the new
// touch locations in viewport coordinates.
EventManager.prototype.HandleTouch = function(e, startFlag) {
  e.preventDefault();
  var date = new Date();
  var t = date.getTime();
  // I have had trouble on the iPad with 0 delta times.
  // Lets see how it behaves with fewer events.
  if (t-this.Time < 20 && ! startFlag) { return false; }
  
  this.LastTime = this.Time;  
  this.Time = t;

  if (!e) {
    var e = event;
  }

  this.SystemEvent = e;
  this.LastTouches = this.Touches;
  var can = this.Canvas;
  this.Touches = [];
  for (var i = 0; i < e.targetTouches.length; ++i) {
    var x = e.targetTouches[i].pageX - can.offsetLeft;
    var y = CANVAS.innerHeight() - (e.targetTouches[i].pageY - can.offsetTop);
    this.Touches.push([x,y]);
  }

  this.LastMouseX = this.MouseX;
  this.LastMouseY = this.MouseY;

  // Compute the touch average.
  var numTouches = this.Touches.length;
  this.MouseX = this.MouseY = 0.0;
  for (var i = 0; i < numTouches; ++i) {
    this.MouseX += this.Touches[i][0];
    this.MouseY += this.Touches[i][1];
  }
  this.MouseX = this.MouseX / numTouches;
  this.MouseY = this.MouseY / numTouches;

  return true;
}


EventManager.prototype.HandleTouchStart = function(e) {
  this.HandleTouch(e, true);
  if (this.StartTouchTime == 0) {
    this.StartTouchTime = this.Time;
  }

  this.ChooseViewer();
  if (this.CurrentViewer) {
    if (this.CurrentViewer.HandleTouchStart(this)) {
      if (NAVIGATION_WIDGET.Visibility) {
        NAVIGATION_WIDGET.ToggleVisibility();
      }
      if (MOBILE_ANNOTATION_WIDGET.Visibility) {
        MOBILE_ANNOTATION_WIDGET.ToggleVisibility();
      }
    }
  }  
}


EventManager.prototype.HandleTouchMove = function(e) {
  // Put a throttle on events
  if ( ! this.HandleTouch(e, false)) { return; }

  if (typeof NAVIGATION_WIDGET != "undefined" &&  NAVIGATION_WIDGET.Visibility) {
    // No slide interaction with the interface up.
    // I had bad interaction with events going to browser.
    NAVIGATION_WIDGET.ToggleVisibility();
  }
    
  if (MOBILE_ANNOTATION_WIDGET.Visibility) {
    // No slide interaction with the interface up.
    // I had bad interaction with events going to browser.
    MOBILE_ANNOTATION_WIDGET.ToggleVisibility();
  }
    
  this.ChooseViewer();  
  if (this.Touches.length == 1 && this.CurrentViewer) {
    this.CurrentViewer.HandleTouchPan(this);
    return;
  }
  if (this.Touches.length == 2 && this.CurrentViewer) {
    this.CurrentViewer.HandleTouchPinch(this);
    return
  }
  if (this.Touches.length == 3 && this.CurrentViewer) {
    this.CurrentViewer.HandleTouchRotate(this);
    return
  }
}  

EventManager.prototype.HandleTouchEnd = function(e) {
  e.preventDefault();

  var t = new Date().getTime();
  this.LastTime = this.Time;
  this.Time = t;

  t = t - this.StartTouchTime;
  if (e.targetTouches.length == 0 && MOBILE_DEVICE) {
    this.StartTouchTime = 0;
    if (t < 90) {
      NAVIGATION_WIDGET.ToggleVisibility();
      MOBILE_ANNOTATION_WIDGET.ToggleVisibility();
      return;
    }
    if (this.CurrentViewer) {
      this.CurrentViewer.HandleTouchEnd(this);
    }
  }
}

EventManager.prototype.HandleTouchCancel = function(event) {
  this.MouseDown = false;
}







var CANVAS;
var EVENT_MANAGER;
var VIEWER1;
var VIEWER2;
var DUAL_VIEW = false;
var records = [];
var viewer_click_callback = function(){
  
}

var NOTES_WIDGET;

  
function draw() {
  if (GL) {
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);
  }
    
  // This just changes the camera based on the current time.
  VIEWER1.Animate();
  if (DUAL_VIEW) {
    VIEWER2.Animate();
  }
  VIEWER1.Draw();
  if (DUAL_VIEW) {
    VIEWER2.Draw();
  }
}

function selectActiveWidget()
  {
  VIEWER1.SetSelectedWidget(getActiveWidget());
  return getActiveWidget();
  }
function unselectActiveWidget()
  {
  VIEWER1.SetSelectedWidget(null);
  }

function getActiveWidget()
  {
  return VIEWER1.ActiveWidget;
  }

function setWidgetText(widget, text, height)
  {
  if(typeof widget.SetText != "undefined")
    {
    widget.SetText(text, height);
    draw();
    }
  }

function setActiveWidget(type)
  {
  var color = "green";
  if(typeof VIEWER1.ActiveColor != "undefined")
    {
    color = VIEWER1.ActiveColor;
    }
  if(type == "circle")
    {
    var widget = new CircleWidget(VIEWER1, true);
    widget.EnableWidgetPopup(false);
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetOutlineColor(color);
    }
  else if(type == "rectangle")
    {
    var widget = new RectangleWidget(VIEWER1, true);
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetOutlineColor(color);
    }
  else if(type == "arrow")
    {
    var widget = new ArrowWidget(VIEWER1, true);
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.Shape.SetFillColor(color);
    }
  else if(type == "pencil")
    {
    var widget = new PencilWidget(VIEWER1, true, false, true);
    VIEWER1.ActiveWidget = widget;
    VIEWER1.ActiveWidget.SetOutlineColor(color);
    }
  else if(VIEWER1.ActiveWidget != null)
    {
    VIEWER1.ActiveWidget.RemoveFromViewer();
    VIEWER1.ActiveWidget.SetActive(false);
    }
  }
  
function setDrawnCallback(callback)
  {
  if(typeof VIEWER1.ActiveWidget.SetDrawnCallback != "undefined") VIEWER1.ActiveWidget.SetDrawnCallback(callback);
  }
  
function setActiveColor(color)
  {
  VIEWER1.ActiveColor = color;
  if(VIEWER1.ActiveWidget instanceof CircleWidget ||
    VIEWER1.ActiveWidget instanceof RectangleWidget   )
    {
    VIEWER1.ActiveWidget.Shape.OutlineColor = color;
    if(VIEWER1.ActiveWidget.TextShape != false)
      {
      VIEWER1.ActiveWidget.TextShape.Color = VIEWER1.ActiveWidget.Shape.OutlineColor;
      }
    }
  if(VIEWER1.ActiveWidget instanceof ArrowWidget)
    {
    VIEWER1.ActiveWidget.Shape.SetFillColor(color);
    if(VIEWER1.ActiveWidget.TextShape != false)
      {
      VIEWER1.ActiveWidget.TextShape.Color = VIEWER1.ActiveWidget.Shape.FillColor;
      }
    }
  if(VIEWER1.ActiveWidget instanceof PencilWidget)
    {
    VIEWER1.ActiveWidget.SetOutlineColor(color);
    if(VIEWER1.ActiveWidget.TextShape != false)
      {
      VIEWER1.ActiveWidget.TextShape.Color = VIEWER1.ActiveWidget.OutlineColor;
      }
    }
  }

function getRecord()
  {  
  record = new ViewerRecord();
  record.CopyViewer(VIEWER1);
  return record;
  }
  
function convertRecordToJson(record)
  {
  return geoJson.Io.write(record);
  }

function startVisualizationSession(container, userOptions) {    
  detectMobile();
  
  var options = {

    "center" : [0,0,0],
    "overview_cursor" : 'default',
    "overview_color" : "#4011E5",
    "overview_padding": 12,
    "overview_width_percentage": 15, 
    "overview_height_percentage": 30, 
    "rotation" : 0,
    "viewHeight" : 22000,
    "imgPath" : "static/",
    "dimensions" : [0,0,0],
    "_id" : "-1",
    "url" : "-1",
    "use_tms" : false,
    "levels" : "10",
    "debug" : false,
    "use_dual" : false,
    "use_recorder" : false,
    "use_notes" : false,
    "use_edit" : false,
    "use_browser" : false,
    "reverse_mouse_wheel" : false
  };
  
  $.each(userOptions, function(i, v)
  {
    options[i] = v;
  });

  var imgPath = options.imgPath;

  initGC(container);
  EVENT_MANAGER = new EventManager(CANVAS);

  $(container).css('position', 'relative');
  var width = $(container).width();
  var height = $(container).height();
  var halfWidth = width/2;
  VIEWER1 = new Viewer([0,0, halfWidth,height], null);
  EVENT_MANAGER.AddViewer(VIEWER1);
  
  // Might consider interactive resize feature too.
  var handleResize = function () {
    var width = CANVAS.innerWidth();
    var height = CANVAS.innerHeight();
    if (GL) {
      CANVAS.attr("width",width.toString());
      CANVAS.attr("height",height.toString());
      GL.viewport(0, 0, width, height);
    } // SetViewport does the work for 2d canvases.
    
    // we set the left border to leave space for the notes window.
    var left = 0;
    if (NOTES_WIDGET) {
      left = width * NOTES_WIDGET.WidthFraction;
    }
    // The remaining width is split between the two viewers.
    var width1 = (width-left) * VIEWER1_FRACTION;
    if (VIEWER1) {

       var overViewWidth = width1 * options.overview_width_percentage/100;
       var overViewHeight = height * options.overview_height_percentage/100;
       var overViewport = [left + width1 - overViewWidth - options.overview_padding, 
                        height - overViewHeight - options.overview_padding,
                        overViewWidth,
                        overViewHeight];
                      
      if(typeof VIEWER1.OverView != "undefined")
        {        
        VIEWER1.SetViewport([left, 0, width1, height]);
        VIEWER1.OverView.SetViewport(overViewport);
        VIEWER1.OverView.Camera.ComputeMatrix();
        eventuallyRender();
        }
    }   
    
    if(MOBILE_DEVICE !== false)
      {
      VIEWER1.OverView.Canvas.hide();
      }
  };
  
  // Reset Cavas CSS properties
  VIEWER1.MainView.Canvas.css({
    'position': 'absolute',
    'bottom' : "auto",
    'height': "auto",
    'border': "none"
  });  
  
  // Trick to fix overview position
  if(typeof VIEWER1.OverView != "undefined")
    {
    VIEWER1.OverView.Canvas.css({
      'cursor': options.overview_cursor
    });    

    VIEWER1.OverView.Color = options.overview_color
    }
  
  
  VIEWER1.MainView.Camera.FocalPoint = [options.center[0], options.center[1], 10.0];
  
  
  if(options.use_edit)InitViewEditMenus();
  if(options.use_browser)InitViewBrowser();
  if(options.use_dual)InitDualViewWidget(container, imgPath);
  if(options.use_notes)InitNotesWidget();
  if(options.use_recorder)InitRecorderWidget(container, imgPath);

  $(window).resize(function() {
    handleResize();
  }).trigger('resize');

  var can = CANVAS[0];
  
  can.addEventListener("mousedown",  function(e){
    EVENT_MANAGER.HandleMouseDown(e);
  },  false);
  can.addEventListener("mousemove",  function(e){
    EVENT_MANAGER.HandleMouseMove(e);
  },  false);
  can.addEventListener("touchstart", function(e){
    EVENT_MANAGER.HandleTouchStart(e);
  }, false);
  can.addEventListener("touchmove",  function(e){
    EVENT_MANAGER.HandleTouchMove(e);
  },  true);
  can.addEventListener("touchend",   function(e){
    EVENT_MANAGER.HandleTouchEnd(e);
  },    false);
  can.addEventListener("mousewheel", function(e){
    VIEWER1.ReverseMouseWheel = options.reverse_mouse_wheel;
    EVENT_MANAGER.HandleMouseWheel(e);
  }, false);
  can.addEventListener("DOMMouseScroll", function(e){
    VIEWER1.ReverseMouseWheel = options.reverse_mouse_wheel;
    e.wheelDelta = -e.detail*40;
    EVENT_MANAGER.HandleMouseWheel(e);
  }, false);


  can.addEventListener("mouseup", function(e){   
    EVENT_MANAGER.HandleMouseUp(e);    
    viewer_click_callback(e);
  }, false);
  can.addEventListener("touchcancel", function(e){
    EVENT_MANAGER.HandleTouchCancel(e);
  }, false);

  VIEWER1.SetAnnotationVisibility(true);

  handleResize();
  if(options.use_dual) DualViewUpdateGui();
  
  if(typeof options.bounds == "undefined") options.bounds = [0, options.dimensions[0], 0, options.dimensions[1]];
 
  LoadImage(VIEWER1, options);
  
  var canvasRatio = CANVAS.innerWidth()/CANVAS.innerHeight();
  var left = 0;
  var bds = VIEWER1.GetCache().GetBounds();
  var heightCamera = (bds[3]-bds[2]);
  var widthCamera = ((bds[1]-bds[0])/canvasRatio);

  if(bds[3]-bds[2] > bds[1]-bds[0] || heightCamera > widthCamera)VIEWER1.MainView.Camera.Height = heightCamera;
  else VIEWER1.MainView.Camera.Height = widthCamera;
  
  VIEWER1.ZoomTarget = VIEWER1.MainView.Camera.Height;
  VIEWER1.MainView.Camera.ComputeMatrix();
  draw();  
  
  eventuallyRender();
}

/* Copyright (c) 2006-2013 by OpenLayers Contributors (see authors.txt for
 * full list of contributors). Published under the 2-clause BSD license.
 * See license.txt in the OpenLayers distribution or repository for the
 * full text of the license. */

var geoJson = geoJson || {};
geoJson.Io =  geoJson.Io || {};

if(typeof console == "undefined")
  {
  console = {};
  console.log = function(){};
  }
/**
* APIMethod: read
* Deserialize a GeoJSON string.
*
* Parameters:
* json - {String} A GeoJSON string
* type - {String} Optional string that determines the structure of
*     the output.  Supported values are "Geometry", "Feature", and
*     "FeatureCollection".  If absent or null, a default of
*     "FeatureCollection" is assumed.
* filter - {Function} A function which will be called for every key and
*     value at every level of the final result. Each value will be
*     replaced by the result of the filter function. This can be used to
*     reform generic objects into instances of classes, or to transform
*     date strings into Date objects.
*
* Returns: 
* {Object} The return depends on the value of the type argument. If type
*     is "FeatureCollection" (the default), the return will be an array
*     of <OpenLayers.Feature.Vector>. If type is "Geometry", the input json
*     must represent a single geometry, and the return will be an
*     <OpenLayers.Geometry>.  If type is "Feature", the input json must
*     represent a single feature, and the return will be an
*     <OpenLayers.Feature.Vector>.
*/
geoJson.Io.read = function(json)
  {
  var obj = jQuery.parseJSON(json);
 
  if(obj == null || obj.type != "FeatureCollection") 
    {
    console.log("Bad JSON: " + json);
    return;
    } 
    
  $.each(obj.features, function(i, feature)
    {
    geoJson.Io.createObj[feature.geometry.type].apply(
          this, [feature]
          );
    if(typeof feature.properties.text != "undefined")
      {
      var widget = VIEWER1.WidgetList[VIEWER1.WidgetList.length-1];
      if(typeof widget.SetText != "undefined")
        {
        widget.SetText(feature.properties.text,12);
        }
      }
    })      
  }



geoJson.Io.createObj = {

  "point": function(array) {
    // Todo Create point
    //array[0], array[1]
  },
  
  "circle": function(feature) {
    var obj = {}
    obj.type = "circle";
    obj.origin = feature.geometry.coordinates[0];
    obj.radius = feature.geometry.coordinates[1];
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    VIEWER1.LoadWidget(obj);
  },
  
  "rectangle": function(feature) {
    var obj = {}
    obj.type = "rectangle";
    obj.points = feature.geometry.coordinates;
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    VIEWER1.LoadWidget(obj);
  },
  
  "arrow": function(feature) {
    var obj = {}
    obj.type = "arrow";
    obj.origin = feature.geometry.coordinates.origin;
    obj.fillcolor = feature.geometry.coordinates.fillcolor;
    obj.length = feature.geometry.coordinates.length;
    obj.width = feature.geometry.coordinates.width;
    obj.orientation = feature.geometry.coordinates.orientation;
    obj.fixedsize = ""+feature.geometry.coordinates.fixedsize;
    obj.fixedorientation = ""+feature.geometry.coordinates.fixedorientation;
    obj.outlinecolor = feature.properties.outlinecolor;
    obj.linewidth = feature.properties.linewidth;
    VIEWER1.LoadWidget(obj);
  },

  "multipoint": function(array) {
    var points = [];
    var p = null;
    for(var i=0, len=array.length; i<len; ++i) {
      try {
        p = this.parseCoords["point"].apply(this, [array[i]]);
      } catch(err) {
        throw err;
      }
      points.push(p);
    }   
  },


  "linestring": function(array) {
    var points = [];
    var p = null;
    for(var i=0, len=array.length; i<len; ++i) {
      try {
        p = this.parseCoords["point"].apply(this, [array[i]]);
      } catch(err) {
        throw err;
      }
      points.push(p);
    }
    // Todo Create line
  },
                
  "polygon": function(array) {
    var rings = [];
    var r, l;
    for(var i=0, len=array.length; i<len; ++i) {
      try {
        l = this.parseCoords["linestring"].apply(this, [array[i]]);
      } catch(err) {
        throw err;
      }
     // r = new OpenLayers.Geometry.LinearRing(l.components);
     // rings.push(r);
    }
     // Todo Create 
  },


  "box": function(array) {
    if(array.length != 2) {
      throw "GeoJSON box coordinates must have 2 elements";
    }
         // Todo Create 
  /*  return new OpenLayers.Geometry.Polygon([
      new OpenLayers.Geometry.LinearRing([
        new OpenLayers.Geometry.Point(array[0][0], array[0][1]),
        new OpenLayers.Geometry.Point(array[1][0], array[0][1]),
        new OpenLayers.Geometry.Point(array[1][0], array[1][1]),
        new OpenLayers.Geometry.Point(array[0][0], array[1][1]),
        new OpenLayers.Geometry.Point(array[0][0], array[0][1])
        ])
      ]);*/
  }

},

/**
 * APIMethod: write
 * Serialize a feature, geometry, array of features into a GeoJSON string.
 *
 * Parameters:
 * obj - {Object} An <OpenLayers.Feature.Vector>, <OpenLayers.Geometry>,
 *     or an array of features.
 * pretty - {Boolean} Structure the output with newlines and indentation.
 *     Default is false.
 *
 * Returns:
 * {String} The GeoJSON string representation of the input geometry,
 *     features, or array of features.
 */
geoJson.Io.write = function(obj) {
  var geojson = {
    "type": null
  };
  // Todo
  geojson.type = "FeatureCollection";
  var numFeatures = obj.Annotations.length;
  geojson.features = new Array(numFeatures);
  for(var i=0; i<numFeatures; ++i) {
    var element = obj.Annotations[i];
    geojson.features[i] = this.extract.feature.apply(
      this, [element]
      );
    if(typeof element.text != "undefined" 
        && element.text != "")
      {
      geojson.features[i].properties['text'] = element.text;
      }
  }
  return JSON.stringify(geojson);
}

/**
     * Property: extract
     * Object with properties corresponding to the GeoJSON types.
     *     Property values are functions that do the actual value extraction.
     */
geoJson.Io.extract ={
  /**
         * Method: extract.feature
         * Return a partial GeoJSON object representing a single feature.
         *
         * Parameters:
         * feature - {<OpenLayers.Feature.Vector>}
         *
         * Returns:
         * {Object} An object representing the point.
         */
  'feature': function(feature) {
    var geom = this.extract.geometry.apply(this, [feature]);
    var json = {
      "type": "Feature",
      "properties": {linewidth:feature.linewidth , outlinecolor:feature.outlinecolor},
      "geometry": geom
    };
    if (feature.fid != null) {
      json.id = feature.fid;
    }
    return json;
  },
        
  /**
         * Method: extract.geometry
         * Return a GeoJSON object representing a single geometry.
         *
         * Parameters:
         * geometry - {<OpenLayers.Geometry>}
         *
         * Returns:
         * {Object} An object representing the geometry.
         */
  'geometry': function(geometry) {
    if (geometry == null) {
      return null;
    }
                    
    var geometryType = geometry.type;
    var data = this.extract[geometryType.toLowerCase()].apply(this, [geometry]);
    var json;
    if(geometryType == "Collection") {
      json = {
        "type": "GeometryCollection",
        "geometries": data
      };
    } else {
      json = {
        "type": geometryType,
        "coordinates": data
      };
    }
            
    return json;
  },
  

  'point': function(point) {
    return [point.x, point.y];
  },

 
  'circle': function(circle) {
    return [circle.origin, circle.radius];
  },
  
  'rectangle': function(rectangle) {
    return rectangle.points;
  },
  
  'arrow': function(arrow) {
    return {origin:arrow.origin,  fillcolor: arrow.fillcolor,
      length:arrow.length,
      width:arrow.width,
      orientation:arrow.orientation,
      fixedsize:arrow.fixedsize,
      fixedorientation:arrow.fixedorientation
    };
  },
 
  'multipoint': function(multipoint) {
    var array = [];
    for(var i=0, len=multipoint.components.length; i<len; ++i) {
      array.push(this.extract.point.apply(this, [multipoint.components[i]]));
    }
    return array;
  },
        
 
  'linestring': function(linestring) {
    var array = [];
    for(var i=0, len=linestring.components.length; i<len; ++i) {
      array.push(this.extract.point.apply(this, [linestring.components[i]]));
    }
    return array;
  },

 
  'multilinestring': function(multilinestring) {
    var array = [];
    for(var i=0, len=multilinestring.components.length; i<len; ++i) {
      array.push(this.extract.linestring.apply(this, [multilinestring.components[i]]));
    }
    return array;
  },
        
 
  'polygon': function(polygon) {
    var array = [];
    for(var i=0, len=polygon.components.length; i<len; ++i) {
      array.push(this.extract.linestring.apply(this, [polygon.components[i]]));
    }
    return array;
  },

  'multipolygon': function(multipolygon) {
    var array = [];
    for(var i=0, len=multipolygon.components.length; i<len; ++i) {
      array.push(this.extract.polygon.apply(this, [multipolygon.components[i]]));
    }
    return array;
  },
        
 
  'collection': function(collection) {
    var len = collection.components.length;
    var array = new Array(len);
    for(var i=0; i<len; ++i) {
      array[i] = this.extract.geometry.apply(
        this, [collection.components[i]]
        );
    }
    return array;
  }
        

}
    