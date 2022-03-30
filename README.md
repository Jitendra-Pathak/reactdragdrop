
# DragDrop

This component provide a feature of drag and drop options to re-order. Which can easily manage using callback function.

## Browser support

- Internet Explorer  10+
- Edge 12+
- Chrome 4+
- Firefox 2+
- Opera 12+
- Safari 5+

## Size 

Size is less than 7KB

## Getting started

### Import component

```js
import DragList from 'dragdrop';
```


### Sample data

```js
  const dragListData = [
    {
      id: 'row-1',
      value: 'Hello'
    },
    {
      id: 'row-2',
      value: 'Welcome',
      draggable: false,
    }
  ];
```

> NOTE: `draggable: true(default)/false` key can be used for enable/disable the option from drag and drop.


### Component integration

```js
   <DragList
    containerId='colDrag'
    containerClass='colDragCustomClass'
    options={dragListData}
    reArrangeCallback={}
    customTemplate={getDragRowAction}
  />
```

### Custom Templates

```js
  const getDragRowAction = (data) => {
    return <p>Custom Template: {data.value}</p>
  };
```

## Options

| Name                | Type     | Description                                                             |
| ------------------- | ---------| ----------------------------------------------------------------------- |
| `containerId`       | string   | `used as a drop area container id`                                      |
| `containerClass`    | string   | `you can customize style using this container class`                    |
| `itemClass`         | string   | `you can customize style of <li> item`                                  |
| `options`           | Array    | `this is data for list`                                                 |
| `reArrangeCallback` | function | `callback: after DRAG_END you can received new structured data in this` |
| `customTemplate`    | function | `you can serve your custom UI component`                                |

## License
