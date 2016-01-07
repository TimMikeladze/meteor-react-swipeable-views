# Install

`meteor add tmikeladze:react-swipeable-views`

This package exposes the [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views/) React component to Meteor.

## Usage

`meteor add react`

```js
const MyComponent = React.createClass({
  render() {
    return (
      <SwipeableViews>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </SwipeableViews>
    );
  },
});

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};
```

