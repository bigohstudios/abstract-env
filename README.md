abstract-env
============

abstract-env gives a single interface to get configuration information from either a file or from process.env.

It was inspired by nconf, but is stripped down to simply handle abstracting away the source on configuration.

This was born out of working with Heroku and not wanting to actually load things into the environment for development but still not check sensitive credentials into source control.

Documentation at (http://bigohstudios.com/abstract-env).
