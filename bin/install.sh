#!/bin/bash

npm install
[[ -f .env ]] || cp .env.sample .env
