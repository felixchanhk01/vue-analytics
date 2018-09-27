## Event tracking

Event tracking can be achieved in different ways, following Google specifications

passing parameters in this exact order

```js
this.$ga.event('category', 'action', 'label', 123)
```

an object literal is also possible

```js
this.$ga.event({
  eventCategory: 'category',
  eventAction: 'action',
  eventLabel: 'label',
  eventValue: 123
})
```

Google Analytics docs: [event tracking](https://developers.google.com/analytics/devguides/collection/analyticsjs/events)

## Send tracking either Piwik or GA only

Adding extra arguments behind can be used to specify which tracking endpoint to send. Please make sure both `piwik` or `ga` exists inside the object.

```js
this.$ga.event('category', 'action', 'label', 123, 
  {
    piwik: true,
    ga: false
  })
```

