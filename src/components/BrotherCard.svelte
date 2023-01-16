<script>
  /**
   * @typedef {Object} Brother
   * @property {string} name - The name of the brother.
   * @property {number} age - The age of the brother.
   * @property {Object} crimeStats - An object containing information about the brother's criminal history.
   * @property {string} image - The URL of the brother's mugshot.
   * @property {string} timeServed - The amount of time the brother has served in prison.
   */
  export let brother /** @type {Brother} */;

  const { name, age, crimeStats, image, timeServed } = brother;
</script>

<div class="brother-card">
  <img src={image} alt={name + " mugshot"} />
  <div class="content">
    <h2>{name}</h2>
    <p>Age: {age}</p>
    <p>Crime Stats:</p>
    <ul>
      {#each crimeStats as crimeStat}
        <li>{crimeStat.crime}: {crimeStat.count}</li>
      {/each}
    </ul>
    <p>Time Served: {timeServed}</p>
  </div>
</div>

<style>
  .brother-card {
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    background-color: #1c1b1b;
    padding: 40px;
    border-radius: 10px;
    gap: 16px;
    /* create inner border  */
    box-shadow: inset 0 0 0 5px #db2525,
      /* create outer border */ 0 0 0 5px #db2525;
  }
  img {
    width: 40px;
    height: 40px;
  }
  .content {
    width: fit-content;
  }
  p {
    font-size: 1.5rem;
    margin: 0;
  }
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  ul {
    list-style-type: none;
    margin: 0;
  }

  li {
    font-size: 1.5rem;
  }
</style>
