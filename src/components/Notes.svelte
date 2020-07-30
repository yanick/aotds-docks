  <aside transition:fly={{x: -800, opacity: 1}}>
    <div>
      <input type="button" class="button small red" value="close"
        on:click={close}/>
    </div>
    <h3>welcome to the docks</h3>

    <p>
      This app is a ship builder for the game
      <a href="https://shop.groundzerogames.co.uk/rules.html">Full Thrust</a>
      .
    </p>

    <p>
      The app, beside any exception mentioned here, is trying to follow the
      <a href="http://members.ozemail.com.au/~laranzu/fullthrust/rules/">
        Cross Dimensions rules
      </a>
      as closely as possible.
    </p>

    <p>
      Written by
      <a href="https://twitter.com/yenzie">Yanick Champoux</a>
      . Code available on
      <a href="https://github.com/yanick/aotds-shipyard">Github</a>
    </p>
  </aside>

  <script>
    import { fly } from 'svelte/transition';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    const close = () => dispatch('close');
  </script>

<style>
  aside {
    background-color: rgb(254, 218, 184);
    position: absolute;
    height: 20em;
    max-width: 50%;
    z-index: 200;

    padding: 1em;
    border: 3px solid var(--indigo-dye);
    border-radius: 1em;
    left: 0px;
    border-left: 0px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    top: 6em;
    font-size: var(--font-scale-11);
  }

  h3 {
    text-align: center;
    margin: 0px;
  }
  div {
  text-align: right;
  }
</style>
