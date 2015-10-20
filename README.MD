# What is it?

This is a specific use application that allows for the control of the Phillips Hue bulbs in an apartment.  The goal is to make it easier to control a large number of lights and to arrange them by room, only allowing each housemate to control his/her lights as well as the lights in the common areas.

# How does it work?

First, the user logs in via Facebook. Then, the user can select to activate personal controls. This will display the light controls for the users personal room. When changing the color of a light, the RGB color values are converted into the closest color that the Hue bulbs are able to replicate. The color gamuts are linked below (Gamut A for light strips, Gamut B for A19 bulbs).

# Color limitations
Hue A19 bulbs tend to perform poorly with colors in the green range and with lighter blues. Hue light strips perform well everywhere except for in the violet range, where it will produce a color that is closer to pink.

To learn more about the RGB color selector: [Spectrum JQuery Color Selector](https://github.com/bgrins/spectrum)

To learn more about the color limitations of Hue lights: [Color gamut for Phillips Hue Bulbs](http://www.developers.meethue.com/sites/default/files/gamut_0.png) 

