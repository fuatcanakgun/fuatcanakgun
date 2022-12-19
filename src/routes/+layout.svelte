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
    <title>fuatcanakgun.dev</title>
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
    :global(body) {
        font-family: 'Ubuntu', sans-serif;
        box-sizing: border-box;
        color: #280004;
        margin: 0;
        padding: 0;
    }

    img {
        width: 12%;
        border-radius: 50%;
        margin: 0.5rem;
        margin-right: 3rem;
        max-width: 100px;
    }

    header {
        display: flex;
        justify-content: space-between;
        background: #14686e;
    }

    nav {
        display: flex;
        align-items: center;
    }

    a {
        font-size: 24px;
        font-weight: 700;
        text-decoration: none;
        margin-right: 2rem;
        color: #280004;
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

    @media screen and (max-width: 750px) {
        header {
            width: 100vmax;
            min-width: 615px;
        }

        a {
            font-size: 20px;
            margin-right: 2rem;
        }

        img {
            width: 8%;
            margin-right: 0.5rem;
        }

    }
</style>