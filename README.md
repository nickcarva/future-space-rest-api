<br>
<div align="center">
  <h4 align="center">
     FutureSpace REST API
  </h4>
</div>

---

In here, you can see and test the REST API of rocket launches from FutureSpace Inc.


## 🚀 Getting started

To clone and run the application, you will need to have [Git](https://git-scm.com), [Docker Engine](https://docs.docker.com/engine/install/) and [Docker-compose](https://docs.docker.com/compose/install/) installed on your machine. With all programs installed, run the following command lines:

```bash
# Pull the postgres docker image
$ docker pull postgres:13.4-alpine

# Pull the node docker image
$ docker pull node:14-alpine

# Clone this repository
$ git clone https://github.com/nickcarva/future-space-rest-api.git

# Access the repository
$ cd future-space-rest-api
```

Before start the server, you must copy `.env-sample` to `.env` and fill the environment variables based your data to access the pg database and the API.

```bash
# Run application 
$ docker-compose up --build -d

# Run all migrations (it's necessary just once)
$ docker exec future-space-rest-api_server_1 npm run typeorm migration:run
```


## 🚫 How to stop the containers and the application

```bash
# Stop application 
$ docker-compose down
```


## 🔑 API Key

So that you can access all the REST API endpoints, you must put an API key authorization header in the request. This API Key is registered in the `.env` file (just for a representation of security).
<br>
The header key is 'api-key'.

<p align="center">
  <img alt="api-key-representation" src="./.github/assets/api-key-representation.jpg" width="500">
</p>


## 📍 REST API

`GET /`: Return the message "REST Back-end Challenge 20201209 Running"

`PUT /launchers/:launch_id`: Update a launch data

`DELETE /launchers/:launch_id`: Delete a launch

`GET /launchers/:launch_id`: Show a launch data

`GET /launchers`: List all launches


## ⏱ Launches imports schedule

So that we can have all launches updated, a schedule is set to everyday at 6:30 AM +00 for import all launches from the Space Devs API. When testing this project, you can change the schedule time in `src/schedules/LaunchesImporterSchedule.ts` using the [node-schedule CRON](https://www.npmjs.com/package/node-schedule) rules.
