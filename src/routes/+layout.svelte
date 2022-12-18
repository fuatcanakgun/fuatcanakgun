<script>
    import {page} from "$app/stores"

    const pageSections = [
        {title: "Home", path: "/"},
        {title: "Placeholder", path: "/placeholder"},
        {title: "Projects", path: "/projects"},
        {title: "About", path: "/about"},
        {title: "Contact", path: "/contact"}
    ]
</script>

<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<header>
    <img src="favicon.png" alt="Website logo."/>
    <nav>
        {#each pageSections as section}
        <a class:current-page={$page.url.pathname === section.path} href={section.path}>{section.title}</a>
        {/each}
    </nav>
</header>    

<slot />

<style>
    :global(html, body) {
        font-family: 'Ubuntu', sans-serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    img {
        width: 9vmax;
        border-radius: 50%;
        margin: 0.5rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        background: #14686e;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    a {
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
        margin-right: 1.75rem;
    }

    a:visited {
        color: inherit;
    }

    .current-page {
        text-decoration: underline;
        text-decoration-color: #DF4237;
        text-decoration-thickness: 3px;
        text-underline-offset: 3px;
    }
</style>