# Simple Components | Map

Map to use on indoor location systems.


## Demo


![](https://anonymousart.s3.amazonaws.com/ezgif.com-gif-maker+(1).gif)


## Install

```
npm install simple-components-map
```

## Usage
### Example with minimal attributes
```
import { SimpleMap } from 'simple-components-map'
<Map
            img={mapa}
            relation={100}
          />
```

### Complete example
```
import { SimpleMap } from 'simple-components-map'
<SimpleMap
            img={mapa}
            relation={100}
            objects={objects}
            generateData={generateData}
            refreshFrequence={2}
          />
```

## Props
### `img: Image`
Map picture
### `relation: number`
Real size/picture relation represented on cm,  1/100 on example
### `objects?: []`
Array of objects. Each object must have img, x and y attributes
### `generateData?: func`
Function that returns the new values of all objects
### `refreshFrequence?: number`
Data refresh frequence represented on seconds. If an object has the same values of the previous refresh, it will not be updated.