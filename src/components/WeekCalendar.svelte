<script>
  const day = new Date().getDate() - 1;
  const week = Math.floor(day / 7) + 1;
  const dayOfWeek = day % 7;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = days[dayOfWeek];
</script>

<div class="mini-week-calendar">
  <small>TODAY</small>
  <div class="mini-week-calendar__days">
    {#each days as day}
      {#if day === today}
        <div class="mini-week-calendar__day mini-week-calendar__day--today">
          {day}
        </div>
      {:else}
        <div class="mini-week-calendar__day">{day}</div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .mini-week-calendar {
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 0.9rem;
    margin: 0 auto;
    background-color: #1c1b1b;
    padding: 20px;
    border-radius: 10px;
    /* create inner border  */
    box-shadow: inset 0 0 0 1px #db2525,
      /* create outer border */ 0 0 0 1px #db2525;
  }

  .mini-week-calendar__days {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  .mini-week-calendar__day {
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 0.8rem;
    background-color: #db2525;
    color: white;
    border-radius: 10px;
  }

  .mini-week-calendar__day--today {
    background-color: #ffffff;
    color: #1c1b1b;
    border: 2px solid #db2525;
  }
</style>
