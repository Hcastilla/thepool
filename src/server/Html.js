export default (obj) => {
  return(
    `
      <html>
        <head>
          <title>${obj.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="/static/css/bundle.css" async>
          <script> window.initialData = ${JSON.stringify(obj.initialData)}</script>
        </head>

        <body>
          <div id="root">${obj.body}</div>

          <script src="/static/js/bundle.js" async ></script>
        </body>
      </html>
    `
  )
}