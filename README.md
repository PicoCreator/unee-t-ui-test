# What's in this repo:

UI test scripts, inside the `test` folder, for unee-t.com

This project is kept as a git copy of the online project editor, and provides serveral simple command to facilitate the process.

To use this, you will need to setup your uiliciosu account settings, and run the respective command.

# How do I set this up?:

First install the global uilicious-cli node module dependency, via the following command.

`npm install -g uilicious-cli`

Next would be to configure the auth details for this project.

There are 2 methods of setting this up. Either via the config file (for local usage) or via environment variable (Travis / Jenkins).

For environment variable setup, use the following variables 

+ `UILICIOUS_EMAIL` Account email for authentication, do ensure for public CI that this is configured as "private"
+ `UILICIOUS_PASS`  Account password for authentication, do ensure for public CI that this is configured as "private"
+ `UILICIOUS_PROJ`  Optional project space setting, defaults to `unee-t..com`

Alternatively you can configure `uilicious-config.sh`, with the following below.
This file will be git-ignored, to prevent accidental credential commits.

```
UILICIOUS_EMAIL="auth email",
UILICIOUS_PASS="auth password",
UILICIOUS_PROJ="project namespace to use"
```

Note that in event that both environment variables, and config file is used. 
Config file should take priority.

# Handling of duplicate data inside uilicious platform?

Until git integration is rolled out on uilicious. This git repository would be considered the "single source of truth".