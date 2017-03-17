# TGDF 2017 Official Website

## Requirement

* Node.js 7.0+
  * Yarn
* Ruby 2.3+

## Build

To build static assets, please run below command.

```bash
$ npm run build
```

The generated files will put into `/public` directory, please didn't remove it from git.

## Development

To setup development, please run below command.

```bash
$ yarn install
```

To run development server, please run below command.
The server will hosted on `http://localhost:3000`

```bash
$ npm run dev
```

To test production mode, use below commands.
The production mode use pre-build assets, and render static page when first request.

```bash
$ npm run build
$ npm start
```

## Deploy

To deploy to EC2 server, please install Ruby to use Capistrano.

```bash
$ gem install bundler # If you didn't have bundler
$ bundle install
```

Then, setup the SSH Key for deploy.

```bash
$ ssh-add /path-to-deployer-ssh-key
```

And build new static assets and push to Github, the production will use `master` branch.

```bash
$ npm run build
$ git add .
$ git commit -m "Some comment about this deploy"
$ git push origin master
```

And now, you can use below command to deploy the latest version.

```bash
$ cap production deploy
```

And wait a minutes, the latest version will on the `htts://2017.tgdf.tw`
