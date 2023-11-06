import React, { useEffect, useState } from 'react';

const LoadingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div dangerouslySetInnerHTML={{ __html: `
          
<style>* {	box-sizing: border-box;}
html,body {	margin: 0;min-height: 100vh;overflow: hidden;}
canvas {width: 100%;height: auto;}
</style><script> window.console = window.console || function(t) {};</script><script>
  if (document.location.search.match(/type=embed/gi)) {   window.parent.postMessage("resize", "*"); }
</script></head><body translate="no"><canvas id="canvas" width="1600" height="888"></canvas><script id="rendered-js">
const canvas = window.canvas;const gl = canvas.getContext("webgl2");const dpr = Math.max(1, 0.5 * window.devicePixelRatio);
const touches = new Map();const vertexSource = "#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
in vec2 position;
void main(void) {   gl_Position = vec4(position, 0., 1.);}";
const fragmentSource = "#version 300 es
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float time;
uniform vec2 resolution;
out vec4 fragColor;
#define T time
#define rot(a) mat2(cos(a),-sin(a),sin(a),cos(a))

vec3 me(vec2 uv) {
vec2 n = vec2(3.6, 1.5), q = vec2(0);
float s = 9., a = 0.02, t = T;
uv *= 0.6;
mat2 m = mat2(.6, 1.2, -1.2, .6);
for (float i = .0; i < 30.; i++) {
    n *= m;
    q = uv * s - t + i + n;
    a += dot(cos(q) / s, vec2(1));
    n += sin(q);
    s *= 1.2;
}
vec3 col = vec3(0.5, 0.5, 1) * (a + .2) + a + a - 0.6; // Blue flame
col = exp(-col * 8.);
col = exp(-col * 4.);
return col;
}float map(vec3 p) {float d =5.3;  return d;}
vec3 norm(vec3 p){ float d = map(p); vec3 n = d-vec3(0);return n;}vec3 dir(vec2 uv, vec3 ro, vec3 t, float z) 
{vec3 up = vec3(1, 1, 0),f = normalize(t-ro),r = normalize(cross(up, f)), u = cross(f, r),
 i = f+uv.x*r+uv.y*u; return i*sin(T*0.2)*1.2;}void main() {vec2 uv = ( gl_FragCoord.xy-.5*resolution )/888.8;
float f2 =sin(T * 0.5)*4.2 ;uv *= rot(f2);          // rotation image
vec3 col = vec3(0), tg = vec3(0),ro = vec3(-1, 0, -10.), rd = dir(uv, ro, tg, 1.); 
vec3 g= vec3(0),p =ro;float i = .0, dd = .0;for (; i <222.2; i++)
{ float d = map(p); p += rd * d; dd += d; }p =ro+rd; col += me(p.xy*0.5);  fragColor = vec4(col*2., 1);}";

let time;
let buffer;
let program;
let touch;
let resolution;
let vertices = [];
let touching = false;

function resize() {
  const { innerWidth: width, innerHeight: height } = window;

  canvas.width = width * dpr;
  canvas.height = height * dpr;

  gl.viewport(0, 0, width * dpr, height * dpr);
}

function compile(shader, source) {
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error(gl.getShaderInfoLog(shader));
  }
}

function setup() {
  const vs = gl.createShader(gl.VERTEX_SHADER);
  const fs = gl.createShader(gl.FRAGMENT_SHADER);

  program = gl.createProgram();

  compile(vs, vertexSource);
  compile(fs, fragmentSource);

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
  }

  vertices = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0];

  buffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  const position = gl.getAttribLocation(program, "position");

  gl.enableVertexAttribArray(position);
  gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

  time = gl.getUniformLocation(program, "time");
  touch = gl.getUniformLocation(program, "touch");
  pointerCount = gl.getUniformLocation(program, "pointerCount");
  resolution = gl.getUniformLocation(program, "resolution");
}

function draw(now) {
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  gl.uniform1f(time, now * 0.001);
  gl.uniform2f(touch, ...getTouches());
  gl.uniform1i(pointerCount, touches.size);
  gl.uniform2f(resolution, canvas.width, canvas.height);
  gl.drawArrays(gl.TRIANGLES, 0, vertices.length * 0.5);
}

function getTouches() {
  if (!touches.size) {
    return [0, 0];
  }

  for (let [id, t] of touches) {
    const result = [dpr * t.clientX, dpr * (innerHeight - t.clientY)];

    return result;
  }
}

function loop(now) {
  draw(now);
  requestAnimationFrame(loop);
}

function init() {
  setup();
  resize();
  loop(0);
}

document.body.onload = init;
window.onresize = resize;

    </script>
</body></html>
        ` }} />
      )}
    </>
  );
};

export default LoadingPage;
