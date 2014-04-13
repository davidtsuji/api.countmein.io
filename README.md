# api.countmein.io

## Dependencies

1. node.js (nodejs.org)
2. gulp (`[sudo] npm install -g gulp`)

## Setup

```bash
make
```

or

```bash
npm install
gulp
```

## Build 

```bash
gulp
```

### Release

```bash
make release
```

## Run the server and watch for changes

```bash
gulp run
```

## Cleanup

```bash
gulp clean
```

or

```bash
make clean
```

## Deployment

Assuming the server has your public key in the authorized list...

```bash
git remote add server git@countmein.io:api.countmein.io.git
git push server master
```