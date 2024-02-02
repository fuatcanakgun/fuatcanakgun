<script>
  /** @type {import('./$types').PageData} */
  export let data;
  let pdfUrl = `/${data.docNo}.pdf`; // adjust the path based on your actual structure
</script>

<div>
  <iframe src={pdfUrl} title={data.docNo}></iframe>
</div>

<style>
  div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
</style>
