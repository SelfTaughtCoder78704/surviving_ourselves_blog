<script>
  import BrotherCard from "../components/BrotherCard.svelte";

  let showAlex = false;
  let showJake = false;

  const alex = {
    name: "Alex",
    age: 16,
    crimeStats: [
      { crime: "Assault", count: 3 },
      { crime: "Burglary", count: 2 },
      { crime: "Theft", count: 1 },
      { crime: "Unauthorized Use of a Motor Vehicle", count: 1 },
    ],
    image: "/lighter.png",
    timeServed: "18 months",
  };

  const jake = {
    name: "Jake",
    age: 16,
    crimeStats: [
      { crime: "Assault", count: 2 },
      { crime: "Burglary", count: 1 },
      { crime: "Theft", count: 1 },
    ],
    image: "/darker.png",
    timeServed: "1 year",
  };

  const toggleAlex = () => {
    showAlex = !showAlex;
  };

  const toggleJake = () => {
    showJake = !showJake;
  };
</script>

<div class="top">
  <img
    src="/chapter_1.png"
    alt="Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two Brothers on the Run in 2000s Austin cover art"
  />
  <div class="overlay">
    <div class="overlay-content">
      <h1>
        "Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two
        Brothers on the Run in 2000s Austin"
      </h1>
      <h2>Written by an AI - Directed by a Human</h2>
      <p>Read the first chapter now.</p>
      <a class="button" href="/blog/chapter-1-the-night-it-all-began"
        >Chapter 1: The Night It All Began</a
      >
    </div>
  </div>
</div>
<main>
  <p>
    <span class="big-story"><span class="giant">J</span>oin us</span> as we take
    you on a journey through the gritty streets of
    <a href="https://en.wikipedia.org/wiki/Austin,_Texas">Austin</a>
    in the 2000s,
    <span class="big-story"> in a work of fiction</span>. Follow the story of
    two half-brothers,
    <span class="icon big-story"
      ><img src="/lighter.png" alt="Alex's Icon" on:click={toggleAlex} /> Alex</span
    >
    and
    <span class="icon big-story"
      ><img src="/darker.png" alt="Jake's Icon" on:click={toggleJake} /> Jake.</span
    >
    <br />
    <span class="big-story"
      ><i>Surviving Ourselves</i>. Directed by a human and using AI,</span
    > the story follows the brothers, as they navigate the challenges of living on
    the run and being homeless after serving time in juvenile prison. They struggle
    to make ends meet, often resorting to selling drugs and trading for a place to
    sleep. The brothers will be faced with difficult decisions, unexpected allies,
    and the constant threat of being caught by the law. Our blog offers a raw and
    intimate look at life on the margins, the resilience it takes to survive, and
    the tension of being constantly on the run. Join us as we uncover the harsh realities
    of life on the streets and the human spirit's ability to endure.
  </p>
  <a class="button" href="/blog/chapter-1-the-night-it-all-began"
    >Chapter 1: The Night It All Began</a
  >
</main>

{#if showAlex}
  <div class="modal" on:click={toggleAlex}>
    <div class="closeModal">
      <button on:click={toggleAlex}>X</button>
    </div>
    <BrotherCard brother={alex} />
  </div>
{/if}

{#if showJake}
  <div class="modal" on:click={toggleJake}>
    <div class="closeModal">
      <button on:click={toggleJake}>X</button>
    </div>
    <BrotherCard brother={jake} />
  </div>
{/if}

<style>
  .top {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

  .overlay-content {
    max-width: 768px;
    margin: 0 auto;
    text-align: center;
  }

  .top img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 40px 1rem;
  }

  main p {
    font-size: 1.3rem;
    line-height: 40px;
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .overlay p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
  }
  .button {
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #db2525;
    color: rgb(255, 255, 255);
    text-decoration: none;
    border-radius: 0.25rem;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }

  .big-story {
    font-size: 1.5rem;
    font-weight: bold;
  }
  .icon {
    display: inline-flex;
    align-items: center;
  }

  .icon img {
    width: 20px;
    height: 20px;
    margin-right: 0.5rem;
    border-radius: 100%;
    border: 0.5px solid black;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .icon:hover img {
    transform: scale(1.5);
  }

  .giant {
    font-size: 5rem;
  }

  a {
    color: inherit;
  }
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  .closeModal {
    position: absolute;
    top: 0;
    right: 0;
  }
  .closeModal button {
    padding: 1rem;
    background-color: #db2525;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border: 0.5px solid black;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    .top {
      height: 100vh;
    }
    .overlay {
      padding: 0 1rem;
    }
  }
</style>
