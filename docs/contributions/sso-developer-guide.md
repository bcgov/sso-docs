---
title: Pathfinder SSO Developer Guide
sidebar_position: 2
--- Learn how to set up and run local environment 



## Setting up the local development environment

- [`asdf`](https://asdf-vm.com/#/core-manage-asdf) is a tool to manage the required packages with specific versions.
- All the packages are defined in `tool-versions`

## Installation

1. If running ubuntu, make sure that you have all the following packages installed.
   - `sudo apt-get install libsqlite3-dev bzip2`
   - `sudo apt-get install icu-devtools`
   - `sudo apt-get install uuid-dev`
1. Install `asdf` according to the `asdf` installation guide.
   - https://asdf-vm.com/#/core-manage-asdf?id=install
1. Install `asdf` packages defined in `.tool-versions`.
   ```sh
      cat .tool-versions | cut -f 1 -d ' ' | xargs -n 1 asdf plugin-add || true
      asdf plugin-update --all
      asdf install
      asdf reshim
   ```
1. Confirm the libraries have been properly installed by running `asdf current`. The output will tell you if any packages failed to download.
1. Run `pip install -r requirements.txt` to install python packages
   - _**Note:** If running into as asdf error, try running `asdf reshim`_
1. Run `pre-commit install`
1. Run `gitlint install-hook`

## Run Locally

- Install dependencies

  ```sh
   npm install or yarn
  ```

- Start the server

  ```sh
  npm run start or yarn start
  ```
