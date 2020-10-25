# async-frameworks
A benchmark comparing performance of async/await in different HTTP frameworks

 - **Express** v4.17
 - **Koa** v2.13 + koa-router v9.4
 - **Fastify** v3.7
 - **Hapi** v20.0
 - **LoopBack** v3.27
 - **LoopBack next**: core v2.11; repository v3.1; rest v8.0
 - **Sails**: v1.4 (Minimal: generated with cli --minimal option; Without rc: self configured)
 - **Restify**: v8.5
 - **Nestjs**: v7.4

## Results

Processor:  3.20 GHz Intel i5-4460
Memory: 16 GB 1600 MHz DDR3

### Requests per seconds

framework|rps
-|-:
hapi | 6728
fastify | 8195
koa | 7306
express | 3994
loopback | 2015
loopback-next | 1240
sails (Without rc) | 538
sails (Minimal) | 2107
restify | 7229
nest | 2047

### Latency

_Time to handle a request in milliseconds._

framework|latency
-|-:
hapi | 1.04
fastify | 0.85
koa | 1
express | 2.02
loopback | 4.49
loopback-next | 7.49
sails (Without rc) | 18.06
sails (Minimal) | 4.28
restify | 0.99
nest | 4.38

Async/await is not the bottleneck!

## Usage

```
# Install dependencies
npm i
# Build docker image
docker build . --tag [image]
# Run docker image
docker run -v "$(pwd)":/app [image]
```
