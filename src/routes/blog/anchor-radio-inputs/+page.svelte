<script>
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { utils, stagger } from "animejs";

  import DraggableBox from "$lib/components/atoms/DraggableBox.svelte";
  import Paragraph from "$lib/components/atoms/Paragraph.svelte";
  import AnchorDemo1 from "$lib/components/atoms/AnchorDemo1.svelte";
  import AnchorDemo2 from "$lib/components/atoms/AnchorDemo2.svelte";

  let backRef;
  let titleRef;
  let blockRef1;
  let blockRef2;
  let blockRef3;
  let blockRef4;
  let blockRef5;
  let blockRef6;
  let blockRef7;
  let blockRef8;
  let blockRef9;
  let blockRef10;
  let blockRef11;
  let blockRef12;
  let blockRef13;
  let blockRef14;

  const animationSpeed = 70;

  onMount(() => {
    let elements = [
      backRef,
      titleRef,
      blockRef1,
      blockRef2,
      blockRef3,
      blockRef4,
      blockRef5,
      blockRef6,
      blockRef7,
      blockRef8,
      blockRef9,
      blockRef10,
      blockRef11,
    ];

    utils.set(elements, {
      opacity: 1,
      delay: stagger(animationSpeed),
    });
  });

  onNavigate((navigation) => {
    let elements = [
      blockRef11,
      blockRef10,
      blockRef9,
      blockRef8,
      blockRef7,
      blockRef6,
      blockRef5,
      blockRef4,
      blockRef3,
      blockRef2,
      blockRef1,
      titleRef,
      backRef,
    ];

    return new Promise((resolve) => {
      utils.set(elements, {
        opacity: 0,
        delay: stagger(animationSpeed),
        onComplete: resolve,
      });
    });
  });
</script>

<div class="back-button" bind:this={backRef}>
  <a href="/blog"> back to blog </a>
</div>

<div class="title" bind:this={titleRef}>
  <h1>css-only anchor() based radio selector animation</h1>
</div>

<Paragraph bind:ref={blockRef1} --bg="var(--blue)">
  <p>
    Trying to use the new anchor positioning in CSS can be a little intimidating
    at first. Once you do grasp the basics of it however, it's a very versatile
    and powerful attribute.
  </p>
  <p>
    It allows us to position an element relative to another element no matter
    where it is in the viewport, which is mostly meant for hovering elements
    like tooltips.
  </p>
  <p>
    However, with a little bit of creativity, it can be used to create some
    really interesting effects which previously were not possible without
    Javascript.
  </p>
  <p>
    One of the main things which makes it so useful, is that the anchor which an
    element is bound to can be transitioned between. This allows us to easily
    transition the position of one element to that of another.
  </p>
  <p>
    One of the first things I wanted to try with this approach, was to create a
    radio selector with a moving indicator:
  </p>
</Paragraph>

<AnchorDemo1 bind:ref={blockRef2} />

<Paragraph bind:ref={blockRef3} --bg="var(--yellow)">
  <p>
    The anchor positioning API has quite a lot of features, but the most
    important ones for this demo are the following:
  </p>

  <ul>
    <li>
      <p>
        <span class="highlight">position-anchor</span> &
        <span class="highlight">anchor-name</span>, which lets us bind one
        element to another (the anchor).
      </p>
    </li>
    <li>
      <p>
        <span class="highlight">anchor()</span>, which lets us access different
        properties of the anchor, and use them in attributes on the bound
        element.
      </p>
    </li>
  </ul>
</Paragraph>

<Paragraph bind:ref={blockRef4} --bg="var(--green)">
  <p>
    First things first; let's set up our radio inputs by creating a label for
    each option, and putting the input elements inside of them. We want to hide
    the original circle indicator, since we'll be using our own custom indicator
    instead, which we'll do by simply applying <span class="highlight"
      >display: none</span
    >
    to the inputs.
  </p>
  <p>
    We'll also need to make an element to be our indicator. For the sake of this
    demo, I've chosen to just make it an empty div.
  </p>
  <p>With this in place, our HTML should look something like this:</p>
