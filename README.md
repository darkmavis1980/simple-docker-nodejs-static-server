# Plugins static webserver

The purpose of this repository is to run the [Plugins repositories](https://bitbucket.org/account/user/pondfive/projects/PLUG) (with the exception of the `webextension` one) without the need of having a webserver installed on your machine, but just using a docker image or Node.js.

> **This should be used only for development purposes**

## Usage

### Folder structure

This repository is supposed to live beside the other ones, so for example if you have a folder with your other plugins apps, it should be at the same level, here an example:

```
.
├── FCPX
├── adobe
├── ...
├── pond5_shared
└── p5-app-server
```

### Run the container

To run the container in verbose mode, you can simply run the following command:

```bash
docker-compose up
```

If you want to demonize the service, just add the flag `-d`, so you can simply start it and forget about it:

```bash
docker-compose up -d
```

In case you want to refresh the main container, in case you have done any changes, add the `--build` flag:

```bash
docker-compose up --build
// OR demonized
docker-compose up -d --build
```

### Run from your machine with Node.js

If you don't want to run it with Docker, no problem, I got you covered, you can run it locally with Node.js, just run the following command:

```
npm start
```

### Access in the browser

Once you started the docker container or the npm script, the server will be available at the port **8100**, and it serves the parent folder, so for example if you want to access to the **FCPX** folder, just go to the following address:

```
http://localhost:8100/FCPX
```