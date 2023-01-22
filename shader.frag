precision highp float;

uniform vec2 u_resolution;
uniform float u_time;

  void main() {
    // float r = 3.0;
    // float g = gl_FragCoord.x / u_resolution.x;
    // float b = gl_FragCoord.y / u_resolution.y;

    // gl_FragColor = vec4(r, g, b, 1.0);

    vec2 uv = (gl_FragCoord.xy - u_resolution.xy) / u_resolution.y;
    vec3 col = vec3(0.0);
    float freq = sin(u_time) * 0.15;

    uv.x += sin(uv.y * 1.0 + u_time / 1.5) * freq;
    uv.y += cos(uv.x * 1.0 - u_time / 2.0) * freq;
    col.r = smoothstep(1.0, 0.1, length(uv));

    uv.x -= sin(uv.y * 2.0 - u_time / 2.0) * freq;
    uv.y += cos(uv.x * 1.0 + u_time / 1.5) * freq;
    col.g = smoothstep(1.0, 0.3, length(uv));

    uv.x += cos(uv.y * 1.0 + u_time / 3.0) * freq;
    uv.y -= sin(uv.x * 1.0 + u_time / 2.0) * freq;
    col.b = smoothstep(1.0, 0.5, length(uv));

    gl_FragColor = vec4(col, 3.0);
}

// #ifdef GL_ES
// precision mediump float;
// #endif

// uniform vec2 u_resolution; // This is passed in as a uniform from the sketch.js file

// void main() {

//   // position of the pixel divided by resolution, to get normalized positions on the canvas
//   vec2 st = gl_FragCoord.xy / u_resolution.xy; 

//   // Lets use the pixels position on the x-axis as our gradient for the red color
//   // Where the position is closer to 0.0 we get black (st.x = 0.0)
//   // Where the position is closer to width (defined as 1.0) we get red (st.x = 1.0)

//   gl_FragColor = vec4(st.x, 0.0, 0.0, 1.0); // R,G,B,A

//   // you can only have one gl_FragColor active at a time, but try commenting the others out
//   // try the green component

//   //gl_FragColor = vec4(0.0,st.x,0.0,1.0); 

//   // try both the x position and the y position

//   //gl_FragColor = vec4(st.x,st.y,0.0,1.0); 
// }