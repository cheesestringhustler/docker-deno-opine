# Docker Deno REST api

Docker DENO & Opine Rest API experiment

### Tech

* [docker] - Docker provides a simple and powerful developer experience, workflows and collaboration for creating applications
* [deno] - Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.
* [Opine] - MFast, minimalist web framework for Deno ported from ExpressJS.


### Installation

Requires [Docker](https://www.docker.com/) to run, and avoid install Deno, already have docker-compose configurated

```sh
$ docker-compose build
$ docker-compose up deno
```

Visit

```sh
http://localhost:8000/
```


### Endpoints

```sh
http://localhost:8000/
```

```sh
http://localhost:8000/api/v1/movies
```


### Work TODO

- [ ] Unit Testing
