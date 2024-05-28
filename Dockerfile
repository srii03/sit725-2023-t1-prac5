from node
WORKDIR /app
copy . .
expose 3000
run npm install
cmd ["npm","start"]