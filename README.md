<h1 align="center">
<img width="40" valign="bottom" src="https://angular.io/assets/images/logos/angular/angular.svg">
Angular Communities
</h1>
<h4 align="center">A list of all the Angular Communities around the world</h4>

<p align="center">
  <img src="./docs/angular-communities-0.1.0.gif" alt="angular-communities 0.1.0 gif" />
</p>

---

> This repo contains a list of all the Angular Communities around the world, if you host a meetup and would like to be listed please follow the steps to [add your community](#add-your-community):

## Table of Contents

- [Features](#features)
- [Add Your Community](#add-your-community)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

<a name="features"></a>

# :heavy_check_mark: Features

- **Meetups in the Map:** Meetups appear on Google Maps.

- **Geolocation:** Geolocation to find communities near you.

- **Search:** Meetups search engine by name and map displacement.

<a name="roadmap"></a>

# :crystal_ball: Roadmap

- [x] Release 0.1.0 !
- [ ] Improve code
  - [ ] Improve performance
  - [ ] Improve performance even more!
- [ ] A lot of meetups
  - [ ] +100 Meetups
  - [ ] +500 Meetups
  - [ ] +1000 Meetups
- [ ] PWA
- [ ] Conferences version

<a name="#add-your-community"></a>

## Add Your Community

Fork this repo so you can commit directly to your account and submit a Pull Request to include your meetup.

Access the `assets/json/communities.json` file and add your meetup.

> Please see the following example for reference on how to add the correct information about your meetup.

```js
 "Angular Málaga": { // Meetups name
    "id": 1, // The last id that you see in the file + 1 (this is your id =D)
    "name": "Angular Málaga", //// Meetups name
    "position": { // Latitude and Longitude
      "lat": 36.72016,
      "lng": -4.42034
    },
    "image": "assets/images/1.png", // Your logo (if you don't logo don't worry and remove this property. We will display the Angular logo instead of the Google Maps marker.)
    "twitter": "https://twitter.com/AngularMalaga", // Meetup's twitter
    "web": "https://sites.google.com/view/angular-malaga/", // Meetup's web
    "description": "We are a spanish community formed by a group of amazing people. Our goal is to share our Angular/Javascript knowledge with anyone who wants to learn about these amazing technologies.", // Nice description of your group (A few words)
    "organizers": [  // List of organizers
      {
        "name": "Estefanía García Gallardo",     //name
        "twitter": "https://twitter.com/nyablk",  //twitter
        "github": "https://github.com/nyagarcia" // github
      },
      {
        "name": "Carlos Caballero González",
        "twitter": "https://twitter.com/Carlillo",
        "github": "https://github.com/caballerog",
        "webs": ["https://carloscaballero.io/"] // List of extra webs (blog or personal portfolio)
      }
    ]
  },
```

Finally you have to upload the logo of your meetup to the directory `assets/images/<id>.png`. Make sure the logo is transparent for a better view on the map.

<a name="contributing"></a>

# :revolving_hearts: Contributing

If you want to contribute check the [CONTRIBUTING.md](.github/CONTRIBUTING.md)

<a name="license"></a>

# :scroll: License

MIT © [Carlos Caballero](https://github.com/caballerog), [Nya García Gallardo](https://github.com/NyaGarcia) [Toni Villena](https://github.com/tonivj5/) and [Juan Torres Gómez](https://github.com/zaldih)

:cat::baby_chick:

---
