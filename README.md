<h1 align="center">
<img width="40" valign="bottom" src="https://angular.io/assets/images/logos/angular/angular.svg">
Angular Communities
</h1>
<h4 align="center">A list of all the Angular Communities around the world</h4>

<p align="center">
  <img src="./docs/angular-communities-0.1.1.gif" alt="angular-communities 0.1.1 gif" />
</p>

---

> This repo contains a list of all the Angular Communities around the world. If you host a community and would like to be listed please follow the steps to [add your community](#add-your-community):

## Table of Contents

- [Features](#features)
- [Add Your Community](#add-your-community)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<a name="features"></a>

# :heavy_check_mark: Features

- **Communities in the Map:** Communities appear on Google Maps.

- **Geolocation:** Geolocation to find communities near you.

- **Search:** Community search engine by name and map displacement.

<a name="roadmap"></a>

# :crystal_ball: Roadmap

- [x] Release 0.1.0 !
- [ ] Improve code
  - [ ] Improve performance
  - [ ] Improve performance even more!
- [X] A lot of Communities
  - [ ] +100 Communities
  - [ ] +500 Communities
  - [ ] +1000 Communities
- [X] PWA
- [ ] Conferences version

<a name="#add-your-community"></a>

## Add Your Community

Fork this repo so you can commit directly to your account and submit a Pull Request to include your community.

Access the `assets/json/communities.json` file and add your community.

> Please see the following example for reference on how to add the correct information about your community:

```js
 "Angular Málaga": { // Communities name
    "id": 1, // The last id that you see in the file + 1 (this is your id :D)
    "name": "Angular Málaga", //// Community name
    "position": { // Latitude and Longitude
      "lat": 36.72016,
      "lng": -4.42034
    },
    "city" : "Málaga"
    "image": "assets/images/1.png", // Your logo (if you don't have a logo don't worry. Remove this property and we will display the Angular logo for you.)
    "twitter": "https://twitter.com/AngularMalaga", // Community's twitter
    "web": "https://sites.google.com/view/angular-malaga/", // Community's web
    "description": "We are a spanish community formed by a group of amazing people. Our goal is to share our Angular/Javascript knowledge with anyone who want to learn about these awesome technologies.", // Nice description of your group (A few words)
    "organizers": [  // List of organizers
      {
        "name": "Estefanía García Gallardo",     // Name
        "twitter": "https://twitter.com/nyablk",  // Twitter
        "github": "https://github.com/nyagarcia" // Github
      },
      {
        "name": "Carlos Caballero González",
        "twitter": "https://twitter.com/Carlillo",
        "github": "https://github.com/caballerog",
        "webs": ["https://carloscaballero.io/"] // List of extra webs (blog or personal portfolio) that you want displayed
      }
    ]
  },
```

The last step is to upload the logo of your community to the directory `assets/images/<id>.png`. Make sure the logo is transparent (eg .png format) for a better view on the map.

<a name="contributing"></a>

# :revolving_hearts: Contributing

If you want to contribute check out the [CONTRIBUTING.md](.github/CONTRIBUTING.md)

<a name="license"></a>

# :scroll: License

MIT © [Estefanía García Gallardo](https://github.com/NyaGarcia), [Carlos Caballero González](https://github.com/caballerog), [Toni Villena](https://github.com/tonivj5/) and [Juan Torres Gómez](https://github.com/zaldih)

:cat::baby_chick:

---
