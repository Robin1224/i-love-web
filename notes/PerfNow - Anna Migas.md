# Thinking beyond Core Web Vitals
> User experience connected to the web performance as experienced in the harsh daily conditions

Performance affects anyone using old devices, people located in rural areas and anyone using an enterprise app that is hard to optimise. 

Unfortunately most web performance metrics and resources are developed with a priviliged user in mind. Usually it is thought of from a perspective of bad connection or experience being incidental, like losing connection in the metro, even though for most people this bad connection is a constant experience.

For many of these people, performance isn't about shaving off milliseconds, but about loading something at all. Good web performance for these users is simply not achievable at all.


### Secret Core Web Vital: Patience
> How long are you willing to wait for a website to load until you consider it broken?

It is conditional, dependent on your environment. If your internet is always slow and fundamentally poorer quality, you tend to be willing to wait longer for a website to load, while if you normally have very fast internet, you tend to be very impatient with website loading times.

### 1. Visibility of system status.

Give feedback to the user as fast/often as possible:
- What is going on?
- How long it can take
- Once error occurs (and what can be done)

Take into account digital literacy
- Use simple language
- Discourage damaging actions

### 2. Render initial information ASAP

- Load navigation first
- Use skeleton components

### 3. Leverage progressive enhancement

Make it possible to achieve the most crucial action first, add extra features and fireworks on top of that.

### 4. Avoid request chaining and round trips

Consider using resource hints.

- Preconnect
- Prefetch
- Preload

### 5. Cache

Serve statis resouces with a long Time To Load to avoid redownloading them on next visit.

### 6. Test for back/forward cache

If a user clicks on a navigation item by mistake, it can minimise the time to navigate back.

This happens automatically, unless you break it, that's why you should test it.

You can test back/forward cache in chrome devtools

### 7. Optimise images (and videos) you ship

Images are usually the heaviest resources on the web.

- Use correct and modern formats
- Use tools to optimise size:
  - imageoptim.com
  - squoosh.app
  - svgomg
- Add size/aspect ratio to avoid layout shift

### 8. Lazy load resources that are not critical

Avoid making the user load data they might not discover

### 9. Learn about network client hints

Network Information API helps you to access information about the user's netword and device.

You can for example check for:
- Low Data Mode 
   - For example you can choose to not ship images or ship only the pre-progressively enhanced version
- Device memory

React-Adaptive-Hooks

### 10. Limit third party resources

Load them using async and defer wheb pissible so they do not delay the first load of the page.

### 11. Consider using service worker

If you expect your page to be visited on regular basis, this can improve your caching.

### 12. Avoid creating too many layers

Each layer created by the browser takes device's resources. Same goes for DOM size. Consider using virtualisation for huge amount of items (or pagination). Fixed elements, iframes, etc will make more layers. Having more layers does make the web faster, but having too many makes your website slower.

There is a layers tool in chrome devtools under 'more tools'.

### 13. Break long tasks

Slow-running scripts are bad on low-powered devices. Implement strategies to break up long tasks. Memory capacity and CPU speed impacts the INP metric.