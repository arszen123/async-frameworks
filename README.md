# async-frameworks
A benchmark comparing performance of async/await in different HTTP frameworks

 - **Express** v4.17
 - **Koa** v2.13 + koa-router v9.4
 - **Fastify** v3.7
 - **Hapi** v20.0
 - **LoopBack** v3.27
 - **LoopBack next**: core v2.11; repository v3.1; rest v8.0
 - **Sails**: v1.4 (Minimal: generated with cli --minimal option; Without rc: self configured)

## Results

Processor:  3.20 GHz Intel i5-4460
Memory: 16 GB 1600 MHz DDR3

### Requests per seconds

framework|rps
-|-:
hapi | 6791
fastify | 8464
koa | 7558
express | 3955
loopback | 2013
loopback-next | 1258
sails (Without rc) | 557
sails (Minimal) | 2081

### Latency

_Time to handle a request in milliseconds._

framework|latency
-|-:
hapi | 1.04
fastify | 0.8
koa | 0.97
express | 2.04
loopback | 4.5
loopback-next | 7.35
sails (Without rc) | 17.44
sails (Minimal) | 4.34

Async/await is not the bottleneck!

## Usage

```
# Install dependencies
npm i
# Build docker image
docker build .
# Run docker image
docker run [image]
```
