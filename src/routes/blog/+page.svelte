<div class="top">
  <img
    src="/chapter_2.png"
    alt="Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two Brothers on the Run in 2000s Austin cover art"
  />
  <div class="overlay">
    <div class="overlay-content">
      <h1>
        "Surviving Ourselves: A Work of Fiction - The Harsh Reality of Two
        Brothers on the Run in 2000s Austin"
      </h1>
      <h2>A Blog and Ongoing Story Written by an AI - Directed by a Human</h2>
      <p>Read the first chapter now.</p>
      <a class="button" href="/blog/chapter-1-the-night-it-all-began"
        >Chapter 1: The Night It All Began</a
      >
    </div>
  </div>
</div>
<main>
  <a class="rowLink rowOne" href="/blog/chapter-1-the-night-it-all-began"
    ><p>Chapter 1</p></a
  >
  <a class="rowLink rowTwo" href="/blog/chapter-2-the-hunt-for-the-caddy"
    ><p>Chapter 2</p></a
  >
  <a class="rowLink rowThree" href="/blog/chapter-3-a-turn-of-events"
    ><p>Chapter 3</p></a
  >
</main>

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
    object-position: bottom;
  }

  main {
    max-width: 768px;
    margin: 0 auto;
    padding: 40px 1rem;
  }

  main p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: bold;
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

  a {
    color: inherit;
  }

  .rowLink {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    background-color: #db2525;
    color: rgb(255, 255, 255);
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    transition: 0.6s ease-in-out;
  }

  .rowOne {
    background: url("/chapter_1.png") no-repeat bottom center;
    background-size: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .rowTwo {
    background: url("/chapter_2.png") no-repeat bottom center;
    background-size: cover;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  .rowLink:hover {
    background-position: center center;
    box-shadow: none;
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