</Paragraph>

<Paragraph bind:ref={blockRef5} scrollable={true} --bg="var(--blue)">
  <pre>
&#x3C;span&#x3E;What's your favourite color?&#x3C;/span&#x3E;
&#x3C;div class=&#x22;radio-container&#x22;&#x3E;
  &#x3C;label for=&#x22;green&#x22;&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;demo1&#x22; id=&#x22;green&#x22; checked /&#x3E;
    Green
  &#x3C;/label&#x3E;
  &#x3C;label for=&#x22;blue&#x22;&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;demo1&#x22; id=&#x22;blue&#x22; /&#x3E;
    Blue
  &#x3C;/label&#x3E;
  &#x3C;label for=&#x22;yellow&#x22;&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;demo1&#x22; id=&#x22;yellow&#x22; /&#x3E;
    Yellow
  &#x3C;/label&#x3E;
  &#x3C;div class=&#x22;highlight&#x22;&#x3E;&#x3C;/div&#x3E;
&#x3C;/div&#x3E;</pre>
</Paragraph>

<Paragraph bind:ref={blockRef6} --bg="var(--green)">
  <p>While our CSS should look something like this:</p>
</Paragraph>

<Paragraph bind:ref={blockRef7} scrollable={true} --bg="var(--blue)">
  <pre>
span {"{"}
  margin-bottom: 1.2rem;
{"}"}

.radio-container {"{"}
  display: flex;
  gap: 1rem;
{"}"}

label, span {"{"}
  cursor: pointer;
{"}"}

input {"{"}
  display: none;
{"}"}</pre>
</Paragraph>

<Paragraph bind:ref={blockRef8} --bg="var(--yellow)">
  <p>
    This gives us some nice basic styling to build upon, but you'll notice that
    nothing happens yet when we click on the radio inputs:
  </p>
</Paragraph>

<AnchorDemo2 bind:ref={blockRef9} />

<Paragraph bind:ref={blockRef10} --bg="var(--green)">
  <p>
    To make it interactive, we'll now be using the anchor positioning API to
    anchor the position of our indicator element to the position of whichever
    radio input is currently checked.
  </p>
  <p>
    The first step is establishing a link between the indicator element and the
    checked radio input, which is actually very simple.
  </p>
  <p>
    First, we add the <span class="highlight">position-anchor</span> attribute
    to the indicator element. This tells our indicator to bind to whatever
    element we specify. Do note that this needs to be a
    <a
      class="highlight"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/dashed-ident"
      >{"<dashed-indent>"}</a
    >, which you've probably seen before when using custom properties. Something
    like <span class="highlight">--my-anchor</span> should work for now.
  </p>
  <p>
    Next, we add the <span class="highlight">anchor-name</span> attribute to
    whatever input is currently checked by utilising the
    <span class="highlight">:checked</span> selector. We'll want to set this one
    to <span class="highlight">--my-anchor</span> also.
  </p>
</Paragraph>

<Paragraph bind:ref={blockRef11} --bg="var(--yellow)">
  <p>
    Now that our elements are linked, we can use the <span class="highlight"
      >anchor()</span
    > function to access the checked radio input's position.
  </p>
  <p>
    We'll simply have to add the <span class="highlight"
      >position: absolute</span
    > to our indicator element, and
  </p>
</Paragraph>

<style>
  a,
  p,
  h1,
  pre {
    font-size: 1rem;
    color: #ffffff;
    mix-blend-mode: difference;
  }

  span {
    display: inline;
    width: fit-content;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .back-button {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 120px;
    width: max(200px, 20vw);
    background-color: var(--green);
    margin-left: 5vw;
    margin-top: 5vh;
    opacity: 0;
  }

  .title {
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 8vh;
    left: 13vw;
    background-color: var(--red);
    opacity: 0;
  }

  h1 {
    font-size: 1rem;
  }

  .highlight {
    background-color: var(--red);
  }
</style>
