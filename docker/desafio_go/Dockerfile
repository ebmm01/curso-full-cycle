# Create build stage based on buster image
FROM golang:1.19.4-alpine3.16 AS builder

WORKDIR /app

COPY hello_world.go ./

RUN CGO_ENABLED=0 go build -ldflags="-s -w" hello_world.go

FROM scratch AS runner

WORKDIR /app

COPY --from=builder /app/hello_world ./

ENTRYPOINT ["/app/hello_world"]