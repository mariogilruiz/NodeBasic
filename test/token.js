const { jwtDecode } = require("jwt-decode");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MWZjMjlhYjBhNGQ3YWY3MGUwZWQzOSIsImVtYWlsIjoiZmFjdWFzZHNhc2FuZG9AdGVzdC5lcyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzEzMzU3NTE0LCJleHAiOjE3MTM0NDM5MTR9.6IN7ASZMBgPnlAo79yC90wstoS75s8L62YZ5u8WxUUo";
const decoded = jwtDecode(token);

console.log(decoded.id);
