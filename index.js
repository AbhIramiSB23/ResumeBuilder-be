const jsonServer=require('json-server')
// common js
const server = jsonServer.create()
// create a server using json-server

server.use(jsonServer.defaults())
// defaukts return middlewaer (parsing,strimngify,resource sharing btw diff origibs)used by json server-tells our server to use these middlewear

const route = jsonServer.router('db.json')
// tels the place where the data should be saved

server.use(route)

server.listen(3000,()=>{
    console.log('server is running on ths portno 3000')
})