const { io } = require("socket.io-client");

const socket = io("ws://localhost:4000");

socket.onAny((event, ...args) => {
  console.log("got it", event, args);
});

// socket.onAny((event,...args)=>{
//     console.log("got it",event,args)
// })
