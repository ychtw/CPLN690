# Final Project Proposal

Your assignment this week is to write a detailed proposal for your final
project. In proposing your final, try to address each of the following
areas.


## Problem / Question

I would like to create an application that allows users to explore and analyze vehicle crashes in Philadelphia more easily.

## The data

I will be using crash dataset on Open Data Philly: https://www.opendataphilly.org/dataset/vehicular-crash-data
Other data sets such as census block group and street centerline are also available on Open Data Philly.
I might create another geojson file for the buffer of street intersections.

## Technologies used

I will be using most of the tools covered in this class: jQuery, underscore, CartoDB, turf.js, draw.js, etc.

## Design spec

#### User experience

At a high level, how do you expect people to use your application?
- Who are the users?
  While the target users are transportation planners at city government or private consultants who want to perform transportation safety analysis, the application can also inform general public about traffic safety of their neighborhoods.
- What do they gain from your application' use?
  This tool will allow transportation analysts perform transportation safety analysis more easily.
  (The major benefit will be time saving).
- Are there any website/application examples in the wild to which you can compare your final?

#### Layouts and visual design

The layout of my application will be: map with a sidebar, follows by information dash boards at the bottom.

## Anticipated difficulties

- Dealing with queries from multiple datasets. Sometimes the CartoDB queries do not work properly when I have multiple datasets read in the application.
- Re-Rendering polygon colors when user submit queries.
- Redrawing crash points and polygons when users submit queries.
- Summarizing crash info, such as crash density, listing most dangerous intersections or census tracts.
- Transform geojson to turf featurecollection and then filter the original geojson base on the result obtained from turf.js analysis.

## Missing pieces

We've only managed to scratch the surface of the available technologies
by which you could construct an application. What use-cases haven't we covered
that you think would be useful? What technologies not covered seem exciting to
you (you don't necessarily have to fully understand what they're for,
this is a chance for you to get our help interpreting a technology's
purpose/usage).
