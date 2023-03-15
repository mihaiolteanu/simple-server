import server from "fastify"
import cors from '@fastify/cors'

const HOST = process.env.HOST || "127.0.0.1";
const PORT = parseInt(process.env.PORT || "4005"); 

server()
  .register(cors)
  .get("/", async (_req, _reply) => ({ greeting: "Hello, me!" }))

  .listen({ port: PORT, host: HOST }, () =>
    console.log(`Running on http://${HOST}:${PORT}`))

