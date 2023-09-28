# leaflet-challenge

![1-Logo](https://github.com/Natphipps/leaflet-challenge/assets/130694752/27969520-f94d-43ed-b1a8-283efe23913e)

# Project Overview

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# USGS earthquake data 

Link : http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

# Create the Earthquake Visualization

![image](https://github.com/Natphipps/leaflet-challenge/assets/130694752/66bbdc59-7f18-437e-9491-0f9cb290298b)

1. get the dataset from USGS geoJSON feed
   - for this project I used all earthquake data from the past 7 days.

2. import and visualize the data
   - Use Leaflet to create a map that plots all the earthquakes from the dataset based on their coordinates.
   - Data Markers should reflect the magnitude of the earthquake by their size and depth of the earthquake color. Earthquakes with higher magnitudes will appear larger, and earthquakes with greater depth should appear darker in color.
   - By clicking on a marker, a popup should appeat that provides information about the earthquake including its location, magnitude, and depth.
   - A legend is provided for context.

# Technologies

Javascript

CSS

HTML

Leaflet

# Resources

Syntax help was taken from in-class activities.
The legend syntax was provided by Leaflet documentation.


