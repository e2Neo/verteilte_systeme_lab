# Distributed Systems Lab - Fabian Sonek

## Build

There are 2 variants to build, production and development.

To build the images of the development build, use ``docker compose build`` -> ``docker compose up -d``.
To build the images of the produciton build, use ``docker compose -f compose.prod.yaml build`` -> ``docker compose -f compose.prod.yaml up -d``

## Kubernetes

The configurations for kubernetes can be found in ``/kubernetes``. Note that the kubernetes config is using the namespace ``vs-lab`` which has to be created in the cluster first manually.
The application is running LIVE on my microk8s kubernetes cluster on my VPS.

The configuration consists of 4 stages:

### Volumes

Used to persist data in the cluster. Currently using a hostpath folder to store the database volume.

### Configmaps

Stores the database configuration.

### Deployments

Contain the actuall containers of the app.

### Services

Allow communication between containers and with the internet (LoadBalancers)
I used Loadbalancers in all 3 Services to allow access to public and to be able to access the database with pgadmin if needed. This needs to be configured too.

### Startup of the cluster

If not done already, use ``kubectl create namespace vs-lab`` to create the namespace in the cluster.

Now we need to apply the configurations by using ``kubectl apply -f kubernetes/<stage-name>`` e.g. ``kubectl apply -f kubernetes/configmaps``.

It is recommended to do it in the order of the above listed stages.

After changes of any configurations, use ``kubectl rollout restart <resource>`` to restart the app

NOTE: This also creates backend and database. They can be removed if needed.

## 12 Factor Application

### I. Codebase

The codebase is in the public GitHub repository: https://github.com/e2Neo/verteilte_systeme_lab

### II. Dependencies

The dependencies of the application are listed in ``./frontend/package.json`` and managed by ``npm``

### III. Config

The database config is only extracted for the kubernetes deployment as a configmap, not for local development, since the volume is created in a folder of the hostpath and therefore accessible anyways. 
The env file in kubernetes is in form of a configmap and for local development inside of the compose files.

### IV. Backing services

The URL of the Backend API is interchangeable by changing the environment variable ``BACKEND_URL`` in kubernetes deployment or docker compose depending on dev or prod.

### V. Build, release, run

There is no mechanism to create specific releases. This has to be done manually by the admin (or by a pipeline)

### VI. Processes

The processes are stateless, all data is saved in the database only. No usage of localstorage ect.

### VII. Port binding

The Frontend port is bound to 3000. I know, default for browser applications is 80 but i intend to run a different app on that port.

### VIII. Concurrency

The frontend is fully scalable. For my backend, which i use for the app to run, it is not properly implemented yet.

### IX. Disposability

The app usually starts pretty fast and can be stopped or startet at any time.

### X. Dev/prod parity

Both are built with the same multi-staged Dockerfile. Different environment variables might be used.

### XI. Logs

Toast messages are used to notify the user additionally to console logging in the browser.

### XII. Admin processes

As this is a frontend app without login ect. we dont have admin processes here.

## Improvements to be made

Secure credentials with secrets. Since this is a uni project which is not going to be used, I did not do this.

Fix backend - database deployments:

I had connection issues between database and backend, which i could only solve by placing both containers into the same deployment at the time.
This can definetly be improved, but i currently dont have time for it. The current version is working fine, but the backend doesnt scale well.
