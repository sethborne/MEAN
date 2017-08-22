# Assignment 02: Retro Bar Generator

### Retro Barcode Generator
Create an application which will present the user a row of colored boxes. 

The colors should be in random order. One way to accomplish this is to create an array of random colors in your app.component.ts file and use them with interpolation. (You can find color names from https://www.w3schools.com/colors/colors_names.asp).

### Notes:

In this file:

app.component.ts
```
1. **DO NOT** change numberOfColors:
    
    This array is limited to 25 values, as the hue is iterated each turn of the loop.  right now the function/array wont generate valid hsl values past the integer 25.
    
2.  **DO** change numOfTiles

    This will change the overall number of Tiles, if you want more or less, adjust accordingly.
    
3.  **DO** change the h, s, l variables under the makeColorArray() function.

    These values will give you different color tones, which will also be reflected in the numbers that output per tile
```
