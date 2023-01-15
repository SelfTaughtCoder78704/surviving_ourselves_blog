
<nav>
  <div class="logo">
    <a href="/"><img src="/logo.png" alt="Surviving Ourselves Logo" /></a>
  </div>
  <div class="links">
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </div>
</nav>

<main>
  <slot />
</main>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #eee;
  }

  nav a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    display: block;
    margin: 0 20px;
  }

  .logo {
    font-size: 1.5rem;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
