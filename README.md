<h1>Albums List </h1><br/>
<h2>how to start</h2><br/>
<ul>
<li>Download the repo and extract it</li>
<li>Open it in VS Code</li>
<li> Go to terminal and give commands one by one:-<br/>
        <ol>
        <li>&emsp;npm i</li>
         <li>&emsp;npm start</li>
         <p>open the localhost:3000 in browser there you can see your Albums List UI</p>
        </ol>
</li>

</ul><br/>

<h2>Folder Structure</h2> <br/>

Albums List/<br/>
  ├── node_modules/      <br/>
  ├── public/            <br/>
  │   ├── index.html<br/>
  │   ├── favicon.ico<br/>
  │   └── manifest.json<br/>
  ├── src/              <br/>
  │   ├── index.js       <br/>
  │   ├── App.js         <br/>
  │   │   <br/>
  │   ├── Components/       <br/>
  │   │   ├── Album.js <br/>
  │   │   ├── Album.module.css <br/>
  │   │   ├── NavBar.js <br/>
  |   |   |--NavBar.module.css<br/>
  │   ├── App.css                <br/>
  │   │__Index.css                    <br/>
  │   ├── AlbumContext.js    <br/>
  ├── package.json          <br/>
  ├── package-lock.json   <br/>
  ├── README.md        <br/>
  <h2>-----------------------------------------------------------------------------------------</h2>
  
  <h2>Additional Details</h2>
 <ul>
 <h3> Features (No need for extra features, just make the listed features)</h3><br>
    <li>Fetch and show albums from the api - https://jsonplaceholder.typicode.com/albums
</li>
    <li>Add an album, make a POST call to the above url (from where you are fetching) and save the album in react state. (This will be a dummy request, you won’t be able to add albums to the server. But the request is valid and will send you some data. Read the guide).
</li>
    <li>Update the album, make a PUT call to the above url. (Again this is a dummy call).
</li>
    <li>Delete an album, make a DELETE call to the above url. (Again this is a dummy call).
</li>
 </ul>
 <br/>

<h2><a href="https://jsonplaceholder.typicode.com/albums">Api:- https://jsonplaceholder.typicode.com/albums</a></h2>
