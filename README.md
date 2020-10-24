# async-frameworks
A benchmark comparing performance of async/await in different HTTP frameworks

 - **Express** v4.17
 - **Koa** v2.13 + koa-router v9.4
 - **Fastify** v3.7
 - **Hapi** v17.8
 - **LoopBack** v3.27
 - **LoopBack next**: core v2.11; repository v3.1; rest v8.0

## Results

Processor:  3.20 GHz Intel i5-4460
Memory: 16 GB 1600 MHz DDR3

### Requests per seconds

framework|rps
-|-:
hapi | 6183
fastify | 8337
koa | 7572
express | 3977
loopback | 1986
loopback-next | 1229

### Latency

_Time to handle a request in milliseconds._

framework|latency
-|-:
hapi | 1.13
fastify | 0.84
koa | 0.97
express | 2.02
loopback | 4.54
loopback-next | 7.66

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

## TODO

Update hapi -> @hapi/hapi
