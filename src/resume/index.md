---
lang: en-US
---
# Resume - For those looking to hire me

Welcome! Glad to see you've followed the link in my resume to further review my work, and am happy to introduce myself here.

My name (on GitHub at least) is [`confused-Techie`](https://github.com/confused-Techie). I have been programming for as long as I can remember, and have been focused on technology and the general IT sector since I've entered the workforce.

This page here is where I can hope to highlight some of my programming based accomplishments that may otherwise be difficult to express on a short resume.

Make sure to check out my other pages above!
* [About Me](/about_me/)
* [My Perfect Tech Stack](/#my-perfect-tech-stack)

---

## What am I doing now

Currently, I serve as one of the Core Developers and the Core Backend Developer for [Pulsar](https://github.com/pulsar-edit/).
Pulsar is the Community-led Hyper-Hackable Text Editor. Pulsar was born out of the sunset of GitHub's very popular Atom text editor.
With Pulsar being the de-facto fork for users of Atom to turn to. Currently with nearly `2,000` stars on GitHub, and nearly `600` users on Pulsar's Discord.

My first responsibility for the project was to create the `Pulsar Package Registry`. One of the major benefits of Atom was the massive collection of community packages made for it.
These packages could provide new themes, features, language support right within the editor.

But, unfortunately while the project of Atom was open source, the only aspect that had never had any code publicly shared was the backend. The service that allowed users to publish and install packages from.

So days after the sunset I began my work to create and implement a package registry that would be able to accomplish the needs of our new Pulsar text editor, while also being able to serve as a way for Atom users to install packages from.

With no code for reference, I began to test the existing API to determine how it behaved, and how I believed it was created.

Within a few short months I was able to build and scale a backend that could accomplish everything Atom's originally did. Even being able to collect all the packages that had existed on Atom before.

This meant within a few short months I was able to build our backend, storing over `12,000` community packages, allow account creation on the service, and even allow package maintainers to manage the packages they had previously published to Atom.
As no small feat I worked tirelessly on creating this service, which now serves over `50,000` requests daily.

From here I've also created the [`package-frontend`](https://github.com/pulsar-edit/package-frontend) a [website](https://web.pulsar-edit.dev) that allows anyone to view all of the available packages for the Pulsar text editor.

With this being one of my largest to date undertakings in a single project where (as of the time of writing) I've submitted over 1,075 commits, with `159,780` additions and `119,141` deletions. Having well over `140,000` additions to the codebase than any other contributor to the project.

If you'd like to learn more about the specifics of the Pulsar Package Registry project:
  * [`package-backend` Contributors Graph](https://github.com/pulsar-edit/package-backend/graphs/contributors)
  * [`package-backend` Source Code](https://github.com/pulsar-edit/package-backend/)
  * [My Blog Post detailing the creation of this](https://pulsar-edit.dev/blog/20221127-confused-Techie-SunsetMisadventureBackend.html)

But at this time while still serving as the Core Backend Developer of Pulsar, I also spend significant time interacting with users filing issues, or reviewing PRs.
Additionally managing the entirety of our services hosted in the cloud, being our DNS admin, and Database admin.
Even further helping guide conversation and polls for new features, and managing our Open Collective account, where we have received over `$4,000 USD` in donations from the community.

Beyond this for our frontend website to the Pulsar Package Registry I've been the initial creator and architect of the website, and created all of the microservices our organization relies on.
Where our microservices may [run automated cleanup on our Database](https://github.com/pulsar-edit/package-frontend/tree/main/microservices/auth-state-cleanup), or [provide the single download link,](https://github.com/pulsar-edit/package-frontend/tree/main/microservices/download)
for our rolling software release model, or even providing [custom OG Graph Image Cards](https://github.com/pulsar-edit/package-frontend/tree/main/microservices/social-cards) to show off the features of packages on the registry, to even the simpler microservices that may just be a [webhook bridge](https://github.com/pulsar-edit/package-frontend/tree/main/microservices/webhooks) in-between incompatible services.

All of these microservices are hosted in Google Cloud, scaled as needed, and written as NodeJS Docker containers. Some even being fully standalone with zero additional dependencies, or others working with Google's Secret Manager API's to access keys.

Beyond all of this though, below I'll detail some of my personal projects to help show off what I was doing before Pulsar.

## quick-webserver-docs

[![QuickWebServerDocs Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=confused-Techie&repo=quick-webserver-docs&show_owner=true&theme=dark)](https://github.com/confused-Techie/quick-webserver-docs)

Quick-WebServer-Docs is a small project written in 100% JavaScript, running in a NodeJS Environment that provides the ability to generate Web Server API Documentation from JSDoc-Like comments within JavaScript code.

Made specifically for use within the `Pulsar Package Registry`, it does see some very light usage with about 10 downloads from NPM per week. Providing utility to those working with JavaScript based webservers.

## CompactIgnore

[![CompactIgnore Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=confused-Techie&repo=CompactIgnore&show_owner=true&theme=dark)](https://github.com/confused-Techie/CompactIgnore)

CompactIgnore was one of the earlier projects that aimed to build a reliable build tool for NodeJS developers.

Allowing it's users to define a single file `.compactignore` that would be able to automatic generate many of the other ignore files needed for development on many platforms.

CompactIgnore was written 100% in JavaScript, aimed at being used within a NodeJS environment, or otherwise invoked from the CLI.

At the time of writing it receives about 20 weekly downloads.

## Quotle

[![Quotle Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=confused-Techie&repo=Quotle&show_owner=true&theme=dark)](https://github.com/confused-Techie/Quotle)

Quotle came from the popularity of similar applications such as Wordle. Where instead of guessing words it's users would guess a movie based on six audio clips from the film.

Quotle was written in Golang, and using significant client side JavaScript. Hosted on Google Cloud's infrastructure to deliver the application to the many worldwide users.

Even to the time of writing when the application hasn't been updated in nearly a year, and there are still a handful of daily users.

If you'd like to play one of the games still available feel free to visit [Quotle.dev](https://quotle.dev/)!

## ParseWhatsApp

[![ParseWhatsApp Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=confused-Techie&repo=ParseWhatsApp&show_owner=true&theme=dark)](https://github.com/confused-Techie/ParseWhatsApp)

ParseWhatsApp was one of the first introductions into parsing massive amounts of text. The goal was to take an exported WhatsApp chat and turn it into machine readable data.

While this project wasn't aimed at being an end user application it was stable enough for several personal projects of mine and being able to easily and programmatically
get chat data to build statistics or to do sentiment analysis on.

ParseWhatsApp was written in JavaScript, using the NodeJS environment.

## GoPage

[![GoPage Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=confused-Techie&repo=GoPage&show_owner=true&theme=dark)](https://github.com/confused-Techie/GoPage)

GoPage was one of my bigger projects (at the time), intended to be "A simple Website Shortcut Dashboard written in Go.".
This project was used as the basis to learn Golang for the first time, creating yet again another Self Hosted application,
being a rather simplistic dashboard of links while being extremely extensible through many included plugins.

GoPage was written mainly in Golang, with client side JavaScript, full of custom built CSS (As in no CSS Framework was used), and made to run within Docker.

Some of the included plugins included:
* Status Check: Simple way to see if the address is currently reachable.
* Favicon Swiper: Retrieve Favicons via known methods or Google API's as a fallback.
* Jellyfin API: Get information about your Jellyfin Instance.
* Pihole API: Get information from your Pihole instance.
* AQI Current: Get Air Quality Information at a glance. Via AriNow.gov.

Additionally GoPage was one of the first projects I paid great attention to ensuring it was usable for as many people as possible.
Having GoPage successfully and completely localized in the following languages:
* Arabic
* Chinese (Traditional)
* English
* French
* German
* Japanese
* Korean
* Russian
* Spanish (Mexico)

## Tabby

[![Tabby Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=confused-Techie&repo=tabby&show_owner=true&theme=dark)](https://github.com/confused-Techie/tabby)

Tabby was one of my earliest public projects, aiming to be "... a Self Hosted way to save and manage Bookmarks.".

Tabby was an application that would be hosted within Docker on a users own server hardware, and could be interacted with by visiting the website directly.
Or by using one of the many available extensions. With the major appeal being rather than managing and keeping your bookmarks as a static list of text, Tabby would scrape the websites added.
Using OG Graph data, as well as other HTML parsing techniques to display titles, descriptions, website names, favicons, and more.

Tabby was written mainly in `C#`, while it's web browser extensions were all made in JavaScript. The application was made to run within Docker.

As of the time of writing:

* Tabby has received 130 downloads on the [Docker Hub](https://hub.docker.com/r/lhbasics/tabbydocker).
* Tabby's Chromium Extension was published to:
  - [Chrome Web Store](https://chrome.google.com/webstore/detail/tabby-chrome-extension/ifjdlkpicmjmojpfnnegehnkblbjhnad?hl=en)
  - [Opera addons](https://addons.opera.com/en/extensions/details/tabby-extension/)
  - [Edge Add-ons Beta](https://microsoftedge.microsoft.com/addons/detail/tabby-edge-extension/obbjajbinlombefaffnlmmkapbendfmn)
* Tabby's Firefox Extension was published to:
  - [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tabby-extension/)
