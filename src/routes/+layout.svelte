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

<footer>
  <p>
    &copy; 2023 Surviving Ourselves: A Work of Fiction - The Harsh Reality of
    Two Brothers on the Run in 2000s Austin
  </p>
</footer>

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

  footer {
    padding: 1rem;
    background-color: #1c1b1b;
    text-align: center;
  }
</style>
