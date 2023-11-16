
import { createContext,useContext } from "react";
import { useEffect,useState } from "react";

const AlbumContext=createContext();

const useValue=()=>{
const value=useContext(AlbumContext);
return value;
}



const simulateApiCall = (method, url, data, callback) => {
  setTimeout(() => {
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(callback)
      .catch((error) => console.error(`Error in ${method} request:`, error));
  }, 1000); 
};


const AlbumsContext=({children})=>{
    const [albums, setAlbums] = useState([]);



    //===================================================rendering the data from api=======================
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
          .then(response => response.json())
          .then(data => {
            setAlbums(data); // Update the state with the fetched data
          })
          .catch(error => {
            console.error('Error fetching albums:', error);
          });
      }, []);

      //==========================Remove an Album============================
      function removeAlbum(id) {

          //======================================Dummy api call===================================================
    simulateApiCall('DELETE', `https://jsonplaceholder.typicode.com/albums/${id}`, null, () => {
      // setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
      // alert("Album Removed from the List");
    });

        setAlbums(prevAlbums => prevAlbums.filter(album => album.id !== id));
        alert("Album Removed from the List");
      }

//==================  Add a new Album
      function addNewAlbum(title, userId,id) {

         //======================================Dummy api call===================================================
    simulateApiCall('POST', 'https://jsonplaceholder.typicode.com/users', () => {
      //  setAlbums((prevAlbums) =>
      //   prevAlbums.map((album) => (album.id === id ? { ...album, name, email } : album))
      // );
      // alert("UPDATED SUCCESSFULLY");
    });

        // const newAlbum = ;
        setAlbums(prevAlbums => [...prevAlbums, {
          userId,
          id,
          title,
        }]);
        alert("New Album Added to the list")
      }
//===================================Updating the albums
      function updateAlbum(title, userId, id) {

           //======================================Dummy api call===================================================
    simulateApiCall('PUT', `https://jsonplaceholder.typicode.com/users/${id}`, () => {
      //     setAlbums((prevAlbums) =>
      //   prevAlbums.map((album) => (album.id === id ? { ...album, name, email } : album))
      // );
      // alert("UPDATED SUCCESSFULLY");
        });

        setAlbums(prevAlbums => {
          return prevAlbums.map(album => {
            if (album.id === id) {
              // Update title and userId if the id matches
              alert("UPDATED SUCCESSFULLY")
              return { ...album, title, userId };
            }
            return album;
          });
        });
      }



    
    return(
        <AlbumContext.Provider value={{
          albums,
          removeAlbum,
          addNewAlbum,
          updateAlbum,
          }}>
            {children}
        </AlbumContext.Provider>
    )
}

export {useValue};
export default AlbumsContext;