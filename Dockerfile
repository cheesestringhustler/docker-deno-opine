FROM hayd/alpine-deno:1.4.6

EXPOSE 8000

WORKDIR /app

USER root

COPY deps.ts .
RUN deno cache deps.ts

RUN deno install -qAf --unstable https://deno.land/x/denon@2.4.4/denon.ts
ENV PATH="/home/deno/.deno/bin:${PATH}"

CMD ["run" ,"--allow-net", "--allow-read", "server.ts"]