<script lang="ts">
    import '$lib/assets/oldcss/main.css';
    const thumb1 = '/images/thumb1.png'
    const thumb2 = '/images/thumb2.png'
    const thumb3 = '/images/thumb3.png'
    const thumb4 = '/images/thumb4.png'
    const thumb5 = '/images/thumb5.png'
    const banner = '/images/banner1.png'
</script>

<svelte:head>
    <title>RHDR Official Wiki</title>
</svelte:head>

<main>
    <header class="hero">
    <div class="hero-overlay"></div>
    <a href="#"><img id="hero-img" src="images/Banner1.png" alt="Banner" /></a>
    <div class="hero-content">
        <div class="hero-left">
        <h1>RHDR Official Wiki</h1>
        <p>Take charge of a hydroelectric power plant, manage turbines, regulate water flow, monitor systems, and respond to emergencies, all while keeping the grid stable and safe.</p>
        </div>
        <div class="hero-right">      
        <h2>Latest Wiki Update</h2>
        <ul>
            <li>Added Start Up Guide</li>
            <li>Temp remove annunciator page</li>
            <li>Ranks and points polished</li>
            <li>Next on todo list: </li>
            <li>Finish Annunciator page</li>
        </ul>
        </div>
    </div>
    </header>

    <div class="container">

    <div class="search-wrapper">
        <label for="page-search">What are you looking for?</label>
        <input type="text" id="page-search" placeholder="Search pages..." autocomplete="off">
    </div>

    <div class="cards-wrapper">
        <div class="cards" id="cards-container">
        <div class="card">
            <a href="startUpGuide.html"><img src={thumb1} alt="Start Up Guide"></a>
            <a href="#">Start Up Guide</a>
        </div>
        <div class="card">
            <a href=""><img src={thumb2} alt="Panel Guide"></a>
            <a href="">Panel Guide (DISABLED)</a>
        </div>
        <div class="card">
            <a href="Annunciator_Guide.html"><img src={thumb5} alt="Annunciator Guide"></a>
            <a href="Annunciator_Guide.html">Annunciator Guide (Temp Disabled In Progress)</a>
        </div>
        <div class="card">
            <a href="Ranks_And_Points.html"><img src={thumb3} alt="Ranks & Points"></a>
            <a href="Ranks_And_Points.html">Ranks & Points</a>
        </div>
        <div class="card">
            <a href="#"><img src={thumb4} alt="Credits"></a>
            <a href="#">Credits (DISABLED)</a>
        </div>
        <div class="card">
            <a href="#"></a>
        </div>
        </div>
    </div>

    </div>

    <footer>
    <div class="footer-content">
        <p>Licensed Under Creative Commons Attribution Share Alike 4.0 International</p>
        <div class="footer-buttons">
        <a href="https://discord.gg/nUVyCrZCnU" target="_blank"><button>Discord</button></a>
        <a href="https://www.roblox.com/games/18319297875/Hydro-electric-Simulator" target="_blank"><button>Play on Roblox</button></a>
        </div>
    </div>
    </footer>

    <script>src="/js/main.js"</script>
</main>
